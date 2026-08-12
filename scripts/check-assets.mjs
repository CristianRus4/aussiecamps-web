import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const source = await readFile(resolve(root, "lib/site.ts"), "utf8");
const slugs = [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
const core = ["aussiecamps-app-icon.webp", "aussie-hero.webp", "aussie-feature-1.webp", "aussie-feature-2.webp", "aussie-feature-3.webp", "aussie-download.webp", "aussie-qr.webp", "aussie-og.webp"];
const expected = [...core.map((name) => resolve(root, "public/images", name)), ...slugs.map((slug) => resolve(root, "public/images/articles", `${slug}.webp`))];
const missing = [];
for (const path of expected) {
  try { await access(path); } catch { missing.push(path.replace(`${root}/`, "")); }
}
if (missing.length) {
  console.log(`Image slots ready: ${expected.length}`);
  console.log(`Images still to add: ${missing.length}`);
  for (const path of missing) console.log(`- ${path}`);
} else {
  console.log(`All ${expected.length} image assets are present.`);
}
