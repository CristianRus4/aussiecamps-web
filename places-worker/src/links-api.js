/**
 * The live links API (docs/places-cloudflare.md): the app stores a shared trip or collection, and its page
 * (/trip/<id>, /collection/<id>) reads it. Links are objects links/<id>.json in the R2 bucket bound as LINKS.
 *
 *   PUT    /api/links/<id>   Authorization: Bearer <token>   body: the link (src/validate.js), at most 64 KB
 *   DELETE /api/links/<id>   same token: keeps a tombstone, and the page answers 410
 *   GET    /api/links/<id>   the stored link; 404 unknown, 410 removed
 *
 * The first PUT claims the id: it stores the SHA-256 of the token in the object's metadata, as a conditional
 * create, so of two racing creators only one wins. Every later PUT or DELETE must bring the same token (403
 * otherwise); a PUT after a DELETE restores the link. A page taken down by an admin (scripts/remove-link.mjs)
 * keeps the same tombstone plus `b: "1"`: it answers 410 and its owner can't restore it.
 *
 *   GET    /api/links/stats/<yyyy-mm-dd>   that UTC day's totals (writes, new links, removals, capped requests,
 *                                          addresses): counts only, read by scripts/link-stats.mjs
 *
 * Besides the per-minute limits (src/index.js), each address may write WRITE_CAP times and create CREATE_CAP
 * links per UTC day (counters/<day>/<hash of the address>.json); over that, 429 until midnight UTC.
 */
import { LINK_ID, validateLink } from "./validate.js";

export const MAX_BODY = 64 * 1024;
/** Per address and UTC day. The app sends a link a few seconds after each change and nothing when it is unchanged,
 * so one person editing all day stays far below these. */
export const WRITE_CAP = 300;
export const CREATE_CAP = 50;
const TOKEN = /^Bearer ([A-Za-z0-9_-]{43})$/;

export const linkKey = (id) => `links/${id}.json`;
export const json = (body, status = 200, headers = {}) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers } });

async function sha256(text) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

/** Compares two hex hashes in constant time. */
export function sameHash(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Reads at most `limit` bytes of the body; null when it is longer. */
async function readBody(request, limit) {
  if (Number(request.headers.get("content-length") ?? 0) > limit) return null;
  if (!request.body) return "";
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
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}

const DAY = /^\d{4}-\d{2}-\d{2}$/;
const today = () => new Date().toISOString().slice(0, 10);
const counterKey = async (day, client) => `counters/${day}/${(await sha256(client)).slice(0, 32)}.json`;
export const statsKey = (day) => `stats/${day}.json`;
const secondsToMidnight = () => { const now = new Date(); return String(Math.ceil((Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1) - now) / 1000)); };

async function readJson(bucket, key) {
  const object = await bucket.get(key);
  if (!object) return null;
  try { return await object.json(); } catch { return null; }
}

/** Adds to a day's totals. Read, add, write: two writes at the same moment can lose one count, which is fine for
 * an alarm. */
async function bump(bucket, day, add) {
  const totals = (await readJson(bucket, statsKey(day))) ?? {};
  for (const [field, n] of Object.entries(add)) totals[field] = (totals[field] ?? 0) + n;
  await bucket.put(statsKey(day), JSON.stringify(totals), { httpMetadata: { contentType: "application/json" } });
}

async function put(request, env, site, id, hash, quota) {
  let text;
  try { text = await readBody(request, MAX_BODY); } catch { return json({ error: "the body is not UTF-8" }, 400); }
  if (text === null) return json({ error: "the body is over 64 KB" }, 413);
  let raw;
  try { raw = JSON.parse(text); } catch { return json({ error: "the body is not JSON" }, 400); }
  const { value, error } = validateLink(raw);
  if (error) return json({ error }, 400);

  const key = linkKey(id);
  const body = JSON.stringify(value);
  const options = { httpMetadata: { contentType: "application/json" }, customMetadata: { h: hash } };
  // Two tries: if a racing creator takes the id between our check and our create, the second try sees its hash.
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const existing = await env.LINKS.head(key);
    if (existing?.customMetadata?.b === "1") return json({ error: "removed" }, 410);
    if (existing && !sameHash(existing.customMetadata?.h, hash)) return json({ error: "wrong token" }, 403);
    if (!existing && quota.c >= CREATE_CAP) return json({ error: "too many new links today" }, 429, { "retry-after": secondsToMidnight() });
    const stored = await env.LINKS.put(key, body, { ...options, onlyIf: existing ? { etagMatches: existing.etag } : { etagDoesNotMatch: "*" } });
    if (stored) { quota.created = !existing; return json({ url: `${site.url}/${value.kind}/${id}` }); }
  }
  return json({ error: "the link changed at the same time; try again" }, 409);
}

