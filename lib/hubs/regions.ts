import { articles } from "../site";
import type { HubSection } from "./pages";

/**
 * What a state's hubs say beyond the app data: the season and permit notes for that state, the
 * official pages they come from, the states next to it and the guides that cover it.
 *
 * Every note restates a rule already fact-checked in that state's camping rules guide (lib/content),
 * with the agency that publishes it. Notes are translated in the `hubs` namespace (lib/hubs/strings.ts)
 * as `notes.<state>-season` and `notes.<state>-permits`, and a translated hub needs both for its state.
 */
type StateNotes = { season: string; permits: string; sources: { name: string; url: string }[] };

export const stateNotes: Record<string, StateNotes> = {
  NSW: {
    season: "The NSW Bush Fire Danger Period runs from 1 October to 31 March, and on a Total Fire Ban day no fire may be lit in the open. Popular coastal campgrounds book out over summer and the school holidays.",
    permits: "Most campgrounds on the NSW National Parks website need a booking, even the free ones, and 45 parks charge a separate daily vehicle entry fee. Camping in state forests is free and cannot be booked.",
    sources: [
      { name: "NSW National Parks and Wildlife Service", url: "https://www.nationalparks.nsw.gov.au/camping-and-accommodation/" },
      { name: "NSW Rural Fire Service", url: "https://www.rfs.nsw.gov.au/fire-information/BFDP" },
    ],
  },
  VIC: {
    season: "The Fire Danger Period is set council by council, usually from spring until April or May; in 2026-27 it began on 5 October in East Gippsland and Wellington. Seasonal road closures in parks and forests run from June to November.",
    permits: "Bookable Parks Victoria campgrounds must be booked in advance with your vehicle registration, at half the usual fee until July 2027. State forest campgrounds are free, except Murrindindi Scenic Reserve.",
    sources: [
      { name: "Parks Victoria", url: "https://www.parks.vic.gov.au/where-to-stay/booking-information" },
      { name: "Country Fire Authority", url: "https://www.cfa.vic.gov.au/warnings-and-restrictions/fire-danger-period/fire-restriction-dates" },
    ],
  },
  QLD: {
    season: "Queensland declares local fire bans by council area instead of Total Fire Bans, and they cover parks and forests. Check park alerts and Bureau of Meteorology warnings before each leg.",
    permits: "Every camp in a Queensland national park, state forest or recreation area needs a permit booked and paid before you arrive, up to 12 months ahead. Driving on K'gari, Bribie Island, Mulgumpin, Minjerribah or at Cooloola also needs a vehicle access permit.",
    sources: [
      { name: "Queensland Parks and Wildlife Service", url: "https://parks.qld.gov.au/camping/bookings" },
      { name: "Queensland Fire Department", url: "https://www.fire.qld.gov.au/safety-education/using-fire-outdoors/fire-bans-and-restrictions" },
    ],
  },
  NT: {
    season: "The dry season runs from May to September, when park campgrounds are busiest. The build-up and the wet, from October to April, bring storms and road closures, and Central Australia can pass 40 degrees in those months.",
    permits: "Campsites in NT parks are booked and paid online before you arrive, and visitors from outside the Territory need an NT Parks Visitor Pass for most parks. Kakadu and Uluru-Kata Tjuta sell their own passes through Parks Australia.",
    sources: [
      { name: "NT Parks and Wildlife", url: "https://nt.gov.au/parks/visitor-pass" },
      { name: "Parks Australia", url: "https://parksaustralia.gov.au/kakadu/plan/passes/" },
    ],
  },
  WA: {
    season: "The north is best in the dry season, roughly May to October, and the cyclone season runs from November to April. Many parks stop campfires from about 1 December to 31 March.",
    permits: "Many national park campgrounds are booked through Park Stay WA up to 180 days ahead, and parks such as Karijini and Cape Range charge vehicle entry on top of camping. Ningaloo Coast bookings open each month, on the first Tuesday.",
    sources: [
      { name: "Parks and Wildlife Service WA", url: "https://exploreparks.dbca.wa.gov.au/camping-fees" },
      { name: "DBCA park passes", url: "https://shop.dbca.wa.gov.au/collections/park-passes" },
    ],
  },
  SA: {
    season: "The Fire Danger Season is set by district: in 2026-27 it starts on 15 October in the Flinders, Eastern Eyre, West Coast and pastoral districts and on 1 November in the South East, Murraylands and Riverland, and runs into April. Munga-Thirri-Simpson Desert closes from 1 December to 15 March.",
    permits: "Almost every national park campsite must be booked before you arrive, up to 12 months ahead, and a booking usually covers vehicle entry to that park. The Desert Parks Pass covers entry and camping in the far north.",
    sources: [
      { name: "National Parks and Wildlife Service SA", url: "https://www.parks.sa.gov.au/book-and-pay/frequently-asked-questions" },
      { name: "SA Country Fire Service", url: "https://www.cfs.sa.gov.au/warnings-restrictions/restrictions/fire-danger-season-dates-permits/" },
    ],
  },
  TAS: {
    season: "Fuel Stove Only Areas ban campfires all year across much of the wilderness, including Cradle Mountain-Lake St Clair, Freycinet and Mount Field, and alpine weather can turn cold in any season. On a Total Fire Ban day all outdoor fires are banned in parks.",
    permits: "A parks pass is needed to enter any Tasmanian national park, and campground fees come on top. Parks and Wildlife Service moved to a new booking system on 3 November 2026, so check when your campground takes bookings.",
    sources: [
      { name: "Parks and Wildlife Service Tasmania", url: "https://parks.tas.gov.au/explore-our-parks/know-before-you-go/park-passes-and-entry-fees" },
      { name: "Fuel Stove Only Areas", url: "https://parks.tas.gov.au/explore-our-parks/know-before-you-go/campfires-and-fire-bans/fuel-stove-only-areas" },
    ],
  },
  ACT: {
    season: "The ACT bushfire season runs from 1 October to 31 March. On a Total Fire Ban day there are no fires in the open, and public gas barbecues are switched off.",
    permits: "There is no free camping in the ACT: every campground must be booked in advance and charges a fee. Entry to Namadgi National Park is free.",
    sources: [
      { name: "ACT Parks and Conservation Service", url: "https://www.parks.act.gov.au/get-involved/bookings-and-permits" },
      { name: "ACT Emergency Services Agency", url: "https://esa.act.gov.au/be-emergency-ready/bushfires" },
    ],
  },
};

