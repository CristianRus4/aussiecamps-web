/**
 * Two questions per guide, in the words people search them, answered in two or three sentences.
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
    ["Is free camping legal in Australia?", "Yes, where the land manager allows it, and nowhere else. State forests in New South Wales and Victoria, South Australian Crown land, council sites that say so and rest areas that permit an overnight stop are the main legal options; most national park campgrounds charge a fee or need a booking."],
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
    ["What should a camping app for Australia actually do?", "Work with no reception, carry accurate fee and amenity data, filter to a real question rather than a category, and be honest about access. Coverage counts for little if the details are wrong or unreadable off-grid."],
    ["Is one camping app enough for Australia?", "For finding and planning, usually. Most travellers still keep the state parks booking apps for permits, since NSW, Queensland, Victoria, South Australia and WA each run their own system."],
  ],

  // --- Costs & budget -------------------------------------------------------
  "australia-travel-cost-2026": [
    ["How much does it cost to travel Australia in 2026?", "The total is driven by distance more than anything else, because fuel and domestic flights are where the money goes. The guide sets out dated Australian dollar benchmarks for transport, accommodation and food, converted into ten currencies."],
    ["Is Australia expensive to travel in?", "Yes, particularly for accommodation, eating out and covering distance. Camping and self-catering are where it stops being expensive, which is why the gap between a camping trip and a hotel trip is unusually wide here."],
  ],
  "australia-grocery-prices-2026": [
    ["How much do groceries cost in Australia?", "The guide prices a real basket rather than an average, with dated figures per item. Meat and packaged goods are the lines that surprise visitors, and remote and roadhouse prices run far above the city ones."],
    ["Where is the cheapest place to buy food in Australia?", "The major supermarket chains in towns of any size, and Aldi where there is one. The price gap to a remote roadhouse or a small-town store is large enough that stocking up before a long leg is worth real money."],
  ],
  "eating-out-australia-prices-2026": [
    ["How much is a meal out in Australia?", "The guide gives dated prices for a café breakfast, a pub meal, a mid-range dinner and takeaway. Pub bistros remain the best value for a full meal, which is why they anchor most road trip budgets."],
    ["Do you tip in Australia?", "No. Tipping is not expected and staff are paid an award wage that assumes none, though rounding up or leaving something for exceptional service is welcomed. A surcharge on Sundays and public holidays is normal and legal."],
  ],
  "alcohol-coffee-drink-prices-australia": [
    ["How much is a beer in Australia?", "The guide prices a pub schooner, a craft beer, a bottle-shop carton, and wine by the glass and the bottle, all with dated figures. Buying from a bottle shop rather than a bar is the single biggest saving on a long trip."],
    ["How much does coffee cost in Australia?", "A flat white sits in a fairly narrow band nationwide, with inner-city cafés at the top of it. Australian coffee is genuinely good, which is why this line creeps up on people over a long trip."],
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
    ["How do you estimate fuel for an Australian road trip?", "Take the route distance, add a fifth for detours, then divide by your vehicle's real consumption rather than its brochure figure. A loaded van into a headwind will not meet its rated economy, and Australia has a lot of headwind."],
  ],
  "public-transport-costs-australia-2026": [
    ["Can you travel Australia without a car?", "Between the capitals, yes. Beyond them the network thins fast, and the coastal and outback places most people come for are effectively unreachable without a vehicle or a tour."],
    ["How much does public transport cost in Australian cities?", "The guide gives dated fares for Sydney, Melbourne, Brisbane and Perth. All run tap-on cards with daily and weekly caps, and several now accept a contactless bank card directly, which saves buying a travel card at all."],
  ],
  "domestic-flight-costs-australia-2026": [
    ["How much are domestic flights in Australia?", "The guide gives realistic sale floors and typical fares on the main routes rather than headline prices. On the long legs, such as the east coast to Perth or Darwin, flying is often cheaper than driving once fuel and time are counted."],
    ["Is it cheaper to fly or drive in Australia?", "For crossing the continent, flying usually wins on both cost and time. For anything under a day's drive, the vehicle wins, especially once a one-way rental drop-off fee is in the comparison."],
  ],
  "bus-train-costs-australia-2026": [
    ["How much do long-distance buses cost in Australia?", "Greyhound and the regional operators are the cheapest way to cover distance without a car, and the guide gives dated fares on the main corridors. Passes priced by distance or by time suit a slow east coast run."],
    ["Are Australia's long-distance trains worth it?", "As an experience rather than transport. The Ghan and the Indian Pacific are priced as journeys in their own right and cost far more than flying the same route, so treat them as the holiday rather than the way to it."],
  ],
};
