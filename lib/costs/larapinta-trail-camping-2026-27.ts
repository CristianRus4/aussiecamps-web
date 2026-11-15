import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Do I need to book the Larapinta Trail?", "Yes. You book a designated campsite for each night you plan to be on the trail, and a multi-day walking fee applies as well. Both are arranged online with Northern Territory Parks before you go, so book the nights before you buy flights."],
  ["How long is the Larapinta Trail and how long does it take?", "About 223 kilometres in 12 sections, from the Alice Springs Telegraph Station to Mount Sonder. Walking all of it usually takes 12 to 18 days. Many people walk a few sections instead."],
  ["Is there water on the Larapinta Trail?", "There are water tanks at the trailheads and a few other points, and natural water is unreliable. Treat all water, including tank water, and plan each day's carry from the section notes."],
  ["Can I light a campfire on the Larapinta Trail?", "No. Fires are not allowed on the trail, so carry a fuel stove and enough fuel for the whole walk."],
] as const;

export default article({
  slug: "larapinta-trail-camping-2026-27", publishAt: "2027-01-12",
  title: "Larapinta Trail Camping 2026/27: Sections, Water, Resupply and Booking",
  description: "How to camp the Larapinta Trail in Tjoritja / West MacDonnell National Park: the 12 sections, water tanks, food drops, fees, fire rules and the cooler-month season.",
  category: "Camping guides", region: "Northern Territory",
  places: ["Larapinta Trail", "Alice Springs", "Standley Chasm", "Ormiston Gorge", "Redbank Gorge", "Mount Sonder"],
  imageAlt: "Ranges and red country on section 4 of the Larapinta Trail, West MacDonnell Ranges",
  intro: "The Larapinta Trail follows the spine of the West MacDonnell Ranges west of Alice Springs, from the old Telegraph Station to the summit of Mount Sonder. It is a desert walk of gorges, ridgelines and long, dry days, with a simple camp at the end of most sections. Water, food and heat shape every decision, and the campsites are booked ahead, so the planning matters as much as the walking. Walk it in the cooler months, take more water than you think you need and book each night before you go.",
  related: ["best-multi-day-walks-australia-2026-27", "camping-in-alice-springs", "red-centre-way-camping", "camping-rules-northern-territory", "camping-water-planning", "bushwalking-camp-rules-etiquette-australia"],
  sections: [
    section("The trail in 12 sections", ["The trail runs about 223 kilometres through Tjoritja / West MacDonnell National Park, and it is divided into 12 sections that each finish at a trailhead with road access. That makes it easy to walk a few sections, or to swap in a rest day in Alice Springs, instead of committing to the whole thing.", "The sections are graded from moderate to very hard. Sections 4 and 5 through the ranges are the toughest, while section 10 near Ormiston Gorge is the easiest. Allow more time than the signposted hours suggest if you carry a full pack."], ["Every section ends at a trailhead", "Sections 4 and 5 are the hardest", "Walk a few sections or all 12"], {
      caption: "The 12 Larapinta sections, with approximate distances.",
      head: ["Section", "From and to", "Distance", "Grade"],
      rows: [
        ["1", "Telegraph Station to Simpson Gap", "About 25 km", "Hard"],
        ["2", "Simpson Gap to Jay Creek", "About 26 km", "Hard"],
        ["3", "Jay Creek to Standley Chasm", "About 14 km", "Hard"],
        ["4", "Standley Chasm to the 4/5 junction", "About 18 km", "Very hard"],
        ["5", "4/5 junction to Hugh Gorge", "About 15 km", "Very hard"],
        ["6", "Hugh Gorge to Ellery Creek North", "About 29 km", "Hard"],
        ["7", "Ellery Creek North to Serpentine Gorge", "About 13 km", "Hard"],
        ["8", "Serpentine Gorge to Serpentine Chalet Dam", "About 13 km", "Hard"],
        ["9", "Serpentine Chalet Dam to Ormiston Gorge", "About 29 km", "Very hard"],
        ["10", "Ormiston Gorge to Finke River", "About 9 km", "Moderate"],
        ["11", "Finke River to Redbank Gorge", "About 26 km", "Hard"],
        ["12", "Redbank Gorge to Mount Sonder", "About 15 km", "Hard"],
      ],
    }),
    section("Where you camp", ["Camping is only at the designated campsites along the trail. You book a site for each night you plan to be on the trail, and you cannot camp between sites. Some campsites sit out on the trail itself, and others are at trailheads such as Standley Chasm, Ellery Creek and Ormiston Gorge.", "Campsites are simple, with a tent area and, at many, a toilet and a water tank. Standley Chasm has its own campground, which makes a good rest stop partway through. Carry your own toilet paper and leave no trace."], ["Book a site for every night", "No camping between designated sites", "A rest stop at Standley Chasm"]),
    section("Booking and fees", ["Bookings are made online with Northern Territory Parks. A multi-day walking fee applies to the Larapinta Trail, and you pay a camping fee for each night on top of that. Fees are set per person and change from year to year, so check the current fee schedule when you book rather than relying on an old guide.", "The walking season is in the cooler months, and the best dates fill first, particularly school holidays and the July weeks. Book as early as the booking system allows, and keep a copy of your confirmation where you can read it without phone signal."], ["Walking fee plus a camping fee", "Check the current fee schedule", "Book the busy winter weeks early"]),
    section("Water on the trail", ["Every trailhead has a water tank, and a few intermediate points do too, but natural water is unreliable. Treat all water, including tank water, and carry a large margin. Many walkers carry about 6 litres a day on the long, dry sections and fewer on the short ones.", "Plan each day from the section notes. If a tank is reported empty or a long section is ahead, carry extra from the last reliable tank. Our camping water planning guide covers how much to carry, and the drinking water rules apply to every campground."], ["Tanks at every trailhead", "Treat all water", "Carry extra before long sections"]),
    section("Food drops and resupply", ["There are very few places to buy food on the trail, so you carry everything you need between trailheads or arrange a food drop. Transfer operators run drops and pick-ups at most trailheads, and some local businesses offer food drop services from Alice Springs. There are also official food storage areas, which need a key.", "Pack food in sealed bags, label each drop with the trailhead and your dates, and keep rubbish away from animals. A common plan is one drop partway through a 12-day walk."], ["Few shops on the trail", "Transfer operators run food drops", "Label every drop clearly"]),
    section("Season, heat and fires", ["The cooler months, roughly April to September, are the walking season. Summer in the Red Centre is far too hot for the trail, and the park can close sections for safety. Nights in winter can drop below freezing, so a warm sleeping bag matters as much as a hat.", "Fires are not allowed on the Larapinta Trail, so carry a fuel stove and enough fuel for the whole walk. Check the fire bans, track closures and weather before you leave, and tell someone your route and your return date."], ["April to September", "Fuel stoves only", "Cold nights, hot days"]),
    section("Getting there and back", ["Alice Springs is the gateway, with the Telegraph Station at the eastern end and Mount Sonder at the western end, a long drive away along the Namatjira Drive. Most walkers use a transfer operator to reach the trailheads, because there is no public transport along the range.", "If you drive, leave the vehicle in Alice Springs and use a transfer for the trailheads. Our Red Centre Way guide covers the road trip around the trail, and camping in Alice Springs covers the night before and after."], ["Transfers reach the trailheads", "No public transport on the range", "Sleep a night in Alice Springs"]),
    { ...section("Plan the walk in AussieCamps", ["AussieCamps lists campgrounds, national parks and holiday parks near the trailhead, with each place's facilities, fees and rules as the agency publishes them. Save the night before and the night after to a trip, with the weather for each stop.", "Walk permits and campsite bookings are made with Northern Territory Parks. AussieCamps runs on iPhone and is free to download, with in-app purchases."], ["Camps near the trailhead", "Weather for each stop", "Book permits with the agency"]), cta: true },
  ],
  sources: [
    { label: "Northern Territory Government: Larapinta Trail", url: "https://nt.gov.au/parks/find-a-park/tjoritja-west-macdonnell-national-park/larapinta-trail/about-larapinta-trail" },
    { label: "Northern Territory Government: Campgrounds on the Larapinta Trail", url: "https://nt.gov.au/parks/find-a-park/tjoritja-west-macdonnell-national-park/larapinta-trail/campgrounds" },
    { label: "Northern Territory Government: walking trail fees", url: "https://dth.nt.gov.au/parks-and-wildlife/changes-to-our-parks/walking-trail-fees" },
    { label: "Larapinta Trail: section and trailhead information", url: "https://www.larapintatrail.com.au/" },
  ],
});
