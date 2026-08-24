import type { MetadataRoute } from "next";
import { SITE_URL, articles } from "@/lib/site";
import { publishedLocales, translatableArticles } from "@/lib/localized";

const roots = ["", "/guides", "/tools", "/support", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-08-12");
  const paths = [
    ...roots,
    ...articles.map((article) => `/guides/${article.slug}`),
    // Localised sites carry the translatable guides only — road trips stay English-only — and a
    // locale appears here only once its translation file has actually been filled in.
    ...publishedLocales.flatMap((locale) => [...roots, ...translatableArticles.map((article) => `/guides/${article.slug}`)].map((path) => `/${locale}${path}`)),
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : path.includes("/guides/") ? 0.75 : 0.7,
  }));
}
