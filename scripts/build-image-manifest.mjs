#!/usr/bin/env node
/**
 * Records the intrinsic size of every image in public/images, plus any pre-generated width variants
 * that sit beside it as `<name>-<width>.webp`.
 *
 * Images render as real <img> elements rather than CSS backgrounds, so every one of them needs
 * width/height attributes (to reserve layout space and avoid CLS) and a srcset (so a phone does not
 * download a desktop-sized file). Both are mechanical facts about the files, so they are read from
 * the files rather than typed out by hand and left to drift.
 *
 * Run `npm run images:manifest` after adding or replacing an image.
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const IMAGES = join(ROOT, "public/images");
const OUT = join(ROOT, "lib/image-manifest.json");

/** Intrinsic size straight out of the file header: WebP (VP8/VP8L/VP8X) and PNG. */
function dimensions(file) {
  const buf = readFileSync(file);
  if (buf.slice(0, 4).toString("ascii") === "RIFF" && buf.slice(8, 12).toString("ascii") === "WEBP") {
    const chunk = buf.slice(12, 16).toString("ascii");
    if (chunk === "VP8 ") return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    if (chunk === "VP8L") {
      const bits = buf.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (chunk === "VP8X") return { width: buf.readUIntLE(24, 3) + 1, height: buf.readUIntLE(27, 3) + 1 };
  }
  if (buf.slice(1, 4).toString("ascii") === "PNG") return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  throw new Error(`Unrecognised image format: ${file}`);
}

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

const files = walk(IMAGES).filter((file) => /\.(webp|png)$/.test(file));
const paths = new Set(files.map((file) => "/images/" + relative(IMAGES, file)));
const manifest = {};

for (const file of files) {
  const path = "/images/" + relative(IMAGES, file);
  // `name-800.webp` is a variant of `name.webp`, but only when `name.webp` actually exists —
  // otherwise slugs that legitimately end in a number (…-2026.webp) would be misread as variants.
  const variantOf = path.replace(/-(\d+)\.webp$/, ".webp");
  if (variantOf !== path && paths.has(variantOf)) continue;

  const { width, height } = dimensions(file);
  const variants = [...paths]
    .filter((candidate) => candidate.replace(/-(\d+)\.webp$/, ".webp") === path && candidate !== path)
    .map((candidate) => ({ path: candidate, width: Number(candidate.match(/-(\d+)\.webp$/)[1]) }))
    .sort((a, b) => a.width - b.width);

  manifest[path] = { width, height, variants: [...variants, { path, width }] };
}

writeFileSync(OUT, JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()), null, 2) + "\n");
console.log(`image manifest: ${Object.keys(manifest).length} images, ${files.length} files`);
