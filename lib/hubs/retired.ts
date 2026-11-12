import { hubData, hubVerdicts } from "./gate";
import { localeRoot, routedLocales, type LocaleCode } from "@/lib/locales";
import { sitePath } from "@/lib/site";

/**
 * The dump point and rest area hubs, retired on 12 Nov 2026 (Cristian: they do not belong on the site).
 * Their URLs were live, so each still answers, with a page that sends the reader to the state's camping
 * hub (an index goes to the places directory). scripts/export-github-pages.mjs writes those pages; they
 * are noindex and stay out of the route manifest and the sitemaps.
 */
export function retiredHubRedirects(): { from: string; to: string; locale: LocaleCode | "en" }[] {
  const retired = hubData.hubs.filter((hub) => (hub.kind === "dump-points-state" || hub.kind === "rest-areas-state") && hubVerdicts.get(hub.id)!.built);
  const editions: (LocaleCode | "en")[] = ["en", ...routedLocales];
  return editions.flatMap((locale) => {
    const root = locale === "en" ? "" : localeRoot(locale);
    return [
      ...["dump-points", "rest-areas"].map((section) => ({ from: sitePath(`${root}/${section}`), to: sitePath("/places"), locale })),
      ...retired.map((hub) => ({ from: sitePath(`${root}/${hub.id}`), to: sitePath(`/camping/${hub.id.split("/")[1]}`), locale })),
    ];
  });
}
