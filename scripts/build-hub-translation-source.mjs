/**
 * Writes the translation engine's view of the hub pages:
 *
 * - lib/translations/hubs/en.json: the complete English `hubs` namespace (lib/hubs/strings.ts), in
 *   the shape of a locale file. Translate the values, keep every key, array position and {placeholder}
 *   and every number, and save it as lib/translations/hubs/<code>.json.
 * - docs/translation.hubs.config.json: one hub catalog per catalog in docs/translation.config.json,
 *   with the same locales, register, varieties, glossary and style guide, so the hubs read like the
 *   rest of that language's site. Their protected terms add the park, place, locality and agency names
 *   the hub copy uses: those are data, and stay as the source writes them.
 *
 *   npm run hubs:source
 *
 * scripts/audit-hubs.mjs fails when either file is stale.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { hubSource, hubSourceText, translatableHubs } from "../lib/hubs/strings.ts";

const root = resolve(import.meta.dirname, "..");
const check = process.argv.includes("--check");

export function hubConfigText() {
  const shared = JSON.parse(readFileSync(resolve(root, "docs/translation.config.json"), "utf8"));
  const sourceText = JSON.stringify(hubSource());
  const meta = JSON.parse(readFileSync(resolve(root, "lib/data/hubs.meta.json"), "utf8"));
  const names = new Set();
  for (const hub of translatableHubs) {
    if (hub.kind === "camping-park") names.add(hub.name);
    for (const item of [...(hub.topParks ?? []), ...(hub.topLocalities ?? []), ...(hub.topRoads ?? [])]) names.add(item.name);
    for (const place of hub.places) for (const name of [place.name, place.park, place.locality]) if (name) names.add(name);
  }
  for (const source of meta.sources) names.add(source.short);
  // Only names the copy actually uses, longest first so the engine protects "Coorong National Park" whole.
  const terms = [...names].filter((name) => name.length > 2 && sourceText.includes(name)).sort((a, b) => b.length - a.length || a.localeCompare(b));
  const catalogs = shared.catalogs.map((catalog) => {
    const { untranslatedKeys, targets, source, id, protectedTerms = [], ...rest } = catalog;
    return {
      ...rest,
      id: `${id.replace(/^aussiecamps-website/, "aussiecamps-hubs")}`,
      source: "../lib/translations/hubs/en.json",
      targets: catalog.locales.map((locale) => ({ locale, path: `../lib/translations/hubs/${locale}.json` })),
      protectedTerms: [...new Set([...protectedTerms, "AussieCamps", "AussieCamps Pass", "iPhone", ...terms])],
    };
  });
  return `${JSON.stringify({ schemaVersion: shared.schemaVersion, project: shared.project, catalogs }, null, 2)}\n`;
}

if (process.argv[1] === import.meta.filename) {
  const files = [["lib/translations/hubs/en.json", hubSourceText()], ["docs/translation.hubs.config.json", hubConfigText()]];
  let stale = false;
  for (const [path, text] of files) {
    const target = resolve(root, path);
    let current = "";
    try { current = readFileSync(target, "utf8"); } catch {}
    if (current === text) continue;
    if (check) { console.error(`${path} is stale: run npm run hubs:source`); stale = true; } else writeFileSync(target, text);
  }
  if (stale) process.exit(1);
  if (!check) console.log(`Hub translation source: ${Object.keys(hubSource().prose).length} hubs with prose.`);
}
