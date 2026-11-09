import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Where can I camp for free in Tasmania?", "At the Bay of Fires campgrounds on the north-east coast, which are free and take no bookings; at free Parks and Wildlife Service campgrounds such as Huon and Teds Beach in Southwest National Park; at council sites that allow it, often for self-contained vehicles only; and on most Sustainable Timber Tasmania land unless a sign says no."],
  ["Do I need a parks pass to free camp in Tasmania?", "Only inside a national park. Free campgrounds in a national park, such as Huon and Teds Beach, still need a valid parks pass. The Bay of Fires campgrounds south of Mount William National Park are in a conservation area, but the northern end of the bay lies inside the park, where the pass applies."],
  ["Can you free camp in a campervan in Tasmania?", "Yes, at council sites that take self-contained vehicles, at free park and conservation area campgrounds, and on forestry land where no sign prohibits it. Northern Midlands Council, for example, issues a free permit for self-contained vehicles to stay up to 48 hours."],
  ["Is free camping allowed anywhere on the roadside in Tasmania?", "No. On reserved land you must not camp in a camping-prohibited area or within 500 metres of a road outside a designated camping area, and councils set their own rules on their land. Use a signed camp instead."],
] as const;

export default article({
  slug: "free-camping-tasmania", publishAt: "2026-11-09",
  title: "Free Camping in Tasmania 2026: Bay of Fires, Free Park Camps and Council Sites",
  description: "Where to camp for free in Tasmania: the Bay of Fires, free park campgrounds, council sites for self-contained vans and forestry land, and when a parks pass still applies.",
  category: "Camping guides", region: "Tasmania",
  places: ["Bay of Fires", "Southwest National Park", "Huon campground", "Teds Beach", "Northern Midlands"],
  imageAlt: "Granite boulders covered in orange lichen beside clear blue water at the Bay of Fires on Tasmania's north-east coast",
  intro: "Yes, you can camp for free in Tasmania, and some of the island's best coast is free. The Bay of Fires campgrounds on the north-east coast charge nothing and take no bookings, Huon and Teds Beach in Southwest National Park are free park camps, and many councils let self-contained vehicles stay a night or two. Most Sustainable Timber Tasmania land is open to campers unless a sign says no. Inside national parks you still need a parks pass, and roadside camping on reserved land is not allowed.",
  related: ["camping-rules-tasmania", "tasmania-camping-loop", "can-i-take-a-campervan-or-caravan-on-the-spirit-of-tasmania", "is-free-camping-legal-australia", "best-free-camping-apps-australia"],
  sections: [
    section("The free camps on the coast", ["The Bay of Fires, north of St Helens, is the best known free camping in Tasmania: a string of campgrounds behind white beaches and orange granite, managed by Parks and Wildlife, free and first come. Camp only in the designated campgrounds, and arrive early in summer, when the beachfront sites go first.", "The northern end of the bay lies inside Mount William National Park, where a parks pass is needed. Further along the east coast, several coastal reserves and conservation areas have basic free or low-cost camps, with pit toilets at most and no drinking water, so fill up in town."], ["Bay of Fires: free, no booking", "Camp only in the campgrounds", "Bring all your water"], {
      caption: "Where you can camp for free in Tasmania, and the main limit at each.",
      head: ["Where", "Booking", "Parks pass", "Watch for"],
      rows: [
        ["Bay of Fires campgrounds", "None, first come", "Only in Mount William National Park", "Designated campgrounds only"],
        ["Free national park campgrounds", "None at Huon and Teds Beach", "Yes", "Fuel stove only in much of the wilderness"],
        ["Council camps", "Usually none; some need a free permit", "No", "Often self-contained vehicles only; limits vary"],
        ["Sustainable Timber Tasmania land", "None", "No", "Not where a sign prohibits camping"],
      ],
    }),
    section("Free park campgrounds", ["Some Parks and Wildlife Service campgrounds charge no camping fee. Huon and Teds Beach in Southwest National Park take no bookings and cost nothing, and the walker camps at Wineglass Bay, the Hazards and Cooks Beach in Freycinet, and Encampment Cove on Maria Island are free to camp as well.", "A free campground inside a national park still needs a parks pass, which every visitor needs to enter any Tasmanian national park. If you plan to visit several parks, the holiday pass covers them all for up to two months."], ["Huon and Teds Beach: free", "A parks pass still applies", "Holiday pass covers two months"]),
    section("Council sites for campervans", ["Many Tasmanian councils welcome travellers but set their own conditions, and most free council sites are for self-contained vehicles with a toilet and grey water tank on board. Northern Midlands Council issues a free permit for self-contained vehicles to stay up to 48 hours, and Central Coast Council allows up to three nights but is moving its sites to a paid permit of $15 a night.", "Because the rules change from one council to the next, read the sign at each site and check the council's page rather than an old review. Without a self-contained vehicle, a low-cost showground or a caravan park is often the better night."], ["Self-contained vehicles first", "Northern Midlands: 48 hours", "Check each council's sign"]),
    section("Forestry land and the roadside", ["Sustainable Timber Tasmania welcomes camping on the land it manages, except where signs prohibit it, which opens up quiet bush camps on forest roads across the island. Harvesting can close roads, so obey closure signs and keep out of active coupes.", "Pulling over on the roadside is another matter. On reserved land you must not camp in a camping-prohibited area or within 500 metres of a road outside a designated camping area, with a fine of up to 20 penalty units. Find a signed camp instead."], ["Forestry land unless signed", "No camping near roads on reserves", "Obey harvesting closures"]),
    section("Fires, weather and getting there", ["Much of the wilderness, including Cradle Mountain-Lake St Clair, Freycinet and Mount Field, is a Fuel Stove Only Area where campfires are banned all year, and on a Total Fire Ban day all outdoor fires are banned in parks. Bring a gas stove and expect to use it.", "Tasmanian weather turns cold, wet and windy in any month, even at sea level in summer, so pack for rain. Most travellers bring a vehicle on the Spirit of Tasmania, and fresh fruit and vegetables cannot come with you, so eat or bin them before you sail."], ["Fuel stove only in many parks", "Pack for rain in summer", "No fresh produce on the ferry"]),
    { ...section("Find free camps in AussieCamps", ["AussieCamps maps 27 Tasmanian park campgrounds and 80 public dump points, with the facilities, fees and rules each agency publishes. You can filter by cost, including free sites, and save camps to a trip that adds up the driving between them.", "Place details are saved on the phone for use without signal, useful on the west coast and in the south-west. The map, routing and weather need a connection, and AussieCamps runs on iPhone."], ["Filter by cost", "80 dump points", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Parks and Wildlife Service: park passes and entry fees", url: "https://parks.tas.gov.au/explore-our-parks/know-before-you-go/park-passes-and-entry-fees" },
    { label: "Parks and Wildlife Service: Southwest National Park camping", url: "https://parks.tas.gov.au/explore-our-parks/southwest-national-park/southwest-camping" },
    { label: "Parks and Wildlife Service: campfires and fire bans", url: "https://parks.tas.gov.au/explore-our-parks/know-before-you-go/campfires-and-fire-bans" },
    { label: "Sustainable Timber Tasmania: visiting the land we manage", url: "https://sttas.com.au/access-permits/visiting-land-we-manage/" },
    { label: "Northern Midlands Council: RV friendly towns", url: "https://northernmidlands.tas.gov.au/community/facilities/rv-friendly-towns" },
    { label: "Central Coast Council: camping sites", url: "https://www.centralcoast.tas.gov.au/play/tourism/caravanning-camping/council-managed-camping-sites/" },
  ],
});
