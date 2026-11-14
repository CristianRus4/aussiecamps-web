/**
 * Runs only for requests that are not one of the extra place pages (those are served straight from the
 * static assets, see wrangler.jsonc). It passes them through to GitHub Pages, unchanged, so every other
 * page, the AASA file and the site's CSS and scripts keep coming from the one site.
 *
 * On aussiecamps.app (the route aussiecamps.app/places/*) a fetch of the same request goes to the origin,
 * GitHub Pages, without running the Worker again. On the workers.dev test address it fetches the same path
 * from aussiecamps.app.
 */
const SITE = "https://aussiecamps.app";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.hostname === "aussiecamps.app" || url.hostname === "www.aussiecamps.app" ? request.url : `${SITE}${url.pathname}${url.search}`;
    return fetch(target, { method: request.method, headers: request.headers, body: request.body, redirect: "manual" });
  },
};
