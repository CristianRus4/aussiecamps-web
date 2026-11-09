import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free near Melbourne?", "Yes, in state forests an hour or two from the city. Victoria allows free dispersed camping in many state forests with no booking, as long as you camp away from water and follow the fire rules. Camping inside Melbourne, on beaches or in city parks is banned."],
  ["Is free camping legal in Victoria's state forests?", "Yes, in most. Free camping is allowed in many state forests and reserves, typically up to 28 nights and at least 20 metres from water, but each area has its own closures and fire rules, so check before you go."],
  ["Where is the closest free camping to Melbourne?", "State forests in the ranges north and east of the city, such as around Toolangi, Wombat and the Yarra Ranges, are about an hour or two away. Parks Victoria and the state forest pages list what is open."],
  ["Can I sleep in my campervan in Melbourne?", "Not on the street or in a park, in most council areas. Use a holiday park on the city's edge as your base, then head out for free nights."],
] as const;

export default article({
  slug: "free-camping-near-melbourne", publishAt: "2026-11-09",
  title: "Free Camping Near Melbourne: State Forests and Cheap Camps Within Two Hours",
  description: "Where to camp for free near Melbourne: Victorian state forests within a couple of hours, the rules on water and fire, and why the city and its beaches are off limits.",
  category: "Camping guides", region: "Victoria",
  places: ["Wombat State Forest", "Yarra Ranges", "Lake Eildon", "Gippsland", "Toolangi"],
  imageAlt: "Candlebark campsite beside Lake Eildon, Victoria",
  intro: "Camping for free in Melbourne itself is not on, but the state forests an hour or two out are some of the easiest free camping in the country. Victoria lets you camp in many state forests without a booking, usually for up to 28 nights and at least 20 metres from water, and the ranges north and east of the city are full of options. Beaches, city parks and streets are signed against it, so use a holiday park for the city nights.",
  related: ["camping-rules-victoria", "can-i-camp-in-a-state-forest-in-australia", "victoria-high-country-camping", "great-ocean-road-camping-guide", "can-i-sleep-in-a-campervan-in-the-city-in-australia"],
  sections: [
    section("Why not in the city", ["Melbourne and its suburbs are covered by councils that ban camping and overnight stays in parks, beaches and streets, and rangers do patrol the bayside car parks and the Great Ocean Road trailhead towns in summer. A night in the van in the wrong place is an easy fine.", "For the city days, a caravan park or holiday park on the edge of town is the sensible base, with trams and trains to get you in. The free nights come once you are out in the ranges."], ["No camping in parks or on beaches", "Rangers patrol in summer", "Base at a holiday park"], {
      caption: "Where you can stay near Melbourne, how far it is, and the main limit.",
      head: ["Where", "Drive from the CBD", "Cost", "Main limit"],
      rows: [
        ["State forests in the ranges", "1 to 2 hours", "Free", "Away from water; check fire rules and closures"],
        ["Parks Victoria campgrounds", "1 to 3 hours", "Booked fee", "Book ahead in summer"],
        ["Council and showground camps", "1.5 to 3 hours", "Free or a small fee", "Each sets its own stay limit"],
        ["Rest areas", "Along the highways", "Free", "One night in the vehicle; none if signed"],
      ],
    }),
    section("State forest camping", ["Victoria allows free camping in many state forests and reserves with no booking, usually for up to 28 nights and at least 20 metres from a waterway. Within a couple of hours of Melbourne the options include the forests around Toolangi and the Yarra Ranges, the Wombat State Forest near Daylesford and the Gippsland forests to the east.", "Facilities are basic or none: bring water, a toilet if you are not at a signed site, and carry out all rubbish. Dogs can come to state forests but not to most national parks. Forests can close for logging, burns or fire danger, so check before you drive."], ["Free, up to 28 nights", "At least 20 m from water", "Check closures first"]),
    section("Parks Victoria campgrounds", ["The popular parks near Melbourne, Wilsons Promontory, the Grampians, Brisbane Ranges and Bunyip State Park, have campgrounds that you book and pay for, and they fill fast over summer and long weekends. A park night is not free, but it is cheap and safe, and a good fallback when a forest is closed or crowded.", "Book through Parks Victoria well ahead for school holidays, and keep a second option in case of closures."], ["Parks are booked, not free", "Fill fast in summer", "Keep a second option"]),
    section("Country towns, showgrounds and rest areas", ["Many Victorian country towns welcome travellers at a showground, a riverside reserve or a free council camp, often with a stay limit and sometimes a requirement that you are self-contained. The visitor centre or council page has the current rule.", "Rest areas on the Hume, Western and Calder highways are for a break or, where not signed against it, one night in the vehicle. No awning, no chairs out, and keep truck bays clear."], ["Read the stay limit", "Some need self-contained", "Rest area: one night in the van"]),
    section("Fire season and the weather", ["The Victorian fire danger period runs through summer, and on Total Fire Ban days no open fires are allowed, with some forests banning wood fires earlier. Check the CFA's fire danger rating each morning.", "Nights in the ranges are cold outside summer and the forests can be wet and muddy, so a rooftop or hard-floored van handles it better than a tent on soft ground."], ["Check the CFA rating", "Cold nights in the ranges", "Mud closes some tracks"]),
    { ...section("Find free camps near Melbourne in AussieCamps", ["AussieCamps maps 438 Victorian park campgrounds, 651 roadside rest areas and 181 public dump points, each with the facilities and fees the agency publishes. You can filter by cost, including free sites, save camps to a trip and see the driving distance between stops.", "State forest dispersed camping is not mapped in the app, so use Parks Victoria's pages for that. Place details are saved on the phone for use without signal, while the map, routing and weather need a connection. AussieCamps runs on iPhone."], ["Filter by cost", "Rest areas and dump points", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Parks Victoria: free camping in Victoria", url: "https://www.parks.vic.gov.au/where-to-stay/camping/free-camping-in-victoria" },
    { label: "Parks Victoria: camping", url: "https://www.parks.vic.gov.au/where-to-stay/camping" },
    { label: "CFA: total fire bans and fire danger ratings", url: "https://www.cfa.vic.gov.au/warnings-restrictions/total-fire-bans-fire-danger-ratings-and-daily-forecasts" },
    { label: "Visit Victoria: camping and caravanning", url: "https://www.visitvictoria.com/things-to-do/camping" },
  ],
});
