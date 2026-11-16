/**
 * Takes one live trip or collection page down (docs/places-cloudflare.md, "Taking a page down"). It leaves the
 * same tombstone as the owner's DELETE, so the page and GET /api/links/<id> answer 410, plus `b: "1"`, so the
 * owner's app can't put it back (its PUT gets 410 too). It also deletes the link's old preview picture, if any.
 *
 *   CLOUDFLARE_API_TOKEN=… CLOUDFLARE_ACCOUNT_ID=… node scripts/remove-link.mjs <12-character id>
 *
 * Or GitHub → Actions → "Links admin" → remove, which has both secrets.
 */
import { r2 } from "./r2-admin.mjs";

const BUCKET = "aussiecamps-links";
const id = process.argv[2] ?? "";
if (!/^[A-Za-z0-9]{12}$/.test(id)) {
  console.error("Usage: node scripts/remove-link.mjs <id>   (the 12 letters or digits after /trip/ or /collection/)");
  process.exit(1);
}
const bucket = await r2(BUCKET);
const key = `links/${id}.json`;
const meta = await bucket.head(key);
if (!meta) {
  console.error(`No link ${id} in ${BUCKET}.`);
  process.exit(1);
}
if (meta.b === "1") {
  console.log(`${id} was already taken down.`);
} else {
  // Keeps the owner's token hash (h), as the owner's own DELETE does; b marks an admin removal.
  await bucket.put(key, "", { contentType: "application/json", meta: { ...(meta.h ? { h: meta.h } : {}), removed: "1", b: "1" } });
  console.log(`${id} is taken down: its page answers 410, and its owner can't restore it.`);
}
await bucket.delete(`images/${id}`);
