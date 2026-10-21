import type { Metadata } from "next";
import meta from "../data/hubs.meta.json";
import { SITE_URL, sitePath } from "../site";
import { alternatesFor } from "../seo";
import { builtHubs, hubData, hubProse, hubVerdicts, indexableHubs, type Hub, type HubKind } from "./gate";

/**
 * Page-level facts about the hubs: their sections, titles, breadcrumbs and the routes they publish.
 * Everything here derives from lib/data/hubs.json and the gate; nothing is hand-maintained per hub.
 */
export type HubSection = "camping" | "dump-points" | "rest-areas";
export const hubSections: HubSection[] = ["camping", "dump-points", "rest-areas"];

export const sectionOf = (kind: HubKind): HubSection => (kind.startsWith("camping") ? "camping" : kind === "dump-points-state" ? "dump-points" : "rest-areas");

export const sectionCopy: Record<HubSection, { label: string; one: string; many: string; indexTitle: string; indexDescription: string; h1: string; intro: string }> = {
  camping: {
    label: "Camping", one: "campground", many: "campgrounds",
    indexTitle: "Camping in Australia by State: Campgrounds, Facilities and Fees",
    indexDescription: "Campgrounds from the state park agencies, state by state and park by park: what each lists for toilets, water, showers, fires and fees, with links to the official pages.",
    h1: "Camping in Australia, state by state",
    intro: "Each page below covers the campgrounds the AussieCamps app lists in one state or park, drawn from the land managers’ own pages: how many there are, what facilities and fees they list, and a link to the official page for every place named.",
  },
  "dump-points": {
    label: "Dump points", one: "dump point", many: "dump points",
    indexTitle: "Dump Points in Australia by State: Locations and Facilities",
    indexDescription: "Public dump points for toilet cassettes and waste tanks, state by state: which towns have them, which list a washout tap or drinking water, and where to check the details.",
    h1: "Dump points in Australia, state by state",
    intro: "Each page below covers the public dump points the AussieCamps app lists in one state, from the National Public Toilet Map: how many there are, the towns with the most, and which list a washout tap, drinking water or toilets.",
  },
  "rest-areas": {
    label: "Rest areas", one: "rest area", many: "rest areas",
    indexTitle: "Rest Areas in Australia by State: Roadside Stops and Facilities",
    indexDescription: "Roadside rest areas from the national dataset, state by state: the highways with the most stops and which list toilets, drinking water, shelter or room for trucks.",
    h1: "Rest areas in Australia, state by state",
    intro: "Each page below covers the roadside rest areas in the national formal rest areas dataset for one state: the roads with the most stops and which list toilets, drinking water, shelter, barbecues or a heavy vehicle area.",
  },
};

/** The state codes travellers search with, used beside the full name in titles. */
const shortState: Record<string, string> = { NSW: "NSW", VIC: "VIC", QLD: "QLD", SA: "SA", WA: "WA", TAS: "TAS", NT: "NT", ACT: "ACT" };

export const hubById = new Map(hubData.hubs.map((hub) => [hub.id, hub]));
export const isIndexable = (hub: Hub) => hubVerdicts.get(hub.id)!.indexable;
export const sectionPath = (section: HubSection) => sitePath(`/${section}`);
export const hubPath = (hub: Hub) => sitePath(hub.path);
/** Manifest page keys, shared by every language edition of a hub (see lib/hubs/localized.ts). */
export const hubPageKey = (hub: Hub) => `hubs/${hub.id}`;
export const sectionPageKey = (section: HubSection) => `hubs/${section}`;

export const formatDataDate = (iso = hubData.dataAsOf) => new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const count = (value: number) => new Intl.NumberFormat("en-AU").format(value);

export function hubTitle(hub: Hub): string {
  const n = count(hub.placeCount);
  switch (hub.kind) {
    case "camping-state": { const place = hub.name.replace(/^Camping in /, ""); return `Camping in ${place}${place.includes(shortState[hub.state]) ? "" : ` (${shortState[hub.state]})`}: ${n} Campgrounds`; }
    case "camping-park": return `${hub.name} Camping: ${n} Campgrounds`;
    case "dump-points-state": return `Dump Points in ${hub.stateName} (${shortState[hub.state]}): ${n} Locations`;
    case "rest-areas-state": return `Rest Areas in ${hub.stateName} (${shortState[hub.state]}): ${n} Roadside Stops`;
  }
}

