/**
 * The text and markup of a live link's page (src/link-page.js): dates, the stats under the name, the preview's
 * line, the badge, the list's rows and the map's data. Plain functions, so the tests run them in Node. Everything
 * from the link (names, titles) is escaped; links and image URLs only ever come from the place cards the build
 * writes, icons only from the symbols table and colours only as 6 hex digits.
 */
import { SYMBOLS } from "./symbols.js";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const PLACE_PAGE = /^\/places\/[a-z0-9-]+\/[a-z0-9-]+\/$/;

const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
/** Escapes text for HTML content and double- or single-quoted attributes. */
export const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ESCAPES[char]);

const parts = (day) => { const [y, m, d] = day.split("-").map(Number); return { y, m: m - 1, d, w: new Date(Date.UTC(y, m - 1, d)).getUTCDay() }; };

/** "Tue 3 Dec": a stop's date in its row. */
export const stopDate = (day) => { const { m, d, w } = parts(day); return `${DAYS[w]} ${d} ${MONTHS[m]}`; };

/** A trip's dates: "3–9 Dec 2027", "28 Nov – 3 Dec 2027", "28 Dec 2027 – 3 Jan 2028"; without years for the
 * link preview ("3–9 Dec", "28 Dec – 3 Jan"). One date or the same day twice: "3 Dec 2027". */
export function dateRange(start, end, withYear = true) {
  const days = [start, end].filter(Boolean);
  if (!days.length) return "";
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

/** Metres as "1,240 km", or with one decimal under 10 km ("8.4 km"). */
export function distance(metres) {
  const km = metres / 1000;
  return km < 10 ? `${(Math.round(km * 10) / 10).toFixed(1).replace(/\.0$/, "")} km` : `${Math.round(km).toLocaleString("en-US")} km`;
}

/** Seconds as "14 h 30 min", "3 h" or "45 min" (at least 1 min). */
export function drivingTime(seconds) {
  const minutes = Math.max(1, Math.round(seconds / 60));
  const h = Math.floor(minutes / 60), m = minutes % 60;
  return [h ? `${h} h` : "", m ? `${m} min` : ""].filter(Boolean).join(" ");
}

/** The stats under the page's name, [label, value]: a trip's dates, stops, distance and driving time (each only
 * when the app sent it), a collection's places. A distance under 0.1 km or a zero time is left out. */
export function stats(link) {
  if (link.kind !== "trip") return [["Places", String(items(link).length)]];
  return [
    ["Dates", dateRange(link.sd, link.ed)],
    ["Stops", String(items(link).length)],
    ["Distance", link.dist >= 50 ? distance(link.dist) : ""],
    ["Driving", link.dur > 0 ? drivingTime(link.dur) : ""],
  ].filter(([, value]) => value);
}
export const statsHtml = (link) => stats(link).map(([label, value]) => `<div><dt>${label}</dt><dd>${escapeHtml(value)}</dd></div>`).join("");

/** The link preview's description: "6 stops · 1,240 km · 3–9 Dec", "12 places". */
export const previewLine = (link) => [
  counted(link),
  link.kind === "trip" && link.dist >= 50 ? distance(link.dist) : "",
  link.kind === "trip" ? dateRange(link.sd, link.ed, false) : "",
].filter(Boolean).join(" · ");

export const COLOURS = ["30A46C", "3478F6", "0FA5B5", "8B5CF6", "EC4899", "EF4444", "F59E0B", "8B6B4A"];
const DARK_INK = "#172012";
const linear = (channel) => { const c = channel / 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
/** White on the colour when it reaches 3:1 (icons and bold numbers), else the dark ink (amber, teal). */
export function inkOn(hex) {
  const [r, g, b] = [0, 2, 4].map((i) => linear(parseInt(hex.slice(i, i + 2), 16)));
  return 1.05 / (0.2126 * r + 0.7152 * g + 0.0722 * b + 0.05) >= 3 ? "#ffffff" : DARK_INK;
}

/** The link's colour, its ink and its icon: only 6 hex digits and symbols from the table get through; anything
 * else is the default (green, a car for a trip, a folder for a collection). */
export function look(link) {
  const colour = typeof link.col === "string" && /^[0-9A-Fa-f]{6}$/.test(link.col) ? link.col.toUpperCase() : COLOURS[0];
  const fallback = link.kind === "trip" ? "car.fill" : "folder.fill";
  const icon = Object.hasOwn(SYMBOLS, link.sym) ? SYMBOLS[link.sym] : SYMBOLS[fallback];
  return { colour: `#${colour}`, ink: inkOn(colour), icon };
}
/** The page's style attribute: the colour and its ink as custom properties for the badge, numbers and map. */
export const lookStyle = (link) => { const { colour, ink } = look(link); return `--sl-col:${colour};--sl-ink:${ink}`; };
/** The badge's icon. */
export const badgeIcon = (link) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${look(link).icon}</svg>`;

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
export function rows(link, cards) {
  return items(link).map((entry, index) => {
    const card = entry.id ? cards.get(entry.id) : null;
    const date = entry.d ? stopDate(entry.d) : "";
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

