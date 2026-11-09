import { article, section } from "@/lib/drives/helpers";

export const faq = [
  ["How far is Sydney to Byron Bay by road?", "About 770 km on the Pacific Highway, which is roughly 8.5 to 9 hours of driving. Most people take two days, with a night at Port Macquarie or Coffs Harbour, or three days with stops on the mid north coast."],
  ["Is the Pacific Highway dual carriageway all the way?", "Almost all of it now is, which makes the drive quicker and safer than it used to be. Speed limits vary along the road and there are roadworks at times, so check Live Traffic NSW before you leave."],
  ["Are there tolls between Sydney and Byron Bay?", "The Sydney end has tolled motorways, including the M1 and the Sydney Harbour crossings depending on your start point, so check your route. The visitor options are explained in the toll roads guide."],
  ["Where should I stop between Sydney and Byron Bay?", "Popular stops are Newcastle, Port Stephens, Port Macquarie, Coffs Harbour, Yamba and Ballina, and the Hunter Valley is a short detour inland."],
] as const;

export default article({
  slug: "sydney-to-byron-bay-drive",
  title: "Sydney to Byron Bay Drive 2026: Pacific Highway Route, Stops, Tolls and Camping",
  description: "Sydney to Byron Bay is about 770 km and two days on the Pacific Highway. Stops at Newcastle, Port Macquarie and Coffs Harbour, tolls for visitors, fuel, caravan parks and free camps.",
  category: "Road trips", region: "New South Wales",
  places: ["Newcastle", "Port Stephens", "Port Macquarie", "Coffs Harbour", "Yamba", "Ballina", "Byron Bay"],
  imageAlt: "Cape Byron lighthouse and the headland above the sea at Byron Bay",
  intro: "Sydney to Byron Bay is about 770 km up the Pacific Highway, and it is the classic north coast drive: beaches, national parks and small towns every hour or so. You can do it in one very long day, but two days is far kinder, and three gives you time for Port Macquarie and Coffs Harbour.",
  related: ["brisbane-to-byron-bay-drive", "brisbane-to-sydney-drive", "east-coast-road-trip-sydney-cairns", "toll-roads-australia-hire-car-campervan", "camping-rules-new-south-wales", "road-trip-fuel-planning-australia"],
  sections: [
    section("The route and how long it takes", ["The route is the Pacific Highway the whole way, leaving Sydney on the M1 through the Central Coast to Newcastle, then north through Taree, Port Macquarie, Kempsey, Coffs Harbour, Grafton and Ballina to Byron Bay. Almost all of it is dual carriageway now, with towns every hour or so for fuel and breaks.", "The Brisbane to Byron Bay guide covers the northern end and the Brisbane to Sydney guide covers the whole highway, so this page is for the Sydney start. Allow two days at a steady pace, or three if you want to see Port Stephens, Port Macquarie or Coffs Harbour."], ["Two days is the sweet spot", "Three if you stop at the coast", "Dual carriageway almost all the way"], {
      caption: "A two day split. Distances are approximate.",
      head: ["Leg", "Distance", "Drive time", "Where to stop"],
      rows: [
        ["Sydney to Newcastle", "About 160 km", "About 2 h", "Newcastle or Port Stephens"],
        ["Newcastle to Port Macquarie", "About 250 km", "About 3 h", "Taree or Port Macquarie"],
        ["Port Macquarie to Coffs Harbour", "About 160 km", "About 2 h", "Nambucca or Coffs Harbour"],
        ["Coffs Harbour to Byron Bay", "About 200 km", "About 2.5 h", "Yamba, Ballina or Byron Bay"],
      ],
    }),
    section("Tolls and driving", ["The Sydney end of the drive has tolled motorways, depending on where you start, and the toll roads guide explains the visitor options and how long you have to pay. North of Newcastle the Pacific Highway is toll free.", "Fuel is easy to find along the highway. Rest every two hours, and avoid driving at dusk and dawn when kangaroos and wallabies are active. Live Traffic NSW shows closures and roadworks, and the fatigue guide covers the breaks that matter."], ["Check tolls before you start", "Fuel every hour or so", "Rest every two hours"]),
    section("Camping on the north coast", ["Caravan parks and holiday parks carry most nights: Port Stephens, Port Macquarie, Coffs Harbour, Yamba, Ballina and Byron Bay all have parks, and there are national park campgrounds and free rest areas along the way. The camping rules guide for New South Wales covers where overnight stays are allowed, and the overnight rest area guide covers the signs.", "Byron Bay has strict rules about camping and campervans, and parks fill quickly in summer and school holidays, so book ahead. Ballina, Brunswick Heads and Lennox Head are good alternatives close by."], ["Parks in every coastal town", "National park campgrounds", "Book Byron early in summer"]),
    { ...section("Plan the Sydney to Byron Bay drive in AussieCamps", ["Build the drive as a trip in AussieCamps: add Port Macquarie, Coffs Harbour and Byron Bay in order and it shows the distance and drive time of each leg, with a forecast for the day you expect to arrive. AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish.", "Open the trip while you still have a connection, because map tiles, routing and weather need one. The iPhone app is free to download, with in-app purchases."], ["Add each overnight stop in order", "Forecast for each arrival day", "Open the trip before you leave Sydney"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Pacific Highway (Australia)", url: "https://en.wikipedia.org/wiki/Pacific_Highway_(Australia)" },
    { label: "Live Traffic NSW", url: "https://www.livetraffic.com/" },
    { label: "NSW Government: paying a toll or toll notice", url: "https://www.nsw.gov.au/driving-boating-and-transport/tolling/toll-notices/paying-a-toll-or-toll-notice" },
    { label: "Destination NSW: north coast", url: "https://www.visitnsw.com/destinations/north-coast" },
  ],
});
