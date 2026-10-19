/**
 * One-way, read-only export of the AussieCamps app data into lib/data/.
 *
 *   npm run data:export            (CAMPING_APP_DATA defaults to /Users/cristian/Developer/Apps/Camping)
 *
 * What it reads: the database the release app ships, `Scraper/data/australia_db.sqlite` (see
 * Aussie/AussieCamping/CampingPlacesDatabase.swift in the app repo). `Aussie/Resources/aussie_db.sqlite`
 * is the legacy bought snapshot and is never read.
 *
 * What it writes, and only there: lib/data/product-facts.json, lib/data/hubs.json,
 * lib/data/hubs.meta.json and lib/data/hubs.prose-check.json. Every write is checked against
 * <repo>/lib/data/ and refused anywhere else, and nothing is ever written inside the app repo: the
 * database is copied to a temporary directory first and only the copy is opened, read-only, because
 * opening the original can leave -wal/-shm files beside it.
 *
 * Licences fail closed. Every operator in the database must be in SOURCES below as cc-by-4.0,
 * facts-only or exclude, or the export aborts. Only facts leave the database: names, locality, fee
 * summaries, facility flags, counts and rounded coordinates. No Description text, photos or image
 * URLs are ever copied, and the BookEasy partner feed is excluded outright.
 *
 * Output is deterministic: keys are sorted, coordinates are rounded, and the dates are kept from the
 * previous export whenever the source file's SHA-256 has not changed, so running it twice on the same
 * database gives byte-identical files. CI never runs this; the committed JSON is the artifact.
 */
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { DatabaseSync } from "node:sqlite";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = resolve(repo, "lib/data");
const appRepo = resolve(process.env.CAMPING_APP_DATA ?? "/Users/cristian/Developer/Apps/Camping");
const sourceRelative = "Scraper/data/australia_db.sqlite";
const sourcePath = resolve(appRepo, sourceRelative);
const prosePath = resolve(repo, "lib/hubs/prose.json");

/** The date the licence terms below were last read at the source. */
const LICENCES_VERIFIED = "2026-10-19";
const CC_BY = "https://creativecommons.org/licenses/by/4.0/";

/**
 * Every operator label in Site.Operator, mapped to what may be published.
 *
 * cc-by-4.0 only where the source's own terms say so for this content; everything else is facts-only
 * (names, locality, fees, counts, facility flags; no descriptions). The two are published the same way
 * here, because descriptions are never copied for either, and differ only in the attribution line.
 */
const SOURCES = {
  "NSW National Parks and Wildlife Service": {
    key: "nsw-npws", short: "NSW NPWS", licence: "cc-by-4.0", url: "https://www.nationalparks.nsw.gov.au/",
    terms: "https://www.nationalparks.nsw.gov.au/copyright",
    attribution: "© State of New South Wales and Department of Climate Change, Energy, the Environment and Water, licensed under CC BY 4.0.",
  },
  "Parks Victoria": {
    key: "parks-victoria", short: "Parks Victoria", licence: "cc-by-4.0", url: "https://www.parks.vic.gov.au/",
    terms: "https://www.parks.vic.gov.au/legal",
    attribution: "© Parks Victoria, licensed under CC BY 4.0.",
  },
  "Main Roads WA": {
    key: "main-roads-wa", short: "Main Roads WA", licence: "cc-by-4.0", url: "https://catalogue.data.wa.gov.au/dataset/mrwa-road-stopping-places",
    terms: "https://catalogue.data.wa.gov.au/dataset/mrwa-road-stopping-places",
    attribution: "Source: Commissioner of Main Roads Western Australia (Road Stopping Places), licensed under CC BY 4.0.",
  },
  "Queensland TMR": {
    key: "qld-tmr", short: "Queensland TMR", licence: "cc-by-4.0", url: "https://spatial-gis.information.qld.gov.au/arcgis/rest/services/Transportation/StateRoadInformation/MapServer/info/iteminfo",
    terms: "https://spatial-gis.information.qld.gov.au/arcgis/rest/services/Transportation/StateRoadInformation/MapServer/info/iteminfo",
    attribution: "© State of Queensland (Department of Transport and Main Roads), Roadside amenities, licensed under CC BY 4.0.",
  },
  "Transport for NSW": {
    key: "transport-nsw", short: "Transport for NSW", licence: "cc-by-4.0", url: "https://opendata.transport.nsw.gov.au/data/dataset/nsw-rest-areas",
    terms: "https://opendata.transport.nsw.gov.au/datalicence",
    attribution: "Source: Transport for NSW (NSW rest areas), licensed under CC BY 4.0.",
  },
  // The DataVic Recreation Sites entry is CC BY 4.0, but the map layer we read could not be confirmed
  // as that dataset, so it is treated as facts-only until it is.
  "Victoria DEECA": {
    key: "vic-deeca", short: "DEECA", licence: "facts-only", url: "https://discover.data.vic.gov.au/dataset/recreation-sites",
    terms: "https://discover.data.vic.gov.au/dataset/recreation-sites",
    attribution: "Campground names and facilities from the Victorian Department of Energy, Environment and Climate Action, used as facts only.",
  },
  "Australian Government National Public Toilet Map": {
    key: "toilet-map", short: "National Public Toilet Map", licence: "facts-only", url: "https://toiletmap.gov.au/",
    terms: "https://toiletmap.gov.au/copyright",
    attribution: "Dump point, water and toilet locations and facilities from the National Public Toilet Map (Australian Government), used as facts only.",
  },
  "Australian Government (RADAR)": {
    key: "radar", short: "National rest areas dataset", licence: "facts-only", url: "https://catalogue.data.infrastructure.gov.au/dataset/national-formal-rest-areas",
    terms: "https://catalogue.data.infrastructure.gov.au/dataset/national-formal-rest-areas",
    attribution: "Rest area locations and facilities from the National Formal Rest Areas dataset (Australian Government, with state and territory road agencies), used as facts only.",
  },
  "Department of Biodiversity, Conservation and Attractions": {
    key: "wa-dbca", short: "DBCA", licence: "facts-only", url: "https://exploreparks.dbca.wa.gov.au/",
    terms: "https://exploreparks.dbca.wa.gov.au/copyright",
    attribution: "Campground names, fees and facilities from Explore Parks WA (Department of Biodiversity, Conservation and Attractions), used as facts only.",
  },
  "Queensland Parks and Wildlife Service": {
    key: "qpws", short: "QPWS", licence: "facts-only", url: "https://parks.qld.gov.au/",
    terms: "https://www.qld.gov.au/legal/copyright",
    attribution: "Camping area names and facilities from Queensland Parks and Wildlife Service, used as facts only.",
  },
  "Tasmania Parks and Wildlife Service": {
    key: "tas-pws", short: "Tasmania PWS", licence: "facts-only", url: "https://parks.tas.gov.au/",
    terms: "https://parks.tas.gov.au/",
    attribution: "Campground names, fees and facilities from Tasmania Parks and Wildlife Service, used as facts only.",
  },
  "National Parks and Wildlife Service South Australia": {
    key: "sa-npws", short: "NPWS SA", licence: "facts-only", url: "https://www.parks.sa.gov.au/",
    terms: "https://www.environment.sa.gov.au/copyright",
    attribution: "Park names from National Parks and Wildlife Service South Australia, used as facts only.",
  },
  "Department for Environment and Water": {
    key: "sa-dew", short: "SA DEW", licence: "facts-only", url: "https://www.parks.sa.gov.au/",
    terms: "https://www.environment.sa.gov.au/copyright",
    attribution: "Campground names and facilities from the South Australian Department for Environment and Water (parks.sa.gov.au), used as facts only.",
  },
  "Northern Territory Parks and Wildlife": {
    key: "nt-parks", short: "NT Parks and Wildlife", licence: "facts-only", url: "https://nt.gov.au/parks",
    terms: "https://nt.gov.au/",
    attribution: "Campground names and fees from NT Parks and Wildlife, used as facts only.",
  },
  "Parks and Wildlife Commission of the Northern Territory": {
    key: "nt-pwc", short: "Parks and Wildlife Commission NT", licence: "facts-only", url: "https://nt.gov.au/parks",
    terms: "https://nt.gov.au/",
    attribution: "Park names from the Parks and Wildlife Commission of the Northern Territory, used as facts only.",
  },
  "ACT Parks and Conservation Service": {
    key: "act-parks", short: "ACT Parks", licence: "facts-only", url: "https://www.parks.act.gov.au/",
    terms: "https://www.parks.act.gov.au/",
    attribution: "Campground names and facilities from ACT Parks and Conservation Service, used as facts only.",
  },
  // The partner feed. Never republished in any form, counts included.
  BookEasy: { key: "bookeasy", licence: "exclude", reason: "Partner booking feed. Its stays and tours are free in the app but are never republished on the site." },
};

