import Link from "next/link";
import { localeEntry, localeRoot, type LocaleCode } from "@/lib/locales";
import { publishedLocales } from "@/lib/localized";
import { routesFor } from "@/lib/routes";
import { sitePath } from "@/lib/site";

/**
 * The footer language list. Each language links to this same page in that language when that
 * edition is complete (indexable); otherwise to that language's home, so a reader is never sent to an
 * English fallback dressed up as a translation.
 */
export function LanguageSwitcher({ pageKey, current }: { pageKey: string; current: LocaleCode | "en" }) {
  if (!publishedLocales.length) return null;
  const editions = routesFor(pageKey);
  const target = (locale: LocaleCode | "en") => editions.find((route) => route.locale === locale && route.indexable)?.path ?? sitePath(localeRoot(locale) || "/");
  return <nav className="language-nav" aria-label="Languages">
    <Link href={target("en")} hrefLang="en-AU" aria-current={current === "en" ? "page" : undefined}>English</Link>
    {publishedLocales.map((code) => <Link href={target(code)} hrefLang={localeEntry(code).htmlLang} lang={localeEntry(code).htmlLang} aria-current={code === current ? "page" : undefined} key={code}>{localeEntry(code).label}</Link>)}
  </nav>;
}
