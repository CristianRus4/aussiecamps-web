import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Where can you camp in the Pilbara apart from Karijini?", "At Millstream Chichester National Park, Cape Keraudren on the coast south of Port Hedland, roadhouses such as Pardoo, caravan parks in Karratha, Port Hedland and Newman, and rest areas on the highways."],
  ["Is Millstream Chichester National Park worth visiting?", "Yes. Python Pool and Chinderwarriner Pool are cool, spring-fed swimming spots in red country, and the park has campgrounds with basic facilities. Check the park page for bookings and road conditions."],
  ["When is the best time to camp in the Pilbara?", "May to September. Summer is extremely hot, and the cyclone season from about November to April can bring flooding and road closures."],
  ["Can I free camp in the Pilbara?", "Only at signed rest areas where it is allowed, usually for a night or two. Mining and pastoral land is private, so do not pull off onto it."],
] as const;

export default article({
  slug: "pilbara-camping-beyond-karijini", publishAt: "2026-11-10",
  title: "Camping in the Pilbara Beyond Karijini: Millstream, Cape Keraudren and Roadhouse Stops",
  description: "Where to camp in the Pilbara beyond Karijini: Millstream Chichester National Park, Cape Keraudren, Port Hedland, Karratha, Marble Bar, roadhouses, the season and cyclone risk.",
  category: "Camping guides", region: "Western Australia",
  places: ["Millstream Chichester National Park", "Cape Keraudren", "Karratha", "Port Hedland", "Marble Bar"],
  imageAlt: "Caravans and tents under trees and palms at the Eighty Mile Beach caravan park on the north-west coast of Western Australia",
  intro: "The Pilbara is more than Karijini. Millstream Chichester National Park has spring-fed pools in red country, Cape Keraudren is a wild coastal camp, and towns such as Karratha, Port Hedland and Marble Bar make useful bases between long, empty stretches of highway. It is hot, remote and busy with mining traffic, so go between May and September, book where you can and plan fuel and water at every stop.",
  related: ["karijini-national-park-camping", "perth-to-broome-road-trip", "cyclone-flood-season-camping-australia", "driving-with-road-trains-australia", "camping-rules-western-australia"],
  sections: [
    section("Where to camp", ["The Pilbara has a good mix of camps, from national park campgrounds to caravan parks. Millstream Chichester National Park, near Karratha, has campgrounds close to the pools and in the ranges, and Cape Keraudren Nature Reserve, south of Port Hedland, has coastal camps on the edge of the Indian Ocean.", "Roadhouses such as Pardoo and Auski, and caravan parks in Karratha, Port Hedland, Newman and Tom Price, give you showers, power and a meal. Rest areas along the highways are free for a night or two where signed."], ["Park campgrounds and coastal camps", "Caravan parks in the towns", "Rest areas where signed"], {
      caption: "Camping options in the Pilbara beyond Karijini.",
      head: ["Where", "Cost", "Booking", "Main limit"],
      rows: [
        ["Millstream Chichester National Park", "Park camp fee", "Check the park page", "Basic facilities, hot in summer"],
        ["Cape Keraudren Nature Reserve", "Camp fee", "Check the park page", "Exposed, no services"],
        ["Karratha and Port Hedland caravan parks", "Paid", "Recommended", "Busy with mining workers"],
        ["Pardoo and other roadhouses", "Paid", "Not needed", "Basic, fuel on site"],
        ["Highway rest areas", "Free", "None", "Stay limits as signed"],
      ],
    }),
    section("Millstream and the coast", ["Millstream Chichester National Park has Python Pool, a cool swimming hole under red cliffs, and the Millstream pools fed by springs on the Fortescue River. The roads in are mostly gravel and passable in a standard vehicle in dry weather, but check conditions after rain.", "On the coast, Cape Keraudren is a remote fishing and beach camp with no services, so bring water and everything you need. Port Hedland and Karratha are the service hubs, and Cossack, a ghost town near Karratha, makes an easy half day."], ["Python Pool for swimming", "Cape Keraudren is remote", "Cossack ghost town near Karratha"]),
    section("Marble Bar and the inland towns", ["Marble Bar is known as one of the hottest towns in Australia, with Chinaman Pool and Doolena Gorge close by. Newman and Tom Price are the main inland bases, with caravan parks, fuel and supplies on the way to Karijini.", "Distances are long and traffic includes road trains and mining vehicles. Read our guide to driving with road trains before you set off."], ["Marble Bar for the heat", "Newman and Tom Price as bases", "Share the road with road trains"]),
    section("Season, heat and cyclones", ["May to September is the season, with warm days and cool nights. Summer is extremely hot, and from about November to April the Pilbara can see cyclones and flooding that close roads for days. Our cyclone and flood season guide explains what to watch.", "Carry at least 10 litres of water per person per day, fill the tank at every town and tell someone your route. Mobile coverage is good in the towns and patchy elsewhere."], ["May to September", "Cyclone season November to April", "10 litres of water per person a day"]),
    section("Fuel, supplies and planning", ["Fuel is available at Karratha, Port Hedland, Newman, Tom Price, Marble Bar and the roadhouses on the highways, but distances between towns are long. Stock food in the bigger towns, where prices are lower than at the roadhouses.", "Combine the Pilbara with the road to Broome or Exmouth, and see our Perth to Broome and Karijini guides for the bigger picture."], ["Fuel at every town", "Stock up in the bigger towns", "Link with Broome or Exmouth"]),
    { ...section("Plan the Pilbara in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops, which shows the long gaps between fuel in the Pilbara.", "Check park pages and road conditions before you drive. AussieCamps runs on iPhone."], ["See the distance between stops", "Filter by cost", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Parks and Wildlife Service WA: Millstream Chichester National Park", url: "https://exploreparks.dbca.wa.gov.au/park/millstream-chichester-national-park" },
    { label: "Parks and Wildlife Service WA: Cape Keraudren Nature Reserve", url: "https://exploreparks.dbca.wa.gov.au/" },
    { label: "Main Roads Western Australia: road conditions", url: "https://www.mainroads.wa.gov.au/" },
    { label: "Australia's North West: Pilbara", url: "https://www.australiasnorthwest.com/" },
  ],
});
