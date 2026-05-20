// Removed: caused conflict with @astrojs/sitemap auto-generation
// @astrojs/sitemap emits /sitemap-index.xml and /sitemap-0.xml at build time
export const prerender = false;

export async function GET() {
  return new Response(null, {
    status: 301,
    headers: { Location: '/sitemap-index.xml' },
  });
}
