#!/usr/bin/env node
/**
 * Makes the link-preview copy of every guide's hero image: public/images/og/<slug>.jpg, 1200x630.
 *
 * The heroes are WebP, and X, Facebook, WhatsApp and iMessage often show an empty card for a WebP
 * og:image. So each guide's og:image and twitter:image point at a JPG copy instead (articleOgImage
 * in lib/seo.ts), and the WebP stays for the page itself.
 *
 * Runs before every build (`prebuild`) and only writes a copy that is missing or older than its
 * hero, so a new guide gets one automatically. Commit the new JPG with the guide;
 * scripts/check-assets.mjs fails when one is missing.
 */
import { mkdirSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const ROOT = new URL("..", import.meta.url).pathname;
const SOURCE = join(ROOT, "public/images/articles");
const OUT = join(ROOT, "public/images/og");

const names = new Set(readdirSync(SOURCE).filter((name) => name.endsWith(".webp")));
// `name-800.webp` is a width variant of `name.webp`, not a hero of its own (see build-image-manifest.mjs).
const heroes = [...names].filter((name) => {
  const base = name.replace(/-\d+\.webp$/, ".webp");
  return base === name || !names.has(base);
});

mkdirSync(OUT, { recursive: true });
let written = 0;
for (const name of heroes) {
  const source = join(SOURCE, name);
  const target = join(OUT, name.replace(/\.webp$/, ".jpg"));
  let fresh = false;
  try { fresh = statSync(target).mtimeMs >= statSync(source).mtimeMs; } catch { /* missing */ }
  if (fresh) continue;
  await sharp(source).resize(1200, 630, { fit: "cover" }).flatten({ background: "#ffffff" }).jpeg({ quality: 80, mozjpeg: true }).toFile(target);
  written += 1;
}
console.log(`og images: ${heroes.length} guides, ${written} written.`);
