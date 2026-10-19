import type { ExportRoute, RouteKind } from "@/lib/routes";
import { localeRoot, routedLocales } from "@/lib/locales";
import { isStaticPageTranslated, isTranslated } from "@/lib/localized";
import type { StaticPageKind } from "@/lib/source-strings";
import { sitePath } from "@/lib/site";

/** The last time the site-wide pages changed in substance; guides carry their own dates. */
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
  const lastmod = (kind: RouteKind) => (kind === "privacy" ? PRIVACY_CHANGED : SITE_CHANGED);
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
