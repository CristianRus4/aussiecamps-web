import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free on the Great Ocean Road?", "Almost never along the coast. Councils and the coast authority ban sleeping in vehicles and camping outside booked sites, and fines are issued in season. The few free or cheap nights are inland, in state forest or small bush camps well off the coast."],
  ["Is it illegal to sleep in your car on the Great Ocean Road?", "In most of the coastal towns and reserves, yes. Local laws in Surf Coast, Colac Otway and Greater Geelong prohibit camping or sleeping in a vehicle outside designated sites, and rangers patrol, particularly in summer."],
  ["Do I need to book Great Otway National Park campgrounds?", "Most sites in Great Otway National Park are booked online through Parks Victoria, and some close over winter. Booking before you leave is the safe plan, especially for holidays and long weekends."],
  ["Where can you camp near Geelong?", "Closest are caravan parks around Geelong and the Bellarine Peninsula, then bush camps in the Brisbane Ranges and state forest further inland. The Otways and the coast are about an hour or two away."],
] as const;

export default article({
  slug: "free-camping-near-geelong-great-ocean-road", publishAt: "2026-11-17",
  title: "Free Camping Near Geelong and the Great Ocean Road: Coast Bans, Otway Camps and Inland Forests",
  description: "Where you can and can't camp near Geelong and along the Great Ocean Road: coastal bans, Otway national park camps, inland state forests, rest areas and cheaper options.",
  category: "Camping guides", region: "Victoria",
  places: ["Geelong", "Great Ocean Road", "Great Otway National Park", "Anglesea and Lorne", "Apollo Bay"],
  imageAlt: "Island Archway on the Great Ocean Road, Victoria",
  intro: "The Great Ocean Road has some of the best coastal camps in Victoria and almost no free ones. Councils and the coast authority ban sleeping in vehicles and camping outside booked sites, and fines are real. You can still do the drive on a budget by booking one or two Otway or foreshore nights and finding the free ones inland, in state forest and on the way from Melbourne.",
  related: ["great-ocean-road-camping-guide", "free-camping-victoria", "free-camping-near-melbourne", "camping-rules-victoria", "melbourne-to-adelaide-coastal-route"],
  sections: [
    section("Why the coast is not free", ["The road runs through small towns, national parks and coastal reserves, and almost every stretch of it is managed for day visitors. Surf Coast Shire, Colac Otway Shire and the City of Greater Geelong all have local laws banning camping and sleeping in vehicles outside designated places, and the coast authority patrols foreshore reserves between Torquay and Apollo Bay.", "Car parks at the lookouts, beach car parks and town streets are not campsites. Rangers issue fines of several hundred dollars, and the best sites sell out in summer."], ["No sleeping in cars on the coast", "Rangers patrol in summer", "Book the good sites early"], {
      caption: "Where to stay around Geelong and the Great Ocean Road.",
      head: ["Where", "Cost", "Best for", "Main limit"],
      rows: [
        ["Coast and town streets", "Fine, not a camp", "Nothing", "Camping and sleeping in vehicles banned"],
        ["Great Otway National Park camps", "About $15 to $50 a site a night", "Forest, waterfalls, beach access", "Book online; some close in winter"],
        ["Foreshore holiday parks (Anglesea, Lorne, Apollo Bay)", "Paid", "Beach days, showers, power", "Full in summer and at Easter"],
        ["Inland state forests", "Free", "Quiet bush nights", "Basic; follow forest rules"],
        ["Rest areas on the highway", "Free", "A sleep stop on the way", "Rest only unless the sign allows camping"],
      ],
    }),
    section("Great Otway National Park camps", ["The national park is where the coast gets its bush camps: Aire River, Johanna Beach, Blanket Bay and smaller sites in the forest. Most are booked online through Parks Victoria and charge by the site, and a few back-road bush camps close for part of the year.", "Johanna Beach and Aire River sit right by the surf, and both fill quickly in summer. Gravel roads are narrow and slippery after rain, so a caravan is not always welcome. Check the booking page for closures before you commit."], ["Book the national park online", "Gravel roads need care", "Check winter closures"]),
    section("Coastal towns and foreshore camps", ["Anglesea, Lorne, Apollo Bay and Wye River have foreshore camping run by the coast authority or local committees, and Port Campbell and Princetown have camps near the Twelve Apostles. All are paid, many are powered, and nearly all are booked months ahead for school holidays.", "Torquay and the Bellarine side of Geelong have holiday parks as well, for a bed close to the city. If you arrive without a booking, the cheapest practical option is a night inland and a day trip to the coast."], ["Foreshore camps are paid", "Book months ahead for holidays", "Torquay and the Bellarine suit a short trip"]),
    section("Inland state forests and bush camps", ["Free camping in this region is inland. The state forests around the Wombat and the Brisbane Ranges area have bush camps with no fees and little else, so bring water, a toilet plan and all your gear. Some forests have fire restrictions in summer, and roads can be impassable after heavy rain.", "Camping in a state forest usually means setting up at a spot that has been used before and staying within the posted time limit. Leave no trace and carry out your rubbish."], ["Bring water and a toilet plan", "Follow fire restrictions", "Use established spots only"]),
    section("Rest areas on the Princes Highway", ["The rest areas between Geelong and Colac are for a short stop to break a long drive, not for setting up camp. Some allow an overnight rest, and the signs say which. If a sign says no camping, that is the answer, and a ranger will agree.", "For longer stays, Winchelsea, Colac and Camperdown each have caravan parks, and some towns run low-cost camps at recreation reserves."], ["Rest areas are for resting", "Check each sign", "Town parks cost less than the coast"]),
    section("Busy dates and the weather", ["Summer, Easter and long weekends are the busiest on the coast. Winter is wet and cold in the Otways, and some camps close. Autumn, from March to May, and spring give the best mix of quiet camps and good weather.", "Fire danger days can close parks and campfires, and Victoria's fire danger ratings apply. Dogs are not allowed in most national park camps, and foreshore parks vary, so check before you book."], ["Autumn and spring are best", "Watch fire danger ratings", "Check dog rules"]),
    { ...section("Plan the Great Ocean Road in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them, plus photos, weather and Street View. Filter by Cost (Free or Paid), Dogs allowed, 4WD access, minimum rating, Online booking and popular features such as toilets, drinking water or showers, and narrow to Victoria.", "Save places to collections, build a trip with Add stop and see the driving distance and time for each leg, with dates, notes and weather. Search, filters and place details work with no signal, which helps in the Otway forest. There is no account and no ads, and it runs on iPhone. Check the sign at the site and the land manager before you settle in."], ["Filter by Free or Paid", "Add stops to a trip", "Works with no signal"]), cta: true },
  ],
  sources: [
    { label: "Parks Victoria: Great Otway National Park", url: "https://www.parks.vic.gov.au/places-to-see/parks/great-otway-national-park" },
    { label: "Great Ocean Road Coast and Parks Authority", url: "https://www.greatoceanroadauthority.vic.gov.au/" },
    { label: "Surf Coast Shire", url: "https://www.surfcoast.vic.gov.au/" },
    { label: "Colac Otway Shire", url: "https://www.colacotway.vic.gov.au/" },
    { label: "Visit Victoria: Great Ocean Road", url: "https://www.visitvictoria.com/regions/great-ocean-road" },
  ],
});
