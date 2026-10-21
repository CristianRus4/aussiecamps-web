import { hubTranslationFiles } from "../translations/hubs/index";
import { hubData, hubProse, hubVerdicts, type Hub } from "./gate";

/**
 * The `hubs` translation namespace, with English fallback.
 *
 * English hub pages render from components/hubs/hub-page.tsx and never read this file. The localised
 * hub pages (/<locale>/camping/…) read their copy from here: the English source below, or a locale's
 * lib/translations/hubs/<code>.json when it is complete for that page.
 *
 * Nothing is shown half-translated, the same rule lib/localized.ts applies to guides: a localised hub
 * uses its translation only when the shared strings, every label its own table shows and its own prose
 * are all filled, every {placeholder} survives, and each prose paragraph carries exactly the numbers
 * of its English paragraph. Otherwise the whole body is English (and the page noindex, see
 * lib/hubs/localized.ts).
 *
 * `npm run hubs:source` writes this source to lib/translations/hubs/en.json for the translation engine
 * (docs/translation.hubs.config.json); scripts/audit-hubs.mjs fails when the committed file is stale.
 */

/** A JSON key the translation engine handles in every adapter: lower case, digits and hyphens. */
export const labelKey = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
/** Source attributions ("From SA DEW") translate as one template around the agency's short name. */
const sourceLabel = /^From (.+)$/;

const common = {
  home: "Home",
  factsCaption: "What the data lists for {where}",
  readingTitle: "Reading the numbers",
  placesAll: "The {count} {many}",
  placesSome: "{shown} of the {count} {many}",
  placesSample: "These are the {shown} with the most detail in the data.",
  placesNote: "Facilities are what each source lists; a facility not listed may still exist, and conditions change. Check the official page before you go.",
  colPlace: "Place",
  colParkOrLocality: "Park or locality",
  colLocality: "Locality",
  colFees: "Fees",
  colFacilities: "Facilities listed",
  colOfficial: "Official page",
  notListed: "Not listed",
  noneListed: "None listed",
  officialLink: "Official page",
  parksTitle: "Parks in {state} with their own page",
  parkItem: "{name} ({count} campgrounds)",
  beforeTitle: "Before you go",
  beforeText: "Rules, fees and closures change. Read the state rules and the land manager’s page for your exact stop.",
  officialParkPage: "{name}: official park page",
  ctaEyebrow: "In the app",
  ctaNote: "Campgrounds, rest areas, dump points, water and the trip planner are part of the AussieCamps Pass. Bookable stays and tours are free to browse and book. AussieCamps is an iPhone app.",
  download: "Download app",
  downloadLabel: "Download AussieCamps for iOS",
  dataNote: "Data as of {date}, from the AussieCamps app. Facts only: no descriptions or photos from these sources are reproduced.",
  allSources: "All data sources",
  mapLabel: "{count} {many} in {where}, one dot each.",
  summary: "{count} {many} in {where}{shares}. Names, localities, fees and facilities, with official links. Data as of {date}.",
  byState: "By state",
  unlinked: "The app also lists {list}. Those states are not covered in depth here yet; the app has every place.",
  unlinkedItem: "{count} in {state}",
  parksWithPage: "Parks with their own page",
  indexDataNote: "Data as of {date}, from the AussieCamps app. Facts only, with the official page linked wherever the source gives one.",
  dataSources: "Data sources",
  australia: "Australia",
  campgroundCount: "{count} campgrounds",
  sourceFact: "From {source}",
};

