import { builtHubs, hubData } from "@/lib/hubs/gate";
import { hubPageKey, hubPath, hubSections, isIndexable, isSectionIndexable, sectionPageKey, sectionPath } from "@/lib/hubs/pages";
import { isLocalizedHubIndexable, isLocalizedSectionIndexable, localizedHubPath, localizedHubs, localizedSectionPath } from "@/lib/hubs/localized";
import { routedLocales } from "@/lib/locales";
import type { ExportRoute } from "@/lib/routes";

/**
 * The data hubs, for the route manifest (lib/routes.ts): one index per hub type, then every built
 * hub, in English; then, for every routed locale, the indexes and every hub whose English page is
 * indexable. Noindexed hubs are still exported (their URL exists when the data grows) but stay out of
 * the sitemap and hreflang. Every localised hub is noindex until the switch in lib/hubs/localized.ts
 * is on and its translation is complete.
 */
export function hubRoutes(): ExportRoute[] {
  const lastmod = hubData.dataAsOf;
  return [
    ...hubSections.map((section) => ({ path: sectionPath(section), locale: "en" as const, kind: "hub" as const, indexable: isSectionIndexable(section), pageKey: sectionPageKey(section), lastmod })),
    ...builtHubs.map((hub) => ({ path: hubPath(hub), locale: "en" as const, kind: "hub" as const, indexable: isIndexable(hub), pageKey: hubPageKey(hub), lastmod })),
    ...routedLocales.flatMap((locale) => [
      ...hubSections.map((section) => ({ path: localizedSectionPath(section, locale), locale, kind: "hub" as const, indexable: isLocalizedSectionIndexable(section, locale), pageKey: sectionPageKey(section), lastmod })),
      ...localizedHubs.map((hub) => ({ path: localizedHubPath(hub, locale), locale, kind: "hub" as const, indexable: isLocalizedHubIndexable(hub, locale), pageKey: hubPageKey(hub), lastmod })),
    ]),
  ];
}
