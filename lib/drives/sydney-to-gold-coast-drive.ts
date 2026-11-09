import { article, section } from "@/lib/drives/helpers";

export const faq = [
  ["How far is Sydney to the Gold Coast by road?", "About 840 km on the Pacific Highway, which is roughly 9.5 to 10 hours of driving. Most people split it over two days, with a night at Port Macquarie or Coffs Harbour."],
  ["What is the best route from Sydney to the Gold Coast?", "The Pacific Highway (M1) all the way, through Newcastle, Port Macquarie, Coffs Harbour and Byron Bay to the Queensland border at Tweed Heads and Coolangatta."],
  ["Do I need to worry about tolls?", "Yes, at the Sydney end and into Queensland. Sydney has tolled motorways, and the Gold Coast has the Gateway and Logan Motorways near Brisbane if you take them. The toll roads guide explains how visitors pay."],
  ["Is there a time change at the border?", "From October to April, New South Wales is on daylight saving and Queensland is not, so Queensland is an hour behind for those months. Check your clock at Tweed Heads."],
] as const;

export default article({
  slug: "sydney-to-gold-coast-drive",
  title: "Sydney to the Gold Coast Drive 2026: Pacific Highway Route, Stops, Tolls and Camping",
  description: "Sydney to the Gold Coast is about 840 km and two days on the Pacific Highway. Stops at Newcastle, Port Macquarie and Byron Bay, tolls, the border time change, caravan parks and free camps.",
  category: "Road trips", region: "New South Wales and Queensland",
  places: ["Newcastle", "Port Macquarie", "Coffs Harbour", "Ballina", "Byron Bay", "Tweed Heads", "Surfers Paradise"],
  imageAlt: "The Pacific Highway running as a divided road through green hills on the New South Wales north coast",
  intro: "Sydney to the Gold Coast is about 840 km up the Pacific Highway, mostly dual carriageway, with a time change at the Queensland border for half the year. It is a long day or an easy two, and the coastal towns and national parks along the way are worth the extra night.",
  related: ["sydney-to-byron-bay-drive", "brisbane-to-sydney-drive", "brisbane-to-byron-bay-drive", "east-coast-road-trip-sydney-cairns", "toll-roads-australia-hire-car-campervan", "camping-rules-queensland"],
  sections: [
    section("The route and how long it takes", ["The Pacific Highway (M1) is the route all the way: out of Sydney through the Central Coast to Newcastle, north through Taree, Port Macquarie, Coffs Harbour and Grafton, then past Ballina and Byron Bay to the border at Tweed Heads and Coolangatta. The Gold Coast begins just over the border.", "Allow two days with a night at Port Macquarie or Coffs Harbour, or three to spend more time on the coast. The Sydney to Byron Bay guide covers the route up to Byron in more detail, and the Brisbane to Sydney guide covers the whole highway."], ["Two days is comfortable", "Overnight at Port Macquarie or Coffs", "Border time change in summer"], {
      caption: "A two day split. Distances are approximate.",
      head: ["Leg", "Distance", "Drive time", "Where to stop"],
      rows: [
        ["Sydney to Port Macquarie", "About 410 km", "About 5 h", "Newcastle or Port Macquarie"],
        ["Port Macquarie to Coffs Harbour", "About 160 km", "About 2 h", "Coffs Harbour"],
        ["Coffs Harbour to Tweed Heads", "About 270 km", "About 3 h", "Ballina or Byron Bay"],
      ],
    }),
    section("Tolls and the border", ["Sydney has tolled motorways, and the Gold Coast end has some tolled links to Brisbane, so check your route. The toll roads guide explains how visitors pay and how long you have after the trip. The Pacific Highway itself north of Newcastle is toll free.", "At Tweed Heads the clock changes for half the year: New South Wales is on daylight saving from October to April and Queensland is not, so you gain an hour as you cross going north. Remember that when you plan your arrival time."], ["Check tolls before you leave", "Toll free north of Newcastle", "Border time change October to April"]),
    section("Camping on the way", ["Caravan parks and holiday parks carry most nights: Port Macquarie, Coffs Harbour, Yamba, Ballina and the Gold Coast all have parks, and there are national park campgrounds and free rest areas along the way. The camping rules guides for New South Wales and Queensland cover where overnight stays are allowed.", "The Gold Coast is busy in school holidays, so book ahead. If the coast is full, the hinterland towns around Tamborine Mountain and Springbrook have quieter parks."], ["Parks in every coastal town", "Book the Gold Coast early", "Hinterland parks are quieter"]),
    { ...section("Plan the Sydney to Gold Coast drive in AussieCamps", ["Build the drive as a trip in AussieCamps: add Port Macquarie, Coffs Harbour and a Gold Coast park in order and it shows the distance and drive time of each leg, with a forecast for the day you expect to arrive. AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish.", "Open the trip while you still have a connection, because map tiles, routing and weather need one. The iPhone app is free to download, with in-app purchases."], ["Add each overnight stop in order", "Forecast for each arrival day", "Open the trip before you leave Sydney"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Pacific Highway (Australia)", url: "https://en.wikipedia.org/wiki/Pacific_Highway_(Australia)" },
    { label: "Live Traffic NSW", url: "https://www.livetraffic.com/" },
    { label: "Queensland Government: QLDTraffic", url: "https://qldtraffic.qld.gov.au/" },
    { label: "NSW Government: daylight saving in NSW", url: "https://www.nsw.gov.au/about-nsw/daylight-saving" },
  ],
});
