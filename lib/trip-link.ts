/**
 * The read-only trip link the app shares: https://aussiecamps.app/trip/#<payload>.
 *
 * The payload is base64url (no padding) of deflate-raw of UTF-8 JSON, version 1:
 *
 *   {"v":1,"n":"Tassie loop","sd":"2026-12-20","ed":"2027-01-04",
 *    "s":[{"t":"Bents Basin","id":"AU00002","p":"/places/new-south-wales/…/","la":-33.9301,"lo":150.6312,
 *          "d":"2026-12-20","no":"Arrive before dark"}]}
 *
 * Only t, la and lo are required on a stop. The page is static, so the browser decodes the payload
 * itself; it never reaches the server. These are plain-JavaScript sources for the inline script on
 * /trip/ (the static export keeps only `data-static-tools` scripts), kept as strings so the page ships
 * exactly this code and tests/trip-link.test.mjs runs the same decoder in Node.
 *
 * The payload is untrusted: every field is type- and length-checked, text is only ever set with
 * textContent, and a stop links only to a place page on this site.
 */

/** Defines `acDecodeTrip(hash)`: resolves to `{ trip }` or `{ error: "missing" | "unsupported" | "broken" }`. */
export const tripDecoderSource = String.raw`
function acDecodeTrip(hash) {
  var MAX_CHARS = 65536, MAX_BYTES = 262144, MAX_STOPS = 200;
  function text(value, max) {
    if (typeof value !== "string") return null;
    var chars = Array.from(value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim());
    if (!chars.length) return null;
    return chars.length > max ? chars.slice(0, max).join("") : chars.join("");
  }
  function day(value) {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
    var date = new Date(value + "T00:00:00Z");
    return !isNaN(date) && date.toISOString().slice(0, 10) === value ? value : null;
  }
  function number(value, limit) {
    return typeof value === "number" && isFinite(value) && Math.abs(value) <= limit ? value : null;
  }
  function check(json) {
    if (!json || typeof json !== "object" || Array.isArray(json) || json.v !== 1) return null;
    if (!Array.isArray(json.s) || json.s.length === 0 || json.s.length > MAX_STOPS) return null;
    var stops = [];
    for (var i = 0; i < json.s.length; i++) {
      var stop = json.s[i];
      if (!stop || typeof stop !== "object" || Array.isArray(stop)) return null;
      var title = text(stop.t, 120), lat = number(stop.la, 90), lng = number(stop.lo, 180);
      if (title === null || lat === null || lng === null) return null;
      var path = typeof stop.p === "string" && /^\/places\/[a-z0-9-]+\/[a-z0-9-]+\/$/.test(stop.p) ? stop.p : null;
      stops.push({ title: title, lat: lat, lng: lng, path: path, date: day(stop.d), note: text(stop.no, 200) });
    }
    return { name: text(json.n, 120), start: day(json.sd), end: day(json.ed), stops: stops };
  }
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
      var trip = check(JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(all)));
      return trip ? { trip: trip } : { error: "broken" };
    } catch (error) {
      return { error: "broken" };
    }
  })();
}`;

/** Renders the decoded trip into the /trip/ page's elements, and again whenever the hash changes. */
export function tripScript(locale: string): string {
  return `(function(){${tripDecoderSource}
var MESSAGES = {
  missing: "This page shows a trip shared from the app. Open the link you were sent to see it.",
  unsupported: "This browser can't open trip links. Try Safari or Chrome.",
  broken: "This trip link is incomplete or broken. Ask for it to be shared again."
};
var d = document, $ = function (id) { return d.getElementById(id); };
function format(value) { return new Date(value + "T00:00:00Z").toLocaleDateString(${JSON.stringify(locale)}, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }); }
function nights(start, end) { return Math.round((Date.parse(end) - Date.parse(start)) / 86400000); }
function el(tag, className, content) { var node = d.createElement(tag); if (className) node.className = className; if (content) node.textContent = content; return node; }
function render(result) {
  var list = $("trip-stops"), status = $("trip-status"), meta = $("trip-meta");
  list.replaceChildren(); meta.replaceChildren();
  if (result.error) {
    $("trip-name").textContent = "Shared trip";
    status.textContent = MESSAGES[result.error]; status.hidden = false; list.hidden = true;
    return;
  }
  var trip = result.trip;
  $("trip-name").textContent = trip.name || "Shared trip";
  var facts = [];
  if (trip.start && trip.end && trip.end >= trip.start) {
    facts.push(format(trip.start) + " – " + format(trip.end));
    var count = nights(trip.start, trip.end);
    if (count > 0) facts.push(count + (count === 1 ? " night" : " nights"));
  } else if (trip.start) facts.push("From " + format(trip.start));
  facts.push(trip.stops.length + (trip.stops.length === 1 ? " stop" : " stops"));
  facts.forEach(function (fact) { meta.appendChild(el("span", "", fact)); });
  trip.stops.forEach(function (stop, index) {
    var item = el("li", "trip-stop");
    item.appendChild(el("span", "trip-stop-number", String(index + 1)));
    var body = el("div", "trip-stop-body");
    var title = stop.path ? el("a", "trip-stop-title", stop.title) : el("strong", "trip-stop-title", stop.title);
    if (stop.path) title.setAttribute("href", stop.path);
    body.appendChild(title);
    if (stop.date) body.appendChild(el("small", "", format(stop.date)));
    if (stop.note) body.appendChild(el("p", "trip-stop-note", stop.note));
    item.appendChild(body);
    list.appendChild(item);
  });
  status.hidden = true; list.hidden = false;
}
function show() { acDecodeTrip(location.hash).then(render); }
window.addEventListener("hashchange", show);
show();
})();`;
}
