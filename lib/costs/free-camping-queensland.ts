import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Is there free camping in Queensland?", "Yes, but not in national parks or state forests, where every camp needs a paid permit. Free camping in Queensland means council camping areas that allow it, which are most common inland and in the outback, and roadside rest areas, where you can stop for up to 20 hours unless a sign says otherwise."],
  ["Can you sleep at rest areas in Queensland?", "Yes. General and recreational vehicles can stop at a rest area for up to 20 hours unless a sign says otherwise. The state says rest areas are not camping sites, so sleep in the vehicle and move on, and keep out of heavy-vehicle rest areas, which are for truck drivers."],
  ["How much does it cost to camp in a Queensland national park?", "From 1 July 2026 a camping permit costs $7.75 per person per night, or $31 for a family, and children under five camp free. It is not free, but it is a low fee, and permits are booked before you arrive."],
  ["Can I free camp on the beach in Queensland?", "Generally not. Beach camping on K'gari, Bribie Island, Mulgumpin, Minjerribah and at Cooloola is in parks and recreation areas that need a camping permit and a vehicle access permit, and towns such as Cairns ban camping on their beaches, parks and roadsides."],
] as const;

export default article({
  slug: "free-camping-queensland", publishAt: "2026-11-09",
  title: "Free Camping in Queensland 2026: Council Camps, Rest Areas and Cheap Park Sites",
  description: "Where you can camp for free in Queensland: council camps, the outback, 20-hour rest areas and the roadside rule, plus park permits at $7.75 a night when free runs out.",
  category: "Camping guides", region: "Queensland",
  places: ["Matilda Way", "Warrego Highway", "Peak Creek rest area", "Boulia", "Cairns"],
  imageAlt: "A picnic shelter and toilet block on red gravel at the Peak Creek rest area north of Boulia, outback Queensland, where overnight stops are allowed",
  intro: "Queensland has plenty of free camping, but none of it is in parks or forests: every camp there needs a permit, at $7.75 per person a night in 2026. Free camps are run by councils, mostly inland and in the outback, where many towns keep a riverside camping area to bring travellers in. Roadside rest areas let you stop for up to 20 hours unless a sign says otherwise, which covers a night's sleep on a long drive. The coast is different: big tourist towns such as Cairns ban camping on council land.",
  related: ["camping-rules-queensland", "is-free-camping-legal-australia", "can-i-stay-overnight-at-a-rest-area-in-australia", "queensland-outback-way", "best-free-camping-apps-australia"],
  sections: [
    section("Why parks are not free in Queensland", ["In most states the cheapest night is in a state forest. In Queensland it is not: Queensland Parks and Wildlife runs about 525 camping areas in its parks, forests and recreation areas, and every one of them needs a permit booked and paid before you arrive. That includes bush camps with nothing more than a clearing.", "The fee is low, $7.75 per person or $31 for a family a night from 1 July 2026, with under-fives free, so a park camp is still a cheap night when no free site is close. Book online through the Queensland National Parks Booking Service, up to 12 months ahead."], ["Every park camp needs a permit", "$7.75 a person a night", "Book before you arrive"], {
      caption: "Free and cheap places to camp in Queensland, and the main limit at each.",
      head: ["Where", "Cost", "Stay", "Watch for"],
      rows: [
        ["Council free camps", "Free or a small fee", "The limit on the sign, often a few nights", "Some take self-contained vehicles only"],
        ["Roadside rest areas", "Free", "Up to 20 hours unless signed", "Not camping sites; truck bays are for trucks"],
        ["Showgrounds and donation camps", "Small fee or donation", "Set by the operator", "Closed during shows and events"],
        ["National parks and state forests", "$7.75 a person a night", "Booked permit", "No free camping at all"],
      ],
    }),
    section("Outback council camps", ["The further west you drive, the more free camping you find. Councils along the Matilda Way, the Warrego Highway and the roads into the Channel Country keep camping areas beside rivers, creeks and waterholes, some free and some asking a few dollars or a donation, because a camp full of travellers keeps the bakery, pub and fuel station busy.", "Each council sets its own stay limit, often a few nights, and some ask for a self-contained vehicle. Facilities range from toilets, water and a dump point to nothing at all. The visitor information centre in each town knows the current rules, and many towns post them at the camp entrance."], ["Inland towns want campers", "Stay limits vary by council", "Ask at the visitor centre"]),
    section("Rest areas and the 20-hour rule", ["Transport and Main Roads lets general and recreational vehicles stop at a rest area for up to 20 hours unless a sign says otherwise. That makes Queensland one of the clearest states for a night's sleep on a long drive, but the department is just as clear that rest areas are not camping sites: no tents spread across the grass, no week-long stays.", "Heavy-vehicle rest areas are for truck drivers only, so leave them free. Many outback rest areas have a shelter and a toilet, and some, like Peak Creek north of Boulia, say on their sign that overnight stops are allowed. Arrive before dark to get a spot away from the road."], ["Up to 20 hours unless signed", "Not a camping site", "Keep out of truck rest areas"]),
    section("The roadside and the coast", ["Pulling over on the verge is legal only in narrow cases. Camping on a state-controlled road is allowed only to manage fatigue between 4pm and 8am, outside a built-up area, at least 200 metres from any kerb and 9 metres from the traffic lane, where no sign bans it and never on a motorway or toll road, with no fire or generator.", "The coast is much stricter than the outback. Cairns bans camping on council land, including roadsides, the Esplanade, parks, car parks and beaches, and other tourist towns patrol their foreshores. Along the coast, plan on park camps, showgrounds and holiday parks, and save the free nights for inland."], ["Verge: fatigue only, 4pm to 8am", "Cairns bans council-land camping", "Free nights are inland"]),
    section("Heat, crocodiles and the wet season", ["Estuarine crocodiles live from Gladstone north and around the Gulf, in rivers, lagoons and swamps far inland as well as the sea. At a riverside free camp in croc country, pitch well back from the water, never swim or wade, and read every warning sign.", "Queensland's cyclone season runs from 1 November to 30 April, and wet-season rain can cut outback roads for days. The free camps of the west are at their best from April to September, when nights are cool and the roads are dry. Queensland declares local fire bans rather than Total Fire Bans, and they apply to camps too."], ["Croc country: Gladstone north", "Cyclone season Nov to April", "Outback best April to September"]),
    { ...section("Find free camps in AussieCamps", ["AussieCamps maps 517 Queensland park and forest campgrounds, 1,688 roadside rest areas and 324 public dump points, with each place's facilities and fees as the agency publishes them. You can filter by cost, including free sites, and build a trip that adds up the distance between stops, which helps on long outback legs.", "Place details are saved on the phone for use without signal. The map, routing and weather need a connection, and AussieCamps runs on iPhone."], ["1,688 rest areas", "Filter by cost", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Queensland Parks: camping bookings", url: "https://parks.qld.gov.au/camping/bookings" },
    { label: "Queensland Parks: camping fees and FAQ", url: "https://parks.qld.gov.au/camping/frequently-asked-questions" },
    { label: "Queensland Government: rest areas", url: "https://www.qld.gov.au/transport/safety/holiday-travel/stops/rest" },
    { label: "Transport Infrastructure (State-controlled Roads) Regulation 2017", url: "https://www.legislation.qld.gov.au/view/whole/html/inforce/current/sl-2017-0169" },
    { label: "Cairns Regional Council: camping and caravans", url: "https://www.cairns.qld.gov.au/experience-cairns/parks-beaches-community-venues/camping-and-caravan" },
    { label: "Queensland Fire Department: fire bans and restrictions", url: "https://www.fire.qld.gov.au/safety-education/using-fire-outdoors/fire-bans-and-restrictions" },
  ],
});
