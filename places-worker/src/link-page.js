/**
 * The page of a live link, /trip/<id> or /collection/<id>: the build's shell (shells/link.html in PLACES,
 * app/link-shell/page.tsx) filled in with HTMLRewriter, streaming, from the link (links/<id>.json in LINKS) and
 * the place cards of its stops (cards/<id>.json in PLACES). An unknown link gets the same shell with "This link
 * doesn't exist" (404), a removed one "This link was removed" (410), each with the contact line and Open in app
 * opening the app itself.
 */
import { escapeHtml, mapData, previewLine, rows, statsHtml, usableCard } from "./format.js";

const MAX_CARDS = 100;
const CARD_TTL = 3600;
const HOME_IMAGE = { url: "/images/aussiecamps-og-v2.png", width: 1200, height: 630, type: "image/png" };
/** The head tags the shell's layout writes and this page replaces. */
const REPLACED = ["head title", 'head meta[name="description"]', 'head meta[property^="og:"]', 'head meta[name^="twitter:"]', 'head link[rel="canonical"]', 'head meta[name="robots"]'];

/** One card, through the data centre's cache so repeat views cost no R2 reads (a missing card is cached too).
 * A failed read is no card: the stop shows as a plain row. */
async function card(id, bucket, site, ctx) {
  const name = encodeURIComponent(id);
  const cache = globalThis.caches?.default;
  const key = `${site.url}/__link-cards/${name}.json`;
  try {
    const hit = await cache?.match(key);
    if (hit) return usableCard(await hit.json());
    const object = await bucket.get(`cards/${name}.json`);
    const text = object ? await object.text() : "null";
    const saved = cache?.put(key, new Response(text, { headers: { "content-type": "application/json", "cache-control": `public, max-age=${CARD_TTL}` } }));
    if (saved) ctx?.waitUntil(saved.catch(() => {}));
    return usableCard(JSON.parse(text));
  } catch {
    return null;
  }
}

/** The cards of a link's stops: only ids in the app's place-id format, at most MAX_CARDS of them. */
async function cardsFor(link, bucket, site, ctx) {
  const ids = [...new Set((link.kind === "trip" ? link.s : link.p).map((entry) => entry.id).filter((id) => id && site.placeId.test(id)))].slice(0, MAX_CARDS);
  const found = await Promise.all(ids.map((id) => card(id, bucket, site, ctx)));
  return new Map(ids.flatMap((id, index) => (found[index] ? [[id, found[index]]] : [])));
}

function headTags({ site, title, description, url, image }) {
  const meta = (attr, key, value) => `<meta ${attr}="${key}" content="${escapeHtml(value)}"/>`;
  return [
    `<title>${escapeHtml(title)} | ${escapeHtml(site.name)}</title>`,
    meta("name", "description", description),
    meta("name", "robots", "noindex, follow"),
    // The id in the URL is the link's only key: pages opened from here, and analytics, see just the origin.
    meta("name", "referrer", "strict-origin"),
    url ? `<link rel="canonical" href="${escapeHtml(url)}"/>` : "",
    meta("property", "og:title", title), meta("property", "og:description", description),
    url ? meta("property", "og:url", url) : "",
    meta("property", "og:site_name", site.name), meta("property", "og:type", "website"), meta("property", "og:locale", site.ogLocale),
    meta("property", "og:image", image.url),
    meta("property", "og:image:width", String(image.width)), meta("property", "og:image:height", String(image.height)),
    meta("property", "og:image:type", image.type), meta("property", "og:image:alt", title),
    meta("name", "twitter:card", "summary_large_image"), meta("name", "twitter:title", title), meta("name", "twitter:description", description),
    meta("name", "twitter:image", image.url), meta("name", "twitter:image:alt", title),
  ].join("");
}

/** Renders the page of `link`, or without one the 404 (`status` 404) or 410 page, like /trip/'s own errors: the
 * heading "Shared trip" and the message under it. The caller sets the status and the caching headers. */
export async function renderLinkPage({ site, shell, places, ctx, kind, id, link, status }) {
  const url = `${site.url}/${kind}/${id}`;
  const cards = link ? await cardsFor(link, places, site, ctx) : new Map();
  const title = link ? link.n : status === 410 ? "This link was removed" : "This link doesn't exist";
  const description = link ? previewLine(link) : title;
  // og:image is always the site's own image, as for a shared pin.
  const image = { ...HOME_IMAGE, url: `${site.url}${HOME_IMAGE.url}` };
  const head = headTags({ site, title, description, url, image });
  const appLink = link ? `${site.scheme}://${kind}/${id}` : `${site.scheme}://`;

  let rewriter = new HTMLRewriter();
  for (const selector of REPLACED) rewriter = rewriter.on(selector, { element: (el) => el.remove() });
  rewriter = rewriter
    .on("head", { element: (el) => el.append(head, { html: true }) })
    .on('head meta[name="apple-itunes-app"]', {
      element: (el) => el.setAttribute("content", (el.getAttribute("content") ?? "").replace(/app-argument=[^,]*/, `app-argument=${url}`)),
    })
    .on("a[data-open-app]", { element: (el) => el.setAttribute("data-open-app", appLink) })
    .on("main[data-page-location]", { element: (el) => el.setAttribute("data-page-location", `/${kind}/`) })
    .on('[data-sl="name"]', { element: (el) => el.setInnerContent(link ? title : kind === "trip" ? "Shared trip" : "Shared collection") });
  if (link) {
    const list = rows(link, cards);
    const map = mapData(link, cards);
    rewriter = rewriter
      .on('[data-sl="stats"]', { element: (el) => el.setInnerContent(statsHtml(link), { html: true }) })
      .on('[data-sl="map"]', { element: (el) => el.setAttribute("data-pl-map", map) })
      .on('[data-sl="list"]', { element: (el) => el.setInnerContent(list, { html: true }) });
  } else {
    rewriter = rewriter
      .on('[data-sl="status"]', { element: (el) => el.removeAttribute("hidden") })
      .on('[data-sl="message"]', { element: (el) => el.setInnerContent(title) })
      .on('[data-sl="body"]', { element: (el) => el.setAttribute("hidden", "") });
  }
  return rewriter.transform(new Response(shell.body, { headers: { "content-type": "text/html; charset=utf-8" } }));
}