/** What the app leaves free without the Pass (AussieRegion.freeBookEasyCategoryCodes). */
const FREE_CATEGORY_CODES = [
  "hotel_resort", "motel", "bed_breakfast", "backpacker_hostel", "holiday_park", "self_contained", "studio_apartment",
  "house", "chalet_villa_cottage", "farm_station_stay", "retreat", "roofed_accommodation", "houseboat", "lodging", "tour",
];

const STATES = [
  { code: "NSW", slug: "new-south-wales", name: "New South Wales", rules: "camping-rules-new-south-wales" },
  { code: "VIC", slug: "victoria", name: "Victoria", rules: "camping-rules-victoria" },
  { code: "QLD", slug: "queensland", name: "Queensland", rules: "camping-rules-queensland" },
  { code: "SA", slug: "south-australia", name: "South Australia", rules: "camping-rules-south-australia" },
  { code: "WA", slug: "western-australia", name: "Western Australia", rules: "camping-rules-western-australia" },
  { code: "TAS", slug: "tasmania", name: "Tasmania", rules: "camping-rules-tasmania" },
  { code: "NT", slug: "northern-territory", name: "Northern Territory", inName: "the Northern Territory", rules: "camping-rules-northern-territory" },
  { code: "ACT", slug: "act", name: "Australian Capital Territory", inName: "the ACT", rules: "camping-rules-act" },
];
const stateByCode = new Map(STATES.map((state) => [state.code, state]));

/** Facility codes shown per place, in display order, with the label the site prints. */
const FACILITY_LABELS = {
  toilets: "Toilets", flush_toilets: "Flush toilets", non_flush_toilets: "Non-flush toilets", accessible_toilets: "Accessible toilet",
  drinking_water: "Drinking water", showers: "Showers", picnic_tables: "Picnic tables", barbecue_facilities: "Barbecues",
  shelter: "Shelter", shade: "Shade", rubbish_bins: "Rubbish bins", phone_reception: "Phone reception", playground: "Playground",
  campfires_permitted: "Campfires allowed", generators_allowed: "Generators allowed", no_dogs: "No dogs",
  caravan_sites: "Caravan sites", camper_trailer_sites: "Camper trailer sites", tent_sites: "Tent sites", tent_beside_car: "Tent beside car",
  boat_ramp: "Boat ramp", heavy_vehicle_area: "Heavy vehicle area", sealed_surface: "Sealed surface", dump_point: "Dump point",
  dump_point_washout: "Washout tap", accessible_parking: "Accessible parking", sharps_disposal: "Sharps disposal",
};
/** How a facility count is labelled in a facts table: a flag the source did not set is not proof of absence. */
const FACT_LABELS = {
  campfires_permitted: "Campfires listed as allowed", generators_allowed: "Generators listed as allowed", no_dogs: "Listed as no dogs",
  heavy_vehicle_area: "Heavy vehicle area listed", sealed_surface: "Sealed surface listed", dump_point: "Dump point listed",
  dump_point_washout: "Washout tap listed",
};
const factLabel = (code) => FACT_LABELS[code] ?? `${FACILITY_LABELS[code]} listed`;
const KEY_FACILITIES = {
  campground: ["toilets", "flush_toilets", "non_flush_toilets", "drinking_water", "showers", "barbecue_facilities", "campfires_permitted", "caravan_sites", "camper_trailer_sites", "tent_beside_car", "generators_allowed", "no_dogs", "boat_ramp", "phone_reception"],
  public_dump_point: ["dump_point_washout", "drinking_water", "toilets", "accessible_toilets", "showers", "accessible_parking", "sharps_disposal"],
  roadside_rest_area: ["toilets", "drinking_water", "shelter", "picnic_tables", "barbecue_facilities", "heavy_vehicle_area", "accessible_toilets", "dump_point", "playground", "phone_reception"],
};

