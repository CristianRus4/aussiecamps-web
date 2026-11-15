import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp on the Mornington Peninsula?", "Yes. The foreshore reserves at places such as Rosebud, Rye and Sorrento run seasonal campgrounds, mostly over summer, and the busiest dates book out well ahead. Holiday parks are open year round."],
  ["Do I need to book the Phillip Island penguin parade?", "Yes. Book a ticket online before you go, particularly in summer and on weekends. The parade happens at dusk, so the time changes with the season."],
  ["How far is Phillip Island from the Mornington Peninsula?", "About 1.5 to 2 hours by road, because you drive around Western Port Bay through Cranbourne. The passenger ferry between Stony Point and Cowes does not take cars."],
  ["Can I take a car on the Sorrento to Queenscliff ferry?", "Yes. It is a car ferry that takes around 40 minutes and saves a long drive around Port Phillip Bay, with the Great Ocean Road beyond Queenscliff. Book ahead in summer."],
] as const;

export default article({
  slug: "mornington-peninsula-phillip-island-camping-weekend",
  publishAt: "2026-11-17",
  title: "Mornington Peninsula and Phillip Island camping weekend from Melbourne",
  description: "Two days and a night or two from Melbourne: foreshore camping on the Mornington Peninsula, Peninsula Hot Springs, Point Nepean, the Sorrento to Queenscliff ferry and the Phillip Island penguin parade.",
  category: "Road trips", region: "Victoria",
  places: ["Mornington Peninsula", "Rosebud", "Rye", "Sorrento", "Point Nepean", "Phillip Island", "Cowes", "Cape Woolamai"],
  imageAlt: "The Nobbies on the south-west coast of Phillip Island, Victoria",
  intro: "The Mornington Peninsula and Phillip Island are the two easiest beach weekends from Melbourne, and you can see both in two days if you start early. Stay a night or two on a peninsula foreshore or in a holiday park, take in the hot springs and Point Nepean, then drive around Western Port Bay for the penguin parade at dusk. Book the penguins and the foreshore camps first, because summer weekends fill.",
  related: ["free-camping-near-melbourne", "great-ocean-road-camping-guide", "camping-rules-victoria", "caravan-park-vs-holiday-park", "holiday-park-prices-australia-2026", "best-family-holiday-parks-australia"],
  sections: [
    section("The weekend at a glance", ["The peninsula sits south of Melbourne, and Phillip Island is about two hours beyond it. The shortest plan is a night on each, though a single night on the peninsula and a day on the island also works."], ["Start early on Saturday", "Book penguins ahead", "Leave Sunday evening"], { caption: "A weekend plan from Melbourne, drive times approximate.", head: ["When", "Where", "Highlights"], rows: [
      ["Saturday morning", "Rye or Rosebud", "About 1.5 hours from Melbourne; set up camp and walk the beach"],
      ["Saturday afternoon", "Point Nepean or the hot springs", "Fort walk or a soak at Fingal"],
      ["Sunday morning", "Sorrento", "Cafes, the pier and the ferry option"],
      ["Sunday afternoon", "Phillip Island", "About two hours to Cowes; Cape Woolamai or Churchill Island"],
      ["Sunday evening", "Penguin Parade", "Little penguins come ashore at dusk"],
      ["Monday", "Home", "Two hours back to Melbourne"],
    ] }),
    section("Foreshore camping on the peninsula", ["Several foreshore reserves, including Rosebud, Rye and Sorrento, run camping grounds for part of the year. They are close to the beach and the shops, and summer is the busy season. They are mostly open from late spring to autumn and some stay shut in winter, so check the managing committee for dates, rates and the rules.", "Sites in the Christmas and January period are popular and book out months ahead. Holiday parks in Rosebud, Rye and Dromana are open year round and often have space on shoulder weekends. Fires are not usually allowed on foreshore sites, and the fire ban days apply."], ["Check season dates", "Book summer months ahead", "Fires are usually banned"]),
    section("Hot springs and Point Nepean", ["Peninsula Hot Springs is at Fingal, about an hour from Melbourne, and is the peninsula's most popular soak. Book a session in advance, because weekends sell out. A late afternoon soak after a day outdoors suits a camping weekend.", "At the tip of the peninsula, Point Nepean National Park has old fortifications, walking tracks and views over the Rip, the narrow entrance to Port Phillip. Pets are not allowed, and ocean beaches here have rips and undertows, so swim only at patrolled beaches."], ["Book the hot springs", "No pets in the park", "Swim at patrolled beaches"]),
    section("The Sorrento to Queenscliff ferry", ["A car ferry crosses between Sorrento and Queenscliff in about 40 minutes. If you are heading on to the Bellarine Peninsula or the Great Ocean Road, it saves hours of driving around Port Phillip. Book a place in summer and on weekends, and check the timetable before you plan the day. Vehicle size limits apply to the ferry, so check before taking a tall campervan or a caravan.", "For a weekend trip, the ferry is an option rather than a must. If you want the Great Ocean Road next, our three-day camping route starts the other side."], ["Check the timetable", "Book summer crossings", "Check vehicle height limits"]),
    section("Phillip Island and the penguin parade", ["Phillip Island is about two hours from the peninsula by road, via Cranbourne and the San Remo bridge. Cowes is the main town, with caravan parks, shops and a long beach. Churchill Island is a short drive and has a historic farm.", "The Penguin Parade at Summerland Beach is the main draw. Little penguins come ashore at dusk, and the time shifts through the year, so book a ticket and check sunset time. Cape Woolamai has a walk along the cliffs with big surf, and shearwaters nest there in summer. Take warm clothes for the parade, because the wind off Bass Strait is cold, even in summer."], ["Book penguin tickets", "Take warm clothes", "Cape Woolamai for cliffs"]),
    section("Holiday parks and where to stay", ["Phillip Island has several caravan parks and holiday parks, mostly in and near Cowes, and these fill in January and long weekends. Book as early as you know your dates. Our holiday park prices guide shows typical rates, and our guide to family parks helps with choosing.", "Free camping is not really an option on the peninsula or the island, so plan paid stays. If you want a free camp nearby, our free camping guide near Melbourne lists spots in state forests within two hours."], ["Book Cowes parks early", "Plan for paid stays", "Free camps are further out"]),
    section("When to go", ["Summer is the main season, with warm water and the busiest roads. Spring and autumn are quieter and cooler, and good for the walks. Winter is cold and windy, but the penguins still arrive each evening and the hot springs are at their best.", "On weekends and long weekends the Western Port and Phillip Island roads can back up, so leave early. Check fire danger on hot days, and see our camping rules for Victoria for the fire ban rules."], ["Autumn is quiet", "Leave early on long weekends", "Check fire danger"]),
    { ...section("Plan the weekend in AussieCamps", ["Build the weekend as a trip with Add stop: a campground on the peninsula, Point Nepean, Cowes and the Penguin Parade, with Start at Home and Finish at Home. Each leg shows driving distance and time, and each stop has dates, notes and weather. Keep a To-do list for bookings and tick stops as visited.", "Use filters for Cost, Dogs allowed, Online booking and Popular features such as toilets and showers, and sort by Nearest to see what is close to you. Save places to collections like Want to visit. Share the trip with Collaborate or Send copy, or make one picture with Share as image. The whole directory is inside the app, so search and place details work with no signal. AussieCamps is an iPhone app with no account and no ads."], ["Add stop for each place", "Filter by Online booking", "Share as image"]), cta: true },
  ],
  sources: [
    { label: "Parks Victoria: Point Nepean National Park", url: "https://www.parks.vic.gov.au/places-to-see/parks/point-nepean-national-park" },
    { label: "Phillip Island Nature Parks", url: "https://www.penguins.org.au/" },
    { label: "Visit Victoria: Mornington Peninsula", url: "https://www.visitvictoria.com/regions/mornington-peninsula" },
    { label: "Mornington Peninsula Shire", url: "https://www.mornpen.vic.gov.au/" },
    { label: "Sorrento Queenscliff Ferry", url: "https://www.sorrentoqueenscliffferry.com.au/" },
  ],
});
