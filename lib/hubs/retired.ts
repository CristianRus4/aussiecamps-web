import { hubData, hubVerdicts, publishedKind } from "./gate";
import { localeRoot, routedLocales, type LocaleCode } from "@/lib/locales";
import { sitePath } from "@/lib/site";

/**
 * The dump point and rest area hubs were retired on 12 Nov 2026, each URL answering with a page that sent
 * the reader to the state's camping hub. They came back on 18 Nov 2026 (Cristian: every place in the
 * database belongs on the site), so nothing is retired now and this list is empty. The export and the
 * tests still read it, so a hub retired later only needs adding here.
 */
export function retiredHubRedirects(): { from: string; to: string; locale: LocaleCode | "en" }[] {
  const retired = hubData.hubs.filter((hub) => !publishedKind(hub.kind) && hubVerdicts.get(hub.id)!.built);
  const editions: (LocaleCode | "en")[] = ["en", ...routedLocales];
  return editions.flatMap((locale) => {
    const root = locale === "en" ? "" : localeRoot(locale);
    return [
      ...[...new Set(retired.map((hub) => hub.id.split("/")[0]))].map((section) => ({ from: sitePath(`${root}/${section}`), to: sitePath("/places"), locale })),
      ...retired.map((hub) => ({ from: sitePath(`${root}/${hub.id}`), to: sitePath(`/camping/${hub.id.split("/")[1]}`), locale })),
    ];
  });
}
