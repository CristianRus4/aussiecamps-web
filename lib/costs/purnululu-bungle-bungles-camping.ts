import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp at Purnululu National Park?", "Yes, at Walardi and Kurrajong campgrounds inside the park. Both are booked and paid through Parks and Wildlife Service, and they sell out in the dry season, so book early."],
  ["Do I need a 4WD to get to the Bungle Bungles?", "Yes. The 53 kilometre track from the Great Northern Highway is rough and takes two to three hours, with creek crossings. A high clearance 4WD is required, and rental campervans are not allowed."],
  ["When is Purnululu open?", "Roughly from April to December, depending on the wet season. The track and the park are closed when the roads flood, so check the park alerts before you go."],
  ["Can I take my dog to Purnululu?", "No. Pets are not allowed in the park, which is a World Heritage area and a key wildlife refuge."],
] as const;

export default article({
  slug: "purnululu-bungle-bungles-camping", publishAt: "2026-11-10",
  title: "Camping at Purnululu and the Bungle Bungles",
  description: "How to camp at Purnululu National Park: Walardi and Kurrajong campgrounds, the 53 kilometre 4WD track, bookings, the season, the main walks and how to plan the Kimberley drive.",
  category: "Camping guides", region: "Western Australia",
  places: ["Purnululu National Park", "Bungle Bungles", "Kununurra", "Halls Creek", "Piccaninny Gorge"],
  imageAlt: "SUBJECT_PLACEHOLDER",
  intro: "Purnululu National Park, home of the Bungle Bungles, is one of the most remarkable places in Western Australia. The striped beehive domes only became widely known in the 1980s, and the park is World Heritage listed. It is also a serious trip: a 53 kilometre 4WD track, a short season and campgrounds that sell out. Book early, bring everything you need and give yourself at least two nights.",
  related: ["gibb-river-road-camping", "wet-season-camping-top-end-northern-wa", "broome-to-darwin-drive", "camping-rules-western-australia", "can-i-drive-a-2wd-hire-campervan-on-4wd-roads-in-australia"],
  sections: [
    section("Getting there", ["The park is off the Great Northern Highway, about halfway between Kununurra and Halls Creek, roughly 250 kilometres south of Kununurra. The turn off leads to a 53 kilometre track that takes two to three hours, with creek crossings and corrugations.", "A high clearance 4WD is needed, and rental campervans are not allowed. Check your tyres and carry spares."], ["53 kilometre 4WD track", "Two to three hours each way", "No rental campervans"], {
      caption: "Camping and access at Purnululu.",
      head: ["What", "Where", "Cost", "Watch for"],
      rows: [
        ["Walardi campground", "In the park", "Booked fee", "Sells out in winter"],
        ["Kurrajong campground", "In the park", "Booked fee", "Limited facilities"],
        ["Park entry fee", "Online or at the gate", "Paid", "Keep the receipt"],
        ["Highway rest areas", "Great Northern Highway", "Free", "One night in the vehicle"],
      ],
    }),
    section("Camping in the park", ["Walardi and Kurrajong are the two campgrounds, each with basic toilets and no showers. You book through the Parks and Wildlife Service, and sites sell out in the dry season from June to September.", "There is no fuel, no shop and no water to buy in the park, so bring everything with you. Pets are not allowed."], ["Walardi and Kurrajong", "Bring all supplies", "No pets allowed"]),
    section("The walks", ["Piccaninny Gorge, Echidna Chasm, Cathedral Gorge and the Domes walk are the highlights. Cathedral Gorge is a huge amphitheatre, and Echidna Chasm is a narrow slot with orange walls that glow at midday.", "The walks are hot and the sun is strong. Start early, carry plenty of water and take a hat. Scenic flights from the park give a view of the full dome range."], ["Cathedral Gorge", "Echidna Chasm", "Start early, carry water"]),
    section("The season", ["The park is open from about April to December, depending on the wet season, and the best months are May to September. In the wet season the track floods and the park closes. Our wet season camping guide explains the closures.", "Check the park alerts and the road conditions before you drive in, and allow extra days in case the track is wet."], ["April to December", "Best from May to September", "Check alerts before you go"]),
    section("Supplies and safety", ["Fuel up in Kununurra or Halls Creek and carry spare fuel and water. There is no mobile signal in the park, so tell someone your plan and carry a satellite messenger or a UHF radio if you can.", "Travel in a group if you can, and do not leave the marked tracks."], ["Fuel up before the park", "No mobile signal", "Share your plan"]),
    { ...section("Plan the Kimberley in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops.", "Remote park camps are best checked on the Parks and Wildlife Service page. AussieCamps runs on iPhone."], ["Filter by cost", "Save places to a trip", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Parks and Wildlife Service WA: Purnululu National Park", url: "https://parks.dbca.wa.gov.au/park/purnululu-national-park" },
    { label: "Australia's North West: Bungle Bungle Range", url: "https://www.australiasnorthwest.com/" },
    { label: "Main Roads WA: road conditions", url: "https://www.mainroads.wa.gov.au/" },
    { label: "UNESCO World Heritage: Purnululu National Park", url: "https://whc.unesco.org/en/list/1094/" },
  ],
});
