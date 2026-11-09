import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free in Exmouth?", "No. Freedom camping is not allowed in the town or on the Ningaloo coast, and rangers patrol. The cheapest stays are national park and station camps, which are booked and paid."],
  ["Where can you camp near Exmouth?", "Cape Range National Park has campgrounds along the Ningaloo coast, booked through Parks and Wildlife, and coastal stations such as Warroora offer paid camping south of Coral Bay. Exmouth's caravan parks suit powered sites."],
  ["When is the best time to visit Exmouth?", "April to October, when it is dry and the water is clear. Whale sharks arrive from about March to July, and humpback whales pass from August to October. Summer is hot and cyclone season runs from November to April."],
  ["How far is Exmouth from Perth?", "About 1,250 kilometres by road, so most people take two or three days. Our Perth to Exmouth drive guide has the stops."],
] as const;

export default article({
  slug: "free-camping-exmouth", publishAt: "2026-11-10",
  title: "Free Camping Near Exmouth: What to Do When There Is None",
  description: "Where to camp near Exmouth and Ningaloo: why free camping is banned, Cape Range National Park campgrounds, station stays near Coral Bay, caravan parks and the best time to go.",
  category: "Camping guides", region: "Western Australia",
  places: ["Exmouth", "Cape Range National Park", "Ningaloo Reef", "Coral Bay", "Yardie Creek"],
  imageAlt: "A sandy Ningaloo coast beach at sunset, with a low reef offshore and dunes with low scrub behind",
  intro: "Exmouth and the Ningaloo coast are some of the best camping in Western Australia, and there is no free camping to be had. Rangers patrol the town and the coast, and the Cape Range campgrounds and the stations to the south are booked and paid. The trade is a reef you can snorkel from the beach. Book early, go outside school holidays, and find your free nights on the long drive from Perth.",
  related: ["perth-to-exmouth-drive", "camping-rules-western-australia", "is-free-camping-legal-australia", "camping-fees-australia-2026", "camping-weather-safety-australia"],
  sections: [
    section("Why you cannot camp free", ["Ningaloo Reef is a World Heritage area, and the coast gets many more visitors than it has room for. Freedom camping is banned in Exmouth and on the coast, and rangers patrol the car parks and the roadsides, including at night.", "Spending the night in a legal camp also protects the reef and the dunes, and the money pays for the rangers and the toilets."], ["Freedom camping is banned", "Rangers patrol at night", "Camps protect the reef"], {
      caption: "Where to stay around Exmouth and Ningaloo.",
      head: ["Where", "Cost", "Best for", "Watch for"],
      rows: [
        ["Exmouth caravan parks", "Paid", "Power, showers, a base", "Book in winter"],
        ["Cape Range National Park campgrounds", "Booked fee", "Reef at the doorstep", "Book months ahead; basic"],
        ["Coastal stations south of Coral Bay", "Paid", "Remote beach camping", "4WD and long gravel roads"],
        ["Rest areas on the highway", "Free", "One night on the way", "No facilities"],
      ],
    }),
    section("Cape Range National Park", ["The national park on the west side of the peninsula has campgrounds close to the reef, plus Turquoise Bay, Yardie Creek and the snorkelling that Ningaloo is known for. Camping is booked and paid through Parks and Wildlife, and the sites sell out in the dry season.", "Facilities are basic, so bring your own water and shade. Fires are not allowed in the park."], ["Campgrounds near the reef", "Book months ahead", "No fires in the park"]),
    section("Stations and Coral Bay", ["South of Coral Bay, working stations such as Warroora offer paid beach camping on the Ningaloo coast. The roads are long gravel tracks, and a 4WD is a good idea. Coral Bay has caravan parks and a small shop.", "Stay on the tracks and pay the fee, because the station and the reef depend on it."], ["Paid beach camping", "Long gravel tracks", "Coral Bay has the shop"]),
    section("Free nights on the way", ["The long drive from Perth has rest areas and roadhouses where a night in the vehicle is fine and a small fee gets you a camp. Our Perth to Exmouth guide lists the stops, and our free camping guide explains the rules.", "Plan fuel and water for each leg, because the towns are far apart."], ["One night in the vehicle", "Roadhouses charge a small fee", "Plan fuel and water"]),
    section("Seasons and cyclones", ["The best time is April to October. Whale sharks swim from about March to July and humpbacks pass from August to October. Summer is hot, and cyclone season runs from November to April, when roads and parks can close at short notice.", "Check the weather warnings before you go and book flexible dates in the shoulder months."], ["April to October is best", "Whale sharks and humpbacks", "Cyclone season in summer"]),
    { ...section("Plan Ningaloo in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops.", "Station camps and caravan parks are not all in the app, so check their own pages for those. AussieCamps runs on iPhone."], ["Filter by cost", "Save places to a trip", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Parks and Wildlife Service WA: Cape Range National Park", url: "https://parks.dbca.wa.gov.au/park/cape-range-national-park" },
    { label: "Shire of Exmouth", url: "https://www.exmouth.wa.gov.au/" },
    { label: "Australia's Coral Coast: Exmouth and Ningaloo", url: "https://www.australiascoralcoast.com/" },
    { label: "Parks and Wildlife Service WA: camping", url: "https://parks.dbca.wa.gov.au/" },
  ],
});
