import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { SITE, getArticles, formatDate, readingTime, type Article } from '../../lib/site';

/**
 * Social preview images (1200×630), generated at build time:
 * /og/default.png for generic pages and /og/<article-id>.png for each article.
 */

const COLORS = { bg: '#fafaf8', ink: '#0a0a0a', soft: '#555552', faint: '#858580', accent: '#2b3cff' };

const font = (path: string) => readFile(new URL(`../../../node_modules/${path}`, import.meta.url));
const fontsPromise = Promise.all([
  font('@fontsource/schibsted-grotesk/files/schibsted-grotesk-latin-500-normal.woff'),
  font('@fontsource/schibsted-grotesk/files/schibsted-grotesk-latin-700-normal.woff'),
  font('@fontsource/spline-sans-mono/files/spline-sans-mono-latin-500-normal.woff'),
]);

export const getStaticPaths = (async () => {
  const articles = await getArticles();
  return [
    { params: { id: 'default' }, props: { article: undefined } },
    ...articles.map((article) => ({ params: { id: article.id }, props: { article } })),
  ];
}) satisfies GetStaticPaths;

type Node = { type: string; props: Record<string, unknown> & { children?: unknown } };
const h = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

export const GET: APIRoute = async ({ props }) => {
  const article = props.article as Article | undefined;
  const [sans500, sans700, mono500] = await fontsPromise;

  const kicker = article
    ? `${article.data.topic} · ${formatDate(article.data.pubDate)} · ${readingTime(article)}`
    : 'Privacy · Data Protection · Ethics · Digital Rights';
  const title = article ? article.data.title : 'Domande umane su questioni digitali.';
  const titleSize = title.length > 70 ? 60 : 72;

  const tree = h(
    'div',
    {
      width: 1200, height: 630, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      padding: '64px 72px', background: COLORS.bg, color: COLORS.ink, fontFamily: 'Sans',
    },
    [
      h('div', { display: 'flex', alignItems: 'center', gap: 16, fontFamily: 'Mono', fontSize: 24, letterSpacing: 2, textTransform: 'uppercase' }, [
        h('div', { width: 20, height: 20, background: COLORS.accent }),
        h('div', {}, SITE.name),
      ]),
      h('div', { display: 'flex', flexDirection: 'column', gap: 28 }, [
        h('div', { fontFamily: 'Mono', fontSize: 24, color: COLORS.accent }, kicker),
        h('div', { fontSize: titleSize, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }, title),
      ]),
      h('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `2px solid ${COLORS.ink}`, paddingTop: 20, fontFamily: 'Mono', fontSize: 22, color: COLORS.soft }, [
        h('div', {}, SITE.author),
        h('div', {}, 'mircoparello.github.io/privacy-blog'),
      ]),
    ],
  );

  const svg = await satori(tree as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Sans', data: sans500, weight: 500, style: 'normal' },
      { name: 'Sans', data: sans700, weight: 700, style: 'normal' },
      { name: 'Mono', data: mono500, weight: 500, style: 'normal' },
    ],
  });
  const png = new Resvg(svg).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
