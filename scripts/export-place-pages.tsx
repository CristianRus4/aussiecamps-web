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
 * (none of those read this data).
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
import { placeMetadata } from "@/lib/places-metadata";
import { placePath, places, type Place } from "@/lib/places";
import { SITE_URL } from "@/lib/site";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, process.env.PAGES_DIST ?? "pages-dist");
const dataPath = resolve(root, "lib/data/place-stubs.json");
const stubs: Place[] = existsSync(dataPath) ? JSON.parse(readFileSync(dataPath, "utf8")).places : [];

const escape = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const fileFor = (path: string) => resolve(output, path.slice(1), "index.html");
/** Next.js writes every internal link with its trailing slash (next.config.ts `trailingSlash`); so does this. */
const withSlashes = (html: string) => html.replace(/(href|src)="(\/[^"#?]*?)([#?][^"]*)?"/g, (match, attr: string, path: string, rest = "") => (/\/$|\.[a-z0-9]+$/i.test(path) ? match : `${attr}="${path}/${rest}"`));

/** The head tags that differ from one place page to the next, in the form Next.js writes them. */
function headTags(metadata: Metadata, title: string) {
  const og = metadata.openGraph as { title: string; description: string; url: string; siteName: string; type: string; locale: string; images: { url: string; alt?: string; width?: number; height?: number; type?: string }[] };
  const robots = metadata.robots as { index: boolean; follow: boolean; googleBot?: object };
  const meta = (attribute: string, name: string, content: string | number) => `<meta ${attribute}="${name}" content="${escape(String(content))}"/>`;
  return {
    title: `<title>${escape(title)}</title>`,
    description: meta("name", "description", String(metadata.description)),
    robots: robots.index ? undefined : meta("name", "robots", `noindex, ${robots.follow ? "follow" : "nofollow"}`),
    og: [
      meta("property", "og:title", og.title), meta("property", "og:description", og.description), meta("property", "og:url", og.url),
      meta("property", "og:site_name", og.siteName), meta("property", "og:type", og.type), meta("property", "og:locale", og.locale),
      ...og.images.flatMap((image) => [meta("property", "og:image", image.url), ...(image.type ? [meta("property", "og:image:type", image.type)] : []),
        ...(image.width ? [meta("property", "og:image:width", image.width)] : []), ...(image.height ? [meta("property", "og:image:height", image.height)] : []),
        ...(image.alt ? [meta("property", "og:image:alt", image.alt)] : [])]),
    ].join(""),
    canonical: `<link rel="canonical" href="${escape(`${SITE_URL}${(metadata.alternates as { canonical: string }).canonical}`)}"/>`,
    banner: meta("name", "apple-itunes-app", String((metadata.other as Record<string, string>)["apple-itunes-app"])),
  };
}

/** The shell: an exported full place page, split around the parts each place fills in. */
function shell(template: Place) {
  const html = readFileSync(fileFor(placePath(template)), "utf8");
  const metadata = placeMetadata(template);
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
  take(/<link rel="canonical"[^>]*>/g, "canonical");
  take(/<meta name="apple-itunes-app"[^>]*>/g, "banner");
  // The hero photo's preload (React hoists it into <head>); a place without photos has none.
  const hero = template.photos[0] && head.match(new RegExp(`<link rel="preload" href="${escape(template.photos[0]).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>`));
  if (hero) head = head.replace(hero[0], "\u0000hero\u0000");
  else head = head.replace(/(<link rel="stylesheet")/, "\u0000hero\u0000$1");
  // The component's own output: from the site header to its last script after the footer (the shared
  // /places/place.js where the site has it, else the inline "Open in app" script).
  const start = html.indexOf('<header class="site-header"', headEnd);
  const footer = html.indexOf("</footer>", start);
  const shared = html.indexOf('src="/places/place.js"', footer);
  const end = html.indexOf("</script>", shared > 0 ? shared : html.indexOf('closest("a[data-open-app]")', footer)) + "</script>".length;
  assert.ok(start > 0 && end > start, "could not find the place page's body in the template");
  return { head, middle: html.slice(headEnd, start), tail: html.slice(end), suffix, indexedRobots: indexedRobots! };
}

export function placePageHtml(place: Place, frame: ReturnType<typeof shell>) {
  const metadata = placeMetadata(place);
  const tags = headTags(metadata, `${metadata.title}${frame.suffix}`);
  let body = withSlashes(renderToString(createElement(PlacePage, { place })));
  // React puts the hero photo's preload first; it belongs in <head>, where the full pages have it.
  const hoisted = body.match(/^<link rel="preload"[^>]*>/)?.[0] ?? "";
  body = body.slice(hoisted.length);
  const preload = hoisted.replace(/^<link rel="preload" as="image" href="([^"]*)"/, '<link rel="preload" href="$1" as="image"');
  assert.ok(body.startsWith('<header class="site-header"'), `${placePath(place)}: unexpected markup before the header`);
  const head = frame.head
    .replace("\u0000title\u0000", tags.title).replace("\u0000description\u0000", tags.description)
    .replace("\u0000robots\u0000", tags.robots ?? frame.indexedRobots)
    .replace("\u0000og\u0000", tags.og).replace("\u0000canonical\u0000", tags.canonical).replace("\u0000banner\u0000", tags.banner)
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
  const rebuilt = normalise(placePageHtml(template, frame)), exported = normalise(readFileSync(fileFor(placePath(template)), "utf8"));
  if (rebuilt !== exported) {
    let at = 0;
    while (at < rebuilt.length && rebuilt[at] === exported[at]) at += 1;
    assert.fail(`rendering ${placePath(template)} here does not reproduce its exported page, from byte ${at}:\n  here:     ${rebuilt.slice(at - 80, at + 160)}\n  exported: ${exported.slice(at - 80, at + 160)}`);
  }
  if (!stubs.length) { console.log("Place pages without a listing: none in the data."); process.exit(0); }
  // They go into their own folder, outside the Pages export (the Cloudflare Worker's static assets,
  // places-worker/), within the Workers free plan's 20,000 files per version.
  const outIndex = process.argv.indexOf("--out");
  assert.ok(outIndex !== -1 && process.argv[outIndex + 1], "Give the output folder: --out worker-dist");
  {
    const dir = resolve(root, process.argv[outIndex + 1]);
    rmSync(dir, { recursive: true, force: true });
    // Until the pages move to R2 (no file limit), any beyond the Worker's 20,000 files go into the GitHub
    // Pages export instead, the places without coordinates first; the Worker passes those paths through.
    const overflow = new Set([...stubs].sort((a, b) => Number(Number.isFinite(a.lat)) - Number(Number.isFinite(b.lat)) || a.id.localeCompare(b.id))
      .slice(0, Math.max(0, stubs.length + 1 - WORKER_FILE_LIMIT)));
    let bytes = 0;
    for (const place of stubs) {
      assert.ok(!existsSync(fileFor(placePath(place))), `${placePath(place)} already has a full page`);
      const target = overflow.has(place) ? fileFor(placePath(place)) : resolve(dir, placePath(place).slice(1), "index.html");
      mkdirSync(dirname(target), { recursive: true });
      const html = placePageHtml(place, frame);
      writeFileSync(target, html);
      bytes += Buffer.byteLength(html);
    }
    // GitHub Pages' caching, for the same pages served from the Worker.
    writeFileSync(resolve(dir, "_headers"), "/places/*\n  Cache-Control: public, max-age=600\n");
    const files = stubs.length - overflow.size + 1;
    assert.ok(files <= WORKER_FILE_LIMIT, `${files} files is over the Workers free plan's ${WORKER_FILE_LIMIT} per version`);
    console.log(`Wrote ${stubs.length - overflow.size} place pages without a listing to ${process.argv[outIndex + 1]} (${files} files: ${WORKER_FILE_LIMIT - files} left under the free plan's ${WORKER_FILE_LIMIT})${overflow.size ? ` and ${overflow.size} into the Pages export` : ""}, ${(bytes / 1048576).toFixed(0)} MB in all.`);
  }
}
