import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GuideEndCta } from "@/components/guide-cta";
import { mainData } from "@/lib/analytics";
import { SITE_URL } from "@/lib/site";
import { uiStrings } from "@/lib/source-strings";
import { feeLabel, photoUrl, placePath, places, placesPath, placeStatePath, placeStates, placeTypes, stateHubPath, typeLabels, type Place, type PlaceState } from "@/lib/places";

const where = (place: Place) => place.park ?? place.locality ?? place.stateName;
const letterOf = (name: string) => { const first = name.normalize("NFD").replace(/\p{M}/gu, "").charAt(0).toUpperCase(); return /[A-Z]/.test(first) ? first : "#"; };

/** The type buttons; the page script filters the rows (or the search results) by `data-type`. */
function TypeFilter() {
  return <div className="pl-types" role="group" aria-label="Type of place">
    <button type="button" data-pl-type="" aria-pressed="true">All</button>
    {placeTypes.map((type) => <button type="button" key={type} data-pl-type={type} aria-pressed="false">{typeLabels[type].many}</button>)}
  </div>;
}

/**
 * The directory's search: a small script over names, places, links and one photo each (no coordinates,
 * descriptions or other data). It ships as `data-static-tools`, the one kind of script the static export keeps besides
 * analytics and structured data.
 */
function searchScript(index: [string, string, string, string, string, string][]) {
  return `(function(){var d=${JSON.stringify(index)},q=document.getElementById("pl-q"),o=document.getElementById("pl-results"),t="",L=${JSON.stringify(Object.fromEntries(placeTypes.map((type) => [type, typeLabels[type].one])))};
function n(s){return s.normalize("NFD").replace(/[\\u0300-\\u036f]/g,"").toLowerCase();}
function r(){var v=n(q.value.trim());o.innerHTML="";if(!v&&!t){o.hidden=true;return;}var m=d.filter(function(p){return(!t||p[3]===t)&&(!v||n(p[0]+" "+p[4]+" "+p[2]).indexOf(v)>-1);});
o.hidden=false;if(!m.length){var e=document.createElement("li");e.className="pl-empty";e.textContent="No places match.";o.appendChild(e);return;}
m.slice(0,100).forEach(function(p){var l=document.createElement("li"),a=document.createElement("a"),g=document.createElement("img"),s=document.createElement("strong"),i=document.createElement("small");a.href=p[1];g.src=p[5];g.alt="";g.loading="lazy";g.decoding="async";g.referrerPolicy="no-referrer";s.textContent=p[0];i.textContent=[L[p[3]],p[4],p[2]].filter(Boolean).join(" · ");var w=document.createElement("span");w.appendChild(s);w.appendChild(i);a.appendChild(g);a.appendChild(w);l.appendChild(a);o.appendChild(l);});}
q.addEventListener("input",r);document.querySelectorAll("[data-pl-type]").forEach(function(b){b.addEventListener("click",function(){t=b.getAttribute("data-pl-type");document.querySelectorAll("[data-pl-type]").forEach(function(x){x.setAttribute("aria-pressed",String(x===b));});r();});});})();`;
}

/** A state page's type filter: hides the rows of other types, and any letter left empty. */
const filterScript = `(function(){var b=document.querySelectorAll("[data-pl-type]");b.forEach(function(x){x.addEventListener("click",function(){var t=x.getAttribute("data-pl-type");b.forEach(function(y){y.setAttribute("aria-pressed",String(y===x));});
document.querySelectorAll(".pl-az li[data-type]").forEach(function(r){r.hidden=!!t&&r.getAttribute("data-type")!==t;});
document.querySelectorAll(".pl-az section").forEach(function(s){s.hidden=!s.querySelector("li[data-type]:not([hidden])");});});});})();`;

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
        <header className="pl-header">
          <p className="eyebrow">Places</p>
          <h1>Campgrounds, holiday parks and national parks across Australia</h1>
        </header>
        <div className="pl-search">
          <input id="pl-q" type="search" placeholder="Search by name, park or town" aria-label="Search places" autoComplete="off" />
          <TypeFilter />
          <ul id="pl-results" className="pl-rows pl-results" hidden />
        </div>
        <section className="pl-states">
          <h2>By state</h2>
          <ul>{placeStates.map((state) => <li key={state.slug}><Link href={placeStatePath(state)}><span>{state.name}</span><ArrowRight aria-hidden="true" /></Link></li>)}</ul>
        </section>
        <GuideEndCta reuse={false} locale="en" placement="place" label={uiStrings.download} eyebrow={uiStrings.takeRoad} title="Every place, on one map" text="AussieCamps maps more than 74,000 places across Australia, with filters, photos, fees and a trip planner." />
      </div>
    </main>
    <Footer pageKey="places" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script data-static-tools dangerouslySetInnerHTML={{ __html: searchScript(index) }} />
  </>;
}

export function PlacesState({ state }: { state: PlaceState }) {
  const url = `${SITE_URL}${placeStatePath(state)}`;
  const hub = stateHubPath(state);
  const sorted = [...state.places].sort((a, b) => a.name.localeCompare(b.name));
  const letters = [...new Set(sorted.map((place) => letterOf(place.name)))];
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
        <nav className="pl-crumbs" aria-label="Breadcrumb"><Link href={placesPath()}>Places</Link>{hub && <><span aria-hidden="true">/</span><Link href={hub}>Camping in {state.name}</Link></>}</nav>
        <header className="pl-header">
          <p className="eyebrow">Places · {state.name}</p>
          <h1>Campgrounds, holiday parks and national parks in {state.name}</h1>
        </header>
        <TypeFilter />
        <nav className="pl-letters" aria-label="Jump to a letter">{letters.map((letter) => <a key={letter} href={`#${letter === "#" ? "other" : letter}`}>{letter}</a>)}</nav>
        <div className="pl-az">{letters.map((letter) => <section key={letter} id={letter === "#" ? "other" : letter}>
          <h2>{letter}</h2>
          <ul className="pl-rows">{sorted.filter((place) => letterOf(place.name) === letter).map((place) => <li key={place.id} data-type={place.type}><Link href={placePath(place)}>
            <img src={photoUrl(place.photos[1] ?? place.photos[0])} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
            <span><strong>{place.name}</strong><small>{typeLabels[place.type].one} · {where(place)}</small></span>
            {place.stars ? <em className="pl-row-tag"><Star aria-hidden="true" />{place.stars}</em> : feeLabel(place.fee) ? <em className="pl-row-tag">{feeLabel(place.fee)}</em> : null}
          </Link></li>)}</ul>
        </section>)}</div>
        <GuideEndCta reuse={false} locale="en" placement="place" label={uiStrings.download} eyebrow={uiStrings.takeRoad} title={`Every place in ${state.name}, on one map`} text="Filters, photos, fees and a trip planner for the whole route." />
      </div>
    </main>
    <Footer pageKey={`places:${state.slug}`} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script data-static-tools dangerouslySetInnerHTML={{ __html: filterScript }} />
  </>;
}
