import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { FaApple } from "react-icons/fa6";
import { LocalizedFooter, LocalizedHeader } from "@/components/localized-site";
import { HubMap } from "@/components/hubs/hub-map";
import { mainData } from "@/lib/analytics";
import { appStoreUrl } from "@/lib/app-store";
import { SITE_URL, sitePath } from "@/lib/site";
import { htmlLang, localeRoot, type LocaleCode } from "@/lib/locales";
import { localizedArticles } from "@/lib/localized";
import { hubData, type Hub } from "@/lib/hubs/gate";
import { hubAttributions, hubById, hubPageKey, indexableParksOf, sectionHubs, sectionOf, sectionPageKey, type HubSection } from "@/lib/hubs/pages";
import { factLabel, fill, labelKey } from "@/lib/hubs/strings";
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
export function LocalizedHubPage({ hub, locale }: { hub: Hub; locale: LocaleCode }) {
  const view = localizedHubView(locale, hub);
  const { strings: t, translated, number } = view;
  const section = sectionOf(hub.kind);
  const copy = t.sections[section];
  const prefix = localeRoot(locale);
  const url = `${SITE_URL}${localizedHubPath(hub, locale)}`;
  const name = localizedHubName(hub, t);
  const where = hub.kind === "camping-park" ? hub.name : hub.stateName;
  const prose = t.prose[hub.id] ?? [];
  const rules = localizedArticles(locale).find((article) => article.slug === hub.rulesGuide);
  const children = localizedHubs.filter((other) => other.parent === hub.id);
  const related = localizedHubs.filter((other) => other.state === hub.state && other.parent === null && other.id !== hub.id && sectionOf(other.kind) !== section);
  const parent = hub.parent ? hubById.get(hub.parent) : undefined;
  const crumbs = [
    { name: t.common.home, path: sitePath(prefix || "/") },
    { name: copy.label, path: localizedSectionPath(section, locale) },
    ...(parent && hasPage.has(parent.id) ? [{ name: parent.stateName, path: localizedHubPath(parent, locale) }] : []),
    { name: hub.kind === "camping-park" ? hub.name : hub.stateName, path: localizedHubPath(hub, locale) },
  ];
  const showLinks = hub.places.some((place) => place.url);
  const summary = localizedHubSummary(hub, view);
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

  return <>
    <LocalizedHeader locale={locale} />
    <main {...mainData({ kind: "hub", locale, slug: hub.id })} lang={translated ? undefined : "en"}>
      <article className="article-page hub-page">
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href={crumbs[crumbs.length - 2].path}><ArrowLeft />{crumbs[crumbs.length - 2].name}</Link>
          <ol className="hub-trail">{crumbs.map((crumb, index) => <li key={crumb.path}>{index === crumbs.length - 1 ? <span aria-current="page">{crumb.name}</span> : <Link href={crumb.path}>{crumb.name}</Link>}</li>)}</ol>
        </nav>
        <header className="article-header">
          <p className="eyebrow">{copy.label} · {hub.stateName}</p>
          <h1>{name}</h1>
          <p>{summary}</p>
        </header>
        <div className="hub-overview">
          <HubMap state={hub.state} dots={hub.dots} label={fill(t.common.mapLabel, { count: number(hub.placeCount), many, where })} />
          <div className="price-table-wrap hub-facts">
            <table className="price-table">
              <caption>{fill(t.common.factsCaption, { where })}</caption>
              <tbody>{hub.facts.map((fact) => <tr key={fact.key}>
                <th scope="row">{factLabel(t, fact.label)}</th>
                <td>{typeof fact.value === "number" ? number(fact.value) : fact.value}{fact.share !== undefined && <span className="hub-share"> ({fact.share}%)</span>}</td>
              </tr>)}</tbody>
            </table>
          </div>
        </div>
        <div className="article-layout hub-layout">
          <div className="article-body">
            {prose.length > 0 && <section className="hub-prose">
              <span className="section-count">01</span>
              <h2>{t.common.readingTitle}</h2>
              {prose.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>}
            <section className="hub-places">
              <span className="section-count">{prose.length ? "02" : "01"}</span>
              <h2>{hub.places.length < hub.placeCount ? fill(t.common.placesSome, { shown: hub.places.length, count: number(hub.placeCount), many: copy.many }) : fill(t.common.placesAll, { count: number(hub.placeCount), many })}</h2>
              <p>{hub.places.length < hub.placeCount ? `${fill(t.common.placesSample, { shown: hub.places.length })} ` : ""}{t.common.placesNote}</p>
              <div className="price-table-wrap">
                <table className="price-table hub-places-table">
                  <thead><tr><th scope="col">{t.common.colPlace}</th><th scope="col">{hub.kind.startsWith("camping") ? t.common.colParkOrLocality : t.common.colLocality}</th><th scope="col">{t.common.colFees}</th><th scope="col">{t.common.colFacilities}</th>{showLinks && <th scope="col">{t.common.colOfficial}</th>}</tr></thead>
                  <tbody>{hub.places.map((place) => <tr key={place.id}>
                    <th scope="row">{place.name}</th>
                    <td>{(hub.kind === "camping-park" ? place.locality : place.park ?? place.locality) ?? ""}</td>
                    <td>{place.fee ? t.fees[labelKey(place.fee)] ?? place.fee : t.common.notListed}</td>
                    <td>{place.facilities.length ? place.facilities.map((facility) => t.facilities[labelKey(facility)] ?? facility).join(", ") : t.common.noneListed}</td>
                    {showLinks && <td>{place.url ? <a href={place.url} rel="noopener">{t.common.officialLink}</a> : ""}</td>}
                  </tr>)}</tbody>
                </table>
              </div>
            </section>
            {children.length > 0 && <section className="sources">
              <h2>{fill(t.common.parksTitle, { state: hub.stateName })}</h2>
              <ul>{children.map((child) => <li key={child.id}><Link href={localizedHubPath(child, locale)}>{fill(t.common.parkItem, { name: child.name, count: number(child.placeCount) })}<ArrowRight /></Link></li>)}</ul>
            </section>}
            <section className="sources">
              <h2>{t.common.beforeTitle}</h2>
              <p>{t.common.beforeText}</p>
              <ul>
                {rules && <li><Link href={sitePath(`${prefix}/guides/${rules.slug}`)} data-guide={rules.slug}>{rules.title}<ArrowRight /></Link></li>}
                {hub.officialUrl && <li><a href={hub.officialUrl}>{fill(t.common.officialParkPage, { name: hub.name })}<ArrowRight /></a></li>}
                {related.map((other) => <li key={other.id}><Link href={localizedHubPath(other, locale)}>{localizedHubName(other, t)}<ArrowRight /></Link></li>)}
              </ul>
            </section>
            <div className="article-end-cta hub-cta">
              <div>
                <p className="eyebrow">{t.common.ctaEyebrow}</p>
                <h2>{fill(copy.ctaTitle, { count: number(hub.placeCount), where })}</h2>
                <p>{fill(copy.ctaText, { count: number(hub.placeCount) })}</p>
                <p className="tool-cta-note">{t.common.ctaNote}</p>
              </div>
              <div className="download-card download-card-compact">
                <a className="store-button" href={appStoreUrl({ placement: "hub", locale })} data-cta="hub" aria-label={t.common.downloadLabel}><FaApple aria-hidden="true" /><span>{t.common.download}</span></a>
              </div>
            </div>
            <section className="hub-data-note">
              <p><MapPin size={13} /> {fill(t.common.dataNote, { date: view.date })} {hubAttributions(hub).map((source) => source.attribution).join(" ")} <Link href="/credits/#data-sources">{t.common.allSources}</Link>.</p>
            </section>
          </div>
        </div>
      </article>
    </main>
    <LocalizedFooter locale={locale} pageKey={hubPageKey(hub)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </>;
}

/** The index for one hub type in another language: the same lists as components/hubs/hub-index.tsx. */
export function LocalizedHubIndex({ section, locale }: { section: HubSection; locale: LocaleCode }) {
  const view = localizedHubView(locale);
  const { strings: t, translated, number } = view;
  const copy = t.sections[section];
  const hubs = sectionHubs(section);
  const linked = new Set(hubs.map((hub) => hub.id));
  const unlinked = hubData.hubs.filter((hub) => hub.parent === null && hub.id.startsWith(`${section}/`) && !linked.has(hub.id) && hub.placeCount > 0);
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
  return <>
    <LocalizedHeader locale={locale} />
    <main {...mainData({ kind: "hub", locale, slug: section })} lang={translated ? undefined : "en"}>
      <article className="article-page hub-page">
        <nav className="article-breadcrumb" aria-label="Breadcrumb"><Link href={sitePath(prefix || "/")}><ArrowLeft />{t.common.home}</Link><span>{copy.label}</span></nav>
        <header className="article-header">
          <p className="eyebrow">{copy.label} · {t.common.australia}</p>
          <h1>{copy.h1}</h1>
          <p>{copy.intro}</p>
        </header>
        <div className="article-layout hub-layout">
          <div className="article-body">
            <section className="sources">
              <h2>{t.common.byState}</h2>
              <ul>{hubs.map((hub) => <li key={hub.id}><Link href={localizedHubPath(hub, locale)}>{localizedHubName(hub, t)}<span className="hub-count">{number(hub.placeCount)} {copy.many}</span><ArrowRight /></Link></li>)}</ul>
              {unlinked.length > 0 && <p>{fill(t.common.unlinked, { list: unlinked.map((hub) => fill(t.common.unlinkedItem, { count: number(hub.placeCount), state: hub.stateName })).join(", ") })}</p>}
            </section>
            {parks.length > 0 && <section className="sources">
              <h2>{t.common.parksWithPage}</h2>
              <ul>{parks.map((hub) => <li key={hub.id}><Link href={localizedHubPath(hub, locale)}>{hub.name}<span className="hub-count">{fill(t.common.campgroundCount, { count: number(hub.placeCount) })}</span><ArrowRight /></Link></li>)}</ul>
            </section>}
            <section className="hub-data-note"><p>{fill(t.common.indexDataNote, { date: view.date })} <Link href="/credits/#data-sources">{t.common.dataSources}</Link>.</p></section>
          </div>
        </div>
      </article>
    </main>
    <LocalizedFooter locale={locale} pageKey={sectionPageKey(section)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </>;
}
