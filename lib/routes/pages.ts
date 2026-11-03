import type { ExportRoute, RouteKind } from "@/lib/routes";
import { localeRoot, routedLocales } from "@/lib/locales";
import { isStaticPageTranslated, isTranslated } from "@/lib/localized";
import type { StaticPageKind } from "@/lib/source-strings";
import { articles, sitePath } from "@/lib/site";
import { articleDates } from "@/lib/article-dates";
import { laterDate } from "@/lib/publish";
import pageDates from "@/lib/page-dates.json";

/** The last time support, terms and credits changed in substance; guides carry their own dates. */
const SITE_CHANGED = "2026-08-27";
/** The privacy policy's effective date (staticPages.privacy). */
const PRIVACY_CHANGED = "2026-10-19";

const englishOnly: RouteKind[] = ["credits"];
const pages: { suffix: string; kind: RouteKind }[] = [
  { suffix: "", kind: "home" },
  { suffix: "/guides", kind: "guides" },
  { suffix: "/tools", kind: "tools" },
  { suffix: "/support", kind: "support" },
  { suffix: "/privacy", kind: "privacy" },
  { suffix: "/terms", kind: "terms" },
  // A list of names, licence codes and source links: published in English only.
  { suffix: "/credits", kind: "credits" },
];

/** Home, the guide and tool indexes, support, the legal pages and credits, in every routed language. */
export function pageRoutes(): ExportRoute[] {
  // The guide index changes whenever a guide is published or rewritten; home and /tools/ when the
  // files that render them do (scripts/build-article-dates.mjs).
  const newestGuide = articles.map(({ slug }) => articleDates(slug)?.modified).filter(Boolean).sort().at(-1);
  const dates: Partial<Record<RouteKind, string | undefined>> = {
    privacy: PRIVACY_CHANGED,
    guides: laterDate(SITE_CHANGED, newestGuide),
    home: laterDate(SITE_CHANGED, pageDates.home),
    tools: laterDate(SITE_CHANGED, pageDates.tools),
  };
  const lastmod = (kind: RouteKind) => dates[kind] ?? SITE_CHANGED;
  const english = pages.map(({ suffix, kind }) => ({ path: sitePath(suffix || "/"), locale: "en" as const, kind, indexable: true, pageKey: kind, lastmod: lastmod(kind) }));
  const localized = routedLocales.flatMap((locale) => pages.filter(({ kind }) => !englishOnly.includes(kind)).map(({ suffix, kind }) => {
    const staticKind = ["support", "privacy", "terms"].includes(kind) ? kind as StaticPageKind : undefined;
    // A page is indexed only when the locale's interface is complete and, for support and the legal
    // pages, the page itself is translated. Otherwise it still builds, in English, noindex.
    const indexable = isTranslated(locale) && (!staticKind || isStaticPageTranslated(locale, staticKind));
    return { path: sitePath(`${localeRoot(locale)}${suffix}`), locale, kind, indexable, pageKey: kind, lastmod: lastmod(kind) };
  }));
  return [...english, ...localized];
}
