import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Is camping in state forests free in Australia?", "In New South Wales, Victoria and on most Tasmanian forestry land, yes. Queensland charges for every camp in a state forest, and South Australia's forest campgrounds are booked and paid online."],
  ["Do I need to book a state forest campsite?", "Not in New South Wales or Victoria, where sites are first come, first served. In Queensland you must book and pay for a permit before you arrive, and ForestrySA campgrounds in South Australia are booked online."],
  ["Can I have a campfire in a state forest?", "Only when no ban applies. New South Wales state forests declare solid fuel fire bans that allow gas appliances only, and ForestrySA bans fires in its forests from 1 November to 30 April. Check the agency's page for the day you camp."],
  ["Are dogs allowed in state forests?", "Often, on a lead or under control. New South Wales and Victoria allow them in state forests, and Queensland accepts them in some state forests, though not in its national parks."],
] as const;

export default article({
  slug: "can-i-camp-in-a-state-forest-in-australia", publishAt: "2026-12-17",
  title: "Can I Camp in a State Forest in Australia? Free and Paid by State 2026",
  description: "Yes, in most states. State forests are free in NSW, Victoria and Tasmania, paid in Queensland and booked in South Australia. Rules by state, 2026.",
  category: "Rules & safety", region: "Australia",
  places: ["State forests", "Forest campgrounds", "Pine plantations", "Forest reserves"],
  imageAlt: "A still dam surrounded by eucalypt forest at Firth Park Campground in Wombat State Forest, Victoria",
  intro: "Yes, in most states, and the price depends on where the forest is: New South Wales and Victoria let you camp in state forests for free without booking, Tasmania welcomes camping on forestry land unless a sign says no, Queensland charges for every camp, and South Australia books its forest campgrounds online. Western Australia limits park camping to designated campgrounds, so check its forest rules before you stop. The pages below were read on 28 October 2026.",
  related: ["is-free-camping-legal-australia", "camping-rules-new-south-wales", "camping-rules-victoria", "camping-fees-australia-2026"],
  sections: [
    section("State forests by state", ["A state forest is working forest land that also takes campers, and each state's forestry agency sets its own rules. They are not national parks, so the national park booking systems and entry passes mostly do not apply."], ["Rules sit with the forestry agency", "Free in some states, paid in others", "Read the sign at the site"], {
      caption: "Camping in state forests by state and territory, read 28 October 2026.",
      head: ["State", "Camping in state forests", "Cost and booking"],
      rows: [
        ["New South Wales", "Almost anywhere in a state forest except Cumberland and Strickland, for up to four weeks unless a sign says less. Not in picnic areas, pine plantations or closed forest.", "Free, first come, first served"],
        ["Victoria", "Anywhere at least 20 metres from a waterway for up to 28 consecutive nights, or in a campground. In forest reserves, use the campgrounds provided.", "Free, no bookings. Murrindindi Scenic Reserve charges a small permit fee"],
        ["Queensland", "Every camp in a state forest needs a permit, issued for a named camping area.", "$7 a person a night from 1 July 2026, booked and paid before arrival"],
        ["Tasmania", "Sustainable Timber Tasmania welcomes camping on its land except where signs prohibit it.", "Free"],
        ["South Australia", "ForestrySA runs bookable forest campgrounds in the Mount Lofty Ranges.", "Booked online; camping closed for part of the year at some sites"],
        ["Western Australia", "Camping in WA's parks is allowed only in designated campgrounds. The page read did not set out a state forest rule.", "Check the Department of Biodiversity, Conservation and Attractions"],
      ],
    }),
    section("New South Wales and Victoria: free and first come", ["Forestry Corporation of NSW runs the state forests, and every one except Cumberland and Strickland allows free camping for up to four weeks. Sites cannot be booked, many forests have no bins, and solid fuel fire bans limit cooking to gas appliances on declared days, with a maximum penalty of $2,200.", "In Victoria the rule is a distance, not a pitch: pick a spot at least 20 metres from a waterway and stay no more than 28 consecutive nights. More than 300 forest campgrounds are free, and sites cannot be booked. Closures in forest roads are mapped by Forest Fire Management Victoria, and driving a closed road can bring a fine."], ["NSW: four weeks, not Cumberland or Strickland", "Victoria: 20 m from water, 28 nights", "Fire bans can limit you to gas"]),
    section("Queensland: a permit for every camp", ["Queensland treats camping in a state forest like camping in a national park: you book and pay for a permit before you arrive, through the Queensland National Parks Booking Service or by phone on 13 QGOV (13 74 68). The fee is $7 a person a night from 1 July 2026, and about 525 camping areas across the parks and forests use the system.", "Camping without a permit, or with more people than the permit covers, carries a maximum penalty of 20 penalty units. Dogs are not allowed in Queensland national parks, though some state forests accept them."], ["Book before you arrive", "$7 a person a night", "Same permit system as the parks"]),
    section("South Australia and Tasmania", ["ForestrySA offers campgrounds in the Mount Lofty Ranges, including Chookarloo in Kuitpo Forest and Chalk's and Rocky Paddock in Mount Crawford, booked online. Chalk's and Rocky Paddock list a camping ban from 1 December to 31 March, and fires are banned in ForestrySA forests from 1 November to 30 April.", "Tasmania takes the opposite approach. Sustainable Timber Tasmania welcomes camping on the land it manages except where signs prohibit it, so look for signs at the gate and on the track before you pitch."], ["SA: book online", "SA: some sites closed 1 December to 31 March", "Tasmania: free unless signed"]),
    section("What facilities to expect", ["Facilities are basic. Victorian forest campgrounds typically have a pit toilet, a picnic table and a fireplace, and some are only a cleared area. New South Wales forests often have no bins, and Queensland says none of its permit camping areas has electricity.", "Carry your own water and take every bit of rubbish out. A forest campsite is not a holiday park, and the guide to powered and unpowered sites covers what a paid site adds."], ["Bring water", "Take rubbish home", "No power at permit camps"]),
    section("Fire, closures and weather", ["Forest closures and fire bans change by the day. Check the forestry agency's alerts and the state fire service before you drive in, because tracks close after rain and in fire danger, and a road closure applies even when a campground looks open on a map.", "Dogs are welcome in all New South Wales state forests if under control, and Forestry Corporation asks that they stay on a lead. Victorian state forests also allow dogs on a lead or under control around camps."], ["Check alerts on the day", "Closed roads carry fines", "Dogs on a lead"]),
    { ...section("Find forest campgrounds in AussieCamps", ["AussieCamps carries 1,838 campgrounds from state park agencies and forestry agencies, and you can filter by cost to show the free ones. A place page lists the facilities and rules the agency publishes, and you can keep the ones you like in Starred or Want to Visit.", "The details of each place sit on the phone, so they open without reception, while the map, directions, weather and photos need a connection. It runs on iPhone only, and a listing never replaces the sign at the forest gate."], ["Filter by cost", "Save the shortlist", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Forestry Corporation of NSW: camping in NSW state forests", url: "https://www.forestrycorporation.com.au/visit/virtual-visitor-centre/camping-in-nsw-state-forests" },
    { label: "Forestry Corporation of NSW: solid fuel fire bans", url: "https://www.forestrycorporation.com.au/visit/solid-fuel-fire-bans" },
    { label: "Victorian Government: camping in Victoria", url: "https://www.vic.gov.au/camping" },
    { label: "Explore Outdoors Victoria: before you go", url: "https://www.exploreoutdoors.vic.gov.au/where-to-start/before-you-go" },
    { label: "Queensland Parks: camping bookings and permits", url: "https://parks.qld.gov.au/camping/bookings" },
    { label: "Queensland Parks: where to camp", url: "https://parks.qld.gov.au/camping/where-to-camp" },
    { label: "ForestrySA: camping", url: "https://forestrysa.com.au/recreation/camping" },
    { label: "Sustainable Timber Tasmania: camping", url: "https://www.sttas.com.au/recreation/camping" },
    { label: "Explore Parks WA: where and when to camp", url: "https://exploreparks.dbca.wa.gov.au/where-and-when-camp" },
  ],
});
