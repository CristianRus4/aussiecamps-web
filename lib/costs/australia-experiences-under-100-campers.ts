import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What are the best free things to do in Australia for campers?", "Coastal walks, national park day walks, lookouts, beaches, free swimming holes and lagoons, and stargazing from camp. Several state art galleries and museums also have free general entry."],
  ["Are Australian hot springs free?", "Some are. The thermal pools around Mataranka and Katherine in the Northern Territory are free to enter, while resort-style hot springs such as Peninsula Hot Springs in Victoria charge, so check prices before you plan around them."],
  ["Do I have to pay to enter national parks in Australia?", "It depends on the state. Many parks are free, while others charge a day-use fee per vehicle or sell a multi-day pass, so check the park agency page before you go. A pass often works out cheaper than paying day by day."],
  ["How do I keep a day out under A$100 for a couple?", "Pair one paid activity with free ones: a ferry, a cave tour or a park pass, then walks, swims and a lookout. Cook at camp and carry water to keep the rest of the day close to free."],
] as const;

export default article({
  slug: "australia-experiences-under-100-campers",
  title: "Australia experiences under A$100 for campers: free walks, hot springs and cheap days out",
  description: "Free and cheap things to do on an Australian camping trip: coastal walks, national parks, hot springs, swimming holes, galleries, ferries and cave tours, with ideas by state.",
  category: "Costs & budget", region: "Australia",
  places: ["Bondi", "Coogee", "Mataranka", "Katherine", "Phillip Island", "Cairns", "Manly", "Sorrento", "Queenscliff"],
  imageAlt: "Sydney Harbour and the Opera House seen from a ferry",
  intro: "Camping already keeps the cost of a trip down, and the best things to do in Australia are often free: a coastal walk, a swimming hole, a lookout at sunset. For a cheap day out, a ferry ride, a cave tour or a park entry fee usually stays well under A$100 for a couple. Here are free and low-cost ideas for each state, with prices kept general because fees change.",
  related: ["australia-travel-cost-2026", "campervan-road-trip-budget-australia", "two-week-australia-trip-cost", "waterfalls-with-campsites-australia", "glow-worm-caves-camping-australia", "camping-fees-australia-2026"],
  sections: [
    section("Free walks and lookouts", ["Australia's best-known walks cost nothing. The coastal path from Bondi to Coogee in Sydney passes rock pools, cliffs and beaches, and takes a relaxed couple of hours. Most national parks have day walks from the car park that are free on foot, even where the park charges for the car.", "Lookouts are the cheapest views in the country. Pick one near camp for sunrise or sunset, carry water and a hat, and check the weather before you leave."], ["Walk before the heat", "Carry water always", "Sunset lookouts cost nothing"]),
    section("Swimming holes, lagoons and pools", ["Many towns have free public swimming. In Queensland, the Cairns Esplanade Lagoon and South Bank's Streets Beach in Brisbane are free, and beaches with patrolled swimming areas are free everywhere. Ocean pools and rock pools along the New South Wales coast are free, including several around Sydney and Newcastle.", "In the Northern Territory, swimming holes such as Berry Springs and the plunge pools of Litchfield National Park are free to enter, though crocodile warnings apply and you should always obey signs. Never swim in a waterway marked as unsafe."], ["Swim between the flags", "Obey crocodile signs", "Rock pools suit calm days"]),
    section("Hot springs: free and not", ["The Northern Territory has the best free hot water. The thermal pool at Mataranka and the hot springs near Katherine are free to enter, and make a perfect stop after a long day on the Stuart Highway. Bring a hat, take care in the hot water and keep an eye out for signs about water quality.", "Not every hot spring is cheap. Peninsula Hot Springs on Victoria's Mornington Peninsula is a bathing experience with entry fees, so check prices before you plan a day around it. Hot springs in other states usually charge too."], ["Free pools suit a night stop", "Check resort prices first", "Watch water-temperature signs"]),
    section("Cheap days out", ["A single paid activity is easy to fit into a budget day. Ferries are a good example: a Manly ferry ride across Sydney Harbour is a cheap way to see the city, and the Sorrento to Queenscliff ferry links the Mornington and Bellarine peninsulas, with foot passengers paying much less than a vehicle. The Penguin Parade at Phillip Island is roughly in range for one person, though prices change and peak seasons book out.", "Cave tours are another good one. Many guided cave tours cost under A$50 a person and are worth doing on a wet day, so check opening times in school holidays. State art galleries and museums in several states are free for general entry, with charges only for special exhibitions."], ["Book popular tours early", "Free galleries on wet days", "Check school holiday hours"]),
    section("Park fees and passes", ["Entry to national parks differs by state. Some parks charge nothing, some charge a per-vehicle day fee that usually sits under A$20, and some states sell passes for longer stays. If you are visiting several parks in a week, a pass often saves money.", "Camping fees in national parks are separate from entry fees. Our camping fees guide covers what to expect, and our free camping guides cover places where an overnight stay costs nothing."], ["Passes beat daily fees", "Camping fees are separate", "Check each park's agency page"]),
    section("Ideas by state", ["The table below picks one or two ideas for each state or territory. Most are free or well under A$50 a person, and prices change, so check the official page before you go."], ["Pair free with one paid day", "Check prices before you go", "Cook at camp"], { caption: "Free and cheap experiences by state, November 2026.", head: ["State", "Free idea", "Cheap idea"], rows: [
      ["New South Wales", "Bondi to Coogee coastal walk", "Manly ferry across Sydney Harbour"],
      ["Victoria", "Walks at Wilsons Promontory", "Sorrento to Queenscliff ferry, or Phillip Island Penguin Parade"],
      ["Queensland", "Cairns Esplanade Lagoon, South Bank in Brisbane", "Park entry or a short river or reef trip"],
      ["South Australia", "Coastal walks around Adelaide and the Fleurieu", "A cave tour at Naracoorte"],
      ["Western Australia", "Beach and stargazing at camp", "A national park day-use fee"],
      ["Northern Territory", "Mataranka and Katherine hot springs", "Cruising Katherine Gorge, or a day at Kakadu"],
      ["Tasmania", "Short walks and lookouts", "Park pass for a few days"],
    ] }),
    { ...section("Plan the trip in AussieCamps", ["Build a trip with Add stop, using places from the app, saved pins or any address, and see the driving distance and time between each leg. Filter by Cost to show Free places to stay, and add Dogs allowed, 4WD access or minimum rating to narrow the list.", "Save places to collections such as Want to visit, tick stops as visited, and use Share a trip to send your plan to a friend. AussieCamps is an iPhone app with no account and no ads."], ["Filter by Cost: Free", "Save to Want to visit", "Share a trip with friends"]), cta: true },
  ],
  sources: [
    { label: "Waverley Council: Bondi to Coogee coastal walk", url: "https://www.waverley.nsw.gov.au/" },
    { label: "NSW National Parks and Wildlife Service", url: "https://www.nationalparks.nsw.gov.au/" },
    { label: "Parks Victoria", url: "https://www.parks.vic.gov.au/" },
    { label: "Northern Territory Parks and Wildlife", url: "https://nt.gov.au/leisure/parks-reserves" },
    { label: "Tasmania Parks and Wildlife Service", url: "https://parks.tas.gov.au/" },
    { label: "Visit Victoria", url: "https://www.visitvictoria.com/" },
  ],
});
