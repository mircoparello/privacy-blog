import { getCollection, type CollectionEntry } from 'astro:content';

export const SITE = {
  name: 'Privacy Out Loud',
  author: 'Francesca Bucci',
  initials: 'FB',
  email: 'privacyoutloud@gmail.com',
  description:
    'A data protection professional writing about GDPR, the EU AI Act, privacy engineering, and what comes next for digital rights.',
  authorBio:
    'Data protection professional. Writing about GDPR, the EU AI Act, and the frontiers of digital privacy.',
  locale: 'it-IT',
};

export type Article = CollectionEntry<'articles'>;

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefixes an internal path with the configured base (e.g. /privacy-blog). */
export const url = (path = '/') => `${BASE}${path.startsWith('/') ? path : `/${path}`}`;

export const articleUrl = (a: Article) => url(`/articles/${a.id}`);

/** All articles, newest first. */
export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('articles');
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** 14 mar 2025 */
export const formatDate = (d: Date) =>
  d.toLocaleDateString(SITE.locale, { day: 'numeric', month: 'short', year: 'numeric' }).replace('.', '');

/** 14 marzo 2025 */
export const formatDateLong = (d: Date) =>
  d.toLocaleDateString(SITE.locale, { day: 'numeric', month: 'long', year: 'numeric' });

/** 14.03.2025 */
export const formatDateShort = (d: Date) =>
  d.toLocaleDateString(SITE.locale, { day: '2-digit', month: '2-digit', year: 'numeric' }).replaceAll('/', '.');

const WORDS_PER_MINUTE = 200;

/** Reading time in minutes, computed from the Markdown source. */
export function readingMinutes(markdown = ''): number {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ') // code blocks
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> link text
    .replace(/<[^>]+>/g, ' ') // html tags
    .replace(/[#>*_`~|-]/g, ' '); // markdown punctuation
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export const readingTime = (a: Article) => `${readingMinutes(a.body)} min`;
