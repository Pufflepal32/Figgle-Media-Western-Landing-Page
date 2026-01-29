import { defineConfig } from 'astro/config';
// import sitemap from '@astrojs/sitemap';
// Note: Sitemap integration can be re-enabled once you verify the build works
// Uncomment the import and add sitemap() to integrations array

export default defineConfig({
  site: 'https://figglemedia.com',
  integrations: [],
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
