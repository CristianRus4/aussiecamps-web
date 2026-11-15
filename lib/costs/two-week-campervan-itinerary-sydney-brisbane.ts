import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Is two weeks enough to drive from Sydney to Brisbane?", "Yes, comfortably. The direct drive is about 900 km, so two weeks leaves room for six or seven stops of two nights each, with beach days and walks between the driving days."],
  ["How far should I drive each day on this trip?", "Most days on this route are 90 to 270 km, which is two to three hours at the wheel. That leaves the afternoon free to set up, swim and cook before dark."],
  ["Can I hire a campervan in Sydney and drop it in Brisbane?", "Yes, most hire companies offer one-way hire between the two cities. Expect a one-way fee, so compare it with the cost of a return loop."],
  ["When is the best time for the Sydney to Brisbane coast?", "Autumn and spring are the sweet spots, with warm days and fewer crowds. Summer is lovely but busy and booked out around school holidays, and winter is mild and quiet."],
] as const;

export default article({
  slug: "two-week-campervan-itinerary-sydney-brisbane",
  title: "2 Week Campervan Itinerary Australia: Sydney to Brisbane by the Pacific Coast",
  description: "A 14-day campervan holiday from Sydney to Brisbane along the Pacific coast, with two-night stops at Port Stephens, Port Macquarie, Yamba and Byron Bay and time for the Gold Coast hinterland.",
  category: "Road trips", region: "East Coast",
  places: ["Port Stephens", "Myall Lakes National Park", "Port Macquarie", "Coffs Harbour", "Bellingen", "Yamba", "Byron Bay", "Springbrook National Park"],
  imageAlt: "Aerial view of Cape Byron and its lighthouse, with surf along the coast and the green headland rising from the sea",
  intro: "Fourteen days is a holiday pace for the Pacific coast from Sydney to Brisbane. The direct drive is only about 900 km, so you can spread roughly 1,150 km of driving over two weeks, stay two nights in most places and still have afternoons on the beach. The route below uses six two-night stops, a night in the Gold Coast hinterland, and a final drive into Brisbane to hand the van back.",
  related: ["east-coast-road-trip-sydney-cairns", "brisbane-to-sydney-drive", "sydney-to-byron-bay-drive", "byron-noosa-gold-coast-campervan-rules", "campervan-hire-cost-australia-2026", "campervan-relocations-australia"],
  sections: [
    section("The 14 days at a glance", ["Each driving day is short, and every second night you stay put. If you fall for a place, you can drop a stop and stay a third night without breaking the plan. Distances are approximate and the Pacific Highway is mostly a divided motorway, so drive times are easy to predict."], ["Short legs, long afternoons", "Stay put every second night", "Drop a stop freely"], { caption: "A 14-day campervan itinerary from Sydney to Brisbane, with approximate distances and nights.", head: ["Days", "Leg", "Approx distance", "Nights"], rows: [
      ["1 to 2", "Sydney to Port Stephens", "210 km, about 2.5 hours", "2"],
      ["3 to 4", "Port Stephens to Myall Lakes and Seal Rocks", "90 km, about 1.5 hours", "2"],
      ["5 to 6", "Seal Rocks to Port Macquarie", "170 km, about 2 hours", "2"],
      ["7 to 8", "Port Macquarie to Coffs Harbour and Bellingen", "160 km, about 2 hours", "2"],
      ["9 to 10", "Coffs Harbour to Yamba and Yuraygir", "150 km, about 2 hours", "2"],
      ["11 to 12", "Yamba to Byron Bay", "150 km, about 2 hours", "2"],
      ["13", "Byron Bay to the Gold Coast hinterland", "120 km, about 2 hours", "1"],
      ["14", "Hinterland to Brisbane, hand back the van", "120 km, about 1.5 hours", "0"],
    ] }),
    section("Days 1 to 6: Port Stephens, Myall Lakes and Port Macquarie", ["Leave Sydney before the commuter traffic builds and head north to Port Stephens, where you can walk the Tomaree headland, watch for dolphins and slide down the Stockton Bight sand dunes. Holiday parks at Anna Bay, Fingal Bay and Shoal Bay take vans, and weekends book out in summer.", "Day 3 is a short hop to Myall Lakes National Park and Seal Rocks, where the lighthouse walk and Lighthouse Beach are the draw. National park campgrounds here are booked online, so reserve ahead for school holidays. Then continue to Port Macquarie for two nights of beaches, the coastal walk and the koala hospital, with caravan parks close to town."], ["Book Myall Lakes early", "Koala hospital at Port Macquarie", "Sydney before the rush"]),
    section("Days 7 to 12: Coffs, Bellingen, Yamba and Byron Bay", ["Coffs Harbour has a working fishing harbour, the Big Banana and a good jetty, and Bellingen is a short drive inland for cafes, markets and the Dorrigo escarpment. South West Rocks is a quieter alternative if you want a smaller town, and it swaps in easily.", "Yamba and the Yuraygir coast are a favourite for a quiet pair of nights: surf beaches, a river mouth and lots of kangaroos. National park campgrounds in Yuraygir are bookable, and Yamba has holiday parks for a hot shower. Byron Bay is the party stop and the busiest, so book your two nights well ahead, particularly in summer and over the Easter and school-holiday periods."], ["Yamba for a quiet stop", "Bellingen by day trip", "Book Byron ahead"]),
    section("Days 13 and 14: the hinterland and Brisbane", ["From Byron, head inland over the border to the Gold Coast hinterland. Springbrook National Park and Lamington National Park have rainforest, waterfalls and cooler nights, and camping in the Queensland parks needs a booking and permit. It is a gentle way to end the trip before the city.", "On day 14 drive the last stretch to Brisbane. Allow time for the hire company's return check, a clean-out and a dump-point stop on the way in, and leave a buffer before any flight. Sydney and Brisbane both have toll roads, so ask your hire company how tolls are charged."], ["Rainforest before the city", "Dump point before return", "Leave a flight buffer"]),
    section("Where to sleep", ["Along this coast the reliable choice is a holiday park or a caravan park, with powered sites and showers, and you can often book them for a quiet pair of nights. National park campgrounds suit Myall Lakes, Yuraygir and the hinterland, and they need online bookings.", "Free camping is limited on this stretch and councils in Byron Bay, Yamba and Port Macquarie do not allow it in most places. Our free camping near Sydney guide covers options on the way out of the city, and the rules in New South Wales are on the camping rules page."], ["Book parks, not roadsides", "Check council signs", "Powered sites for warmth"]),
    section("Hire, one-way fees and timing", ["A one-way hire between Sydney and Brisbane is common and straightforward, but it costs more than a return. Compare one-way fees across companies and look for relocation deals, which can be cheap when companies need vans moved north.", "School holidays and the summer break are the most expensive and the most crowded, and the weeks just outside them are the best value. If you start in autumn or spring, the coast is warm, the roads are quieter and sites are easier to find."], ["Compare one-way fees", "Look for relocation deals", "Avoid school holidays"]),
    section("When to go and what to carry", ["Autumn and spring are the best seasons. Summer brings heat, storms and some flooded roads on the north coast, and winter has cool nights but clear days. Check weather and road conditions before each driving day, since heavy rain can close roads or beach access.", "Keep fuel above a quarter tank, pack mozzie repellent and sunscreen, and carry a rubbish bag for park campgrounds that do not have bins."], ["Check weather daily", "Mozzie repellent always", "Fuel above a quarter"]),
    { ...section("Plan the Sydney to Brisbane trip in AussieCamps", ["Build the 14 days as a trip: tap Add stop for Port Stephens, Myall Lakes, Port Macquarie, Yamba and Byron Bay, and each leg shows driving distance and time. Set dates for each stop, add notes, and tick off places as you visit.", "Filter by Dogs allowed, Online booking or Popular features such as showers and toilets, and use Nearest to find a camp when plans change. Share the trip with Collaborate, send a copy as a web link, or use Share as image for one picture of the route. The whole directory is inside the app, so search and place details work with no signal. AussieCamps is an iPhone app with no account and no ads."], ["Add stop for each night", "Filter showers and toilets", "Share as image"]), cta: true },
  ],
  sources: [
    { label: "NSW National Parks", url: "https://www.nationalparks.nsw.gov.au/" },
    { label: "Visit NSW", url: "https://www.visitnsw.com/" },
    { label: "Queensland Parks and Forests", url: "https://parks.qld.gov.au/" },
    { label: "Live Traffic NSW", url: "https://www.livetraffic.com/" },
    { label: "Queensland Traffic", url: "https://qldtraffic.qld.gov.au/" },
  ],
});
