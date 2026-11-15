import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you sleep in your van in Byron Bay?", "Not in town. Byron Shire Council bans sleeping in vehicles on streets, in car parks and in reserves, and rangers patrol, especially in summer and school holidays. Book a holiday park or a campground instead."],
  ["Where can you camp in Byron Bay?", "In the holiday parks at Byron Bay, Suffolk Park and Broken Head, further along the coast at Brunswick Heads and Lennox Head, or in a booked national park campground in the hinterland, an hour or so inland."],
  ["Do I need to book camping in Byron Bay?", "Yes, and early. Holiday parks fill months ahead for summer, Christmas and Easter, and national park campgrounds need an online booking through NSW National Parks."],
  ["When is the best time to camp at Byron Bay?", "Autumn and spring have warm days, calmer crowds and lower prices than summer. Winter is mild and good for whale watching from the headland, while summer is busy, humid and storm-prone."],
] as const;

export default article({
  slug: "camping-byron-bay", publishAt: "2026-11-17",
  title: "Camping in Byron Bay: Holiday Parks, National Park Camps and Where to Base Yourself",
  description: "Where to camp around Byron Bay: the holiday parks at Byron, Suffolk Park and Broken Head, Brunswick Heads and Lennox Head, and the hinterland national park camps.",
  category: "Camping guides", region: "New South Wales",
  places: ["Byron Bay", "Broken Head", "Brunswick Heads", "Lennox Head", "Nightcap National Park", "Border Ranges National Park"],
  imageAlt: "The sun going down behind the headland at Wategos Beach, Byron Bay",
  intro: "Byron Bay is one of the best-loved beach towns in Australia and one of the hardest places to camp without planning. The council bans sleeping in vehicles in town, and the holiday parks fill months ahead in summer. The good news is that the coast around Byron has a string of parks within a short drive of the beaches, and the hinterland behind it has rainforest campgrounds that are quiet when the town is not. Book early, choose a base to suit the trip, and plan your days from there.",
  related: ["byron-noosa-gold-coast-campervan-rules", "sydney-to-byron-bay-drive", "brisbane-to-byron-bay-drive", "camping-rules-new-south-wales", "caravan-park-vs-holiday-park", "camping-gold-coast"],
  sections: [
    section("Where to base yourself", ["Staying in or near Byron Bay puts you close to the beaches, the lighthouse walk and the cafes, but it is also the busiest and most expensive option. Suffolk Park and Broken Head, south of town, are quieter and a short drive or cycle away. Brunswick Heads to the north and Lennox Head to the south are more relaxed again, and cheaper, with their own beaches and towns.", "If you want rainforest, waterfalls and cooler nights, the hinterland national park campgrounds are about an hour inland. They are basic, so they work best as a night or two between beach stays."], ["Byron for the town", "Suffolk Park and Broken Head for beaches", "Hinterland for rainforest"], {
      caption: "Where to camp around Byron Bay.",
      head: ["Base", "Distance from Byron town", "Best for", "Main limit"],
      rows: [
        ["Byron Bay parks", "In town to 5 minutes", "Walking to cafes and beaches", "Dearest and booked out first"],
        ["Suffolk Park and Broken Head", "10 to 15 minutes", "Beachfront stays, surf", "Short drive into town"],
        ["Brunswick Heads", "About 20 minutes", "Relaxed town, river and beach", "Popular with families in holidays"],
        ["Lennox Head", "About 25 minutes", "Surf, lake and headland", "Few sites in peak season"],
        ["Hinterland national parks", "45 to 90 minutes", "Rainforest and quiet", "Basic facilities, booked online"],
      ],
    }),
    section("Holiday parks at Byron Bay", ["Byron has several holiday parks, with a mix of powered and unpowered sites, cabins and camp kitchens. Some sit at Clarkes Beach and Belongil right beside the town, and others at Suffolk Park and along Broken Head Road have direct access to Tallow Beach. Most take tents, camper trailers and campervans.", "Beachfront sites are the first to go, and in peak season most parks set a minimum stay. Book as soon as you know your dates, and check the park's own page for fees and rules. Our caravan park and holiday park guide explains the difference between park types."], ["Book months ahead for summer", "Minimum stays in peak season", "Beachfront sites go first"]),
    section("Brunswick Heads and Lennox Head", ["Brunswick Heads, about 20 kilometres north, is a small river town with a main beach, a long foreshore and holiday parks beside the river and the sea. It is less crowded than Byron, with a good cafe street, and it is the usual choice for a base that is close to Byron without being in it.", "Lennox Head, south of Ballina, is known for its surf break and for Lake Ainsworth, a tea-tree stained lake behind the beach. It has holiday park sites close to the town and the beach, and is good for a quieter family stay."], ["Brunswick for a quieter base", "Lennox for surf and the lake", "Both fill in school holidays"]),
    section("National park camps in the hinterland", ["Nightcap National Park and Border Ranges National Park, behind Byron, have rainforest campgrounds booked online through NSW National Parks. Rummery Park, near Nightcap, is the closest to the coast, and Border Ranges has camps higher in the mountains, with walks through some of the oldest rainforest in the country. Sites are basic, with toilets and little else.", "Roads into the parks can be unsealed and boggy after rain, and there is little or no phone signal, so book ahead and check closures before you drive. Camping fees are charged per site, per night, so check the current rate on the booking page."], ["Booked online with NSW National Parks", "Unsealed roads, check after rain", "Little or no phone signal"]),
    section("The rules in town", ["Byron Shire Council bans sleeping in vehicles on streets, in car parks and in reserves, and enforces it, with fines for breaking the rule. Rangers patrol early and late, so do not count on staying unnoticed. Our Byron, Noosa and Gold Coast campervan rules guide explains the three councils' rules and fines.", "That also covers freedom camping on the beach and in the dunes. Use a holiday park or a booked campground and you will not have to think about it."], ["No sleeping in vans in town", "Fines are issued", "Use a park or booked camp"]),
    section("When to go", ["Summer is the peak season, with school holidays, Christmas and New Year pushing prices and crowds to their highest, and humid weather bringing afternoon storms. Autumn and spring are the sweet spot: warm days, warm water and easier bookings. Winter is mild and the best time for whale watching from the headland, with humpbacks passing from about June to November.", "Our best time to camp guide covers the seasons for the rest of New South Wales."], ["Autumn and spring are best", "Summer needs early booking", "Whales June to November"]),
    section("Getting here", ["From Sydney, Byron Bay is about nine hours up the Pacific Highway, so most people split it over a night or two. From Brisbane it is about two and a half hours, and from the Gold Coast about an hour and a half. Our Sydney to Byron Bay and Brisbane to Byron Bay drive guides cover the routes and camps on the way.", "Parking in town is limited and paid, and the lighthouse car park is small and busy. Leave the van at your park and walk, cycle or take the local bus."], ["Sydney about 9 hours", "Brisbane about 2.5 hours", "Leave the van at the park"]),
    { ...section("Plan Byron Bay in AussieCamps", ["AussieCamps lists holiday parks, campgrounds, national parks, rest areas and dump points around Byron Bay and the Northern Rivers, with each place's facilities, fees and rules as the agency publishes them. Filter by cost, dogs allowed or online booking, sort by nearest and save your short list to a trip with the weather for each stop.", "Holiday parks listed by BookEasy can be booked from the app, and national park campsites are booked with NSW National Parks. AussieCamps runs on iPhone, has no account and no ads, and is free to download, with in-app purchases."], ["Filter by online booking", "Trips with weather per stop", "Park camps via NSW National Parks"]), cta: true },
  ],
  sources: [
    { label: "NSW National Parks: Nightcap National Park", url: "https://www.nationalparks.nsw.gov.au/visit-a-park/parks/nightcap-national-park" },
    { label: "NSW National Parks: Rummery Park campground", url: "https://www.nationalparks.nsw.gov.au/camping-and-accommodation/campgrounds/rummery-park-campground" },
    { label: "Byron Shire Council", url: "https://www.byron.nsw.gov.au/" },
    { label: "Destination North Coast NSW", url: "https://www.visitnsw.com/destinations/north-coast" },
  ],
});
