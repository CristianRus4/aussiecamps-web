import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { photoUrl, placePath, places, placesPath, typeLabels, type Place } from "@/lib/places";

/** Places with sharp photos, a mix of types and states, taken in turn from each state. */
function featured(count: number): Place[] {
  const sharp = places.filter((place) => place.heroWidth >= 1200).sort((a, b) => b.photoCount - a.photoCount || a.name.localeCompare(b.name));
  const byState = [...new Set(sharp.map((place) => place.state))].map((state) => sharp.filter((place) => place.state === state));
  const picks: Place[] = [];
  for (let round = 0; picks.length < count && byState.some((list) => list.length > round); round += 1) {
    for (const list of byState) if (list[round] && picks.length < count) picks.push(list[round]);
  }
  return picks;
}

/**
 * The two rows slide in opposite directions and loop. Hovering a row eases it to a stop and leaving
 * eases it back up to speed. Without the script, or with reduced motion, the rows fall back to the CSS
 * animation or stay still and scroll by hand. Kept as `data-static-tools`, the one kind of script the
 * static export keeps besides analytics and structured data.
 */
const marqueeScript = `(function(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;document.querySelectorAll(".pl-marquee").forEach(function(row){var list=row.querySelector("ul");if(!list)return;row.classList.add("is-js");var dir=row.dataset.dir==="right"?1:-1,speed=0.45,v=speed,target=speed,x=0,half=0,seen=true;
function measure(){half=(list.scrollWidth+14)/2;}measure();window.addEventListener("resize",measure);
row.addEventListener("mouseenter",function(){target=0;});row.addEventListener("mouseleave",function(){target=speed;});
if("IntersectionObserver"in window)new IntersectionObserver(function(e){seen=e[0].isIntersecting;}).observe(row);
if(dir===1)x=-half;function step(){if(seen&&half){v+=(target-v)*0.04;x+=dir*v;if(x<=-half)x+=half;if(x>=0)x-=half;list.style.transform="translateX("+x+"px)";}requestAnimationFrame(step);}requestAnimationFrame(step);});})();`;

/**
 * The places directory on the home page, before "Find a camp. Build the trip.": a short heading, the
 * Explore button and two rows of places across the full width. Each row is drawn twice so the loop is seamless.
 */
export function PlacesHome() {
  if (places.length === 0) return null;
  const picks = featured(32);
  const rows = [picks.filter((_, index) => index % 2 === 0), picks.filter((_, index) => index % 2 === 1)];
  const card = (place: Place, copy: number) => <li key={`${place.id}-${copy}`} aria-hidden={copy === 1 ? true : undefined}><Link href={placePath(place)} tabIndex={copy === 1 ? -1 : undefined}>
    <img src={photoUrl(place.photos[1] ?? place.photos[0])} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
    <span><small>{typeLabels[place.type].one}</small><strong>{place.name}</strong></span>
  </Link></li>;
  return <section className="pl-home">
    <div className="pl-home-head">
      <h2>Explore places</h2>
      <Link className="store-button pl-home-all" href={placesPath()}><span>Explore {places.length.toLocaleString("en-AU")} places</span><ArrowRight aria-hidden="true" /></Link>
    </div>
    {rows.map((row, index) => <div className="pl-marquee" data-dir={index === 0 ? "left" : "right"} key={index}><ul>{row.map((place) => card(place, 0))}{row.map((place) => card(place, 1))}</ul></div>)}
    <script data-static-tools dangerouslySetInnerHTML={{ __html: marqueeScript }} />
  </section>;
}
