/**
 * Writes the small place pages straight into the static export, after scripts/export-github-pages.mjs.
 *
 * Every place the app lists has a page (Cristian, 14 Nov 2026), so the app can share any place as a link
 * that opens in the app. The full pages (lib/data/places.json) go through the React build and are
 * indexed; the rest, about 19,000 of them (rest areas, dump points, water, toilets, stays, tours,
 * activities, closed and thin places, from lib/data/place-stubs.json), are this plain HTML, a few KB
 * each, so they cost the build and the Pages deploy almost nothing. They are noindex, in no sitemap and
 * never sent to IndexNow (none of those read this data), and carry no analytics.
 *
 *   tsx scripts/build-place-stubs.mjs     (part of `npm run export`; PAGES_DIST writes elsewhere)
 *
 * Each page has the site's look in a little inline CSS, its title, description, canonical and Open Graph
 * tags, the Smart App Banner with `app-argument=<page URL>`, the name, type, photo, key facts, a booking
 * link only on our BookEasy agent link, a Directions link and "Open in app" (lib/open-app.ts).
 */
import assert from "node:assert/strict";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_URL } from "../lib/site.ts";
import { appStoreUrl, smartBannerContent } from "../lib/app-store.ts";
import { appLink, OPEN_APP_LABEL, openAppScript } from "../lib/open-app.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, process.env.PAGES_DIST ?? "pages-dist");
const dataPath = resolve(root, "lib/data/place-stubs.json");
const stubs = existsSync(dataPath) ? JSON.parse(readFileSync(dataPath, "utf8")).places : [];
const SITE_NAME = "AussieCamps";
const SITE_IMAGE = `${SITE_URL}/images/aussiecamps-og-v2.png`;

const escape = (value) => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const roads = { sealed: "Sealed road", unsealed: "Unsealed road", mixed: "Sealed and unsealed roads" };
const vehicles = { "2wd": "2WD", "4wd": "4WD", "high-clearance-4wd": "High-clearance 4WD", "walk-in": "Walk-in only" };
const store = escape(appStoreUrl({ placement: "place" }));

/** The state directory pages that exist (full pages only), so a small page links its state when it can. */
const statePages = new Set(stubs.map((place) => place.stateSlug).filter((slug) => existsSync(resolve(output, "places", slug, "index.html"))));

const css = `:root{--ink:#172012;--deep:#1e2b18;--fern:#49642f;--cream:#f3f3ef;--soft:#e5e7e1;--muted:#62675f;--line:rgba(30,43,24,.15);--btn:#1e2b18;--btn-fg:#fff}
@media (prefers-color-scheme:dark){:root{--ink:#eef1ea;--deep:#0d130b;--fern:#b5c985;--cream:#111410;--soft:#232820;--muted:#a5aca1;--line:rgba(255,255,255,.14);--btn:#a6bd68;--btn-fg:#10140e}}
*{box-sizing:border-box}html{color-scheme:light dark}body{margin:0;background:var(--cream);color:var(--ink);font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif}
a{color:inherit}.top{max-width:820px;margin:0 auto;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px}
.brand{display:flex;align-items:center;gap:9px;font-weight:750;text-decoration:none;letter-spacing:-.01em}.brand img{border-radius:7px}
main{max-width:820px;margin:0 auto;padding:28px 20px 70px}.crumbs{margin:0;color:var(--muted);font-size:13px;font-weight:600}.crumbs a{text-decoration:none}
h1{margin:10px 0 6px;font-size:clamp(32px,6vw,48px);line-height:1.06;letter-spacing:-.03em}.type{margin:0 0 22px;color:var(--muted)}
.photo{width:100%;max-height:420px;display:block;object-fit:cover;background:var(--soft);margin-bottom:22px}
.actions{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:26px}.btn{height:46px;padding:0 18px;border-radius:14px;background:var(--btn);color:var(--btn-fg);display:inline-flex;align-items:center;font-size:14px;font-weight:700;text-decoration:none}
.btn.alt{background:var(--soft);color:var(--ink)}.top .btn{height:38px;font-size:13px;border-radius:12px}
h2{margin:30px 0 10px;font-size:22px;letter-spacing:-.015em}p{margin:0 0 14px}
dl{margin:0;display:grid;grid-template-columns:max-content 1fr;gap:8px 18px;border-top:1px solid var(--line);padding-top:16px}dt{color:var(--muted)}dd{margin:0;font-weight:600}
ul{margin:0;padding-left:20px}.note{margin-top:30px;color:var(--muted);font-size:12px}
footer{max-width:820px;margin:0 auto;padding:22px 20px 40px;border-top:1px solid var(--line);color:var(--muted);font-size:13px;display:flex;flex-wrap:wrap;gap:16px}footer a{text-decoration:none}`;

