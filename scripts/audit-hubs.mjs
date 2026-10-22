/**
 * Audits the exported app data and the hub quality gate. Runs in content:check, so CI checks the
 * committed JSON without the app repo.
 *
 *   tsx scripts/audit-hubs.mjs
 *
 * 1. Shape: product-facts.json, hubs.json and hubs.meta.json have the fields the site reads.
 * 2. Licences: every published place comes from a cc-by-4.0 or facts-only source, the partner feed
 *    appears nowhere, and no description text, photo or image URL was exported.
 * 3. The gate (lib/hubs/gate.ts): which hubs are built and which are indexable, and why.
 * 4. Grounding: every number and proper noun in a hub's prose appears in that hub's data record or its
 *    cited official sources.
 * 5. Description check: hubs.prose-check.json must match the current hubs.json and lib/hubs/prose.json.
 *    The exporter writes it after comparing every hub string over 80 characters with every source
 *    description; changing the prose means re-running `npm run data:export` where the app repo is.
 * 6. Translated hubs: lib/translations/hubs/en.json and docs/translation.hubs.config.json are current
 *    (`npm run hubs:source`), every registry locale has a hubs file, and the report says how many
 *    localised hubs each locale has complete and whether the switch in lib/hubs/localized.ts is on.
 */
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");
const json = (path) => JSON.parse(read(path));
const sha = (text) => createHash("sha256").update(text).digest("hex");

const facts = json("lib/data/product-facts.json");
const hubsText = read("lib/data/hubs.json");
const { dataAsOf, hubs } = JSON.parse(hubsText);
const meta = json("lib/data/hubs.meta.json");
const stamp = json("lib/data/hubs.prose-check.json");
const proseText = existsSync(resolve(root, "lib/hubs/prose.json")) ? read("lib/hubs/prose.json") : "{}\n";
const prose = JSON.parse(proseText);
const { GATE, evaluateHub, wordCount } = await import("../lib/hubs/gate.ts");
const { groundingIssues } = await import("../lib/hubs/grounding.ts");

const STATES = ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "NT", "ACT"];
const KINDS = { "camping-state": ["campground"], "camping-park": ["campground"], "dump-points-state": ["public_dump_point"], "rest-areas-state": ["roadside_rest_area"] };
const DIMENSIONS = new Set(["count", "geography", "facilities", "access", "rules", "fees", "related", "sources"]);
const date = /^\d{4}-\d{2}-\d{2}$/;

// 1. Shape --------------------------------------------------------------------------------------
assert.match(meta.dataAsOf, date, "hubs.meta.json needs dataAsOf");
assert.match(meta.exportDate, date, "hubs.meta.json needs exportDate");
assert.match(meta.source?.sha256 ?? "", /^[0-9a-f]{64}$/, "hubs.meta.json needs the source SHA-256");
assert.equal(dataAsOf, meta.dataAsOf, "hubs.json and hubs.meta.json disagree on dataAsOf");
assert.equal(facts.dataAsOf, meta.dataAsOf, "product-facts.json and hubs.meta.json disagree on dataAsOf");

for (const code of STATES) {
  const state = facts.byState?.[code];
  assert.ok(state, `product-facts.json is missing byState.${code}`);
  for (const key of ["campgrounds", "dumpPoints", "restAreas", "water", "toilets", "passPlaces"]) assert.ok(Number.isInteger(state[key]) && state[key] >= 0, `byState.${code}.${key} must be a count`);
}
for (const key of ["campgrounds", "dumpPoints", "restAreas", "water", "toilets"]) {
  assert.equal(STATES.reduce((sum, code) => sum + facts.byState[code][key], 0), facts.totals[key], `totals.${key} must equal the sum of the states`);
}
const free = new Set(facts.passBoundary?.free?.categories ?? []);
for (const code of ["holiday_park", "hotel_resort", "motel", "tour"]) assert.ok(free.has(code), `passBoundary.free must list ${code}`);
for (const code of Object.keys(facts.byType)) {
  assert.ok(!free.has(code), `product-facts.json counts the partner category ${code}; partner inventory is never counted`);
  assert.equal(facts.byType[code].access, "pass", `${code} must be marked as Pass data`);
}

