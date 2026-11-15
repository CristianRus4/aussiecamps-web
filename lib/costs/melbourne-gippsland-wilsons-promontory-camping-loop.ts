import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["How long is a Melbourne to Gippsland and Wilsons Promontory loop?", "Six to eight days suits most campers. That gives two nights at the Prom, a night on the coast near Port Albert, a night at Walhalla and two or three on the Gippsland Lakes."],
  ["Do I need to book Tidal River at Wilsons Promontory?", "Yes. Tidal River is the main campground, and summer sites must be booked ahead through Parks Victoria. The busiest summer dates have been allocated by ballot, so check the booking page early."],
  ["Can I take a caravan to Walhalla?", "Check the road first. The roads into Walhalla are narrow and winding, and some are not suited to long caravans. Many campers leave the van at a park in a nearby town and visit for the day."],
  ["Can I take my dog to Wilsons Promontory?", "Not into the national park, because pets are not allowed. Plan a dog-friendly stay on the coast or the lakes, and see our guide to camping with dogs."],
] as const;

export default article({
  slug: "melbourne-gippsland-wilsons-promontory-camping-loop",
  title: "Melbourne to Gippsland and Wilsons Promontory camping loop",
  description: "A six to eight day camping loop from Melbourne: Wilsons Promontory and Tidal River, Port Albert, Walhalla and the Gippsland Lakes at Paynesville, Metung and Lakes Entrance, then home.",
  category: "Road trips", region: "Victoria",
  places: ["Melbourne", "Wilsons Promontory", "Tidal River", "Port Albert", "Walhalla", "Paynesville", "Metung", "Lakes Entrance"],
  imageAlt: "Tents and cars at the Tidal River campground in Wilsons Promontory National Park, Victoria, under Mount Oberon",
  intro: "East of Melbourne, Gippsland offers a mountain, a coast and a lake system within a few hours' drive. A loop takes in Wilsons Promontory and its beaches, the fishing ports of Port Albert and Port Welshpool, the old gold town of Walhalla, and the Gippsland Lakes, before the Princes Highway brings you home. Book Tidal River first, because that is the part of the trip that fills.",
  related: ["free-camping-victoria", "camping-rules-victoria", "victoria-high-country-camping", "free-camping-near-melbourne", "camping-with-dogs-australia", "school-holidays-australia-2027"],
  sections: [
    section("The loop at a glance", ["The route heads south-east on the South Gippsland Highway, circles the Prom, swings north to the mountains and then east to the lakes. Drives are mostly two or three hours or less, so you can stop often."], ["Book Tidal River first", "Mix coast and mountains", "Stop often"], { caption: "A seven-day loop from Melbourne, drive times approximate.", head: ["Day", "Stop", "Highlights"], rows: [
      ["1", "Wilsons Promontory", "About three hours from Melbourne; set up at Tidal River"],
      ["2", "Wilsons Promontory", "Squeaky Beach, Norman Beach and a lookout walk"],
      ["3", "Port Albert or Port Welshpool", "Fish and chips, the harbour and flat coast"],
      ["4", "Walhalla", "Historic gold town in a steep valley, via Traralgon or Moe"],
      ["5", "Paynesville or Metung", "Boats, the Raymond Island ferry and lake views"],
      ["6", "Lakes Entrance", "Ocean beach, footbridge and fishing boats"],
      ["7", "Melbourne", "Princes Highway, about four hours, or back by Baw Baw"],
    ] }),
    section("Wilsons Promontory and Tidal River", ["Wilsons Promontory is about three hours from Melbourne, and Tidal River is the base for most visitors. Sites, huts and units must be booked ahead through Parks Victoria for summer, and the busiest dates have been allocated by ballot, so check the booking page as soon as you know your dates. Outside summer you will have more choice and fewer crowds.", "There is no fuel at Tidal River, so fill up before you go. Fires, pets, drones and generators are not allowed. Take the walk to Squeaky Beach and Picnic Bay, or climb to the lookout above Tidal River. Arrive early on busy days because the car park fills by mid-morning."], ["Fill up with fuel first", "No pets or fires", "Arrive before 10am"]),
    section("Port Albert and Port Welshpool", ["After the Prom, the coast turns flat and quiet. Port Albert is a historic fishing village with a harbour, a maritime museum and fish and chips by the water. Port Welshpool has a long jetty and a small maritime museum. Both have caravan parks for a night, and the nearby coast has some basic camps in the coastal parks.", "Fuel and supplies are easy at Foster, Yarram and Sale. The mosquitoes and March flies can be thick near the wetlands, so pack repellent and cover up at dusk."], ["Caravan parks for the night", "Pack insect repellent", "Fuel at Foster or Yarram"]),
    section("Walhalla and the mountains", ["Walhalla sits in a narrow valley, with historic buildings, a tramway cutting and a cemetery on the hillside. It is a small place with caravan parks and bush camps nearby, and nights are cool even in summer. Roads into town are narrow and steep, so towing a long caravan needs care, and many campers leave the van outside and drive in.", "On the way back you can take the mountain roads from Walhalla towards Erica and Noojee, with forest drives and waterfalls, if you have time. Check with Parks Victoria for road closures before you go, and carry a spare tyre."], ["Check road suitability", "Nights are cool", "Spare tyre for gravel"]),
    section("Gippsland Lakes: Paynesville, Metung and Lakes Entrance", ["The Gippsland Lakes are a huge system of saltwater lagoons separated from the sea by Ninety Mile Beach. Paynesville is a boating town with a car ferry to Raymond Island, where you can see koalas in the gums. Metung sits on a quiet peninsula, with a village green and walks. Lakes Entrance has the ocean beach, the footbridge and busy waterfront.", "There are caravan parks in all three, and book ahead for summer and school holidays. Lakes National Park, near Loch Sport, has quiet bush camps on the lake shore and is a good place to see birds and kangaroos. Take drinking water and expect no phone signal in the quieter parts."], ["Koalas on Raymond Island", "Book summer parks early", "Lakes National Park camps"]),
    section("Getting home", ["The Princes Highway from Lakes Entrance to Melbourne is about four hours, through Bairnsdale, Sale and the Latrobe Valley. Fuel and rest stops are in the larger towns. Fatigue is a risk on the last stretch, so stop and swap drivers.", "A second option is to return via the high country, through the Baw Baw ranges, which adds time and winding roads. Our Victoria High Country guide has more on that side of the state."], ["Stop and swap drivers", "Fuel in Sale or Traralgon", "Avoid night driving"]),
    section("When to go and what to book", ["Summer is the most popular time for the Prom and the lakes, and school holidays fill every campground. Autumn is milder, drier and quieter, with fewer biting insects. Winter is cool and wet but good for walks, and the mountains can be chilly at night.", "Check fire bans and bushfire danger in summer, because Gippsland has a long bushfire history, and know your evacuation route. Our camping rules for Victoria cover fires and fees."], ["Autumn is quieter", "Check fire danger ratings", "Book summer early"]),
    { ...section("Plan the Gippsland loop in AussieCamps", ["Build the loop as a trip: Add stop for Tidal River, Port Albert, Walhalla, Paynesville, Metung and Lakes Entrance, with Start at Home and Finish at Home. Each leg shows driving distance and time, and each stop has dates, notes and weather. Add a To-do list for the bookings, tick off stops as you visit them and use Sync to calendar for the dates.", "Use filters for Cost, Dogs allowed and Popular features such as toilets, drinking water and showers, and use Nearest to see the closest campgrounds from where you are. Share the trip with Collaborate so two people edit it live through iCloud, or Send copy as a web link. The whole directory is inside the app, so search and place details work with no signal. AussieCamps is an iPhone app with no account and no ads."], ["Add stop for each night", "Filter for dogs and showers", "Sync trip to calendar"]), cta: true },
  ],
  sources: [
    { label: "Parks Victoria: Wilsons Promontory National Park", url: "https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park" },
    { label: "Parks Victoria: Lakes National Park", url: "https://www.parks.vic.gov.au/places-to-see/parks/lakes-national-park" },
    { label: "Visit Victoria", url: "https://www.visitvictoria.com/" },
    { label: "VicTraffic", url: "https://traffic.vicroads.vic.gov.au/" },
    { label: "Country Fire Authority", url: "https://www.cfa.vic.gov.au/" },
  ],
});
