import { LocalizedFooter, LocalizedHeader } from "@/components/localized-site";
import { PlaceMap } from "@/components/places/place-map";
import { places } from "@/lib/places";
import { PlaceCards } from "@/components/places/place-cards";
import { GuideEndCta } from "@/components/guide-cta";
import { Crumbs, LinkList } from "@/components/places/listing";
import { mainData } from "@/lib/analytics";
import { SITE_URL, sitePath } from "@/lib/site";
import { englishFallback, htmlLang, localeRoot, type LocaleCode } from "@/lib/locales";
import { getTranslation, localizedArticles } from "@/lib/localized";
import { hubData, type Hub } from "@/lib/hubs/gate";
import { hubById, hubPageKey, indexableParksOf, neighbourHubs, sectionHubs, sectionOf, sectionPageKey, type HubSection } from "@/lib/hubs/pages";
import { hubGuides, noteKeys, stateNotes } from "@/lib/hubs/regions";
import { fill } from "@/lib/hubs/strings";
import { localizedHref } from "@/lib/routes";
import {
  localizedHubName, localizedHubPath, localizedHubs, localizedHubSummary, localizedHubView, localizedSectionPath,
} from "@/lib/hubs/localized";

/** Hubs that have a localised page: the ones whose English page is indexable. */
const hasPage = new Set(localizedHubs.map((hub) => hub.id));

/**
 * One data hub in another language. Same facts, places, map and CTA as the English page
 * (components/hubs/hub-page.tsx), with its copy from the `hubs` namespace (lib/hubs/strings.ts). When
 * the translation is not complete for this hub, the whole body is English and the page is noindex.
 * Place, park, agency and state names are data and stay as the source writes them.
 */
/** Five of the hub's places that have a page in the directory (place pages are in English). */
const cardsFor = (names: string[], state: string) => places.filter((place) => place.state === state && names.includes(place.name)).sort((a, b) => b.photoCount - a.photoCount).slice(0, 5);

export function LocalizedHubPage({ hub, locale }: { hub: Hub; locale: LocaleCode }) {
  const view = localizedHubView(locale, hub);
  const { strings: t, translated } = view;
  const section = sectionOf(hub.kind);
  const copy = t.sections[section];
  const prefix = localeRoot(locale);
  const url = `${SITE_URL}${localizedHubPath(hub, locale)}`;
  const name = localizedHubName(hub, t);
  const rules = localizedArticles(locale).find((article) => article.slug === hub.rulesGuide);

  const children = localizedHubs.filter((other) => other.parent === hub.id);
  const related = localizedHubs.filter((other) => other.state === hub.state && other.parent === null && other.id !== hub.id && sectionOf(other.kind) !== section);
  const parent = hub.parent ? hubById.get(hub.parent) : undefined;
  const notes = stateNotes[hub.state];
  const [seasonKey, permitsKey] = noteKeys(hub.state);
  const articles = localizedArticles(locale);
  const guides = hubGuides(hub.state, section, hub.rulesGuide).flatMap((slug) => articles.find((article) => article.slug === slug) ?? []);
  const nearby = neighbourHubs(hub).filter((other) => hasPage.has(other.id));
  const crumbs = [
    { name: t.common.home, path: sitePath(prefix || "/") },
    { name: copy.label, path: localizedSectionPath(section, locale) },
    ...(parent && hasPage.has(parent.id) ? [{ name: parent.stateName, path: localizedHubPath(parent, locale) }] : []),
    { name: hub.kind === "camping-park" ? hub.name : hub.stateName, path: localizedHubPath(hub, locale) },
  ];
  const summary = localizedHubSummary(hub, view);
  const cards = cardsFor(hub.places.map((place) => place.name), hub.state);
  const pageLang = translated ? htmlLang(locale) : htmlLang("en");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name, description: summary, inLanguage: pageLang, dateModified: hubData.dataAsOf, isPartOf: { "@id": `${SITE_URL}/#website` } },
      {
        "@type": "ItemList", "@id": `${url}#places`, name, numberOfItems: hub.places.length,
        itemListElement: hub.places.map((place, index) => ({
          "@type": "ListItem", position: index + 1,
          item: {
            "@type": hub.kind.startsWith("camping") ? "Campground" : "Place", name: place.name,
            ...(place.url ? { url: place.url } : {}),
            ...(place.locality ? { address: { "@type": "PostalAddress", addressLocality: place.locality, addressRegion: hub.state, addressCountry: "AU" } } : {}),
            geo: { "@type": "GeoCoordinates", latitude: place.lat, longitude: place.lng },
          },
        })),
      },
      { "@type": "BreadcrumbList", itemListElement: crumbs.map((crumb, index) => ({ "@type": "ListItem", position: index + 1, name: crumb.name, item: `${SITE_URL}${crumb.path}` })) },
    ],
  };
  const many = hub.placeCount === 1 ? copy.one : copy.many;

  const ui = getTranslation(locale);
  return <>
    <LocalizedHeader locale={locale} />
    <main {...mainData({ kind: "hub", locale, slug: hub.id })} {...(translated ? {} : englishFallback)}>
      <div className="pl-wrap pl-index">
        <Crumbs trail={crumbs} />
        <header className="pl-header"><h1>{name}</h1></header>
        <PlaceMap points={hub.dots} label={name} />
        {cards.length > 0 && <section className="pl-block">
          <h2>{many.charAt(0).toUpperCase()}{many.slice(1)}</h2>
          <PlaceCards places={cards} />
        </section>}
        <LinkList title={fill(t.common.parksTitle, { state: hub.stateName })} links={children.map((child) => ({ href: localizedHubPath(child, locale), label: child.name }))} />
        {notes && <section className="pl-block pl-notes">
          <h2>{fill(t.common.notesTitle, { where: hub.stateName })}</h2>
          <p>{t.notes[seasonKey]}</p>
          <p>{t.notes[permitsKey]}</p>
          <p>{t.common.notesSources}: {notes.sources.map((source, index) => <span key={source.url}>{index > 0 && ", "}<a href={source.url} rel="noopener">{source.name}</a></span>)}</p>
        </section>}
        <LinkList title={fill(t.common.guidesTitle, { where: hub.stateName })} links={guides.map((guide) => ({ href: localizedHref(locale, `/guides/${guide.slug}`), label: guide.title }))} />
        <LinkList title={hub.kind === "camping-park" ? fill(t.common.parksTitle, { state: hub.stateName }) : t.common.neighboursTitle} links={nearby.map((other) => ({ href: localizedHubPath(other, locale), label: hub.kind === "camping-park" ? other.name : localizedHubName(other, t) }))} />
        <LinkList title={t.common.beforeTitle} links={[
          ...(rules ? [{ href: localizedHref(locale, `/guides/${rules.slug}`), label: rules.title }] : []),
          ...(hub.officialUrl ? [{ href: hub.officialUrl, label: fill(t.common.officialParkPage, { name: hub.name }), external: true }] : []),
          ...related.map((other) => ({ href: localizedHubPath(other, locale), label: localizedHubName(other, t) })),
        ]} />
        <GuideEndCta reuse={false} locale={locale} placement="hub" label={ui.download} eyebrow={ui.takeRoad} title={ui.savePlanTitle} text={ui.savePlanText} />
      </div>
    </main>
    <LocalizedFooter locale={locale} pageKey={hubPageKey(hub)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </>;
}

