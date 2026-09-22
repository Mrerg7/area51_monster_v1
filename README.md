# area51.monster

**Area 51 domain & narrative IP for sale** — alien spacecraft storage, subterranean tunnels to the Pacific, and a development-ready film/series concept.

Live site: **[https://area51.monster/](https://area51.monster/)**

## What this is

An Astro static site on Cloudflare Pages marketing a premium domain (`area51.monster`) plus an accompanying classified-mythology IP package (screenplay concept, series framework, lore documentation).

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Homepage — domain pitch + dossier index |
| `/story/` | The Excavation Story (long-form lore) |
| `/film-concept/` | Film & series development package |
| `/acquisition/` | Domain / IP sale details and process |
| `/faq/` | Acquisition FAQ (FAQPage schema) |

## Stack

- **Framework:** Astro 4 (static output, `trailingSlash: 'always'`)
- **Hosting:** Cloudflare Pages (edge)
- **CDN:** Cloudflare Images (`imagedelivery.net`)
- **SEO:** per-page titles/descriptions, canonical URLs, OG + Twitter Cards, JSON-LD `@graph` (WebSite, Organization, WebPage, BreadcrumbList, FAQPage, Product, CreativeWork), `robots` meta, XML sitemap (`@astrojs/sitemap`), `robots.txt`, `llms.txt`
- **Technical:** trailing-slash + www canonicalization middleware (`functions/_middleware.js`), `_redirects`, security headers (`public/_headers`)
- **CTA:** `mailto:sales@desertrich.com`

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

Or use the bundled sync script (pull → commit → push → build → deploy):

```bash
./sync.sh
```

## Domain

area51.monster — DNS points to Cloudflare Pages.

## Acquisition Contact

sales@desertrich.com — [https://area51.monster/acquisition/](https://area51.monster/acquisition/)
