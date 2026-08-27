import type { MetadataRoute } from "next";
import { SITE_URL, articles, sitePath } from "@/lib/site";
import { publishedLocales, localeArticles } from "@/lib/localized";
import { articleDates } from "@/lib/article-dates";

const roots = ["", "/guides", "/tools", "/support", "/credits", "/privacy", "/terms"];
/** /credits is published in English only: it is a list of names, licence codes and source links. */
const localeRoots = roots.filter((path) => path !== "/credits");

/** The date the site itself was last rebuilt, used for pages that are not a single guide. */
const siteChanged = new Date("2026-08-27");

/**
 * A guide's own last-changed date, so the sitemap stops telling Google that all 532 URLs were
 * touched on the same day. Dates come from git history (see scripts/build-article-dates.mjs).
 */
function lastChanged(path: string): Date {
  const slug = path.replace(/^\/(de|es|fr|it|nl|pt)/, "").match(/^\/guides\/([^/]+)\/?$/)?.[1];
  const dates = slug ? articleDates(slug) : undefined;
  return dates ? new Date(`${dates.modified}T00:00:00Z`) : siteChanged;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...roots,
    ...articles.map((article) => `/guides/${article.slug}`),
    // Localised sites carry every guide; untranslated ones are served in English. A locale
    // appears here only once its UI is fully translated.
    ...publishedLocales.flatMap((locale) => [...localeRoots, ...localeArticles.map((article) => `/guides/${article.slug}`)].map((path) => `/${locale}${path}`)),
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}${sitePath(path)}`,
    lastModified: lastChanged(path),
    changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : path.includes("/guides/") ? 0.75 : 0.7,
  }));
}