// ---------------------------------------------------------------------------------------------
// Safety: where this script may write, and where it never may.

mkdirSync(dataDir, { recursive: true });
const dataDirReal = realpathSync(dataDir);
const appRepoReal = existsSync(appRepo) ? realpathSync(appRepo) : appRepo;
assert.ok(!(dataDirReal + sep).startsWith(appRepoReal + sep), "lib/data resolves inside the app repo; refusing to run.");

function safeWrite(path, content) {
  const target = resolve(path);
  const parent = existsSync(dirname(target)) ? realpathSync(dirname(target)) : dirname(target);
  if (!(parent + sep).startsWith(dataDirReal + sep)) throw new Error(`Refusing to write ${target}: outside ${dataDir}`);
  if ((parent + sep).startsWith(appRepoReal + sep)) throw new Error(`Refusing to write ${target}: inside the app repo`);
  writeFileSync(join(parent, target.slice(target.lastIndexOf(sep) + 1)), content);
}

// ---------------------------------------------------------------------------------------------
// Deterministic JSON: sorted keys, short arrays inline.

function sortKeys(value) {
  if (Array.isArray(value)) return value.map(sortKeys);
  if (value && typeof value === "object") return Object.fromEntries(Object.keys(value).sort().map((key) => [key, sortKeys(value[key])]));
  return value;
}
function format(value, indent = "") {
  const inner = `${indent}  `;
  if (Array.isArray(value)) {
    if (!value.length) return "[]";
    const flat = value.every((item) => item === null || typeof item !== "object" || (Array.isArray(item) && item.every((part) => typeof part !== "object")));
    if (flat) return `[${value.map((item) => JSON.stringify(item)).join(",")}]`;
    return `[\n${value.map((item) => inner + format(item, inner)).join(",\n")}\n${indent}]`;
  }
  if (value && typeof value === "object") {
    const keys = Object.keys(value);
    if (!keys.length) return "{}";
    // A record of plain values (a place, a fact) stays on one line, which keeps the diff readable.
    const plain = keys.every((key) => value[key] === null || typeof value[key] !== "object" || (Array.isArray(value[key]) && value[key].every((part) => typeof part !== "object")));
    if (plain && JSON.stringify(value).length <= 600) return JSON.stringify(value).replace(/,"/g, ', "').replace(/":/g, '": ');
    return `{\n${keys.map((key) => `${inner}${JSON.stringify(key)}: ${format(value[key], inner)}`).join(",\n")}\n${indent}}`;
  }
  return JSON.stringify(value);
}
const serialise = (value) => `${format(sortKeys(value))}\n`;
const round = (value, places) => { const factor = 10 ** places; const result = Math.round(value * factor) / factor; return Object.is(result, -0) ? 0 : result; };
const share = (part, whole) => (whole ? Math.round((100 * part) / whole) : 0);
const byText = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

/**
 * Some sources publish names in capitals ("NEWELL HIGHWAY", "WOLLONDILLY"). Those are set in title
 * case; mixed-case names are left exactly as the source wrote them.
 */
const KEEP_UPPER = new Set(["NSW", "ACT", "QLD", "VIC", "TAS", "WA", "SA", "NT", "RSL", "CWA", "BP", "PO", "VC", "NP", "SES", "4WD", "2WD"]);
const SMALL_WORDS = new Set(["of", "and", "the", "at", "on", "in"]);
function tidy(text) {
  if (!text || !/[A-Z]{3}/.test(text)) return text;
  // In an all-capitals name every word is recased; in a mixed one ("BENALLA rest area") only the
  // leading capitalised words, so an acronym later in a name ("National Park (CYPAL)") survives.
  const allCaps = !/[a-z]/.test(text);
  let leading = true;
  return text.split(" ").map((word, index) => {
    if (/[a-z]/.test(word)) leading = false;
    if (KEEP_UPPER.has(word.replace(/[^A-Z0-9]/g, "")) || /[a-z]/.test(word) || !/[A-Z]/.test(word)) return word;
    if (!allCaps && !leading) return word;
    const lower = word.toLowerCase();
    if (index > 0 && SMALL_WORDS.has(lower)) return lower;
    // "NT/SA" keeps both abbreviations; anything else is recased part by part.
    return word.split("/").map((part) => (KEEP_UPPER.has(part.replace(/[^A-Z0-9]/g, "")) ? part
      : part.toLowerCase().replace(/(^|[-'’(])([a-z])/g, (match, before, letter) => before + letter.toUpperCase()))).join("/");
  }).join(" ");
}
/** Names a source uses when it has none, which say nothing to a reader and are never listed. */
const PLACEHOLDER_NAME = /^(rest area|rest area rest area|unnamed|unknown|no name)$/i;

function slugify(name) {
  const slug = name.normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/['’`]/g, "").replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  if (slug.length <= 70) return slug;
  return slug.slice(0, 71).replace(/-[^-]*$/, "");
}

/** An official, human-readable page: a gov.au host and not an API or GIS endpoint. */
function officialPage(...candidates) {
  for (const candidate of candidates) {
    if (!candidate) continue;
    let url;
    try { url = new URL(candidate.trim()); } catch { continue; }
    if (url.protocol !== "https:" && url.protocol !== "http:") continue;
    if (!/(^|\.)gov\.au$/i.test(url.hostname)) continue;
    if (/\/(api|arcgis|rest\/services|server\/rest)\b|\.csv$|\/query$/i.test(url.pathname)) continue;
    url.protocol = "https:";
    url.hash = "";
    return url.toString();
  }
  return null;
}

// ---------------------------------------------------------------------------------------------
// Read the copy.

assert.ok(existsSync(sourcePath), `App database not found at ${sourcePath}. Set CAMPING_APP_DATA to the app repo.`);
const workDir = mkdtempSync(join(tmpdir(), "aussiecamps-export-"));
const copyPath = join(workDir, "australia_db.sqlite");
let db;
try {
  copyFileSync(sourcePath, copyPath);
  db = new DatabaseSync(copyPath, { readOnly: true });
  await run();
} finally {
  db?.close();
  rmSync(workDir, { recursive: true, force: true });
}

async function run() {
  const sourceBytes = readFileSync(copyPath);
  const sourceSha256 = createHash("sha256").update(sourceBytes).digest("hex");
  const previousMeta = existsSync(resolve(dataDir, "hubs.meta.json")) ? JSON.parse(readFileSync(resolve(dataDir, "hubs.meta.json"), "utf8")) : null;
  const sameSource = previousMeta?.source?.sha256 === sourceSha256;
  const dataAsOf = sameSource ? previousMeta.dataAsOf : statSync(sourcePath).mtime.toISOString().slice(0, 10);
  const exportDate = sameSource ? previousMeta.exportDate : new Date().toISOString().slice(0, 10);

  // Fail closed: an operator nobody has classified stops the export.
  const operators = db.prepare("SELECT Operator AS operator, COUNT(*) AS n FROM Site GROUP BY Operator").all();
  for (const { operator } of operators) {
    if (!operator || !SOURCES[operator]) throw new Error(`Unknown source operator ${JSON.stringify(operator)}: classify it in SOURCES before exporting.`);
  }

  const types = new Map(db.prepare("SELECT Id, Name, PluralName FROM SiteType").all().map((row) => [row.Id, row]));
  const allowed = new Set(Object.entries(SOURCES).filter(([, source]) => source.licence !== "exclude").map(([operator]) => operator));
  const rawSites = db.prepare(`SELECT Id, SiteName, SiteTypeId, State, Locality, Address, Latitude, Longitude, Website, SourceUrl,
    ParkId, ParentName, Operator, FeeCategory FROM Site ORDER BY Id`).all();

  const junkName = /404|can.?t be found|not be found|page not found/i;
  const sites = rawSites.filter((site) => allowed.has(site.Operator)
    && stateByCode.has(site.State)
    && typeof site.Latitude === "number" && typeof site.Longitude === "number"
    && site.Latitude >= -44.5 && site.Latitude <= -9 && site.Longitude >= 112 && site.Longitude <= 160
    && site.SiteName && site.SiteName.trim() && !junkName.test(site.SiteName));
  const siteIds = new Set(sites.map((site) => site.Id));

  // Facility flags, from the codes the app itself shows (Feature.Excluded = 0, agency codes only).
  const features = new Map();
  for (const row of db.prepare(`SELECT sf.SiteId AS site, f.Id AS code FROM SiteFeature sf JOIN Feature f ON f.Id = sf.FeatureId
    WHERE f.Excluded = 0 AND f.Id NOT LIKE 'bookeasy/%' ORDER BY sf.SiteId, f.Id`).all()) {
    if (!siteIds.has(row.site) || !FACILITY_LABELS[row.code]) continue;
    if (!features.has(row.site)) features.set(row.site, new Set());
    features.get(row.site).add(row.code);
  }

  // Fees reduced to a categorical summary. The raw text is read only to recognise the NSW "no camping
  // fee, booking fee applies" case; none of it is copied.
  const fees = new Map();
  for (const row of db.prepare("SELECT SiteId AS site, Price AS price, Category AS category, RawText AS raw FROM Fee ORDER BY SiteId, Id").all()) {
    if (!siteIds.has(row.site)) continue;
    if (!fees.has(row.site)) fees.set(row.site, { camping: false, entry: false, bookingOnly: null });
    const entry = fees.get(row.site);
    const bookingOnly = /no camping fees? at this campground but a \$(\d+(?:\.\d{2})?) booking fee/i.exec(row.raw ?? "");
    if (bookingOnly) {
      entry.bookingOnly = Number(bookingOnly[1]);
      if (Number(bookingOnly[1]) === row.price) continue;
    }
    if (!(row.price > 0)) continue;
    if (row.category === "camping") entry.camping = true;
    if (row.category === "park_entry") entry.entry = true;
  }
  const feeSummary = (site) => {
    if (site.FeeCategory === "Free") return "Free";
    const fee = fees.get(site.Id);
    if (!fee) return null;
    const parts = [];
    if (fee.bookingOnly !== null && !fee.camping) parts.push(`No camping fee; A$${fee.bookingOnly} booking fee`);
    else if (fee.camping) parts.push("Camping fee");
    if (fee.entry) parts.push(parts.length ? "park entry fee" : "Park entry fee");
    return parts.length ? parts.join("; ") : null;
  };

  // Park names and pages, for campgrounds that sit inside one.
  const parks = new Map(db.prepare("SELECT Id, Name, Website FROM Park").all().map((row) => [row.Id, row]));
  const cleanName = (name) => tidy((name ?? "").replace(/\s+/g, " ").trim());
  const parkOf = (site) => {
    const named = cleanName(site.ParentName);
    const park = site.ParkId ? parks.get(site.ParkId) : undefined;
    if (named) return { name: named, url: park && cleanName(park.Name) === named ? officialPage(park.Website) : null };
    if (park && park.Id !== site.Id && cleanName(park.Name)) return { name: cleanName(park.Name), url: officialPage(park.Website) };
    return null;
  };

  const placeRecord = (site) => {
    const codes = features.get(site.Id) ?? new Set();
    const park = site.SiteTypeId === "campground" ? parkOf(site) : null;
    return {
      id: site.Id,
      name: cleanName(site.SiteName),
      type: site.SiteTypeId,
      state: site.State,
      locality: cleanName(site.Locality) || null,
      park: park?.name ?? null,
      fee: feeSummary(site),
      facilities: (KEY_FACILITIES[site.SiteTypeId] ?? []).filter((code) => codes.has(code)).map((code) => FACILITY_LABELS[code]),
      url: officialPage(site.Website, site.SourceUrl),
      source: SOURCES[site.Operator].key,
      lat: round(site.Latitude, 3),
      lng: round(site.Longitude, 3),
    };
  };

  // -------------------------------------------------------------------------------------------
  // Rest areas: RADAR is the national set; the state road agencies overlap it heavily, so a state
  // record counts as a separate place only when no RADAR point lies within 250 m.

  const restAreas = sites.filter((site) => site.SiteTypeId === "roadside_rest_area");
  const radar = restAreas.filter((site) => site.Operator === "Australian Government (RADAR)");
  const grid = new Map();
  const cell = (lat, lng) => `${Math.floor(lat * 100)}:${Math.floor(lng * 100)}`;
  for (const site of radar) {
    const key = cell(site.Latitude, site.Longitude);
    if (!grid.has(key)) grid.set(key, []);
    grid.get(key).push(site);
  }
  const nearRadar = (site) => {
    const [y, x] = [Math.floor(site.Latitude * 100), Math.floor(site.Longitude * 100)];
    for (let dy = -1; dy <= 1; dy += 1) for (let dx = -1; dx <= 1; dx += 1) {
      for (const other of grid.get(`${y + dy}:${x + dx}`) ?? []) {
        const north = (other.Latitude - site.Latitude) * 111_320;
        const east = (other.Longitude - site.Longitude) * 111_320 * Math.cos((site.Latitude * Math.PI) / 180);
        if (Math.hypot(north, east) <= 250) return true;
      }
    }
    return false;
  };
  const extraRestAreas = restAreas.filter((site) => site.Operator !== "Australian Government (RADAR)" && !nearRadar(site));

  // -------------------------------------------------------------------------------------------
  // Product facts.

  const count = (list, predicate) => list.filter(predicate).length;
  const typeCount = (list) => {
    const counts = {};
    for (const site of list) counts[site.SiteTypeId] = (counts[site.SiteTypeId] ?? 0) + 1;
    return counts;
  };
  const passSites = sites.filter((site) => !FREE_CATEGORY_CODES.includes(site.SiteTypeId));
  const stateFacts = (list, restList, extraList) => ({
    campgrounds: count(list, (site) => site.SiteTypeId === "campground"),
    dumpPoints: count(list, (site) => site.SiteTypeId === "public_dump_point"),
    restAreas: count(restList, (site) => site.Operator === "Australian Government (RADAR)") + extraList.length,
    restAreasNational: count(restList, (site) => site.Operator === "Australian Government (RADAR)"),
    restAreaRecords: restList.length,
    water: count(list, (site) => site.SiteTypeId === "water_facility"),
    toilets: count(list, (site) => site.SiteTypeId === "public_facility"),
    nationalParks: count(list, (site) => site.SiteTypeId === "national_park"),
    campgroundsWithDrinkingWater: count(list, (site) => site.SiteTypeId === "campground" && features.get(site.Id)?.has("drinking_water")),
    campgroundsWithShowers: count(list, (site) => site.SiteTypeId === "campground" && features.get(site.Id)?.has("showers")),
    dumpPointsWithWashout: count(list, (site) => site.SiteTypeId === "public_dump_point" && features.get(site.Id)?.has("dump_point_washout")),
    restAreasWithToilets: count(restList, (site) => site.Operator === "Australian Government (RADAR)" && features.get(site.Id)?.has("toilets")),
    passPlaces: count(list, (site) => !FREE_CATEGORY_CODES.includes(site.SiteTypeId)),
  });
  const byType = {};
  for (const [code, n] of Object.entries(typeCount(passSites)).sort(([a], [b]) => byText(a, b))) {
    const type = types.get(code);
    byType[code] = { name: type?.Name ?? code, plural: type?.PluralName ?? code, count: n, access: "pass" };
  }
  const productFacts = {
    dataAsOf,
    note: "Counts of what the AussieCamps app carries, from the database the release app ships. Partner (BookEasy) inventory is free in the app but never counted or listed here. Everything counted here needs the Pass.",
    passBoundary: {
      free: { categories: FREE_CATEGORY_CODES.slice().sort(), summary: "Bookable stays and tours listed by the booking partner: hotels, motels, B&Bs, holiday parks, self-contained stays and tours. Free to browse and book in the app." },
      pass: { categories: Object.keys(byType), summary: "Campgrounds, national parks and reserves, rest areas, dump points, water, toilets, walking tracks, activities, guides, collections and trips." },
    },
    byType,
    totals: stateFacts(sites, restAreas, extraRestAreas),
    byState: Object.fromEntries(STATES.map((state) => [state.code, {
      name: state.name,
      ...stateFacts(sites.filter((site) => site.State === state.code), restAreas.filter((site) => site.State === state.code), extraRestAreas.filter((site) => site.State === state.code)),
      byType: Object.fromEntries(Object.entries(typeCount(passSites.filter((site) => site.State === state.code))).sort(([a], [b]) => byText(a, b))),
    }])),
  };

  // -------------------------------------------------------------------------------------------
  // Hubs.

  const fact = (dimension, key, label, value, total) => (value === null || value === undefined || value === 0 || value === ""
    ? null : { dimension, key, label, value, ...(typeof value === "number" && total ? { share: share(value, total) } : {}) });
  const flagged = (list, code) => count(list, (site) => features.get(site.Id)?.has(code));
  const top = (list, keyOf, limit) => {
    const counts = new Map();
    for (const site of list) { const key = keyOf(site); if (key) counts.set(key, (counts.get(key) ?? 0) + 1); }
    return [...counts].sort(([a, x], [b, y]) => y - x || byText(a, b)).slice(0, limit).map(([name, n]) => ({ name, count: n }));
  };
  const roadOf = (site) => {
    const road = cleanName(site.Address);
    return /\b(highway|hwy|road|rd|freeway|fwy|motorway|way|drive|route)\b/i.test(road) ? road.replace(/\bHwy\b/i, "Highway") : null;
  };
  const sourceFacts = (list) => {
    const counts = new Map();
    for (const site of list) counts.set(site.Operator, (counts.get(site.Operator) ?? 0) + 1);
    return [...counts].sort(([a, x], [b, y]) => y - x || byText(a, b)).map(([operator, n]) => fact("sources", `source:${SOURCES[operator].key}`, `From ${SOURCES[operator].short}`, n));
  };
  const facilityFacts = (list, codes, dimension) => codes.map((code) => fact(dimension, `with:${code}`, factLabel(code), flagged(list, code), list.length));
  const score = (place) => place.facilities.length * 4 + (place.url ? 3 : 0) + (place.locality || place.park ? 2 : 0) + (place.fee ? 1 : 0);
  const pick = (places) => places.filter((place) => !PLACEHOLDER_NAME.test(place.name))
    .sort((a, b) => score(b) - score(a) || byText(a.name, b.name) || byText(a.id, b.id)).slice(0, 25);
  const dots = (list) => [...new Set(list.map((site) => `${round(site.Longitude, 2)},${round(site.Latitude, 2)}`))].sort()
    .map((pair) => pair.split(",").map(Number));
  const usedSources = (list) => [...new Set(list.map((site) => SOURCES[site.Operator].key))].sort();

  const hubs = [];
  const addHub = (hub, list) => {
    const places = list.map(placeRecord);
    hubs.push({
      ...hub,
      placeCount: list.length,
      facts: hub.facts.filter(Boolean),
      places: pick(places),
      placeIds: list.map((site) => site.Id).sort(),
      dots: dots(list),
      sources: usedSources(list),
    });
  };

  const campgrounds = sites.filter((site) => site.SiteTypeId === "campground");
  for (const state of STATES) {
    const list = campgrounds.filter((site) => site.State === state.code);
    if (!list.length) continue;
    const parkGroups = top(list, (site) => parkOf(site)?.name, 10);
    const feeList = list.map((site) => feeSummary(site) ?? "");
    addHub({
      id: `camping/${state.slug}`, kind: "camping-state", parent: null, path: `/camping/${state.slug}/`,
      state: state.code, stateName: state.name, name: `Camping in ${state.inName ?? state.name}`, rulesGuide: state.rules,
      topParks: parkGroups, officialUrl: null,
      facts: [
        fact("count", "campgrounds", "Campgrounds in the app", list.length),
        fact("geography", "parks", "Parks and reserves with a campground", new Set(list.map((site) => parkOf(site)?.name).filter(Boolean)).size),
        fact("geography", "largestPark", "Park with the most campgrounds", parkGroups[0] ? `${parkGroups[0].name} (${parkGroups[0].count})` : null),
        ...facilityFacts(list, ["toilets", "flush_toilets", "drinking_water", "showers", "barbecue_facilities", "phone_reception"], "facilities"),
        ...facilityFacts(list, ["caravan_sites", "camper_trailer_sites", "tent_beside_car", "boat_ramp"], "access"),
        ...facilityFacts(list, ["campfires_permitted", "generators_allowed", "no_dogs"], "rules"),
        fact("fees", "fees:camping", "Camping fee listed", count(feeList, (fee) => fee.startsWith("Camping fee")), list.length),
        fact("fees", "fees:none", "No camping fee listed (booking fee only)", count(feeList, (fee) => fee.startsWith("No camping fee")), list.length),
        fact("fees", "fees:entry", "Park entry fee listed", count(feeList, (fee) => /park entry fee/i.test(fee)), list.length),
        ...sourceFacts(list),
      ],
    }, list);
  }

  // Park hubs: candidates are parks with at least three campgrounds; the gate decides what is built.
  const parkCandidates = new Map();
  for (const site of campgrounds) {
    const park = parkOf(site);
    if (!park) continue;
    const key = `${site.State}|${park.name}`;
    if (!parkCandidates.has(key)) parkCandidates.set(key, { park, list: [] });
    parkCandidates.get(key).list.push(site);
    if (!parkCandidates.get(key).park.url && park.url) parkCandidates.get(key).park.url = park.url;
  }
  const usedSlugs = new Set();
  for (const [key, { park, list }] of [...parkCandidates].sort(([a], [b]) => byText(a, b))) {
    if (list.length < 3) continue;
    const state = stateByCode.get(key.split("|")[0]);
    let slug = slugify(park.name);
    for (let suffix = 2; usedSlugs.has(`${state.slug}/${slug}`); suffix += 1) slug = `${slugify(park.name)}-${suffix}`;
    usedSlugs.add(`${state.slug}/${slug}`);
    const feeList = list.map((site) => feeSummary(site) ?? "");
    addHub({
      id: `camping/${state.slug}/${slug}`, kind: "camping-park", parent: `camping/${state.slug}`, path: `/camping/${state.slug}/${slug}/`,
      state: state.code, stateName: state.name, name: park.name, rulesGuide: state.rules, officialUrl: park.url ?? null, topParks: [],
      facts: [
        fact("count", "campgrounds", "Campgrounds in the app", list.length),
        fact("geography", "localities", "Localities named", new Set(list.map((site) => cleanName(site.Locality)).filter(Boolean)).size),
        ...facilityFacts(list, ["toilets", "flush_toilets", "drinking_water", "showers", "barbecue_facilities", "phone_reception"], "facilities"),
        ...facilityFacts(list, ["caravan_sites", "camper_trailer_sites", "tent_beside_car", "boat_ramp"], "access"),
        ...facilityFacts(list, ["campfires_permitted", "generators_allowed", "no_dogs"], "rules"),
        fact("fees", "fees:camping", "Camping fee listed", count(feeList, (fee) => fee.startsWith("Camping fee")), list.length),
        fact("fees", "fees:none", "No camping fee listed (booking fee only)", count(feeList, (fee) => fee.startsWith("No camping fee")), list.length),
        fact("fees", "fees:entry", "Park entry fee listed", count(feeList, (fee) => /park entry fee/i.test(fee)), list.length),
        ...sourceFacts(list),
      ],
    }, list);
  }

  const dumpPoints = sites.filter((site) => site.SiteTypeId === "public_dump_point");
  for (const state of STATES) {
    const list = dumpPoints.filter((site) => site.State === state.code);
    if (!list.length) continue;
    const towns = top(list, (site) => cleanName(site.Locality), 5).filter((town) => town.count > 1);
    const stateRest = restAreas.filter((site) => site.State === state.code && site.Operator === "Australian Government (RADAR)");
    addHub({
      id: `dump-points/${state.slug}`, kind: "dump-points-state", parent: null, path: `/dump-points/${state.slug}/`,
      state: state.code, stateName: state.name, name: `Dump points in ${state.inName ?? state.name}`, rulesGuide: state.rules, officialUrl: null,
      topLocalities: towns,
      facts: [
        fact("count", "dumpPoints", "Dump points in the app", list.length),
        fact("geography", "localities", "Towns and localities with a dump point", new Set(list.map((site) => cleanName(site.Locality)).filter(Boolean)).size),
        fact("geography", "topLocality", "Locality with the most dump points", towns[0] ? `${towns[0].name} (${towns[0].count})` : null),
        ...facilityFacts(list, ["dump_point_washout", "drinking_water", "toilets", "accessible_toilets", "showers", "sharps_disposal"], "facilities"),
        fact("access", "with:accessible_parking", factLabel("accessible_parking"), flagged(list, "accessible_parking"), list.length),
        fact("fees", "fees:free", "Listed as free to use", count(list, (site) => site.FeeCategory === "Free"), list.length),
        fact("related", "restAreasWithDumpPoint", "Rest areas with a dump point", flagged(stateRest, "dump_point")),
        fact("related", "waterPoints", "Water filling points in the app", count(sites, (site) => site.State === state.code && site.SiteTypeId === "water_facility")),
        ...sourceFacts(list),
      ],
    }, list);
  }

  for (const state of STATES) {
    const list = radar.filter((site) => site.State === state.code);
    if (!list.length) continue;
    const roads = top(list, roadOf, 5);
    const extra = extraRestAreas.filter((site) => site.State === state.code);
    addHub({
      id: `rest-areas/${state.slug}`, kind: "rest-areas-state", parent: null, path: `/rest-areas/${state.slug}/`,
      state: state.code, stateName: state.name, name: `Rest areas in ${state.inName ?? state.name}`, rulesGuide: state.rules, officialUrl: null,
      topRoads: roads,
      facts: [
        fact("count", "restAreas", "Rest areas in the national dataset", list.length),
        fact("count", "extraRestAreas", "More from the state road agency (over 250 m from a national record)", extra.length),
        fact("geography", "localities", "Localities named", new Set(list.map((site) => cleanName(site.Locality)).filter(Boolean)).size),
        fact("geography", "topRoad", "Road with the most rest areas", roads[0] ? `${roads[0].name} (${roads[0].count})` : null),
        ...facilityFacts(list, ["toilets", "drinking_water", "shelter", "picnic_tables", "barbecue_facilities", "playground", "phone_reception"], "facilities"),
        ...facilityFacts(list, ["heavy_vehicle_area", "sealed_surface", "accessible_toilets", "dump_point"], "access"),
        fact("fees", "fees:free", "Listed as free to use", count(list, (site) => site.FeeCategory === "Free"), list.length),
        ...sourceFacts([...list, ...extra]),
      ],
    }, list);
  }

  hubs.sort((a, b) => byText(a.id, b.id));
  const hubsFile = { dataAsOf, hubs };

  // -------------------------------------------------------------------------------------------
  // Meta: provenance and one attribution line per source actually published.

  const published = new Set(hubs.flatMap((hub) => hub.sources));
  const exportedRows = new Map();
  for (const site of sites) exportedRows.set(site.Operator, (exportedRows.get(site.Operator) ?? 0) + 1);
  const meta = {
    dataAsOf,
    exportDate,
    exporter: "scripts/export-app-data.mjs",
    source: { file: sourceRelative, sha256: sourceSha256, bytes: sourceBytes.length },
    licencesVerified: LICENCES_VERIFIED,
    sources: Object.entries(SOURCES).filter(([, source]) => source.licence !== "exclude").map(([operator, source]) => ({
      operator, key: source.key, short: source.short, licence: source.licence, licenceUrl: source.licence === "cc-by-4.0" ? CC_BY : null,
      attribution: source.attribution, url: source.url, terms: source.terms, rows: exportedRows.get(operator) ?? 0, inHubs: published.has(source.key),
    })).sort((a, b) => byText(a.key, b.key)),
    excluded: Object.entries(SOURCES).filter(([, source]) => source.licence === "exclude").map(([operator, source]) => ({ operator, key: source.key, reason: source.reason })),
    policy: "Facts only: names, locality, fee summaries, facility flags, counts and coordinates rounded to 3 decimals (map dots to 2). No description text, photos or image URLs from any source.",
  };

  // -------------------------------------------------------------------------------------------
  // No long hub string may reproduce source description text.

  const proseFile = existsSync(prosePath) ? readFileSync(prosePath) : Buffer.from("{}\n");
  const prose = JSON.parse(proseFile.toString("utf8"));
  const candidates = [];
  const exempt = new Set(["id", "name", "park", "path", "parent", "url", "officialUrl", "rulesGuide", "source", "stateName", "locality"]);
  const collect = (value, key, where) => {
    if (typeof value === "string") { if (!exempt.has(key) && value.length > 80) candidates.push({ where, text: value }); return; }
    if (Array.isArray(value)) value.forEach((item, index) => collect(item, key, `${where}[${index}]`));
    else if (value && typeof value === "object") for (const [child, item] of Object.entries(value)) collect(item, child, `${where}.${child}`);
  };
  collect(hubs, "", "hubs");
  collect(prose, "", "prose");
  const violations = checkAgainstDescriptions(candidates);
  if (violations.length) {
    for (const violation of violations) console.error(`${violation.where} repeats ${violation.length} characters of source description text: "${violation.sample}"`);
    throw new Error("Hub text reproduces source descriptions; nothing was written.");
  }
  const hubsJson = serialise(hubsFile);
  const proseCheck = {
    hubsSha256: createHash("sha256").update(hubsJson).digest("hex"),
    proseFile: "lib/hubs/prose.json",
    proseSha256: createHash("sha256").update(proseFile).digest("hex"),
    sourceSha256,
    rule: "No hub string over 80 characters shares a run of more than 80 normalised characters with any Description, SiteDescription or Park description in the source.",
    checkedStrings: candidates.length,
  };

  safeWrite(resolve(dataDir, "product-facts.json"), serialise(productFacts));
  safeWrite(resolve(dataDir, "hubs.json"), hubsJson);
  safeWrite(resolve(dataDir, "hubs.meta.json"), serialise(meta));
  safeWrite(resolve(dataDir, "hubs.prose-check.json"), serialise(proseCheck));

  const kinds = {};
  for (const hub of hubs) kinds[hub.kind] = (kinds[hub.kind] ?? 0) + 1;
  console.log(`Exported ${sites.length} places (${operators.length} operators, BookEasy excluded) as of ${dataAsOf}; source ${sourceSha256.slice(0, 12)}.`);
  console.log(`Hub candidates: ${Object.entries(kinds).map(([kind, n]) => `${n} ${kind}`).join(", ")}. Checked ${candidates.length} long strings against source descriptions.`);
}

/**
 * Finds hub strings that share a run of more than 80 normalised characters with any source
 * description. Five-word shingles of the hub strings locate candidate overlaps in one pass over the
 * descriptions; each hit is then extended character by character, so only a genuine run counts.
 */
function checkAgainstDescriptions(candidates) {
  if (!candidates.length) return [];
  const normalise = (text) => text.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  const words = (text) => [...text.matchAll(/[a-z0-9]+/g)].map((match) => [match[0], match.index]);
  const size = 5;
  const wanted = new Map();
  const prepared = candidates.map((candidate, index) => {
    const text = normalise(candidate.text);
    const list = words(text);
    for (let at = 0; at + size <= list.length; at += 1) {
      const key = list.slice(at, at + size).map(([word]) => word).join(" ");
      if (!wanted.has(key)) wanted.set(key, []);
      wanted.get(key).push({ index, start: list[at][1] });
    }
    return { where: candidate.where, text, longest: 0, sample: "" };
  });
  const scan = (raw) => {
    const text = normalise(raw);
    const list = words(text);
    for (let at = 0; at + size <= list.length; at += 1) {
      const hits = wanted.get(list.slice(at, at + size).map(([word]) => word).join(" "));
      if (!hits) continue;
      const from = list[at][1];
      for (const { index, start } of hits) {
        const candidate = prepared[index];
        let left = 0;
        while (start - left > 0 && from - left > 0 && candidate.text[start - left - 1] === text[from - left - 1]) left += 1;
        let right = 0;
        while (start + right < candidate.text.length && from + right < text.length && candidate.text[start + right] === text[from + right]) right += 1;
        const run = candidate.text.slice(start - left, start + right).trim();
        if (run.length > candidate.longest) { candidate.longest = run.length; candidate.sample = run; }
      }
    }
  };
  for (const sql of ["SELECT Description AS text FROM Site WHERE Description IS NOT NULL", "SELECT Body AS text FROM SiteDescription WHERE Body IS NOT NULL", "SELECT Description AS text FROM Park WHERE Description IS NOT NULL"]) {
    for (const row of db.prepare(sql).all()) scan(row.text);
  }
  return prepared.filter((candidate) => candidate.longest > 80).map((candidate) => ({ where: candidate.where, length: candidate.longest, sample: candidate.sample.slice(0, 120) }));
}
