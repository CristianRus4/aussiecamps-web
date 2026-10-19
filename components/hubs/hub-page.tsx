import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { FaApple } from "react-icons/fa6";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HubMap } from "@/components/hubs/hub-map";
import { mainData } from "@/lib/analytics";
import { appStoreUrl } from "@/lib/app-store";
import { SITE_URL, getArticle, sitePath } from "@/lib/site";
import { hubData, type Hub } from "@/lib/hubs/gate";
import {
  childHubs, formatDataDate, hubAttributions, hubBreadcrumbs, hubPageKey, hubPath, hubSummary, proseFor, relatedHubs, sectionCopy, sectionOf,
} from "@/lib/hubs/pages";

const number = (value: number) => new Intl.NumberFormat("en-AU").format(value);

/** What the Pass covers, said plainly per hub type. Never promises free access to Pass data. */
const ctaCopy = {
  camping: (n: number, where: string) => ({
    title: `All ${number(n)} campgrounds in ${where}, on one map.`,
    text: "AussieCamps carries every campground on this page with its facilities, fees and official link, alongside rest areas, dump points and water, and builds a multi-stop trip from the places you save.",
  }),
  "dump-points": (n: number, where: string) => ({
    title: `Every dump point in ${where}, on the map with your route.`,
    text: `AussieCamps carries all ${number(n)} dump points listed here with their facilities, plus water filling points and rest areas, so the next empty-and-refill stop is on the route you are already driving.`,
  }),
  "rest-areas": (n: number, where: string) => ({
    title: `All ${number(n)} rest areas in ${where}, along your route.`,
    text: "AussieCamps carries the rest areas on this page with the facilities each one lists, alongside campgrounds, dump points and water, and shows them on the road you are planning.",
  }),
};

/**
 * One data hub: what the app data says about the campgrounds, dump points or rest areas of a state or
 * park, a written reading of those numbers, up to 25 named places with official links, a dot map and
 * an honest CTA. English only for now.
 */