/** The index for one hub type in another language: the same lists as components/hubs/hub-index.tsx. */
export function LocalizedHubIndex({ section, locale }: { section: HubSection; locale: LocaleCode }) {
  const view = localizedHubView(locale);
  const { strings: t, translated } = view;
  const copy = t.sections[section];
  const hubs = sectionHubs(section);
  const parks = section === "camping" ? indexableParksOf() : [];
  const prefix = localeRoot(locale);
  const url = `${SITE_URL}${localizedSectionPath(section, locale)}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ItemList", "@id": `${url}#hubs`, name: copy.h1, itemListElement: [...hubs, ...parks].map((hub, index) => ({ "@type": "ListItem", position: index + 1, name: localizedHubName(hub, t), url: `${SITE_URL}${localizedHubPath(hub, locale)}` })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: t.common.home, item: `${SITE_URL}${sitePath(prefix || "/")}` }, { "@type": "ListItem", position: 2, name: copy.label, item: url }] },
    ],
  };
  const ui = getTranslation(locale);
  return <>
    <LocalizedHeader locale={locale} />
    <main {...mainData({ kind: "hub", locale, slug: section })} {...(translated ? {} : englishFallback)}>
      <div className="pl-wrap pl-index">
        <Crumbs trail={[{ name: t.common.home, path: sitePath(prefix || "/") }, { name: copy.label, path: localizedSectionPath(section, locale) }]} />
        <header className="pl-header"><h1>{copy.h1}</h1></header>
        <PlaceMap points={hubs.flatMap((hub) => hub.dots)} label={copy.h1} precision={1} />
        <LinkList title={t.common.byState} links={hubs.map((hub) => ({ href: localizedHubPath(hub, locale), label: localizedHubName(hub, t) }))} />
        <LinkList title={t.common.parksWithPage} links={parks.map((hub) => ({ href: localizedHubPath(hub, locale), label: hub.name }))} />
        <GuideEndCta reuse={false} locale={locale} placement="hub" label={ui.download} eyebrow={ui.takeRoad} title={ui.savePlanTitle} text={ui.savePlanText} />
      </div>
    </main>
    <LocalizedFooter locale={locale} pageKey={sectionPageKey(section)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </>;
}
