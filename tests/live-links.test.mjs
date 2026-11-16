import assert from "node:assert/strict";
import { test } from "node:test";
import { dateRange, distance, drivingTime, escapeHtml, mapData, previewLine, rows, stats, statsHtml, stopDate, usableCard } from "../places-worker/src/format.js";
import { clientKey } from "../places-worker/src/index.js";
import { linksApi, sameHash } from "../places-worker/src/links-api.js";
import { isDay, validateLink } from "../places-worker/src/validate.js";

const trip = (extra = {}, stop = {}) => ({ v: 1, kind: "trip", n: "Tassie loop", sd: "2027-12-03", ed: "2027-12-09", s: [{ t: "Stop 1", id: "AU00001", la: -33.93012, lo: 150.63128, d: "2027-12-03", ...stop }], ...extra });
const reason = (body) => validateLink(body).error;

test("accepts a full trip and a full collection, and keeps their fields", () => {
  const full = trip({ sym: "tent.fill", col: "A1B2c3", dist: 1240000.5, dur: 52200, u: "2026-11-15T03:04:05Z" });
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

test("checks a trip's distance and driving time", () => {
  for (const [dist, dur] of [[0, 0], [20_000_000, 10_000_000], [1.5, 0.25]]) assert.equal(validateLink(trip({ dist, dur })).error, undefined);
  for (const dist of [-1, 20_000_001, "100", null, Infinity, NaN]) assert.match(reason(trip({ dist })), /dist/);
  for (const dur of [-0.5, 10_000_001, "60", true]) assert.match(reason(trip({ dur })), /dur/);
  assert.match(reason({ v: 1, kind: "collection", n: "A", dist: 10 }), /unknown key dist/);
  assert.match(reason({ v: 1, kind: "collection", n: "A", dur: 10 }), /unknown key dur/);
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
  const six = trip({ s: Array(6).fill({ t: "A", la: 0, lo: 0 }), dist: 1_240_400, dur: 52_200 });
  assert.deepEqual(stats(six), [["Dates", "3–9 Dec 2027"], ["Stops", "6"], ["Distance", "1,240 km"], ["Driving", "14 h 30 min"]]);
  assert.equal(previewLine(six), "6 stops · 1,240 km · 3–9 Dec");
  assert.deepEqual(stats(trip({ sd: undefined, ed: undefined, dist: 0, dur: 0 })), [["Stops", "1"]]);
  assert.equal(previewLine(trip({ sd: undefined, ed: undefined })), "1 stop");
  assert.deepEqual(stats({ kind: "collection", p: Array(12).fill({}) }), [["Places", "12"]]);
  assert.equal(previewLine({ kind: "collection", p: [{}] }), "1 place");
  assert.equal(statsHtml({ kind: "collection", p: [] }), "<div><dt>Places</dt><dd>0</dd></div>");
});

test("formats distances and driving times", () => {
  assert.equal(distance(1_240_400), "1,240 km");
  assert.equal(distance(12_345_678), "12,346 km");
  assert.equal(distance(8_420), "8.4 km");
  assert.equal(distance(5_000), "5 km");
  assert.equal(distance(9_990), "10 km");
  assert.equal(drivingTime(52_200), "14 h 30 min");
  assert.equal(drivingTime(2_700), "45 min");
  assert.equal(drivingTime(10_800), "3 h");
  assert.equal(drivingTime(10), "1 min");
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
  assert.equal(rows({ kind: "collection", p: [{ t: "A", la: 0, lo: 0 }] }, cards), '<li class="sl-plain"><div><span class="sl-pin" aria-hidden="true"></span><span><strong>A</strong></span></div></li>');
  assert.equal(rows({ kind: "collection", p: [{ t: "A", id: "AU1", la: 0, lo: 0 }] }, new Map([["AU1", { ...card, i: "", g: "Free" }]])).includes('<span class="sl-pin" aria-hidden="true"></span><span><strong>Perkins &amp; Flat</strong><small>Campground · High Plains · New South Wales</small></span><em class="pl-row-tag">Free</em>'), true);
  assert.deepEqual(JSON.parse(mapData(link, cards)), { p: [[150.631, -33.93], [2, 1], [2, 1.001]], l: [["Perkins & Flat", "new-south-wales/perkins-flat", 0], [evil, "", -1], ["Pin", "", -1]], t: ["Campground"] });
  assert.ok(!/[<>&']/.test(mapData(link, cards)), "the map JSON carries < > & ' as \\u escapes");
});

test("escapes HTML and compares hashes", () => {
  assert.equal(escapeHtml(`<a href="x">'&`), "&lt;a href=&quot;x&quot;&gt;&#39;&amp;");
  assert.equal(sameHash("ab12", "ab12"), true);
  assert.equal(sameHash("ab12", "ab13"), false);
  assert.equal(sameHash("ab12", "ab1"), false);
  assert.equal(sameHash(undefined, "ab12"), false);
});

test("rate limits count an IPv6 client by its /64", () => {
  assert.equal(clientKey("203.0.113.9"), "203.0.113.9");
  assert.equal(clientKey("2001:db8:a:b:1:2:3:4"), "2001:db8:a:b::/64");
  assert.equal(clientKey("2001:DB8:A:B::9"), "2001:db8:a:b::/64");
  assert.equal(clientKey("2001:0db8::1"), "2001:db8:0:0::/64");
  assert.equal(clientKey("::1"), "0:0:0:0::/64");
});

test("answers 404 for paths under a link id", async () => {
  for (const method of ["GET", "PUT", "DELETE"]) {
    const response = await linksApi(new Request("https://x.example/api/links/abcdefabcdef/image", { method }), {}, {}, "abcdefabcdef/image", async () => null);
    assert.equal(response.status, 404);
  }
});

// ---- 16 Nov 2026: takedowns, daily caps and totals, the page's language (an in-memory stand-in for R2) ----
import { CREATE_CAP, WRITE_CAP } from "../places-worker/src/links-api.js";
import { LABELS, pickLanguage, usesMiles } from "../places-worker/src/labels.js";

class FakeBucket {
  constructor() { this.objects = new Map(); this.n = 0; }
  stored(key) { const o = this.objects.get(key); return o && { etag: o.etag, httpEtag: `"${o.etag}"`, customMetadata: o.meta, body: { cancel: async () => {} }, json: async () => JSON.parse(o.body), text: async () => o.body }; }
  async head(key) { return this.objects.has(key) ? this.stored(key) : null; }
  async get(key) { return this.objects.has(key) ? this.stored(key) : null; }
  async put(key, body, options = {}) {
    const existing = this.objects.get(key);
    if (options.onlyIf?.etagDoesNotMatch === "*" && existing) return null;
    if (options.onlyIf?.etagMatches && existing?.etag !== options.onlyIf.etagMatches) return null;
    this.objects.set(key, { body: String(body), meta: options.customMetadata ?? {}, etag: `e${(this.n += 1)}` });
    return {};
  }
  async delete(key) { this.objects.delete(key); }
}
const SITE_T = { url: "https://example.test" };
const TOKEN_A = "a".repeat(43), TOKEN_B = "b".repeat(43);
const sampleTrip = { v: 1, kind: "trip", n: "Coast", s: [{ t: "Stop", la: -33.1, lo: 151.1 }] };
async function call(env, method, rest, { token, body, client = "1.2.3.4" } = {}) {
  const pending = [];
  const ctx = { waitUntil: (p) => pending.push(p) };
  const request = new Request(`https://example.test/api/links/${rest}`, { method, headers: token ? { authorization: `Bearer ${token}` } : {}, body: body ? JSON.stringify(body) : undefined });
  const response = await linksApi(request, env, SITE_T, rest, async () => null, client, ctx);
  await Promise.all(pending);
  return response;
}

test("an admin takedown answers 410 and its owner can't restore it", async () => {
  const env = { LINKS: new FakeBucket() };
  assert.equal((await call(env, "PUT", "AbCdEfGhIjKl", { token: TOKEN_A, body: sampleTrip })).status, 200);
  // What scripts/remove-link.mjs writes: the owner's hash, removed and b.
  const meta = env.LINKS.objects.get("links/AbCdEfGhIjKl.json").meta;
  await env.LINKS.put("links/AbCdEfGhIjKl.json", "", { customMetadata: { h: meta.h, removed: "1", b: "1" } });
  assert.equal((await call(env, "GET", "AbCdEfGhIjKl")).status, 410);
  assert.equal((await call(env, "PUT", "AbCdEfGhIjKl", { token: TOKEN_A, body: sampleTrip })).status, 410);
  assert.equal((await call(env, "DELETE", "AbCdEfGhIjKl", { token: TOKEN_A })).status, 204);
  assert.equal(env.LINKS.objects.get("links/AbCdEfGhIjKl.json").meta.b, "1");
  // An owner's own removal can still be undone.
  assert.equal((await call(env, "PUT", "ZyXwVuTsRqPo", { token: TOKEN_B, body: sampleTrip })).status, 200);
  assert.equal((await call(env, "DELETE", "ZyXwVuTsRqPo", { token: TOKEN_B })).status, 204);
  assert.equal((await call(env, "PUT", "ZyXwVuTsRqPo", { token: TOKEN_B, body: sampleTrip })).status, 200);
});

test("caps writes and new links per address and day, and keeps the day's totals", async () => {
  const env = { LINKS: new FakeBucket() };
  const day = new Date().toISOString().slice(0, 10);
  for (let i = 0; i < CREATE_CAP; i += 1) assert.equal((await call(env, "PUT", `id${String(i).padStart(10, "0")}`, { token: TOKEN_A, body: sampleTrip })).status, 200);
  const over = await call(env, "PUT", "newIdNewId01", { token: TOKEN_A, body: sampleTrip });
  assert.equal(over.status, 429);
  assert.ok(Number(over.headers.get("retry-after")) > 0);
  // Another address may still create; an update of an existing link isn't a new link.
  assert.equal((await call(env, "PUT", "newIdNewId01", { token: TOKEN_A, body: sampleTrip, client: "5.6.7.8" })).status, 200);
  assert.equal((await call(env, "PUT", "id000000000", { token: TOKEN_A, body: sampleTrip })).status, 400); // 11 characters
  assert.equal((await call(env, "PUT", "id0000000000", { token: TOKEN_A, body: { ...sampleTrip, n: "Renamed" } })).status, 200);
  const totals = await (await call(env, "GET", `stats/${day}`)).json();
  assert.equal(totals.creates, CREATE_CAP + 1);
  assert.equal(totals.writes, CREATE_CAP + 2);
  assert.equal(totals.clients, 2);
  assert.ok(totals.capped >= 1);
  // The write cap, whatever the request.
  const counter = [...env.LINKS.objects.keys()].find((key) => key.startsWith(`counters/${day}/`));
  await env.LINKS.put(counter, JSON.stringify({ w: WRITE_CAP, c: 0 }));
  const capped = [...env.LINKS.objects.keys()].filter((key) => key.startsWith(`counters/${day}/`));
  for (const key of capped) await env.LINKS.put(key, JSON.stringify({ w: WRITE_CAP, c: 0 }));
  assert.equal((await call(env, "PUT", "id0000000000", { token: TOKEN_A, body: sampleTrip })).status, 429);
  assert.equal((await call(env, "GET", "stats/not-a-day")).status, 404);
});

test("picks the page's language and units from Accept-Language", () => {
  assert.equal(pickLanguage("de-DE,de;q=0.9,en;q=0.8"), "de");
  assert.equal(pickLanguage("zh-TW"), "zh-hant");
  assert.equal(pickLanguage("zh-CN,zh;q=0.9"), "zh-hans");
  assert.equal(pickLanguage("pt-BR"), "pt-br");
  assert.equal(pickLanguage("es-MX"), "es-419");
  assert.equal(pickLanguage("es-ES"), "es");
  assert.equal(pickLanguage("no"), "nb");
  assert.equal(pickLanguage("xx-YY, fr;q=0.5"), "fr");
  assert.equal(pickLanguage(""), "en");
  assert.equal(pickLanguage(null), "en");
  assert.equal(usesMiles("en-US,en;q=0.9"), true);
  assert.equal(usesMiles("en-GB"), true);
  assert.equal(usesMiles("en-AU"), false);
  assert.equal(usesMiles("de"), false);
  for (const [code, words] of Object.entries(LABELS)) {
    assert.deepEqual(Object.keys(words).sort(), Object.keys(LABELS.en).sort(), code);
    assert.equal(words.contact.length, 3, code);
    assert.doesNotMatch(JSON.stringify(words), /—/, code);
  }
});

test("writes the stats in the visitor's language and units", () => {
  const link = { kind: "trip", sd: "2027-12-03", ed: "2027-12-09", dist: 1240400, dur: 52200, s: [{}, {}, {}] };
  assert.deepEqual(stats(link, "de"), [["Datum", "3.–9. Dez. 2027"], ["Stopps", "3"], ["Strecke", "1.240 km"], ["Fahrzeit", "14 Std. 30 Min."]]);
  assert.deepEqual(stats(link, "en", true)[2], ["Distance", "771 mi"]);
  assert.equal(stats(link, "ja")[0][1], "2027年12月3日～12月9日");
  assert.deepEqual(stats({ kind: "collection", p: [{}, {}] }, "fr"), [["Lieux", "2"]]);
});
