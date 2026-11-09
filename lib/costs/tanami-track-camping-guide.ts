import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["How long is the Tanami Track?", "About 1,000 kilometres from the Stuart Highway near Alice Springs to Halls Creek. Allow two to three days, and more if you stop at Wolfe Creek Crater or add Purnululu."],
  ["Is the Tanami Track sealed?", "Parts of it are. The Northern Territory end has been sealed in stages, but long stretches are still gravel with corrugations and loose stones, and conditions change quickly. Check the road report before you go."],
  ["Can I camp along the Tanami Track?", "Camp at roadhouses, campgrounds and marked rest areas. Much of the road crosses Aboriginal land, where camping outside designated sites needs permission, so do not pull off and set up anywhere."],
  ["Do I need a permit for the Tanami Track?", "You do not need a permit to drive the main road, but you cannot leave it onto Aboriginal land without one. Alcohol restrictions apply in many communities along the way."],
] as const;

export default article({
  slug: "tanami-track-camping-guide", publishAt: "2026-11-10",
  title: "Tanami Track Camping Guide: Alice Springs to Halls Creek, Fuel, Camps and Rules",
  description: "How to drive and camp the Tanami Track between Alice Springs and Halls Creek: distance, road conditions, fuel, camps, Aboriginal land rules, the season and Wolfe Creek Crater.",
  category: "Camping guides", region: "Northern Territory",
  places: ["Alice Springs", "Tilmouth Well", "Yuendumu", "Rabbit Flat", "Halls Creek"],
  imageAlt: "4WD on the red-dirt Great Central Road near Tjukayirla, Western Australia",
  intro: "The Tanami Track is the outback shortcut between Alice Springs and the Kimberley. It runs about 1,000 kilometres through desert country to Halls Creek, saving a long loop through Darwin or Western Australia's coast, and it is quieter than most outback roads. It is also remote, with few services, rules for Aboriginal land and weather that changes quickly. Plan fuel carefully, camp only where you are allowed and travel in the dry season.",
  related: ["darwin-to-alice-springs-drive", "gibb-river-road-camping", "can-i-camp-on-aboriginal-land-without-a-permit", "can-i-take-alcohol-into-restricted-areas-on-an-outback-road-trip", "driving-with-road-trains-australia"],
  sections: [
    section("The route in short", ["The track leaves the Stuart Highway north of Alice Springs and heads north-west across the Tanami Desert, past Yuendumu and Rabbit Flat, then crosses into Western Australia and runs through Billiluna and Balgo country before reaching the Great Northern Highway near Halls Creek.", "It is a shortcut compared with the long loop through Darwin, and it links up well with Wolfe Creek Crater, Purnululu and the Gibb River Road. Fill up in Alice Springs and treat every other fuel stop as a top up."], ["About 1,000 km, mixed surface", "A shortcut to the Kimberley", "Fuel and supplies in Alice Springs"], {
      caption: "The main stops on the Tanami Track.",
      head: ["Stop", "What is there", "Camping", "Watch for"],
      rows: [
        ["Alice Springs", "Full services and supplies", "Caravan parks", "Last big shop and repairs"],
        ["Tilmouth Well", "Roadhouse and fuel", "Campground", "Near the start of the track"],
        ["Yuendumu", "Aboriginal community, store", "Not for camping", "Stay on the road, alcohol limits"],
        ["Rabbit Flat", "Roadhouse in season", "Roadhouse camp", "Limited opening days"],
        ["Balgo and Billiluna", "Communities with limited services", "Not for camping", "Check fuel before you rely on it"],
        ["Halls Creek", "Fuel, food, services", "Caravan park", "Wolfe Creek Crater is nearby"],
      ],
    }),
    section("Where to camp", ["Camp at the roadhouses and caravan parks, at Tilmouth Well, Rabbit Flat in season and Halls Creek, and at marked rest areas. Do not pull off into the bush, because the track crosses Aboriginal land where camping outside designated sites needs permission.", "Wolfe Creek Crater, a short drive south of Halls Creek, has a campground and is an easy side trip. Our guide to <a data-guide=\"can-i-camp-on-aboriginal-land-without-a-permit\">camping on Aboriginal land</a> explains the rules."], ["Camp at roadhouses and marked sites", "No bush camping on Aboriginal land", "Wolfe Creek Crater campground"]),
    section("Road conditions and vehicle", ["The surface is a mix of sealed sections and gravel, and the gravel can be rough, with corrugations and loose stones. Rain closes sections, so check the Northern Territory road report and Main Roads Western Australia before you set out and again along the way.", "Many rental agreements prohibit the Tanami, so confirm in writing. Carry two spare tyres, a compressor, spare water and a satellite messenger or a UHF radio, and pull well off the road when a road train comes through."], ["Check both road reports", "Two spare tyres", "Confirm your rental allows it"]),
    section("Season, heat and weather", ["May to September is the season, with warm days and cool nights. Summer is hot, and the wet season from about December to March can close the track for days.", "Plan fuel for the full gap between stops, carry at least 10 litres of water per person per day and tell someone your plan. Phone coverage is limited to the communities, so do not rely on it."], ["May to September", "10 litres of water per person a day", "Limited phone coverage"]),
    section("Permits and respect", ["You can drive the main road without a permit, but you cannot go off it onto Aboriginal land without one, and alcohol restrictions apply in many communities. Our <a data-guide=\"can-i-take-alcohol-into-restricted-areas-on-an-outback-road-trip\">outback alcohol guide</a> explains how to carry it legally.", "Keep to the road, ask before taking photos of people or places and do not collect souvenirs. Slow down through communities, where children, dogs and people may be on the road."], ["Stay on the road", "Alcohol limits apply", "Ask before photographing"]),
    { ...section("Plan the Tanami Track in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can save places to a trip and see the driving distance between stops, which shows the long gaps between fuel.", "Check conditions on the road reports before you drive. AussieCamps runs on iPhone."], ["See the distance between stops", "Filter by cost", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "NT Government: road report", url: "https://roadreport.nt.gov.au/" },
    { label: "Main Roads Western Australia: road conditions", url: "https://www.mainroads.wa.gov.au/" },
    { label: "Central Land Council: permits for Aboriginal land", url: "https://www.clc.org.au/" },
    { label: "Parks and Wildlife Service WA: Wolfe Creek Crater (Kandimalal)", url: "https://exploreparks.dbca.wa.gov.au/" },
  ],
});
