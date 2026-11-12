import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { GuideEndCta } from "@/components/guide-cta";
import { Crumbs, LinkList } from "@/components/places/listing";
import { uiStrings } from "@/lib/source-strings";
import { Footer } from "@/components/footer";
import { HubMap } from "@/components/hubs/hub-map";
import { mainData } from "@/lib/analytics";
import { SITE_URL, getArticle, sitePath } from "@/lib/site";
import { hubData, type Hub } from "@/lib/hubs/gate";
import {
  childHubs, hubBreadcrumbs, hubPageKey, hubPath, hubSummary, neighbourHubs, relatedHubs, sectionOf,
} from "@/lib/hubs/pages";
import { hubGuides, stateNotes } from "@/lib/hubs/regions";
import { stateIntros } from "@/lib/hubs/state-intros";
import { placePath, places, placeStatePath } from "@/lib/places";
import { PlaceCards } from "@/components/places/place-cards";

const norm = (value: string) => value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/**
 * One camping hub (a state or a park), in the layout every listing page shares (components/places/
 * listing.tsx): the title and a few plain sentences, the map, five places from the directory, the
 * season and permit notes, guides and links, and the end box. English only for now.
 */
export function HubPage({ hub }: { hub: Hub }) {
  const section = sectionOf(hub.kind);
  const url = `${SITE_URL}${hubPath(hub)}`;
  const where = hub.kind === "camping-park" ? hub.name : hub.name.replace(/^(Camping|Dump points|Rest areas) in /, "");
  const rules = getArticle(hub.rulesGuide);
  const children = childHubs(hub);
  const related = relatedHubs(hub);
  const notes = stateNotes[hub.state];
  const guides = hubGuides(hub.state, section, hub.rulesGuide).flatMap((slug) => getArticle(slug) ?? []);
  const nearby = neighbourHubs(hub);
  const crumbs = hubBreadcrumbs(hub);
  // The places with their own page: every place in the state for a state hub, the park's campgrounds for
  // a park hub. The page shows a map, a few plain sentences and these places; no counts or shares.
  const statePlaces = places.filter((place) => place.state === hub.state);
  const parkPage = hub.kind === "camping-park" ? statePlaces.find((place) => place.type !== "campground" && place.type !== "holiday_park" && norm(place.name) === norm(hub.name)) : undefined;
  const listed = section !== "camping" ? [] : hub.kind === "camping-park" ? statePlaces.filter((place) => place.park && norm(place.park) === norm(hub.name)) : [...statePlaces].sort((a, b) => b.photoCount - a.photoCount || a.name.localeCompare(b.name));
  const intro = hub.kind === "camping-state" ? stateIntros[hub.state] : parkPage?.description;
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
      <div className="pl-wrap pl-index">
        <Crumbs trail={crumbs} />
        <header className="pl-header">
          <h1>{hub.name}</h1>
          {intro && <p className="pl-intro">{intro}</p>}
          {parkPage && <p className="pl-more"><Link href={placePath(parkPage)}>More about {parkPage.name}<ArrowRight aria-hidden="true" /></Link></p>}
        </header>
        <HubMap state={hub.state} dots={hub.dots} label={hub.name} />
        {listed.length > 0 && <section className="pl-block">
          <h2>Places to camp in {where}</h2>
          <PlaceCards places={listed.slice(0, 5)} more={{ href: placeStatePath({ slug: hub.id.split("/")[1] }), label: `Explore all places in ${hub.stateName}` }} />
        </section>}
        {children.length > 0 && <LinkList title={`Parks in ${hub.stateName} with their own page`} links={children.map((child) => ({ href: hubPath(child), label: child.name }))} />}
        {notes && <section className="pl-block pl-notes">
          <h2>Season and permits in {hub.stateName}</h2>
          <p>{notes.season}</p>
          <p>{notes.permits}</p>
          <p>Official sources: {notes.sources.map((source, index) => <span key={source.url}>{index > 0 && ", "}<a href={source.url} rel="noopener">{source.name}</a></span>)}</p>
        </section>}
        {guides.length > 0 && <LinkList title={`Guides for ${hub.stateName}`} links={guides.map((guide) => ({ href: sitePath(`/guides/${guide.slug}`), label: guide.title }))} />}
        {nearby.length > 0 && <LinkList title={hub.kind === "camping-park" ? `Parks in ${hub.stateName} with their own page` : "Neighbouring states"} links={nearby.map((other) => ({ href: hubPath(other), label: other.name }))} />}
        <LinkList title="Before you go" links={[
          ...(rules ? [{ href: sitePath(`/guides/${rules.slug}`), label: rules.title }] : []),
          ...(hub.officialUrl ? [{ href: hub.officialUrl, label: `${hub.name}: official park page`, external: true }] : []),
          ...related.map((other) => ({ href: hubPath(other), label: other.name })),
        ]} />
        <GuideEndCta reuse={false} locale="en" placement="hub" label={uiStrings.download} eyebrow={uiStrings.takeRoad} title={uiStrings.savePlanTitle} text={uiStrings.savePlanText} />
      </div>
    </main>
    <Footer pageKey={hubPageKey(hub)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </>;
}
