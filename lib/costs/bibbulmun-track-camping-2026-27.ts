import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Do I need to book the Bibbulmun Track campsites?", "No. The campsites and shelters cannot be reserved. You walk in and take a spot on a first come, first served basis, so carry a tent in case a shelter is full."],
  ["How much does it cost to camp on the Bibbulmun Track?", "The campsites are free to use. Walkers are encouraged to join the Bibbulmun Track Foundation, which looks after the track, and to register an end-to-end walk."],
  ["Is there drinking water at the shelters?", "Each campsite has a rainwater tank, but tanks can run low in summer. Treat all water and check the Foundation's track conditions page before you leave."],
  ["How long is the Bibbulmun Track?", "About 1,000 kilometres from Kalamunda in the Perth Hills to Albany on the south coast, in nine sections. The whole track usually takes six to eight weeks."],
] as const;

export default article({
  slug: "bibbulmun-track-camping-2026-27", publishAt: "2026-11-17",
  title: "Bibbulmun Track Camping 2026/27: Shelters, Water, Resupply and Season",
  description: "How to camp the Bibbulmun Track in Western Australia: the shelters and tent sites, water tanks, towns for resupply, trip registration and the best months to walk.",
  category: "Camping guides", region: "Western Australia",
  places: ["Bibbulmun Track", "Kalamunda", "Dwellingup", "Pemberton", "Walpole", "Albany"],
  imageAlt: "South coast of Western Australia seen from the Bibbulmun Track between Denmark and Peaceful Bay",
  intro: "The Bibbulmun Track runs about 1,000 kilometres from the Perth Hills to Albany, through jarrah and karri forest, heath and the southern coast. It is one of the world's great long walks, and it is unusually easy to camp: a simple shelter with a water tank and toilet stands about a day's walk apart, there is nothing to book and nothing to pay. That freedom is the catch, because you carry a tent for the nights when a shelter is full. Choose the season, plan your food around the towns and look after the water.",
  related: ["best-multi-day-walks-australia-2026-27", "hut-stays-australia", "south-west-wa-camping-loop", "camping-rules-western-australia", "camping-water-planning", "bushwalking-camp-rules-etiquette-australia"],
  sections: [
    section("The track in nine sections", ["The track starts at Kalamunda, in the hills east of Perth, and finishes at Albany on the south coast, in nine sections between towns. Most of it is gentle forest walking, with the hilliest sections at the northern end and the wild coastline near Walpole, Denmark and Albany.", "Few people walk it end to end in one go, because the whole track takes six to eight weeks. Walking one or two sections, or a long weekend between two towns, is the usual way to enjoy it."], ["Nine sections between towns", "Mostly gentle forest walking", "Six to eight weeks end to end"], {
      caption: "The nine sections of the Bibbulmun Track, north to south.",
      head: ["Section", "Towns at each end", "What it is like"],
      rows: [
        ["1", "Kalamunda to Dwellingup", "Jarrah forest and hills"],
        ["2", "Dwellingup to Collie", "Forest, rivers and the Murray"],
        ["3", "Collie to Balingup", "Farmland, forest and valleys"],
        ["4", "Balingup to Donnelly River", "Rolling forest and orchards"],
        ["5", "Donnelly River to Pemberton", "Tall karri forest"],
        ["6", "Pemberton to Northcliffe", "Karri forest and the Warren River"],
        ["7", "Northcliffe to Walpole", "Forest, heath and tingle trees"],
        ["8", "Walpole to Denmark", "Coast, inlets and forest"],
        ["9", "Denmark to Albany", "Granite headlands and beaches"],
      ],
    }),
    section("Shelters and tent sites", ["Each campsite along the track has a shelter with sleeping platforms, a water tank, a toilet and a picnic table, and they are spaced about a day's walk apart. They are free, cannot be booked and work on a first come, first served basis, so you carry a tent for the nights when the shelter is full.", "Use the designated tent sites at the campsites, and do not camp between campsites in the drinking water catchments, which cover most of the track between Kalamunda and Collie and south of the Blackwood River. Where the track is diverted, temporary campsites have only a water tank and a toilet, so a tent is essential."], ["Free and first come, first served", "Carry a tent every night", "No camping between sites in catchments"]),
    section("No booking, but tell someone", ["There is no booking system for the campsites, but there are still ways to look after yourself and the track. Register an end-to-end walk with the Bibbulmun Track Foundation, and fill in a trip intention form for longer walks so someone knows your route and dates.", "Large groups should use the group campsites, which are separate from the shelters, and check the Foundation's rules for group size before they go. Our camping fees page covers where you do pay in Western Australia, such as national park campgrounds near the track."], ["Register an end-to-end walk", "Fill in a trip intention form", "Groups use the group campsites"]),
    section("Water on the track", ["Each campsite has a rainwater tank, and the water is good to drink once treated, but tanks can run low at the end of summer or if a roof is damaged. Check the track conditions page before you leave, and treat all water. Many walkers carry two litres between tanks and more in the dry months.", "If a tank is reported empty, plan to carry extra from the last reliable source. See the camping water planning guide for how much to carry, and always follow the drinking water advice for each campsite."], ["Rainwater tanks at campsites", "Treat all water", "Check track conditions first"]),
    section("Food and resupply", ["The track passes through or close to a string of towns, including Dwellingup, Collie, Balingup, Donnelly River, Pemberton, Northcliffe, Walpole and Denmark, each with a shop, a cafe or a pub. That makes resupply simple, and most walkers carry four to six days of food at a time.", "Some walkers post food parcels to a roadhouse or accommodation on the way, which needs advance arrangement. Check the opening hours before you rely on a shop, particularly in the smaller towns and on public holidays."], ["Towns every few days", "Carry four to six days of food", "Check shop opening hours"]),
    section("Season, heat and fire", ["The best months for the track are winter and spring, roughly from July to November, when the days are cooler, the creeks are running and the wildflowers are out. Summer is hot, fire danger is high and sections of the track can close for bushfire or prescribed burns.", "Campfires are restricted, so carry a fuel stove and check the fire danger rating each day. Never walk on a day with an extreme or catastrophic rating. In winter, the track can be wet and muddy, so waterproof boots and a rain jacket are worth the weight."], ["July to November is best", "Carry a fuel stove", "Check closures and fire ratings"]),
    section("Getting there and back", ["The track starts at Kalamunda, about 30 kilometres from central Perth, and the Foundation lists transport options. Perth and Albany both have public transport, and the Foundation lists shuttle operators for the towns in between.", "Many walkers use a transfer service to get back to their car, or arrange a lift with a friend. Our guide to the south west covers the road trip around the track."], ["Transfers between towns", "Shuttle operators between towns", "Arrange the lift home early"]),
    { ...section("Plan the walk in AussieCamps", ["AussieCamps lists campgrounds, national parks and holiday parks near the trailhead, with each place's facilities, fees and rules as the agency publishes them. Save the night before and the night after to a trip, with the weather for each stop.", "Bibbulmun campsites are not booked, so AussieCamps is useful for the night before and after your walk. AussieCamps runs on iPhone and is free to download, with in-app purchases."], ["Camps near the trailhead", "Weather for each stop", "No booking needed on the track"]), cta: true },
  ],
  sources: [
    { label: "Bibbulmun Track Foundation", url: "https://www.bibbulmuntrack.org.au/" },
    { label: "Parks and Wildlife Service WA: Explore Parks", url: "https://exploreparks.dbca.wa.gov.au/" },
    { label: "Parks and Wildlife Service WA: alerts and closures", url: "https://alerts.dbca.wa.gov.au/" },
  ],
});
