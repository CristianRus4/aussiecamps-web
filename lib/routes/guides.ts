import type { ExportRoute } from "@/lib/routes";
import { localeRoot, routedLocales } from "@/lib/locales";
import { hasArticleTranslation, isArticleTranslated, isTranslated, localeArticles } from "@/lib/localized";
import { articleDates, translationDate } from "@/lib/article-dates";
import { articles, sitePath } from "@/lib/site";

/** The page key every language edition of a guide shares. */
export const guidePageKey = (slug: string) => `guide:${slug}`;

/**
 * Every guide in English, and in each routed locale every guide it has a translation of. A complete
 * translation is indexable; a stale one is served whole in English and kept out of search until it is
 * updated. A guide the locale has never translated has no page there: its links go to the English
 * guide (`localizedHref` in lib/routes.ts).
 */
export function guideRoutes(): ExportRoute[] {
  const english = articles.map(({ slug }) => ({
    path: sitePath(`/guides/${slug}`), locale: "en" as const, kind: "guide" as const, indexable: true,
    pageKey: guidePageKey(slug), lastmod: articleDates(slug)?.modified,
  }));
  const localized = routedLocales.flatMap((locale) => localeArticles.filter(({ slug }) => hasArticleTranslation(locale, slug)).map(({ slug }) => {
    const indexable = isTranslated(locale) && isArticleTranslated(locale, slug);
    return {
      path: sitePath(`${localeRoot(locale)}/guides/${slug}`), locale, kind: "guide" as const, indexable,
      pageKey: guidePageKey(slug), lastmod: translationDate(slug, locale) ?? articleDates(slug)?.modified,
    };
  }));
  return [...english, ...localized];
}
