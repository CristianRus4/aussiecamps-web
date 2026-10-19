/**
 * Builds lib/data/au-outline.json, the state outlines behind the hub dot maps. Run once, by hand:
 *
 *   node scripts/build-au-outline.mjs <path to ne_50m_admin_1_states_provinces.geojson>
 *
 * Source: Natural Earth 1:50m Admin 1 states and provinces (public domain, naturalearthdata.com).
 * Only the simplified Australian outlines are committed, never the download. Rings are simplified
 * with Douglas-Peucker, islands too small to see at hub-map size are dropped, and coordinates are
 * rounded to two decimals. Jervis Bay Territory is drawn with New South Wales.
 */
import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const input = process.argv[2];
assert.ok(input, "Pass the path to ne_50m_admin_1_states_provinces.geojson");
const output = resolve(dirname(fileURLToPath(import.meta.url)), "../lib/data/au-outline.json");

const codes = { "AU-NSW": "NSW", "AU-VIC": "VIC", "AU-QLD": "QLD", "AU-SA": "SA", "AU-WA": "WA", "AU-TAS": "TAS", "AU-NT": "NT", "AU-ACT": "ACT", "AU-X02~": "NSW" };
const TOLERANCE = 0.03;
const MIN_AREA = 0.02;

function simplify(points, tolerance) {
  if (points.length < 3) return points;
  const [ax, ay] = points[0];
  const [bx, by] = points[points.length - 1];
  let index = 0;
  let distance = 0;
  for (let i = 1; i < points.length - 1; i += 1) {
    const [px, py] = points[i];
    const length = Math.hypot(bx - ax, by - ay);
    const d = length === 0 ? Math.hypot(px - ax, py - ay) : Math.abs((by - ay) * px - (bx - ax) * py + bx * ay - by * ax) / length;
    if (d > distance) { distance = d; index = i; }
  }
  if (distance <= tolerance) return [points[0], points[points.length - 1]];
  return [...simplify(points.slice(0, index + 1), tolerance).slice(0, -1), ...simplify(points.slice(index), tolerance)];
}
const area = (ring) => Math.abs(ring.reduce((sum, [x, y], i) => { const [nx, ny] = ring[(i + 1) % ring.length]; return sum + x * ny - nx * y; }, 0) / 2);

const geojson = JSON.parse(readFileSync(input, "utf8"));
const states = {};
for (const feature of geojson.features) {
  const code = codes[feature.properties.iso_3166_2];
  if (!code || feature.properties.adm0_a3 !== "AUS") continue;
  const polygons = feature.geometry.type === "Polygon" ? [feature.geometry.coordinates] : feature.geometry.coordinates;
  for (const polygon of polygons) {
    const outer = polygon[0];
    if (area(outer) < MIN_AREA && code !== "ACT") continue;
    const ring = simplify(outer, TOLERANCE).map(([x, y]) => [Math.round(x * 100) / 100, Math.round(y * 100) / 100]);
    if (ring.length >= 4) (states[code] ??= []).push(ring);
  }
}
for (const code of ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "NT", "ACT"]) assert.ok(states[code]?.length, `No outline for ${code}`);

const bounds = Object.fromEntries(Object.entries(states).map(([code, rings]) => {
  const points = rings.flat();
  return [code, [Math.min(...points.map((p) => p[0])), Math.min(...points.map((p) => p[1])), Math.max(...points.map((p) => p[0])), Math.max(...points.map((p) => p[1]))]];
}));
const ordered = Object.fromEntries(Object.keys(states).sort().map((code) => [code, states[code]]));
writeFileSync(output, `${JSON.stringify({
  source: "Natural Earth 1:50m Admin 1 states and provinces, simplified (public domain, https://www.naturalearthdata.com/)",
  bounds: Object.fromEntries(Object.keys(bounds).sort().map((code) => [code, bounds[code]])),
  states: ordered,
})}\n`);
console.log(`Wrote ${output}: ${Object.entries(states).map(([code, rings]) => `${code} ${rings.length} rings/${rings.flat().length} pts`).join(", ")}`);
