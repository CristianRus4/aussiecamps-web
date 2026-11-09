import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free on the Savannah Way?", "In places. The route across Queensland, the Northern Territory and the Kimberley has roadside rest areas and a few free or low-cost camps, but each state sets its own rules and some stretches have none. Look for the sign at each stop."],
  ["How long is the Savannah Way?", "About 3,700 kilometres from Cairns to Broome, which most people drive over two to three weeks. It crosses the Gulf Country, Katherine and the Kimberley."],
  ["When is the Savannah Way open?", "The dry season, roughly May to October. In the wet, floods close roads and some sections turn impassable, and many camps and roadhouses shut."],
  ["Do I need a 4WD on the Savannah Way?", "Much of the route is sealed, so a 2WD campervan can drive the main road. Some side trips, including Lawn Hill and parts of the Gulf Developmental Road, are gravel or 4WD only, and rental conditions often forbid them."],
] as const;

export default article({
  slug: "free-camping-savannah-way", publishAt: "2026-11-10",
  title: "Free Camping on the Savannah Way: Cairns to Broome Across the Top End",
  description: "How to camp along the Savannah Way from Cairns to Broome: free rest areas and low-cost camps in Queensland, the Northern Territory and the Kimberley, the dry season window and where to carry fuel and water.",
  category: "Camping guides", region: "Queensland",
  places: ["Cairns", "Normanton", "Katherine", "Kununurra", "Broome"],
  imageAlt: "A giant boab tree inside a low fence at a rest area on the Great Northern Highway in the Kimberley, with red dirt in front of it",
  intro: "The Savannah Way is the long road across the top of Australia, from Cairns to Broome through the Gulf Country, Katherine and the Kimberley. It is a good route for free and cheap camping, because there are roadside rest areas, riverside camps and roadhouses all the way, but the rules change across three states and territories and the distances are huge. Go in the dry season, carry water and fuel, and read each sign.",
  related: ["cairns-to-darwin-drive", "broome-to-darwin-drive", "wet-season-camping-top-end-northern-wa", "camping-rules-northern-territory", "is-free-camping-legal-australia"],
  sections: [
    section("How the route works", ["The Savannah Way is a series of highways: from Cairns inland to the Gulf, across to Katherine, then through the Victoria Highway to Kununurra and along the Great Northern Highway to Broome. It crosses Queensland, the Northern Territory and Western Australia, and the camping rules change with each border.", "Most of the main road is sealed, but fuel and water are far apart, so plan each leg."], ["Three states and territories", "Mostly sealed", "Plan each leg"], {
      caption: "Camping on the Savannah Way by stretch.",
      head: ["Stretch", "Cost", "Best for", "Watch for"],
      rows: [
        ["Queensland: Cairns to the Gulf", "Free or low fee", "Rest areas, riverside camps", "Council rules; wet-season floods"],
        ["Northern Territory: Borroloola to Katherine", "Free or low fee", "Roadside rest areas", "Water crossings in the wet"],
        ["Victoria Highway to Kununurra", "Free or low fee", "Rest areas, roadhouses", "Fruit and vegetable checks at the WA border"],
        ["Kimberley to Broome", "Paid or low fee", "Station and roadhouse camps", "Distances and heat"],
      ],
    }),
    section("Queensland: the Gulf Country", ["Between Cairns and the Gulf, towns such as Normanton, Karumba and Georgetown have council camps and caravan parks, and the highways have rest areas where a night in the vehicle is fine. Normanton and Karumba are popular for fishing and sunsets.", "The Burke and Wills Camp 119 near Normanton is a free camp with a sign and a history. Check the sign for the stay limit."], ["Council camps in the Gulf", "Rest areas on the highway", "Check each sign"]),
    section("The Northern Territory", ["Across the NT, free camping is limited to signed rest areas and some stations and roadhouses. Camping in the open outside those places is not allowed, and fines apply.", "Katherine and Timber Creek are the big stops, with caravan parks and the Nitmiluk and Judbarra national parks near by."], ["Signed rest areas only", "Roadhouses charge a fee", "Katherine is the hub"]),
    section("The Kimberley and Broome", ["From Kununurra to Broome the camps are mostly paid, at stations, roadhouses and caravan parks. The Great Northern Highway has rest areas, and some are free, but the heat and the distances make a powered site attractive.", "Allow time for Kununurra, the Gibb River Road turn off, Fitzroy Crossing and Broome's beaches."], ["Station and roadhouse camps", "Powered sites in the heat", "Allow time for the detours"]),
    section("The dry season window", ["Go between May and October. In the wet season floods close roads, camps and roadhouses shut, and temperatures and humidity are extreme. Our wet season camping guide explains the closures and the risks.", "Check each state's road conditions before you drive, and keep a few days' spare in your schedule."], ["May to October", "Floods close roads in the wet", "Check road conditions"]),
    { ...section("Plan the Savannah Way in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops.", "Roadhouse, station and council camps are not all in the app, so check their own pages for those. AussieCamps runs on iPhone."], ["Filter by cost", "Save places to a trip", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Savannah Way", url: "https://www.savannahway.com.au/" },
    { label: "Queensland Government: QLDTraffic", url: "https://qldtraffic.qld.gov.au/" },
    { label: "Northern Territory Government: road report", url: "https://roadreport.nt.gov.au/" },
    { label: "Main Roads WA: road conditions", url: "https://www.mainroads.wa.gov.au/" },
  ],
});
