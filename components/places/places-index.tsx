import Link from "next/link";
import { PlaceMap } from "@/components/places/place-map";
import { ArrowRight, Star } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GuideEndCta } from "@/components/guide-cta";
import { Crumbs, LinkList } from "@/components/places/listing";
import { mainData } from "@/lib/analytics";
import { builtHubs } from "@/lib/hubs/gate";
import { hubGuides } from "@/lib/hubs/regions";
import { stateIntros } from "@/lib/hubs/state-intros";
import { SITE_URL, getArticle, sitePath } from "@/lib/site";
import { uiStrings } from "@/lib/source-strings";
import { feeLabel, photoUrl, placePath, places, placesPath, placeStatePath, placeStates, placeTypes, typeLabels, type Place, type PlaceState } from "@/lib/places";

const where = (place: Place) => place.park ?? place.locality ?? place.stateName;

/** The search box; the page script filters the search results (directory) or the rows (state page). */
function SearchBox({ placeholder, results = false }: { placeholder: string; results?: boolean }) {
  return <div className="pl-search">
    <div className="pl-search-field">
      <input id="pl-q" type="search" placeholder={placeholder} aria-label="Search places" autoComplete="off" />
    </div>
    {results && <ul id="pl-results" className="pl-rows pl-results" hidden />}
  </div>;
}

/**
 * The directory's search: a small script over names, places, links and one photo each (no coordinates,
 * descriptions or other data). It ships as `data-static-tools`, the one kind of script the static export keeps besides
 * analytics and structured data.
 */
function searchScript(index: [string, string, string, string, string, string][]) {
  return `(function(){var d=${JSON.stringify(index)},q=document.getElementById("pl-q"),o=document.getElementById("pl-results"),L=${JSON.stringify(Object.fromEntries(placeTypes.map((type) => [type, typeLabels[type].one])))};
function n(s){return s.normalize("NFD").replace(/[\\u0300-\\u036f]/g,"").toLowerCase();}
function r(){var v=n(q.value.trim());o.innerHTML="";if(!v){o.hidden=true;return;}var m=d.filter(function(p){return n(p[0]+" "+p[4]+" "+p[2]).indexOf(v)>-1;});
o.hidden=false;if(!m.length){var e=document.createElement("li");e.className="pl-empty";e.textContent="No places match.";o.appendChild(e);return;}
m.slice(0,100).forEach(function(p){var l=document.createElement("li"),a=document.createElement("a"),g=document.createElement("img"),s=document.createElement("strong"),i=document.createElement("small");a.href=p[1];g.src=p[5];g.alt="";g.loading="lazy";g.decoding="async";g.referrerPolicy="no-referrer";s.textContent=p[0];i.textContent=[L[p[3]],p[4],p[2]].filter(Boolean).join(" · ");var w=document.createElement("span");w.appendChild(s);w.appendChild(i);a.appendChild(g);a.appendChild(w);l.appendChild(a);o.appendChild(l);});}
q.addEventListener("input",r);})();`;
}

/** A state page's search: hides the rows that do not match. */
const filterScript = `(function(){var q=document.getElementById("pl-q");function n(s){return s.normalize("NFD").replace(/[\\u0300-\\u036f]/g,"").toLowerCase();}
function r(){var v=n(q.value.trim());document.querySelectorAll(".pl-az li[data-type]").forEach(function(row){row.hidden=!!v&&n(row.textContent).indexOf(v)<0;});}
q.addEventListener("input",r);})();`;

