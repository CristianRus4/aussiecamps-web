/**
 * The English source of truth for every translatable string on the site that is not article prose.
 *
 * Translators work from `lib/translations/en.json`, which `scripts/build-translation-source.mjs`
 * generates from this file plus the translatable articles. A locale file only needs the keys it has
 * actually translated: `lib/localized.ts` falls back to the English value here for anything missing,
 * so a half-finished translation renders as a mix rather than as blank text.
 */
export const uiStrings = {
  languageName: "English",

  /* Search-engine copy. Kept apart from the on-page headings because a page title and a headline
     have different jobs: the title has to win a click from a results page. */
  metaTitle: "AussieCamps: Australia Camping Map & Road Trip Planner",
  metaDescription: "Find 74,000+ campgrounds, caravan parks, free camps, rest areas and dump points across Australia. Offline place details, sharp filters and a stop-by-stop road trip planner for iPhone.",
  ogTitle: "AussieCamps: the camping map and road trip planner for Australia",
  ogDescription: "74,000+ campgrounds, caravan parks, free camps and useful stops, bundled offline. Filter, save and plan the whole lap.",
  metaKeywords: "camping app Australia, free camping Australia, campgrounds Australia, caravan parks Australia, offline camping map Australia, big lap app, dump points Australia, rest areas Australia, road trip planner Australia",
  metaGuidesTitle: "Australian camping and road trip guides",
  metaGuidesDescription: "Camping rules by state, free camping and rest area limits, fire bans, road safety, seasonal timing, real costs and practical planning for an Australian road trip.",
  metaToolsTitle: "Australia road trip calculators",
  metaToolsDescription: "Convert Australian prices, work out road trip fuel, estimate a realistic driving day, plan water and waste capacity and compare campsite pricing.",
  metaSupportTitle: "Support and FAQ",
  metaSupportDescription: "Help with AussieCamps maps, place details, filters, collections, the trip planner, offline data, currency conversion and premium access.",

  navFeatures: "Features", navGuides: "Guides", navTools: "Tools", navSupport: "Support", download: "Download app", downloadShort: "Download",

  /* Alt text for the app screenshots. Real <img> elements need real alt text, and a German page
     describing its screenshots in English helps neither a reader nor an image search. */
  /** Prefix for the visible "Updated <date>" line in a guide header. */
  updated: "Updated",
  /** Heading above a guide's own two-question FAQ. */
  commonQuestions: "Common questions",

  altHero: "The AussieCamps map for Australia, with campground, caravan park and free camp pins across the coast and the Explore list of nearby places below",
  altPlaceScreen: "An AussieCamps place screen for a coastal campground, showing the fee, opening status, amenities and a booking link",
  altCollectionsScreen: "The AussieCamps collections screen with Want to visit, Visited, Pins and All saved lists over a satellite map",
  altTripScreen: "An AussieCamps road trip itinerary listing seven stops with driving distance, dates and the weather at each campground",
  altExploreScreen: "The AussieCamps Explore list showing campgrounds and caravan parks with their distance from the current map view",

  heroKicker: "The best camping app for Australia",
  heroTitle: "Australia is big, your plan can be simple",
  heroText: "74,000+ places across Australia, bundled offline so they still open with no signal. Filter down to exactly what you need, save it, and turn the shortlist into a road trip with routes, distance, dates, notes and to-dos.",
  seeHow: "See how it works",
  statPlaces: "74,000+", statPlacesLabel: "places across Australia",
  statOffline: "Offline", statOfflineLabel: "every place detail, no signal needed",
  statStays: "4,000+", statStaysLabel: "places to stay",

  trustLine: "Campsites, caravan parks and useful stops across Australia.",
  trustCampsites: "Campsites", trustCaravanParks: "Caravan parks", trustNationalParks: "National parks",
  trustRestAreas: "Rest areas", trustUsefulStops: "Useful stops", trustExperiences: "Experiences",

  processEyebrow: "From idea to open road",
  processTitle: "Find a camp. Build the trip.",
  processText: "Filter down to tonight’s camp, save tomorrow’s possibilities into collections and keep the route, distance, dates, notes and to-dos together in one trip.",
  findTitle: "Find the exact place",
  findText: "Search 74,000+ places, browse what is nearby, or stack filters until only the free camping areas with toilets and water in your corner of the map are left.",
  saveTitle: "Save it into a collection",
  saveText: "Like, star or mark a place as visited and the smart collections update themselves. Build your own named lists for a region, a season or a shortlist.",
  planTitle: "Turn it into a trip",
  planText: "Order the stops, see the distance between them, add dates and notes, check each stop’s weather, get directions and tick them off as you go.",

  featuresEyebrow: "The full toolkit",
  featuresTitle: "Find it. Save it. Plan the whole road ahead.",
  featuresText: "Explore places, compare the details, organise favourites and build a trip that stays useful after the planning table.",
  featureMainEyebrow: "Know the place before you get there",
  featureMainTitle: "Every place opens with the detail that decides it.",
  featureMainText: "Photos, a real description, opening hours, fees, terms and conditions, amenities and features grouped by type, current alerts, ratings, contact and booking details, the weather, and Street View to see the entrance from the road.",
  featureList1: "Photos, hours, fees, conditions and amenities",
  featureList2: "Street View, weather and directions built in",
  featureList3: "Bundled offline, it opens with no signal",

  feature1Title: "Smart collections and your own lists",
  feature1Text: "Liked, Starred, Want to visit and Visited fill themselves as you mark places. Build named collections on top for a region, a season or the shortlist you are still arguing about.",
  feature2Title: "Filters that answer a real question",
  feature2Text: "Ask for free camping areas with toilets and drinking water around the Gold Coast, then narrow further by category, fee, rating, online booking, state and detailed access, amenity, activity and service features.",
  feature3Title: "Standard, satellite and 3D maps",
  feature3Text: "Switch between the standard map and satellite imagery you can tilt and spin into real terrain. Pins group into counts when you are zoomed out and break apart as you move in.",
  feature4Title: "Street View before the turnoff",
  feature4Text: "Street View opens straight from the place screen where coverage exists, so you can see the entrance, the road surface and the surroundings before committing the van to the turnoff.",
  feature5Title: "Weather on every place",
  feature5Text: "Current conditions and the forecast sit on the place screen and beside each trip stop, so a choice between two camps can be made with the sky in mind.",
  feature6Title: "Costs in your own currency",
  feature6Text: "Visiting and not fluent in Australian dollars? Choose your currency and set the rate once, and reported fees are shown alongside in money you can judge at a glance.",

  plannerEyebrow: "The main event",
  plannerTitle: "Stop by stop. Day by day.",
  plannerText: "The trip planner is what everything else feeds. Add saved places as stops and drag them into the order you will actually drive. Every leg shows its distance, directions open to the next one, each stop carries its own date, arrival notes and weather, and you tick them off as visited while you travel. Nearby alternatives stay attached for the days that change, the packing list sits beside the itinerary, and the whole thing can sync to Calendar.",
  plannerMetric1Title: "Distance & directions", plannerMetric1Text: "leg by leg, and the whole trip",
  plannerMetric2Title: "Dates & notes", plannerMetric2Text: "attached to every stop",
  plannerMetric3Title: "Visited & to-dos", plannerMetric3Text: "progress you can see",
  plannerMetric4Title: "Weather per stop", plannerMetric4Text: "beside the itinerary",

  routesEyebrow: "Guides worth reading first",
  routesTitle: "Know the rules. Know the cost.",
  routesText: "Practical guides to camping rules, road safety, seasonal timing and what an Australian trip actually costs.",
  exploreRoutes: "Explore the guides",

  audiencesEyebrow: "However you carry home",
  audiencesTitle: "Made for tents, vans and big laps.",
  audience1Title: "Backpackers", audience1Text: "Make a tight budget and a flexible route work together.",
  audience2Title: "Campervans", audience2Text: "Find the facilities, access and overnight mix you need.",
  audience3Title: "Caravans & big rigs", audience3Text: "Filter for space, services and practical access notes.",
  audience4Title: "Weekend campers", audience4Text: "Keep nearby favourites ready when Friday arrives.",

  reviewsEyebrow: "What travellers say",
  reviewsTitle: "Made for plans that change.",

  principlesTitle: "Useful first. Honest always.",
  principle1Title: "Signs beat screens", principle1Text: "On-site notices, land managers and current emergency advice always take priority over a listing.",
  principle2Title: "Current checks matter", principle2Text: "Check the latest booking, road, fire and closure updates before departure.",
  principle3Title: "Leave places better", principle3Text: "Legal camping, thoughtful waste disposal and respect for Country keep these places open.",

  faqEyebrow: "A few straight answers",
  faqTitle: "Good questions. Clear answers.",
  faqIntro: "Straight answers about travelling with AussieCamps.",
  faq1q: "What is AussieCamps?",
  faq1a: "AussieCamps is an iPhone app for finding places to camp and stay around Australia. It bundles a directory of 74,000+ places so the details stay readable without reception, and it turns the ones you save into a road trip with an ordered route, dates, notes and to-dos.",
  faq2q: "What places are included?",
  faq2a: "More than 74,000 places: campgrounds, caravan parks, roofed accommodation, farm and station stays, backpacker hostels, roadside rest areas, day-use areas, dump points, potable water, laundromats, information centres, long-vehicle parking, experiences and other useful stops.",
  faq3q: "Does it work without reception?",
  faq3a: "The place directory is bundled with the app, so names, categories, descriptions, fees, amenities, opening hours and conditions stay readable well beyond signal. Live services such as weather, routing, Street View, photos and provider pages still need a connection.",
  faq4q: "Can I plan a multi-stop road trip?",
  faq4a: "Yes, and it is the app's main feature. Add places as stops, drag them into order, attach a date and arrival notes to each one, see the driving distance leg by leg and across the whole trip, open directions to the next stop, check the weather at each one, tick stops off as visited and keep the packing list beside the itinerary. Itinerary details can sync to Calendar.",
  faq5q: "What are collections?",
  faq5a: "Two kinds. Smart collections (Liked, Starred, Want to visit, Visited, Pins and All saved) fill themselves as you mark places. On top of those you can create your own named collections with an icon and notes for a region, a season, a vehicle or a shortlist.",
  faq6q: "Can I filter for free camps or caravan access?",
  faq6a: "Yes, and combinations of them. Filters cover category, fee type, minimum rating, online booking, state or territory, and detailed feature groups for access, amenities, activities, services and affiliations, so “free camping areas with toilets and drinking water in Queensland” is a single query.",
  faq7q: "What is on a place screen?",
  faq7a: "Photos, a description, opening hours, fees, terms and conditions, amenities and features grouped by type, current alerts, ratings, contact and booking details, weather, Street View where coverage exists, directions, and nearby alternatives.",
  faq8q: "What map views are there?",
  faq8a: "A standard map and a satellite view built on Apple's flyover imagery, which you can tilt and rotate for real 3D terrain. Street View, built on Apple's Look Around imagery, gives the street-level view from the place screen.",
  faq9q: "Can I see prices in my own currency?",
  faq9a: "Yes. Choose your currency in settings and set the conversion rate, and reported fees are shown in that currency alongside the Australian dollar figure.",
  faq10q: "Can I book a campsite in AussieCamps?",
  faq10a: "Open the booking details for a place to reach its provider and check live availability, prices and terms.",
  faq11q: "Are camping rules the same across Australia?",
  faq11a: "No. Rules vary by state, territory, council, park and individual site. Always follow current signs, land-manager conditions, fire restrictions and official alerts.",

  downloadEyebrow: "Your next place is out there",
  downloadTitle: "Find it. Save it. Plan the road ahead.",
  downloadText: "74,000+ Australian places offline, filters sharp enough to find the exact one, collections that organise themselves and a trip planner that holds the whole route. AussieCamps for iOS.",

  guidesEyebrow: "Australian camping guides",
  guidesTitle: "Follow the road somewhere good.",
  guidesIntro: "Detailed guides for camps, rules, local costs and practical trip planning across Australia.",
  guideSingular: "guide", guidePlural: "guides", readGuide: "Read guide",

  minuteRead: "minute read", places: "places", backToGuides: "Guides", photoCredits: "Photo credits",
  keepInMind: "Keep in mind", placesAlong: "Places along the way",
  checkBefore: "Check before you go",
  checkText: "Rules and conditions change. Recheck the official source and the page for your exact park or campground before departure.",
  priceTitle: "Price table in 10 currencies", pricesChecked: "Prices checked", conversionsUse: "Conversions use RBA rates from", item: "Item",
  currencyDisclaimer: "Currency figures are mechanical conversions of the AUD benchmark, not card or cash quotes. Banks and payment providers apply their own rates and fees.",
  related: "Related guides", takeRoad: "Take it on the road",
  savePlanTitle: "Save the stops. Plan the whole trip.",
  savePlanText: "Build an ordered route from saved places, calculate the distance and keep dates, notes and to-dos attached.",

  toolsEyebrow: "Useful numbers",
  toolsTitle: "Road trip tools. No mystery maths.",
  toolsIntro: "Quick planning calculators for Australian prices, distances and capacity. Every assumption stays visible so you can replace it with the number that fits your route.",
  currencyEyebrow: "Currency converter", currencyTitle: "Convert an Australian price.",
  currencyText: "Reference conversion for trip planning using Reserve Bank of Australia rates. Your bank or card may use another rate and add fees.",
  fuelEyebrow: "Fuel calculator", fuelTitle: "Price the driving distance.",
  fuelText: "Enter the full route distance, the vehicle’s loaded fuel use and the expected price per litre. Remote prices can exceed city benchmarks.",
  driveEyebrow: "Driving day estimator", driveTitle: "How long that day really takes.",
  driveText: "Routing apps give moving time on an ideal road. This adds the road character and your actual stops, which is where a day usually runs over.",
  tankEyebrow: "Water and waste planner", tankTitle: "How many days off grid.",
  tankText: "Capacity in litres only becomes useful once it is expressed in days. Grey water usually fills before fresh water empties, so both are shown.",
  campEyebrow: "Campsite comparison", campTitle: "Per person or per site?",
  campText: "A national park camp usually charges per adult and a holiday park usually charges per site. The cheaper option flips with party size, which catches families out.",
  amount: "Amount", from: "From", to: "To",
  labelDistance: "Distance (km)", labelConsumption: "Consumption (L/100 km)", labelFuelPrice: "Fuel price (AUD/L)",
  labelRoadType: "Road type", roadMotorway: "Motorway or open straight", roadHighway: "Main highway", roadWinding: "Winding or coastal", roadNarrow: "Narrow, steep or gravel",
  labelStops: "Stops", labelFresh: "Fresh water (L)", labelGrey: "Grey water (L)", labelPeople: "People",
  labelAdults: "Adults", labelNights: "Nights", labelPerAdult: "Per adult (AUD)", labelPerSite: "Per site (AUD)",
  toolsReadingTitle: "Build the budget from current benchmarks.",
  toolsReadingText: "The tools calculate exactly what you enter. Our cost guides explain where the starting figures came from, when they were checked and what can change the final price.",
  toolsReadingLink: "Explore cost guides",
  calculatorNote: "These calculators are planning aids, not live booking, fuel-station or foreign-exchange quotes. Tank estimates assume roughly 11 litres of fresh water and 9 litres of grey water per person per day, which varies with showering and cooking. Confirm current prices before purchase.",
  enterValidValues: "Enter valid values", enterValidAmount: "Enter a valid amount",
  daysFresh: "days fresh", daysGrey: "days grey", theSame: "the same", perAdultCheaper: "per-adult is cheaper", perSiteCheaper: "per-site is cheaper",

  supportTitle: "How can we help?",
  supportIntro: "Answers for finding places, saving favourites, planning trips and using AussieCamps on the road.",
  contact: "Contact support", privacy: "Privacy", terms: "Terms",
  explore: "Explore", help: "Help", getApp: "Get the app", travelGuides: "Travel guides",
  footerText: "Find 74,000+ Australian places offline, save the ones that matter and build complete road trips with routes, distance, dates, notes and to-dos.",
  footerLine: "Made for the long way around Australia.",

  rulesSafety: "Rules & safety", roadTrips: "Road trips", campingGuides: "Camping guides", tripPlanning: "Trip planning", costsBudget: "Costs & budget", appGuides: "App guides",

  review1Title: "Made our trip so much simpler", review1Country: "France",
  review1Quote: "We crossed the country doing a mix of campsites and holiday parks and choosing each stop got so much easier. The offline details were a lifesaver more than once.",
  review2Title: "The filters alone are worth it", review2Country: "United States",
  review2Quote: "Filters are brilliant when you've got a big rig and need to know what you're driving into. Fast, no fuss.",
  review3Title: "useful for every kind of stop", review3Country: "Canada",
  review3Quote: "we found lovely holiday parks for the kids and a few quieter spots for later on. having the prices and access notes in one place saved so much time, i was doing all this in a spreadsheet before which was... not great",
  review4Title: "Good when plans change", review4Country: "Germany",
  review4Quote: "Helped us find a simple overnight stop when our plans fell apart, then somewhere lovely to stay a few days. Much better than searching town by town.",
  review5Title: "Clear and easy to trust", review5Country: "United Kingdom",
  review5Quote: "Clear maps, useful details, no nonsense. We used it for caravan parks, free camps and a couple of huts and it became part of the daily routine without me really noticing.",
  review6Title: "Did the big lap with this", review6Country: "Australia",
  review6Quote: "Ten months around the country and I opened it every single day. Filtering for rig length and access saved us a lot of wasted kilometres up north. The amount of times we would have driven somewhere that just doesn't fit a 7 metre van.",
  review7Title: "Less daunting", review7Country: "New Zealand",
  review7Quote: "Came over for six weeks with no idea where to start. Building the route stop by stop and actually seeing the distance made the whole thing feel manageable.",
  review8Title: "offline was the selling point", review8Country: "Netherlands",
  review8Quote: "between broome and darwin there is a LOT of nothing. having the place details still readable with no signal is the reason we kept using it",
  review9Title: "Good for a tent too!", review9Country: "Ireland",
  review9Quote: "Most of these apps feel built for big caravans. We were in a small car with a tent and still found plenty that actually suited us.",
} as const;