// 2. Licences and what may never be exported -----------------------------------------------------
const sources = new Map(meta.sources.map((source) => [source.key, source]));
for (const source of meta.sources) {
  assert.ok(["cc-by-4.0", "facts-only"].includes(source.licence), `${source.operator} has licence ${source.licence}`);
  assert.ok(source.attribution && source.terms, `${source.operator} needs an attribution line and the terms it was checked against`);
  if (source.licence === "cc-by-4.0") assert.equal(source.licenceUrl, "https://creativecommons.org/licenses/by/4.0/");
}
assert.ok(meta.excluded.some((source) => source.key === "bookeasy"), "BookEasy must be recorded as excluded");
assert.ok(!sources.has("bookeasy"), "BookEasy must never be a published source");

// Pass the pattern test without echoing a megabyte of JSON into the failure message.
const never = (text, pattern, message) => assert.ok(!pattern.test(text), `${message}: ${text.match(pattern)?.[0]}`);
never(`${hubsText}\n${proseText}`, /bookeasy/i, "Partner (BookEasy) data appears in the hubs");
never(JSON.stringify(facts), /bookeasy\.com|bookeasy\/|"bookeasy"/i, "Partner (BookEasy) data appears in product-facts.json");
never(hubsText, /\.(jpe?g|png|webp|gif|heic)(\?|")/i, "An image URL was exported");
never(hubsText, /"(description|descriptions|photo|photos|image|images|previewImageUrl|rawText|raw)"\s*:/i, "Description or photo fields were exported");

const ids = new Set();
for (const hub of hubs) {
  const where = `hub ${hub.id}`;
  assert.ok(!ids.has(hub.id), `${where} is duplicated`);
  ids.add(hub.id);
  assert.ok(KINDS[hub.kind], `${where} has unknown kind ${hub.kind}`);
  assert.equal(hub.path, `/${hub.id}/`, `${where} path must be /<id>/`);
  assert.ok(STATES.includes(hub.state), `${where} has unknown state ${hub.state}`);
  assert.match(hub.rulesGuide, /^camping-rules-[a-z-]+$/, `${where} needs its rules guide`);
  assert.ok(hub.places.length <= 25, `${where} lists more than 25 places`);
  assert.equal(hub.placeIds.length, hub.placeCount, `${where} placeIds must match placeCount`);
  assert.equal(new Set(hub.placeIds).size, hub.placeIds.length, `${where} has duplicate place ids`);
  const own = new Set(hub.placeIds);
  for (const fact of hub.facts) {
    assert.ok(DIMENSIONS.has(fact.dimension), `${where} fact ${fact.key} has unknown dimension ${fact.dimension}`);
    assert.ok(fact.label && (typeof fact.value === "number" || typeof fact.value === "string"), `${where} fact ${fact.key} is incomplete`);
  }
  for (const place of hub.places) {
    assert.ok(own.has(place.id), `${where} lists ${place.id}, which is not one of its places`);
    assert.ok(place.name && KINDS[hub.kind].includes(place.type), `${where}: ${place.id} is not a ${KINDS[hub.kind].join("/")}`);
    assert.ok(sources.has(place.source), `${where}: ${place.id} comes from unpublished source ${place.source}`);
    if (place.url) assert.match(place.url, /^https:\/\/[^/]*\.gov\.au\//, `${where}: ${place.id} links somewhere other than an official gov.au page`);
    for (const value of [place.lat, place.lng]) assert.equal(Math.round(value * 1000) / 1000, value, `${where}: ${place.id} coordinates must be rounded to 3 decimals`);
  }
  for (const key of hub.sources) assert.ok(sources.has(key), `${where} cites unknown source ${key}`);
}
for (const id of Object.keys(prose)) {
  assert.ok(ids.has(id), `lib/hubs/prose.json has prose for ${id}, which is not a hub`);
  assert.ok(Array.isArray(prose[id]) && prose[id].every((paragraph) => typeof paragraph === "string" && paragraph.trim()), `${id} prose must be a list of paragraphs`);
}

// 4. Grounding ------------------------------------------------------------------------------------
const allProse = Object.values(prose).flat();
const ungrounded = Object.entries(prose).flatMap(([id, paragraphs]) => groundingIssues(hubs.find((item) => item.id === id), paragraphs, sources, dataAsOf, allProse));
assert.equal(ungrounded.length, 0, `Hub prose names things its data does not contain:\n  ${ungrounded.join("\n  ")}`);

// 5. Description check stamp ---------------------------------------------------------------------
assert.equal(stamp.sourceSha256, meta.source.sha256, "hubs.prose-check.json was made against a different source database");
assert.equal(stamp.hubsSha256, sha(hubsText), "hubs.json changed after its description check; re-run npm run data:export");
assert.equal(stamp.proseSha256, sha(proseText), "lib/hubs/prose.json changed after its description check; re-run npm run data:export where the app repo is available");

// 3. Gate summary ---------------------------------------------------------------------------------
const verdicts = hubs.map((hub) => ({ hub, verdict: evaluateHub(hub, hubs, prose) }));
for (const { hub, verdict } of verdicts) {
  if (verdict.indexable) assert.ok(wordCount(prose[hub.id]) >= GATE.minProseWords, `${hub.id} is indexable without its prose`);
}
const built = verdicts.filter(({ verdict }) => verdict.built);
const indexable = built.filter(({ verdict }) => verdict.indexable);
const reasonCounts = {};
for (const { verdict } of built.filter(({ verdict }) => !verdict.indexable)) {
  for (const reason of verdict.reasons) {
    const kind = reason.replace(/^\d+%? ?/, "").replace(/\d+/g, "N");
    reasonCounts[kind] = (reasonCounts[kind] ?? 0) + 1;
  }
}
console.log(`Hub audit passed: data as of ${dataAsOf}, ${meta.sources.filter((source) => source.inHubs).length} published sources, BookEasy excluded.`);
console.log(`Hubs: ${hubs.length} candidates, ${built.length} built, ${indexable.length} indexable, ${built.length - indexable.length} noindex${Object.keys(reasonCounts).length ? ` (${Object.entries(reasonCounts).map(([reason, n]) => `${n} × ${reason}`).join("; ")})` : ""}.`);

// 6. Translated hubs ----------------------------------------------------------------------------------
const { hubSourceText, isHubTranslated, isHubCommonComplete, translatableHubs } = await import("../lib/hubs/strings.ts");
const { hubConfigText } = await import("./build-hub-translation-source.mjs");
const { hubTranslationFiles } = await import("../lib/translations/hubs/index.ts");
assert.equal(read("lib/translations/hubs/en.json"), hubSourceText(), "lib/translations/hubs/en.json is stale: run npm run hubs:source");
assert.equal(read("docs/translation.hubs.config.json"), hubConfigText(), "docs/translation.hubs.config.json is stale: run npm run hubs:source");
const registry = json("lib/locales.json").map((entry) => entry.code);
for (const code of registry) assert.ok(hubTranslationFiles[code], `lib/translations/hubs/index.ts is missing ${code}`);
const live = /export const LOCALIZED_HUBS_LIVE = (true|false);/.exec(read("lib/hubs/localized.ts"))?.[1];
assert.ok(live, "lib/hubs/localized.ts must declare LOCALIZED_HUBS_LIVE as true or false");
const complete = registry.map((code) => `${code} ${isHubCommonComplete(code) ? translatableHubs.filter((hub) => isHubTranslated(code, hub)).length : 0}`);
console.log(`Translated hubs: switch ${live === "true" ? "ON" : "OFF (all localised hubs noindex, out of the sitemaps)"}; complete of ${translatableHubs.length}: ${complete.join(", ")}.`);
