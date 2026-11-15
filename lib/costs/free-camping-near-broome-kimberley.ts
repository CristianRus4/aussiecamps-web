import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free in Broome?", "No. The Shire of Broome bans camping and overnight stays in vehicles in town and on Cable Beach, and rangers fine people who try. Stay in a caravan park, or use a rest area on the highway well out of town."],
  ["Where can I camp free in the Kimberley?", "Signed rest areas on the Great Northern Highway allow a short overnight stay, and a few roadhouses and stations sell cheap bush camping. Most gorges and community camps charge a fee, usually small, so budget for paid nights."],
  ["Is it safe to camp near water in the Kimberley?", "Only with care. Saltwater crocodiles live in tidal rivers and estuaries, and freshwater crocodiles live in many gorges and waterholes. Follow the signs, camp back from the bank and never swim where it is not signed as safe."],
  ["When is the Kimberley closed to camping?", "In the wet season, roughly November to April, the Gibb River Road and many camps and tracks close or flood. The dry season, May to October, is the camping season, and Broome fills up from June to August."],
] as const;

export default article({
  slug: "free-camping-near-broome-kimberley", publishAt: "2026-11-17",
  title: "Free Camping Near Broome and the Kimberley: Town Bans, Highway Rest Areas and Station Camps",
  description: "Where to camp near Broome and the Kimberley: the town and Cable Beach bans, highway rest areas, Dampier Peninsula camps, Gibb River Road sites and wet season closures.",
  category: "Camping guides", region: "Western Australia",
  places: ["Broome", "Great Northern Highway", "Dampier Peninsula", "Gibb River Road", "Fitzroy Crossing"],
  imageAlt: "A giant boab tree inside a low fence at a rest area on the Great Northern Highway in the Kimberley, with red dirt in front of it",
  intro: "Broome does not allow free camping, and the Kimberley offers it only in patches. The town and Cable Beach are off limits, signed rest areas along the Great Northern Highway are the free option, and almost everything with a view, from the Dampier Peninsula to the gorges on the Gibb River Road, charges a modest fee. Plan around the dry season, book Broome early for the winter months and treat crocodile signs as orders.",
  related: ["gibb-river-road-camping", "dampier-peninsula-cape-leveque-camping", "broome-to-darwin-drive", "free-camping-western-australia", "wet-season-camping-top-end-northern-wa", "perth-to-broome-road-trip"],
  sections: [
    section("Broome and Cable Beach", ["The Shire of Broome does not allow camping in the town, on Cable Beach or on the streets, and sleeping in a vehicle on roadsides or in car parks counts. Rangers patrol, and the fines are steep. In winter, with the town packed with travellers, they are especially active.", "Caravan parks in and around Broome are the legal answer, and they fill from June to August, so booking weeks or months ahead is wise. If you arrive without a booking, ring the parks on the roads out of town before you drive around."], ["No camping in town or on the beach", "Book winter parks ahead", "Rangers patrol and fine"]),
    section("Where you can stay", ["Free nights here come from rest areas on the Great Northern Highway, where signs allow a short overnight stay, and from the occasional shire camp. Beyond that, stations, roadhouses and community camps sell bush camping at friendly prices.", "Distances are huge. The next fuel, water and shade can be hours away, so choose where you will sleep before dark."], ["Rest areas: free, signed only", "Roadhouses and stations: cheap", "Choose your stop before dark"], {
      caption: "Where you can stay near Broome and the Kimberley, and the main limit.",
      head: ["Where", "Cost", "Main limit"],
      rows: [
        ["Great Northern Highway rest areas", "Free", "Short stays only, few facilities, check the sign"],
        ["Roadhouse and station camps (Willare, Sandfire, Fitzroy Crossing area)", "Paid, modest", "Limited sites in the dry season"],
        ["Dampier Peninsula community camps", "Paid, modest", "Permits and road conditions; booking advised"],
        ["Gibb River Road gorge camps", "Paid, modest", "Dry season only; crocodiles; remote"],
        ["Broome caravan parks", "Paid", "Full in winter; the only legal option in town"],
      ],
    }),
    section("The Great Northern Highway", ["The highway runs east from Broome through Willare and the Derby turn-off to Fitzroy Crossing and on to Halls Creek, with rest areas beside the road. The giant boab trees that stand beside some of them make good places for a lunch break or a short stop.", "The road is sealed but long. Road trains run at night, so pull well off the road. Facilities are minimal, so carry your own water and a way to deal with rubbish and toilet waste."], ["Sealed but long", "Carry water and your own bin", "Beware of night road trains"]),
    section("Dampier Peninsula and the Gibb River Road", ["North of Broome, the Dampier Peninsula has community-run camps at beaches, including Middle Lagoon and Cape Leveque. They are paid, small and run by the Aboriginal owners of the land, and some visits need a permit, so check ahead. Our Dampier Peninsula guide has the detail.", "The Gibb River Road has gorge campgrounds and station camps, from Windjana Gorge near Derby to Manning Gorge and Home Valley, all paid and mostly open in the dry months only. The road is gravel and corrugated, and our Gibb River Road guide covers tyres, fuel and the crossings."], ["Peninsula camps need booking", "Gibb River Road is dry season only", "Check tyres and fuel before leaving"]),
    section("Wet season and crocodiles", ["From about November to April the Kimberley gets heat, humidity and heavy rain. Roads and rivers flood, tracks and many camps close, and the Gibb River Road is usually shut. Our wet season guide explains what stays open.", "Saltwater crocodiles live in estuaries, tidal rivers and along the coast, and freshwater crocodiles live in many gorges and pools. Camp back from the bank, never swim where a sign says not to, and don't clean fish or leave food near the water's edge."], ["Wet: November to April", "Gibb River Road closes", "Obey every crocodile sign"]),
    { ...section("Find Kimberley camps in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them, plus photos, weather and Street View. Filters cover cost (Free or Paid), dogs allowed, 4WD access, minimum rating, online booking, popular features such as toilets and drinking water, and state or territory.", "Save places to a collection, add them to a trip with Add stop and see driving distance and time for each leg, with dates, notes and weather per stop. The whole directory is inside the app, so search, filters and place details work with no signal, which matters a lot in the Kimberley. There is no account and no ads, and it runs on iPhone. Check the sign at the site and the land manager before you settle in."], ["Filter by Free or 4WD access", "Plan each leg between stops", "Works with no signal"]), cta: true },
  ],
  sources: [
    { label: "Shire of Broome: camping and local laws", url: "https://www.broome.wa.gov.au/" },
    { label: "Main Roads WA: rest areas", url: "https://www.mainroads.wa.gov.au/" },
    { label: "DBCA: Parks and Wildlife Service WA", url: "https://www.dbca.wa.gov.au/" },
    { label: "Australia's North West: Kimberley", url: "https://www.australiasnorthwest.com/" },
  ],
});