function facts(place) {
  return [
    ["Fees", place.fee],
    ["Dogs", place.pets === 1 ? "Allowed" : place.pets === 0 ? "Not allowed" : null],
    ["Sites", place.sites],
    ["Vehicle length", place.maxVehicleLength ? `Up to ${place.maxVehicleLength} m` : null],
    ["Access", [roads[place.road], vehicles[place.vehicle]].filter(Boolean).join(", ") || null],
    ["Check-in", place.checkIn ? `From ${place.checkIn}` : null],
    ["Check-out", place.checkOut ? `By ${place.checkOut}` : null],
  ].filter(([, value]) => value !== null && value !== undefined && value !== "");
}

export function stubHtml(place) {
  const path = `/places/${place.stateSlug}/${place.slug}/`;
  const url = `${SITE_URL}${path}`;
  const where = [place.locality, place.stateName].filter(Boolean).join(", ");
  const type = `${place.typeName}${place.closed ? " (closed)" : ""}`;
  const title = `${place.name}: ${place.typeName.toLowerCase()} in ${where}`;
  const known = facts(place);
  const description = place.description
    ?? `${place.name} is ${/^[aeiou]/i.test(place.typeName) ? "an" : "a"} ${place.typeName.toLowerCase()} in ${where}${known.length ? `. ${known.slice(0, 3).map(([label, value]) => `${label}: ${String(value).toLowerCase()}`).join(". ")}` : ""}.`;
  const openApp = escape(appLink(path));
  const directions = escape(`https://maps.apple.com/?daddr=${place.lat},${place.lng}&q=${encodeURIComponent(place.name)}`);
  return `<!doctype html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(title)} | ${SITE_NAME}</title>
<meta name="description" content="${escape(description.slice(0, 300))}">
<link rel="canonical" href="${url}">
<meta name="robots" content="noindex, follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE_NAME}">
<meta property="og:title" content="${escape(title)}">
<meta property="og:description" content="${escape(description.slice(0, 300))}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${escape(place.photo ?? SITE_IMAGE)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="apple-itunes-app" content="${escape(smartBannerContent("en", url))}">
<link rel="icon" href="/favicon.ico">
<style>${css}</style>
</head>
<body>
<header class="top"><a class="brand" href="/"><img src="/images/aussiecamps-app-icon.png" alt="" width="28" height="28">${SITE_NAME}</a><a class="btn" href="${store}" data-cta="place" data-open-app="${openApp}">${OPEN_APP_LABEL}</a></header>
<main data-page-kind="place-stub" data-locale="en">
<p class="crumbs"><a href="/places/">Places</a> / ${statePages.has(place.stateSlug) ? `<a href="/places/${place.stateSlug}/">${escape(place.stateName)}</a>` : escape(place.stateName)}</p>
<h1>${escape(place.name)}</h1>
<p class="type">${escape(type)}${place.locality ? ` · ${escape(place.locality)}` : ""}</p>
${place.photo ? `<img class="photo" src="${escape(place.photo)}" alt="${escape(place.name)}" referrerpolicy="no-referrer" decoding="async" onerror="this.remove()">\n` : ""}<div class="actions"><a class="btn" href="${store}" data-cta="place" data-open-app="${openApp}">${OPEN_APP_LABEL}</a><a class="btn alt" href="${directions}" rel="nofollow noopener" target="_blank">Directions</a>${place.booking ? `<a class="btn alt" href="${escape(place.booking)}" rel="sponsored nofollow noopener" target="_blank">Book</a>` : ""}</div>
${place.description ? `<p>${escape(place.description)}</p>\n` : ""}${known.length ? `<dl>${known.map(([label, value]) => `<dt>${label}</dt><dd>${escape(value)}</dd>`).join("")}</dl>\n` : ""}${place.amenities.length ? `<h2>Facilities</h2><ul>${place.amenities.map((name) => `<li>${escape(name)}</li>`).join("")}</ul>\n` : ""}${place.credit ? `<p class="note">Source: ${escape(place.credit)}. Check conditions before you go.</p>\n` : ""}</main>
<footer><a href="/">${SITE_NAME}</a><a href="/places/">Places</a><a href="/guides/">Guides</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></footer>
<script data-static-tools>${openAppScript}</script>
</body>
</html>
`;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  assert.ok(existsSync(output), `${output} does not exist: run the export first`);
  // A quick partial export (PAGES_ONLY, scripts/export-github-pages.mjs) gets them only when it asked for /places.
  const only = process.env.PAGES_ONLY?.split(",").filter(Boolean);
  if (only && !only.some((prefix) => prefix.startsWith("/places"))) { console.log("Small place pages: skipped (PAGES_ONLY)."); process.exit(0); }
  let bytes = 0;
  for (const place of stubs) {
    const target = resolve(output, "places", place.stateSlug, place.slug, "index.html");
    assert.ok(!existsSync(target), `/places/${place.stateSlug}/${place.slug}/ already has a full page`);
    mkdirSync(dirname(target), { recursive: true });
    const html = stubHtml(place);
    writeFileSync(target, html);
    bytes += Buffer.byteLength(html);
  }
  console.log(`Wrote ${stubs.length} small place pages (${(bytes / 1048576).toFixed(1)} MB, ${stubs.length ? Math.round(bytes / stubs.length / 1024 * 10) / 10 : 0} KB each on average).`);
}
