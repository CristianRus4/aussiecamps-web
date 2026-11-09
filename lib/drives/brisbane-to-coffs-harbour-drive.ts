import { article, section } from "@/lib/drives/helpers";

export const faq = [
  ["How far is Brisbane to Coffs Harbour?", "About 470 km on the Pacific Highway, which is roughly 5 to 5.5 hours of driving. It is an easy day trip or a relaxed overnight with a stop at Byron Bay or Yamba."],
  ["Is the Pacific Highway dual carriageway all the way?", "Almost all of it is now, which makes the drive quicker and safer. Speed limits and roadworks vary, so check Live Traffic NSW and QLDTraffic before you leave."],
  ["Is there a time change on the way?", "From October to April, New South Wales is on daylight saving and Queensland is not, so you lose an hour crossing the border going south and gain it going north."],
  ["Where should I stop between Brisbane and Coffs Harbour?", "Popular stops are Byron Bay, Ballina, Yamba and Grafton, with Brunswick Heads and Lennox Head for quieter beaches."],
] as const;

export default article({
  slug: "brisbane-to-coffs-harbour-drive",
  title: "Brisbane to Coffs Harbour Drive 2026: Pacific Highway Route, Stops and Camping",
  description: "Brisbane to Coffs Harbour is about 470 km and five to six hours on the Pacific Highway. Stops at Byron Bay, Ballina and Yamba, the border time change, caravan parks and free camps.",
  category: "Road trips", region: "Queensland and New South Wales",
  places: ["Tweed Heads", "Byron Bay", "Ballina", "Yamba", "Grafton", "Coffs Harbour"],
  imageAlt: "A sandy beach and headland on the New South Wales north coast near Coffs Harbour",
  intro: "Brisbane to Coffs Harbour is about 470 km down the Pacific Highway, and it is the easiest of the north coast drives: mostly dual carriageway, beaches every hour and a good place at the end. It is a comfortable day or a lazy two, with a night at Byron Bay or Yamba.",
  related: ["brisbane-to-byron-bay-drive", "sydney-to-byron-bay-drive", "brisbane-to-sydney-drive", "east-coast-road-trip-sydney-cairns", "camping-rules-new-south-wales", "road-trip-fuel-planning-australia"],
  sections: [
    section("The route and how long it takes", ["The route is the Pacific Highway (M1) south from Brisbane through the Gold Coast, across the border at Tweed Heads, then past Byron Bay, Ballina, Grafton and on to Coffs Harbour. Almost all of it is dual carriageway, with towns every half hour or so.", "Allow five to six hours for the drive, plus stops. The Brisbane to Byron Bay guide covers the first part and the Sydney to Byron Bay guide covers the road on the New South Wales side."], ["Five to six hours of driving", "Towns every half hour", "Dual carriageway almost all the way"], {
      caption: "A relaxed one or two day split. Distances are approximate.",
      head: ["Leg", "Distance", "Drive time", "Where to stop"],
      rows: [
        ["Brisbane to Byron Bay", "About 165 km", "About 2 h", "Gold Coast or Byron Bay"],
        ["Byron Bay to Yamba", "About 140 km", "About 1.5 h", "Ballina or Yamba"],
        ["Yamba to Coffs Harbour", "About 160 km", "About 2 h", "Grafton or Coffs Harbour"],
      ],
    }),
    section("Fuel, tolls and the border", ["Fuel is easy to find along the highway. The Brisbane end has tolled motorways, and the toll roads guide explains how visitors pay. The Pacific Highway south of the border is toll free.", "From October to April, New South Wales is on daylight saving and Queensland is not, so the clock changes at Tweed Heads. Check your arrival time and your booking times."], ["Check tolls near Brisbane", "Toll free in New South Wales", "Border time change in summer"]),
    section("Camping on the north coast", ["Caravan parks and holiday parks carry most nights: Byron Bay, Ballina, Yamba, Grafton and Coffs Harbour all have parks, and there are national park campgrounds at Yuraygir and Bundjalung along the way. The camping rules guide for New South Wales covers where overnight stays are allowed, and the overnight rest area guide covers the signs.", "Parks in Byron Bay and Coffs Harbour fill quickly in summer and school holidays, so book ahead. Brunswick Heads and Lennox Head are good alternatives close to Byron."], ["Parks in every coastal town", "National park campgrounds", "Book early in summer"]),
    { ...section("Plan the Brisbane to Coffs Harbour drive in AussieCamps", ["Build the drive as a trip in AussieCamps: add Byron Bay, Yamba and Coffs Harbour in order and it shows the distance and drive time of each leg, with a forecast for the day you expect to arrive. AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish.", "Open the trip while you still have a connection, because map tiles, routing and weather need one. The iPhone app is free to download, with in-app purchases."], ["Add each overnight stop in order", "Forecast for each arrival day", "Open the trip before you leave Brisbane"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Pacific Highway (Australia)", url: "https://en.wikipedia.org/wiki/Pacific_Highway_(Australia)" },
    { label: "Live Traffic NSW", url: "https://www.livetraffic.com/" },
    { label: "Queensland Government: QLDTraffic", url: "https://qldtraffic.qld.gov.au/" },
    { label: "NSW National Parks: Yuraygir National Park", url: "https://www.nationalparks.nsw.gov.au/visit-a-park/parks/yuraygir-national-park" },
  ],
});