async function remove(env, id, hash) {
  const key = linkKey(id);
  const existing = await env.LINKS.head(key);
  if (!existing) return json({ error: "not found" }, 404);
  if (!sameHash(existing.customMetadata?.h, hash)) return json({ error: "wrong token" }, 403);
  if (existing.customMetadata?.removed !== "1") await env.LINKS.put(key, "", { customMetadata: { h: hash, removed: "1" } });
  return new Response(null, { status: 204 });
}

async function read(request, env, id) {
  const object = await env.LINKS.get(linkKey(id));
  if (!object) return json({ error: "not found" }, 404);
  if (object.customMetadata?.removed === "1") { await object.body.cancel(); return json({ error: "removed" }, 410); }
  const headers = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", etag: object.httpEtag };
  return new Response(request.method === "HEAD" ? null : object.body, { headers });
}

/** Answers /api/links/<rest>. `limited(kind)` is the rate limit check: a 429 Response or null. `client` is the
 * caller's rate-limit key (src/index.js clientKey); `ctx` lets the day's counts be written after the reply. */
export async function linksApi(request, env, site, rest, limited, client = "local", ctx = undefined) {
  const method = request.method;
  if (!["GET", "HEAD", "PUT", "DELETE"].includes(method)) return json({ error: "method not allowed" }, 405, { allow: "GET, HEAD, PUT, DELETE" });
  const blocked = await limited(method === "GET" || method === "HEAD" ? "read" : "write");
  if (blocked) return blocked;
  const stats = /^stats\/(.+)$/.exec(rest);
  if (stats && (method === "GET" || method === "HEAD") && DAY.test(stats[1])) {
    const totals = (await readJson(env.LINKS, statsKey(stats[1]))) ?? {};
    return json({ day: stats[1], writes: 0, creates: 0, removes: 0, capped: 0, clients: 0, ...totals });
  }
  if (rest.includes("/")) return json({ error: "not found" }, 404);
  if (!LINK_ID.test(rest)) return json({ error: "the id must be 12 letters or digits" }, 400);
  if (method === "GET" || method === "HEAD") return read(request, env, rest);
  const token = TOKEN.exec(request.headers.get("authorization") ?? "");
  if (!token) return json({ error: "a Bearer token of 43 base64url characters is required" }, 401);

  // The address's writes today (counters/<day>/…): a cap per address, and the day's totals for the alarm.
  const day = today();
  const counter = await counterKey(day, client);
  const quota = (await readJson(env.LINKS, counter)) ?? { w: 0, c: 0 };
  const later = (promise) => (ctx ? ctx.waitUntil(promise.catch(() => {})) : promise.catch(() => {}));
  if (quota.w >= WRITE_CAP) {
    later(bump(env.LINKS, day, { capped: 1 }));
    return json({ error: "too many writes today" }, 429, { "retry-after": secondsToMidnight() });
  }
  const hash = await sha256(token[1]);
  const response = method === "PUT" ? await put(request, env, site, rest, hash, quota) : await remove(env, rest, hash);
  if (response.status === 429) later(bump(env.LINKS, day, { capped: 1 }));
  if (response.ok) {
    const first = quota.w === 0;
    quota.w += 1;
    if (quota.created) quota.c += 1;
    later(Promise.all([
      env.LINKS.put(counter, JSON.stringify({ w: quota.w, c: quota.c }), { httpMetadata: { contentType: "application/json" } }),
      bump(env.LINKS, day, { writes: 1, ...(quota.created ? { creates: 1 } : {}), ...(method === "DELETE" ? { removes: 1 } : {}), ...(first ? { clients: 1 } : {}) }),
    ]));
  }
  return response;
}
