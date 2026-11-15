import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What are the main types of camping in Australia?", "National park campgrounds, state forests, council and free camps, roadside rest areas, showgrounds, holiday parks, farm stays on private land, outback station stays and beach camps. They run from free to about $70 a night, and the right one depends on whether you want bush, power and showers, or a cheap bed on the way."],
  ["Where is camping cheapest in Australia?", "Free camps in Western Australia, Queensland, South Australia and the Northern Territory, state forests in Victoria and New South Wales, and council or showground camps in country towns. A national park campsite is the next step up, usually well under a holiday park."],
  ["Do I need to book a campsite in Australia?", "For national park camps, busy beach camps and holiday parks in school holidays, yes, and early. Free camps, rest areas and most state forest sites are first come, first served, so arrive by mid afternoon."],
  ["Which state is best for camping?", "It depends on the trip. Western Australia and the Outback are best for free camping, Victoria and Tasmania for bush and forest, Queensland and New South Wales for beaches and national parks, and the Northern Territory for the dry season. The table below pairs each state with its best style."],
] as const;

export default article({
  slug: "where-to-camp-in-australia", publishAt: "2026-12-16",
  title: "Where to Camp in Australia: Campsites by Type and State",
  description: "Where you can camp in Australia: national parks, state forests, free camps, rest areas, showgrounds, holiday parks and farm stays, with costs and the best style by state.",
  category: "Camping guides", region: "Australia",
  places: ["National parks", "State forests", "Holiday parks", "Station stays", "Beach camps"],
  imageAlt: "Two dome tents pitched on grassy bush ground among gum trees near Mansfield, Victoria",
  intro: "Australia has nine main ways to camp, from a free roadside rest area to a powered site with a pool, and most trips mix a few of them. National park campgrounds are the classic bush choice, state forests and council camps keep costs low, and holiday parks are the easy option when you want power, showers and a laundry. Below: what each type costs, who it suits, and the best kind of camping in each state.",
  related: ["choosing-campsite-australia", "is-free-camping-legal-australia", "caravan-park-vs-holiday-park", "camping-rules-new-south-wales", "camping-rules-victoria", "camping-rules-queensland"],
  sections: [
    section("Nine ways to camp", ["The choice comes down to three things: how much you want to spend, how many comforts you need, and how far from town you want to be. A booked national park camp and a free forest clearing can be an hour apart and feel like different holidays.", "Costs below are rough nightly guides and change by state, season and site, so check the land manager before you go."], ["Mix types on a long trip", "Cheapest is not always easiest", "Check the land manager's page"], {
      caption: "Types of campsite in Australia, with rough costs.",
      head: ["Type", "Rough cost a night", "Best for"],
      rows: [
        ["National park campground", "About $7 to $30 a person, often booked", "Bush, beaches and walks"],
        ["State forest", "Free to about $15", "Quiet camps with a campfire where allowed"],
        ["Council or free camp", "Free to about $25", "Cheap stops in country towns"],
        ["Rest area", "Free, usually one night", "A sleep on a long drive"],
        ["Showground", "About $15 to $40", "Power and showers in a small town"],
        ["Holiday park", "About $35 to $70 a site, cabins more", "Families, power, pools, wet weather"],
        ["Farm stay or private land", "About $15 to $40", "Paddocks, animals, a quieter stay"],
        ["Station stay", "About $15 to $40 a person", "Outback nights and sunsets"],
        ["Beach camp", "Park fee, plus a permit in some places", "Sand, surf and a fire where allowed"],
      ],
    }),
    section("National parks, state forests and beaches", ["National park campgrounds are run by the state park agencies and are the most scenic option. Most charge a nightly fee, many need an online booking, and the popular ones sell out for summer and Easter. Facilities range from a bush toilet and a table to hot showers.", "State forests are working forests with simple, often free camping, and a few charge a small fee or need a permit. Beach camping exists in some parks and on some coasts, including K'gari and parts of the Western Australian south coast, but it is banned on many beaches, so check the rules for the exact spot."], ["Book popular parks months ahead", "Forests are basic and quiet", "Beaches are only open where signed"]),
    section("Free camps, rest areas and showgrounds", ["Free and cheap camps are mostly council or shire sites, roadside rest areas and some Crown land. Rest areas are for a night or two to break a drive, not a holiday, and a few states ban overnight stays at many of them. Councils often set a limit of one to three nights and ask you to be self-contained.", "Showgrounds and small-town camps usually cost a little and give you power and showers. They are handy in the outback, where the next paid site can be a long way off, and they are friendly to caravans."], ["Read the sign for night limits", "Take your rubbish with you", "Pay at the honesty box or office"]),
    section("Holiday parks, farm stays and station stays", ["Holiday parks sell powered and unpowered sites and cabins, with showers, kitchens, laundries and often a playground or pool. They suit families, wet weather and anyone towing a van. The chains offer memberships and the rates jump in school holidays.", "Farm stays put you on private land, often with a paddock site, a fire pit and a view, and are booked directly or through an online site. Outback station stays offer a similar mix of cheap nights, bush sunsets and the chance to hear the local stories."], ["Holiday parks suit wet weather", "Book farm stays directly", "Ask about station stay facilities"]),
    section("Best camping by state", ["Each state has a style it does best. This is a guide to what to look for first, not a ranking, and the state rules guides cover the details.", "Check the state rules guide before you go, because fire rules, permits and night limits differ across the borders."], ["Read the state rules guide", "Match the style to your season", "Mix free and paid nights"], {
      caption: "The best kind of camping in each state, with standout areas.",
      head: ["State", "Best style", "Standout areas"],
      rows: [
        ["New South Wales", "National parks and coastal parks", "Jervis Bay, Snowy Mountains, Murramarang, Blue Mountains"],
        ["Victoria", "State forests and high country", "Grampians, Mansfield high country, Wilsons Promontory, Great Ocean Road"],
        ["Queensland", "National parks, beaches and council camps", "K'gari, Carnarvon Gorge, Cape Hillsborough, Outback Queensland"],
        ["Western Australia", "Free camps and remote parks", "Cape Range, Karijini, Cape Le Grand, South West"],
        ["South Australia", "Parks, Crown land and the coast", "Flinders Ranges, Fleurieu Peninsula, Coorong, Eyre Peninsula"],
        ["Tasmania", "National parks and free coastal camps", "Bay of Fires, Freycinet, Cradle Mountain"],
        ["Northern Territory", "Park camps in the dry season", "Kakadu, Litchfield, the Red Centre"],
        ["ACT", "Booked camps and nearby NSW forests", "Namadgi National Park, Canberra showground"],
      ],
    }),
    { ...section("Find where to camp in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them. Each place also has photos, weather and Street View.", "You can filter by cost (Free or Paid), dogs allowed, 4WD access, minimum rating, online booking and popular features such as toilets, drinking water, showers, phone reception and campfires, or narrow to a state or territory. Save places to collections, build a trip with Add stop and see the driving distance and time for each leg, with dates, notes and weather per stop.", "The whole directory is inside the app, so search, filters and place details work with no signal. There is no account and no ads, and it runs on iPhone. Always check the sign at the site and the land manager before you settle in."], ["Filter by cost and facilities", "Build a trip with Add stop", "Place details work with no signal"]), cta: true },
  ],
  sources: [
    { label: "NSW National Parks: camping", url: "https://www.nationalparks.nsw.gov.au/camping-and-accommodation" },
    { label: "Parks Victoria: camping", url: "https://www.parks.vic.gov.au/things-to-do/camping" },
    { label: "Queensland Parks and Forests: camping", url: "https://parks.qld.gov.au/camping" },
    { label: "Parks and Wildlife Service WA", url: "https://www.parks.wa.gov.au/" },
    { label: "South Australia National Parks", url: "https://www.parks.sa.gov.au/" },
    { label: "Tasmania Parks and Wildlife Service", url: "https://parks.tas.gov.au/" },
  ],
});
