import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Do I need to book the Great Ocean Walk campsites?", "Yes. The hike-in campsites are small and must be booked before you walk, and a valid booking acts as your camping permit. Each night and campground is added to your booking separately."],
  ["How long is the Great Ocean Walk?", "More than 100 kilometres from Apollo Bay to the Twelve Apostles, usually walked in about eight days. Shorter trips and single sections are common."],
  ["Which direction should I walk the Great Ocean Walk?", "East to west, from Apollo Bay to the Twelve Apostles. The park managers recommend it for the views, gentler gradients and less congestion."],
  ["Is there drinking water at the campsites?", "Campsites have rainwater tanks, but the supply is not guaranteed. Treat all water, and carry extra before the long stages."],
] as const;

export default article({
  slug: "great-ocean-walk-camping-2026-27", publishAt: "2026-11-19",
  title: "Great Ocean Walk Camping 2026/27: Campsites, Permits, Fees and Stages",
  description: "How to camp the Great Ocean Walk from Apollo Bay to the Twelve Apostles: the seven hike-in campsites, booking, fees, water, tides and the best months to walk.",
  category: "Camping guides", region: "Victoria",
  places: ["Great Ocean Walk", "Apollo Bay", "Cape Otway", "Johanna Beach", "Twelve Apostles", "Port Campbell"],
  imageAlt: "Coastline along the Great Ocean Walk, Victoria",
  intro: "The Great Ocean Walk follows the Victorian coast for more than 100 kilometres, from Apollo Bay through the Great Otway National Park to the Twelve Apostles. It climbs through coastal forest, drops to long beaches and passes the Cape Otway lighthouse, with a simple hike-in campsite at the end of most days. The campsites are small and booked ahead, so the planning happens before you walk. Choose the season, book each night and watch the tides.",
  related: ["best-multi-day-walks-australia-2026-27", "great-ocean-road-camping-guide", "camping-rules-victoria", "campfires-camping-australia", "bushfire-safety-camping-australia", "camping-in-melbourne"],
  sections: [
    section("The walk in eight days", ["The usual plan is eight days, with a hike-in campsite for seven of the nights. The walk starts at Apollo Bay and finishes at the Twelve Apostles, and the park managers recommend walking it east to west for the better views, the gentler gradients and fewer people on the track.", "Daily distances are between about 10 and 16 kilometres, with stairs, long climbs and descents, and sections that can be wet, muddy or slippery. If you want a shorter walk, join the track at one of the road access points and walk two or three stages."], ["Walk east to west", "10 to 16 km a day", "Shorter trips are easy"], {
      caption: "The suggested stages and hike-in campsites, east to west.",
      head: ["Day", "Stage", "Distance", "Camp"],
      rows: [
        ["1", "Apollo Bay to Elliot Ridge", "About 10 km", "Elliot Ridge"],
        ["2", "Elliot Ridge to Blanket Bay", "About 12 km", "Blanket Bay"],
        ["3", "Blanket Bay to Cape Otway", "About 11 km", "Cape Otway"],
        ["4", "Cape Otway to Aire River", "About 10 km", "Aire River"],
        ["5", "Aire River to Johanna Beach", "About 14 km", "Johanna Beach"],
        ["6", "Johanna Beach to Ryans Den", "About 14 km", "Ryans Den"],
        ["7", "Ryans Den to Devils Kitchen", "About 13 km", "Devils Kitchen"],
        ["8", "Devils Kitchen to the Twelve Apostles", "About 16 km", "Finish"],
      ],
    }),
    section("Booking and permits", ["The hike-in campsites are small and unpowered, with a limited number of people on each site, so they must be booked before you walk. A valid booking acts as your camping permit, and walking without one can lead to fines. Each night and campground is added to your booking separately, then you check out, so plan the whole walk before you start clicking.", "The Great Ocean Road Coast and Parks Authority now manages the walk and its campgrounds, and bookings are made on its website. Register your itinerary at least 14 days before you set out if you can, so the managers know you are on the track."], ["Book every night before you walk", "A booking is your permit", "Register your itinerary"]),
    section("Fees and cancellations", ["The hike-in campsites charge a per-night fee for each site, with the price shown when you check out. Fees change each year, so check the current fee on the booking page rather than relying on an older guide. See our camping fees page for how Victorian park charges work in general.", "Cancellation terms are listed on the booking page, and a full refund is generally given only if you cancel about a month or more before your first night. If the weather or the fire danger looks bad, check the booking terms before you decide."], ["A per-night site fee", "Check the current price", "Read the cancellation terms"]),
    section("Water, food and fires", ["The campsites have rainwater tanks, but the supply is not guaranteed, especially at the end of summer. Treat all water, and carry extra before the long stages. There are shops and cafes at Apollo Bay, Cape Otway, Princetown and Port Campbell, but few places in between, so plan your food by stage.", "Carry a fuel stove rather than relying on a campfire. Check the current fire rules and the fire danger rating for the day, and take a look at our campfires guide for the general rules. Take all your rubbish out with you and follow leave no trace."], ["Treat tank water", "Carry a fuel stove", "Shops at the main towns only"]),
    section("Tides, rivers and the weather", ["Some beach sections and river crossings are unsafe at high tide or in rough surf, particularly on the western stages. Check the tide times each morning and plan the beach stretches for low tide.", "The weather on the Otway coast changes quickly, with wind and rain at any time of year. Take a waterproof jacket, warm layers for the evening and a plan for turning back if conditions turn."], ["Check tide times each day", "Beaches at low tide", "Pack for wind and rain"]),
    section("The best time to walk", ["Spring and autumn are the pick of the year, with mild days, fewer fire risks and wildflowers in spring. Summer is the busiest period and can bring hot days and fire danger, when the trail and campgrounds can close. Winter is wet, cold and rough, and the coast takes the full force of the Southern Ocean.", "School holidays and long weekends fill the campsites first, so book those dates as soon as bookings open. See the best time to camp for how Victoria's seasons compare."], ["Spring and autumn are best", "Summer can close the track", "Book holiday dates first"]),
    section("Getting there and back", ["Apollo Bay is about three hours by road from Melbourne, with a coach service from Geelong and Melbourne. At the other end, Port Campbell is a short drive from the Twelve Apostles, and Port Campbell Recreation Reserve has a place to stay on the last night.", "If you leave a vehicle at the Twelve Apostles visitor centre car park, book the parking in advance. Many walkers use a shuttle between the two ends instead of two vehicles."], ["Coach to Apollo Bay", "Book Twelve Apostles parking", "Shuttles run between the ends"]),
    { ...section("Plan the walk in AussieCamps", ["AussieCamps lists campgrounds, national parks and holiday parks near the trailhead, with each place's facilities, fees and rules as the agency publishes them. Save the night before and the night after to a trip, with the weather for each stop.", "Walk permits and campsite bookings are made with the park agency. AussieCamps runs on iPhone and is free to download, with in-app purchases."], ["Camps near the trailhead", "Weather for each stop", "Book permits with the agency"]), cta: true },
  ],
  sources: [
    { label: "Great Ocean Road Coast and Parks Authority: Great Ocean Walk and hike-in campsites", url: "https://www.greatoceanroadauthority.vic.gov.au/Land-We-Manage/National-Parks/Great-Otway-National-Park/Great-Ocean-Walk" },
    { label: "Great Ocean Road Coast and Parks Authority: booking information", url: "https://www.greatoceanroadauthority.vic.gov.au/Land-We-Manage/National-Parks/Great-Otway-National-Park/Information" },
    { label: "Parks Victoria: changes to park management along the Great Ocean Road", url: "https://www.parks.vic.gov.au/news/2026/06/11/00/43/changes-to-park-management-along-the-great-ocean-road" },
    { label: "Parks Victoria: booking information", url: "https://www.parks.vic.gov.au/where-to-stay/booking-information" },
  ],
});
