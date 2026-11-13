import { localeRoot, type LocaleCode } from "@/lib/locales";
import { sitePath } from "@/lib/site";
import { pageRoutes } from "@/lib/routes/pages";
import { guideRoutes } from "@/lib/routes/guides";
import { crawlerRoutes } from "@/lib/routes/crawlers";
import { toolRoutes } from "@/lib/routes/tools";
import { hubRoutes } from "@/lib/routes/hubs";
import { placeRoutes } from "@/lib/routes/places";
import { tripRoutes } from "@/lib/routes/trip";

/**
 * Every URL the site publishes, in one list.
 *
 * The static exporter, the sitemaps, hreflang and the `generateStaticParams` of each route all read
 * from here, so a page cannot exist in one of them and be missing from another. (The exporter used to
 * find its routes by running a regex over source files; any new kind of page was silently skipped.)
 *
 * - `path`: the served URL, with its trailing slash (`/de/guides/x/`) or file name (`/sitemap.xml`).
 * - `locale`: `en` for English, otherwise the registry code.
 * - `kind`: what the page is. HTML pages use the same values as `data-page-kind`.
 * - `indexable`: in the sitemap, in hreflang, robots `index`. The page's own robots meta must agree;
 *   scripts/audit-seo.mjs fails the build when they differ.
 * - `pageKey`: the same page in every language shares one key (`guide:<slug>`), which is how hreflang
 *   finds a page's translations.
 * - `lastmod`: YYYY-MM-DD for the sitemap, when known.
 *
 * A locale publishes its home, its guide and tool indexes, the calculators and the data hubs always,
 * and a guide, support or legal page only once it has a translation of it. Its pages reach everything
 * else through `localizedHref`, which sends the reader to the English page.
 *
 * A feature adds its pages by exporting `function <feature>Routes(): ExportRoute[]` from
 * lib/routes/<feature>.ts and listing it in `features` below.
 */
export type RouteKind =
  | "home" | "guides" | "guide" | "tools" | "support" | "privacy" | "terms" | "credits"
  | "tool" | "hub" | "place" | "places" | "trip" | "crawler";
export type ExportRoute = {
  path: string;
  locale: "en" | LocaleCode;
  kind: RouteKind;
  indexable: boolean;
  pageKey: string;
  lastmod?: string;
};

const features: (() => ExportRoute[])[] = [
  pageRoutes,
  guideRoutes,
  crawlerRoutes,
  toolRoutes,
  hubRoutes,
  placeRoutes,
  tripRoutes,
];

let cache: ExportRoute[] | undefined;
let byPath: Map<string, ExportRoute> | undefined;
let byKey: Map<string, ExportRoute[]> | undefined;

export function exportRoutes(): ExportRoute[] {
  if (cache) return cache;
  const routes = features.flatMap((feature) => feature());
  const paths = new Map<string, ExportRoute>();
  for (const route of routes) {
    if (paths.has(route.path)) throw new Error(`Route listed twice: ${route.path}`);
    if (!/^\/(?:[a-z0-9-]+\/)*(?:[a-z0-9-]+\.(?:html|xml|txt))?$/.test(route.path)) throw new Error(`Route path must end in / or a file name: ${route.path}`);
    paths.set(route.path, route);
  }
  byPath = paths;
  byKey = new Map();
  for (const route of routes) byKey.set(route.pageKey, [...(byKey.get(route.pageKey) ?? []), route]);
  cache = routes;
  return routes;
}

/** The route served at a path (`/de/guides/x/`), if the site publishes one. */
export function routeAt(path: string): ExportRoute | undefined {
  exportRoutes();
  return byPath!.get(path);
}

/** Every language edition of one page. */
export function routesFor(pageKey: string): ExportRoute[] {
  exportRoutes();
  return byKey!.get(pageKey) ?? [];
}

/**
 * The link, from a page in `locale`, to the page whose English path is `path` (`/guides/x/`,
 * `/privacy/#website-analytics`): this locale's edition when the site publishes one, otherwise the
 * English page. A locale exports only the pages it has translated, so an untranslated guide is linked
 * in English rather than as a copy under the locale's directory.
 */
export function localizedHref(locale: LocaleCode | "en", path: string): string {
  const english = sitePath(path);
  if (locale === "en") return english;
  const [base, hash] = english.split("#");
  const localized = sitePath(`${localeRoot(locale)}${base}`);
  return routeAt(localized) ? `${localized}${hash ? `#${hash}` : ""}` : english;
}