/** A plain sentence of the hub's own numbers, for the meta description and the page lede. */
export function hubSummary(hub: Hub): string {
  const fact = (key: string) => hub.facts.find((item) => item.key === key);
  const shared = (key: string, words: string) => { const item = fact(key); return item?.share ? `${item.share}% ${words}` : null; };
  const section = sectionCopy[sectionOf(hub.kind)];
  const where = hub.kind === "camping-park" ? hub.name : hub.stateName;
  const parts = hub.kind === "rest-areas-state"
    ? [shared("with:toilets", "list toilets"), shared("with:drinking_water", "drinking water"), shared("with:heavy_vehicle_area", "a heavy vehicle area")]
    : hub.kind === "dump-points-state"
      ? [shared("with:dump_point_washout", "list a washout tap"), shared("with:drinking_water", "drinking water"), shared("with:toilets", "toilets")]
      : [shared("with:toilets", "list toilets"), shared("with:drinking_water", "drinking water"), shared("with:showers", "showers")];
  const listed = parts.filter(Boolean);
  return `${count(hub.placeCount)} ${hub.placeCount === 1 ? section.one : section.many} in ${where}${listed.length ? `: ${listed.join(", ")}` : ""}. Names, localities, fees and facilities, with official links. Data as of ${formatDataDate()}.`;
}

export function hubBreadcrumbs(hub: Hub): { name: string; path: string }[] {
  const section = sectionOf(hub.kind);
  const trail = [{ name: "Home", path: "/" }, { name: sectionCopy[section].label, path: sectionPath(section) }];
  if (hub.parent) { const parent = hubById.get(hub.parent)!; trail.push({ name: parent.stateName, path: hubPath(parent) }); }
  trail.push({ name: hub.kind === "camping-park" ? hub.name : hub.stateName, path: hubPath(hub) });
  return trail;
}

/** Indexable park hubs under a state camping hub. Noindexed hubs never appear in a listing. */
export const childHubs = (hub: Hub) => indexableHubs.filter((other) => other.parent === hub.id);
/** The same state's other indexable hub types (camping, dump points, rest areas). */
export const relatedHubs = (hub: Hub) => indexableHubs.filter((other) => other.state === hub.state && other.parent === null && other.id !== hub.id && sectionOf(other.kind) !== sectionOf(hub.kind));
export const sectionHubs = (section: HubSection) => indexableHubs.filter((hub) => sectionOf(hub.kind) === section && hub.parent === null);
export const isSectionIndexable = (section: HubSection) => sectionHubs(section).length > 0;
export const proseFor = (hub: Hub) => hubProse[hub.id] ?? [];

/** Attribution lines for the sources a hub publishes from. */
export const hubAttributions = (hub: Hub) => meta.sources.filter((source) => hub.sources.includes(source.key));

export function hubMetadata(hub: Hub): Metadata {
  const indexable = isIndexable(hub);
  const title = hubTitle(hub);
  const description = hubSummary(hub);
  return {
    title,
    description,
    // hreflang only once a second edition is indexable (the translated hubs are behind a switch).
    alternates: { canonical: hubPath(hub), languages: indexable ? alternatesFor(hubPageKey(hub)) : undefined },
    openGraph: { type: "website", siteName: "AussieCamps", locale: "en_AU", title, description, url: `${SITE_URL}${hubPath(hub)}`, images: [{ url: "/images/aussie-og.webp", alt: "AussieCamps" }] },
    robots: { index: indexable, follow: true, googleBot: { index: indexable, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  };
}

export function sectionMetadata(section: HubSection): Metadata {
  const copy = sectionCopy[section];
  const indexable = isSectionIndexable(section);
  return {
    title: copy.indexTitle,
    description: copy.indexDescription,
    alternates: { canonical: sectionPath(section), languages: indexable ? alternatesFor(sectionPageKey(section)) : undefined },
    openGraph: { type: "website", siteName: "AussieCamps", locale: "en_AU", title: copy.indexTitle, description: copy.indexDescription, url: `${SITE_URL}${sectionPath(section)}`, images: [{ url: "/images/aussie-og.webp", alt: "AussieCamps" }] },
    robots: { index: indexable, follow: true, googleBot: { index: indexable, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  };
}

export const builtHubsOf = (kind: HubKind) => builtHubs.filter((hub) => hub.kind === kind);
export const indexableParksOf = () => indexableHubs.filter((hub) => hub.kind === "camping-park");
