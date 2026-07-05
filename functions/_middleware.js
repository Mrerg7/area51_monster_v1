const CANONICAL_HOST = 'area51.monster';

export function onRequest(context) {
  const url = new URL(context.request.url);
  const requested = context.request.url.split('?')[0];
  const query = url.search;

  // Redirect www to apex domain
  if (url.hostname === `www.${CANONICAL_HOST}`) {
    return Response.redirect(`https://${CANONICAL_HOST}${url.pathname}${query}`, 301);
  }

  // Redirect bare origin (no trailing slash) to canonical /
  if (requested === `https://${CANONICAL_HOST}` || requested === `http://${CANONICAL_HOST}`) {
    return Response.redirect(`https://${CANONICAL_HOST}/${query}`, 301);
  }

  // Skip files with extensions (sitemap, verification, assets)
  const hasExtension = /\.[a-zA-Z0-9]+$/.test(url.pathname);
  if (!hasExtension && !url.pathname.endsWith('/')) {
    return Response.redirect(`https://${CANONICAL_HOST}${url.pathname}/${query}`, 301);
  }

  return context.next();
}
