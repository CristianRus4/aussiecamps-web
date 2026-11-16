/**
 * What the links bucket holds: live links, removed ones (tombstones), the day counters and totals, and anything
 * left under images/ from the preview pictures that were dropped on 15 Nov 2026 (they expire 90 days after
 * upload). Read-only.
 *
 *   CLOUDFLARE_API_TOKEN=… CLOUDFLARE_ACCOUNT_ID=… node scripts/link-bucket-report.mjs
 *
 * Or GitHub → Actions → "Links admin" → report.
 */
import { r2 } from "./r2-admin.mjs";

const BUCKET = "aussiecamps-links";
const bucket = await r2(BUCKET);
const all = await bucket.list("");
const by = (prefix) => all.filter((object) => object.key.startsWith(prefix));
const links = by("links/");
const removed = links.filter((object) => object.size === 0).length;
const images = by("images/");
console.log(`${BUCKET}: ${links.length - removed} live links, ${removed} removed, ${by("counters/").length} day counters, ${by("stats/").length} day totals.`);
console.log(images.length ? `images/ (${images.length}):` : "images/ is empty.");
for (const image of images) console.log(`  ${image.key}  ${(image.size / 1024).toFixed(0)} KB  ${image.modified}`);
const other = all.filter((object) => !/^(links|images|counters|stats|alerts)\//.test(object.key));
if (other.length) console.log(`Other objects (${other.length}): ${other.slice(0, 20).map((object) => object.key).join(", ")}`);
