import assert from "node:assert/strict";
import { test } from "node:test";
import { deflateRawSync } from "node:zlib";
import { tripDecoderSource } from "../lib/trip-link.ts";

/** The decoder the /trip/ page ships, run in Node (which has atob, Blob and DecompressionStream). */
const decode = new Function(`${tripDecoderSource}; return acDecodeTrip;`)();
const encode = (value) => deflateRawSync(Buffer.from(typeof value === "string" ? value : JSON.stringify(value))).toString("base64url");

export function sampleTrip(stops) {
  return {
    v: 1, n: "Tassie loop", sd: "2026-12-20", ed: "2027-01-04",
    s: Array.from({ length: stops }, (_, index) => ({
      t: `Stop ${index + 1}`, ...(index % 2 ? {} : { id: `AU0000${index}`, p: "/places/new-south-wales/murphys-glen-campground/", d: "2026-12-21", no: "Arrive before dark" }),
      la: Number((-33.9301 + index / 100).toFixed(4)), lo: 150.6312,
    })),
  };
}

test("decodes trips of 3 to 30 stops", async () => {
  for (const count of [3, 12, 30]) {
    const { trip, error } = await decode(`#${encode(sampleTrip(count))}`);
    assert.equal(error, undefined);
    assert.equal(trip.name, "Tassie loop");
    assert.equal(trip.start, "2026-12-20");
    assert.equal(trip.end, "2027-01-04");
    assert.equal(trip.stops.length, count);
    assert.deepEqual(trip.stops[0], { title: "Stop 1", lat: -33.9301, lng: 150.6312, path: "/places/new-south-wales/murphys-glen-campground/", date: "2026-12-21", note: "Arrive before dark" });
    assert.deepEqual(trip.stops[1], { title: "Stop 2", lat: -33.9201, lng: 150.6312, path: null, date: null, note: null });
  }
});

test("links a stop only to a place page on this site, and caps notes at 200 characters", async () => {
  const paths = ["https://evil.example/", "//evil.example/places/a/b/", "/places/../guides/", "javascript:alert(1)", "/places/a/b", "/guides/x/"];
  const trip = { v: 1, n: "<img src=x onerror=alert(1)>", s: paths.map((p) => ({ t: "<b>x</b>", p, la: 1, lo: 2, no: "n".repeat(500) })) };
  const result = await decode(encode(trip));
  assert.equal(result.trip.name, "<img src=x onerror=alert(1)>", "kept as text; the page sets it with textContent");
  for (const stop of result.trip.stops) {
    assert.equal(stop.path, null);
    assert.equal(stop.note.length, 200);
  }
});

test("a missing, broken or invalid link is reported, never thrown", async () => {
  assert.deepEqual(await decode(""), { error: "missing" });
  assert.deepEqual(await decode("#"), { error: "missing" });
  const good = encode(sampleTrip(3));
  for (const hash of [
    `#${good.slice(0, -6)}`, "#not*base64", "#AAAA", `#${encode("not json")}`, `#${encode([1, 2])}`,
    `#${encode({ ...sampleTrip(3), v: 2 })}`, `#${encode({ v: 1, s: [] })}`,
    `#${encode({ v: 1, s: [{ t: "No coordinates" }] })}`, `#${encode({ v: 1, s: [{ t: "Bad", la: 200, lo: 0 }] })}`,
    `#${encode({ v: 1, s: [{ t: 7, la: 1, lo: 1 }] })}`, `#${encode(sampleTrip(201))}`,
    `#${deflateRawSync(Buffer.alloc(1_000_000, 32)).toString("base64url")}`,
  ]) assert.deepEqual(await decode(hash), { error: "broken" }, hash.slice(0, 40));
});

test("ignores optional fields of the wrong type or shape", async () => {
  const { trip } = await decode(encode({ v: 1, n: 5, sd: "2026-02-30", ed: "soon", s: [{ t: "  A  ", la: 0, lo: 0, d: 20261220, no: {}, p: 3 }] }));
  assert.deepEqual(trip, { name: null, start: null, end: null, stops: [{ title: "A", lat: 0, lng: 0, path: null, date: null, note: null }] });
});
