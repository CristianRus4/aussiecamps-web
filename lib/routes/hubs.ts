import { builtHubs, hubData } from "@/lib/hubs/gate";
import { hubPageKey, hubPath, hubSections, isIndexable, isSectionIndexable, sectionPageKey, sectionPath } from "@/lib/hubs/pages";
import type { ExportRoute } from "@/lib/routes";

/**
 * The data hubs, for the route manifest (lib/routes.ts): one index per hub type, then every built
 * hub. English only for now. Noindexed hubs are still exported (their URL exists when the data
 * grows) but stay out of the sitemap and hreflang.
 */
export function hubRoutes(): ExportRoute[] {
  return [
    ...hubSections.map((section) => ({ path: sectionPath(section), locale: "en" as const, kind: "hub" as const, indexable: isSectionIndexable(section), pageKey: sectionPageKey(section), lastmod: hubData.dataAsOf })),
    ...builtHubs.map((hub) => ({ path: hubPath(hub), locale: "en" as const, kind: "hub" as const, indexable: isIndexable(hub), pageKey: hubPageKey(hub), lastmod: hubData.dataAsOf })),
  ];
}
