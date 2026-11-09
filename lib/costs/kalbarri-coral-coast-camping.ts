import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What is the Coral Coast in Western Australia?", "The stretch of coast north of Perth, from Cervantes and the Pinnacles through Geraldton, Kalbarri and Denham to Coral Bay and Exmouth, with Ningaloo Reef at the far end. It is the classic Perth to Exmouth road trip."],
  ["Where can I camp at Kalbarri?", "In caravan parks in town, and at park campgrounds in Kalbarri National Park, where the camps are basic and booked. There is no free camping in the park or on the beaches."],
  ["Is there free camping on the Coral Coast?", "Only at signed rest stops, where you can stay up to 24 hours, and at some shire camps. Park camps and station stays are paid."],
  ["When is the best time to drive the Coral Coast?", "April to October. Summer is very hot and the gorges close in the heat."],
] as const;

export default article({
  slug: "kalbarri-coral-coast-camping", publishAt: "2026-11-09",
  title: "Kalbarri and the Coral Coast: Camping Along WA's North-West Coast",
  description: "Camping at Kalbarri and along the Coral Coast: the Pinnacles, Geraldton, Kalbarri National Park, Shark Bay and Ningaloo, with free rest stops, park camps and the best season.",
  category: "Camping guides", region: "Western Australia",
  places: ["Kalbarri National Park", "Pinnacles", "Shark Bay", "Coral Bay", "Ningaloo"],
  imageAlt: "A sandy Ningaloo coast beach at sunset, with a low reef offshore and dunes with low scrub behind",
  intro: "The Coral Coast is the road north from Perth to Exmouth, and Kalbarri is its best stop for gorges, river and coast. You can camp in caravan parks in the towns, at park campgrounds with a booking, and at signed rest stops for a free night, but there is no free camping on the beaches. Go between April and October, fuel up at every town and keep an eye out for the long gaps.",
  related: ["perth-to-exmouth-drive", "perth-to-broome-road-trip", "camping-rules-western-australia", "can-i-stay-overnight-at-a-rest-area-in-australia", "karijini-national-park-camping"],
  sections: [
    section("The route", ["The Coral Coast follows the Brand and North West Coastal highways from Perth to Cervantes, Geraldton, Kalbarri, Shark Bay, Carnarvon, Coral Bay and Exmouth, roughly 1,250 kilometres in all. Kalbarri sits about 570 kilometres north of Perth, a day's drive.", "The big gaps are north of Geraldton and between Carnarvon and Coral Bay, so fuel and water up at each town. Our Perth to Exmouth drive guide covers the route stage by stage."], ["About 1,250 km Perth to Exmouth", "Kalbarri is a day north of Perth", "Fuel at every town"]),
    section("Kalbarri", ["Kalbarri National Park has the gorges of the Murchison River, Nature's Window and the Skywalk. Camps in town are caravan parks, and park campgrounds are basic, booked and paid. Walks are best in the cool morning, and gorge walks close in extreme heat.", "The coast at Kalbarri has surf, cliffs and pelican feeding at the river mouth."], ["Gorges, Nature's Window, Skywalk", "Caravan parks in town", "Gorge walks close in heat"], {
      caption: "Where to stay on the Coral Coast and the main limit at each.",
      head: ["Where", "Cost", "Booking", "Main limit"],
      rows: [
        ["Caravan parks in the towns", "Paid", "Recommended", "Fill in school holidays"],
        ["Park campgrounds", "Park camp fee", "Required", "Basic; book ahead"],
        ["Station stays", "Paid", "Recommended", "Limited facilities"],
        ["Signed rest stops", "Free", "None", "24 hours where signed"],
      ],
    }),
    section("Shark Bay, Ningaloo and the north", ["Shark Bay has Monkey Mia's dolphins and the shell beaches, and Francois Peron National Park has 4WD camps. At the end of the road, Coral Bay and Exmouth sit by Ningaloo Reef, where you can snorkel off the beach and swim with whale sharks on tours.", "Camping inside the Ningaloo and Cape Range area is booked and paid, and the camps fill in school holidays."], ["Monkey Mia and Shark Bay", "Ningaloo snorkelling", "Book Cape Range camps early"]),
    section("Free stops and the season", ["Signed rest stops along the highways allow a night in the vehicle, up to 24 hours. Some shires also run low-cost camps. The best season is April to October, when the weather is dry and mild, and whale shark and humpback season come mid year. Summer is very hot and cyclone-prone in the north."], ["Rest stops: 24 hours", "Best: April to October", "Summer is hot"]),
    { ...section("Plan the Coral Coast in AussieCamps", ["AussieCamps maps 260 Western Australian park campgrounds and 1,661 roadside rest areas, with each place's facilities and fees as the agency publishes them. You can build a trip with ordered stops and see the driving distance for each leg, which shows the long gaps before you leave.", "Place details are saved on the phone for use without signal, which matters on WA's empty stretches. The map, routing and weather need a connection, and AussieCamps runs on iPhone."], ["See each leg's distance", "Filter by cost", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Parks and Wildlife Service WA: Kalbarri National Park", url: "https://exploreparks.dbca.wa.gov.au/park/kalbarri-national-park" },
    { label: "Australia's Coral Coast", url: "https://www.australiascoralcoast.com/" },
    { label: "Main Roads Western Australia: road conditions", url: "https://www.mainroads.wa.gov.au/" },
    { label: "Parks and Wildlife Service WA: Ningaloo", url: "https://exploreparks.dbca.wa.gov.au/" },
  ],
});
