/**
 * The payload format the app's share links carry in the URL hash (/trip/ and /place/): base64url, no
 * padding, of deflate-raw of UTF-8 JSON. The page is static, so the browser decodes it; it never reaches
 * the server. This is plain-JavaScript source for the pages' inline scripts (the static export keeps only
 * `data-static-tools` scripts), kept as a string so a page ships exactly this code and the tests run it.
 *
 * Defines `acReadPayload(hash)`, resolving to `{ json }` or `{ error: "missing" | "unsupported" | "broken" }`,
 * and the field checks every decoder uses: the payload is untrusted, so each field is type- and
 * length-checked and pages only ever set text with textContent.
 */
export const hashPayloadSource = String.raw`
function acText(value, max) {
  if (typeof value !== "string") return null;
  var chars = Array.from(value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim());
  if (!chars.length) return null;
  return chars.length > max ? chars.slice(0, max).join("") : chars.join("");
}
function acDay(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  var date = new Date(value + "T00:00:00Z");
  return !isNaN(date) && date.toISOString().slice(0, 10) === value ? value : null;
}
function acNumber(value, limit) {
  return typeof value === "number" && isFinite(value) && Math.abs(value) <= limit ? value : null;
}
function acObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : null;
}
function acReadPayload(hash) {
  var MAX_CHARS = 65536, MAX_BYTES = 262144;
  var raw = String(hash || "").replace(/^#/, "");
  if (!raw) return Promise.resolve({ error: "missing" });
  if (typeof DecompressionStream === "undefined") return Promise.resolve({ error: "unsupported" });
  if (raw.length > MAX_CHARS || !/^[A-Za-z0-9_-]+$/.test(raw)) return Promise.resolve({ error: "broken" });
  return (async function () {
    try {
      var base64 = raw.replace(/-/g, "+").replace(/_/g, "/");
      while (base64.length % 4) base64 += "=";
      var binary = atob(base64), bytes = new Uint8Array(binary.length);
      for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      var reader = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader();
      var chunks = [], size = 0;
      for (;;) {
        var part = await reader.read();
        if (part.done) break;
        size += part.value.length;
        if (size > MAX_BYTES) { reader.cancel(); return { error: "broken" }; }
        chunks.push(part.value);
      }
      var all = new Uint8Array(size), offset = 0;
      chunks.forEach(function (chunk) { all.set(chunk, offset); offset += chunk.length; });
      return { json: JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(all)) };
    } catch (error) {
      return { error: "broken" };
    }
  })();
}`;

/** The friendly messages for a link that can't be read. */
export const payloadMessages = (what: string) => ({
  missing: `This page shows a ${what} shared from the app. Open the link you were sent to see it.`,
  unsupported: `This browser can't open ${what} links. Try Safari or Chrome.`,
  broken: `This ${what} link is incomplete or broken. Ask for it to be shared again.`,
});
