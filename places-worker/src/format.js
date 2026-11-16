/**
 * The text and markup of a live link's page (src/link-page.js): dates, the stats under the name, the preview's
 * line, the list's rows and the map's data. Plain functions, so the tests run them in Node. Everything from the
 * link (names, titles) is escaped; links and image URLs only ever come from the place cards the build writes.
 */

import { intlLocale, labels } from "./labels.js";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const PLACE_PAGE = /^\/places\/[a-z0-9-]+\/[a-z0-9-]+\/$/;

const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
/** Escapes text for HTML content and double- or single-quoted attributes. */
export const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ESCAPES[char]);

const parts = (day) => { const [y, m, d] = day.split("-").map(Number); return { y, m: m - 1, d, w: new Date(Date.UTC(y, m - 1, d)).getUTCDay() }; };

const utc = (day) => { const { y, m, d } = parts(day); return new Date(Date.UTC(y, m, d)); };

/** "Tue 3 Dec": a stop's date in its row. Other languages: Intl's short weekday, day and month. */
export const stopDate = (day, code = "en") => {
  if (code !== "en") return new Intl.DateTimeFormat(intlLocale(code), { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" }).format(utc(day));
  const { m, d, w } = parts(day); return `${DAYS[w]} ${d} ${MONTHS[m]}`;
};

/** A trip's dates: "3–9 Dec 2027", "28 Nov – 3 Dec 2027", "28 Dec 2027 – 3 Jan 2028"; without years for the
 * link preview ("3–9 Dec", "28 Dec – 3 Jan"). One date or the same day twice: "3 Dec 2027". */
export function dateRange(start, end, withYear = true, code = "en") {
  const days = [start, end].filter(Boolean);
  if (!days.length) return "";
  if (code !== "en") {
    // Japanese, Korean and Chinese write months as "12月": "short" would turn them into plain numbers.
    const month = ["ja", "ko", "zh-hans", "zh-hant"].includes(code) ? "long" : "short";
    const format = new Intl.DateTimeFormat(intlLocale(code), { day: "numeric", month, ...(withYear ? { year: "numeric" } : {}), timeZone: "UTC" });
    if (days.length === 1 || days[0] === days[1]) return format.format(utc(days[0]));
    // ICU writes Japanese and Chinese ranges as plain numbers ("2027/12/03～2027/12/09"): join two dates instead,
    // the second without its year when both share it ("2027年12月3日～12月9日").
    if (["ja", "zh-hans", "zh-hant"].includes(code)) {
      const sameYear = days[0].slice(0, 4) === days[1].slice(0, 4);
      const end = sameYear ? new Intl.DateTimeFormat(intlLocale(code), { day: "numeric", month: "long", timeZone: "UTC" }) : format;
      return `${format.format(utc(days[0]))}${code === "ja" ? "～" : "–"}${end.format(utc(days[1]))}`;
    }
    return format.formatRange(utc(days[0]), utc(days[1]));
  }
  const a = parts(days[0]), b = parts(days[days.length - 1]);
  const year = (p) => (withYear ? ` ${p.y}` : "");
  if (days.length === 1 || days[0] === days[1]) return `${a.d} ${MONTHS[a.m]}${year(a)}`;
  if (a.y === b.y && a.m === b.m) return `${a.d}–${b.d} ${MONTHS[b.m]}${year(b)}`;
  if (a.y === b.y) return `${a.d} ${MONTHS[a.m]} – ${b.d} ${MONTHS[b.m]}${year(b)}`;
  return withYear ? `${a.d} ${MONTHS[a.m]} ${a.y} – ${b.d} ${MONTHS[b.m]} ${b.y}` : `${a.d} ${MONTHS[a.m]} – ${b.d} ${MONTHS[b.m]}`;
}

const count = (n, one, many) => `${n} ${n === 1 ? one : many}`;
const items = (link) => (link.kind === "trip" ? link.s : link.p) ?? [];
const counted = (link) => (link.kind === "trip" ? count(items(link).length, "stop", "stops") : count(items(link).length, "place", "places"));

/** Metres as "1,240 km", or with one decimal under 10 ("8.4 km"); in miles ("771 mi") for visitors who drive in
 * miles. Other languages: their own number format. */
export function distance(metres, code = "en", miles = false) {
  const value = miles ? metres / 1609.344 : metres / 1000;
  return new Intl.NumberFormat(code === "en" ? "en-US" : intlLocale(code), { style: "unit", unit: miles ? "mile" : "kilometer", unitDisplay: "short", maximumFractionDigits: value < 10 ? 1 : 0 }).format(value);
}

/** Seconds as "14 h 30 min", "3 h" or "45 min" (at least 1 min); other languages in their own short units. */
export function drivingTime(seconds, code = "en") {
  const minutes = Math.max(1, Math.round(seconds / 60));
  const h = Math.floor(minutes / 60), m = minutes % 60;
  if (code !== "en") {
    const unit = (n, name) => new Intl.NumberFormat(intlLocale(code), { style: "unit", unit: name, unitDisplay: "short" }).format(n);
    return [h ? unit(h, "hour") : "", m ? unit(m, "minute") : ""].filter(Boolean).join(" ");
  }
  return [h ? `${h} h` : "", m ? `${m} min` : ""].filter(Boolean).join(" ");
}

/** The stats under the page's name, [label, value]: a trip's dates, stops, distance and driving time (each only
 * when the app sent it), a collection's places. A distance under 0.1 km or a zero time is left out. */
export function stats(link, code = "en", miles = false) {
  const t = labels(code), number = (n) => new Intl.NumberFormat(intlLocale(code)).format(n);
  if (link.kind !== "trip") return [[t.places, number(items(link).length)]];
  return [
    [t.dates, dateRange(link.sd, link.ed, true, code)],
    [t.stops, number(items(link).length)],
    [t.distance, link.dist >= 50 ? distance(link.dist, code, miles) : ""],
    [t.driving, link.dur > 0 ? drivingTime(link.dur, code) : ""],
  ].filter(([, value]) => value);
}
export const statsHtml = (link, code = "en", miles = false) => stats(link, code, miles).map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("");

/** The link preview's description: "6 stops · 1,240 km · 3–9 Dec", "12 places". */
export const previewLine = (link) => [
  counted(link),
  link.kind === "trip" && link.dist >= 50 ? distance(link.dist) : "",
  link.kind === "trip" ? dateRange(link.sd, link.ed, false) : "",
].filter(Boolean).join(" · ");

/** A card from the build is used only if its page path and photo look right. */
export function usableCard(card) {
  if (!card || typeof card.n !== "string" || typeof card.h !== "string" || !PLACE_PAGE.test(card.h)) return null;
  const photo = (url) => (typeof url === "string" && /^https:\/\/[^\s"'<>]+$/.test(url) ? url : "");
  return { n: card.n, h: card.h, i: photo(card.i), s: typeof card.s === "string" ? card.s : "", g: typeof card.g === "string" ? card.g : "", o: photo(card.o), type: typeof card.s === "string" ? card.s.split(" · ")[0] : "" };
}

const PIN = '<span class="sl-pin" aria-hidden="true"></span>';
/** A trip's rows start with the stop's number; a collection's with nothing. */
const marker = (kind, index) => (kind === "trip" ? `<b class="sl-num">${index + 1}</b>` : "");
/** A rating tag "★ 4.5" gets its star in gold (.sl-star); a fee label stays plain. */
const tag = (g) => (g ? `<em class="pl-row-tag">${g.startsWith("★") ? `<i class="sl-star">★</i>${escapeHtml(g.slice(1))}` : escapeHtml(g)}</em>` : "");

/** The list's rows. `cards` maps an app place id to its usable card. */
export function rows(link, cards, code = "en") {
  return items(link).map((entry, index) => {
    const card = entry.id ? cards.get(entry.id) : null;
    const date = entry.d ? stopDate(entry.d, code) : "";
    if (!card) return `<li class="sl-plain"><div>${marker(link.kind, index)}${PIN}<span><strong>${escapeHtml(entry.t)}</strong>${date ? `<small>${date}</small>` : ""}</span></div></li>`;
    const photo = card.i ? `<img src="${escapeHtml(card.i)}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer">` : PIN;
    const small = [date, card.s].filter(Boolean).map(escapeHtml).join(" · ");
    return `<li><a href="${escapeHtml(card.h)}">${marker(link.kind, index)}${photo}<span><strong>${escapeHtml(card.n)}</strong><small>${small}</small></span>${tag(card.g)}</a></li>`;
  }).join("");
}

const round = (value) => Math.round(value * 1000) / 1000;
/** The map's data-pl-map JSON (components/places/place-map.tsx): points as [lng, lat], a label per point
 * ([name, page path without /places/ and slashes, type index], or [title, "", -1] for a pin), type labels. */
export function mapData(link, cards) {
  const types = [];
  const p = [], l = [];
  for (const entry of items(link)) {
    const card = entry.id ? cards.get(entry.id) : null;
    p.push([round(entry.lo), round(entry.la)]);
    if (!card) { l.push([entry.t, "", -1]); continue; }
    let type = -1;
    if (card.type) { type = types.indexOf(card.type); if (type === -1) type = types.push(card.type) - 1; }
    l.push([card.n, card.h.replace(/^\/places\/|\/$/g, ""), type]);
  }
  // < > & ' only ever sit inside JSON strings, so \u escapes keep the value the same and leave HTMLRewriter's
  // setAttribute (which escapes only the double quote) nothing else to escape.
  return JSON.stringify({ p, l, t: types }).replace(/[<>&']/g, (char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}`);
}

