import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["How long is the South Coast Track?", "About 85 kilometres from Melaleuca to Cockle Creek, usually walked in 6 to 8 days. It is a good deal harder than the Overland Track and is for experienced, self-sufficient walkers."],
  ["Are there huts on the South Coast Track?", "Very few. The only huts are at the Melaleuca end, so carry a tent, a fuel stove and all your food for the whole walk. Do not plan on a hut bed."],
  ["How do you get to Melaleuca?", "Most walkers fly in from Cambridge Aerodrome near Hobart on a light plane, then walk out to Cockle Creek, which has a road and a campground. Flights depend on the weather, so allow spare days at both ends."],
  ["Do I need to book the South Coast Track?", "There is no booking fee like the Overland Track, but you need a valid parks pass, and you should register your walk in the intentions book at the start. Check the Parks and Wildlife Service page for the current rules and track conditions."],
] as const;

export default article({
  slug: "south-coast-track-tasmania", publishAt: "2026-11-18",
  title: "South Coast Track, Tasmania 2026-27: Huts, Permits, Flights and Logistics",
  description: "Walking the South Coast Track from Melaleuca to Cockle Creek: the flight in, the parks pass, mud, river crossings, the New River Lagoon boat and the best season.",
  category: "Camping guides", region: "Tasmania",
  places: ["South Coast Track", "Melaleuca", "Cockle Creek", "New River Lagoon", "Southwest National Park", "Port Davey"],
  imageAlt: "Calm water and distant ranges on the South Coast Track, Southwest National Park, Tasmania",
  intro: "The South Coast Track is the wild cousin of the Overland Track. It runs about 85 kilometres across the south of Tasmania, from the airstrip at Melaleuca to the end of the road at Cockle Creek, over long beaches, button grass plains, coastal ridges and a lot of mud. You fly in on a light plane, you carry a tent because there are almost no huts, and you cross rivers and a lagoon by boat along the way. It is a serious walk with no phone signal, and the reward is a week of country that few people see.",
  related: ["best-multi-day-walks-australia-2026-27", "overland-track-2026-27", "hut-stays-australia", "camping-rules-tasmania", "tasmania-camping-loop", "overland-three-capes-booked-out-alternatives"],
  sections: [
    section("The walk at a glance", ["The track starts at Melaleuca, a remote airstrip on Bathurst Harbour, and finishes at Cockle Creek, about two hours' drive south of Hobart. Most people walk it from west to east, because the flight takes you to the start and Cockle Creek has a road and a campground for the finish.", "It takes 6 to 8 days, and walkers should add spare days for weather. It is meant for experienced, fully self-sufficient walkers, and the tracks can be muddy, steep and slow-going."], ["About 85 km, 6 to 8 days", "Fly in, walk out", "Allow spare days for weather"], {
      caption: "The South Coast Track at a glance.",
      head: ["Detail", "What to know"],
      rows: [
        ["Route", "Melaleuca to Cockle Creek, about 85 km"],
        ["Time", "6 to 8 days, plus spare days"],
        ["Sleeping", "Tent, with only a couple of huts near Melaleuca"],
        ["Access", "Light plane to Melaleuca, road to Cockle Creek"],
        ["Pass", "Valid parks pass for Tasmania's national parks"],
        ["Best season", "Summer, roughly December to March"],
      ],
    }),
    section("Flying in and getting out", ["Most walkers fly from Cambridge Aerodrome near Hobart to Melaleuca on a small plane, which is a short and spectacular flight over the Southwest wilderness. The flight is weather dependent, and a delay of a day or two is not unusual, so do not tie yourself to a tight schedule.", "At the other end, Cockle Creek is a long drive from Hobart, so arrange a lift, a car shuffle or a bus booking before you go. A few walkers instead start at Cockle Creek and fly out from Melaleuca, but the weather risk is then at the end of the trip, when your return plans may depend on it."], ["Book the flight in advance", "Allow spare days both ends", "Arrange the Cockle Creek lift early"]),
    section("Huts, camps and what to carry", ["There are very few huts on the track, and the ones near Melaleuca are not a plan for the walk. Carry a strong, storm-proof tent, a sleeping bag and mat, a fuel stove and food for the whole trip plus a couple of extra days. The campsites are simple, set by the track, and many are sheltered spots near a beach or creek.", "Fuel stoves only: campfires are not allowed in this part of the World Heritage Area. Boil or treat creek water, because it is often tea-coloured but safe once treated, and pack out every bit of rubbish. A parks pass is needed for the national park, and it is wise to register your walk in the intentions book at the start."], ["Storm-proof tent essential", "Fuel stove only", "Treat or boil creek water"]),
    section("Mud, rivers and the New River Lagoon", ["The South Coast Track is famous for its mud, which can be knee deep on the button grass plains, and for its rivers, which rise fast after rain. Gaiters and a dry change of clothes are worth carrying, and a day lost waiting for a creek to drop is common. Never cross a flooded river, because waiting is safer.", "Near New River Lagoon, walkers cross by boat. There is a small dinghy at the marked crossing, and you row across to reach the next campsite. Follow the instructions at the crossing, leave the boat on the right side for the next walker and allow time for the wind, which can make the crossing slow."], ["Waterproof everything", "Wait out flooded creeks", "Leave the boat for the next walker"]),
    section("The best time to walk", ["Summer, roughly December to March, is the usual season, with longer days and the best chance of settled weather. Even then, expect rain, wind and cold: this is one of the wettest and most exposed walks in Australia, and snow is possible at any time of year.", "Autumn can be beautiful, but daylight shortens and the weather becomes more changeable. Winter walks are for experts only. Check the Parks and Wildlife Service page for track alerts, closures and the current advice before you set off."], ["Summer is the usual season", "Expect rain and wind", "Check alerts before you go"]),
    section("Safety and no phone signal", ["There is no phone signal on the walk. Carry a personal locator beacon or a satellite messenger, a first aid kit, a map and a compass and know how to use them, and leave your route and return date with someone you trust. Triple zero cannot be called from most of the track.", "Walk in a group of at least three if you can, so that one can stay with an injured walker while another goes for help. Pack warm and waterproof layers, because hypothermia is the main danger and it can strike in summer. Plan your food and fuel so that a few spare days do not leave you short."], ["Locator beacon or satellite messenger", "Walk with a group", "Warm and waterproof layers"]),
    section("Before and after the walk", ["Hobart is the base for the flight, the supplies and the car shuffle. Our Tasmania camping loop and the camping rules for Tasmania have campgrounds, free camps and the parks pass rules for the days around the walk.", "At the Cockle Creek end there is a campground by the water at the end of the road, and the area is also the start of the walk to South Cape Bay for people who want a day walk without the full track. If the full walk is too much, our booked-out guide lists easier Tasmanian walks."], ["Hobart for supplies and the flight", "Campground at Cockle Creek", "South Cape Bay as a day walk"]),
    { ...section("Plan the trip around the walk in AussieCamps", ["AussieCamps lists campgrounds, national parks and holiday parks near Hobart and the road to Cockle Creek, with each place's facilities, fees and rules as the agency publishes them. Save the night before the flight and the night after the walk to a trip, with the weather for each stop.", "The flights and the parks pass are booked with the operators and the Parks and Wildlife Service. AussieCamps runs on iPhone and is free to download, with in-app purchases."], ["Camps near Hobart and Cockle Creek", "Weather for each stop", "Book flights and passes direct"]), cta: true },
  ],
  sources: [
    { label: "Parks and Wildlife Service Tasmania: South Coast Track", url: "https://parks.tas.gov.au/explore-our-parks/southwest-national-park/south-coast-track" },
    { label: "Parks and Wildlife Service Tasmania: South Coast Track walk notes", url: "https://parks.tas.gov.au/explore-our-parks/southwest-national-park/south-coast-track/south-coast-track-walk-notes" },
    { label: "Discover Tasmania: South Coast Track", url: "https://www.discovertasmania.com.au/" },
  ],
});
