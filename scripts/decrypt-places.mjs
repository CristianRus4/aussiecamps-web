/**
 * Writes lib/data/places.json, the plain place data the build reads, from the committed
 * lib/data/places.json.enc (scripts/export-places.mjs). Runs before every build.
 *
 * The key is PLACES_KEY in the environment (a GitHub Actions secret in CI) or the macOS keychain item
 * "camping-places-key", account "aussiecamps-web". A plain copy newer than the encrypted one (a fresh
 * export on this Mac) is kept as it is. Without a key the site builds with no place pages, except in
 * CI, where a missing key fails the build rather than silently unpublishing every place page.
 */
import { createDecipheriv } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const plainPath = resolve(repo, "lib/data/places.json");
const encryptedPath = resolve(repo, "lib/data/places.json.enc");

function key() {
  let value = process.env.PLACES_KEY;
  if (!value) {
    try { value = execFileSync("security", ["find-generic-password", "-s", "camping-places-key", "-a", "aussiecamps-web", "-w"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim(); } catch { return undefined; }
  }
  return Buffer.from(value, "base64");
}

if (existsSync(plainPath) && (!existsSync(encryptedPath) || statSync(plainPath).mtimeMs >= statSync(encryptedPath).mtimeMs)) {
  console.log("Place data: using the local export.");
} else if (!existsSync(encryptedPath)) {
  writeFileSync(plainPath, `${JSON.stringify({ exportedAt: null, places: [] })}\n`);
  console.log("Place data: none exported yet, building without place pages.");
} else {
  const secret = key();
  if (!secret) {
    if (process.env.CI) throw new Error("PLACES_KEY is not set: the place pages cannot be built. Add the repository secret.");
    writeFileSync(plainPath, `${JSON.stringify({ exportedAt: null, places: [] })}\n`);
    console.warn("Place data: no PLACES_KEY in the environment or the keychain, building without place pages.");
  } else {
    const { iv, tag, data } = JSON.parse(readFileSync(encryptedPath, "utf8"));
    const decipher = createDecipheriv("aes-256-gcm", secret, Buffer.from(iv, "base64"));
    decipher.setAuthTag(Buffer.from(tag, "base64"));
    const text = Buffer.concat([decipher.update(Buffer.from(data, "base64")), decipher.final()]).toString("utf8");
    writeFileSync(plainPath, `${text}\n`);
    console.log(`Place data: decrypted ${JSON.parse(text).places.length} places.`);
  }
}
