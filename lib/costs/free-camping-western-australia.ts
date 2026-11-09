import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you free camp in Western Australia?", "Only in limited places. WA lets you camp outside a licensed caravan park or camping ground only with approval, so the main free option is a rest area signed for overnight stops, where you can stay up to 24 consecutive hours. Some shires run free or low-cost camps, and a landowner can let you stay on private land for up to 5 nights."],
  ["How long can you stay at a rest area in WA?", "Up to 24 consecutive hours, and only at rest areas with a sign that allows overnight stops. Main Roads WA says its rest areas are not intended for camping, so sleep in the vehicle, keep the road train bays clear and move on the next day."],
  ["Is free camping illegal in WA?", "Camping outside a licensed caravan park or camping ground without approval can be an offence, on public or private land. Signed 24-hour rest stops, approved shire camps and private land with the owner's permission are the legal exceptions."],
  ["What is the cheapest way to camp in WA if not free?", "National park campgrounds cost $10 to $20 per adult a night, and children aged 5 and under camp free. Shire camps and station stays are often cheap too, and an All Parks Pass at $130 a year covers park entry on a long trip."],
] as const;

export default article({
  slug: "free-camping-western-australia", publishAt: "2026-11-09",
  title: "Free Camping in Western Australia 2026: 24-Hour Rest Stops, Shire Camps and the Law",
  description: "Where you can camp for free in WA: signed 24-hour rest stops, shire camps and private land, why camping elsewhere needs approval, and the cheap park sites in between.",
  category: "Camping guides", region: "Western Australia",
  places: ["North West Coastal Highway", "Great Northern Highway", "Lyndon rest area", "Ningaloo", "Shire camps"],
  imageAlt: "A picnic shelter, toilet block and red gravel parking area at the Lyndon rest area on the North West Coastal Highway, Western Australia",
  intro: "Free camping in Western Australia is tighter than in the eastern states. The law says you may camp outside a licensed caravan park or camping ground only with approval, so the main free option is a rest area signed for overnight stops, where you can stay up to 24 consecutive hours. Some shires run free or low-cost camps of their own, and a landowner can let you stay up to 5 nights. National park campgrounds are never free, but at $10 to $20 a night they keep a long trip cheap.",
  related: ["camping-rules-western-australia", "is-free-camping-legal-australia", "perth-to-broome-road-trip", "can-i-stay-overnight-at-a-rest-area-in-australia", "best-free-camping-apps-australia"],
  sections: [
    section("Why WA is stricter", ["Western Australia's caravan park and camping ground rules treat camping as something that happens in a licensed park or camping ground. Camping anywhere else without approval risks an offence, whether the land belongs to the state, a shire or a farmer. That rules out the easy forest camping of New South Wales and Victoria.", "What is left is still plenty for a road trip: signed overnight rest stops, approved shire camps, private land with permission, and national park campgrounds at a low fee. The trick is knowing which kind of stop you are at before you set up."], ["Camping needs approval", "Rest stops: 24 hours", "Private land: up to 5 nights"], {
      caption: "Free and cheap places to camp in Western Australia, and the main limit at each.",
      head: ["Where", "Cost", "Stay", "Watch for"],
      rows: [
        ["Rest areas signed for overnight stops", "Free", "24 consecutive hours", "No overnight stop without the sign"],
        ["Shire free or low-cost camps", "Free or a small fee", "Set by the shire", "Rules change from shire to shire"],
        ["Private land with the owner's permission", "Up to the owner", "Up to 5 nights", "Longer stays need shire approval"],
        ["National park campgrounds", "$10 to $20 per adult", "Set by the park", "Entry fee in some parks on top"],
      ],
    }),
    section("Rest areas: the 24-hour rule", ["Main Roads WA allows no overnight stop at a rest area unless a sign says you can, and where one does, the stay must not exceed 24 consecutive hours. Main Roads also says its rest areas are not intended for camping, so keep to the vehicle, skip the awning and move on the next day.", "On the long highways north, the North West Coastal and the Great Northern, overnight rest areas are the backbone of a budget trip, often with a shelter, a toilet and space for vans. Road trains use them too, so keep the heavy-vehicle bays clear and park well away from the trucks that start before dawn."], ["Only where a sign allows it", "24 consecutive hours at most", "Keep road train bays clear"]),
    section("Shire camps and station stays", ["Some shires run their own free or low-cost camping areas for travellers, beside a river, a beach or the edge of town, each with its own stay limit and conditions. They change often, so ask the shire or the visitor centre, and pay attention to the sign at the gate.", "Station stays are a distinctly WA option. Pastoral properties open camping areas to travellers for a fee, and on remote stretches they can be the only stop between towns. Confirm the price, payment and road access with the station before you arrive."], ["Ask the shire first", "Station stays charge a fee", "Confirm access ahead"]),
    section("Private land and farm stays", ["On private land, the owner's permission covers a stay of up to 5 nights, and a longer stay also needs local government approval. Ask before you pull in, even on a quiet back road, and leave gates as you found them.", "Farm stays and paddock camps often charge a small fee and come with a hot shower or a fire pit, which can be a better night than a highway rest stop. Agree the price and what is included before you set up."], ["Owner's permission: 5 nights", "Ask before you pull in", "Leave gates as you find them"]),
    section("When free runs out: cheap park camps", ["National park campgrounds cost $10 an adult at sites without facilities, $15 with basic facilities and $20 with more, and children aged 5 and under camp free. Many are booked through Park Stay WA up to 180 days ahead, while first come campgrounds take cash or a self-registration envelope.", "Some parks charge vehicle entry on top, such as $17 a standard vehicle at Karijini and Cape Range, so an All Parks Pass at $130 a year pays for itself quickly on a run up the coast."], ["$10 to $20 per adult", "Under-fives camp free", "All Parks Pass: $130"]),
    section("Distance, water and the seasons", ["The gaps are what make WA different. Plan each night within your fuel range, carry water for several extra days, and keep a second stop in mind in case a rest area is full or a campground is closed.", "The north is best in the dry season, roughly May to October, and the cyclone season runs from November to April. In the south-west, many parks stop campfires from about 1 December to 31 March, and firewood collection is banned in national parks, so bring a gas stove."], ["Plan within fuel range", "North: May to October", "Bring a gas stove"]),
    { ...section("Find overnight stops in AussieCamps", ["AussieCamps maps 260 Western Australian park campgrounds and 238 public dump points, with each place's facilities and fees as the agency publishes them. You can filter by cost and build a trip with ordered stops and the driving distance for each leg, which shows the long gaps before you leave.", "Place details are saved on the phone for use without signal, which matters on WA's empty stretches. The map, routing and weather need a connection, and AussieCamps runs on iPhone."], ["See each leg's distance", "Filter by cost", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "WA Government: camping outside caravan parks", url: "https://www.wa.gov.au/government/publications/temporary-accommodation-and-camping-outside-of-caravan-parks" },
    { label: "Main Roads WA: long-distance driving", url: "https://www.mainroads.wa.gov.au/travel-information/driving-in-wa/long-distance-driving/" },
    { label: "Main Roads WA: rest area policy", url: "https://www.mainroads.wa.gov.au/globalassets/technical-commercial/technical-library/road-and-traffic-engineering/roadside-items/rest-area-policy-and-guideline/policy-and-guidelines-rest-areas-on-main-roads-and-highways.pdf" },
    { label: "Explore Parks WA: camping fees", url: "https://exploreparks.dbca.wa.gov.au/camping-fees" },
    { label: "Explore Parks WA: where and when to camp", url: "https://exploreparks.dbca.wa.gov.au/where-and-when-camp" },
    { label: "Explore Parks WA: campfires, firewood and cooking", url: "https://exploreparks.dbca.wa.gov.au/campfires-firewood-and-cooking-appliances" },
    { label: "DBCA: park passes", url: "https://shop.dbca.wa.gov.au/collections/park-passes" },
  ],
});
