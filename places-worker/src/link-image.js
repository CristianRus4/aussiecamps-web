/**
 * The link-preview picture of a live link (docs/places-cloudflare.md): the app draws a 1200×630 JPEG or PNG
 * with the trip's name and stats and uploads it; the link's page then uses it as og:image instead of the
 * site's own image. Objects images/<id> in the LINKS bucket, under their own prefix: an R2 lifecycle rule
 * (pages.yml) deletes everything under images/ 90 days after upload, and never touches links/.
 *
 *   PUT    /api/links/<id>/image   the link's token; raw bytes, image/jpeg or image/png, ≤ 150 KB, 1200×630
 *   DELETE /api/links/<id>/image   the link's token
 *   GET    /api/links/<id>/image   the picture; 404 none (or expired), 410 link removed
 *
 * The token and the link's state are checked in src/links-api.js before these run.
 */
export const IMAGE_WIDTH = 1200;
export const IMAGE_HEIGHT = 630;
export const MAX_IMAGE = 150 * 1024;
/** One upload per link per this many milliseconds, judged from the stored picture's upload time. */
export const UPLOAD_GAP = 60_000;
const IMAGE_TTL = 300;
const HEAD_TTL = 60;
const TYPES = new Set(["image/jpeg", "image/png"]);

export const imageKey = (id) => `images/${id}`;
const reply = (body, status, headers = {}) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers } });
const cache = () => globalThis.caches?.default;
const imageCacheKey = (site, id, version) => `${site.url}/__link-images/${id}/${version}`;
const headCacheKey = (site, id) => `${site.url}/__link-image-head/${id}`;
const publicUrl = (site, id, version) => `${site.url}/api/links/${id}/image?v=${version}`;

/**
 * The type and size of a JPEG or PNG, read from its bytes: `{ type, width, height }` or `{ error }`.
 * A JPEG must start FF D8 FF, have a baseline, extended or progressive frame header (SOF0–SOF2) before its
 * scan, and end FF D9; a PNG must have its signature, an IHDR chunk first and IEND last.
 */
export function imageInfo(bytes) {
  const at = (offset) => bytes[offset];
  const u16 = (offset) => (bytes[offset] << 8) | bytes[offset + 1];
  const u32 = (offset) => ((bytes[offset] << 24) >>> 0) + (bytes[offset + 1] << 16) + (bytes[offset + 2] << 8) + bytes[offset + 3];
  const ascii = (offset, length) => String.fromCharCode(...bytes.subarray(offset, offset + length));
  if (bytes.length >= 3 && at(0) === 0xff && at(1) === 0xd8 && at(2) === 0xff) {
    if (at(bytes.length - 2) !== 0xff || at(bytes.length - 1) !== 0xd9) return { error: "the JPEG is truncated" };
    let offset = 2;
    while (offset + 4 <= bytes.length) {
      if (at(offset) !== 0xff) return { error: "the JPEG is damaged" };
      let marker = at(offset + 1);
      while (marker === 0xff && offset + 2 < bytes.length) { offset += 1; marker = at(offset + 1); }
      offset += 2;
      if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) continue;
      if (marker === 0xd9 || marker === 0xda) break;
      const length = u16(offset);
      if (length < 2 || offset + length > bytes.length) return { error: "the JPEG is truncated" };
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        if (marker > 0xc2) return { error: "the JPEG must be baseline or progressive" };
        if (length < 7) return { error: "the JPEG is damaged" };
        return { type: "image/jpeg", height: u16(offset + 3), width: u16(offset + 5) };
      }
      offset += length;
    }
    return { error: "the JPEG has no frame header" };
  }
  const PNG = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  if (bytes.length >= 8 && PNG.every((byte, index) => at(index) === byte)) {
    if (bytes.length < 8 + 25 + 12) return { error: "the PNG is truncated" };
    if (u32(8) !== 13 || ascii(12, 4) !== "IHDR") return { error: "the PNG has no IHDR chunk" };
    if (u32(bytes.length - 12) !== 0 || ascii(bytes.length - 8, 4) !== "IEND") return { error: "the PNG is truncated" };
    return { type: "image/png", width: u32(16), height: u32(20) };
  }
  return { error: "the body is not a JPEG or PNG" };
}

/** The upload's rules on top of imageInfo: the bytes are the declared type, and exactly 1200×630. */
export function checkImage(bytes, declared) {
  const info = imageInfo(bytes);
  if (info.error) return info;
  if (info.type !== declared) return { error: `the bytes are ${info.type}, not ${declared}` };
  if (info.width !== IMAGE_WIDTH || info.height !== IMAGE_HEIGHT) return { error: `the picture must be ${IMAGE_WIDTH}x${IMAGE_HEIGHT}, not ${info.width}x${info.height}` };
  return info;
}

/** Reads at most `limit` bytes of the body; null when it is longer. */
async function readBytes(request, limit) {
  if (Number(request.headers.get("content-length") ?? 0) > limit) return null;
  if (!request.body) return new Uint8Array(0);
  const reader = request.body.getReader();
  const chunks = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > limit) { await reader.cancel(); return null; }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return bytes;
}

/** Drops this data centre's cached copies after a change (other data centres keep theirs for at most 5 minutes). */
function forget(site, id, ctx, version) {
  const store = cache();
  if (!store) return;
  const done = Promise.all([store.delete(headCacheKey(site, id)), version ? store.delete(imageCacheKey(site, id, version)) : null]).catch(() => {});
  if (ctx) ctx.waitUntil(done);
}

