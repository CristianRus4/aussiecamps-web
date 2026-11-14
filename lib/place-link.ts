import { hashPayloadSource, payloadMessages } from "@/lib/hash-payload";
import { appLink, openAppScript } from "@/lib/open-app";

/**
 * A place shared from the app that has no page of its own (a dropped pin, an address, a user's own spot):
 * https://aussiecamps.app/place/#<payload>, in the format of lib/hash-payload.ts, version 1:
 *
 *   {"v":1,"t":"Our spot by the river","ty":"Pin","la":-33.9301,"lo":150.6312,
 *    "ph":"https://…/photo.jpg","bk":"https://book.bookeasy.com/…","id":"AU00002"}
 *
 * t name, ty type label, la/lo coordinates, ph photo, bk booking link, id the app's place id. Only t, la and
 * lo are required. A photo must be an https: URL; a booking link must be https: on a known booking host
 * (BookEasy, BookIt, DOC), so a crafted link can never send a reader anywhere else.
 */
export const BOOKING_HOSTS = ["bookeasy.com", "bookeasy.com.au", "bookit.co.nz", "doc.govt.nz"];

/** Defines `acDecodePlace(hash)`: resolves to `{ place }` or `{ error }`. */
export const placeDecoderSource = `${hashPayloadSource}
function acDecodePlace(hash) {
  var HOSTS = ${JSON.stringify(BOOKING_HOSTS)};
  function https(value) {
    if (typeof value !== "string" || value.length > 2000) return null;
    try { var url = new URL(value); } catch (error) { return null; }
    return url.protocol === "https:" && !url.username && !url.password ? url : null;
  }
  function booking(value) {
    var url = https(value);
    if (!url) return null;
    var host = url.hostname.toLowerCase();
    return HOSTS.some(function (known) { return host === known || host.slice(-known.length - 1) === "." + known; }) ? url.href : null;
  }
  function check(json) {
    if (!acObject(json) || json.v !== 1) return null;
    var name = acText(json.t, 120), lat = acNumber(json.la, 90), lng = acNumber(json.lo, 180);
    if (name === null || lat === null || lng === null) return null;
    var photo = https(json.ph);
    return { name: name, type: acText(json.ty, 60), lat: lat, lng: lng, photo: photo ? photo.href : null, booking: booking(json.bk), id: acText(json.id, 80) };
  }
  return acReadPayload(hash).then(function (result) {
    if (result.error) return result;
    var place = check(result.json);
    return place ? { place: place } : { error: "broken" };
  });
}`;

/** Renders the decoded place into the /place/ page's elements, and again whenever the hash changes. */
export const placeScript = `(function(){${placeDecoderSource}
var MESSAGES = ${JSON.stringify(payloadMessages("place"))};
var d = document, $ = function (id) { return d.getElementById(id); };
function render(result) {
  var status = $("place-status"), photo = $("place-photo"), directions = $("place-directions"), book = $("place-book");
  photo.replaceChildren(); photo.hidden = true;
  if (result.error) {
    $("place-name").textContent = "Shared place"; $("place-type").textContent = "";
    status.textContent = MESSAGES[result.error]; status.hidden = false; directions.hidden = true; book.hidden = true;
    return;
  }
  var place = result.place;
  $("place-name").textContent = place.name;
  $("place-type").textContent = place.type || "";
  status.hidden = true;
  if (place.photo) {
    var image = d.createElement("img");
    image.alt = place.name; image.referrerPolicy = "no-referrer"; image.decoding = "async";
    image.addEventListener("error", function () { photo.hidden = true; });
    image.src = place.photo;
    photo.appendChild(image); photo.hidden = false;
  }
  directions.href = "https://maps.apple.com/?daddr=" + place.lat + "," + place.lng + "&q=" + encodeURIComponent(place.name);
  directions.hidden = false;
  if (place.booking) { book.href = place.booking; book.hidden = false; } else book.hidden = true;
}
function show() { acDecodePlace(location.hash).then(render); }
window.addEventListener("hashchange", show);
show();
})();`;

/** The app link of /place/ and /trip/: the hash is added when tapped (lib/open-app.ts). */
export const placeAppLink = appLink("/place/#");
export { openAppScript };
