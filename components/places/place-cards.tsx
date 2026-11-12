import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { photoUrl, placePath, typeLabels, type Place } from "@/lib/places";

/**
 * A row of place cards (photo, type and name over a soft gradient), used where a page points into the
 * directory without listing it: the hubs show five and a button to the full list.
 */
export function PlaceCards({ places, more }: { places: Place[]; more?: { href: string; label: string } }) {
  if (places.length === 0) return null;
  return <div className="pl-cards-block">
    <ul className="pl-cards">{places.map((place) => <li key={place.id}><Link href={placePath(place)}>
      <img src={photoUrl(place.photos[1] ?? place.photos[0])} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
      <span><small>{typeLabels[place.type].one}</small><strong>{place.name}</strong></span>
    </Link></li>)}</ul>
    {more && <Link className="store-button pl-cards-more" href={more.href}><span>{more.label}</span><ArrowRight aria-hidden="true" /></Link>}
  </div>;
}
