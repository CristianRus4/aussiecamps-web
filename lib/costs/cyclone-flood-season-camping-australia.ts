import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["When is cyclone season in Australia?", "From 1 November to 30 April. Cyclones affect the coasts of Queensland, the Northern Territory and northern Western Australia, and on average the first one to cross the coast does so in late December. The Bureau of Meteorology no longer publishes a seasonal outlook, so follow the daily forecasts and warnings instead."],
  ["Can you drive through a flooded road in Australia?", "No. The official advice in every state is if it's flooded, forget it. Queensland's Get Ready campaign says as little as 15 cm of water can make a car lose traction and be swept away, and driving on a road closed by flooding can bring a fine. Wait for the water to drop or take another route."],
] as const;

export default article({
  slug: "cyclone-flood-season-camping-australia", publishAt: "2026-11-09",
  title: "Cyclone and Flood Season Camping in Australia 2026-27: Warnings and Road Closures",
  description: "Australia's cyclone season runs 1 November to 30 April. Where cyclones and floods hit, the three warning levels, which apps to follow, and how to check road closures by state.",
  category: "Rules & safety", region: "Australia",
  places: ["Queensland", "Northern Territory", "Western Australia", "Floodways"],
  imageAlt: "A flooded road in the Herbert River catchment of north Queensland, with a Road Subject to Flooding sign and a car driving through water",
  intro: "Australia's tropical cyclone season runs from 1 November to 30 April, and the same months bring the wet season to the north, when rivers rise and roads close for days. Cyclones form off Queensland, the Northern Territory and northern Western Australia; flooding can happen anywhere after heavy rain, including the south-east. For campers the rules are simple: follow the warnings each day, never drive into floodwater, and be ready to move to solid shelter or wait out a closed road. We read each warning agency and road authority page on 9 November 2026.",
  related: ["wet-season-camping-top-end-northern-wa", "camping-weather-safety-australia", "bushfire-safety-camping-australia", "camping-without-phone-signal"],
  sections: [
    section("The 2026-27 season", ["The Bureau of Meteorology no longer issues a seasonal cyclone outlook, saying climate change has made the old statistical methods less reliable. ABC News reported on 1 November 2026 that modelling from the European Centre for Medium-Range Weather Forecasts points to five to eight cyclones in the Australian region this season, against a long-term average of 11, with the strongest signal for fewer cyclones off Western Australia and in the central Coral Sea.", "A quiet season still only needs one cyclone to reach your coast. Since 1970, three to four systems a year have crossed the Australian coast at cyclone strength on average, and the first usually does so in late December. Near-normal activity is expected off the Northern Territory, in the Gulf of Carpentaria and near the Queensland coast."], ["Season: 1 November to 30 April", "Five to eight cyclones forecast", "First landfall usually late December"]),
    section("Where cyclones and floods hit", ["Cyclones affect the tropical coasts: north and central Queensland, the Top End of the Northern Territory and the Gulf, and Western Australia from the Kimberley to the Pilbara and Gascoyne. The Bureau defines a tropical cyclone as a low with winds of at least 63 km/h, gusting above 90 km/h, around most of its centre. Rain from a cyclone or the monsoon can flood inland roads hundreds of kilometres from the coast.", "Floods are not only a northern problem. Heavy rain can close roads in New South Wales, Victoria and south-east Queensland in any season. In the wet-season north, low-level crossings called floodways carry depth markers, and a road can be open in the morning and under water by afternoon."], ["Cyclones: tropical coasts", "Floods: anywhere after heavy rain", "Floodways have depth markers"]),
    section("The three warning levels", ["Australia uses one warning system for floods, cyclones, storms, bushfires and extreme heat, with three levels shown by the same coloured icons in every state. Advice, in yellow, means an incident has started and there is no immediate danger, so stay up to date. Watch and Act, in orange, means conditions are changing and you need to start taking action now. Emergency Warning, in red, means you may be in danger and need to act immediately.", "For cyclones the Bureau also issues a Cyclone Watch when gales could start within 24 to 48 hours, and a Cyclone Warning when they are expected within 24 hours. A watch is the signal for a campground: decide where you will go, fill the tank and buy food while shops are open."], ["Yellow, orange, red", "Watch: plan; Warning: move", "Act early, not at the last minute"]),
    section("Where to get warnings in each state", ["Install the BOM Weather app for forecasts, radar and warnings, and add the emergency site or app for the state you are in. National warnings are collected on Hazard Watch, and the ABC broadcasts emergency information on local radio, which keeps working when mobile networks are busy or down.", "Check them while you still have signal each morning: a warning issued after you lose reception on a remote road will not reach you. Save the emergency number 000, and the SES number 132 500 for help in floods and storms."], ["BOM Weather and a state app", "ABC local radio in an emergency", "SES: 132 500"], {
      caption: "Emergency warning and road condition sources by state, checked 9 November 2026.",
      head: ["State", "Emergency warnings", "Road conditions"],
      rows: [
        ["Queensland", "Queensland Disaster Management", "QLDTraffic, 13 19 40"],
        ["Northern Territory", "SecureNT", "Road Report NT, 1800 246 199"],
        ["Western Australia", "Emergency WA", "Main Roads WA Travel Map"],
        ["New South Wales", "Hazards Near Me app", "Live Traffic NSW, 132 701"],
        ["Victoria", "VicEmergency", "VicTraffic"],
        ["South Australia", "Alert SA", "Traffic SA"],
        ["Tasmania", "TasALERT", "TasALERT road closures"],
      ],
    }),
    section("Floodwater: if it's flooded, forget it", ["Queensland's Get Ready campaign says it can take as little as 15 cm of water for a car to lose traction and be swept away, that modern cars are light and buoyant, and that the pressure of floodwater can stop you opening the doors and windows. The wading depth in a vehicle manual is for still water, not a current. You cannot see whether the road under the water is still there.", "Wait for the water to drop below the marker on the floodway, or turn around. Driving on a road closed by flooding can bring a fine as well as the risk, and in the north, floodwater and river edges can carry saltwater crocodiles. Never camp in a dry creek bed or on a low river flat in the wet season: rain far upstream can fill it overnight."], ["15 cm can move a car", "Never drive a closed road", "No camping in creek beds"]),
    section("If a cyclone is coming", ["A tent or campervan is no place to sit out a cyclone. When a watch is issued for your area, leave the coast early, or book a room built to cyclone standards in a larger town, or go to a public cyclone shelter if the local authority opens one. Tourism NT tells visitors to follow advice on local radio and to ask about tying down a caravan or other light structure.", "Fill the tank and water containers, buy food for several days, charge every battery and keep the car pointed at your exit. After the cyclone passes, roads can stay closed for days with fallen trees, damaged bridges and floodwater, so stay put until the authorities say routes are open."], ["Leave the coast early", "Shelter in a solid building", "Roads stay shut after it passes"]),
    section("Planning a wet-season trip", ["Travelling the north between November and April is possible with flexible plans. Build spare days into the itinerary, pick sealed roads and accommodation over remote tracks, and check the road report for every leg each morning. Many remote national park roads and campgrounds close for the whole wet season, and four-wheel-drive tracks such as the Gibb River Road are often shut.", "Hire agreements usually forbid driving on closed roads and through floodwater, and insurance rarely covers it. If a closure holds you in a town, treat it as a rest day rather than looking for a way round."], ["Spare days in the plan", "Sealed roads in the wet", "A closure is a rest day"]),
    { ...section("Keep a fallback in AussieCamps", ["AussieCamps lists campgrounds, national parks and rest areas across the north with the access notes the park agencies publish, and a 7-day forecast on each place page. When a camp floods or a road closes, it also lists holiday parks, motels and B&Bs you can book in the app, so a solid roof is a few taps away.", "Save a trip with each night's stop and AussieCamps shows the forecast on the day you plan to arrive. Place details stay readable with no signal; the map, directions and weather need a connection. AussieCamps runs on iPhone."], ["Forecast on each place", "Bookable rooms as a fallback", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "ABC News: 2026-27 cyclone season modelling, 1 November 2026", url: "https://www.abc.net.au/news/2026-11-01/bom-australia-cyclone-season-predicted-quiet/107329238" },
    { label: "NSW Government: know the warnings to stay safe", url: "https://www.nsw.gov.au/emergency/get-ready/know-warnings-to-stay-safe" },
    { label: "Hazard Watch: national hazard warnings", url: "https://www.hazardwatch.gov.au/" },
    { label: "Queensland Get Ready: if it's flooded, forget it", url: "https://www.getready.qld.gov.au/FloodedForgetIt" },
    { label: "Queensland Government: check road conditions before you drive", url: "https://www.qld.gov.au/emergency/dealing-disasters/disaster-types/flood/flood-aware/floodwater-safety/check-road-conditions-before-you-drive" },
    { label: "Road Report NT", url: "https://roadreport.nt.gov.au/" },
    { label: "Main Roads WA: Travel Map", url: "https://travelmap.mainroads.wa.gov.au/" },
    { label: "Live Traffic NSW", url: "https://www.livetraffic.com/" },
    { label: "Emergency WA", url: "https://www.emergency.wa.gov.au/" },
    { label: "SecureNT", url: "https://securent.nt.gov.au/" },
    { label: "VicEmergency", url: "https://emergency.vic.gov.au/" },
    { label: "Alert SA", url: "https://www.alert.sa.gov.au/" },
    { label: "TasALERT", url: "https://www.tasalert.com/" },
    { label: "Tourism NT: weather and seasons", url: "https://northernterritory.com/plan/weather-and-seasons" },
  ],
});
