// Astro's @astrojs/sitemap integration auto-generates /sitemap-index.xml
// This file is a fallback redirect for legacy crawlers
export async function GET() {
  return new Response(null, {
    status: 301,
    headers: { Location: '/sitemap-index.xml' }
  });
}
