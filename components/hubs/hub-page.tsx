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
  childHubs, formatDataDate, hubAttributions, hubBreadcrumbs, hubPageKey, hubPath, hubSummary, neighbourHubs, relatedHubs, sectionCopy, sectionOf,
} from "@/lib/hubs/pages";
import { hubGuides, stateNotes } from "@/lib/hubs/regions";
import { stateIntros } from "@/lib/hubs/state-intros";
import { placePath, places, placeStatePath } from "@/lib/places";
import { PlaceCards } from "@/components/places/place-cards";

const number = (value: number) => new Intl.NumberFormat("en-AU").format(value);
const norm = (value: string) => value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const plainIntro: Record<Hub["kind"], (where: string, state: string) => string> = {
  "camping-state": (where) => `Campgrounds, holiday parks and national parks in ${where}.`,
  "camping-park": (where, state) => `Campgrounds in ${where}, ${state}.`,
  "dump-points-state": (where) => `Dump points across ${where}, on one map.`,
  "rest-areas-state": (where) => `Rest areas across ${where}, on one map.`,
};

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
  const rules = getArticle(hub.rulesGuide);
  const children = childHubs(hub);
  const related = relatedHubs(hub);
  const notes = stateNotes[hub.state];
  const guides = hubGuides(hub.state, section, hub.rulesGuide).flatMap((slug) => getArticle(slug) ?? []);
  const nearby = neighbourHubs(hub);
  const crumbs = hubBreadcrumbs(hub);
  const cta = ctaCopy[section](hub.placeCount, where);
  const attributions = hubAttributions(hub);
  // The places with their own page: every place in the state for a state hub, the park's campgrounds for
  // a park hub. The page shows a map, a few plain sentences and these places; no counts or shares.
  const statePlaces = places.filter((place) => place.state === hub.state);
  const parkPage = hub.kind === "camping-park" ? statePlaces.find((place) => place.type !== "campground" && place.type !== "holiday_park" && norm(place.name) === norm(hub.name)) : undefined;
  const listed = section !== "camping" ? [] : hub.kind === "camping-park" ? statePlaces.filter((place) => place.park && norm(place.park) === norm(hub.name)) : [...statePlaces].sort((a, b) => b.photoCount - a.photoCount || a.name.localeCompare(b.name));
  const intro = hub.kind === "camping-state" ? stateIntros[hub.state] : parkPage?.description ?? plainIntro[hub.kind](where, hub.stateName);
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
          <p>{intro}</p>
          {parkPage && <p className="hub-more"><Link href={placePath(parkPage)}>More about {parkPage.name}<ArrowRight /></Link></p>}
        </header>
        <div className="hub-overview">
          <HubMap state={hub.state} dots={hub.dots} label={`${copy.many.charAt(0).toUpperCase()}${copy.many.slice(1)} in ${where}`} />
        </div>
        <div className="article-layout hub-layout">
          <div className="article-body">
            {listed.length > 0 && <section className="hub-places">
              <h2>Places to camp in {where}</h2>
              <PlaceCards places={listed.slice(0, 5)} more={{ href: placeStatePath({ slug: hub.id.split("/")[1] }), label: `Explore all places in ${hub.stateName}` }} />
            </section>}
            {children.length > 0 && <section className="sources">
              <h2>Parks in {hub.stateName} with their own page</h2>
              <ul>{children.map((child) => <li key={child.id}><Link href={hubPath(child)}>{child.name}<ArrowRight /></Link></li>)}</ul>
            </section>}
            {notes && <section className="sources hub-notes">
              <h2>Season and permits in {hub.stateName}</h2>
              <p>{notes.season}</p>
              <p>{notes.permits}</p>
              <p>Official sources: {notes.sources.map((source, index) => <span key={source.url}>{index > 0 && ", "}<a href={source.url} rel="noopener">{source.name}</a></span>)}</p>
            </section>}
            {guides.length > 0 && <section className="sources">
              <h2>Guides for {hub.stateName}</h2>
              <ul>{guides.map((guide) => <li key={guide.slug}><Link href={sitePath(`/guides/${guide.slug}`)} data-guide={guide.slug}>{guide.title}<ArrowRight /></Link></li>)}</ul>
            </section>}
            {nearby.length > 0 && <section className="sources">
              <h2>{hub.kind === "camping-park" ? `Parks in ${hub.stateName} with their own page` : "Neighbouring states"}</h2>
              <ul>{nearby.map((other) => <li key={other.id}><Link href={hubPath(other)}>{other.name}<ArrowRight /></Link></li>)}</ul>
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
              </div>
              <div className="download-card download-card-compact">
                <a className="store-button" href={appStoreUrl({ placement: "hub", locale: "en" })} data-cta="hub" aria-label="Download AussieCamps for iOS"><FaApple aria-hidden="true" /><span>Download app</span></a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
    <Footer pageKey={hubPageKey(hub)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </>;
}
