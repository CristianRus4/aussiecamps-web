/**
 * Writes the place pages of every place the app lists without a full listing (lib/data/place-stubs.json:
 * rest areas, dump points, water, toilets, stays, tours, activities, closed and thin places) for the
 * Cloudflare Worker that serves them (places-worker/, docs/places-cloudflare.md), after
 * scripts/export-github-pages.mjs. They are not part of the GitHub Pages export.
 *
 * There is one place page template: components/places/place-page.tsx, with lib/places-metadata.ts for its
 * head. The full pages go through the React build; these ~19,000 are rendered by the same component here,
 * server-side, into the shell of an exported full place page (its head, layout scripts, CSS and fonts), so
 * a reader cannot tell them apart except by their content. Only the per-page head tags (title,
 * description, robots, canonical, Open Graph, the Smart App Banner and the hero image preload) are
 * rewritten, from the place's own metadata. They are noindex, in no sitemap and never sent to IndexNow
 * (none of those read this data), except the indexable ones of lib/place-directory.ts: the listings that are on
 * and their places with enough facts are indexable and in the sitemap (lib/data/place-directory.json).
 *
 * It also writes the listings by type (`/places/<state>/<listing>/`, lib/place-directory.ts) with
 * components/places/places-index.tsx, into the shell of an exported state page, the same way: the state
 * page rebuilt here must come out as the exported one.
 *
 *   npm run places:worker      (tsx scripts/export-place-pages.tsx --out worker-dist; PAGES_DIST names the export)
 */
import assert from "node:assert/strict";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import type { Metadata } from "next";
import { PlacePage } from "@/components/places/place-page";
import { PlacesListing, PlacesState } from "@/components/places/places-index";
import { placeListingMetadata, placeMetadata, placeStateMetadata } from "@/lib/places-metadata";
import { directoryStates, indexedWorkerPaths, placeListingPath, placePath, places, placeStatePath, placeStates, stateListings, type Place } from "@/lib/places";
import { isIndexedExtra, isListed, unlisted as unlistedTypes } from "@/lib/place-directory";
import { SITE_URL } from "@/lib/site";
import { smartBannerContent } from "@/lib/app-store";
import { withR2Stylesheets } from "./r2-stylesheets";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, process.env.PAGES_DIST ?? "pages-dist");
const dataPath = resolve(root, "lib/data/place-stubs.json");
// An extra place is noindex unless lib/place-directory.ts makes it indexable (its listing on, enough facts).
const stubs: Place[] = (existsSync(dataPath) ? JSON.parse(readFileSync(dataPath, "utf8")).places as Place[] : []).map((place) => ({ ...place, indexable: isIndexedExtra(place) }));

