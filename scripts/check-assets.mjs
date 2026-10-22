import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { access, readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const sources = await Promise.all(["lib/site.ts", "lib/expanded-articles.ts"].map((path) => readFile(resolve(root, path), "utf8")));
const slugs = sources.flatMap((source) => [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));
const core = ["aussiecamps-app-icon.png", "aussie-hero.webp", "aussie-feature-1.webp", "aussie-feature-2.webp", "aussie-feature-3.webp", "aussie-download.webp", "aussie-og.webp", "aussiecamps-og-v2.png"];
const corePaths = core.map((name) => resolve(root, "public/images", name));
const articlePaths = slugs.map((slug) => resolve(root, "public/images/articles", `${slug}.webp`));
const missingCore = [];
const missingArticles = [];
for (const path of corePaths) {
  try { await access(path); } catch { missingCore.push(path.replace(`${root}/`, "")); }
}
for (const path of articlePaths) {
  try { await access(path); } catch { missingArticles.push(path.replace(`${root}/`, "")); }
}
assert.deepEqual(missingArticles, [], `Missing article images:\n${missingArticles.join("\n")}`);

// Link previews: the home image is a PNG and every guide has a JPG copy, because WebP previews often
// show as an empty card on X, Facebook, WhatsApp and iMessage. `npm run images:og` makes the copies.
const homeOg = await readFile(resolve(root, "public/images/aussiecamps-og-v2.png"));
assert.equal(homeOg.subarray(1, 4).toString(), "PNG", "public/images/aussiecamps-og-v2.png is not a PNG file");
assert.deepEqual([homeOg.readUInt32BE(16), homeOg.readUInt32BE(20)], [1200, 630], "public/images/aussiecamps-og-v2.png must be 1200x630");
// Every hero in public/images/articles (not only the guides listed above), minus its width variants.
const heroNames = new Set((await readdir(resolve(root, "public/images/articles"))).filter((name) => name.endsWith(".webp")));
const heroes = [...heroNames].filter((name) => { const base = name.replace(/-\d+\.webp$/, ".webp"); return base === name || !heroNames.has(base); });
const missingOg = [];
for (const hero of heroes) {
  const path = resolve(root, "public/images/og", hero.replace(/\.webp$/, ".jpg"));
  try {
    const bytes = await readFile(path);
    assert.ok(bytes[0] === 0xff && bytes[1] === 0xd8, `${path} is not a JPEG file`);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    missingOg.push(path.replace(`${root}/`, ""));
  }
}
assert.deepEqual(missingOg, [], `Missing link-preview images (run npm run images:og):\n${missingOg.join("\n")}`);

const hashes = [];
for (const path of articlePaths) {
  const bytes = await readFile(path);
  assert.equal(bytes.subarray(0, 4).toString(), "RIFF", `${path} is not a WebP file`);
  assert.equal(bytes.subarray(8, 12).toString(), "WEBP", `${path} is not a WebP file`);
  hashes.push(createHash("sha256").update(bytes).digest("hex"));
}
assert.equal(new Set(hashes).size, hashes.length, "Every article must use a unique image file");

if (missingCore.length) {
  console.log(`All ${articlePaths.length} article images are present, valid and unique.`);
  console.log(`Product images still to add: ${missingCore.length}`);
  for (const path of missingCore) console.log(`- ${path}`);
} else {
  console.log(`All ${corePaths.length + articlePaths.length} image assets are present and all article images are unique.`);
}