type SectionStrings = {
  label: string; one: string; many: string; indexTitle: string; indexDescription: string; h1: string; intro: string;
  hubName: string; title: string; ctaTitle: string; ctaText: string;
};
const sections: Record<"camping" | "dump-points" | "rest-areas", SectionStrings> = {
  camping: {
    label: "Camping", one: "campground", many: "campgrounds",
    indexTitle: "Camping in Australia by State: Campgrounds, Facilities and Fees",
    indexDescription: "Campgrounds from the state park agencies, state by state and park by park: what each lists for toilets, water, showers, fires and fees, with links to the official pages.",
    h1: "Camping in Australia, state by state",
    intro: "Each page below covers the campgrounds the AussieCamps app lists in one state or park, drawn from the land managers’ own pages: how many there are, what facilities and fees they list, and a link to the official page for every place named.",
    hubName: "Camping in {state}",
    title: "Camping in {state}: {count} Campgrounds",
    ctaTitle: "All {count} campgrounds in {where}, on one map.",
    ctaText: "AussieCamps carries every campground on this page with its facilities, fees and official link, alongside rest areas, dump points and water, and builds a multi-stop trip from the places you save.",
  },
  "dump-points": {
    label: "Dump points", one: "dump point", many: "dump points",
    indexTitle: "Dump Points in Australia by State: Locations and Facilities",
    indexDescription: "Public dump points for toilet cassettes and waste tanks, state by state: which towns have them, which list a washout tap or drinking water, and where to check the details.",
    h1: "Dump points in Australia, state by state",
    intro: "Each page below covers the public dump points the AussieCamps app lists in one state, from the National Public Toilet Map: how many there are, the towns with the most, and which list a washout tap, drinking water or toilets.",
    hubName: "Dump points in {state}",
    title: "Dump Points in {state}: {count} Locations",
    ctaTitle: "Every dump point in {where}, on the map with your route.",
    ctaText: "AussieCamps carries all {count} dump points listed here with their facilities, plus water filling points and rest areas, so the next empty-and-refill stop is on the route you are already driving.",
  },
  "rest-areas": {
    label: "Rest areas", one: "rest area", many: "rest areas",
    indexTitle: "Rest Areas in Australia by State: Roadside Stops and Facilities",
    indexDescription: "Roadside rest areas from the national dataset, state by state: the highways with the most stops and which list toilets, drinking water, shelter or room for trucks.",
    h1: "Rest areas in Australia, state by state",
    intro: "Each page below covers the roadside rest areas in the national formal rest areas dataset for one state: the roads with the most stops and which list toilets, drinking water, shelter, barbecues or a heavy vehicle area.",
    hubName: "Rest areas in {state}",
    title: "Rest Areas in {state}: {count} Roadside Stops",
    ctaTitle: "All {count} rest areas in {where}, along your route.",
    ctaText: "AussieCamps carries the rest areas on this page with the facilities each one lists, alongside campgrounds, dump points and water, and shows them on the road you are planning.",
  },
};

/** The shares the summary line names, per section, in order. */
export const summaryShares: Record<keyof typeof sections, { fact: string; key: string; text: string }[]> = {
  camping: [
    { fact: "with:toilets", key: "campingToilets", text: "{share}% list toilets" },
    { fact: "with:drinking_water", key: "drinkingWater", text: "{share}% drinking water" },
    { fact: "with:showers", key: "showers", text: "{share}% showers" },
  ],
  "dump-points": [
    { fact: "with:dump_point_washout", key: "washout", text: "{share}% list a washout tap" },
    { fact: "with:drinking_water", key: "drinkingWater", text: "{share}% drinking water" },
    { fact: "with:toilets", key: "toilets", text: "{share}% toilets" },
  ],
  "rest-areas": [
    { fact: "with:toilets", key: "campingToilets", text: "{share}% list toilets" },
    { fact: "with:drinking_water", key: "drinkingWater", text: "{share}% drinking water" },
    { fact: "with:heavy_vehicle_area", key: "heavyVehicle", text: "{share}% a heavy vehicle area" },
  ],
};

/** Hubs whose English page is indexable: the only ones a translator is asked for. */
export const translatableHubs = hubData.hubs.filter((hub) => hubVerdicts.get(hub.id)!.indexable);

const labelsOf = (hubs: Hub[]) => {
  const facts: Record<string, string> = {};
  const facilities: Record<string, string> = {};
  const fees: Record<string, string> = {};
  for (const hub of hubs) {
    for (const fact of hub.facts) if (!sourceLabel.test(fact.label)) facts[labelKey(fact.label)] = fact.label;
    for (const place of hub.places) {
      for (const facility of place.facilities) facilities[labelKey(facility)] = facility;
      if (place.fee) fees[labelKey(place.fee)] = place.fee;
    }
  }
  const sorted = (record: Record<string, string>) => Object.fromEntries(Object.entries(record).sort(([a], [b]) => a.localeCompare(b)));
  return { facts: sorted(facts), facilities: sorted(facilities), fees: sorted(fees) };
};

