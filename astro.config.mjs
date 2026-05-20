import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://area51.monster',
  integrations: [sitemap()],
  output: 'static',
  build: {
    assets: '_assets'
  }
});