export function PlacesDirectory() {
  const url = `${SITE_URL}${placesPath()}`;
  const index = places.map((place) => [place.name, placePath(place), place.stateName, place.type, place.park ?? place.locality ?? "", photoUrl(place.photos[1] ?? place.photos[0])] as [string, string, string, string, string, string]);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ItemList", "@id": `${url}#states`, name: "Places to camp in Australia, by state", itemListElement: placeStates.map((state, position) => ({ "@type": "ListItem", position: position + 1, name: state.name, url: `${SITE_URL}${placeStatePath(state)}` })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Places", item: url }] },
    ],
  };
  return <>
    <Header />
    <main {...mainData({ kind: "places" })}>
      <div className="pl-wrap pl-index">
        <Crumbs trail={[{ name: "Home", path: "/" }, { name: "Places", path: placesPath() }]} />
        <header className="pl-header">
          <h1>Campgrounds, holiday parks and national parks across Australia</h1>
        </header>
        <PlaceMap points={places.map((place) => [place.lng, place.lat] as [number, number])} label="Places to camp" precision={1} />
        <SearchBox placeholder="Search by name, park or town" results />
        <section className="pl-states">
          <h2>By state</h2>
          <ul>{placeStates.map((state) => <li key={state.slug}><Link href={placeStatePath(state)}><span>{state.name}</span><ArrowRight aria-hidden="true" /></Link></li>)}</ul>
        </section>
        <GuideEndCta reuse={false} locale="en" placement="place" label={uiStrings.download} eyebrow={uiStrings.takeRoad} title={uiStrings.savePlanTitle} text={uiStrings.savePlanText} />
      </div>
    </main>
    <Footer pageKey="places" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script data-static-tools dangerouslySetInnerHTML={{ __html: searchScript(index) }} />
  </>;
}

export function PlacesState({ state }: { state: PlaceState }) {
  const url = `${SITE_URL}${placeStatePath(state)}`;
  const sorted = [...state.places].sort((a, b) => a.name.localeCompare(b.name));
  const stateHub = builtHubs.find((candidate) => candidate.id === `camping/${state.slug}`);
  const guides = stateHub ? hubGuides(stateHub.state, "camping", stateHub.rulesGuide).flatMap((slug) => getArticle(slug) ?? []) : [];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ItemList", "@id": `${url}#places`, name: `Places to camp in ${state.name}`, itemListElement: sorted.map((place, position) => ({ "@type": "ListItem", position: position + 1, name: place.name, url: `${SITE_URL}${placePath(place)}` })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Places", item: `${SITE_URL}${placesPath()}` }, { "@type": "ListItem", position: 2, name: state.name, item: url }] },
    ],
  };
  return <>
    <Header />
    <main {...mainData({ kind: "places", slug: state.slug })}>
      <div className="pl-wrap pl-index">
        <Crumbs trail={[{ name: "Home", path: "/" }, { name: "Places", path: placesPath() }, { name: state.name, path: placeStatePath(state) }]} />
        <header className="pl-header">
          <h1>Places to camp in {state.name}</h1>
          {stateIntros[state.code] && <p className="pl-intro">{stateIntros[state.code]}</p>}
        </header>
        <PlaceMap points={state.places.map((place) => [place.lng, place.lat] as [number, number])} label={`Places to camp in ${state.name}`} />
        <SearchBox placeholder={`Search places in ${state.name}`} />
        <ul className="pl-rows pl-az">{sorted.map((place) => <li key={place.id} data-type={place.type}><Link href={placePath(place)}>
          <img src={photoUrl(place.photos[1] ?? place.photos[0])} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
          <span><strong>{place.name}</strong><small>{typeLabels[place.type].one} · {where(place)}</small></span>
          {place.stars ? <em className="pl-row-tag"><Star aria-hidden="true" />{place.stars}</em> : feeLabel(place.fee) ? <em className="pl-row-tag">{feeLabel(place.fee)}</em> : null}
        </Link></li>)}</ul>
        <LinkList title={`Guides for ${state.name}`} links={guides.map((guide) => ({ href: sitePath(`/guides/${guide.slug}`), label: guide.title }))} />
        <GuideEndCta reuse={false} locale="en" placement="place" label={uiStrings.download} eyebrow={uiStrings.takeRoad} title={uiStrings.savePlanTitle} text={uiStrings.savePlanText} />
      </div>
    </main>
    <Footer pageKey={`places:${state.slug}`} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script data-static-tools dangerouslySetInnerHTML={{ __html: filterScript }} />
  </>;
}
