/**
 * The place pages without a full listing (scripts/export-place-pages.tsx), the live trip and collection links
 * (src/links-api.js, src/link-page.js), and a pass-through to GitHub Pages for everything else, so every other
 * page, the AASA file and the site's CSS and scripts keep coming from the one site.
 *
 * - With an R2 bucket bound as PLACES (wrangler.jsonc), the pages are its objects `places/<state>/<slug>/
 *   index.html`: served with GitHub Pages' caching and an ETag, and a slash-less path redirects (301) to its
 *   slash like GitHub Pages. R2 has no file limit.
 * - Without it, the pages are the Worker's static assets, served before this code runs.
 * - /places/_assets/<file>.css is the bucket's copy of the build's CSS, which those pages link.
 * - /api/links/* is the links API; /trip/<id> and /collection/<id> (12 letters or digits) are a link's page.
 *   Anything else under /trip/ and /collection/ (the old /trip/#<payload> page) passes through.
 *
 * On the site's own domain (the routes in wrangler.jsonc) a fetch of the same request goes to the origin,
 * GitHub Pages, without running the Worker again. On the workers.dev test address it fetches the same path
 * from the site.
 */
import { json, linkKey, linksApi } from "./links-api.js";
import { renderLinkPage } from "./link-page.js";

const SITE = { url: "https://aussiecamps.app", name: "AussieCamps", scheme: "aussiecamps", ogLocale: "en_AU" };
const PAGE = /^\/places\/([a-z0-9-]+)\/([a-z0-9-]+)(\/?)$/;
const LINK_PAGE = /^\/(trip|collection)\/([A-Za-z0-9]{12})(\/?)$/;
const STYLESHEET = /^\/places\/_assets\/([A-Za-z0-9._-]+\.css)$/;

function passThrough(request) {
  const url = new URL(request.url);
  const target = url.origin === SITE.url || url.hostname === `www.${new URL(SITE.url).hostname}` ? request.url : `${SITE.url}${url.pathname}${url.search}`;
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

/** The bucket's copy of the build's CSS, which its pages link (scripts/r2-stylesheets.ts): hashed names, so
 * cached for good. Missing from the bucket, the site's own /assets/ file. */
async function stylesheet(request, bucket, file) {
  if (request.method !== "GET" && request.method !== "HEAD") return null;
  const object = await bucket.get(`places/_assets/${file}`, { onlyIf: request.headers });
  if (!object) return fetch(`${SITE.url}/assets/${file}`, { method: request.method });
  const headers = new Headers({ "content-type": "text/css; charset=utf-8", "cache-control": "public, max-age=31536000, immutable", etag: object.httpEtag });
  if (!("body" in object)) return new Response(null, { status: 304, headers });
  return new Response(request.method === "HEAD" ? null : object.body, { headers });
}

/** Per-IP rate limits (wrangler.jsonc "ratelimits"): writes 30 and reads 300 a minute. A 429, or null. */
function limiter(request, env) {
  const ip = request.headers.get("cf-connecting-ip") ?? "local";
  return async (kind) => {
    const binding = kind === "write" ? env.LINK_WRITES : env.LINK_READS;
    if (!binding) return null;
    const { success } = await binding.limit({ key: ip });
    return success ? null : json({ error: "too many requests" }, 429, { "retry-after": "60" });
  };
}

const matchesTag = (header, etag) => (header ?? "").split(/\s*,\s*/).some((tag) => tag === "*" || tag.replace(/^W\//, "") === etag);

async function linkPage(request, env, kind, id) {
  if (request.method !== "GET" && request.method !== "HEAD") return new Response("Method not allowed", { status: 405, headers: { allow: "GET, HEAD" } });
  const blocked = await limiter(request, env)("read");
  if (blocked) return blocked;
  const [object, shell] = await Promise.all([env.LINKS.get(linkKey(id)), env.PLACES.get("shells/link.html")]);
  if (!shell) {
    await object?.body.cancel();
    return new Response("This page is not available right now.", { status: 503, headers: { "retry-after": "60" } });
  }
  let link = null, status = 404;
  if (object?.customMetadata?.removed === "1") { await object.body.cancel(); status = 410; }
  else if (object) { link = await object.json(); status = 200; }
  // A link always lives at its own kind's path.
  if (link && link.kind !== kind) { await shell.body.cancel(); return Response.redirect(`${new URL(request.url).origin}/${link.kind}/${id}`, 302); }
  const headers = new Headers({ "content-type": "text/html; charset=utf-8", "cache-control": status === 404 ? "no-store" : "public, max-age=60" });
  if (object) {
    headers.set("etag", `"${object.etag}-${shell.etag}"`);
    if (matchesTag(request.headers.get("if-none-match"), headers.get("etag"))) {
      await shell.body.cancel();
      return new Response(null, { status: 304, headers });
    }
  }
  if (request.method === "HEAD") { await shell.body.cancel(); return new Response(null, { status, headers }); }
  const page = await renderLinkPage({ site: SITE, shell, places: env.PLACES, kind, id, link, status });
  return new Response(page.body, { status, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/links/") && env.LINKS) return linksApi(request, env, SITE, url.pathname.slice("/api/links/".length), limiter(request, env));
    const link = LINK_PAGE.exec(url.pathname);
    if (link && env.LINKS && env.PLACES) {
      if (link[3]) return Response.redirect(`${url.origin}/${link[1]}/${link[2]}${url.search}`, 301);
      return linkPage(request, env, link[1], link[2]);
    }
    const css = STYLESHEET.exec(url.pathname);
    if (css && env.PLACES) {
      const response = await stylesheet(request, env.PLACES, css[1]);
      if (response) return response;
    }
    if (env.PLACES) {
      const page = await fromBucket(request, env.PLACES);
      if (page) return page;
    }
    return passThrough(request);
  },
};
