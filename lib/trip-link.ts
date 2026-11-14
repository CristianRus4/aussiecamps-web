import { hashPayloadSource, payloadMessages } from "@/lib/hash-payload";

/**
 * The read-only trip link the app shares: https://aussiecamps.app/trip/#<payload>.
 *
 * The payload is base64url (no padding) of deflate-raw of UTF-8 JSON, version 1:
 *
 *   {"v":1,"n":"Tassie loop","sd":"2026-12-20","ed":"2027-01-04",
 *    "s":[{"t":"Bents Basin","id":"AU00002","p":"/places/new-south-wales/…/","la":-33.9301,"lo":150.6312,
 *          "d":"2026-12-20","no":"Arrive before dark"}]}
 *
 * Only t, la and lo are required on a stop. The payload format and field checks are lib/hash-payload.ts. The page is static, so the browser decodes the payload
 * itself; it never reaches the server. These are plain-JavaScript sources for the inline script on
 * /trip/ (the static export keeps only `data-static-tools` scripts), kept as strings so the page ships
 * exactly this code and tests/trip-link.test.mjs runs the same decoder in Node.
 *
 * The payload is untrusted: every field is type- and length-checked, text is only ever set with
 * textContent, and a stop links only to a place page on this site.
 */

/** Defines `acDecodeTrip(hash)`: resolves to `{ trip }` or `{ error: "missing" | "unsupported" | "broken" }`. */
export const tripDecoderSource = `${hashPayloadSource}
function acDecodeTrip(hash) {
  var MAX_STOPS = 200;
  function check(json) {
    if (!acObject(json) || json.v !== 1) return null;
    if (!Array.isArray(json.s) || json.s.length === 0 || json.s.length > MAX_STOPS) return null;
    var stops = [];
    for (var i = 0; i < json.s.length; i++) {
      var stop = acObject(json.s[i]);
      if (!stop) return null;
      var title = acText(stop.t, 120), lat = acNumber(stop.la, 90), lng = acNumber(stop.lo, 180);
      if (title === null || lat === null || lng === null) return null;
      var path = typeof stop.p === "string" && /^\\/places\\/[a-z0-9-]+\\/[a-z0-9-]+\\/$/.test(stop.p) ? stop.p : null;
      stops.push({ title: title, lat: lat, lng: lng, path: path, date: acDay(stop.d), note: acText(stop.no, 200) });
    }
    return { name: acText(json.n, 120), start: acDay(json.sd), end: acDay(json.ed), stops: stops };
  }
  return acReadPayload(hash).then(function (result) {
    if (result.error) return result;
    var trip = check(result.json);
    return trip ? { trip: trip } : { error: "broken" };
  });
}`;

/** Renders the decoded trip into the /trip/ page's elements, and again whenever the hash changes. */
export function tripScript(locale: string): string {
  return `(function(){${tripDecoderSource}
var MESSAGES = ${JSON.stringify(payloadMessages("trip"))};
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
