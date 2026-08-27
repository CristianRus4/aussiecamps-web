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
    ["Can you free camp in New South Wales?", "In designated areas, yes, and the rules come from three directions: NSW National Parks sites are booked and paid for, state forests allow dispersed camping in many areas, and roadside rest area limits are set by councils and Transport for NSW."],
    ["Do you need to book NSW national park campsites?", "Almost always. NSW National Parks moved to booking for the great majority of its campgrounds, including free ones, and rangers do check. Coastal parks over school holidays go months ahead."],
  ],
  "camping-rules-queensland": [
    ["Do you need a permit to camp in Queensland national parks?", "Yes. Queensland requires a camping permit booked in advance for every national park campsite, tagged to your vehicle, and it must be displayed. Fines apply for camping without one."],
    ["Where can you free camp in Queensland?", "Mostly in council-run rest areas and showgrounds, many of which are free or a few dollars for self-contained vehicles. Many outback shire councils actively welcome overnight stays, and the coastal councils are far more restrictive."],
  ],
  "camping-rules-victoria": [
    ["Can you camp for free in Victoria?", "Yes, more freely than in most states. Dispersed camping is permitted across large areas of Victoria's state forests at no charge, which is the main reason the High Country works as a camping destination."],
    ["Do Victorian national park campsites need booking?", "Many do. Parks Victoria takes bookings for its popular campgrounds and charges a site fee, and the coastal and alpine ones fill over summer and Easter. Remote bush campgrounds are more often first-come."],
  ],
  "camping-rules-tasmania": [
    ["Do you need a parks pass to camp in Tasmania?", "You need a Tasmanian Parks Pass to enter a national park, and a separate camping fee applies at most park campgrounds. For a trip of more than a few days the holiday pass is cheaper than daily entry."],
    ["Can you free camp in Tasmania?", "In designated council sites, yes, and Tasmania has a good network of free and low-cost council camping areas. Camping outside them, particularly on reserves and beaches, is generally prohibited and enforced."],
  ],
  "camping-rules-south-australia": [
    ["Do you need a permit to camp in South Australian parks?", "Yes. National Parks and Wildlife Service SA requires a booked camping permit for park campgrounds, made online or through the app, and vehicle entry fees apply at some parks on top."],
    ["Where can you camp for free in South Australia?", "In council rest areas and reserves that permit it, and along parts of the outback tracks. The Flinders Ranges has both booked park sites and private station camping, which are governed by completely different rules."],
  ],
  "camping-rules-western-australia": [
    ["Can you camp anywhere in Western Australia?", "No, and the distances make it feel like you could. Parks and Wildlife campgrounds are booked and paid for, station stays are private arrangements, and roadside camping in the 24-hour rest areas is intended for rest rather than a stay."],
    ["Do WA national parks charge an entry fee?", "Most of the major ones do, per vehicle per day, separate from the camping fee. A holiday park pass covers entry for a month or more and pays for itself quickly on a trip up the coast."],
  ],
  "camping-rules-northern-territory": [
    ["Do you need a permit to camp in the Northern Territory?", "For NT parks, a booked campsite covers you. Crossing Aboriginal land is different: a transit or entry permit is required for many roads and communities, and it must be arranged before you leave, not on arrival."],
    ["When is camping in the Northern Territory not possible?", "Through the wet season in the Top End, roughly November to April, when unsealed roads and many Kakadu and Litchfield campgrounds close and rivers become impassable. The dry season is the camping season for good reason."],
  ],
  "camping-rules-act": [
    ["Can you camp in the ACT?", "In a small number of designated campgrounds in Namadgi National Park and the Murrumbidgee River Corridor, most of which are booked through the ACT Parks system. There is very little dispersed or free camping."],
    ["Where do people camp near Canberra?", "Mostly just over the border, in NSW state forests and Kosciuszko National Park, which is where the volume of campsites actually is. The ACT itself works better as a resupply stop than a camping destination."],
  ],
  "is-free-camping-legal-australia": [
    ["Is free camping legal in Australia?", "In designated areas, yes, and nowhere else. There is no national rule: what is permitted is set by the state, the land manager and the local council, so a rest area can be a legal overnight stop in one shire and a fine in the next."],
    ["How long can you stay in a roadside rest area?", "It depends on the sign, and the range runs from a few hours to 72 hours. Rest areas exist for driver fatigue rather than as free campgrounds, and the ones intended for overnight stays say so."],
  ],
  "campfires-camping-australia": [
    ["Can you have a campfire while camping in Australia?", "Only when there is no fire ban and the land manager allows it. Each state's fire service declares total fire bans by district and by day, and during one no solid-fuel fire is legal anywhere in that district, including in a fire ring."],
    ["How do you check for a total fire ban?", "On the fire service website for the state you are in, on the day: RFS in NSW, CFA in Victoria, QFES in Queensland, and their equivalents elsewhere. Fire danger ratings are set each afternoon for the following day."],
  ],
  "sleeping-in-car-australia": [
    ["Is it legal to sleep in your car in Australia?", "It depends entirely on where the car is parked. Sleeping in a vehicle is not itself an offence, but camping in a vehicle where a council prohibits it is, and that covers most urban streets, beach car parks and coastal reserves."],
    ["Where can you legally sleep in your car overnight?", "In designated rest areas that permit overnight stays, at campgrounds and caravan parks, and in council areas whose bylaws allow it. Roadhouses and some pub car parks allow it by arrangement, which is worth asking about rather than assuming."],
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
    ["What is the speed limit for towing a caravan in Australia?", "It depends on the state. Western Australia and the Northern Territory hold towing vehicles to a lower limit than the general one, while most eastern states apply the normal posted limit. The rig's own stability is usually the real constraint."],
    ["Do you need a special licence to tow a caravan in Australia?", "A standard car licence covers most combinations up to 4.5 tonnes gross combination mass. Beyond that a light rigid or medium rigid licence is required, and exceeding your vehicle's rated tow capacity voids insurance regardless of licence."],
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
    ["Which rules differ most across Australian states?", "Towing speed limits, the minimum passing distance for cyclists, the rules for driving on unsealed roads in a rental, and school zone times. Demerit points are shared between states even though the rules that earn them are not."],
  ],

  // --- Camping guides -------------------------------------------------------
  "camping-with-dogs-australia": [
    ["Can you take a dog camping in Australia?", "In many places, but not national parks. Dogs are banned from almost all Australian national parks, and state forests, council reserves and caravan parks are where dog-friendly camping actually is."],
    ["Why are dogs banned in Australian national parks?", "Because of the risk to native wildlife, and because 1080 baiting for foxes and wild dogs is used in and around many parks. A baited dog dies quickly, and the baits are not always signed as clearly as you would hope."],
  ],
  "caravan-park-vs-holiday-park": [
    ["What is the difference between a caravan park and a national park campground?", "A caravan park is a commercial site with powered sites, amenities blocks, laundry and usually cabins, priced per site or per couple. A national park campground is public land with far fewer facilities, a booked permit and a much lower fee."],
    ["When is a caravan park worth the money?", "When you need power, a hot shower, laundry and a resupply, which on a long trip is roughly every third or fourth night. On the big drives they also matter as the reliable place to stop when the free options are full."],
  ],
  "dump-points-australia-guide": [
    ["Where can you empty a caravan toilet in Australia?", "At a public dump point, most of which are run by councils and sit at showgrounds, sports grounds and roadhouses, and at caravan parks. Emptying anywhere else, including a public toilet, is illegal and heavily fined."],
    ["Can you empty grey water on the ground in Australia?", "It depends where you are, and increasingly not. Some remote council areas still permit dispersed grey water, while most populated and coastal areas require it to go to a dump point, and national parks prohibit it outright."],
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
    ["How much does camping cost per night in Australia?", "From free at many council rest areas and showgrounds, through a modest per-person fee at national park campgrounds, to a caravan park site at many times that. The guide prices each tier with dated figures."],
    ["Do you pay park entry on top of camping fees?", "In some states, yes. Western Australia, Tasmania and parts of the Northern Territory charge vehicle entry separately from the camping fee, and a multi-day or holiday pass is usually cheaper than paying daily."],
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
