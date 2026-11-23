# Privacy Out Loud — Privacy blog

A static personal blog for a data protection professional, built with [Astro](https://astro.build). Articles are written in Markdown. The site ships almost no client-side JavaScript (only a tiny theme toggle and the tag filter on the archive page).

## Stack

- **Astro 7**: static site generator with content collections
- **Markdown**: articles live in `src/content/articles/`
- **Schibsted Grotesk, Spline Sans Mono, Literata**: self-hosted through Astro Fonts, no third-party font CDN
- **CSS custom properties**: light/dark theme that follows the visitor's system by default
- **Open Graph images**: generated at build time for every article (`src/pages/og/`)
- **GitHub Actions**: automatic deploy to GitHub Pages on push to `main`

## Local development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev      # http://localhost:4321/privacy-blog
npm run build    # outputs to ./dist
npm run preview  # preview the built site
```

## Writing an article

Create a new `.md` file in `src/content/articles/`. The file name becomes the URL (`my-article.md` → `/articles/my-article`).

```markdown
---
title: "Article title"
description: "One or two sentences shown under the title and in previews."
pubDate: 2025-03-14
topic: "EU AI Act"
tags: ["AI Act", "GDPR"]
featured: false   # true = shown as "In evidenza" on the home page
---

Article text…

## A section heading

Each `##` heading is numbered (§ 1, § 2…) and listed in the article's table of contents.
```

Reading time is computed automatically from the text.

## Changing the accent colour

Edit `--accent-light` and `--accent-dark` at the top of `src/styles/global.css` (and `COLORS.accent` in `src/pages/og/[id].png.ts` for the social images).
