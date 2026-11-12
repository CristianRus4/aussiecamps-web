import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { photoUrl, placePath, places, placesPath, placeStatePath, placeStates, typeLabels, type Place, type PlaceType } from "@/lib/places";

/** Four places with large, sharp photos, one of each main type and each from a different state. */
function featured(): Place[] {
  const picks: Place[] = [];
  const order: PlaceType[] = ["holiday_park", "campground", "national_park", "campground"];
  for (const type of order) {
    const pick = places.filter((place) => place.type === type && place.heroWidth >= 1200 && place.photos.length >= 3 && !picks.some((other) => other.state === place.state))
      .sort((a, b) => b.photoCount - a.photoCount || a.name.localeCompare(b.name))[0];
    if (pick) picks.push(pick);
  }
  return picks;
}

/** The places directory on the home page, before "Find a camp. Build the trip.". */
export function PlacesHome() {
  if (places.length === 0) return null;
  return <section className="section pl-home">
    <div className="section-head"><div><p className="eyebrow">Places</p><h2>Campgrounds, holiday parks<br />and national parks.</h2></div><Link className="pl-home-all" href={placesPath()}>Explore all {places.length.toLocaleString("en-AU")} places<ArrowRight aria-hidden="true" /></Link></div>
    <ul className="pl-home-grid">{featured().map((place) => <li key={place.id}><Link href={placePath(place)}>
      <img src={photoUrl(place.photos[0])} alt={place.name} loading="lazy" decoding="async" referrerPolicy="no-referrer" />
      <strong>{place.name}</strong><small>{typeLabels[place.type].one} · {place.stateName}</small>
    </Link></li>)}</ul>
    <nav className="pl-home-states" aria-label="Places by state">{placeStates.map((state) => <Link key={state.slug} href={placeStatePath(state)}>{state.name}</Link>)}</nav>
  </section>;
}
