/**
 * Two questions per guide, in the words people search them, answered in two or three sentences.
 * Comparison guides ("best apps", "alternatives") carry up to four, drawn from searches that name
 * the competing apps.
 *
 * These are the guide's own questions, not the homepage's: a site that answers "what is
 * AussieCamps?" in twelve FAQPage blocks is competing with itself, so nothing here repeats a
 * homepage question. Road trip guides carry none. An itinerary is not a question-shaped search, and
 * Google points FAQ markup at pages that answer questions.
 *
 * They live in one file rather than inside each article record so the whole set can be read, and
 * repetition spotted, in one screen. `lib/site.ts` attaches them by slug.
 *
 * Answers stay at the level the guide can stand behind. Almost everything here is set by a state,
 * a territory or a council rather than nationally, so where a rule would date the answer says who
 * sets it and sends the reader to that authority, which is the standard the articles themselves
 * hold to.
 */
export const articleFaqs: Record<string, readonly (readonly [string, string])[]> = {
  // --- Rules & safety, state by state ---------------------------------------
  "camping-rules-new-south-wales": [
    ["Can you free camp in New South Wales?", "Yes. Every NSW state forest except Cumberland and Strickland allows free camping for up to four weeks, first come first served. Some national park campgrounds have no camping fee but still need a booking with a $6 booking fee."],
    ["Do you need to book NSW national park campsites?", "For most listed campgrounds, yes, including free ones, which charge a $6 booking fee, and popular coastal campgrounds can book out over summer and school holidays. A few basic listed sites, such as Tuross River campground, and remote camping at unlisted sites need no booking."],
  ],
  "camping-rules-queensland": [
    ["Do you need a permit to camp in Queensland national parks?", "Yes. Every camp in a Queensland national park, state forest or recreation area needs a permit booked and paid for before you arrive, $7.75 per person or $31 per family a night in 2026, and the tag or permit details must be displayed at camp."],
    ["Where can you free camp in Queensland?", "Not in parks or forests, which all charge. Free camping means council campgrounds that allow it. Roadside rest areas let you stop for up to 20 hours unless a sign says otherwise, but the state says they are not camping sites, and many coastal councils, including Cairns, ban camping on council land."],
  ],
  "camping-rules-victoria": [
    ["Can you camp for free in Victoria?", "Yes. You can camp in most of Victoria's state forests at no charge for up to 28 consecutive nights, at least 20 metres from waterways, every state forest campground is free except Murrindindi Scenic Reserve, and some Parks Victoria campgrounds such as King Hut and Warby-Ovens are free with no booking."],
    ["Do Victorian national park campsites need booking?", "Bookable campgrounds do, and their camping fees have been half price since July 2025 and stay that way until July 2027. Wilsons Promontory uses quarterly booking releases rather than a ballot, and some Great Ocean Road sites are now booked through the Great Ocean Road Coast and Parks Authority."],
  ],
  "camping-rules-tasmania": [
    ["Do you need a parks pass to camp in Tasmania?", "Yes, inside a national park. The pass covers entry and most park campgrounds charge a fee on top. The holiday pass, $98.35 per vehicle for up to two months, beats daily passes from the third day, and council campgrounds outside parks need no pass."],
    ["Can you free camp in Tasmania?", "Yes, at council sites that allow it, at free park campgrounds such as Huon and Teds Beach in Southwest National Park, and on most Sustainable Timber Tasmania land unless signs say otherwise. On reserved land you cannot camp within 500 metres of a road outside a designated camping area."],
  ],
  "camping-rules-south-australia": [
    ["Do you need a permit to camp in South Australian parks?", "Yes, almost everywhere. National park campsites are booked and paid for before you arrive, online or through a booking agent, and the booking usually covers vehicle entry to that park. The Simpson Desert parks use the 12-month Desert Parks Pass instead, which is also compulsory east of Dalhousie Springs in Witjira."],
    ["Can you park a campervan anywhere in South Australia?", "No. You can camp on Crown land for up to 21 days without approval, at council sites and rest areas where signs allow an overnight stop, and at booked park campsites. Some councils ban or limit overnight stays, so read the sign at the exact spot."],
  ],
  "camping-rules-western-australia": [
    ["Can you camp anywhere in Western Australia?", "No. Camping outside a licensed caravan park or camping ground needs approval, national park camping is limited to designated campgrounds, and signed overnight rest stops allow up to 24 consecutive hours without approval."],
    ["Do WA national parks charge an entry fee?", "Some do. Karijini and Cape Range charge $17 per standard vehicle, or $10 with a concession, on top of camping fees of $10 to $20 per adult a night. The All Parks Pass costs $130 a year and holiday passes start at $30."],
  ],
  "camping-rules-northern-territory": [
    ["Do you need a permit to camp in the Northern Territory?", "In NT parks you book and pay for a campsite online and, as a visitor, also hold an NT Parks Visitor Pass. Camping outside a designated campground needs its own permit, and entering Aboriginal land needs a land council permit arranged before you go."],
    ["When is camping in the Northern Territory not possible?", "Many Top End campgrounds and unsealed roads close during the wet and run-off, roughly November to April, and parks can close at short notice for flooding or fire. Garig Gunak Barlu opens only in the dry season, and Kakadu's Jim Jim and Twin Falls area is closed for all of 2026."],
  ],
  "camping-rules-act": [
    ["Can you free camp in the ACT?", "No. Vehicle-based camping is allowed only at established campgrounds, all of which need a booking and charge a fee, and camping on other public land without a permit can bring up to 20 penalty units. Bushwalkers may camp in remote parts of Namadgi."],
    ["Do you need to book camping in Namadgi National Park?", "Yes. Honeysuckle, Orroral and Mount Clear need bookings made in advance, fees apply and stays are capped at seven consecutive days, although entry to the park itself is free. Woods Reserve is closed until early 2027."],
  ],
  "is-free-camping-legal-australia": [
    ["Is free camping legal in Australia?", "Yes, but only where the land manager allows it, through signs or a standing rule: there is no national right to camp wherever a vehicle can park. Most state forests in New South Wales and Victoria, South Australian Crown land for up to 21 days, council sites that say so and rest areas whose rules allow an overnight stop are the main legal options; most national park campgrounds charge a fee or need a booking."],
    ["Can you camp on the side of the road in Australia?", "Usually not. Roadside stops are limited to rest areas whose rules or signs allow an overnight stop, such as Western Australia's signed 24-hour stops. Queensland lets you stop at a rest area for up to 20 hours unless a sign says otherwise, but says rest areas are not camping sites, and it bans camping on state roads outside a narrow 4pm to 8am fatigue exception."],
  ],
  "campfires-camping-australia": [
    ["Can you have a campfire while camping in Australia?", "Yes, when there is no fire ban for the district and the campground allows fires, using the fireplace provided and wood you bring in. During a Total Fire Ban, or a local fire ban in Queensland, solid-fuel fires are illegal everywhere in that area, fire rings included."],
    ["Can you use a gas stove on a total fire ban day?", "It depends on the state and the land. NSW national parks generally ban visitor-owned gas cookers on those days, ACT parks switch off gas barbecues, Tasmania allows LPG and electric stoves but not liquid-fuel ones, and Queensland allows contained gas and spirit stoves during a fire ban. In South Australia, check the park fire restrictions for the park you are in."],
  ],
  "sleeping-in-car-australia": [
    ["Is it legal to sleep in your car in Australia?", "Yes, where camping is allowed: booked campgrounds, state forests that permit camping, and rest areas whose rules or signs allow an overnight stop. Many councils count sleeping in a parked car as camping and fine it on streets, beaches and car parks, such as Surf Coast Shire's $300 on-the-spot fine."],
    ["Can you sleep in your car in a national park?", "Only where the park allows camping, which usually means a designated campground booked in advance. A car left overnight at a day-use area or trailhead counts as camping without permission."],
  ],
  "driving-in-australia-overseas-licence": [
    ["Can you drive in Australia on an overseas licence?", "Yes, as a visitor, provided the licence is current and covers the class of vehicle. The rules are set per state, and each has its own time limit and its own point at which a visitor becomes a resident who must convert."],
    ["Do you need an International Driving Permit in Australia?", "Only if your licence is not in English. Where it is not, you must carry an official English translation or an International Driving Permit together with the original licence."],
  ],
  "overseas-driver-licence-australia-state-guide": [
    ["How long can you drive on a foreign licence in Australia?", "As a genuine visitor, for the length of your stay in most states. The clock only starts when you become a permanent resident, and then the window to convert is short, often three months, and it differs by state."],
    ["Which state's rules apply if you are driving across Australia?", "The state you are in at the time, not the one you landed in. Licence recognition, demerit points and the rules for probationary drivers are all state matters, which is why they change as you cross a border."],
  ],
  "interstate-biosecurity-road-trip": [
    ["Can you take fruit and vegetables across Australian state borders?", "Often not. Fruit fly exclusion zones and interstate quarantine rules restrict fresh fruit, vegetables, honey and plants, and the restricted list changes by direction of travel and by zone."],
    ["What happens at an Australian quarantine checkpoint?", "You either bin the restricted items in the disposal bins provided before the line, or you declare them. Disposing costs nothing; being caught with them carries an on-the-spot fine, and inspections on the WA and SA borders are routine."],
  ],
  "camping-weather-safety-australia": [
    ["What weather should campers in Australia plan for?", "Heat and fire in the south over summer, the wet season and cyclones in the north, and flash flooding almost anywhere. The Bureau of Meteorology's warnings are the source that matters, and they change through the day."],
    ["What should you do if a bushfire starts near your campsite?", "Leave early, before it is close. Waiting to see costs people their lives every summer here, and a campsite is not defendable. Know your exit road, and treat a total fire ban day near bush as a day to be somewhere else."],
  ],
  "driving-in-australia-road-rules-visitors": [
    ["What are the most important road rules for visitors to Australia?", "Drive on the left, keep to the posted limit, which is enforced by camera far more than by patrol, and observe the 0.05 blood alcohol limit. Give way rules at roundabouts and the rules for school zones catch visitors out most often."],
    ["What is the speed limit in Australia?", "Typically 100 or 110 km/h on the open road and 50 km/h in built-up areas, but limits are set per state and differ. The Northern Territory has some 130 km/h sections, and school zones drop sharply at posted times."],
  ],
  "australian-road-signs-visitors-guide": [
    ["What Australian road signs do visitors need to know?", "The ones with no overseas equivalent: floodway and depth markers, road train warnings, kangaroo and livestock signs, and the yellow advisory speed on a curve. Grid and unfenced stock signs mean animals may be on the road."],
    ["What does a floodway sign mean?", "That the road crosses a watercourse and can be under water without warning. The depth markers beside it show how deep, and the rule is the national one: if it is flooded, forget it. Most flood deaths in Australia happen in vehicles."],
  ],
  "campervan-driving-australia-safety-guide": [
    ["What do you need to know about driving a campervan in Australia?", "Its height, its width and how it behaves in crosswind, because all three matter on narrow roads and when a road train passes. Most rental agreements also restrict unsealed roads, which rules out a lot of the good camping."],
    ["Do campervans have a different speed limit in Australia?", "Under 4.5 tonnes, generally no. Heavier vehicles and anything towing face lower limits in some states, and the limit is a maximum rather than a target for a high-sided vehicle in wind."],
  ],
  "towing-caravan-australia-road-rules": [
    ["What is the speed limit for towing a caravan in Australia?", "It depends on the state. Western Australia caps any vehicle towing a trailer or caravan at 100 km/h. In NSW the 100 km/h cap applies when the towing vehicle's GVM or GCM is over 4.5 tonnes; below that the posted limit applies. Check each state's towing rules before crossing a border, and drive to the rig's stability and the conditions."],
    ["Do you need a special licence to tow a caravan in Australia?", "A standard car licence covers a tow vehicle of up to 4.5 tonnes gross vehicle mass (GVM); a heavier vehicle needs a light rigid licence or higher. The licence does not raise towing limits: the loaded caravan must stay within the lowest of the vehicle's towing capacity, the towbar and coupling rating, the caravan's own rating and the tyres' load rating. In NSW, learners cannot tow and P1 drivers may only tow trailers up to 250 kg unladen."],
  ],
  "driving-with-road-trains-australia": [
    ["How do you safely overtake a road train?", "With a very long clear stretch and a firm decision. A road train can run to 53.5 metres, so overtaking takes far more road than a truck, and pulling back in early is what causes the crashes. If in doubt, do not."],
    ["What should you do when a road train comes the other way?", "Slow down, move as far left as you safely can and expect a wall of air and stones as it passes. On a single-lane bitumen road you are expected to put your left wheels onto the gravel, and the driver will do the same."],
  ],
  "australia-road-trip-fatigue-wildlife-safety": [
    ["Why should you avoid driving at night in outback Australia?", "Because that is when kangaroos, cattle and camels are on the road, and they move toward headlights rather than away. Almost every experienced outback driver keeps to the hours between sunrise and late afternoon for this reason."],
    ["What should you do if an animal runs onto the road?", "Brake in a straight line and accept the hit rather than swerving. Swerving at highway speed is what rolls vehicles, and it turns an insurance claim into a serious crash."],
  ],
  "australia-road-rules-state-differences": [
    ["Do Australian road rules change between states?", "Yes, more than visitors expect. Speed limits, towing limits, mobile phone penalties, keep-left rules and the treatment of overseas licences are all set by each state and territory, and they apply from the moment you cross the border."],
    ["Which rules differ most across Australian states?", "Towing speed limits, the minimum passing distance for cyclists, the rules for driving on unsealed roads in a rental, and school zone times. Most states record demerit points from an interstate offence on your home licence, although Western Australia does not."],
  ],

  // --- Camping guides -------------------------------------------------------
  "camping-with-dogs-australia": [
    ["Can you take a dog camping in Australia?", "In many places, but not national parks. Dogs are banned from almost all Australian national parks, and state forests, council reserves and caravan parks are where dog-friendly camping actually is."],
    ["Why are dogs banned in Australian national parks?", "Because of the risk to native wildlife, and because 1080 baiting for foxes and wild dogs is used in and around many parks. A baited dog dies quickly, and the baits are not always signed as clearly as you would hope."],
  ],
  "caravan-park-vs-holiday-park": [
    ["What is the difference between a caravan park and a holiday park?", "Very little in practice: both are commercial parks with powered and unpowered sites, amenities and usually cabins. Holiday park usually signals more family facilities such as a pool, playground or activities, and often more cabins."],
    ["When is a caravan park worth the money?", "When you need power, hot showers, laundry and a resupply at once, or when the free and low-cost options nearby are full. Many long-trip travellers book one serviced night after two or three nights of bush camping."],
  ],
  "dump-points-australia-guide": [
    ["Where can you empty a caravan toilet in Australia?", "At a dump point. Public ones sit at showgrounds, rest areas, visitor centres and roadhouses and are listed on the National Public Toilet Map, and many caravan parks have their own. Never use a drain or the ground, and use a toilet only where it is signed for cassette disposal."],
    ["Can you empty grey water on the ground in Australia?", "Not as a rule. Grey water goes into a dump point or wherever the campground directs, and where there are no facilities the Victorian state forest standard is to tip washing-up water at least 50 metres from waterways."],
  ],
  "camping-water-planning": [
    ["How much water do you need for remote camping in Australia?", "Plan on at least five litres per person per day for drinking and cooking, more in heat, and carry a reserve on top for a breakdown. On outback tracks the standard advice is enough water to sit still for several days."],
    ["Is campground tap water in Australia safe to drink?", "In towns and caravan parks, generally yes. In national parks and remote campgrounds, tank water and bore water are common and often signed as not for drinking, so carry a filter or boil it."],
  ],
  "responsible-camping-australia": [
    ["What does responsible camping mean in Australia?", "Camping only where it is permitted, carrying out every piece of rubbish, using dump points for waste, keeping to fire rules and leaving no trace of the site. The free camping that still exists here survives because most people do this."],
    ["What is the biggest mistake campers make in Australia?", "Toilet waste, and after that fire. Human waste near a campsite or a waterway is what closes free sites, and an escaped campfire in the wrong conditions is a criminal matter as well as a catastrophic one."],
  ],
  "choosing-campsite-australia": [
    ["How do you choose a good campsite in Australia?", "Look at the ground, the trees above it and the water near it before the view. Flat, well-drained ground away from overhanging limbs and above any watercourse is worth more than a photogenic spot, particularly in summer storms."],
    ["What should you avoid when picking a campsite?", "Dry creek beds and floodways, ground under large eucalypts, which drop limbs without warning, and anywhere downhill of a slope in fire season. Also check where the afternoon sun and the prevailing wind will be."],
  ],

  // --- Trip planning --------------------------------------------------------
  "camping-packing-list-australia": [
    ["What do you need to pack for camping in Australia?", "Far more water than feels necessary, real sun protection, insect repellent, a first aid kit and warm layers, because inland nights are cold even after a hot day. The guide splits the list by the kind of trip you are doing."],
    ["What do people most often forget on an Australian camping trip?", "Warm clothing, a way to charge things away from power, and enough water. After that it is a paper map or offline data, because reception disappears well before the interesting country starts."],
  ],
  "campervan-road-trip-budget-australia": [
    ["How much does a campervan trip around Australia cost?", "Fuel and the vehicle dominate, and campsites are usually the smallest line. The guide breaks a realistic day into vehicle, fuel, camp fees, food and park passes, with dated Australian dollar figures."],
    ["How do people keep an Australian road trip cheap?", "By moving slowly, which cuts the fuel that dominates the budget, by mixing free and low-cost council sites with the occasional caravan park, and by cooking rather than eating out. Distance is the expensive part of Australia."],
  ],
  "best-time-camping-australia": [
    ["When is the best time to camp in Australia?", "It depends which half you are in, and they are opposite. The north is dry season, roughly May to September; the south is spring and autumn, with summer too hot and fire-prone inland and winter cold in the high country."],
    ["Can you camp in northern Australia in the wet season?", "Mostly not. From November to April the Top End and the Kimberley see road closures, campground closures, extreme humidity and cyclones, and many unsealed roads are impassable for months."],
  ],
  "first-campervan-trip-australia": [
    ["What should you know before your first campervan trip in Australia?", "That the distances are longer than they look, that the vehicle is taller and wider than you are used to, and that booking ahead matters over school holidays. Start with shorter driving days than you think you need."],
    ["How far should you drive on the first day?", "Not far. A few hours is plenty while you are learning the vehicle, particularly after a long flight, and it leaves daylight to set up and find out what the van does and does not have."],
  ],
  "camping-without-phone-signal": [
    ["How much of Australia has mobile coverage?", "A small fraction of the land area, though most of the population. Telstra has the widest rural network by some margin, and away from highways and towns you should plan on no coverage at all."],
    ["What should you carry for camping beyond phone signal?", "Offline maps and place details, a paper map as backup, and for genuinely remote travel a satellite messenger or a PLB. A PLB is the one that summons rescue, and it is often available to hire rather than buy."],
  ],
  "road-trip-fuel-planning-australia": [
    ["How far apart are fuel stops in outback Australia?", "Hundreds of kilometres on the main outback routes, and further on the tracks. Plan your range on reaching the stop after the one you intend to use, because roadhouses run dry, close early and have card systems that fail."],
    ["Should you carry jerry cans in Australia?", "On the remote routes, yes, and they should be proper approved containers carried outside the living space. On sealed highway routes between towns it is unnecessary weight."],
  ],

  // --- App guides -----------------------------------------------------------
  "how-to-plan-trip-aussiecamps": [
    ["How do you plan a road trip in AussieCamps?", "Save the places you are considering, add them to a trip as stops, then drag them into the order you will drive. Each leg shows its distance, and each stop carries its own date, arrival notes and weather."],
    ["Can you change a trip once it has started?", "That is what the ordering is for. Stops can be reordered, dated and ticked off as you go, so a weather change or a full campground means moving a stop rather than rebuilding the plan."],
  ],
  "how-to-use-aussiecamps-filters": [
    ["Can you filter for free camps with toilets?", "Yes, and that combination is the point of the filters. Fee, amenities, access features, place type, state, rating and online booking stack together, so \"free camps with toilets and drinking water\" is a single query."],
    ["Why does a filtered search return nothing?", "Almost always because the filters are stacked tighter than the area allows. Widen the map or drop the least important amenity, and clear the rating filter first, since it excludes places that simply have no ratings yet."],
  ],
  "save-collections-aussiecamps": [
    ["What is the difference between smart and custom collections?", "Smart collections fill themselves: Liked, Starred, Want to visit, Visited, Pins and All saved update as you mark places. Custom collections are ones you name and build, for a state, a season, a vehicle or a shortlist."],
    ["Do saved places sync between devices?", "With iCloud enabled, yes: saved states, collections and trip data follow your Apple Account. Without it, everything stays on the one device."],
  ],
  "aussiecamps-place-details": [
    ["What information does a place screen show?", "Photos, a description, opening information, fees, terms and conditions, amenities grouped by type, current alerts, ratings, contact and booking details, weather, and directions."],
    ["How do you tell whether a campground suits your vehicle?", "Read the access and amenity detail rather than the category. Access notes, surface, size limits and power availability are what decide whether a site works for a big rig, and none of it is visible from a pin on a map."],
  ],
  "aussiecamps-widgets-guide": [
    ["What can AussieCamps widgets show?", "The next stop on your current trip, a collection you are working from, and places near you, on the home screen without opening the app. They are most useful on a travel day, when the question is simply what is next."],
    ["Do widgets work without reception?", "The parts drawn from the bundled place data do. Anything live, such as weather, updates when there is a connection and shows the last value it had until then."],
  ],
  "best-camping-app-australia": [
    ["What is the best camping app in Australia?", "It depends on your phone and how you travel. On iPhone, AussieCamps pairs official campground, rest area and dump point data that stays readable without signal with a full trip planner. WikiCamps Australia has a community-built database of more than 65,000 sites for a one-off A$9.99, and CAMPS lists sites its own team has checked."],
    ["Is WikiCamps free?", "No. As of October 2026, WikiCamps Australia costs A$9.99 as a one-off purchase on each platform, with no subscription. CamperMate is a free alternative."],
    ["Which camping app works without phone signal?", "They keep different things. AussieCamps stores place details on the phone with no download step, while map tiles, directions and weather need signal. WikiCamps keeps maps and up to three planned trips, CAMPS and CamperMate let you download maps and site information, and Full Range Camping keeps listings offline with Premium."],
    ["Is there a free camping app for Australia?", "CamperMate is free, and Hipcamp is free to download with each stay paid to its host. AussieCamps is a free download with free hotel, motel and holiday park listings, but its campground, rest area and dump point data needs the Pass."],
  ],
  "wikicamps-alternatives": [
    ["What is a good alternative to WikiCamps?", "It depends on what you want to change. AussieCamps uses official park and road authority data with every place detail available offline on iPhone, CAMPS lists sites its own team has checked, and CamperMate is free and also covers New Zealand."],
    ["Is there a free alternative to WikiCamps?", "CamperMate is free with no in-app purchases on the Australian App Store. Hipcamp is free to download, but you pay each host for a booking. AussieCamps is a free download, though its campground, rest area and dump point data needs the Pass."],
    ["Is WikiCamps still worth it in 2026?", "For many travellers, yes: A$9.99 once per platform buys a community database its website puts at more than 65,000 sites, with no subscription. Version 6 changed some features, so read recent App Store reviews before you buy."],
    ["Does WikiCamps have ads?", "Yes. The App Store lists advertising, and the developer says a small number of ads appear in the reviews, fees and photos sections. It has said it is considering a paid option to remove them."],
  ],
  "campermate-alternatives": [
    ["What is better than CamperMate?", "It depends on what you want that CamperMate does not give you. AussieCamps uses park agency and road authority data with every place detail available offline on iPhone, WikiCamps Australia has 1.3 million traveller reviews by its own count for A$9.99 once, and CAMPS lists sites its own team has checked."],
    ["Is CamperMate free?", "Yes. As of October 2026 it is free to download with no in-app purchases on the Australian App Store. It shows ads and offers bookings and deals from partners."],
    ["Does CamperMate work offline?", "Partly. You can download maps and key information for use without signal, and version 5.8 added a satellite view that works with those downloaded maps."],
    ["Is there one app for camping in Australia and New Zealand?", "CamperMate covers both countries in one free app. WikiCamps sells separate apps for each country, and AussieCamps and KiwiCamping are separate iPhone apps for Australia and New Zealand."],
  ],
  "best-fuel-price-apps-australia": [
    ["What is the best app for cheap fuel in Australia?", "For travel across state lines, Petrol Spy shows official prices from most states in one free app. Within one state, the government tool is the cleanest source: FuelCheck in NSW and the ACT, Servo Saver in Victoria, FuelWatch in WA, FuelCheck TAS and MyFuel NT."],
    ["Is there a fuel price app for Victoria?", "Yes. Servo Saver in the free Service Victoria app shows prices that stations must report within 30 minutes, and from 4pm it shows the next day's maximum price."],
    ["Can you see tomorrow's petrol prices in Australia?", "In Western Australia and Victoria, yes. FuelWatch publishes WA's next-day prices from 2:30pm, and Servo Saver shows Victoria's next-day caps from 4pm. Both apply from 6am for 24 hours."],
    ["Which fuel app should I use in Queensland?", "Queensland has no government app. Its reporting scheme sends station prices to private apps, and Queensland Treasury lists those that receive the data, including Petrol Spy, FuelMap, MotorMouth, Pumped and RACQ Fuel and Deals."],
  ],
  "best-road-trip-planner-apps-australia": [
    ["What is the best app to plan a road trip in Australia?", "Use two kinds of app. A planner such as AussieCamps decides the stops, nights and dates, with distance and drive time for each leg, and a navigation app such as Google Maps or Apple Maps handles the drive itself. For remote 4WD tracks, ExplorOz Traveller does both on its own maps."],
    ["How many stops can you add in Google Maps?", "Up to 9 stops on one route, counting the final destination, according to Google's help pages. Apple Maps allows up to 14 stops on a driving route. Longer trips need splitting into several routes or a dedicated trip planner."],
    ["Does Roadtrippers work in Australia?", "Its App Store listing says it is designed for road trips in the USA and Canada only, so it is not a good fit for Australia."],
    ["Can I plan a road trip offline in Australia?", "Partly. Google Maps and Apple Maps can navigate within downloaded areas, AussieCamps keeps place details on the phone with the Pass, and WikiCamps keeps up to three downloaded trips. Live traffic, forecasts and new routes still need signal in most apps."],
  ],
  "best-caravan-rv-apps-australia": [
    ["What is the best app for caravanning in Australia?", "It depends on the question you need answered. CAMPS Australia Wide filters sites by set-up, including big rigs, AussieCamps uses official data for dump points, water and rest areas on iPhone, and WikiCamps has more than a million traveller reviews by its own count. Many caravanners pair one of these with a navigation app."],
    ["Is there an app that shows big rig friendly campsites?", "CAMPS Australia Wide lets you filter by camping set-up, including big rig, and shows big rig access on its dump points. WikiCamps lists site features for vehicle access, recorded by its users. Hipcamp has a rig type filter for its private-land stays. Check the site details before you commit to a narrow track."],
    ["What is an RV Friendly town?", "A town in the CMCA's RV Friendly program, which offers short-term, low-cost overnight parking of 24 or 48 hours for self-contained recreational vehicles, plus drinking water and a free dump point. CMCA publishes a map of them."],
    ["Do caravan apps work without phone signal?", "Partly. CAMPS, WikiCamps, CamperMate and CMCA Traveller let you download maps or site data before you go, and AussieCamps keeps place details on the phone. Live maps, routing and weather still need signal in most apps."],
  ],
  "best-apps-working-holiday-australia": [
    ["What apps do I need for a working holiday in Australia?", "Start with the free government apps: myVEVO for your visa conditions, myGov and the ATO app for tax and super, and the Fair Work Ombudsman's Record My Hours for your shifts. Add a job app such as SEEK, Indeed or Jora, and an app for places to stay, such as AussieCamps or Hostelworld."],
    ["How do I prove my work rights to an employer?", "Use myVEVO, the free Home Affairs app, to see your visa conditions and email them to the employer. Employers can also check your work rights through VEVO online with your permission."],
    ["How many days of farm work do I need for a second year visa?", "At least 3 months of specified work, a minimum of 88 calendar days, in an eligible industry and postcode for your visa. A third visa needs 6 months, at least 179 calendar days. UK passport holders applying for a 417 on or after 1 July 2024 are exempt."],
    ["What tax do working holiday makers pay in Australia?", "15% on income up to A$45,000 in 2025-26 and 2026-27, with higher rates above that. Your employer withholds at that rate only if registered with the ATO as an employer of working holiday makers, and must withhold 45% if you give no tax file number."],
  ],
  "best-weather-apps-camping-australia": [
    ["What is the best weather app for camping in Australia?", "Start with BOM Weather: it is free, carries the Bureau of Meteorology's warnings with notifications, and shows the radar and the district fire danger rating. Add WillyWeather for tides and swell at coastal camps, or Weatherzone or Windy for lightning and wind."],
    ["Does the BOM Weather app work offline?", "Partly. Its offline mode shows the data you viewed recently, so open the forecast for your next camp before you lose signal. New forecasts, radar and warnings need a connection."],
    ["Which weather app shows lightning in Australia?", "Weatherzone's free radar has a lightning layer, and its Pro subscription adds individual strikes and lightning alerts. Windy has a lightning tracker with alerts when strikes come close, and Elders Weather's Silver membership adds lightning on the national radar."],
    ["Where do I check fire danger and total fire bans?", "BOM Weather shows the fire danger rating for your district. State and territory fire agencies set those ratings and declare total fire bans, and state apps such as VicEmergency show total fire ban status."],
  ],
  "best-money-saving-travel-apps-australia": [
    ["What apps save money when travelling in Australia?", "Start with the biggest bills. AussieCamps finds free and low-cost campgrounds and shows their reported fees, Petrol Spy and the state fuel apps find cheaper fuel, WiseList compares Coles, Woolworths and ALDI, and Too Good To Go and EatClub cut food costs in the cities."],
    ["How can I save on fuel on an Australian road trip?", "Check a fuel price app before you fill up: Petrol Spy covers most states, and New South Wales, Victoria, Western Australia, Tasmania and the Northern Territory run their own official fuel price apps. My 7-Eleven can hold a 7-Eleven price for 7 days, and Flybuys offers 4 cents off a litre at Coles Express and Reddy Express."],
    ["Which app compares supermarket prices in Australia?", "WiseList compares Coles, Woolworths and ALDI prices as you build a shopping list, free with ads. Its paid WiseList+ tier adds splitting a list by store and barcode scan and compare."],
    ["Is there an app for cheap food in Australian cities?", "Too Good To Go sells surprise bags of unsold food from cafes and bakeries from A$6.99, and EatClub offers up to 50% off the bill at restaurants with spare tables."],
  ],
  "camps-australia-wide-alternatives": [
    ["What is the best alternative to CAMPS Australia Wide?", "It depends on what you want from the app. WikiCamps has the largest catalogue of traveller reviews for A$9.99 once per platform, CamperMate is free with offline maps, and AussieCamps gives you park agency data and a trip plan on iPhone."],
    ["Is there a free alternative to CAMPS?", "CamperMate is free with no in-app purchases. Full Range Camping's directory is free to browse, though offline access is a Premium feature, and the NSW National Parks app is free for NSW parks."],
    ["How much does the CAMPS app cost?", "It is free to download and free for the first 7 days, then A$14.99 a year. You need a payment method to start the trial, so cancel before it ends if you do not want to be charged."],
    ["Does CAMPS work without phone signal?", "Yes, once you have downloaded a state's maps over Wi-Fi. The app switches to offline mode when you leave coverage, but the map files need updating by hand to stay current."],
  ],
  "hipcamp-alternatives": [
    ["What is like Hipcamp in Australia?", "For bookable stays, AussieCamps lists farm and station stays and holiday parks from BookEasy, and G'day Parks books its own holiday parks. For public camping, AussieCamps, WikiCamps, CAMPS and CamperMate cover national park campgrounds and free camps, and each state's park agency takes bookings directly."],
    ["How do I book a national park campsite in Australia?", "Through the park agency for that state or territory, such as NSW National Parks, Parks Victoria or Queensland Parks and Wildlife Service. In Queensland, every camp in a national park, state forest or recreation area needs a permit booked before you arrive."],
    ["Is there a free alternative to Hipcamp?", "CamperMate is free with no in-app purchases and lists free camps and holiday parks. Many state forest and some national park campgrounds charge nothing to camp, though some still need booking, so check the land manager first."],
    ["Where else can I find farm stays in Australia?", "AussieCamps lists bookable farm and station stays from BookEasy, and Airbnb and Stayz list rural cabins and farm stays too. Hipcamp remains the app built specifically around private-land camping."],
  ],
  "best-free-camping-apps-australia": [
    ["What is the best free camping app in Australia?", "If the app itself must cost nothing, CamperMate is free with no in-app purchases and lists free camps among its places. AussieCamps is free to download but needs the Pass for its official campground and rest area data, and WikiCamps costs A$9.99 once per platform."],
    ["Is there a free app for free camps in Australia?", "Yes. CamperMate is free, and Full Range Camping's directory, including its Free Camps category, is free to browse. Government park and forest agencies also publish their campgrounds for free, though many of those sites charge a camping fee."],
    ["Do free campsites still need booking?", "Sometimes. Queensland needs a paid permit for every camp in its parks and forests, NSW National Parks charges a booking fee even where camping is free, and almost all Victorian state forest campgrounds are free and cannot be booked. Check the land manager for each site."],
    ["Can you sleep at rest areas in Australia?", "Only where the road authority or sign allows it. Queensland lets vehicles stop at rest areas for up to 20 hours unless signed otherwise, and Main Roads WA allows up to 24 hours only at rest areas signed for it. Read the sign before you stay."],
  ],

  // --- Costs & budget -------------------------------------------------------
  "australia-travel-cost-2026": [
    ["How much does it cost to travel Australia in 2026?", "The total is driven by distance more than anything else, because fuel and domestic flights are where the money goes. The guide sets out dated Australian dollar benchmarks for transport, accommodation and food, converted into ten currencies."],
    ["Is Australia expensive to travel in?", "Yes, particularly for accommodation, eating out and covering distance. Camping and self-catering are where it stops being expensive, which is why the gap between a camping trip and a hotel trip is unusually wide here."],
  ],
  "australia-grocery-prices-2026": [
    ["How much do groceries cost in Australia?", "On Numbeo's community-reported national averages for October 2026, milk is $2.45 a litre, bread $3.96 a loaf, eggs $7.19 a dozen and chicken fillets $13.14 a kilo. A solo week of core staples comes to about $85 before pantry items, and remote stores charge more."],
    ["Where is the cheapest place to buy food in Australia?", "The major supermarket chains in towns of any size, and Aldi where there is one. The price gap to a remote roadhouse or a small-town store can be large, so stocking up before a long leg usually pays."],
  ],
  "eating-out-australia-prices-2026": [
    ["How much is a meal out in Australia?", "An inexpensive restaurant meal costs about $20 to $45 a person in Sydney and a fast-food combo $15 to $18, on October 2026 community price data. A three-course dinner for two at a mid-range restaurant runs $80 to $200 before drinks."],
    ["Do you tip in Australia?", "No. Tipping is not expected and restaurant staff are paid award wages, though rounding up or leaving something for exceptional service is welcome. Sunday and public holiday surcharges are normal and legal when the menu shows them."],
  ],
  "alcohol-coffee-drink-prices-australia": [
    ["How much is a beer in Australia?", "A 500 ml draught beer in a Sydney pub costs about $7.15 to $16 on October 2026 community price data, and a 500 ml bottle from a bottle shop about $3.50 to $12 nationally. Buying from a bottle shop rather than a bar is one of the biggest savings on a long trip."],
    ["How much does coffee cost in Australia?", "A regular cappuccino costs about $4.50 to $8 in Sydney and $4 to $8 nationally on October 2026 community price data, with inner-city cafes often at the top of the range. Two coffees a day for two people becomes a real budget line on a long trip."],
  ],
  "accommodation-costs-australia-2026": [
    ["How much is accommodation in Australia per night?", "It runs from a hostel dorm through a caravan park cabin and a motel to a hotel room, and the guide prices each with dated figures. Coastal Queensland and Sydney over summer sit well above the national picture."],
    ["What is the cheapest way to sleep in Australia?", "Camping, by a wide margin, and a council or national park site costs a fraction of a hostel dorm. The saving holds only if the vehicle and fuel to reach those sites are already part of the plan."],
  ],
  "camping-fees-australia-2026": [
    ["How much does camping cost per night in Australia?", "In national parks, from nothing to more than $40 a night at the busiest serviced sites in 2026: Queensland charges $7.75 per person, WA and the NT $10 to $20 per adult, Victoria's half-price bookable campgrounds start at $16 a site, and some NSW campgrounds charge only a $6 booking fee. Commercial holiday parks set their own prices."],
    ["Do you pay park entry on top of camping fees?", "In some states. Tasmania requires a Parks Pass for every national park, WA charges $17 a vehicle at parks such as Karijini, 45 NSW parks charge vehicle entry, and NT visitors need a Parks Visitor Pass. South Australia waives entry with most campground bookings, and Queensland has no general park entry fee, but driving on K'gari and the other sand islands needs a paid vehicle access permit."],
  ],
  "australia-road-trip-fuel-cost-2026": [
    ["How much does fuel cost in Australia?", "The guide gives dated prices per litre for petrol and diesel and works them through real routes. Remote roadhouse prices run far above city prices, sometimes by half again, which is what breaks outback budgets."],
    ["How do you estimate fuel for an Australian road trip?", "Take the route distance and add a fifth for detours, multiply by your vehicle's real consumption in litres per 100 km and divide by 100 to get litres, then multiply by the price per litre. So a van using 12 litres per 100 km needs about 120 litres for every 1,000 km driven. Use real consumption, not the brochure figure: a loaded van into a headwind will not meet its rated economy."],
  ],
  "public-transport-costs-australia-2026": [
    ["Can you travel Australia without a car?", "Between the capitals, yes. Beyond them the network thins fast, and many of the coastal and outback places most people come for are hard to reach without a vehicle or a tour."],
    ["How much does public transport cost in Australian cities?", "Queensland charges a flat 50 cents a trip, Perth caps a day at $7 and Sundays are free with a SmartRider or bank card, Melbourne's daily cap is $5.70 until 1 January 2027, and Sydney's adult Opal cap is $19.30 Monday to Thursday and $9.65 Friday to Sunday and on public holidays."],
  ],
  "domestic-flight-costs-australia-2026": [
    ["How much are domestic flights in Australia?", "2026 sale fares started at $49 one way for Sydney to Ballina, $105 for Melbourne to Sydney and $245 for Sydney to Perth, but those were limited seats without checked baggage. Outside a sale, and with bags added, expect to pay more."],
    ["Is it cheaper to fly or drive in Australia?", "For crossing the continent, flying usually wins on time, and often on cost for one or two travellers. For anything under a day's drive the vehicle usually wins, especially once a one-way rental drop-off fee is in the comparison."],
  ],
  "bus-train-costs-australia-2026": [
    ["How much do long-distance buses cost in Australia?", "Greyhound and the regional operators are the cheapest way to cover distance without a car, and the guide gives dated fares on the main corridors. Passes priced by distance or by time suit a slow east coast run."],
    ["Are Australia's long-distance trains worth it?", "As an experience rather than transport. The Ghan and the Indian Pacific are priced as journeys in their own right and cost far more than flying the same route, so treat them as the holiday rather than the way to it."],
  ],
};
