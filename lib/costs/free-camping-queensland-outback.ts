import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free in outback Queensland?", "Often, yes. Many outback towns run free or low-cost camps for travellers, and roadside rest areas allow a night in the vehicle. The rules are set by each council and the sign at the camp, so check the stay limit."],
  ["What are the best free camps in the Queensland outback?", "Council camps beside rivers and on the edge of towns, such as those around Charleville, Longreach, Winton and Cloncurry, and the highway rest areas. Our Longreach guide covers the central towns."],
  ["Do I need a 4WD in outback Queensland?", "Not for the main highways, which are sealed. Dirt side roads become impassable after rain, so a 2WD can reach most towns in the dry season but should not leave the highway."],
  ["How much fuel and water do I need?", "Fill the tank at every town and carry spare water, at least 10 litres per person per day. Distances between fuel are often 200 kilometres or more."],
] as const;

export default article({
  slug: "free-camping-queensland-outback", publishAt: "2026-11-10",
  title: "Free Camping in the Queensland Outback: How the Rules Work",
  description: "How free and cheap camping works in outback Queensland: council camps, showgrounds, highway rest areas and station stays, what the signs mean and how to plan fuel and water.",
  category: "Camping guides", region: "Queensland",
  places: ["Charleville", "Longreach", "Winton", "Cloncurry", "Mount Isa"],
  imageAlt: "A cattle road train driving past a blue and yellow monument on a street in Hughenden, Queensland, on the Flinders Highway",
  intro: "Outback Queensland is one of the friendliest regions in Australia for free and cheap camping. Towns that would like you to stop run council camps, showgrounds and riverside reserves, and the highways have rest areas for one night. The skill is in reading the sign, because each council sets its own limit and some camps ask for a donation or a small fee. Carry water and fuel, travel in the dry season, and spend a night in town to support the pub and the museum.",
  related: ["queensland-outback-way", "camping-rules-queensland", "townsville-to-mount-isa-drive", "is-free-camping-legal-australia", "driving-with-road-trains-australia"],
  sections: [
    section("What types of camp you will find", ["Outback Queensland has four main kinds of stay: council camps on the edge of a town, showgrounds with toilets and showers, highway rest areas, and station stays on working properties. Each has its own rules.", "Free is common. Expect basic facilities, a stay limit of one to a few days and a donation box or a small fee at some camps."], ["Council camps and showgrounds", "Highway rest areas", "Station stays"], {
      caption: "Kinds of camp in the Queensland outback.",
      head: ["Where", "Cost", "Best for", "Watch for"],
      rows: [
        ["Council camp", "Free or donation", "Cheap stop in a town", "Stay limit on the sign"],
        ["Showground", "Low fee", "Showers, power, shade", "Closed during events"],
        ["Highway rest area", "Free", "One night in the vehicle", "No facilities"],
        ["Station stay", "Paid", "A night on the land", "Book ahead; roads can close"],
      ],
    }),
    section("Reading the sign", ["A camp sign usually tells you the stay limit, whether you must be self-contained and where the nearest toilets are. Some camps ask for a small donation, which goes to the town. Follow the sign, even if the camp looks empty.", "If you are not self-contained, use the town's caravan park or showground, where there are toilets, and keep your waste out of the bush."], ["Stay limit on the sign", "Self-contained rules", "Donations help the town"]),
    section("Towns worth a night", ["Charleville has the Cosmos Centre for stargazing, Longreach has the Stockman's Hall of Fame and Qantas Founders Museum, Winton has the dinosaur trail and Cloncurry has the Flying Doctor story. All have a camp or a caravan park.", "Our Longreach guide and our Queensland Outback Way guide cover the central towns in more detail."], ["Stargazing at Charleville", "Museums in Longreach", "Dinosaurs at Winton"]),
    section("Rest areas and road trains", ["Highway rest areas are for one night in the vehicle. Keep out of truck bays, and do not camp beside the road. Road trains can be 50 metres long and need a lot of room to stop.", "Our road trains guide explains how to overtake and how to share the road safely."], ["One night in the vehicle", "Keep out of truck bays", "Give road trains room"]),
    section("Fuel, water and the weather", ["Fill the tank at every town and carry spare water. Between towns the distance can be 200 kilometres or more, and the next station may be closed.", "The dry season runs from May to September. Summer storms flood roads and close dirt tracks, so check the council's road report each day."], ["Fill up at every town", "Carry extra water", "Check road reports"]),
    { ...section("Plan the outback in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops.", "Council and showground camps are not all in the app, so check the council page for those. AussieCamps runs on iPhone."], ["Filter by cost", "Save places to a trip", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Outback Queensland Tourism", url: "https://www.outbackqueensland.com.au/" },
    { label: "Queensland Government: QLDTraffic", url: "https://qldtraffic.qld.gov.au/" },
    { label: "Queensland Government: roadside rest areas", url: "https://www.tmr.qld.gov.au/" },
    { label: "Queensland Government: camping", url: "https://www.qld.gov.au/recreation/activities/areas-facilities/camping" },
  ],
});
