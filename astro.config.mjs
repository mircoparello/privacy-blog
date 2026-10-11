import { defineConfig } from 'astro/config';

// For a USER page (https://username.github.io/) or custom domain, keep base as '/'.
// For a PROJECT page (https://username.github.io/repo-name/), change base to '/repo-name'.
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/',
  build: {
    inlineStylesheets: 'auto', // inline small CSS for faster first paint
  },
  compressHTML: true,
});
