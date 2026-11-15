import assert from "node:assert/strict";
import { test } from "node:test";
import { dateRange, escapeHtml, headerLine, mapData, previewImage, previewLine, rows, stopDate, usableCard } from "../places-worker/src/format.js";
import { sameHash } from "../places-worker/src/links-api.js";
import { isDay, validateLink } from "../places-worker/src/validate.js";

const trip = (extra = {}, stop = {}) => ({ v: 1, kind: "trip", n: "Tassie loop", sd: "2027-12-03", ed: "2027-12-09", s: [{ t: "Stop 1", id: "AU00001", la: -33.93012, lo: 150.63128, d: "2027-12-03", ...stop }], ...extra });
const reason = (body) => validateLink(body).error;

test("accepts a full trip and a full collection, and keeps their fields", () => {
  const full = trip({ sym: "tent.fill", col: "A1B2c3", u: "2026-11-15T03:04:05Z" });
  assert.deepEqual(validateLink(full).value, full);
  const collection = { v: 1, kind: "collection", n: "Beaches", sym: "star", col: "000000", u: "2026-11-15T03:04:05.123+13:00", p: [{ t: "A", id: "bookit:100664", la: 0, lo: 0 }, { t: "Pin", la: 90, lo: -180 }] };
  assert.deepEqual(validateLink(collection).value, collection);
  assert.deepEqual(validateLink({ v: 1, kind: "collection", n: "Empty", p: [] }).value.p, []);
  assert.deepEqual(validateLink({ v: 1, kind: "trip", n: "No stops" }).value.s, []);
});

test("rejects unknown keys anywhere", () => {
  assert.match(reason(trip({ x: 1 })), /unknown key x/);
  assert.match(reason(trip({}, { no: "note" })), /unknown key s\[0\]\.no/);
  assert.match(reason({ v: 1, kind: "collection", n: "A", s: [] }), /unknown key s/);
  assert.match(reason({ v: 1, kind: "collection", n: "A", p: [{ t: "A", la: 0, lo: 0, d: "2027-01-01" }] }), /unknown key p\[0\]\.d/);
  assert.match(reason(JSON.parse('{"v":1,"kind":"trip","n":"A","__proto__":{"x":1}}')), /unknown key __proto__/);
});

test("checks types and required fields exactly", () => {
  assert.match(reason(null), /JSON object/);
  assert.match(reason([]), /JSON object/);
  assert.match(reason(trip({ v: "1" })), /v must be 1/);
  assert.match(reason(trip({ v: 2 })), /v must be 1/);
  assert.match(reason(trip({ kind: "list" })), /kind/);
  assert.match(reason(trip({ n: 5 })), /n must be a string/);
  assert.match(reason(trip({ n: "   " })), /n is empty/);
  assert.match(reason(trip({ s: {} })), /s must be an array/);
  assert.match(reason(trip({ s: [null] })), /s\[0\] must be an object/);
  assert.match(reason(trip({}, { t: undefined })), /s\[0\]\.t must be a string/);
  assert.match(reason(trip({}, { la: "1" })), /la must be a finite number/);
});

test("limits lengths and counts", () => {
  assert.equal(validateLink(trip({ n: "é".repeat(100) })).error, undefined);
  assert.match(reason(trip({ n: "x".repeat(101) })), /longer than 100/);
  assert.match(reason(trip({}, { t: "x".repeat(201) })), /longer than 200/);
  assert.match(reason(trip({ sym: "x".repeat(65) })), /sym/);
  assert.match(reason(trip({ sym: "tent fill" })), /sym/);
  assert.match(reason(trip({ col: "12345" })), /col/);
  assert.match(reason(trip({ col: "GGGGGG" })), /col/);
  assert.match(reason(trip({}, { id: "AU 1" })), /id/);
  assert.match(reason(trip({}, { id: "x".repeat(65) })), /id/);
  const stop = { t: "A", la: 0, lo: 0 };
  assert.equal(validateLink(trip({ s: Array(300).fill(stop) })).error, undefined);
  assert.match(reason(trip({ s: Array(301).fill(stop) })), /more than 300/);
  assert.equal(validateLink({ v: 1, kind: "collection", n: "A", p: Array(500).fill(stop) }).error, undefined);
  assert.match(reason({ v: 1, kind: "collection", n: "A", p: Array(501).fill(stop) }), /more than 500/);
});

test("checks coordinates", () => {
  for (const la of [90.0001, -91, Infinity, NaN]) assert.match(reason(trip({}, { la })), /la/);
  for (const lo of [180.5, -181, -Infinity]) assert.match(reason(trip({}, { lo })), /lo/);
  assert.match(reason(JSON.parse('{"v":1,"kind":"trip","n":"A","s":[{"t":"A","la":1e400,"lo":0}]}')), /finite/);
});

test("checks dates and times", () => {
  for (const day of ["2027-02-29", "2027-13-01", "2027-00-10", "1999-12-31", "2101-01-01", "2027-1-01", "2027-01-01T00:00:00Z"]) assert.equal(isDay(day), false, day);
  for (const day of ["2028-02-29", "2000-01-01", "2100-12-31"]) assert.equal(isDay(day), true, day);
  assert.match(reason(trip({ sd: "2027-12-10" })), /ed is before sd/);
  assert.equal(validateLink(trip({ sd: "2027-12-09" })).error, undefined);
  assert.match(reason(trip({}, { d: "2027-02-30" })), /d is not a date/);
  assert.match(reason(trip({ u: "yesterday" })), /u is not/);
  assert.match(reason(trip({ u: "2026-11-15T03:04:05.000000000000000000000000Z" })), /u is not/);
  assert.match(reason(trip({ u: "2026-11-15" })), /u is not/);
});

