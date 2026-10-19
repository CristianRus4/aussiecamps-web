import hubsFile from "../data/hubs.json";
import proseFile from "./prose.json";

/**
 * The hub quality gate: a floor, not a speed limit.
 *
 * Every hub is generated from app data (scripts/export-app-data.mjs), but a page only enters search
 * when it is worth reading on its own. One that is too thin, too like its neighbours or without its
 * own written prose is still built, so the URL exists when the data grows, but it is noindex, out of
 * the sitemap and out of every listing. One with fewer than five places is not built at all.
 *
 * The page routes, the sitemap and scripts/audit-hubs.mjs all read this one function, so what the
 * audit reports is exactly what ships.
 */
export type HubKind = "camping-state" | "camping-park" | "dump-points-state" | "rest-areas-state";
export type HubFact = { dimension: string; key: string; label: string; value: number | string; share?: number };
export type HubPlace = {
  id: string; name: string; type: string; state: string; locality: string | null; park: string | null;
  fee: string | null; facilities: string[]; url: string | null; source: string; lat: number; lng: number;
};
export type Hub = {
  id: string; kind: HubKind; parent: string | null; path: string; state: string; stateName: string; name: string;
  rulesGuide: string; officialUrl: string | null; placeCount: number; facts: HubFact[]; places: HubPlace[];
  placeIds: string[]; dots: [number, number][]; sources: string[];
  topParks?: { name: string; count: number }[]; topLocalities?: { name: string; count: number }[]; topRoads?: { name: string; count: number }[];
};

export const hubData = hubsFile as unknown as { dataAsOf: string; hubs: Hub[] };
/** Hand-written, data-grounded English prose per hub id. Checked by scripts/audit-hubs.mjs. */
export const hubProse = proseFile as Record<string, string[]>;

export const GATE = {
  /** Below this the hub is not built at all. */
  minPlacesBuilt: 5,
  /** Australia's indexable floor (New Zealand's is 12). */
  minPlacesIndexed: 20,
  minDimensions: 4,
  minUniqueFacts: 8,
  maxOverlap: 0.5,
  minProseWords: 250,
} as const;

/** Provenance is recorded as facts but says nothing about the place, so it never counts towards the gate. */
const substantive = (fact: HubFact) => fact.dimension !== "sources";
export const wordCount = (paragraphs: readonly string[] = []) => paragraphs.join(" ").split(/\s+/).filter((word) => /[\p{L}\p{N}]/u.test(word)).length;

export type HubVerdict = {
  built: boolean; indexable: boolean; reasons: string[];
  dimensions: number; uniqueFacts: number; overlap: number; overlapWith: string | null; proseWords: number;
};

const isBuilt = (hub: Hub) => hub.placeCount >= GATE.minPlacesBuilt;

export function evaluateHub(hub: Hub, hubs: Hub[] = hubData.hubs, prose: Record<string, string[]> = hubProse): HubVerdict {
  const siblings = hubs.filter((other) => other.id !== hub.id && other.kind === hub.kind && other.parent === hub.parent && isBuilt(other));
  const facts = hub.facts.filter(substantive);
  const dimensions = new Set(facts.map((fact) => fact.dimension)).size;
  const siblingFacts = new Set(siblings.flatMap((other) => other.facts.filter(substantive).map((fact) => `${fact.key}=${fact.value}`)));
  const uniqueFacts = facts.filter((fact) => !siblingFacts.has(`${fact.key}=${fact.value}`)).length;
  const own = new Set(hub.placeIds);
  let overlap = 0;
  let overlapWith: string | null = null;
  for (const other of siblings) {
    const shared = other.placeIds.filter((id) => own.has(id)).length / Math.max(1, own.size);
    if (shared > overlap) { overlap = shared; overlapWith = other.id; }
  }
  const proseWords = wordCount(prose[hub.id]);

  const built = isBuilt(hub);
  const reasons: string[] = [];
  if (!built) reasons.push(`${hub.placeCount} places (under ${GATE.minPlacesBuilt}: not built)`);
  else {
    if (hub.placeCount < GATE.minPlacesIndexed) reasons.push(`${hub.placeCount} places (under ${GATE.minPlacesIndexed})`);
    // A hub whose source gives its places no names has nothing to list, however many there are.
    if (hub.places.length < GATE.minPlacesBuilt) reasons.push(`${hub.places.length} named places to list (under ${GATE.minPlacesBuilt})`);
    if (dimensions < GATE.minDimensions) reasons.push(`${dimensions} fact dimensions (under ${GATE.minDimensions})`);
    if (uniqueFacts < GATE.minUniqueFacts) reasons.push(`${uniqueFacts} facts not shared with a sibling (under ${GATE.minUniqueFacts})`);
    if (overlap > GATE.maxOverlap) reasons.push(`${Math.round(overlap * 100)}% of places shared with ${overlapWith}`);
    if (proseWords < GATE.minProseWords) reasons.push(`${proseWords} words of hub prose (under ${GATE.minProseWords})`);
  }
  return { built, indexable: built && reasons.length === 0, reasons, dimensions, uniqueFacts, overlap, overlapWith, proseWords };
}

export const hubVerdicts = new Map(hubData.hubs.map((hub) => [hub.id, evaluateHub(hub)]));
export const builtHubs = hubData.hubs.filter((hub) => hubVerdicts.get(hub.id)!.built);
export const indexableHubs = builtHubs.filter((hub) => hubVerdicts.get(hub.id)!.indexable);