/** The `notes` keys of the hubs namespace for a state: "nsw-season", "nsw-permits". */
export const noteKeys = (state: string) => [`${state.toLowerCase()}-season`, `${state.toLowerCase()}-permits`] as const;
/** Every note, keyed for the translation file. */
export const noteSource = () => Object.fromEntries(Object.entries(stateNotes).flatMap(([state, notes]) => {
  const [season, permits] = noteKeys(state);
  return [[season, notes.season], [permits, notes.permits]];
}));

/** States that share a land border, for links to the same kind of hub next door. Tasmania has none. */
export const neighbours: Record<string, string[]> = {
  NSW: ["QLD", "VIC", "SA", "ACT"], VIC: ["NSW", "SA"], QLD: ["NSW", "NT", "SA"], SA: ["WA", "NT", "QLD", "NSW", "VIC"],
  WA: ["NT", "SA", "melbourne-to-perth-drive", "perth-to-darwin-drive"], NT: ["WA", "SA", "QLD"], TAS: [], ACT: ["NSW"],
};

/**
 * Guides that cover a state, best first: its road trips and drives. A scheduled guide joins the list
 * on its publish day (only `articles`, the live guides, are read).
 */
const stateGuides: Record<string, string[]> = {
  NSW: ["blue-mountains-camping-weekend", "sydney-south-coast-camping", "australian-alps-camping-route", "east-coast-road-trip-sydney-cairns", "sydney-to-canberra-drive", "sydney-to-melbourne-drive", "brisbane-to-sydney-drive"],
  VIC: ["great-ocean-road-camping-guide", "victoria-high-country-camping", "melbourne-to-adelaide-coastal-route", "australian-alps-camping-route", "melbourne-to-mildura-drive", "sydney-to-melbourne-drive", "melbourne-to-perth-drive"],
  QLD: ["brisbane-to-cape-tribulation", "sunshine-coast-hinterland-camping", "queensland-outback-way", "brisbane-to-cairns-drive", "townsville-to-mount-isa-drive", "brisbane-to-byron-bay-drive"],
  NT: ["darwin-kakadu-litchfield-loop", "red-centre-way-camping", "wet-season-camping-top-end-northern-wa", "darwin-to-alice-springs-drive", "alice-springs-to-uluru-drive", "cairns-to-darwin-drive", "perth-to-darwin-drive"],
  WA: ["perth-to-broome-road-trip", "south-west-wa-camping-loop", "gibb-river-road-camping", "wet-season-camping-top-end-northern-wa", "perth-to-exmouth-drive", "broome-to-darwin-drive"],
  SA: ["flinders-ranges-camping-guide", "kangaroo-island-camping-guide", "adelaide-to-uluru-road-trip", "nullarbor-crossing-camping-guide", "adelaide-to-port-lincoln-drive", "adelaide-to-melbourne-drive", "melbourne-to-perth-drive"],
  TAS: ["tasmania-camping-loop", "hobart-to-launceston-drive", "can-i-take-a-campervan-or-caravan-on-the-spirit-of-tasmania"],
  ACT: ["australian-alps-camping-route", "sydney-to-canberra-drive", "melbourne-to-canberra-drive"],
};
/** Guides every hub of a kind links to, after the state's own. */
const sectionGuides: Record<HubSection, string[]> = {
  camping: ["camping-fees-australia-2026", "best-time-camping-australia"],
  "dump-points": ["dump-points-australia-guide", "camping-water-planning"],
  "rest-areas": ["sleeping-in-car-australia", "australia-road-trip-fatigue-wildlife-safety"],
};

const MAX_GUIDES = 6;
const live = new Set(articles.map((article) => article.slug));
/** The live guides a hub links to, never its rules guide (already linked under "Before you go"). */
export const hubGuides = (state: string, section: HubSection, rulesGuide: string) =>
  [...(stateGuides[state] ?? []).filter((slug) => live.has(slug)).slice(0, MAX_GUIDES - 2), ...sectionGuides[section].filter((slug) => live.has(slug))]
    .filter((slug) => slug !== rulesGuide);