test("drops control characters from names and titles", () => {
  const { value } = validateLink(trip({ n: "Big\u0000 lap\n2027\u0007" }, { t: "\tStop\u2028one" }));
  assert.equal(value.n, "Big lap 2027");
  assert.equal(value.s[0].t, "Stop one");
  assert.match(reason(trip({ n: "\u0000\u0001" })), /n is empty/);
});

test("formats dates for the rows, the header and the preview", () => {
  assert.equal(stopDate("2027-12-03"), "Fri 3 Dec");
  assert.equal(stopDate("2026-12-01"), "Tue 1 Dec");
  assert.equal(dateRange("2027-12-03", "2027-12-09"), "3–9 Dec 2027");
  assert.equal(dateRange("2027-11-28", "2027-12-03"), "28 Nov – 3 Dec 2027");
  assert.equal(dateRange("2027-12-28", "2028-01-03"), "28 Dec 2027 – 3 Jan 2028");
  assert.equal(dateRange("2027-12-28", "2028-01-03", false), "28 Dec – 3 Jan");
  assert.equal(dateRange("2027-12-03", "2027-12-03"), "3 Dec 2027");
  assert.equal(dateRange("2027-12-03", undefined), "3 Dec 2027");
  assert.equal(dateRange(undefined, "2027-12-09", false), "9 Dec");
  assert.equal(dateRange(), "");
  const six = trip({ s: Array(6).fill({ t: "A", la: 0, lo: 0 }) });
  assert.equal(headerLine(six), "3–9 Dec 2027 · 6 stops");
  assert.equal(previewLine(six), "6 stops · 3–9 Dec");
  assert.equal(previewLine(trip({ sd: undefined, ed: undefined })), "1 stop");
  assert.equal(headerLine({ kind: "collection", p: Array(12).fill({}) }), "12 places");
  assert.equal(previewLine({ kind: "collection", p: [{}] }), "1 place");
});

const card = usableCard({ n: "Perkins & Flat", h: "/places/new-south-wales/perkins-flat/", i: "https://x.example/a.jpg", s: "Campground · High Plains · New South Wales", g: "★ 4.5", o: "https://x.example/b.jpg", ty: "campground" });

test("uses only cards with a place page path and https photos", () => {
  assert.equal(usableCard({ n: "A", h: "javascript:alert(1)" }), null);
  assert.equal(usableCard({ n: "A", h: "//evil.example/places/a/b/" }), null);
  assert.equal(usableCard(null), null);
  assert.equal(usableCard({ n: "A", h: "/places/a/b/", i: "http://x/a.jpg", o: 'https://x/"a.jpg' }).i, "");
  assert.equal(usableCard({ n: "A", h: "/places/a/b/", o: 'https://x/"a.jpg' }).o, "");
  assert.equal(card.type, "Campground");
});

test("writes rows and map data, escaping the link's text", () => {
  const evil = '<script>alert(1)</script>"\'&';
  const link = { kind: "trip", n: evil, s: [{ t: evil, id: "AU1", la: -33.93012, lo: 150.63128, d: "2027-12-03" }, { t: evil, id: "AU404", la: 1, lo: 2 }, { t: "Pin", la: 1.0005, lo: 2 }] };
  const cards = new Map([["AU1", card]]);
  const html = rows(link, cards);
  assert.ok(!html.includes("<script>"));
  assert.equal(html.split("<li").length - 1, 3);
  assert.ok(html.startsWith('<li><a href="/places/new-south-wales/perkins-flat/"><b class="sl-num">1</b><img src="https://x.example/a.jpg" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer"><span><strong>Perkins &amp; Flat</strong><small>Fri 3 Dec · Campground · High Plains · New South Wales</small></span><em class="pl-row-tag"><i class="sl-star">★</i> 4.5</em></a></li>'));
  assert.ok(html.includes('<li class="sl-plain"><div><b class="sl-num">2</b><span class="sl-pin" aria-hidden="true"></span><span><strong>&lt;script&gt;alert(1)&lt;/script&gt;&quot;&#39;&amp;</strong></span></div></li>'));
  const dots = rows({ kind: "collection", p: [{ t: "A", la: 0, lo: 0 }] }, cards);
  assert.ok(dots.includes('<i class="sl-dot" aria-hidden="true"></i>'));
  assert.equal(rows({ kind: "collection", p: [{ t: "A", id: "AU1", la: 0, lo: 0 }] }, new Map([["AU1", { ...card, i: "", g: "Free" }]])).includes('<span class="sl-pin" aria-hidden="true"></span><span><strong>Perkins &amp; Flat</strong><small>Campground · High Plains · New South Wales</small></span><em class="pl-row-tag">Free</em>'), true);
  assert.deepEqual(JSON.parse(mapData(link, cards)), { p: [[150.631, -33.93], [2, 1], [2, 1.001]], l: [["Perkins & Flat", "new-south-wales/perkins-flat", 0], [evil, "", -1], ["Pin", "", -1]], t: ["Campground"] });
  assert.ok(!/[<>&']/.test(mapData(link, cards)), "the map JSON carries < > & ' as \\u escapes");
  assert.equal(previewImage(link, cards), "https://x.example/b.jpg");
  assert.equal(previewImage(link, new Map()), "");
});

test("escapes HTML and compares hashes", () => {
  assert.equal(escapeHtml(`<a href="x">'&`), "&lt;a href=&quot;x&quot;&gt;&#39;&amp;");
  assert.equal(sameHash("ab12", "ab12"), true);
  assert.equal(sameHash("ab12", "ab13"), false);
  assert.equal(sameHash("ab12", "ab1"), false);
  assert.equal(sameHash(undefined, "ab12"), false);
});
