import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free in Bunbury or Busselton?", "Not in either town. The City of Bunbury and the City of Busselton ban camping and sleeping in vehicles on beaches, foreshores, streets and car parks, and rangers patrol in summer. Free nights are inland in state forest and at signed rest areas."],
  ["Where can you camp near Bunbury?", "Wellington National Park, about 40 minutes inland, has Potters Gorge and Honeymoon Pool campgrounds. The Ferguson Valley has farm stays and small camps, and Collie and the forests around it have cheaper bush options. Holiday parks in Bunbury and Busselton suit powered sites."],
  ["How long can you stay at a rest area in Western Australia?", "Signed rest areas on the main roads usually allow a stay of up to 24 hours, so you can sleep in your vehicle there. Look for the sign at each one, because a few are day-use only and some councils have their own rules."],
  ["Is it busy around Busselton in summer?", "Very. Perth families fill Geographe Bay from mid December to the end of January and at Easter, so book camps and parks early and look at the shoulder months, when the bay is still warm and much quieter."],
] as const;

export default article({
  slug: "free-camping-near-bunbury-busselton", publishAt: "2026-11-17",
  title: "Free Camping Near Bunbury and Busselton: Forest Camps, Rest Areas and Geographe Bay",
  description: "Where to camp near Bunbury and Busselton: the town and beach bans, Wellington National Park and Ferguson Valley camps, forest nights near Collie and rest areas.",
  category: "Camping guides", region: "Western Australia",
  places: ["Bunbury", "Busselton", "Wellington National Park", "Ferguson Valley", "Collie"],
  imageAlt: "A rocky coast with a grassy headland and low heath under a pale evening sky, north of Sugarloaf Rock in Leeuwin-Naturaliste National Park",
  intro: "Free camping on Geographe Bay is close to impossible. Both the City of Bunbury and the City of Busselton ban sleeping in vehicles and camping on the foreshore, in car parks and on the streets, and the fines are real in summer. The better plan is to use the bay for the beach, jetty and dolphins, then stay inland in Wellington National Park, the Ferguson Valley or the state forest around Collie, where a night costs little or nothing and the bush is quiet.",
  related: ["free-camping-margaret-river", "perth-to-margaret-river-drive", "free-camping-near-perth", "south-west-wa-camping-loop", "camping-rules-western-australia", "can-i-stay-overnight-at-a-rest-area-in-australia"],
  sections: [
    section("What the towns and the coast do not allow", ["Bunbury and Busselton are growing holiday towns, and both councils sign against camping on the beaches, along the foreshore, in the car parks and on residential streets. That includes sleeping in a van or car, even if you are only parked for the night. Rangers do early morning and late evening rounds through summer, and an infringement is much more than a night at a holiday park.", "The beaches around Dunsborough and the Cape area follow the same approach, and the shires and Parks and Wildlife Service rangers keep a close eye on the coast. Our Margaret River guide covers the Cape side in more detail, so this guide mostly looks at the country east and south of the bay."], ["No sleeping in vehicles in town", "Foreshores and car parks are signed", "Fines are common in summer"], {
      caption: "Where to stay around Bunbury and Busselton, and the main limit at each.",
      head: ["Where", "Cost", "Best for", "Main limit"],
      rows: [
        ["Wellington National Park camps (Potters Gorge, Honeymoon Pool)", "Low fee per night", "River and forest, 40 minutes from Bunbury", "Basic toilets; fire bans in summer"],
        ["Ferguson Valley farm stays and small camps", "Low to moderate", "Wine, cheese and quiet paddocks", "Book ahead; some are self-contained only"],
        ["Collie and state forest camps", "Free or low fee", "Quiet bush nights", "Basic; check closures and fire bans"],
        ["Signed rest areas on the highways", "Free", "One night on the road", "Up to 24 hours; day-use only where signed"],
        ["Holiday parks (Bunbury, Busselton, Dunsborough)", "Paid", "Power, showers, cabins", "Full over summer and Easter"],
      ],
    }),
    section("Wellington National Park and the Ferguson Valley", ["Wellington National Park sits inland from Bunbury, around the Collie River and Wellington Dam. Potters Gorge and Honeymoon Pool are the camps most people use, with a toilet or two, picnic tables and good swimming spots when the river is up. The fee is low and paid through Parks and Wildlife Service, and sites go quickly on long weekends.", "The Ferguson Valley is lovely country for a slow weekend, with wineries, a cheese maker and small farm stays that take campervans. Most are paid and need a booking, but they cost a fraction of the coast in summer."], ["Potters Gorge and Honeymoon Pool", "Pay through Parks WA", "Book farm stays early"]),
    section("Collie, Lane Poole and the state forests", ["Further inland the forest opens up. The Collie area has lakes, rivers and bush camps run by the shire and the state, and many are free or cheap with a toilet and a fireplace. Lane Poole Reserve, near Dwellingup, has well-kept river camps such as Nanga Brook and Stringers, with a modest fee.", "Gather firewood only where it is allowed and only in the open season, and carry water, since taps are not guaranteed. State forest gets closed or restricted at short notice for fire and for logging works, so read the signs when you arrive."], ["Free and cheap bush nights", "Lane Poole for river camping", "Carry your own water"]),
    section("Rest areas and the 24-hour rule", ["Western Australia allows a night in your vehicle at many signed rest areas on the main roads, with a stay of up to 24 hours. The South Western Highway and the Bussell Highway both have them, and a sleep there is free. Look at the sign, because a few are day-use only and a local council can add its own limit.", "A rest area is for resting, not for setting up camp. Keep the awning folded, leave no rubbish and move on the next morning."], ["Up to 24 hours where signed", "Sleep in the vehicle only", "Check each sign"]),
    section("Leeuwin-Naturaliste and the Cape", ["The national park along the coast from Cape Naturaliste south has booked campgrounds such as Conto and Boranup, as well as the surf and caves. They are a good paid option when the Wellington camps are full. Our free camping guide for Margaret River explains the Cape area, and our Perth to Margaret River drive has the route.", "From Busselton it is about an hour to the southern end of the park, so a day trip from an inland camp is realistic."], ["Conto and Boranup are booked", "See our Margaret River guide", "Day trip from inland camps"]),
    section("Busy times, fire and the weather", ["The bay is at its fullest from mid December through January and at Easter, and the long weekends fill with Perth campers. September to November and March to May are far quieter, with warm days, cool nights and wildflowers in spring.", "Summer is dry and the forest fire danger is high, so campfires are often banned and parks can close at short notice. Check the fire danger rating and the park alerts before you go, and have a plan for where you would drive if the forest closed. Winter is wet and muddy on the forest tracks."], ["Book summer early", "Spring and autumn are best", "Check fire bans and alerts"]),
    { ...section("Find camps near Bunbury in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them, plus photos, weather and Street View. Filter by Cost (Free or Paid), Dogs allowed, 4WD access, rating, Online booking and Popular features such as toilets, drinking water and phone reception, and pick Western Australia as the state.", "Save places to a collection, build a trip with Add stop and see the driving distance and time for each leg, with dates, notes and weather per stop. The whole directory is inside the app, so search, filters and place details work with no signal. There is no account and no ads, and it runs on iPhone."], ["Filter by Cost and Dogs allowed", "Plan legs with Add stop", "Check the sign and the land manager"]), cta: true },
  ],
  sources: [
    { label: "Parks and Wildlife Service WA: Wellington National Park", url: "https://parks.dbca.wa.gov.au/park/wellington-national-park" },
    { label: "Parks and Wildlife Service WA: Lane Poole Reserve", url: "https://parks.dbca.wa.gov.au/park/lane-poole-reserve" },
    { label: "City of Busselton", url: "https://www.busselton.wa.gov.au/" },
    { label: "City of Bunbury", url: "https://www.bunbury.wa.gov.au/" },
    { label: "Main Roads Western Australia: rest areas", url: "https://www.mainroads.wa.gov.au/" },
    { label: "Australia's South West", url: "https://www.australiassouthwest.com/" },
  ],
});
