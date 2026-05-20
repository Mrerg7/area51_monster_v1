import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://area51.monster',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
