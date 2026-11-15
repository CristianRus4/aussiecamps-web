import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["How far is the Grampians from Melbourne?", "Halls Gap is about 260 km from Melbourne, around three hours via the Western Highway through Ballarat and Ararat. Leave early on Friday to avoid the traffic out of the city."],
  ["Do I need to book camping in the Grampians?", "Yes for the park campgrounds. Parks Victoria takes bookings online or by phone, and school holidays and long weekends fill early. Halls Gap also has caravan parks that you can book directly."],
  ["Can I see kangaroos at Halls Gap?", "Yes. Eastern grey kangaroos graze on the ovals and the edge of town at dawn and dusk. Watch your speed after dark and do not feed them."],
  ["Is the Grampians safe to visit in summer?", "Yes, with care. Check the fire danger rating before you leave and again each morning, and know that some walks and car parks close on Extreme and Catastrophic days."],
] as const;

export default article({
  slug: "grampians-camping-weekend-from-melbourne", publishAt: "2026-12-02",
  title: "Grampians weekend camping escape from Melbourne",
  description: "A weekend camping at Gariwerd (the Grampians) from Melbourne: Halls Gap, park campgrounds, the Pinnacle, MacKenzie Falls, Boroka and Reeds lookouts and kangaroos on the oval, three hours by the Western Highway.",
  category: "Road trips", region: "Victoria",
  places: ["Halls Gap", "Gariwerd (Grampians) National Park", "The Pinnacle", "MacKenzie Falls", "Boroka Lookout", "Reeds Lookout", "Ararat", "Ballarat"],
  imageAlt: "The Grampians ranges above Halls Gap, Victoria",
  intro: "The Grampians, or Gariwerd, is Victoria's most popular weekend camping park and it is only about three hours from Melbourne. A Friday night arrival, a Saturday on the lookouts and waterfalls, and a Sunday walk before the drive home is enough to see the highlights. Book your campground early, check the fire danger and keep the day walks short, because the views come quickly here.",
  related: ["free-camping-victoria", "camping-rules-victoria", "bushfire-safety-camping-australia", "free-camping-near-melbourne", "camping-with-dogs-australia", "hit-a-kangaroo-what-to-do-australia"],
  sections: [
    section("The weekend at a glance", ["Halls Gap is the base for the main sights. Most lookouts and waterfalls are a short drive from town, so a weekend is enough to cover them without rushing."], ["Leave early on Friday", "Camp before dark", "Short walks, big views"], { caption: "A weekend plan at Gariwerd, drive times approximate.", head: ["When", "Where", "Highlights"], rows: [
      ["Friday", "Melbourne to Halls Gap", "About three hours on the Western Highway; set up and see the kangaroos"],
      ["Saturday morning", "The Pinnacle", "Early walk to the lookout before the heat and the crowds"],
      ["Saturday afternoon", "Boroka and Reeds lookouts", "Short walks and big views of Halls Gap and the valley"],
      ["Sunday morning", "MacKenzie Falls", "Check for closures; waterfall and gorge"],
      ["Sunday afternoon", "Drive home", "Ararat, Ballarat and the Western Highway"],
    ] }),
    section("Getting there", ["From Melbourne, take the Western Highway through Ballarat to Ararat, then follow the signs to Halls Gap on the Ararat to Halls Gap road. The drive is about 260 km and takes around three hours without stops. Our guide to fuel planning has tips for filling up before the park.", "You can also approach from the north through Stawell, which adds time but passes through a few small towns. Fuel up at Ararat or Stawell, because the choices in Halls Gap are limited."], ["Fuel at Ararat or Stawell", "Allow three hours", "Avoid Friday peak traffic"]),
    section("Where to camp", ["Gariwerd has several park campgrounds run by Parks Victoria, including Smiths Mill, Borough Huts, Jimmy Creek and Buandik, plus Troopers Creek and Stapylton in the north. Book online or by phone, and book as early as you know your dates because school holidays, Easter and long weekends fill. Some sites take caravans and camper trailers, while others are tent only, so check the site details when you book.", "Halls Gap itself has several caravan parks with powered sites, showers and shops nearby, which suit vans and families. Fires are usually banned in summer and on high fire danger days, so bring a gas stove. Our camping rules for Victoria cover the fire and fee rules."], ["Book park camps early", "Check site vehicle limits", "Bring a gas stove"]),
    section("The Pinnacle and the lookouts", ["The Pinnacle is the most popular walk in the park, with views over Halls Gap and the ranges. Start from Sundial car park or Wonderland car park, and allow about two hours return from Sundial. It is steep and rocky in parts, so wear proper shoes and take water. Start early in summer, before the heat.", "Boroka Lookout is a short walk from the car park with a wide view of Halls Gap and Lake Bellfield. Reeds Lookout is a quick walk, and it leads on to the Balconies. Both are good for sunset. Walking tracks and car parks close from time to time for maintenance or recovery work, so check Parks Victoria for the current list before you go."], ["Take water for the Pinnacle", "Start walks early", "Check track closures"]),
    section("MacKenzie Falls and Halls Gap", ["MacKenzie Falls is the park's best-known waterfall, and it runs best after winter and spring rain. The area closes on Extreme and Catastrophic fire danger days, and the car park and some walks have been closed at times for upgrade work, so check before you drive out.", "Back in Halls Gap, eastern grey kangaroos graze on the oval and the edge of town at dawn and dusk. Watch your speed after dark and do not feed them. The town has cafes, a bakery and a general store, and the Brambuk centre tells the story of the Djab Wurrung and Jardwadjali peoples. Check opening times before you go."], ["Check falls access", "Do not feed kangaroos", "Watch speed at dusk"]),
    section("Fire danger and weather", ["Summer is hot and dry, and bushfire is a real risk in the Grampians. Check the fire danger rating each morning through the CFA, know your closest safe place and leave if the rating is Extreme or Catastrophic. Our bushfire safety guide explains the ratings.", "Nights can be cold, even in summer, and winter can bring frost and occasional snow on the peaks. Spring is the best time for waterfalls and wildflowers, and autumn is mild and quieter. Mobile phone coverage is patchy, so tell someone your plan."], ["Check CFA each morning", "Know your safe place", "Patchy phone signal"]),
    { ...section("Plan the Grampians weekend in AussieCamps", ["Build the weekend as a trip with Add stop: Halls Gap, the park campgrounds and a stop at Ararat or Ballarat on the way. Start at Home and Finish at Home to see the whole drive, with each leg showing driving distance and time. Add dates, notes and weather to each stop, and keep a To-do list for the booking and the packing.", "Filter by Cost, Dogs allowed, 4WD access, Online booking and Popular features such as toilets, drinking water and campfires, and use Nearest to see the closest camps from where you are. Save places to collections like Want to visit and Visited. Share the trip with Collaborate or Send copy. The whole directory is inside the app, so search and place details work with no signal. AussieCamps is an iPhone app with no account and no ads."], ["Add stop for each night", "Filter by Online booking", "Works with no signal"]), cta: true },
  ],
  sources: [
    { label: "Parks Victoria: Grampians (Gariwerd) National Park", url: "https://www.parks.vic.gov.au/places-to-see/parks/grampians-national-park" },
    { label: "Visit Victoria", url: "https://www.visitvictoria.com/" },
    { label: "Country Fire Authority: Fire Danger Ratings", url: "https://www.cfa.vic.gov.au/" },
    { label: "VicTraffic", url: "https://traffic.vicroads.vic.gov.au/" },
  ],
});
