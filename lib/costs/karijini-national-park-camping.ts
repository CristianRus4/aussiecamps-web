import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Where can you camp at Karijini National Park?", "At Dales Campground, run by the park, and at the Karijini Eco Retreat, which has powered and unpowered sites and glamping tents. Dales is booked and paid, and there is no free camping inside the park."],
  ["Do I need to book Karijini camping?", "Yes. Dales Campground takes bookings through the state parks system and fills in the cooler months, so book before you drive up."],
  ["When is the best time to camp at Karijini?", "April to October, in the dry season. Summer brings extreme heat, storms and flash flooding in the gorges, and some tracks and gorges close."],
  ["Can I take a 2WD campervan to Karijini?", "Usually yes. The main roads in are sealed or good gravel, but check road conditions before you go, particularly after rain."],
] as const;

export default article({
  slug: "karijini-national-park-camping", publishAt: "2026-11-09",
  title: "Karijini National Park Camping: Dales Campground, Gorges and When to Go",
  description: "Camping at Karijini National Park: Dales Campground and the eco retreat, booking, the best season, gorge safety and how to get there from Perth, Tom Price or Newman.",
  category: "Camping guides", region: "Western Australia",
  places: ["Dales Gorge", "Weano Gorge", "Hancock Gorge", "Tom Price", "Newman"],
  imageAlt: "Dales Gorge, Karijini National Park",
  intro: "Karijini is the Pilbara's great gorge country, and the way to see it is to camp. Dales Campground sits near Dales Gorge and Fortescue Falls, the Karijini Eco Retreat has powered and unpowered sites, and both take bookings ahead of the cooler months. It is a long way from Perth, so plan the trip as part of a bigger loop, go between April and October and treat the gorges with respect.",
  related: ["perth-to-broome-road-trip", "camping-rules-western-australia", "gibb-river-road-camping", "perth-to-exmouth-drive", "camping-weather-safety-australia"],
  sections: [
    section("Getting there", ["Karijini is about 1,400 kilometres from Perth, roughly 15 hours of driving. Most people come from Tom Price, Newman or on the road between Perth and Broome, and fly into Paraburdoo or Newman if they are short of time.", "The main roads in are sealed or good gravel. Fill up at Tom Price or Newman, carry water and check Main Roads for closures after rain."], ["About 1,400 km from Perth", "Fill up at Tom Price or Newman", "Check closures after rain"]),
    section("Where to camp", ["Dales Campground is the park's own camp, close to Dales Gorge and Fortescue Falls, with toilets and basic facilities, and you book it through the state parks system. The Karijini Eco Retreat, outside the main gorge area, has powered and unpowered sites and glamping tents.", "Both fill in the cooler months, so book early. Dispersed camping inside the park is not allowed."], ["Dales: booked and paid", "Eco Retreat: powered and unpowered", "No camping outside camps"], {
      caption: "Where to stay at Karijini and the main limit at each.",
      head: ["Where", "Cost", "Booking", "Main limit"],
      rows: [
        ["Dales Campground", "Park camp fee plus entry", "Required", "Basic facilities; fills in season"],
        ["Karijini Eco Retreat", "Paid", "Required", "Powered, unpowered and tents"],
        ["Tom Price caravan parks", "Paid", "Recommended", "About an hour away"],
        ["Rest stops on the highways", "Free", "None", "24 hours where signed"],
      ],
    }),
    section("The gorges and safety", ["Dales Gorge, Hancock, Weano, Knox and Joffre are the main gorges, and some involve scrambles and wading through cold water. Wear grippy shoes, carry water and never enter a gorge if rain is forecast or has fallen upstream.", "Flash floods are a real danger in summer storms. Heed park signs and closures."], ["Wear grippy shoes", "Never enter in rain", "Heed closures"]),
    section("Season and heat", ["The best time is April to October, with warm days and cool nights. Summer is very hot, with storms and flooding, and some gorges close.", "Carry plenty of water and plan walks for the cooler part of the day."], ["Best: April to October", "Summer is very hot", "Walk early in the day"]),
    { ...section("Plan the route in AussieCamps", ["AussieCamps maps 260 Western Australian park campgrounds and 1,661 roadside rest areas, with each place's facilities and fees as the agency publishes them. You can build a trip with ordered stops and see the driving distance for each leg, which shows the long gaps before you leave.", "Place details are saved on the phone for use without signal, which matters in the Pilbara. The map, routing and weather need a connection, and AussieCamps runs on iPhone."], ["See each leg's distance", "Filter by cost", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Parks and Wildlife Service WA: Karijini National Park", url: "https://exploreparks.dbca.wa.gov.au/park/karijini-national-park" },
    { label: "Karijini Eco Retreat", url: "https://www.karijiniecoretreat.com.au/" },
    { label: "Main Roads Western Australia: road conditions", url: "https://www.mainroads.wa.gov.au/" },
    { label: "Australia's North West: Pilbara", url: "https://www.australiasnorthwest.com/" },
  ],
});
