/**
 * A small R2 client for the admin scripts (remove-link.mjs, link-bucket-report.mjs): R2's S3-compatible endpoint,
 * signed with the CLOUDFLARE_API_TOKEN secret the way scripts/sync-places-r2.mjs does (key id = the token's id,
 * secret = the SHA-256 of the token). CLOUDFLARE_ACCOUNT_ID names the account. Never prints either.
 */
import { createHash } from "node:crypto";
import { AwsClient } from "aws4fetch";

/** The token's id: a user token verifies at /user/tokens, an account token at /accounts/<id>/tokens. */
async function tokenId(token, account) {
  for (const url of ["https://api.cloudflare.com/client/v4/user/tokens/verify", `https://api.cloudflare.com/client/v4/accounts/${account}/tokens/verify`]) {
    const body = await (await fetch(url, { headers: { authorization: `Bearer ${token}` } })).json();
    if (body.success && body.result?.id) return body.result.id;
  }
  throw new Error("CLOUDFLARE_API_TOKEN could not be verified: it must be an API token with R2 edit rights");
}

export async function r2(bucket) {
  const { CLOUDFLARE_API_TOKEN: token, CLOUDFLARE_ACCOUNT_ID: account } = process.env;
  if (!token || !account) throw new Error("Set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID (the GitHub secrets of the same names).");
  const s3 = new AwsClient({ accessKeyId: await tokenId(token, account), secretAccessKey: createHash("sha256").update(token).digest("hex"), service: "s3", region: "auto" });
  const endpoint = `https://${account}.r2.cloudflarestorage.com/${bucket}`;
  const objectUrl = (key) => `${endpoint}/${key.split("/").map(encodeURIComponent).join("/")}`;
  const call = async (url, options = {}) => s3.fetch(url, options);
  return {
    /** The object's custom metadata (x-amz-meta-*) as a plain object, or null when there is no such object. */
    async head(key) {
      const response = await call(objectUrl(key), { method: "HEAD" });
      if (response.status === 404) return null;
      if (!response.ok) throw new Error(`HEAD ${key}: ${response.status}`);
      return Object.fromEntries([...response.headers].filter(([name]) => name.startsWith("x-amz-meta-")).map(([name, value]) => [name.slice(11), value]));
    },
    async put(key, body, { contentType = "application/octet-stream", meta = {} } = {}) {
      const headers = { "content-type": contentType, ...Object.fromEntries(Object.entries(meta).map(([name, value]) => [`x-amz-meta-${name}`, value])) };
      const response = await call(objectUrl(key), { method: "PUT", body, headers });
      if (!response.ok) throw new Error(`PUT ${key}: ${response.status} ${await response.text()}`);
    },
    async delete(key) {
      const response = await call(objectUrl(key), { method: "DELETE" });
      if (!response.ok && response.status !== 404) throw new Error(`DELETE ${key}: ${response.status}`);
    },
    /** Every object under `prefix`: [{ key, size, modified }]. */
    async list(prefix = "") {
      const found = [];
      for (let next = ""; ;) {
        const response = await call(`${endpoint}?list-type=2&max-keys=1000&prefix=${encodeURIComponent(prefix)}${next ? `&continuation-token=${encodeURIComponent(next)}` : ""}`);
        if (!response.ok) throw new Error(`LIST ${prefix}: ${response.status}`);
        const xml = await response.text();
        for (const [, contents] of xml.matchAll(/<Contents>([\s\S]*?)<\/Contents>/g)) {
          const field = (name) => contents.match(new RegExp(`<${name}>([^<]*)</${name}>`))?.[1] ?? "";
          found.push({ key: field("Key").replace(/&amp;/g, "&"), size: Number(field("Size")), modified: field("LastModified") });
        }
        next = /<IsTruncated>true<\/IsTruncated>/.test(xml) ? (xml.match(/<NextContinuationToken>([^<]*)<\/NextContinuationToken>/)?.[1] ?? "") : "";
        if (!next) return found;
      }
    },
  };
}
