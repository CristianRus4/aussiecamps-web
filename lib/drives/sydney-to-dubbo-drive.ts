import { article, section } from "@/lib/drives/helpers";

export const faq = [
  ["How far is Sydney to Dubbo by road?", "About 390 km, which is roughly 4.5 to 5 hours of driving. The usual route is the Great Western Highway over the Blue Mountains to Bathurst, then the Mitchell Highway through Orange and Wellington."],
  ["Can I drive from Sydney to Dubbo in a day?", "Yes, it is an easy day, and stopping at the Blue Mountains, Bathurst or Orange makes it a good one. Many people also stay a night in one of those places."],
  ["Is there snow on the Blue Mountains road?", "Occasionally in winter, and fog and ice are possible. Check Live Traffic NSW before you leave and carry warm clothes."],
  ["What is there to do in Dubbo?", "Taronga Western Plains Zoo is the main attraction, with a campground and holiday park nearby, and the town is a hub for the Western Plains and the Warrumbungles."],
] as const;

export default article({
  slug: "sydney-to-dubbo-drive",
  title: "Sydney to Dubbo Drive 2026: Blue Mountains Route, Stops and Camping",
  description: "Sydney to Dubbo is about 390 km and five hours over the Blue Mountains, through Bathurst and Orange. Route, stops, tolls, winter road conditions, caravan parks and free camps.",
  category: "Road trips", region: "New South Wales",
  places: ["Katoomba", "Lithgow", "Bathurst", "Orange", "Wellington", "Dubbo"],
  imageAlt: "The Great Western Highway crossing the Blue Mountains with eucalypt forest either side",
  intro: "Sydney to Dubbo is about 390 km over the Blue Mountains and across the central west, and it is the main road to the Western Plains. It is an easy day, but the Blue Mountains, Bathurst and Orange are worth a stop, and Dubbo's zoo and campground make a comfortable base.",
  related: ["blue-mountains-camping-weekend", "sydney-to-canberra-drive", "camping-rules-new-south-wales", "toll-roads-australia-hire-car-campervan", "road-trip-fuel-planning-australia", "australia-road-trip-fatigue-wildlife-safety"],
  sections: [
    section("The route and how long it takes", ["The usual route leaves Sydney on the M4 and the Great Western Highway, climbs the Blue Mountains through Katoomba and Lithgow, then runs down to Bathurst, where it joins the Mitchell Highway through Orange and Wellington to Dubbo. It is mostly dual carriageway as far as Lithgow, then a mix of two-lane road and overtaking lanes.", "Allow five hours with a break or two, or turn it into a weekend with a night at Katoomba, Bathurst or Orange. The Blue Mountains guide covers the mountains in detail."], ["About five hours", "Easy day trip or weekend", "Katoomba, Bathurst or Orange are good stops"], {
      caption: "A one or two day split. Distances are approximate.",
      head: ["Leg", "Distance", "Drive time", "Where to stop"],
      rows: [
        ["Sydney to Katoomba", "About 110 km", "About 1.5 h", "Blue Mountains"],
        ["Katoomba to Bathurst", "About 100 km", "About 1.5 h", "Lithgow or Bathurst"],
        ["Bathurst to Orange", "About 55 km", "About 45 min", "Orange"],
        ["Orange to Dubbo", "About 140 km", "About 1.5 h", "Wellington or Dubbo"],
      ],
    }),
    section("Tolls, weather and driving", ["The M4 on the way out of Sydney is a tolled motorway, and the toll roads guide explains how visitors pay. West of Lithgow there are no tolls.", "The Blue Mountains and the central tablelands can have snow, ice and fog in winter, and bushfires in summer. Check Live Traffic NSW before you leave and carry warm clothes in winter. Fuel is easy to find at Katoomba, Lithgow, Bathurst, Orange and Wellington."], ["M4 has tolls", "Check conditions in winter", "Fuel is easy to find"]),
    section("Camping on the way", ["Caravan parks carry most nights: Katoomba, Lithgow, Bathurst, Orange, Wellington and Dubbo all have parks, and there are national park campgrounds in the Blue Mountains and the Warrumbungles. The camping rules guide for New South Wales covers where overnight stays are allowed, and the overnight rest area guide covers the signs.", "Dubbo has a large caravan park and a campground at Taronga Western Plains Zoo, so you can camp beside the animals. Book ahead in school holidays."], ["Parks in every town", "Zoo campground at Dubbo", "Book in school holidays"]),
    { ...section("Plan the Sydney to Dubbo drive in AussieCamps", ["Build the drive as a trip in AussieCamps: add Katoomba, Bathurst, Orange and Dubbo in order and it shows the distance and drive time of each leg, with a forecast for the day you expect to arrive. AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish.", "Open the trip while you still have a connection, because map tiles, routing and weather need one. The iPhone app is free to download, with in-app purchases."], ["Add each stop in order", "Forecast for each arrival day", "Open the trip before you leave Sydney"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Great Western Highway", url: "https://en.wikipedia.org/wiki/Great_Western_Highway" },
    { label: "Wikipedia: Mitchell Highway", url: "https://en.wikipedia.org/wiki/Mitchell_Highway" },
    { label: "Live Traffic NSW", url: "https://www.livetraffic.com/" },
    { label: "Taronga Western Plains Zoo: stay", url: "https://taronga.org.au/dubbo-zoo" },
  ],
});