/** PUT: stores the picture. The caller has checked the token and that the link exists and isn't removed. */
export async function putImage(request, env, site, id, ctx) {
  const declared = (request.headers.get("content-type") ?? "").split(";")[0].trim().toLowerCase();
  if (!TYPES.has(declared)) return reply({ error: "Content-Type must be image/jpeg or image/png" }, 415);
  const key = imageKey(id);
  const existing = await env.LINKS.head(key);
  const last = Number(existing?.customMetadata?.t);
  const wait = Number.isFinite(last) ? last + UPLOAD_GAP - Date.now() : 0;
  if (wait > 0) return reply({ error: "one picture a minute per link" }, 429, { "retry-after": String(Math.ceil(wait / 1000)) });

  const bytes = await readBytes(request, MAX_IMAGE);
  if (bytes === null) return reply({ error: "the picture is over 150 KB" }, 413);
  const info = checkImage(bytes, declared);
  if (info.error) return reply({ error: info.error }, 400);

  const version = String(Date.now());
  const stored = await env.LINKS.put(key, bytes, {
    httpMetadata: { contentType: info.type },
    customMetadata: { t: version },
    // A racing upload that stored first wins; this one is told to wait.
    onlyIf: existing ? { etagMatches: existing.etag } : { etagDoesNotMatch: "*" },
  });
  if (!stored) return reply({ error: "one picture a minute per link" }, 429, { "retry-after": String(UPLOAD_GAP / 1000) });
  forget(site, id, ctx, existing?.customMetadata?.t);
  return reply({ url: publicUrl(site, id, version) }, 200);
}

/** DELETE, and the link's own DELETE: removes the picture if there is one. */
export async function deleteImage(env, site, id, ctx) {
  const existing = await env.LINKS.head(imageKey(id));
  if (existing) await env.LINKS.delete(imageKey(id));
  forget(site, id, ctx, existing?.customMetadata?.t);
}

const imageHeaders = (type, etag) => ({
  "content-type": type,
  "x-content-type-options": "nosniff",
  "content-disposition": "inline",
  "cache-control": `public, max-age=${IMAGE_TTL}`,
  etag,
});

const matchesTag = (header, etag) => (header ?? "").split(/\s*,\s*/).some((tag) => tag === "*" || tag.replace(/^W\//, "") === etag);

/** Answers from a stored copy: 304 when the client has it, the bytes otherwise (none for HEAD). */
function serve(request, status, headers, bytes) {
  if (matchesTag(request.headers.get("if-none-match"), headers.etag)) return new Response(null, { status: 304, headers });
  return new Response(request.method === "HEAD" ? null : bytes, { status, headers });
}

/**
 * GET or HEAD. A versioned URL (?v=, as the page links it) is answered from the data centre's cache when it
 * can be, so repeated preview fetches don't read R2. `linkKey` is the link's object, for its 404 and 410.
 */
export async function getImage(request, env, site, id, ctx, linkKey) {
  const version = new URL(request.url).searchParams.get("v");
  const store = cache();
  const cacheKey = version && /^\d{1,16}$/.test(version) ? imageCacheKey(site, id, version) : null;
  if (cacheKey && store) {
    const hit = await store.match(cacheKey).catch(() => null);
    if (hit) return serve(request, 200, imageHeaders(hit.headers.get("content-type"), hit.headers.get("etag")), await hit.arrayBuffer());
  }
  const link = await env.LINKS.head(linkKey);
  if (!link) return reply({ error: "not found" }, 404);
  if (link.customMetadata?.removed === "1") return reply({ error: "removed" }, 410);
  const object = await env.LINKS.get(imageKey(id));
  if (!object) return reply({ error: "no picture" }, 404);
  const bytes = await object.arrayBuffer();
  const headers = imageHeaders(object.httpMetadata?.contentType === "image/png" ? "image/png" : "image/jpeg", object.httpEtag);
  if (cacheKey && store && version === object.customMetadata?.t && ctx) {
    ctx.waitUntil(store.put(cacheKey, new Response(bytes, { headers })).catch(() => {}));
  }
  return serve(request, 200, headers, bytes);
}

/**
 * The page's og:image when the link has a picture: `{ url, width, height, type, version }`, or null. A head of
 * images/<id> through the data centre's cache for a minute, so once the lifecycle rule deletes a picture the
 * page goes back to the site's own image by itself.
 */
export async function linkPreview(env, site, id, ctx) {
  const store = cache();
  const key = headCacheKey(site, id);
  let found;
  try {
    const hit = await store?.match(key);
    if (hit) found = await hit.json();
  } catch {}
  if (found === undefined) {
    try {
      const object = await env.LINKS.head(imageKey(id));
      found = object?.customMetadata?.t ? { t: object.customMetadata.t, type: object.httpMetadata?.contentType === "image/png" ? "image/png" : "image/jpeg" } : null;
    } catch {
      return null;
    }
    const saved = store?.put(key, new Response(JSON.stringify(found), { headers: { "content-type": "application/json", "cache-control": `public, max-age=${HEAD_TTL}` } }));
    if (saved && ctx) ctx.waitUntil(saved.catch(() => {}));
  }
  if (!found?.t) return null;
  return { url: publicUrl(site, id, found.t), width: IMAGE_WIDTH, height: IMAGE_HEIGHT, type: found.type, version: found.t };
}
