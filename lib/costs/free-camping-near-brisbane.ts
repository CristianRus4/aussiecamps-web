import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free near Brisbane?", "Free camping is thin near Brisbane. Queensland national parks and state forests need a camping permit and a fee, so the free options are mainly council camps in country towns further out and rest areas for a night in the vehicle. Camping inside Brisbane, on its beaches or in its parks is banned."],
  ["Is camping free in Queensland national parks?", "No. Camping in Queensland's national parks and forests needs a booked permit, which costs a few dollars per person per night. The cost is low, but it is not free."],
  ["Where can I stay cheaply near Brisbane?", "Permit camps in the ranges and on the islands, council-run camps in the Somerset and Scenic Rim regions, showgrounds in country towns, and holiday parks on the city's edge."],
  ["Can I sleep in a campervan in Brisbane?", "Not on streets or in parks in most areas. Councils sign against overnight stays, so use a holiday park or caravan park as your base."],
] as const;

export default article({
  slug: "free-camping-near-brisbane", publishAt: "2026-11-09",
  title: "Free Camping Near Brisbane: What Is Free, What Is Cheap and Where to Go",
  description: "Where to camp near Brisbane: why free camping is rare in south-east Queensland, the low-cost permit camps and council sites within a couple of hours, and the rules.",
  category: "Camping guides", region: "Queensland",
  places: ["Scenic Rim", "Somerset", "Glass House Mountains", "Gold Coast hinterland", "Sunshine Coast hinterland"],
  imageAlt: "Glass House Mountains, Sunshine Coast",
  intro: "Free camping near Brisbane is harder to find than near Sydney or Melbourne. Queensland's national parks and state forests need a booked permit, so the free options are council-run camps and showgrounds in country towns, plus rest areas for a night in the vehicle. The upside is that park permits are cheap, so a night in the ranges costs only a few dollars a person, and the hinterlands north, west and south of the city have plenty of choice.",
  related: ["camping-rules-queensland", "sunshine-coast-hinterland-camping", "brisbane-to-byron-bay-drive", "can-i-sleep-in-a-campervan-in-the-city-in-australia", "can-i-stay-overnight-at-a-rest-area-in-australia"],
  sections: [
    section("Why free is rare here", ["Queensland charges for camping in its national parks, conservation parks and state forests, and the permit must be booked before you arrive, often for a specific named campground. There is no equivalent of the free state forest camping you find in New South Wales and Victoria.", "In Brisbane and the surrounding councils, camping in parks, on beaches and on streets is banned, and signs and patrols make that clear. The realistic plan is a holiday park for the city, then permit camps and council camps for the rest."], ["Parks and forests need a permit", "No camping in Brisbane parks", "Permits cost a few dollars"], {
      caption: "Where you can stay near Brisbane, how far it is, and the main limit.",
      head: ["Where", "Drive from the CBD", "Cost", "Main limit"],
      rows: [
        ["National park and forest campgrounds", "1 to 3 hours", "Booked permit", "Book ahead; no free option"],
        ["Council camps in Somerset and Scenic Rim", "1 to 2 hours", "Low cost", "Each sets its own rules"],
        ["Showgrounds in country towns", "1.5 to 3 hours", "A modest fee", "Closed during events"],
        ["Rest areas", "Along the highways", "Free", "Often 20 hours or fewer; follow the sign"],
      ],
    }),
    section("Permit camps in the ranges", ["The best nearby camping is in the hinterland: the Scenic Rim and the Lamington side, the Main Range, the D'Aguilar Range and the Glass House Mountains area on the way to the Sunshine Coast. All need a booked camping permit through Queensland Parks.", "The sandy islands and the Great Sandy region have their own permits, and some need a vehicle access permit as well. Book early for school holidays and long weekends, when the popular campgrounds sell out."], ["Book the permit ahead", "Islands need extra permits", "Holidays sell out"]),
    section("Council camps and showgrounds", ["Councils in the Somerset and Lockyer valleys and the Scenic Rim run low-cost camps at lakes and reserves, and many country showgrounds take campers for a modest fee. They are the closest thing to cheap, no-frills camping near the city.", "Each place sets its own stay limit and rules about generators, dogs and toilets, so check the council page before you set off."], ["Low-cost, not always free", "Check generator and dog rules", "Showgrounds close for events"]),
    section("Rest areas and the highways", ["Queensland's rest areas on the Bruce, Warrego, New England and Cunningham highways are for fatigue stops. Many allow up to 20 hours or a night in the vehicle, but the limit is on the sign, and some councils ban overnight stays near towns.", "Keep the stop short, keep truck bays clear and move on in the morning."], ["Follow the sign", "Keep it to a night", "Keep truck bays clear"]),
    section("Heat, storms and the season", ["South-east Queensland is hot and humid in summer, with afternoon storms and flash flooding on creek crossings. Winter, from May to September, is the best camping season, with dry, mild days and cool nights.", "Fire bans apply in the dry months, so check the local rating before you light anything."], ["Winter is the best season", "Summer storms and floods", "Check fire bans"]),
    { ...section("Find camps near Brisbane in AussieCamps", ["AussieCamps maps 517 Queensland park campgrounds, 1,688 roadside rest areas and 324 public dump points, each with the facilities and fees the agency publishes. You can filter by cost, save camps to a trip and see the driving distance between stops.", "Place details are saved on the phone for use without signal, while the map, routing and weather need a connection. AussieCamps runs on iPhone."], ["Filter by cost", "Rest areas and dump points", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Queensland Parks: camping and accommodation", url: "https://parks.qld.gov.au/camping" },
    { label: "Queensland Government: camping in Queensland", url: "https://www.qld.gov.au/recreation/activities/camping" },
    { label: "Queensland Fire Department: fire bans", url: "https://www.qfes.qld.gov.au/" },
    { label: "Queensland Transport and Main Roads: rest areas", url: "https://www.tmr.qld.gov.au/" },
  ],
});
