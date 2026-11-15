import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you drive from Sydney to Byron Bay in a week?", "Yes, easily. The direct drive is about 770 km and around nine hours, so a week gives you five or six stops and a rest day in the middle."],
  ["Is a week too short for a Sydney to Byron Bay campervan trip?", "It is short but workable. Expect to drive most days and to skip detours. If you want slow beach days, add a few nights or choose a two-week plan."],
  ["Should I do a one-way hire or a return loop?", "A one-way hire from Sydney to Brisbane or Byron Bay saves a day of driving but adds a fee. A return loop avoids the fee, but you spend half your week driving back."],
  ["Where do I return the van if I finish at Byron Bay?", "Byron has no big depot, so most hire companies ask you to return in Brisbane or the Gold Coast, about one to two hours away. Check the return location before you book."],
] as const;

export default article({
  slug: "one-week-campervan-itinerary-sydney-byron-bay",
  title: "1 Week Campervan Itinerary Australia: Sydney to Byron Bay",
  description: "A seven-day campervan itinerary from Sydney to Byron Bay, with fewer stops, longer driving days and honest advice on pace, one-way hire and returning the van.",
  category: "Road trips", region: "New South Wales",
  places: ["Port Stephens", "Port Macquarie", "Coffs Harbour", "Yamba", "Byron Bay", "Brisbane"],
  imageAlt: "The Cape Byron lighthouse above the coast at Byron Bay, New South Wales",
  intro: "One week is enough to drive from Sydney to Byron Bay in a campervan, but it is a driving holiday with a few good stops, not a slow beach trip. Plan on about 770 km to Byron Bay, then a short run to Brisbane or the Gold Coast to return the van. Five stops give you the best mix of beach, bush and town, and one rest day keeps the week enjoyable.",
  related: ["sydney-to-byron-bay-drive", "brisbane-to-byron-bay-drive", "byron-noosa-gold-coast-campervan-rules", "free-camping-near-sydney", "campervan-relocations-australia", "campervan-hire-cost-australia-2026"],
  sections: [
    section("The seven days", ["Legs are longer than in a two-week plan, so start each morning by 8 am and aim to arrive by mid-afternoon. A rest day at Port Macquarie breaks up the week, and you can swap it for a second night anywhere you love. The last day finishes with the hire return, so allow time for it."], ["Leave by 8 am", "Arrive by mid-afternoon", "Keep one rest day"], { caption: "A 7-day campervan itinerary from Sydney to Byron Bay, with approximate distances and nights.", head: ["Days", "Leg", "Approx distance", "Nights"], rows: [
      ["1", "Sydney to Port Stephens", "210 km, about 2.5 hours", "1"],
      ["2 to 3", "Port Stephens to Port Macquarie, then a rest day", "270 km, about 3.5 hours", "2"],
      ["4", "Port Macquarie to Coffs Harbour", "160 km, about 2 hours", "1"],
      ["5", "Coffs Harbour to Yamba", "150 km, about 2 hours", "1"],
      ["6", "Yamba to Byron Bay", "150 km, about 2 hours", "1"],
      ["7", "Byron Bay to Brisbane, hand back the van", "165 km, about 2 hours", "0"],
    ] }),
    section("Honest about pace", ["Seven days works if you accept the trade-offs. You will drive most days for two to three and a half hours, and you will see the coast from the van and short walks, not the long stays that make a two-week trip special. Cut the Port Stephens stop if you want an extra beach afternoon, and skip anything that adds more than an hour.", "Fatigue is the real risk. Take a break every two hours, share the driving if you can, and avoid driving after dark when kangaroos and wallabies are active near the road. Our night driving guide has more on the coast."], ["Break every two hours", "No driving after dark", "Cut stops, not sleep"]),
    section("Days 1 to 3: Port Stephens and Port Macquarie", ["Leave Sydney early to beat the traffic. Port Stephens has dolphin cruises, the Tomaree headland walk and the big Stockton sand dunes, and holiday parks at Anna Bay and Nelson Bay take vans. Next morning drive about 270 km to Port Macquarie, which gets two nights.", "Use the rest day for the coastal walk, the koala hospital and Lighthouse Beach, with a caravan park close to town. It also lets you restock food, fill water and use a dump point before you head north."], ["Dolphins at Port Stephens", "Coastal walk at Port Macquarie", "Restock on the rest day"]),
    section("Days 4 to 6: Coffs Harbour, Yamba and Byron Bay", ["Coffs Harbour is an easy stop for the jetty, the harbour and a swim, and Bellingen is a short detour inland for a coffee if you have the time. Day 5 is a gentle 150 km to Yamba, where you can see Angourie Point and the river mouth. Camp in a holiday park for a hot shower, or book a campground in Yuraygir National Park.", "Byron Bay on day 6 is the busiest stop, so book your night well ahead. Councils do not allow freedom camping in most places around Byron, so stay in a holiday park, and you can walk to the lighthouse and beaches in the morning."], ["Angourie Point at Yamba", "Book Byron early", "Holiday park, not roadside"]),
    section("One-way hire and returning tips", ["Most hire companies offer Sydney to Brisbane as a one-way route, and some let you drop at the Gold Coast. The one-way fee is the main extra cost, so compare quotes and ask about relocation offers, which can be cheap when companies need vans moved north.", "Byron Bay itself has no big depot, so plan the last day to include the run to Brisbane or the Gold Coast. Leave a buffer of two hours for traffic, cleaning and the return check, and fill the fuel tank and empty the toilet on the way in. If you have a flight, book it for the afternoon or the next day."], ["Compare one-way fees", "Ask about relocations", "Fuel and toilet before return"]),
    section("When to go and what to book", ["Autumn and spring give the best week on this coast, with warm days and fewer crowds. Summer and school holidays are busy and expensive, and sites in Byron Bay and Port Macquarie book out early.", "Book holiday parks at least a few weeks ahead, and national park campgrounds as soon as dates open. Check road conditions and weather each morning, since storms can close roads on the north coast."], ["Book Byron first", "Parks open early online", "Check roads each morning"]),
    { ...section("Plan the Sydney to Byron Bay week in AussieCamps", ["Add each stop in order and the app shows driving distance and time for every leg, so you can see which days are heavy. Add dates and notes to each stop, and use the To-do list for hire pick-up, bedding and the return.", "Filter by Cost, Online booking or Popular features such as showers, and sort with Nearest to find a camp quickly. Use Start at Home or Finish at Home to frame the trip, or share it with Collaborate so two people edit the same trip live through iCloud. The whole directory is inside the app, so it works with no signal. AussieCamps is an iPhone app with no account and no ads."], ["Add stop in order", "To-do list for hire", "Collaborate with a partner"]), cta: true },
  ],
  sources: [
    { label: "NSW National Parks", url: "https://www.nationalparks.nsw.gov.au/" },
    { label: "Visit NSW", url: "https://www.visitnsw.com/" },
    { label: "Live Traffic NSW", url: "https://www.livetraffic.com/" },
    { label: "Transport for NSW", url: "https://www.transport.nsw.gov.au/" },
    { label: "Bureau of Meteorology", url: "https://www.bom.gov.au/" },
  ],
});
