/**
 * The page of a live link, /trip/<id> or /collection/<id>: the build's shell (shells/link.html in PLACES,
 * app/link-shell/page.tsx) filled in with HTMLRewriter, streaming, from the link (links/<id>.json in LINKS) and
 * the place cards of its stops (cards/<id>.json in PLACES). An unknown link gets the same shell with "This link
 * doesn't exist" (404), a removed one "This link was removed" (410).
 */
import { escapeHtml, headerLine, mapData, previewImage, previewLine, rows, usableCard } from "./format.js";

const MAX_CARDS = 300;
const HOME_IMAGE = { url: "/images/aussiecamps-og-v2.png", width: 1200, height: 630, type: "image/png" };
/** The head tags the shell's layout writes and this page replaces. */
const REPLACED = ["head title", 'head meta[name="description"]', 'head meta[property^="og:"]', 'head meta[name^="twitter:"]', 'head link[rel="canonical"]', 'head meta[name="robots"]'];

async function cardsFor(link, bucket) {
  const ids = [...new Set((link.kind === "trip" ? link.s : link.p).map((entry) => entry.id).filter(Boolean))].slice(0, MAX_CARDS);
  const found = await Promise.all(ids.map(async (id) => {
    const object = await bucket.get(`cards/${encodeURIComponent(id)}.json`);
    try { return object ? usableCard(await object.json()) : null; } catch { return null; }
  }));
  return new Map(ids.flatMap((id, index) => (found[index] ? [[id, found[index]]] : [])));
}

function headTags({ site, title, description, url, image }) {
  const meta = (attr, key, value) => `<meta ${attr}="${key}" content="${escapeHtml(value)}"/>`;
  const imageType = image.type ?? (/\.png$/i.test(new URL(image.url).pathname) ? "image/png" : "image/jpeg");
  return [
    `<title>${escapeHtml(title)} | ${escapeHtml(site.name)}</title>`,
    meta("name", "description", description),
    meta("name", "robots", "noindex, follow"),
    url ? `<link rel="canonical" href="${escapeHtml(url)}"/>` : "",
    meta("property", "og:title", title), meta("property", "og:description", description),
    url ? meta("property", "og:url", url) : "",
    meta("property", "og:site_name", site.name), meta("property", "og:type", "website"), meta("property", "og:locale", site.ogLocale),
    meta("property", "og:image", image.url),
    image.width ? meta("property", "og:image:width", String(image.width)) : "", image.height ? meta("property", "og:image:height", String(image.height)) : "",
    meta("property", "og:image:type", imageType), meta("property", "og:image:alt", title),
    meta("name", "twitter:card", "summary_large_image"), meta("name", "twitter:title", title), meta("name", "twitter:description", description),
    meta("name", "twitter:image", image.url), meta("name", "twitter:image:alt", title),
  ].join("");
}

/** Renders the page of `link`, or without one the 404 (`status` 404) or 410 page, like /trip/'s own errors: the
 * heading "Shared trip" and the message under it. The caller sets the status and the caching headers. */
export async function renderLinkPage({ site, shell, places, kind, id, link, status }) {
  const url = `${site.url}/${kind}/${id}`;
  const cards = link ? await cardsFor(link, places) : new Map();
  const title = link ? link.n : status === 410 ? "This link was removed" : "This link doesn't exist";
  const description = link ? previewLine(link) : title;
  const photo = link ? previewImage(link, cards) : "";
  const image = photo ? { url: photo } : { ...HOME_IMAGE, url: `${site.url}${HOME_IMAGE.url}` };
  const head = headTags({ site, title, description, url, image });
  const appLink = `${site.scheme}://${kind}/${id}`;

  let rewriter = new HTMLRewriter();
  for (const selector of REPLACED) rewriter = rewriter.on(selector, { element: (el) => el.remove() });
  rewriter = rewriter
    .on("head", { element: (el) => el.append(head, { html: true }) })
    .on('head meta[name="apple-itunes-app"]', {
      element: (el) => el.setAttribute("content", (el.getAttribute("content") ?? "").replace(/app-argument=[^,]*/, `app-argument=${url}`)),
    })
    .on("a[data-open-app]", { element: (el) => el.setAttribute("data-open-app", appLink) })
    .on('[data-sl="name"]', { element: (el) => el.setInnerContent(link ? title : kind === "trip" ? "Shared trip" : "Shared collection") })
    .on('[data-sl="meta"]', { element: (el) => el.setInnerContent(link ? headerLine(link) : "") });
  if (link) {
    const list = rows(link, cards);
    const map = mapData(link, cards);
    rewriter = rewriter
      .on('[data-sl="map"]', { element: (el) => el.setAttribute("data-pl-map", map) })
      .on('[data-sl="list"]', {
        element: (el) => {
          el.setAttribute("class", `${el.getAttribute("class") ?? ""} ${kind === "trip" ? "sl-numbered" : "sl-dots"}`.trim());
          el.setInnerContent(list, { html: true });
        },
      });
  } else {
    rewriter = rewriter
      .on('[data-sl="status"]', { element: (el) => { el.removeAttribute("hidden"); el.setInnerContent(title); } })
      .on('[data-sl="body"]', { element: (el) => el.setAttribute("hidden", "") });
  }
  return rewriter.transform(new Response(shell.body, { headers: { "content-type": "text/html; charset=utf-8" } }));
}
