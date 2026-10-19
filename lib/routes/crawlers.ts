import type { ExportRoute } from "@/lib/routes";
import { liveLocales, localeEntry } from "@/lib/locales";

/** The per-language sitemap files the sitemap index points at: /sitemaps/en.xml, /sitemaps/de.xml, … */
export const sitemapNames = () => ["en", ...liveLocales.map((code) => localeEntry(code).segment)];

/** robots.txt, the sitemap index and its per-language sitemaps, and llms.txt. Never indexable pages. */
export function crawlerRoutes(): ExportRoute[] {
  const file = (path: string): ExportRoute => ({ path, locale: "en", kind: "crawler", indexable: false, pageKey: path });
  return [file("/robots.txt"), file("/sitemap.xml"), ...sitemapNames().map((name) => file(`/sitemaps/${name}.xml`)), file("/llms.txt")];
}
