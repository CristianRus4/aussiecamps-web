import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free in Launceston?", "No. Launceston council bans camping and overnight parking on streets, in parks and at the Cataract Gorge. The free options are outside the city: council permits for self-contained vehicles in the Northern Midlands towns, and forestry land in the hills where no sign prohibits it."],
  ["Where can a campervan stay near Launceston?", "Ross and Campbell Town, about an hour south on the Midland Highway, are RV friendly and the Northern Midlands Council has issued free permits for self-contained vehicles for up to 48 hours. Caravan parks in Launceston and along the Tamar suit vans without a toilet on board."],
  ["Is Narawntapu National Park good for camping near the Tamar Valley?", "Yes. It is a short drive from the Tamar with beach and bush camps, and wallabies and wombats come out at dusk. Camping is booked and paid, and a parks pass is needed to enter, so it is cheap rather than free."],
  ["When is the best time to camp in the Tamar Valley?", "Summer and early autumn, from December to April, are the driest and warmest. Nights are cool all year, and frosts are common in winter, so a warm sleeping bag helps in every season."],
] as const;

export default article({
  slug: "free-camping-near-launceston-tamar-valley",
  title: "Free Camping Near Launceston and the Tamar Valley: Midlands Permits, Forests and Cheap Camps",
  description: "Where to camp near Launceston and the Tamar Valley: free Midlands permits at Ross and Campbell Town, forestry land, Narawntapu and Ben Lomond camps, and where camping is banned.",
  category: "Camping guides", region: "Tasmania",
  places: ["Ross", "Campbell Town", "Tamar Valley", "Narawntapu National Park", "Ben Lomond"],
  imageAlt: "The sandstone arches of Ross Bridge over the Macquarie River in the Tasmanian Midlands, under a blue sky",
  intro: "Launceston itself is a city for caravan parks, not free camps. The cheap nights are in the country around it: the Midlands towns of Ross and Campbell Town, where self-contained vans can stay a night or two on a council permit, forestry land in the hills, and low-cost park camps at Narawntapu, Ben Lomond and Mount William. The Tamar Valley has more vineyards than camps, but a short drive in any direction opens the choices up.",
  related: ["free-camping-tasmania", "camping-rules-tasmania", "hobart-to-launceston-drive", "tasmania-camping-loop", "can-i-take-a-campervan-or-caravan-on-the-spirit-of-tasmania"],
  sections: [
    section("Why Launceston is not a free camping town", ["The city council signs against camping in parks, reserves, car parks and the Cataract Gorge area, and the neighbouring Tamar councils keep overnight stays to caravan parks and a few council grounds. Rangers do check, and a tidy van with the curtains drawn is not exempt.", "Where free or cheap camping does exist is further out, so plan to base yourself in the country and drive in for the day."], ["No camping in the city", "Base yourself in the country", "Check council signs"], {
      caption: "Places to stay within about an hour and a half of Launceston, with cost and the main limit.",
      head: ["Where", "Cost", "Drive from Launceston", "Main limit"],
      rows: [
        ["Ross and Campbell Town council sites", "Free permit or low cost", "About 1 hour", "Self-contained vehicles; 48 hours"],
        ["Narawntapu National Park", "Parks pass plus camp fee", "About 1 hour", "Booked; no dogs"],
        ["Ben Lomond National Park", "Parks pass plus camp fee", "About 1 hour", "Cold nights; steep road"],
        ["Forestry land in the hills", "Free", "30 to 90 minutes", "Not where signed; harvest closures"],
        ["Caravan parks in town and the Tamar", "Paid", "In town to 30 minutes", "Fill in summer and over Easter"],
      ],
    }),
    section("The Midlands: Ross and Campbell Town", ["The Midland Highway runs south from Launceston through a landscape of sandstone and sheep, and the towns are set up to welcome road trippers. The Northern Midlands Council runs a scheme for RV friendly towns, including Ross and Campbell Town, and has issued free permits that let self-contained vehicles stay up to 48 hours. Check the council's page for the current sites and any changes, because the arrangement is revised from time to time.", "Ross has the old sandstone bridge, a bakery and a good pub, and Campbell Town has a long main street with cafes. Both are a good first or last night on the highway, with enough shops for supplies."], ["Free permit for self-contained vans", "48 hours at most", "Both towns have bakeries"]),
    section("The Tamar Valley and Narawntapu", ["The Tamar runs north from Launceston to Bass Strait, past vineyards, orchards and small river towns like Beauty Point and Beaconsfield, and the west and east banks both have caravan parks. Narawntapu National Park, on the coast near the river mouth, is the best bush camp within an hour, with beach and bush camps that put wallabies and wombats on the grass at dusk.", "The camp at Narawntapu is booked and paid, and a parks pass is needed to enter. Dogs are not allowed in the park. Further east, the coast near George Town and Low Head has caravan parks and the penguins at dusk."], ["Narawntapu: wildlife at dusk", "Book the camp ahead", "No dogs in the park"]),
    section("Ben Lomond and the hills", ["Ben Lomond National Park, on the dolerite plateau south-east of Launceston, has a small camping area and Tasmania's main ski field. The road up the Jacobs Ladder switchbacks is steep and not for large vans or trailers, and nights are cold at any time of year.", "The forests around Launceston and the northern ranges are Sustainable Timber Tasmania land, which allows camping unless a sign says otherwise, and it can be a quiet free night. Stay out of active harvest areas, and keep a gas stove handy because fire bans apply."], ["Jacobs Ladder is steep", "Forestry land: obey the signs", "Gas stove for fire bans"]),
    section("Dogs, fires and the weather", ["Dogs are allowed on forestry land and at some council and private camps, but not in national parks. Total Fire Ban days stop all open fires in parks, and Fuel Stove Only areas apply in some wilderness camps, so carry a stove whatever the forecast.", "The Tamar Valley and the Midlands are among the driest parts of the state, but nights turn cold and frosty outside summer, and fog sits in the valley on still mornings. Summer is the pleasant season, from December to April. Pack warm and wet-weather layers in any month."], ["Dogs: not in the parks", "Gas stove in fire bans", "Frosty nights all year"]),
    { ...section("Plan the Tamar and the Midlands in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them, plus photos, weather and Street View. Filter by Cost (Free or Paid), Dogs allowed, 4WD access, minimum rating, Online booking and Popular features such as toilets and drinking water, and narrow the results to Tasmania.", "Save places to a collection, then build a trip with Add stop to see the driving distance and time per leg, with dates, notes and weather for each stop. The directory is inside the app, so search, filters and place details work with no signal. There is no account and no ads, and it runs on iPhone. Check the sign at the site and with the land manager before you settle in."], ["Filter by Cost and Dogs allowed", "Add stop for the Midlands run", "No account, no ads"]), cta: true },
  ],
  sources: [
    { label: "Northern Midlands Council: RV friendly towns", url: "https://northernmidlands.tas.gov.au/community/facilities/rv-friendly-towns" },
    { label: "Parks and Wildlife Service Tasmania: park passes and entry fees", url: "https://parks.tas.gov.au/explore-our-parks/know-before-you-go/park-passes-and-entry-fees" },
    { label: "Parks and Wildlife Service Tasmania: Narawntapu National Park", url: "https://parks.tas.gov.au/explore-our-parks/narawntapu-national-park" },
    { label: "Parks and Wildlife Service Tasmania: campfires and fire bans", url: "https://parks.tas.gov.au/explore-our-parks/know-before-you-go/campfires-and-fire-bans" },
    { label: "Sustainable Timber Tasmania: visiting the land we manage", url: "https://sttas.com.au/access-permits/visiting-land-we-manage/" },
  ],
});
