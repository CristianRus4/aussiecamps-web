import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Do I need to book the Overland Track?", "Yes, from 1 October to 31 May. You book a departure date through the Parks and Wildlife Service booking system, and the fee covers your park entry and the shuttle to the track start. In winter you register your walk instead of booking."],
  ["Can I book the huts on the Overland Track?", "No. The huts are first come, first served, and you can also sleep in a tent on the walker platforms. You must still carry a tent in case the next hut is full or you do not reach it."],
  ["Which direction do you walk the Overland Track?", "North to south only, from Cradle Mountain to Lake St Clair, usually over about six days. Up to 34 independent walkers can start on each departure date."],
  ["How much does the Overland Track cost?", "For the 2026/27 season the booking fee is about A$312 for an adult and about A$272 for children and concession holders. Transport to Cradle Mountain, the ferry from Narcissus and the trip home are extra, and fees are reviewed each year."],
] as const;

export default article({
  slug: "overland-track-2026-27",
  title: "Overland Track 2026/27: Huts, Camping, Booking Dates and Fees",
  description: "How the Overland Track works in the 2026/27 season: the booking season, the walker pass and fees, huts and tent platforms, getting to Cradle Mountain and what to carry.",
  category: "Camping guides", region: "Tasmania",
  places: ["Overland Track", "Cradle Mountain", "Lake St Clair", "Waterfall Valley", "Narcissus Hut", "Hobart"],
  imageAlt: "Barn Bluff rising above the buttongrass plain near Waterfall Valley, Overland Track, Tasmania",
  intro: "The Overland Track is Tasmania's best known walk, about 65 kilometres through the Cradle Mountain-Lake St Clair National Park from Cradle Mountain to Lake St Clair. Most people take six days, sleeping in basic huts or on tent platforms, and the weather can turn cold, wet and windy in any month. From 1 October to 31 May you need a booked departure date and a walker pass, and the popular summer dates fill within hours of bookings opening. Here is how the 2026/27 season works, what the huts and camping are like, and what to sort out before you go.",
  related: ["best-multi-day-walks-australia-2026-27", "three-capes-track-2026-27", "overland-track-2027-28-bookings", "overland-three-capes-booked-out-alternatives", "tasmania-camping-loop", "camping-rules-tasmania", "camping-without-phone-signal"],
  sections: [
    section("The Overland Track at a glance", ["The track runs one way only, north to south, from the Cradle Mountain end to Narcissus Bay at the northern tip of Lake St Clair. Much of it sits above 1,000 metres on open plateau, with buttongrass plains, alpine tarns, rainforest and views of Barn Bluff, Mount Ossa and Mount Pelion. It is a serious undertaking, and the park agency asks walkers to be fit, self-sufficient and ready to turn back.", "Up to 34 independent walkers start on each departure date during the booking season, so the track stays quieter than the numbers suggest. Your booking is for a single departure date, and you are then booked for the whole walk."], ["About 65 km, usually six days", "North to south only", "Up to 34 walkers start each day"], {
      caption: "The 2026/27 Overland Track season in brief.",
      head: ["Item", "Detail"],
      rows: [
        ["Booking season", "1 October to 31 May"],
        ["Winter", "1 June to the end of September, register your walk instead of booking"],
        ["Direction", "North to south, Cradle Mountain to Lake St Clair"],
        ["Group size", "Up to 8 people per booking"],
        ["Adult fee", "About A$312 for the season, concessions and children about A$272"],
        ["Huts", "First come, first served, plus tent platforms"],
      ],
    }),
    section("Booking dates and the walker pass", ["Bookings for each walking season open on the first Tuesday in July, and for 2026/27 they opened on Tuesday 7 July 2026. Peak dates from December to March sold out on opening day. Bookings are made through the Parks and Wildlife Service booking system. If your preferred date is full, check back often: there is no waitlist, but a cancelled place shows as available straight away, so cancellations are a real way in.", "Each walker needs a name, date of birth and home state or country, and the person paying becomes the contact for changes and refunds. Only the original booker can move a date within the season or cancel, and cancellation fees apply. On the morning you start you collect your Overland Track pass at the Cradle Mountain Visitor Centre, after a short walker briefing, so bring your booking confirmation and a completed safety checklist."], ["Opening day is the best chance", "Check cancellations for full dates", "Collect your pass before the cut-off"]),
    section("Fees: what the booking covers", ["The booking fee is about A$312 for an adult and about A$272 for children and concession holders in the 2026/27 season, and fees are reviewed each year, so check the current amount when you book. It covers your park entry for the walk and the shuttle from the Cradle Mountain Visitor Centre to the track start, so you do not need a separate parks pass for the walk itself.", "It does not cover getting to Cradle Mountain, getting home from Lake St Clair, or the ferry across the lake from Narcissus to Cynthia Bay, which is booked separately. You will need a parks pass if you walk outside the booking season, add days in the park before or after the track, or visit other Tasmanian national parks on the trip. Our camping fees and national park fees guides cover the wider picture."], ["Park entry and shuttle are included", "Lake ferry and transport are extra", "Parks pass needed for other parks"]),
    section("Huts and camping on the track", ["The huts cannot be booked. They are first come, first served, with bunks without mattresses, composting toilets, rainwater tanks and a shared space for cooking, and capacity varies from about 16 to 34 people. There are no showers, no hot water and no cooking gear, so carry your own fuel stove. The hut sites along the way include Waterfall Valley, Windermere, New Pelion, Kia Ora, Bert Nicholls and Windy Ridge.", "You can stay in the huts, camp on the tent platforms, or mix both. Either way you must carry a tent, because a hut can be full or a storm can stop you reaching it. The Tasmanian Wilderness is a fuel stove only area, so campfires are not allowed, and our leave no trace and campfires guides explain why that matters in an alpine park."], ["Carry a tent even if you plan on huts", "Bring a fuel stove and cooking gear", "No campfires anywhere on the track"]),
    section("Getting to Cradle Mountain and home from Lake St Clair", ["Coach and shuttle operators run to Cradle Mountain and back from Lake St Clair from Hobart, Launceston and Devonport all year, with more services in summer, so book seats early for popular dates. Many walkers sleep the night before at Cradle Mountain, check in at the visitor centre in the afternoon, then catch the shuttle to Ronny Creek and walk to Waterfall Valley on the first day.", "You must be on the track by about 2pm on your departure day, and earlier in April and May, so plan your arrival rather than leaving it to the road. If you are driving, remember the car stays at the start while you walk out at the other end, which is why most walkers use a transfer."], ["Book the transfer early", "Check in the afternoon before", "On the track by about 2pm"], {
      caption: "A typical six day itinerary.",
      head: ["Day", "From", "To", "Notes"],
      rows: [
        ["1", "Ronny Creek", "Waterfall Valley", "Climb past Crater Lake, shortest first day"],
        ["2", "Waterfall Valley", "Windermere", "Open plateau, Barn Bluff side trip"],
        ["3", "Windermere", "New Pelion", "Forest and buttongrass, Mount Ossa views"],
        ["4", "New Pelion", "Kia Ora", "Pelion Plains and Du Cane Gap"],
        ["5", "Kia Ora", "Windy Ridge", "Waterfalls and rainforest"],
        ["6", "Windy Ridge", "Narcissus, then ferry", "Lake shore, ferry to Cynthia Bay"],
      ],
    }),
    section("What to carry and how to stay safe", ["The park agency asks every walker to carry a safety checklist of clothing and gear that keeps you warm and dry in snow, sleet or wind, even in summer. Pack a fuel stove, a tent, a sleeping bag rated for cold nights, waterproofs and food for the whole walk. A personal locator beacon can be hired at Service Tasmania shops and some visitor centres, and our satellite messenger guide covers other options.", "There is no phone signal for most of the walk, so tell someone your plan, sign the log books at the huts and be ready to turn back. Our packing list and no phone signal guides have more on getting the basics right. Check the Bureau of Meteorology forecast and the park alerts before you leave, because bushfire and storm alerts can change your plans."], ["Safety checklist is required", "Hire a locator beacon", "Sign the log books"]),
    section("Camps either side of the walk", ["Cradle Mountain has a range of places to stay near the visitor centre, from the campground to lodges and cabins, and the park agency suggests sleeping nearby the night before so you can check in and catch the shuttle without a rush. At the end, Lake St Clair has a campground at Cynthia Bay, and Derwent Bridge is the closest village, so plan a night there before the long transfer home.", "If you are building a longer trip, combine the walk with our Tasmania camping loop, or add a few nights at the coast with our free camping in Tasmania guide. Check the fire ban status before you arrive."], ["Sleep near the visitor centre first", "Cynthia Bay campground at the end", "Pair with a Tasmania camping loop"]),
    { ...section("Plan the walk in AussieCamps", ["AussieCamps lists campgrounds, national parks and holiday parks near both ends of the walk, with each place's facilities, fees and rules as the agency publishes them. Save the night before and the night after to a trip, with the weather for each stop and the driving route between them.", "Walk passes and transfers are booked with the park agency and the transport operators. AussieCamps runs on iPhone and is free to download, with in-app purchases."], ["Camps near both ends", "Weather for each stop", "Book the pass with the agency"]), cta: true },
  ],
  sources: [
    { label: "Parks and Wildlife Service Tasmania: Overland Track", url: "https://parks.tas.gov.au/explore-our-parks/cradle-mountain/overland-track" },
    { label: "Parks and Wildlife Service Tasmania: Overland Track booking information", url: "https://parks.tas.gov.au/explore-our-parks/cradle-mountain/overland-track/overland-track-booking-information" },
    { label: "Parks and Wildlife Service Tasmania: Overland Track frequently asked questions", url: "https://parks.tas.gov.au/explore-our-parks/cradle-mountain/overland-track/frequently-asked-questions" },
    { label: "Parks and Wildlife Service Tasmania: Overland Track, plan your trip", url: "https://parks.tas.gov.au/explore-our-parks/cradle-mountain/overland-track/overland-track-plan-your-trip" },
    { label: "Discover Tasmania", url: "https://www.discovertasmania.com.au/" },
  ],
});
