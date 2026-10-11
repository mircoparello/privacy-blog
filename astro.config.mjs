import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mircoparello.github.io',
  base: '/privacy-blog',
  build: {
    inlineStylesheets: 'auto', // inline small CSS for faster first paint
  },
  compressHTML: true,
});