export function HubPage({ hub }: { hub: Hub }) {
  const section = sectionOf(hub.kind);
  const copy = sectionCopy[section];
  const url = `${SITE_URL}${hubPath(hub)}`;
  const where = hub.kind === "camping-park" ? hub.name : hub.name.replace(/^(Camping|Dump points|Rest areas) in /, "");
  const prose = proseFor(hub);
  const rules = getArticle(hub.rulesGuide);
  const children = childHubs(hub);
  const related = relatedHubs(hub);
  const crumbs = hubBreadcrumbs(hub);
  const showLinks = hub.places.some((place) => place.url);
  const cta = ctaCopy[section](hub.placeCount, where);
  const attributions = hubAttributions(hub);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: hub.name, description: hubSummary(hub), inLanguage: "en-AU", dateModified: hubData.dataAsOf, isPartOf: { "@id": `${SITE_URL}/#website` } },
      {
        "@type": "ItemList", "@id": `${url}#places`, name: hub.name, numberOfItems: hub.places.length,
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

  return <>
    <Header />
    <main {...mainData({ kind: "hub", slug: hub.id })}>
      <article className="article-page hub-page">
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href={crumbs[crumbs.length - 2].path}><ArrowLeft />{crumbs[crumbs.length - 2].name}</Link>
          <ol className="hub-trail">{crumbs.map((crumb, index) => <li key={crumb.path}>{index === crumbs.length - 1 ? <span aria-current="page">{crumb.name}</span> : <Link href={crumb.path}>{crumb.name}</Link>}</li>)}</ol>
        </nav>
        <header className="article-header">
          <p className="eyebrow">{copy.label} · {hub.stateName}</p>
          <h1>{hub.name}</h1>
          <p>{hubSummary(hub)}</p>
        </header>
        <div className="hub-overview">
          <HubMap state={hub.state} dots={hub.dots} label={`${number(hub.placeCount)} ${hub.placeCount === 1 ? copy.one : copy.many} in ${where}, one dot each.`} />
          <div className="price-table-wrap hub-facts">
            <table className="price-table">
              <caption>What the data lists for {where}</caption>
              <tbody>{hub.facts.map((fact) => <tr key={fact.key}>
                <th scope="row">{fact.label}</th>
                <td>{typeof fact.value === "number" ? number(fact.value) : fact.value}{fact.share !== undefined && <span className="hub-share"> ({fact.share}%)</span>}</td>
              </tr>)}</tbody>
            </table>
          </div>
        </div>
        <div className="article-layout hub-layout">
          <div className="article-body">
            {prose.length > 0 && <section className="hub-prose">
              <span className="section-count">01</span>
              <h2>Reading the numbers</h2>
              {prose.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>}
            <section className="hub-places">
              <span className="section-count">{prose.length ? "02" : "01"}</span>
              <h2>{hub.places.length < hub.placeCount ? `${hub.places.length} of the ${number(hub.placeCount)} ${copy.many}` : `The ${number(hub.placeCount)} ${copy.many}`}</h2>
              <p>{hub.places.length < hub.placeCount ? `These are the ${hub.places.length} with the most detail in the data. ` : ""}Facilities are what each source lists; a facility not listed may still exist, and conditions change. Check the official page before you go.</p>
              <div className="price-table-wrap">
                <table className="price-table hub-places-table">
                  <thead><tr><th scope="col">Place</th><th scope="col">{hub.kind.startsWith("camping") ? "Park or locality" : "Locality"}</th><th scope="col">Fees</th><th scope="col">Facilities listed</th>{showLinks && <th scope="col">Official page</th>}</tr></thead>
                  <tbody>{hub.places.map((place) => <tr key={place.id}>
                    <th scope="row">{place.name}</th>
                    <td>{(hub.kind === "camping-park" ? place.locality : place.park ?? place.locality) ?? ""}</td>
                    <td>{place.fee ?? "Not listed"}</td>
                    <td>{place.facilities.length ? place.facilities.join(", ") : "None listed"}</td>
                    {showLinks && <td>{place.url ? <a href={place.url} rel="noopener">Official page</a> : ""}</td>}
                  </tr>)}</tbody>
                </table>
              </div>
            </section>
            {children.length > 0 && <section className="sources">
              <h2>Parks in {hub.stateName} with their own page</h2>
              <ul>{children.map((child) => <li key={child.id}><Link href={hubPath(child)}>{child.name} ({number(child.placeCount)} campgrounds)<ArrowRight /></Link></li>)}</ul>
            </section>}
            <section className="sources">
              <h2>Before you go</h2>
              <p>Rules, fees and closures change. Read the state rules and the land manager’s page for your exact stop.</p>
              <ul>
                {rules && <li><Link href={sitePath(`/guides/${rules.slug}`)} data-guide={rules.slug}>{rules.title}<ArrowRight /></Link></li>}
                {hub.officialUrl && <li><a href={hub.officialUrl}>{hub.name}: official park page<ArrowRight /></a></li>}
                {related.map((other) => <li key={other.id}><Link href={hubPath(other)}>{other.name}<ArrowRight /></Link></li>)}
              </ul>
            </section>
            <div className="article-end-cta hub-cta">
              <div>
                <p className="eyebrow">In the app</p>
                <h2>{cta.title}</h2>
                <p>{cta.text}</p>
                <p className="tool-cta-note">Campgrounds, rest areas, dump points, water and the trip planner are part of the AussieCamps Pass. Bookable stays and tours are free to browse and book. AussieCamps is an iPhone app.</p>
              </div>
              <div className="download-card download-card-compact">
                <a className="store-button" href={appStoreUrl({ placement: "hub", locale: "en" })} data-cta="hub" aria-label="Download AussieCamps for iOS"><FaApple aria-hidden="true" /><span>Download app</span></a>
              </div>
            </div>
            <section className="hub-data-note">
              <p><MapPin size={13} /> Data as of {formatDataDate()}, from the AussieCamps app. Facts only: no descriptions or photos from these sources are reproduced. {attributions.map((source) => source.attribution).join(" ")} <Link href="/credits/#data-sources">All data sources</Link>.</p>
            </section>
          </div>
        </div>
      </article>
    </main>
    <Footer pageKey={hubPageKey(hub)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </>;
}
