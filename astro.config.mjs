import { defineConfig, fontProviders } from 'astro/config';

// Fonts are read from the installed @fontsource-variable packages and
// self-hosted in the build: visitors never contact a third-party font CDN.
const LATIN = [
  'U+0000-00FF', 'U+0131', 'U+0152-0153', 'U+02BB-02BC', 'U+02C6', 'U+02DA', 'U+02DC', 'U+0304',
  'U+0308', 'U+0329', 'U+2000-206F', 'U+20AC', 'U+2122', 'U+2191', 'U+2193', 'U+2212', 'U+2215',
  'U+FEFF', 'U+FFFD',
];
const LATIN_EXT = [
  'U+0100-02BA', 'U+02BD-02C5', 'U+02C7-02CC', 'U+02CE-02D7', 'U+02DD-02FF', 'U+0304', 'U+0308',
  'U+0329', 'U+1D00-1DBF', 'U+1E00-1E9F', 'U+1EF2-1EFF', 'U+2020', 'U+20A0-20AB', 'U+20AD-20C0',
  'U+2113', 'U+2C60-2C7F', 'U+A720-A7FF',
];

/**
 * Builds a local variable-font family from a @fontsource-variable package.
 * `axis` is the file flavour (e.g. "wght", or "opsz" for weight + optical size).
 */
const fontsource = ({ pkg, file, name, cssVariable, fallbacks, axis = 'wght', styles = ['normal'] }) => ({
  provider: fontProviders.local(),
  name,
  cssVariable,
  fallbacks,
  options: {
    variants: styles.flatMap((style) => [
      { src: [`./node_modules/${pkg}/files/${file}-latin-${axis}-${style}.woff2`], weight: '100 900', style, unicodeRange: LATIN },
      { src: [`./node_modules/${pkg}/files/${file}-latin-ext-${axis}-${style}.woff2`], weight: '100 900', style, unicodeRange: LATIN_EXT },
    ]),
  },
});

export default defineConfig({
  site: 'https://mircoparello.github.io',
  base: '/privacy-blog',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  fonts: [
    fontsource({
      pkg: '@fontsource-variable/schibsted-grotesk', file: 'schibsted-grotesk', name: 'Schibsted Grotesk',
      cssVariable: '--font-sans', fallbacks: ['system-ui', 'sans-serif'],
    }),
    fontsource({
      pkg: '@fontsource-variable/spline-sans-mono', file: 'spline-sans-mono', name: 'Spline Sans Mono',
      cssVariable: '--font-mono', fallbacks: ['ui-monospace', 'monospace'],
    }),
    fontsource({
      pkg: '@fontsource-variable/literata', file: 'literata', name: 'Literata',
      cssVariable: '--font-serif', fallbacks: ['Georgia', 'serif'], axis: 'opsz', styles: ['normal', 'italic'],
    }),
  ],
});
