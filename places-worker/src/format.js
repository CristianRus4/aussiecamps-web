/**
 * The text and markup of a live link's page (src/link-page.js): dates, the header's and the preview's lines,
 * the list's rows and the map's data. Plain functions, so the tests run them in Node. Everything from the
 * link (names, titles) is escaped; links and image URLs only ever come from the place cards the build writes.
 */
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

/** The line under the page's name: "3–9 Dec 2027 · 6 stops", "12 places". */
export const headerLine = (link) => [link.kind === "trip" ? dateRange(link.sd, link.ed) : "", counted(link)].filter(Boolean).join(" · ");
/** The link preview's description: "6 stops · 3–9 Dec", "12 places". */
export const previewLine = (link) => [counted(link), link.kind === "trip" ? dateRange(link.sd, link.ed, false) : ""].filter(Boolean).join(" · ");

/** A card from the build is used only if its page path and photo look right. */
export function usableCard(card) {
  if (!card || typeof card.n !== "string" || typeof card.h !== "string" || !PLACE_PAGE.test(card.h)) return null;
  const photo = (url) => (typeof url === "string" && /^https:\/\/[^\s"'<>]+$/.test(url) ? url : "");
  return { n: card.n, h: card.h, i: photo(card.i), s: typeof card.s === "string" ? card.s : "", g: typeof card.g === "string" ? card.g : "", o: photo(card.o), type: typeof card.s === "string" ? card.s.split(" · ")[0] : "" };
}

const PIN = '<span class="sl-pin" aria-hidden="true"></span>';
const marker = (kind, index) => (kind === "trip" ? `<b class="sl-num">${index + 1}</b>` : '<i class="sl-dot" aria-hidden="true"></i>');
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

/** The first card photo that works as a link preview, in list order. */
export function previewImage(link, cards) {
  for (const entry of items(link)) {
    const card = entry.id ? cards.get(entry.id) : null;
    if (card?.o) return card.o;
  }
  return "";
}
