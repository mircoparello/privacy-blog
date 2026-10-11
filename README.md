# Privacy Out Loud — Privacy blog

A static personal blog for a data protection professional, built with [Astro](https://astro.build). Articles are written in Markdown. The site ships zero client-side JavaScript by default (only a tiny theme-toggle script and tag-filter script), so article pages load about as fast as HTML can load.

## Stack

- **Astro 4** — static site generator, content collections, zero JS by default
- **Markdown** — articles live in `src/content/articles/`
- **CSS custom properties** — light/dark theme with no flash on load
- **GitHub Actions** — automatic deploy to GitHub Pages on push to `main`

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the built site
