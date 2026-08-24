import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const sources = await Promise.all(["lib/site.ts", "lib/expanded-articles.ts"].map((path) => readFile(resolve(root, path), "utf8")));
const slugs = sources.flatMap((source) => [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));
const core = ["aussiecamps-app-icon.png", "aussie-hero.webp", "aussie-feature-1.webp", "aussie-feature-2.webp", "aussie-feature-3.webp", "aussie-download.webp", "aussie-qr.png", "aussie-og.webp"];
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