export type UiKey = keyof typeof uiStrings;
export type UiStrings = Record<UiKey, string>;

export type StaticPage = { effective?: string; title: string; lede: string; sections: { heading: string; paragraphs: string[] }[] };
export type StaticPageKind = "support" | "privacy" | "terms";

export const staticPages: Record<StaticPageKind, StaticPage> = {
  support: {
    title: "How can we help?",
    lede: "Clear answers for maps, saved places, trip planning and the road ahead.",
    sections: [
      { heading: "Finding places", paragraphs: [
        "Use Explore to search by place name, address or description. Move the map and choose the current-area option to focus results around the visible region.",
        "Filter by place category, fee, rating, online booking, state and detailed feature groups for access, amenities, activities and services. Combine only the filters that matter so useful alternatives remain visible.",
        "Facilities, fees, access and management can change. Follow current signs and the land manager, then send a correction so the directory can improve.",
      ] },
      { heading: "Saved places", paragraphs: [
        "Liked, Visited, Want to Visit and Starred update automatically when you mark places. Pins and All Saved provide other quick views.",
        "Create named collections with an icon and notes, then add any place. Use them for a region, season, vehicle or shortlist.",
        "The app supports private iCloud sync for saved states, collections and trip data when iCloud is available and enabled.",
      ] },
      { heading: "Trip planner", paragraphs: [
        "Create a trip, add places and drag them into order. Each stop can carry its own arrival date, notes, weather and visited status, and the planner shows the driving distance leg by leg and across the whole trip.",
        "Road routing depends on available MapKit directions. The planner retains the stops if a leg fails, but you must confirm current road access yourself.",
        "Start with a camping essentials preset or make your own tasks. Trip progress keeps the list beside the itinerary, and itinerary details can sync to Calendar.",
      ] },
      { heading: "Maps, weather and live details", paragraphs: [
        "Switch between the standard map and a satellite view built on Apple's flyover imagery, which tilts and rotates into 3D terrain. Street View, built on Apple's Look Around imagery, opens from the place screen where coverage exists.",
        "Current and forecast weather requires live data. Save critical forecasts and official warnings before leaving coverage.",
        "The bundled place directory keeps core place details available beyond reliable signal. Live maps, routing, weather, photos and external provider pages may require reception.",
      ] },
      { heading: "Prices and currency", paragraphs: [
        "Choose your currency in settings and set the conversion rate. Reported fees are then shown in that currency alongside the Australian dollar figure, which helps when you are visiting and not fluent in AUD.",
        "Open a place's booking or contact details to check availability, price and terms with the provider. Prices in the app are reported figures, not live quotes.",
      ] },
      { heading: "Premium and account", paragraphs: [
        "Map and place details are free, together with two saved lists.",
        "Premium adds unlimited saved lists, trip planning, advanced filters, place weather and road trip routes.",
        "Open the Premium screen and use Restore Purchases while signed into the Apple account used for the original transaction.",
      ] },
    ],
  },
  privacy: {
    effective: "Effective 12 August 2026",
    title: "Privacy policy",
    lede: "AussieCamps helps you plan a trip without turning your journey into an advertising profile.",
    sections: [
      { heading: "Information stored on your device", paragraphs: ["Saved places, collection membership, trips, notes, checklist items and preferences are stored for the app to work. Location can be used to show your position and nearby places after you grant permission."] },
      { heading: "iCloud", paragraphs: ["When iCloud is available and enabled, the app can use your private iCloud database to sync saved states, collections and app records across your devices. Apple provides the underlying service and applies its own terms."] },
      { heading: "Live Apple services", paragraphs: ["Map display, directions, Look Around, weather, calendar integration and widgets may use Apple frameworks. Requests and data handling for those services are governed by Apple. Calendar access occurs only after permission and is used to add trip itinerary information you request."] },
      { heading: "External links and website logs", paragraphs: [
        "Place details can open booking providers, websites, social profiles, phone numbers, email addresses and map apps. Those services receive information according to their own policies when you choose to open them.",
        "Hosting providers may process routine technical logs such as IP address, browser type and requested URL for delivery, reliability and security. AussieCamps does not use advertising trackers on this website.",
      ] },
      { heading: "Retention and control", paragraphs: ["You can delete app records through the app and manage iCloud data through your Apple account. Removing the app can remove local data, while synced copies may remain in iCloud until separately deleted."] },
      { heading: "Children and contact", paragraphs: [
        "AussieCamps is a general travel utility and is not directed to children. Do not submit personal information about a child through support.",
        "For privacy questions, contact AussieCamps support.",
      ] },
    ],
  },
  terms: {
    effective: "Effective 12 August 2026",
    title: "Terms of use",
    lede: "AussieCamps is a planning aid. It does not replace official signs, land-manager directions, emergency warnings, road advice or your responsibility to travel within your capability.",
    sections: [
      { heading: "Travel information changes", paragraphs: ["Places, prices, access, facilities, phone coverage, weather, fire conditions, roads and booking arrangements can change without notice. Verify critical details with the responsible authority or provider before travel and again close to departure."] },
      { heading: "No booking or access guarantee", paragraphs: ["A listing does not guarantee that a place is open, legal for your setup, reachable by your vehicle or available. External booking and contact links are provided for convenience. Contracts are between you and the third-party provider."] },
      { heading: "Safety and lawful use", paragraphs: ["You must obey signs, permits, closures, fire restrictions, road rules and directions from rangers, Traditional Owners, emergency services and land managers. Do not use the app while driving."] },
      { heading: "User data", paragraphs: ["You are responsible for notes, trip plans and other information you save. Keep separate copies of permits, bookings and safety-critical plans when loss of access could put a trip at risk."] },
      { heading: "Purchases", paragraphs: ["Any in-app purchase is processed by Apple and subject to the terms shown at purchase. Features, packaging and prices may change where allowed. Use Apple’s purchase tools for billing, cancellation and refund matters."] },
      { heading: "Intellectual property and contact", paragraphs: [
        "AussieCamps branding, interface and original editorial content belong to their respective owner. Place names and public facts remain the property or responsibility of their original sources.",
        "Questions can be sent to AussieCamps support.",
      ] },
    ],
  },
};
