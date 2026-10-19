import type { ExportRoute } from "@/lib/routes";
import { routedLocales } from "@/lib/locales";
import { toolKeys } from "@/lib/source-strings";
import { isToolIndexable, toolPageKey, toolPath } from "@/lib/tools/pages";

/**
 * The standalone calculator pages for the route manifest (lib/routes.ts): English, plus every routed
 * locale, where a tool is indexable only once its `tools` strings are translated. /tools/ itself is a
 * core page (lib/routes/pages.ts) and is not listed here.
 */
export function toolRoutes(): ExportRoute[] {
  return (["en", ...routedLocales] as const).flatMap((locale) => toolKeys.map((tool) => ({
    path: toolPath(tool, locale), locale, kind: "tool" as const, indexable: isToolIndexable(tool, locale), pageKey: toolPageKey(tool),
  })));
}
