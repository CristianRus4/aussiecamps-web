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
/** The testimonial strings (the home page review wall). A locale with `reviews: false` in
 * lib/locales.json neither shows nor translates them. */
export const reviewKeys = (Object.keys(uiStrings) as UiKey[]).filter((key) => key.startsWith("review"));

/**
 * The analytics consent bar and the footer link that reopens it.
 *
 * A separate namespace on purpose. A locale is published only when every `ui` string is translated
 * (see `isTranslated` in lib/localized.ts), so adding these to `ui` would have unpublished every
 * language at once. Here each string falls back to English on its own and never gates publishing.
 */
export const consentStrings = {
  label: "Privacy choices",
  message: "May we use Google Analytics cookies to see which pages are read and which App Store links are used? Nothing is used for advertising.",
  accept: "Accept",
  decline: "Decline",
  learnMore: "Privacy policy",
  privacyChoices: "Privacy choices",
} as const;
export type ConsentKey = keyof typeof consentStrings;
export type ConsentStrings = Record<ConsentKey, string>;

/** `id` is an anchor that stays the same in every language, so links can point at one section. */
export type StaticPage = { effective?: string; title: string; lede: string; sections: { id?: string; heading: string; paragraphs: string[] }[] };
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
        "AussieCamps is free to download, and the map and search show every place. Without the Pass, only bookable stays and tours from BookEasy open in full, along with a few guides.",
        "The Pass opens campgrounds, rest areas, dump points, water, toilets and every guide, and unlocks saving places, collections and the trip planner.",
        "Open the Premium screen and use Restore Purchases while signed into the Apple account used for the original transaction.",
      ] },
    ],
  },
  privacy: {
    effective: "Effective 19 October 2026",
    title: "Privacy policy",
    lede: "AussieCamps helps you plan a trip without turning your journey into an advertising profile.",
    sections: [
      { heading: "Information stored on your device", paragraphs: ["Saved places, collection membership, trips, notes, checklist items and preferences are stored for the app to work. Location can be used to show your position and nearby places after you grant permission."] },
      { heading: "iCloud", paragraphs: ["When iCloud is available and enabled, the app can use your private iCloud database to sync saved states, collections and app records across your devices. Apple provides the underlying service and applies its own terms."] },
      { heading: "Live Apple services", paragraphs: ["Map display, directions, Look Around, weather, calendar integration and widgets may use Apple frameworks. Requests and data handling for those services are governed by Apple. Calendar access occurs only after permission and is used to add trip itinerary information you request."] },
      { heading: "External links and website logs", paragraphs: [
        "Place details can open booking providers, websites, social profiles, phone numbers, email addresses and map apps. Those services receive information according to their own policies when you choose to open them.",
        "Hosting providers may process routine technical logs such as IP address, browser type and requested URL for delivery, reliability and security.",
      ] },
      { id: "website-analytics", heading: "Website analytics", paragraphs: [
        "This website uses Google Analytics 4 to understand which pages are read and how visitors find the app. Google processes this data on our behalf as our processor. For visitors in the European Economic Area, the United Kingdom and Switzerland, the service is provided by Google Ireland Limited.",
        "Analytics records the pages you view, your device and browser type, an approximate location derived from your IP address and the App Store links you click. Google Analytics 4 does not log or store IP addresses, and it never receives your name, your email address or anything you save in the app.",
        "Analytics uses two first-party cookies, _ga and one whose name starts with _ga_ followed by our measurement ID, and both last up to 13 months. In the European Economic Area, the United Kingdom and Switzerland they are set only after you accept them. Until then no analytics cookie is stored and Google receives only cookieless measurements that carry no identifier. You can change your choice at any time with the Privacy choices link at the bottom of every page.",
        "Google signals and ad personalisation are switched off, and analytics data is deleted after 14 months. This website does not use advertising trackers.",
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

/**
 * The `tools` namespace: copy for the five standalone calculator pages under /tools/<tool>/.
 *
 * Deliberately not `ui`. A locale is published only when every `ui` string is translated, so a new
 * `ui` key would unpublish every language at once. These strings fall back to English instead, and a
 * localised tool page stays English, noindex and out of the sitemap until its own strings and the
 * shared `common` block are complete (lib/tools/strings.ts).
 *
 * `{dumpPoints}`, `{water}`, `{restAreas}` and `{campgrounds}` are filled from lib/data/product-facts.json
 * at render time; keep them as they are when translating.
 */
export const toolKeys = ["fuel-cost-calculator", "drive-time-calculator", "campsite-cost-calculator", "currency-converter", "water-tank-calculator"] as const;
export type ToolKey = (typeof toolKeys)[number];
export type ToolCopy = {
  metaTitle: string; metaDescription: string; title: string; intro: string;
  formula: string[]; formulaNote: string; example: string[]; assumptions: string[];
  faq: [string, string][]; ctaTitle: string; ctaText: string;
};

export const toolStrings = {
  common: {
    home: "Home", tools: "Tools", calculator: "Calculator",
    howItWorks: "How it’s calculated", workedExample: "Worked example", assumptions: "Assumptions",
    commonQuestions: "Common questions", readNext: "Cost and planning guides", sources: "Sources",
    ctaEyebrow: "In the app", passNote: "AussieCamps is free to download. Bookable stays and tours are free to browse; campgrounds, rest areas, dump points, water, toilets and the trip planner need the Pass.",
    iphoneOnly: "AussieCamps is an iPhone app.", openTool: "Formula, worked example and questions", allTools: "All road trip tools",
  },
  index: {
    metaTitle: "Road Trip Calculators for Australia: 5 Free Tools",
    metaDescription: "Free calculators for an Australian road trip: fuel cost and cost per km, realistic driving time, campsite fees per person or per site, AUD conversion and campervan water days.",
  },
  tools: {
    "fuel-cost-calculator": {
      metaTitle: "Road Trip Fuel Cost Calculator Australia",
      metaDescription: "Work out petrol or diesel for an Australian road trip from distance, L/100 km and price per litre. Shows litres, total cost and cost per km, with the formula and a worked example.",
      title: "Road trip fuel cost calculator for Australia",
      intro: "Enter the distance, your vehicle’s loaded fuel use and the price per litre. You get the litres the drive will burn, the fuel bill and the cost per kilometre, so the whole route can be budgeted before the first fill.",
      formula: ["Litres = distance (km) × fuel use (L/100 km) ÷ 100", "Fuel cost = litres × price per litre (A$/L)", "Cost per km = fuel cost ÷ distance"],
      formulaNote: "The calculator rounds litres to one decimal place and money to the cent. Nothing else is added: tolls, oil and tyre wear are separate lines in a budget.",
      example: [
        "A 1,000 km drive in a vehicle using 12 L/100 km at A$2.08 a litre, the petrol average across the five largest cities in Fuel Plan data for 5 August 2026.",
        "1,000 × 12 ÷ 100 = 120 litres. 120 × A$2.08 = A$249.60. A$249.60 ÷ 1,000 km = about A$0.25 a kilometre.",
        "The same drive in a diesel vehicle at that day’s diesel average of A$2.47 a litre costs 120 × A$2.47 = A$296.40.",
      ],
      assumptions: [
        "Fuel use is the loaded figure. A campervan, a roof load or a caravan on the back burns more than the brochure number, so measure your own if you can.",
        "City averages are a starting point. Remote roadhouses usually charge more, so raise the price for outback legs.",
        "Distance is the whole route, including the detours to campgrounds, lookouts and towns off the highway.",
      ],
      faq: [
        ["How do I find my vehicle’s real fuel use?", "Fill the tank, reset the trip meter and drive as you normally would. At the next fill, divide the litres added by the kilometres driven and multiply by 100. That is your L/100 km for the vehicle as loaded, which is the number this calculator needs."],
        ["How do I work out fuel cost per km?", "Divide L/100 km by 100 and multiply by the price per litre. At 12 L/100 km and A$2.08 a litre that is 0.12 × 2.08, about A$0.25 a kilometre."],
        ["Which fuel price should I use?", "Use the fuel your vehicle takes and the most recent price you can find for the region. Fuel Plan’s five-city averages for 5 August 2026 were A$2.08 a litre for petrol and A$2.47 for diesel; expect more in remote areas."],
      ],
      ctaTitle: "Plan the stops between fill-ups.",
      ctaText: "AussieCamps maps {restAreas} rest areas and {dumpPoints} dump points across Australia and turns saved places into a multi-stop route with distances.",
    },
    "drive-time-calculator": {
      metaTitle: "Driving Time Calculator Australia: Real Road Trip Days",
      metaDescription: "Estimate how long an Australian driving day really takes from distance, road type and stops. Shows the average speeds used, the formula and a worked example.",
      title: "Driving time calculator for Australian road trips",
      intro: "Maps apps quote moving time on a clear road. This calculator plans the day you will actually drive: an average speed for the kind of road, plus the time spent stopped for fuel, food and breaks.",
      formula: ["Driving minutes = distance (km) ÷ average speed (km/h) × 60", "Total minutes = driving minutes + stops × 20", "Average speeds: 85 km/h motorway or open straight, 70 km/h main highway, 60 km/h winding or coastal, 45 km/h narrow, steep or gravel"],
      formulaNote: "The speeds are planning averages that allow for towns, roadworks, slow vehicles and overtaking lanes. They are not speed limits.",
      example: [
        "A 250 km day on a winding coastal road with three stops.",
        "250 ÷ 60 × 60 = 250 minutes of driving. Three stops add 3 × 20 = 60 minutes.",
        "The day takes 310 minutes, or 5 h 10 min. On a main highway at 70 km/h the same distance and stops take 4 h 34 min.",
      ],
      assumptions: [
        "Each stop counts as 20 minutes: a fuel stop, a meal, a toilet break or a driver change.",
        "Night driving is not planned for. Wildlife is most active around dawn and dusk, so aim to arrive before dark.",
        "Unsealed roads vary with the weather and the season. Check conditions with the state road authority before a gravel leg.",
      ],
      faq: [
        ["Why is the result longer than my maps app?", "Navigation apps estimate moving time close to the posted limits. This calculator adds the road character and the time you spend stopped, which is where a long day usually runs over."],
        ["Which road type should I choose for a campervan?", "Use main highway for most sealed national highways, winding or coastal for hilly and coastal routes, and narrow, steep or gravel for unsealed roads and mountain passes. A heavy campervan or a caravan on a climb is slower again."],
        ["Does the result include fuel and meal stops?", "Only the stops you enter. Add one for each refuel, meal or break you expect; each one adds 20 minutes to the day."],
      ],
      ctaTitle: "Know where the day ends before you start it.",
      ctaText: "AussieCamps maps {campgrounds} campgrounds and {restAreas} rest areas, and builds a multi-stop route with the driving distance between stops.",
    },
    "campsite-cost-calculator": {
      metaTitle: "Campsite Cost Calculator: Per Person vs Per Site",
      metaDescription: "Compare a campsite fee charged per adult with one charged per site for your party and nights. Shows the break-even party size, the formula and a worked example in AUD.",
      title: "Campsite cost calculator: per person or per site?",
      intro: "Some campgrounds charge per adult per night and others price the whole site. Which one is cheaper depends on how many adults are in your party, so this calculator prices both for the same stay.",
      formula: ["Per-adult total = adults × nights × fee per adult", "Per-site total = nights × fee per site", "Break-even party size = fee per site ÷ fee per adult"],
      formulaNote: "Above the break-even number of adults the per-site price is cheaper; below it the per-adult price is cheaper.",
      example: [
        "Two adults staying five nights, comparing A$20 per adult per night with A$50 per site per night.",
        "Per adult: 2 × 5 × A$20 = A$200. Per site: 5 × A$50 = A$250. Per adult is A$50 cheaper.",
        "The break-even party size is A$50 ÷ A$20 = 2.5 adults, so with three adults the per-adult total rises to A$300 and the per-site price wins.",
      ],
      assumptions: [
        "Children and concession holders are often charged a different rate. Enter adults only, or adjust the fee to an average.",
        "Booking fees and park entry fees are separate. Add them to the per-site figure when comparing like with like.",
        "The figures you enter are the only inputs; check the current fee on the official booking page.",
      ],
      faq: [
        ["When is a per-site fee cheaper?", "When the number of adults is larger than the per-site fee divided by the per-adult fee. At A$50 a site and A$20 an adult that is 2.5, so a party of three or more pays less per site."],
        ["Do national park campgrounds charge per person?", "Many state park campgrounds charge per adult per night, while holiday parks usually price a site. The fee basis is set by each land manager, so read it on the official page before comparing."],
      ],
      ctaTitle: "Compare campgrounds on the map.",
      ctaText: "AussieCamps maps {campgrounds} campgrounds with fees and facilities where the land manager lists them, and links each one to its official page.",
    },
    "currency-converter": {
      metaTitle: "AUD Currency Converter for Travellers (RBA Rates)",
      metaDescription: "Convert Australian dollar prices to and from NZD, USD, GBP, EUR, CNY, INR, SGD, JPY and KRW using dated Reserve Bank of Australia reference rates.",
      title: "Australian dollar converter for trip planning",
      intro: "Convert an Australian price into the currency you think in, or the other way round. The rates are Reserve Bank of Australia reference rates with a stated date, so you know exactly what the number is based on.",
      formula: ["Converted amount = amount ÷ rate of the currency you convert from × rate of the currency you convert to", "Each rate is the number of units of that currency per A$1"],
      formulaNote: "Converting through the Australian dollar keeps every pair consistent: NZD to USD uses the same two rates as the AUD conversions.",
      example: [
        "A$100 at a rate of 1.2033 NZD per Australian dollar.",
        "100 ÷ 1 × 1.2033 = NZ$120.33.",
        "Going the other way, NZ$100 ÷ 1.2033 × 1 = A$83.10.",
      ],
      assumptions: [
        "Reference rates are mid-market figures for planning. Banks, card networks and exchange counters add their own margin or fees.",
        "Rates move every business day. Use the result to judge a price, not as a quote.",
      ],
      faq: [
        ["Which exchange rates does the converter use?", "Reserve Bank of Australia reference rates, shown with the date they apply to, expressed as units of each currency per Australian dollar."],
        ["Why does my bank charge a different amount?", "Banks and card networks use their own rate and often add a margin or a foreign transaction fee, so the amount charged differs from a reference conversion."],
      ],
      ctaTitle: "See fees in your own currency.",
      ctaText: "AussieCamps shows reported fees alongside the Australian dollar figure in the currency you choose, at a conversion rate you set once.",
    },
    "water-tank-calculator": {
      metaTitle: "Campervan Water Tank Calculator: Days Off Grid",
      metaDescription: "Turn fresh and grey water tank sizes into days off grid for your party. Shows the litres per person used, the formula and a worked example for an Australian campervan trip.",
      title: "Campervan water tank calculator: how many days off grid?",
      intro: "Tank sizes in litres only become useful once they are expressed in days. Enter your fresh and grey water capacity and the number of people, and the calculator shows how long each tank lasts and which one sets your limit.",
      formula: ["Fresh water days = fresh tank (L) ÷ (people × 11 L)", "Grey water days = grey tank (L) ÷ (people × 9 L)", "Days off grid = whichever of the two is lower"],
      formulaNote: "11 litres of fresh water and 9 litres of grey water per person per day cover drinking, cooking and washing up with careful use. Showers on board use far more.",
      example: [
        "A campervan with a 100 L fresh tank and a 90 L grey tank, travelling with two people.",
        "Fresh: 100 ÷ (2 × 11) = 4.5 days. Grey: 90 ÷ (2 × 9) = 5.0 days.",
        "The fresh tank runs out first, after about four and a half days, so plan a refill before day five.",
      ],
      assumptions: [
        "The per-person figures are averages. Hot weather, cooking with water and showers raise them.",
        "Toilet cassettes are a separate tank and are not included.",
        "Empty grey water only where it is allowed, such as a dump point or an approved site.",
      ],
      faq: [
        ["How much water does one person use per day in a campervan?", "This calculator assumes about 11 litres of fresh water per person per day for drinking, cooking and washing up, and about 9 litres of grey water. A daily shower on board uses far more, so plan for it separately."],
        ["Which runs out first, fresh or grey water?", "Whichever tank gives the lower number of days. With the same tank sizes, more people or more washing shortens both; the calculator shows the two side by side so you know which one sets the limit."],
      ],
      ctaTitle: "Find the next refill and dump point.",
      ctaText: "AussieCamps maps {water} water filling points and {dumpPoints} dump points across Australia, with the facilities each one lists.",
    },
  } satisfies Record<ToolKey, ToolCopy>,
};
export type ToolStrings = typeof toolStrings;
