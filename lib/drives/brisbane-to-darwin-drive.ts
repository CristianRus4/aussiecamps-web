import { article, section } from "@/lib/drives/helpers";

export const faq = [
  ["How far is Brisbane to Darwin by road?", "About 3,400 km by the Warrego, Landsborough, Barkly and Stuart Highways via Mount Isa and Tennant Creek. It is roughly 40 hours of driving, so most people take six to ten days."],
  ["Which route is best from Brisbane to Darwin?", "The usual route goes west through Charleville and Longreach or Cloncurry to Mount Isa, then across the Barkly Tableland to the Stuart Highway at Three Ways and north through Katherine. The east coast route via Cairns is longer and slower."],
  ["Are there long gaps without fuel on this drive?", "Yes. The Barkly Highway and the Stuart Highway north of Tennant Creek have long stretches between roadhouses, so fill up at every one and carry water."],
  ["Can I drive Brisbane to Darwin in a 2WD campervan?", "Yes. The route is sealed all the way, so a standard campervan or car is fine. Watch for road trains, livestock and wildlife."],
] as const;

export default article({
  slug: "brisbane-to-darwin-drive",
  title: "Brisbane to Darwin Drive 2026: Outback Route via Mount Isa and the Barkly, Fuel and Camping",
  description: "Brisbane to Darwin is about 3,400 km and six to ten days across the Queensland outback and the Barkly Tableland. Route, fuel gaps, road trains, caravan parks and free camps.",
  category: "Road trips", region: "Queensland and the Northern Territory",
  places: ["Toowoomba", "Charleville", "Longreach", "Mount Isa", "Camooweal", "Barkly Roadhouse", "Tennant Creek", "Katherine", "Darwin"],
  imageAlt: "A road train on the Barkly Highway crossing the flat grass plains of the outback",
  intro: "Brisbane to Darwin is about 3,400 km across the heart of the outback, from Queensland's coast to the Top End. It is a big, quiet road with long gaps between towns, and it rewards a few extra days at Longreach, Mount Isa and Katherine rather than a straight-through race.",
  related: ["townsville-to-mount-isa-drive", "queensland-outback-way", "cairns-to-darwin-drive", "darwin-to-alice-springs-drive", "driving-with-road-trains-australia", "road-trip-fuel-planning-australia"],
  sections: [
    section("The route and the days it takes", ["The usual route leaves Brisbane on the Warrego Highway through Toowoomba and Roma, then takes the Landsborough Highway through Charleville, Longreach and Winton to Cloncurry and Mount Isa. West of Mount Isa the Barkly Highway crosses the Barkly Tableland to Three Ways, where it meets the Stuart Highway, and from there you turn north through Daly Waters and Katherine to Darwin.", "Allow six days at a steady pace, or ten if you want to see Longreach, Mount Isa and Katherine Gorge properly. The Townsville to Mount Isa guide covers a northern alternative, and the Cairns to Darwin guide covers a route along the Gulf."], ["Six days at seven hours a day", "Ten if you want to see things", "Mount Isa is the natural halfway stop"], {
      caption: "A realistic seven day split. Distances are approximate.",
      head: ["Leg", "Distance", "Drive time", "Where to stop"],
      rows: [
        ["Brisbane to Charleville", "About 740 km", "About 8.5 h", "Roma or Charleville"],
        ["Charleville to Longreach", "About 520 km", "About 6 h", "Longreach"],
        ["Longreach to Mount Isa", "About 650 km", "About 7.5 h", "Winton, Cloncurry or Mount Isa"],
        ["Mount Isa to Barkly Roadhouse", "About 570 km", "About 6.5 h", "Camooweal or Barkly Roadhouse"],
        ["Barkly Roadhouse to Katherine", "About 760 km", "About 8.5 h", "Tennant Creek or Daly Waters"],
        ["Katherine to Darwin", "About 320 km", "About 3.5 h", "Darwin"],
      ],
    }),
    section("Fuel, water and road trains", ["Fuel stops are widely spaced on the Barkly and Stuart Highways, and a long stretch between Camooweal and Barkly Roadhouse has nothing in between. Fill up at every roadhouse and carry spare water and food in case of a delay. The road trip fuel planning guide covers range for a campervan.", "Road trains, the very long trucks that run on these roads, need a lot of room to stop and overtake. The road trains guide explains how to pass them and when to pull over, and the fatigue guide covers the breaks that matter on a drive this long."], ["Fill up at every roadhouse", "Carry spare water and food", "Give road trains plenty of room"]),
    section("Camping on the Brisbane to Darwin drive", ["Caravan parks and roadhouse camps carry most nights, with free rest areas and bush camps between them. Charleville, Longreach, Winton, Mount Isa, Tennant Creek and Katherine all have parks, and the camping rules guides for Queensland and the Northern Territory explain where overnight stays are allowed on public land.", "Check the overnight rest area guide for the common rest area rules. In the dry season, from about May to September, outback camps fill, so book Longreach, Mount Isa and Katherine early."], ["Parks in every major town", "Free rest areas between them", "Book popular camps in the dry season"]),
    { ...section("Plan the Brisbane to Darwin drive in AussieCamps", ["Build the drive as a trip in AussieCamps: add Charleville, Longreach, Mount Isa, Tennant Creek and Katherine in order and it shows the distance and drive time of each leg, with a forecast for the day you expect to arrive. AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish.", "Open the trip while you still have a connection, because map tiles, routing and weather need one and the outback has little. The iPhone app is free to download, with in-app purchases."], ["Add each overnight stop in order", "Forecast for each arrival day", "Open the trip before the long legs"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Barkly Highway", url: "https://en.wikipedia.org/wiki/Barkly_Highway" },
    { label: "Wikipedia: Landsborough Highway", url: "https://en.wikipedia.org/wiki/Landsborough_Highway" },
    { label: "Queensland Government: QLDTraffic", url: "https://qldtraffic.qld.gov.au/" },
    { label: "Northern Territory Government: road report", url: "https://dipl.nt.gov.au/" },
  ],
});
