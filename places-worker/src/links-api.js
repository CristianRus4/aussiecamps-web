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
 * otherwise); a PUT after a DELETE restores the link.
 */
import { LINK_ID, validateLink } from "./validate.js";

export const MAX_BODY = 64 * 1024;
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

async function put(request, env, site, id, hash) {
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
    if (existing && !sameHash(existing.customMetadata?.h, hash)) return json({ error: "wrong token" }, 403);
    const stored = await env.LINKS.put(key, body, { ...options, onlyIf: existing ? { etagMatches: existing.etag } : { etagDoesNotMatch: "*" } });
    if (stored) return json({ url: `${site.url}/${value.kind}/${id}` });
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

/** Answers /api/links/<rest>. `limited(kind)` is the rate limit check: a 429 Response or null. */
export async function linksApi(request, env, site, rest, limited) {
  const method = request.method;
  if (!["GET", "HEAD", "PUT", "DELETE"].includes(method)) return json({ error: "method not allowed" }, 405, { allow: "GET, HEAD, PUT, DELETE" });
  const blocked = await limited(method === "GET" || method === "HEAD" ? "read" : "write");
  if (blocked) return blocked;
  if (rest.includes("/")) return json({ error: "not found" }, 404);
  if (!LINK_ID.test(rest)) return json({ error: "the id must be 12 letters or digits" }, 400);
  if (method === "GET" || method === "HEAD") return read(request, env, rest);
  const token = TOKEN.exec(request.headers.get("authorization") ?? "");
  if (!token) return json({ error: "a Bearer token of 43 base64url characters is required" }, 401);
  const hash = await sha256(token[1]);
  return method === "PUT" ? put(request, env, site, rest, hash) : remove(env, rest, hash);
}
