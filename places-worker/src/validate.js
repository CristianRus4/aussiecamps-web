/**
 * The body of a live trip or collection link (PUT /api/links/<id>), checked strictly: exact types, no unknown
 * keys anywhere, and limits on every field. Returns `{ value }`, the cleaned link to store, or `{ error }`, a
 * short reason for the 400 reply. Control characters in names and titles become spaces (tab, line breaks) or
 * are dropped.
 *
 *   trip        {"v":1,"kind":"trip","n","sym","col","sd","ed","dist","dur","u","s":[{"t","id","la","lo","d"}]}
 *   collection  {"v":1,"kind":"collection","n","sym","col","u","p":[{"t","id","la","lo"}]}
 *
 * A trip's "dist" is its total driving distance in metres (0–20,000,000) and "dur" its total driving time in
 * seconds (0–10,000,000); both optional.
 */
export const LINK_ID = /^[A-Za-z0-9]{12}$/;
export const MAX_STOPS = 300;
export const MAX_PLACES = 500;
export const MAX_DISTANCE = 20_000_000;
export const MAX_DURATION = 10_000_000;

const KEYS = {
  trip: new Set(["v", "kind", "n", "sym", "col", "sd", "ed", "dist", "dur", "u", "s"]),
  collection: new Set(["v", "kind", "n", "sym", "col", "u", "p"]),
};
const ITEM_KEYS = { trip: new Set(["t", "id", "la", "lo", "d"]), collection: new Set(["t", "id", "la", "lo"]) };
const SYMBOL = /^[A-Za-z0-9.]{1,64}$/;
const COLOUR = /^[0-9A-Fa-f]{6}$/;
const PLACE_ID = /^[A-Za-z0-9:_.-]{1,64}$/;
const DAY = /^(\d{4})-(\d{2})-(\d{2})$/;
const CONTROL = /[\u0000-\u001F\u007F-\u009F\u2028\u2029]/g;

class Invalid extends Error {}
const fail = (reason) => { throw new Invalid(reason); };
const isObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
const length = (text) => [...text].length;

/** A real calendar day, yyyy-MM-dd, in 2000–2100. */
export function isDay(value) {
  const match = typeof value === "string" && DAY.exec(value);
  if (!match) return false;
  const [year, month, day] = [Number(match[1]), Number(match[2]), Number(match[3])];
  if (year < 2000 || year > 2100) return false;
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

function keysOnly(object, allowed, where) {
  for (const key of Object.keys(object)) if (!allowed.has(key)) fail(`unknown key ${where}${key}`);
}

function text(value, max, where) {
  if (typeof value !== "string") fail(`${where} must be a string`);
  const clean = value.replace(CONTROL, (char) => (/[\t\n\r\u2028\u2029]/.test(char) ? " " : "")).trim();
  if (!clean) fail(`${where} is empty`);
  if (length(clean) > max) fail(`${where} is longer than ${max} characters`);
  return clean;
}

function coordinate(value, limit, where) {
  if (typeof value !== "number" || !Number.isFinite(value)) fail(`${where} must be a finite number`);
  if (value < -limit || value > limit) fail(`${where} is out of range`);
  return value;
}

function item(raw, kind, where) {
  if (!isObject(raw)) fail(`${where} must be an object`);
  keysOnly(raw, ITEM_KEYS[kind], `${where}.`);
  const out = { t: text(raw.t, 200, `${where}.t`) };
  if ("id" in raw) {
    if (typeof raw.id !== "string" || !PLACE_ID.test(raw.id)) fail(`${where}.id is not a place id`);
    out.id = raw.id;
  }
  out.la = coordinate(raw.la, 90, `${where}.la`);
  out.lo = coordinate(raw.lo, 180, `${where}.lo`);
  if ("d" in raw) {
    if (!isDay(raw.d)) fail(`${where}.d is not a date`);
    out.d = raw.d;
  }
  return out;
}

export function validateLink(raw) {
  try {
    if (!isObject(raw)) fail("the body must be a JSON object");
    if (raw.v !== 1) fail("v must be 1");
    const kind = raw.kind;
    if (kind !== "trip" && kind !== "collection") fail('kind must be "trip" or "collection"');
    keysOnly(raw, KEYS[kind], "");
    const out = { v: 1, kind, n: text(raw.n, 100, "n") };
    if ("sym" in raw) {
      if (typeof raw.sym !== "string" || !SYMBOL.test(raw.sym)) fail("sym is not a symbol name");
      out.sym = raw.sym;
    }
    if ("col" in raw) {
      if (typeof raw.col !== "string" || !COLOUR.test(raw.col)) fail("col must be 6 hex digits");
      out.col = raw.col;
    }
    for (const key of ["sd", "ed"]) {
      if (!(key in raw)) continue;
      if (!isDay(raw[key])) fail(`${key} is not a date`);
      out[key] = raw[key];
    }
    if (out.sd && out.ed && out.ed < out.sd) fail("ed is before sd");
    for (const [key, max] of [["dist", MAX_DISTANCE], ["dur", MAX_DURATION]]) {
      if (!(key in raw)) continue;
      if (typeof raw[key] !== "number" || !Number.isFinite(raw[key])) fail(`${key} must be a finite number`);
      if (raw[key] < 0 || raw[key] > max) fail(`${key} is out of range`);
      out[key] = raw[key];
    }
    if ("u" in raw) {
      if (typeof raw.u !== "string" || raw.u.length > 40 || !/^\d{4}-\d{2}-\d{2}T/.test(raw.u) || !Number.isFinite(Date.parse(raw.u))) fail("u is not an ISO 8601 time");
      out.u = raw.u;
    }
    const list = kind === "trip" ? "s" : "p";
    const max = kind === "trip" ? MAX_STOPS : MAX_PLACES;
    const items = list in raw ? raw[list] : [];
    if (!Array.isArray(items)) fail(`${list} must be an array`);
    if (items.length > max) fail(`${list} has more than ${max} entries`);
    out[list] = items.map((entry, index) => item(entry, kind, `${list}[${index}]`));
    return { value: out };
  } catch (error) {
    if (error instanceof Invalid) return { error: error.message };
    throw error;
  }
}
