import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What is the most scenic campground in Australia?", "It depends on what you love. Lucky Bay in Western Australia has white sand and kangaroos on the beach, the Bay of Fires in Tasmania has orange rocks and clear water, and Tidal River in Victoria sits under granite peaks. Pick the coast, the forest or the desert you want and book early."],
  ["Do the best campsites need booking?", "Mostly yes. Popular national park campgrounds, such as Lucky Bay, Tidal River, Freycinet and the Namadgi camps, are booked online with the park agency and fill months ahead for summer and school holidays. A few, like the Bay of Fires camps, are first come, first served."],
  ["Which state has the cheapest scenic camping?", "Tasmania and Western Australia have many low-cost or free coastal camps, and national park camping is generally cheaper than a holiday park. Check the current fee for each camp, because park fees change and vary between states."],
  ["When is the best time to book a scenic campsite?", "Most park agencies open bookings several months ahead, and the best camps for Christmas and Easter go in the first days. Book as soon as your dates are settled, and keep a flexible mid-week option in case a weekend is full."],
] as const;

export default article({
  slug: "best-scenic-campsites-australia-by-state", publishAt: "2026-11-17",
  title: "Best Scenic Campsites in Australia, State by State: 2 or 3 Standout Camps Each",
  description: "Two or three standout campgrounds in every state and territory, with a line on why they are special and how to book, from Lucky Bay to the Bay of Fires.",
  category: "Camping guides", region: "Australia",
  places: ["Lucky Bay", "Tidal River", "Bay of Fires", "Cape Hillsborough", "Wilpena Pound", "Cotter Campground"],
  imageAlt: "White sand and turquoise water at the Bay of Fires, Tasmania",
  intro: "Australia has thousands of campgrounds, and a few of them are the kind you plan a whole trip around. They sit on a beach with kangaroos, under a granite peak, beside a gorge or at the edge of a rainforest. Here are two or three standout camps in each state and territory, with a line on why they are special and how to book. Most of the best ones are booked online with the park agency, often months ahead, so use the list to choose, then book early and keep a back-up night.",
  related: ["best-multi-day-walks-australia-2026-27", "tasmania-camping-loop", "great-ocean-road-camping-guide", "waterfalls-with-campsites-australia", "glamping-australia-by-state", "camping-fees-australia-2026"],
  sections: [
    section("The standouts at a glance", ["The table lists the camps by state or territory, with why each is worth the drive and how it is booked. Most national park camps are booked online with the park agency, and some of the most remote ones need a 4WD or a permit.", "Fees vary by park and season, so check the agency page for the price before you book."], ["Most are booked with the park agency", "Peak season sells out", "Check the fee for your dates"], {
      caption: "Standout campgrounds by state and territory, and how to book them.",
      head: ["State or territory", "Camps", "Why they stand out", "How to book"],
      rows: [
        ["New South Wales", "Euroka (Blue Mountains), Mungo Brush (Myall Lakes)", "Wallabies and bush views, and lakeside dunes", "NSW National Parks, online"],
        ["Victoria", "Tidal River (Wilsons Promontory), Cape Conran", "Granite peaks and white beaches, and a quiet East Gippsland coast", "Parks Victoria, online"],
        ["Queensland", "Cape Hillsborough, Noah Beach (Daintree)", "Kangaroos on the beach, and rainforest meeting the reef coast", "Queensland Parks, online"],
        ["Western Australia", "Lucky Bay (Cape Le Grand), Osprey Bay (Cape Range)", "Whitest sand and kangaroos, and Ningaloo reef from camp", "Parks and Wildlife Service, online"],
        ["South Australia", "Pondalowie Bay (Innes), Wilpena Pound", "Surf and cliffs on Yorke Peninsula, and ranges in the Flinders", "National Parks SA or the resort"],
        ["Tasmania", "Bay of Fires, Richardsons Beach (Freycinet)", "Orange rocks and clear water, and Wineglass Bay close by", "Parks Tasmania, some first come"],
        ["Northern Territory", "Gunlom (Kakadu), Wangi Falls (Litchfield)", "A plunge pool above the escarpment, and a waterfall swim", "Parks Australia or Parks NT, check"],
        ["ACT", "Cotter Campground, Honeysuckle Creek (Namadgi)", "River beside the city, and high country meadows", "Parks ACT, online"],
        ["Jervis Bay Territory", "Green Patch (Booderee)", "Beach camping with kangaroos and clear water", "Parks Australia, online"],
      ],
    }),
    section("New South Wales and Victoria", ["In New South Wales, Euroka in the Blue Mountains is a grassy camp where eastern grey kangaroos and wallabies graze at dusk, an hour or so from Sydney. Mungo Brush, in the Myall Lakes, sits beside the lake with sand dunes at the ocean end. Both are booked with NSW National Parks and are busy on long weekends.", "In Victoria, Tidal River is the base for Wilsons Promontory, with big beaches, walks and wombats at the camp. It is booked with Parks Victoria and sells out for summer. Cape Conran in East Gippsland is quieter, with beachfront sites and a calm stretch of coast, a long way from the crowds."], ["Euroka: kangaroos at dusk", "Tidal River sells out for summer", "Cape Conran is quieter"]),
    section("Queensland and the Territories", ["In Queensland, Cape Hillsborough near Mackay is famous for wallabies and kangaroos on the beach at sunrise. Noah Beach, in the Daintree, is a small camp where rainforest meets the beach, with a nearby walk, and it needs a booking with Queensland Parks.", "In the Northern Territory, Gunlom in Kakadu has a plunge pool at the top of the escarpment, and Wangi Falls in Litchfield has a waterfall swim that is open when water conditions allow. In the dry season, check the park pages for closures and camp bookings."], ["Cape Hillsborough at sunrise", "Gunlom plunge pool", "Check closures in the Top End"]),
    section("Western Australia and South Australia", ["In Western Australia, Lucky Bay in Cape Le Grand National Park near Esperance has the whitest sand in the country, with kangaroos that wander the beach. Osprey Bay in Cape Range National Park puts you beside the Ningaloo reef. Both are booked online with the Parks and Wildlife Service and sell out in the cooler months.", "In South Australia, Pondalowie Bay in Innes National Park is a surf and cliff camp at the tip of Yorke Peninsula. Wilpena Pound has a campground in the Flinders Ranges, with walks to the lookouts, and is booked through the resort that runs it."], ["Lucky Bay: book months ahead", "Osprey Bay beside the reef", "Wilpena: book the resort camp"]),
    section("Tasmania, the ACT and Jervis Bay", ["In Tasmania, the Bay of Fires has free camps along the northern end, where orange rocks and clear water make a summer favourite, though the camps are first come, first served. In Freycinet National Park, the campground at Richardsons Beach is booked in advance and is a short drive from Wineglass Bay.", "In the ACT, Cotter Campground is beside the river and close to the city, and Honeysuckle Creek in Namadgi is a quiet high country camp. At Jervis Bay Territory, Green Patch in Booderee National Park has beachfront sites and kangaroos on the grass."], ["Bay of Fires: arrive early", "Freycinet: book ahead", "Green Patch: book early for summer"]),
    section("Booking the best camps", ["Booking dates differ by state, but the pattern is the same: the best camps open months ahead and the summer and Easter nights go first. Set a reminder for the day bookings open, have your dates and a backup camp ready, and book with the park agency, not a third party. Our camping fees guide explains what to expect for national park camping.", "Be flexible with the days. A Tuesday to Thursday stay is often available when the weekend is full, and the shoulder seasons are usually the best weather for most of these camps."], ["Set a reminder for opening day", "Have a backup camp", "Mid-week is easier"]),
    { ...section("Plan your camps in AussieCamps", ["AussieCamps lists campgrounds, national parks and holiday parks across every state and territory, with each place's facilities, fees and rules as the agency publishes them. Filter by cost, dogs allowed or 4WD access, sort by the nearest, and save the camps you want to a trip with the weather for each stop.", "Campsite bookings for national parks are made with the park agency. AussieCamps runs on iPhone and is free to download, with in-app purchases."], ["Filter by cost and 4WD", "Save camps to a trip", "Book with the agency"]), cta: true },
  ],
  sources: [
    { label: "NSW National Parks: camping", url: "https://www.nationalparks.nsw.gov.au/camping-and-accommodation" },
    { label: "Parks Victoria: camping", url: "https://www.parks.vic.gov.au/" },
    { label: "Queensland Parks: camping", url: "https://parks.qld.gov.au/camping" },
    { label: "Parks and Wildlife Service WA: Cape Le Grand National Park", url: "https://exploreparks.dbca.wa.gov.au/park/cape-le-grand-national-park" },
    { label: "Parks and Wildlife Tasmania: camping", url: "https://parks.tas.gov.au/" },
    { label: "Tourism Australia", url: "https://www.australia.com/" },
  ],
});
