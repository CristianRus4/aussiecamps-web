import type { Metadata } from "next";
import { SITE_URL, sitePath } from "../site";
import { intlLocale, liveLocales, localeRoot, routedLocales, type LocaleCode } from "../locales";
import { isTranslated } from "../localized";
import { alternatesFor, ogLocale } from "../seo";
import { smartBannerContent } from "../app-store";
import { hubData, hubVerdicts, type Hub } from "./gate";
import { hubPageKey, hubSections, isSectionIndexable, sectionOf, sectionPageKey, type HubSection } from "./pages";
import { fill, hubStrings, isHubCommonComplete, isHubTranslated, summaryShares, translatableHubs, type HubStrings } from "./strings";

/**
 * THE SWITCH for the translated hubs. Default false.
 *
 * While false, every localised hub page (/<locale>/camping/…, /<locale>/dump-points/…,
 * /<locale>/rest-areas/…) is still built and exported, so it can be previewed, but it is noindex, out
 * of every sitemap, out of hreflang and out of the language switcher, whatever its translation state.
 *
 * The owner put the translated hubs live on 22 Oct 2026; setting this back to false takes them all
 * out of search at once. A localised hub is indexable only when its English page is, its locale is live and published,
 * and its translation is complete (lib/hubs/strings.ts). Hreflang pairs only indexable editions, so it
 * stays reciprocal.
 */
export const LOCALIZED_HUBS_LIVE = true;

/** Localised hubs: every routed locale, for every hub whose English page is indexable. */
export const localizedHubs = translatableHubs;
export const localizedHubPath = (hub: Hub, locale: LocaleCode) => sitePath(`${localeRoot(locale)}${hub.path}`);
export const localizedSectionPath = (section: HubSection, locale: LocaleCode) => sitePath(`${localeRoot(locale)}/${section}`);

const published = (locale: LocaleCode) => liveLocales.includes(locale) && routedLocales.includes(locale) && isTranslated(locale);

export const isLocalizedHubIndexable = (hub: Hub, locale: LocaleCode) =>
  LOCALIZED_HUBS_LIVE && published(locale) && hubVerdicts.get(hub.id)!.indexable && isHubTranslated(locale, hub);
export const isLocalizedSectionIndexable = (section: HubSection, locale: LocaleCode) =>
  LOCALIZED_HUBS_LIVE && published(locale) && isSectionIndexable(section) && isHubCommonComplete(locale);

/** The strings and formatting a localised hub page renders with. */
export function localizedHubView(locale: LocaleCode, hub?: Hub) {
  const complete = hub ? isHubTranslated(locale, hub) : isHubCommonComplete(locale);
  const { strings, translated } = hubStrings(locale, complete);
  const intl = translated ? intlLocale(locale) : intlLocale("en");
  const number = (value: number) => new Intl.NumberFormat(intl).format(value);
  const date = new Date(`${hubData.dataAsOf}T00:00:00Z`).toLocaleDateString(intl, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  return { strings, translated, intl, number, date };
}
export type LocalizedHubView = ReturnType<typeof localizedHubView>;

/** "Camping in Victoria" or the park name, in the page's language. */
export const localizedHubName = (hub: Hub, strings: HubStrings) =>
  hub.kind === "camping-park" ? hub.name : fill(strings.sections[sectionOf(hub.kind)].hubName, { state: hub.stateName });

export function localizedHubTitle(hub: Hub, view: LocalizedHubView) {
  const section = view.strings.sections[sectionOf(hub.kind)];
  const count = view.number(hub.placeCount);
  if (hub.kind === "camping-park") return `${hub.name}: ${fill(view.strings.common.campgroundCount, { count })}`;
  return fill(section.title, { state: hub.stateName, count });
}

export function localizedHubSummary(hub: Hub, view: LocalizedHubView) {
  const section = sectionOf(hub.kind);
  const copy = view.strings.sections[section];
  const shares = summaryShares[section]
    .map((share) => ({ share, fact: hub.facts.find((fact) => fact.key === share.fact) }))
    .filter(({ fact }) => fact?.share)
    .map(({ share, fact }) => fill(view.strings.shares[share.key], { share: fact!.share! }));
  return fill(view.strings.common.summary, {
    count: view.number(hub.placeCount), many: hub.placeCount === 1 ? copy.one : copy.many,
    where: hub.kind === "camping-park" ? hub.name : hub.stateName, shares: shares.length ? `: ${shares.join(", ")}` : "", date: view.date,
  });
}

const robots = (index: boolean): Metadata["robots"] => ({ index, follow: true, googleBot: { index, follow: true, "max-image-preview": "large", "max-snippet": -1 } });

export function localizedHubMetadata(hub: Hub, locale: LocaleCode): Metadata {
  const view = localizedHubView(locale, hub);
  const indexable = isLocalizedHubIndexable(hub, locale);
  const path = localizedHubPath(hub, locale);
  const title = localizedHubTitle(hub, view);
  const description = localizedHubSummary(hub, view);
  return {
    title, description,
    alternates: { canonical: path, languages: indexable ? alternatesFor(hubPageKey(hub)) : undefined },
    openGraph: { type: "website", siteName: "AussieCamps", locale: ogLocale(locale), title, description, url: `${SITE_URL}${path}`, images: [{ url: "/images/aussie-og.webp", alt: "AussieCamps" }] },
    robots: robots(indexable),
    other: { "apple-itunes-app": smartBannerContent(locale) },
  };
}

export function localizedSectionMetadata(section: HubSection, locale: LocaleCode): Metadata {
  const { strings } = localizedHubView(locale);
  const copy = strings.sections[section];
  const indexable = isLocalizedSectionIndexable(section, locale);
  const path = localizedSectionPath(section, locale);
  return {
    title: copy.indexTitle, description: copy.indexDescription,
    alternates: { canonical: path, languages: indexable ? alternatesFor(sectionPageKey(section)) : undefined },
    openGraph: { type: "website", siteName: "AussieCamps", locale: ogLocale(locale), title: copy.indexTitle, description: copy.indexDescription, url: `${SITE_URL}${path}`, images: [{ url: "/images/aussie-og.webp", alt: "AussieCamps" }] },
    robots: robots(indexable),
    other: { "apple-itunes-app": smartBannerContent(locale) },
  };
}

export { hubSections };
