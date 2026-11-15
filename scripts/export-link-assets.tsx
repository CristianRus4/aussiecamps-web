/**
 * Writes what the Cloudflare Worker needs to draw a live trip or collection link (/trip/<id>, /collection/<id>;
 * places-worker/), into the folder that goes to its places bucket:
 *
 *   places/_assets/<file>.css    the build's stylesheets, which the shell links (scripts/r2-stylesheets.ts)
 *   shells/link.html             the exported /link-shell/ page (app/link-shell/page.tsx), which the Worker fills
 *                                in; it is then taken out of the Pages export, so GitHub Pages never serves it
 *   cards/<encodeURIComponent(app place id)>.json
 *                                one per app place id with a page (full listings, the pages without a listing and
 *                                every alias): {"n":name,"h":page path,"i":thumbnail or "","s":"<Type> · <Park or
 *                                locality> · <State>","g":"★ 4.5" or a fee label,"o":link-preview photo,"ty":type key}
 *
 * "s" is the small line of the place lists' rows, so the type's label is the text before its first " · ". "o"
 * is the place page's own preview photo (previewPhoto: the first one, only when it is a JPEG or PNG). Run after
 * build:pages and before the bucket sync:
 *
 *   npm run links:assets -- --out r2-dist          (PAGES_DIST names the export, as for scripts/export-place-pages.tsx)
 */
import assert from "node:assert/strict";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { feeLabel, photoUrl, typeLabel, type Place } from "@/lib/places";
import { previewPhoto } from "@/lib/places-metadata";
import { pathOf, placesById } from "./place-links.mjs";
import { withR2Stylesheets } from "./r2-stylesheets";

const root = resolve(import.meta.dirname, "..");
const pages = resolve(root, process.env.PAGES_DIST ?? "pages-dist");
const outIndex = process.argv.findIndex((arg) => arg === "--out" || arg.startsWith("--out="));
const outArg = outIndex === -1 ? undefined : process.argv[outIndex].includes("=") ? process.argv[outIndex].slice("--out=".length) : process.argv[outIndex + 1];
assert.ok(outArg, "Give the output folder: --out r2-dist");
const out = resolve(root, outArg);

const read = (file: string): Place[] => existsSync(resolve(root, file)) ? JSON.parse(readFileSync(resolve(root, file), "utf8")).places : [];
const full = read("lib/data/places.json"), stubs = read("lib/data/place-stubs.json");
assert.ok(full.length, "lib/data/places.json has no places: run node scripts/decrypt-places.mjs first");

/** Next.js writes every internal link with its trailing slash (next.config.ts `trailingSlash`); so does this. */
const withSlashes = (html: string) => html.replace(/(href|src)="(\/[^"#?]*?)([#?][^"]*)?"/g, (match, attr: string, path: string, rest = "") => (/\/$|\.[a-z0-9]+$/i.test(path) ? match : `${attr}="${path}/${rest}"`));

// The shell.
const shellFile = resolve(pages, "link-shell/index.html");
assert.ok(existsSync(shellFile), `${shellFile} is missing: run npm run build:pages first (this script takes it out of the export)`);
// Its stylesheet is the bucket's own copy (scripts/r2-stylesheets.ts), live before GitHub Pages deploys.
const shell = withR2Stylesheets(withSlashes(readFileSync(shellFile, "utf8")), pages, out);
for (const hook of ['href="/places/_assets/', 'data-sl="page"', 'data-sl="badge"', 'data-sl="name"', 'data-sl="stats"', 'data-sl="status"', 'data-sl="message"', 'href="mailto:', 'data-sl="body"', 'data-sl="map"', 'data-sl="list"', "data-pl-map=", "data-open-app=", "data-page-qr", "window.plMap", 'name="apple-itunes-app"'])
  assert.ok(shell.includes(hook), `the link shell has no ${hook}`);
rmSync(resolve(out, "shells"), { recursive: true, force: true });
mkdirSync(resolve(out, "shells"), { recursive: true });
writeFileSync(resolve(out, "shells/link.html"), shell);
rmSync(resolve(pages, "link-shell"), { recursive: true, force: true });

// The cards.
rmSync(resolve(out, "cards"), { recursive: true, force: true });
mkdirSync(resolve(out, "cards"), { recursive: true });
let count = 0;
for (const [id, place] of placesById(full, stubs) as Map<string, Place>) {
  const thumb = place.photos[1] ?? place.photos[0];
  const tag = place.stars ? `★ ${place.stars}` : feeLabel(place.fee);
  // The same photo as the place page's own link preview.
  const preview = previewPhoto(place);
  const card = {
    n: place.name,
    h: pathOf(place),
    i: thumb ? photoUrl(thumb) : "",
    s: [typeLabel(place).one, place.park ?? place.locality, place.stateName].filter(Boolean).join(" · "),
    ...(tag ? { g: tag } : {}),
    ...(preview ? { o: preview.url } : {}),
    ty: place.type,
  };
  writeFileSync(resolve(out, "cards", `${encodeURIComponent(id)}.json`), JSON.stringify(card));
  count += 1;
}
console.log(`Wrote the link shell and ${count} place cards (${full.length} full pages, ${stubs.length} without a listing, with their aliases) to ${outArg}.`);