export type HubStrings = {
  common: typeof common;
  sections: typeof sections;
  shares: Record<string, string>;
  facts: Record<string, string>;
  facilities: Record<string, string>;
  fees: Record<string, string>;
  prose: Record<string, string[]>;
};

/** The complete English source, in the shape of a locale file. */
export function hubSource(): HubStrings {
  const shares = Object.fromEntries(Object.values(summaryShares).flat().map((share) => [share.key, share.text]));
  return {
    common,
    sections,
    shares,
    ...labelsOf(translatableHubs),
    prose: Object.fromEntries(translatableHubs.filter((hub) => hubProse[hub.id]?.length).map((hub) => [hub.id, hubProse[hub.id]])),
  };
}
export const hubSourceText = () => `${JSON.stringify(hubSource(), null, 2)}\n`;

// ------------------------------------------------------------------------------------------------
// Completeness

type Partialish<T> = { [K in keyof T]?: T[K] extends string ? string : T[K] extends Record<string, unknown> ? Partialish<T[K]> : T[K] };
type HubTranslation = Partialish<Omit<HubStrings, "prose" | "shares" | "facts" | "facilities" | "fees">> & {
  shares?: Record<string, string>; facts?: Record<string, string>; facilities?: Record<string, string>; fees?: Record<string, string>; prose?: Record<string, string[]>;
};
const files = hubTranslationFiles as unknown as Record<string, HubTranslation>;
const source = hubSource();

const filled = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0;
const placeholders = (text: string) => (text.match(/\{[a-zA-Z]+\}/g) ?? []).sort().join();
/** A translated string counts when it is filled and keeps exactly the English placeholders. */
const matches = (english: string, translated: unknown) => filled(translated) && placeholders(english) === placeholders(translated);
const allMatch = (english: Record<string, string>, translated: Record<string, unknown> | undefined) =>
  !!translated && Object.entries(english).every(([key, value]) => matches(value, translated[key]));

/** Every number in a paragraph, separators dropped, in order: "4,046.5" and "4.046,5" are both 40465. */
export const proseNumbers = (text: string) => (text.match(/\d+(?:[.,   ]\d{3}(?!\d))*(?:[.,]\d+)?/g) ?? []).map((number) => number.replace(/\D/g, "")).sort().join(" ");

function isProseComplete(english: string[] | undefined, translated: unknown) {
  if (!english?.length) return true;
  if (!Array.isArray(translated) || translated.length !== english.length) return false;
  return english.every((paragraph, index) => filled(translated[index]) && proseNumbers(paragraph) === proseNumbers(translated[index]));
}

/** The shared strings every localised hub page and index uses. */
export function isHubCommonComplete(locale: string) {
  const file = files[locale];
  return !!file && allMatch(source.common, file.common) && allMatch(source.shares, file.shares)
    && (Object.keys(source.sections) as (keyof typeof sections)[]).every((key) => allMatch(source.sections[key], file.sections?.[key]));
}

/** True when this hub's page can render whole in the locale: shared strings, its own labels, its own prose. */
export function isHubTranslated(locale: string, hub: Hub) {
  if (locale === "en") return true;
  const file = files[locale];
  if (!file || !isHubCommonComplete(locale)) return false;
  const own = labelsOf([hub]);
  return allMatch(own.facts, file.facts) && allMatch(own.facilities, file.facilities) && allMatch(own.fees, file.fees)
    && isProseComplete(source.prose[hub.id] ?? hubProse[hub.id], file.prose?.[hub.id]);
}

/** The strings a localised page renders: the locale's when complete for it, otherwise English throughout. */
export function hubStrings(locale: string, complete: boolean): { strings: HubStrings; translated: boolean } {
  if (locale === "en" || !complete) return { strings: { ...source, prose: hubProse }, translated: locale === "en" };
  const file = files[locale]!;
  return { strings: file as HubStrings, translated: true };
}

/** Fills {placeholders}; unknown ones are left as written. */
export const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{([a-zA-Z]+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));

/** A fact label in the page's language. */
export function factLabel(strings: HubStrings, label: string) {
  const from = sourceLabel.exec(label);
  if (from) return fill(strings.common.sourceFact, { source: from[1] });
  return strings.facts[labelKey(label)] ?? label;
}
