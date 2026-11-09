import { article, section } from "@/lib/drives/helpers";

export const faq = [
  ["How far is Brisbane to Airlie Beach?", "About 1,130 km on the Bruce Highway, which is roughly 13 to 14 hours of driving. Most people split it over two or three days with stops at Bundaberg, Gladstone or Rockhampton."],
  ["Is the Bruce Highway safe to drive in a campervan?", "Yes, but it is busy and has stretches of single carriageway, so take your time, rest every two hours and avoid driving at dusk when wildlife is active. Check QLDTraffic for flood and works closures."],
  ["Where should I stop between Brisbane and Airlie Beach?", "Popular stops are Hervey Bay for whale watching, Bundaberg for the rum distillery and turtle rookery at Mon Repos, Agnes Water and the Town of 1770, Gladstone, Rockhampton and Mackay."],
  ["Do I need to book a campsite in the Whitsundays?", "Yes, in the busy dry season. Airlie Beach, Proserpine and Cannonvale caravan parks fill quickly in winter school holidays, so book ahead."],
] as const;

export default article({
  slug: "brisbane-to-airlie-beach-drive",
  title: "Brisbane to Airlie Beach Drive 2026: Bruce Highway Route, Stops and Camping",
  description: "Brisbane to Airlie Beach is about 1,130 km and two to three days on the Bruce Highway. Stops at Bundaberg, 1770 and Rockhampton, fuel, flood closures, caravan parks and free camps.",
  category: "Road trips", region: "Queensland",
  places: ["Gympie", "Hervey Bay", "Bundaberg", "Agnes Water", "Gladstone", "Rockhampton", "Mackay", "Airlie Beach"],
  imageAlt: "The Whitsunday coast at Airlie Beach with the lagoon in the foreground and islands in the distance",
  intro: "Brisbane to Airlie Beach is about 1,130 km up the Queensland coast on the Bruce Highway, and it is the classic first leg to the Whitsundays. Two long days will do it, three is better, and the stops at Hervey Bay, Bundaberg and Agnes Water are good enough that many people take longer.",
  related: ["brisbane-to-cairns-drive", "east-coast-road-trip-sydney-cairns", "camping-rules-queensland", "road-trip-fuel-planning-australia", "campervan-hire-cost-australia-2026", "australia-road-trip-fatigue-wildlife-safety"],
  sections: [
    section("The route and how long it takes", ["The route is the Bruce Highway (Highway 1) the whole way, through Gympie, Maryborough, Gin Gin, Gladstone, Rockhampton, Sarina and Mackay. From Proserpine you turn east on the Airlie Beach Road for the last 25 km. It is a continuous road with towns every hour or so, which makes it easy to plan overnight stops.", "Allow two long days of about seven hours each, or three days with stops. The Brisbane to Cairns guide covers the rest of the Queensland coast if you are going further north, and the east coast road trip guide covers the whole Sydney to Cairns drive."], ["Two long days or three", "Towns every hour", "Airlie Beach is 25 km off the highway"], {
      caption: "A three day split. Distances are approximate.",
      head: ["Leg", "Distance", "Drive time", "Where to stop"],
      rows: [
        ["Brisbane to Bundaberg", "About 380 km", "About 4.5 h", "Hervey Bay or Bundaberg"],
        ["Bundaberg to Rockhampton", "About 400 km", "About 4.5 h", "Agnes Water, Gladstone or Rockhampton"],
        ["Rockhampton to Airlie Beach", "About 640 km", "About 7 h", "Mackay and Airlie Beach"],
      ],
    }),
    section("Fuel, traffic and flood closures", ["Fuel is easy to find along the Bruce Highway, with a town or roadhouse about every hour. The road is busy and has stretches of single carriageway with trucks and caravans, so rest every two hours and avoid driving at dusk and dawn when wildlife is active. The fatigue guide covers the breaks that matter.", "In the wet season, from about November to April, floods and cyclones can close sections of the highway. Check QLDTraffic before you leave and again each morning, and the wet season guides cover what to do if a road is closed."], ["Fuel every hour or so", "Rest every two hours", "Check QLDTraffic daily"]),
    section("Camping and caravan parks", ["Caravan parks carry most nights: Hervey Bay, Bundaberg, Agnes Water, Gladstone, Rockhampton, Mackay and Airlie Beach all have parks, and there are free rest areas and showgrounds along the way. The camping rules guide for Queensland covers where overnight stays are allowed, and the overnight rest area guide covers signs and local rules.", "Airlie Beach and Cannonvale are busy in the dry season and school holidays, so book ahead for the Whitsundays. If you cannot get a site at Airlie, Proserpine and Bowen have good alternatives."], ["Parks in every major town", "Showgrounds and rest areas between", "Book Airlie Beach early"]),
    { ...section("Plan the Brisbane to Airlie Beach drive in AussieCamps", ["Build the drive as a trip in AussieCamps: add Bundaberg, Rockhampton, Mackay and Airlie Beach in order and it shows the distance and drive time of each leg, with a forecast for the day you expect to arrive. AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish.", "Open the trip while you still have a connection, because map tiles, routing and weather need one. The iPhone app is free to download, with in-app purchases."], ["Add each overnight stop in order", "Forecast for each arrival day", "Open the trip before you leave Brisbane"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Bruce Highway", url: "https://en.wikipedia.org/wiki/Bruce_Highway" },
    { label: "Queensland Government: QLDTraffic", url: "https://qldtraffic.qld.gov.au/" },
    { label: "Tourism Whitsundays", url: "https://www.whitsundays.com.au/" },
  ],
});
