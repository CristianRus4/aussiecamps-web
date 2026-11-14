/**
 * The place pages without a full listing (scripts/export-place-pages.tsx), and a pass-through to GitHub Pages
 * for everything else, so every other page, the AASA file and the site's CSS and scripts keep coming from
 * the one site.
 *
 * - With an R2 bucket bound as PLACES (wrangler.jsonc), the pages are its objects `places/<state>/<slug>/
 *   index.html`: served with GitHub Pages' caching and an ETag, and a slash-less path redirects (301) to its
 *   slash like GitHub Pages. R2 has no file limit.
 * - Without it, the pages are the Worker's static assets, served before this code runs.
 *
 * On the site's own domain (the route <domain>/places/*) a fetch of the same request goes to the origin,
 * GitHub Pages, without running the Worker again. On the workers.dev test address it fetches the same path
 * from the site.
 */
const SITE = "https://aussiecamps.app";
const PAGE = /^\/places\/([a-z0-9-]+)\/([a-z0-9-]+)(\/?)$/;

function passThrough(request) {
  const url = new URL(request.url);
  const target = url.origin === SITE || url.hostname === `www.${new URL(SITE).hostname}` ? request.url : `${SITE}${url.pathname}${url.search}`;
  return fetch(target, { method: request.method, headers: request.headers, body: request.body, redirect: "manual" });
}

async function fromBucket(request, bucket) {
  const url = new URL(request.url);
  const match = PAGE.exec(url.pathname);
  if (!match || (request.method !== "GET" && request.method !== "HEAD")) return null;
  const key = `places/${match[1]}/${match[2]}/index.html`;
  if (!match[3]) return (await bucket.head(key)) ? Response.redirect(`${url.origin}/places/${match[1]}/${match[2]}/${url.search}`, 301) : null;
  const object = await bucket.get(key, { onlyIf: request.headers });
  if (!object) return null;
  const headers = new Headers({ "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=600", etag: object.httpEtag });
  if (!("body" in object)) return new Response(null, { status: 304, headers });
  return new Response(request.method === "HEAD" ? null : object.body, { headers });
}

export default {
  async fetch(request, env) {
    if (env.PLACES) {
      const page = await fromBucket(request, env.PLACES);
      if (page) return page;
    }
    return passThrough(request);
  },
};