const escape = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const fileFor = (path: string) => resolve(output, path.slice(1), "index.html");
/** Next.js writes every internal link with its trailing slash (next.config.ts `trailingSlash`); so does this. */
const withSlashes = (html: string) => html.replace(/(href|src)="(\/[^"#?]*?)([#?][^"]*)?"/g, (match, attr: string, path: string, rest = "") => (/\/$|\.[a-z0-9]+$/i.test(path) ? match : `${attr}="${path}/${rest}"`));

/** The head tags that differ from one place page to the next, in the form Next.js writes them. */
function headTags(metadata: Metadata, title: string) {
  const og = metadata.openGraph as { title: string; description: string; url: string; siteName: string; type: string; locale: string; images: { url: string; alt?: string; width?: number; height?: number; type?: string }[] };
  const twitter = metadata.twitter as { card: string; title: string; description: string; images: { url: string; alt?: string; width?: number; height?: number; type?: string }[] };
  const robots = metadata.robots as { index: boolean; follow: boolean; googleBot?: object };
  const meta = (attribute: string, name: string, content: string | number) => `<meta ${attribute}="${name}" content="${escape(String(content))}"/>`;
  return {
    title: `<title>${escape(title)}</title>`,
    description: meta("name", "description", String(metadata.description)),
    robots: robots.index ? undefined : meta("name", "robots", `noindex, ${robots.follow ? "follow" : "nofollow"}`),
    og: [
      meta("property", "og:title", og.title), meta("property", "og:description", og.description), meta("property", "og:url", og.url),
      meta("property", "og:site_name", og.siteName), meta("property", "og:type", og.type), meta("property", "og:locale", og.locale),
      // Next.js writes an Open Graph image's width and height before its type (and the Twitter card's after it).
      ...og.images.flatMap((image) => [meta("property", "og:image", image.url),
        ...(image.width ? [meta("property", "og:image:width", image.width)] : []), ...(image.height ? [meta("property", "og:image:height", image.height)] : []),
        ...(image.type ? [meta("property", "og:image:type", image.type)] : []),
        ...(image.alt ? [meta("property", "og:image:alt", image.alt)] : [])]),
    ].join(""),
    // The same title, description and photo as the Open Graph tags, in the order Next.js writes them.
    twitter: [
      meta("name", "twitter:card", twitter.card), meta("name", "twitter:title", twitter.title), meta("name", "twitter:description", twitter.description),
      ...twitter.images.flatMap((image) => [meta("name", "twitter:image", image.url), ...(image.type ? [meta("name", "twitter:image:type", image.type)] : []),
        ...(image.width ? [meta("name", "twitter:image:width", image.width)] : []), ...(image.height ? [meta("name", "twitter:image:height", image.height)] : []),
        ...(image.alt ? [meta("name", "twitter:image:alt", image.alt)] : [])]),
    ].join(""),
    canonical: `<link rel="canonical" href="${escape(`${SITE_URL}${(metadata.alternates as { canonical: string }).canonical}`)}"/>`,
    // A page without its own banner (a state page) has the layout's (app/layout.tsx).
    banner: meta("name", "apple-itunes-app", (metadata.other as Record<string, string> | undefined)?.["apple-itunes-app"] ?? smartBannerContent("en")),
  };
}

/** The shell: an exported full place page, split around the parts each place fills in. */
export function shell(template: Place) {
  return frameOf(readFileSync(fileFor(placePath(template)), "utf8"), placeMetadata(template), template.photos[0], (html, footer) => {
    // The component's own output ends with its last script after the footer (the shared /places/place.js where
    // the site has it, else the inline "Open in app" script).
    const shared = html.indexOf('src="/places/place.js"', footer);
    return html.indexOf("</script>", shared > 0 ? shared : html.indexOf('closest("a[data-open-app]")', footer)) + "</script>".length;
  });
}

/** The shell of a listing: an exported state page, whose component output ends where the layout's social overlay starts. */
export function listingShell(state: (typeof placeStates)[number]) {
  return frameOf(readFileSync(fileFor(placeStatePath(state)), "utf8"), placeStateMetadata(state), undefined, (html, footer) => html.indexOf('<div class="social-overlay"', footer));
}

/** An exported page split around its per-page head tags and the component's output, from the site header to `bodyEnd`. */
function frameOf(html: string, metadata: Metadata, heroPhoto: string | undefined, bodyEnd: (html: string, footer: number) => number) {
  const fullTitle = html.match(/<title>([^<]*)<\/title>/)![1];
  const suffix = fullTitle.slice(escape(String(metadata.title)).length);
  assert.ok(fullTitle.startsWith(escape(String(metadata.title))), `the template's title does not start with its metadata title: ${fullTitle}`);
  const headEnd = html.indexOf("</head>");
  let head = html.slice(0, headEnd);
  // Take the per-page tags out of the template's head, leaving a marker where each one goes.
  const take = (pattern: RegExp, marker: string) => {
    const matches = head.match(pattern);
    assert.ok(matches?.length, `the template's head has no ${marker} tag`);
    head = head.replace(matches[0], `\u0000${marker}\u0000`);
    for (const extra of matches.slice(1)) head = head.replace(extra, "");
  };
  take(/<title>[^<]*<\/title>/g, "title");
  take(/<meta name="description"[^>]*>/g, "description");
  const indexedRobots = head.match(/<meta name="robots"[^>]*>(?:<meta name="googlebot"[^>]*>)?/)?.[0];
  take(/<meta name="robots"[^>]*>(?:<meta name="googlebot"[^>]*>)?/g, "robots");
  take(/<meta property="og:[^>]*>/g, "og");
  take(/<meta name="twitter:[^>]*>/g, "twitter");
  take(/<link rel="canonical"[^>]*>/g, "canonical");
  take(/<meta name="apple-itunes-app"[^>]*>/g, "banner");
  // The hero photo's preload (React hoists it into <head>); a place without photos has none.
  const hero = heroPhoto && head.match(new RegExp(`<link rel="preload" href="${escape(heroPhoto).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>`));
  if (hero) head = head.replace(hero[0], "\u0000hero\u0000");
  else head = head.replace(/(<link rel="stylesheet")/, "\u0000hero\u0000$1");
  // The component's own output: from the site header to its end.
  const start = html.indexOf('<header class="site-header"', headEnd);
  const end = bodyEnd(html, html.indexOf("</footer>", start));
  assert.ok(start > 0 && end > start, "could not find the page's body in the template");
  return { head, middle: html.slice(headEnd, start), tail: html.slice(end), suffix, indexedRobots: indexedRobots! };
}

export function placePageHtml(place: Place, frame: ReturnType<typeof shell>) {
  return pageHtml(placeMetadata(place), renderToString(createElement(PlacePage, { place })), frame, placePath(place));
}

/** A page from its metadata and the component's markup, in a frame. */
function pageHtml(metadata: Metadata, markup: string, frame: ReturnType<typeof shell>, path: string) {
  const tags = headTags(metadata, `${metadata.title}${frame.suffix}`);
  let body = withSlashes(markup);
  // React puts the hero photo's preload first; it belongs in <head>, where the full pages have it.
  const hoisted = body.match(/^<link rel="preload"[^>]*>/)?.[0] ?? "";
  body = body.slice(hoisted.length);
  const preload = hoisted.replace(/^<link rel="preload" as="image" href="([^"]*)"/, '<link rel="preload" href="$1" as="image"');
  assert.ok(body.startsWith('<header class="site-header"'), `${path}: unexpected markup before the header`);
  const head = frame.head
    .replace("\u0000title\u0000", tags.title).replace("\u0000description\u0000", tags.description)
    .replace("\u0000robots\u0000", tags.robots ?? frame.indexedRobots)
    .replace("\u0000og\u0000", tags.og).replace("\u0000twitter\u0000", tags.twitter).replace("\u0000canonical\u0000", tags.canonical).replace("\u0000banner\u0000", tags.banner)
    .replace("\u0000hero\u0000", preload);
  return `${head}${frame.middle}${body}${frame.tail}`;
}

/** Static asset files per Worker version on the Workers free plan. */
const WORKER_FILE_LIMIT = 20_000;

if (process.argv[1] && resolve(process.argv[1]) === resolve(import.meta.filename)) {
  const only = process.env.PAGES_ONLY?.split(",").filter(Boolean);
  if (only && !only.some((prefix) => prefix.startsWith("/places"))) { console.log("Place pages without a listing: skipped (PAGES_ONLY)."); process.exit(0); }
  const template = places.find((place) => existsSync(fileFor(placePath(place))) && place.photos.length > 0);
  assert.ok(template, `${output} has no exported place page to take the shell from: run the export first`);
  const frame = shell(template);
  // The template rebuilt through this script must come out as the exported page itself (ignoring where in a
  // link Next.js and React write its href, which changes nothing): proof the two renderings agree.
  const normalise = (html: string) => html.replace(/<a\b([^>]*?) href="([^"]*)"/g, '<a href="$2"$1');
  const sameAs = (path: string, rebuiltHtml: string) => {
    const rebuilt = normalise(rebuiltHtml), exported = normalise(readFileSync(fileFor(path), "utf8"));
    if (rebuilt === exported) return;
    let at = 0;
    while (at < rebuilt.length && rebuilt[at] === exported[at]) at += 1;
    assert.fail(`rendering ${path} here does not reproduce its exported page, from byte ${at}:\n  here:     ${rebuilt.slice(at - 80, at + 160)}\n  exported: ${exported.slice(at - 80, at + 160)}`);
  };
  sameAs(placePath(template), placePageHtml(template, frame));
  // The same proof for the listings' shell: a state page with full listings, rebuilt here.
  const stateTemplate = placeStates.find((state) => existsSync(fileFor(placeStatePath(state))));
  assert.ok(stateTemplate, `${output} has no exported state page to take the listings' shell from`);
  const listingFrame = listingShell(stateTemplate);
  sameAs(placeStatePath(stateTemplate), pageHtml(placeStateMetadata(stateTemplate), renderToString(createElement(PlacesState, { state: stateTemplate })), listingFrame, placeStatePath(stateTemplate)));
  if (!stubs.length) { console.log("Place pages without a listing: none in the data."); process.exit(0); }
  // They go into their own folder, outside the Pages export (the Cloudflare Worker's static assets,
  // places-worker/), within the Workers free plan's 20,000 files per version.
  const outIndex = process.argv.indexOf("--out");
  assert.ok(outIndex !== -1 && process.argv[outIndex + 1], "Give the output folder: --out worker-dist");
  {
    const dir = resolve(root, process.argv[outIndex + 1]);
    rmSync(dir, { recursive: true, force: true });
    // Until the pages move to R2 (no file limit; PLACES_R2=1), any beyond the Worker's 20,000 files go into
    // the GitHub Pages export instead, the places without coordinates first; the Worker passes those through.
    // The listings by type (lib/place-directory.ts): every state's, each with its places, full and extra.
    const listingPages = directoryStates.flatMap((state) => stateListings(state).map((listing) => ({ state, listing,
      places: [...places, ...stubs].filter((place) => place.stateSlug === state.slug && listing.types.includes(place.type) && isListed(place)) })));
    // A listing hangs off its state page: every state with one must have that page in the export.
    for (const { state } of listingPages) assert.ok(existsSync(fileFor(placeStatePath(state))), `${state.name} has listings but no exported state page links them`);
    // An indexable page never overflows: the sitemap lists it at the Worker.
    const overflow = process.env.PLACES_R2 ? new Set() : new Set([...stubs].sort((a, b) => Number(Boolean(a.indexable)) - Number(Boolean(b.indexable)) || Number(Number.isFinite(a.lat)) - Number(Number.isFinite(b.lat)) || a.id.localeCompare(b.id))
      .slice(0, Math.max(0, stubs.length + listingPages.length + 1 - WORKER_FILE_LIMIT)));
    if (process.env.PLACES_R2) console.log("PLACES_R2: every page goes to R2, no file limit.");
    // The pages in the bucket link their own copy of the build's CSS (scripts/r2-stylesheets.ts); the overflow
    // into the Pages export keeps the site's.
    const r2 = (html: string) => (process.env.PLACES_R2 ? withR2Stylesheets(html, output, dir) : html);
    const bucketFrame = { ...frame, head: r2(frame.head), middle: r2(frame.middle), tail: r2(frame.tail) };
    const bucketListingFrame = { ...listingFrame, head: r2(listingFrame.head), middle: r2(listingFrame.middle), tail: r2(listingFrame.tail) };
    assert.ok(!process.env.PLACES_R2 || bucketFrame.head.includes('href="/places/_assets/'), "the place pages' head links no stylesheet from /assets/");
    let bytes = 0;
    for (const place of stubs) {
      assert.ok(!existsSync(fileFor(placePath(place))), `${placePath(place)} already has a full page`);
      const target = overflow.has(place) ? fileFor(placePath(place)) : resolve(dir, placePath(place).slice(1), "index.html");
      mkdirSync(dirname(target), { recursive: true });
      const html = placePageHtml(place, overflow.has(place) ? frame : bucketFrame);
      writeFileSync(target, html);
      bytes += Buffer.byteLength(html);
    }
    // What the sitemap lists at the Worker (lib/data/place-directory.json, written before the build) must be
    // exactly the pages written indexable here.
    const indexed = new Set(indexedWorkerPaths);
    const written = new Set<string>();
    for (const place of stubs) if (place.indexable) written.add(placePath(place));
    let listingBytes = 0, listed = 0;
    for (const { state, listing, places: listedPlaces } of listingPages) {
      const path = placeListingPath(state, listing);
      assert.ok(!existsSync(fileFor(path)) && !stubs.some((place) => placePath(place) === path), `${path} is both a listing and a page`);
      const indexable = indexed.has(path);
      if (indexable) written.add(path);
      const html = pageHtml(placeListingMetadata(state, listing, indexable), renderToString(createElement(PlacesListing, { state, listing, places: listedPlaces, indexable })), bucketListingFrame, path);
      const target = resolve(dir, path.slice(1), "index.html");
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, html);
      listingBytes += Buffer.byteLength(html);
      listed += listedPlaces.length;
    }
    assert.deepEqual([...written].sort(), [...indexed].sort(), "the indexable Worker pages differ from lib/data/place-directory.json: run scripts/build-place-directory.ts (npm run prebuild)");
    // Every listed place page is in a listing (lib/place-directory.ts `isListed`); the rest are counted.
    const inListings = new Set(listingPages.flatMap((page) => page.places.map(placePath)));
    const unreachable = [...places, ...stubs].filter((place) => isListed(place) && !inListings.has(placePath(place)));
    assert.equal(unreachable.length, 0, `${unreachable.length} place pages are in no listing, such as ${unreachable.slice(0, 3).map(placePath).join(", ")}`);
    const left = Object.entries(Object.groupBy([...places, ...stubs].filter((place) => !isListed(place)), (place) => place.type in unlistedTypes ? `${place.type} (${unlistedTypes[place.type]})` : `${place.type} (no credit)`)).map(([key, list]) => `${list!.length} ${key}`);
    console.log(`Wrote ${listingPages.length} listings by type covering ${listed} place pages, ${(listingBytes / 1048576).toFixed(1)} MB; ${written.size} Worker pages are indexable.${left.length ? ` Left out of the listings: ${left.join(", ")}.` : ""}`);
    // GitHub Pages' caching, for the same pages served from the Worker's static assets (R2 has its own).
    if (!process.env.PLACES_R2) writeFileSync(resolve(dir, "_headers"), "/places/*\n  Cache-Control: public, max-age=600\n");
    const files = stubs.length + listingPages.length - overflow.size + 1;
    assert.ok(process.env.PLACES_R2 || files <= WORKER_FILE_LIMIT, `${files} files is over the Workers free plan's ${WORKER_FILE_LIMIT} per version`);
    const room = process.env.PLACES_R2 ? "for R2" : `${files} files: ${WORKER_FILE_LIMIT - files} left under the free plan's ${WORKER_FILE_LIMIT}`;
    console.log(`Wrote ${stubs.length - overflow.size} place pages without a listing to ${process.argv[outIndex + 1]} (${room})${overflow.size ? ` and ${overflow.size} into the Pages export` : ""}, ${(bytes / 1048576).toFixed(0)} MB in all.`);
  }
}
