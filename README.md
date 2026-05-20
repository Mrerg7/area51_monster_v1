# area51.monster

Astro static build + Cloudflare Pages global edge deployment.

## Stack
- **Framework:** Astro 4 (static output)
- **Hosting:** Cloudflare Pages (edge)
- **CDN:** Cloudflare Images (`imagedelivery.net`)
- **Meta:** Full OG + Twitter Card + JSON-LD structured data
- **Sitemap:** `@astrojs/sitemap` auto-generation
- **Robots:** `public/robots.txt`
- **CTA:** mailto:sales@desertrich.com

## Setup

```bash
npm install
npm run dev
npm run build
```

## Cloudflare Pages Deploy

1. Connect repo to Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `dist`
4. Node version env var: `NODE_VERSION = 20`

## Cloudflare Images Setup

1. Upload hero image to Cloudflare Images dashboard
2. Copy the `imagedelivery.net/ACCOUNT_HASH/IMAGE_ID/public` URL
3. Replace the placeholder URL in `src/pages/index.astro` hero background div

## Domain
area51.monster — point DNS to Cloudflare Pages via CNAME.

## Acquisition Contact
sales@desertrich.com
