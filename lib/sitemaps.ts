import { SITE_URL } from "@/lib/site";
import { exportRoutes } from "@/lib/routes";
import { sitemapNames } from "@/lib/routes/crawlers";
import { localeEntry } from "@/lib/locales";

/**
 * /sitemap.xml is a sitemap index; each language has its own file under /sitemaps/ (en.xml, de.xml).
 *
 * Both are built from the route manifest, and only from indexable routes, so a page that is noindex
 * (an unfinished translation, a thin hub) is never submitted. A guide's lastmod is the day its own
 * text last changed, and for a translation the day the translation last changed, both from git
 * history (scripts/build-article-dates.mjs). Search Console can then report coverage per language.
 */
const xml = (body: string) => new Response(`<?xml version="1.0" encoding="UTF-8"?>\n${body}\n`, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" } });

const segmentOf = (locale: string) => (locale === "en" ? "en" : localeEntry(locale as Parameters<typeof localeEntry>[0]).segment);

function entries(name: string) {
  return exportRoutes().filter((route) => route.indexable && route.kind !== "crawler" && segmentOf(route.locale) === name);
}

export function sitemapIndex(): Response {
  const lastmods = (name: string) => entries(name).map((route) => route.lastmod).filter(Boolean).sort();
  const items = sitemapNames().map((name) => {
    const last = lastmods(name).at(-1);
    return `<sitemap><loc>${SITE_URL}/sitemaps/${name}.xml</loc>${last ? `<lastmod>${last}</lastmod>` : ""}</sitemap>`;
  });
  return xml(`<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items.join("\n")}\n</sitemapindex>`);
}

export function languageSitemap(file: string): Response {
  const name = file.replace(/\.xml$/, "");
  if (!file.endsWith(".xml") || !sitemapNames().includes(name)) return new Response("Not found", { status: 404 });
  const items = entries(name).map((route) => `<url><loc>${SITE_URL}${route.path}</loc>${route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : ""}</url>`);
  return xml(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items.join("\n")}\n</urlset>`);
}
