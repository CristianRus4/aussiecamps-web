import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Do I need a permit to camp on K'gari (Fraser Island)?", "Yes. You need a camping permit for each night, and a vehicle access permit if you take a vehicle. Book both before you go through the Queensland parks booking service, because camps and permits sell out in the school holidays."],
  ["Can you camp for free on K'gari?", "No. All camping on the island is permitted and paid, in a named camping zone or campground. Camping outside a zone is not allowed."],
  ["Do I need a 4WD on K'gari?", "Yes. The island is sand, and only high clearance 4WD vehicles are allowed on the tracks and beach. Rental campervans are not allowed, and many hire companies forbid the barge crossing."],
  ["Are the dingoes dangerous?", "They are wild and can be dangerous. Never feed them, keep food and rubbish locked away, camp in a fenced area if you have children, and keep children within arm's reach. Fines apply for feeding or approaching them."],
] as const;

export default article({
  slug: "kgari-fraser-island-camping-permits", publishAt: "2026-11-10",
  title: "K'gari (Fraser Island) Camping Permits: What You Need and How to Book",
  description: "How to camp on K'gari (Fraser Island): vehicle access and camping permits, fenced camps and beach zones, the barge crossings from Hervey Bay and Inskip Point, dingo safety and tide planning.",
  category: "Camping guides", region: "Queensland",
  places: ["K'gari (Fraser Island)", "Hervey Bay", "Rainbow Beach", "Central Station", "Lake McKenzie"],
  imageAlt: "Four-wheel drives parked on the sand and tyre tracks on the beach at K'gari (Fraser Island), Queensland",
  intro: "K'gari, the island formerly known as Fraser Island, is the largest sand island in the world, and one of the best places in Australia for a 4WD camping trip. It is also one of the most regulated. You need a camping permit for every night and a vehicle access permit for your 4WD, both booked before you go, and you can only camp in named zones and campgrounds. Book early, plan the tides, and take the dingo rules seriously.",
  related: ["can-i-drive-on-the-beach-in-australia", "can-i-camp-on-the-beach-in-australia", "camping-rules-queensland", "can-i-drive-a-2wd-hire-campervan-on-4wd-roads-in-australia", "camping-fees-australia-2026"],
  sections: [
    section("What permits you need", ["You need two permits to camp on K'gari with a vehicle: a camping permit for each night, and a vehicle access permit for the 4WD. Both are booked through the Queensland parks booking service and paid in advance, and they cost less if you book online before you arrive.", "Camping outside a zone or campground is not allowed, and rangers check permits on the beach and at the camps."], ["Camping permit each night", "Vehicle access permit", "No camping outside zones"], {
      caption: "Permits and camps on K'gari.",
      head: ["What", "Where", "Cost", "Watch for"],
      rows: [
        ["Vehicle access permit", "Online, before you go", "Paid", "Valid for set dates"],
        ["Camping permit", "Online, per night", "Paid", "Sells out in holidays"],
        ["Fenced camps", "Central Station and others", "Paid", "Best for families"],
        ["Beach camping zones", "Along the east coast", "Paid", "Tides and dingoes"],
      ],
    }),
    section("Fenced camps and beach zones", ["Fenced campgrounds such as the one at Central Station are the safest choice if you have children, because they keep dingoes out. They have toilets and water.", "Beach camping zones on the east coast are the classic K'gari experience, with the surf at your door, but there are no fences, so food must be locked away and children kept close."], ["Fenced camps for children", "Beach zones are unfenced", "Lock food away"]),
    section("Getting there by barge", ["Vehicle barges cross from River Heads, near Hervey Bay, and from Inskip Point at Rainbow Beach. Book the barge in advance in the school holidays, and check the times against the tide, because the beach is the road.", "Rental vehicles are rarely allowed on the island, so check your hire company's rules before you book anything."], ["Barges from Hervey Bay and Rainbow Beach", "Book in advance", "Check the hire rules"]),
    section("Tides, tracks and sand", ["The east coast beach is a highway, but only at low tide. Check the tide table every day, lower your tyre pressure and drive slowly. Sand tracks inland are soft and rutted.", "Carry recovery boards, a compressor and a shovel, and tell someone your plan, because phone coverage is patchy."], ["Check the tide table", "Lower tyre pressure", "Carry recovery gear"]),
    section("Dingoes and the rules", ["The dingoes on K'gari are wild and the island's dingo rules are strict. Never feed or approach them, lock food and rubbish in a locked vehicle or container, and keep children within arm's reach.", "Fines apply for feeding dingoes, and the island's rangers will move you on if your camp is not safe."], ["Never feed dingoes", "Lock food away", "Children within arm's reach"]),
    { ...section("Plan the Fraser Coast in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops.", "Island camping zones are booked through the Queensland parks service, so use that for permits. AussieCamps runs on iPhone."], ["Filter by cost", "Save places to a trip", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Queensland Parks and Forests: K'gari (Fraser Island)", url: "https://parks.qld.gov.au/parks/kgari-fraser-island" },
    { label: "Queensland Government: camping and vehicle access permits", url: "https://www.qld.gov.au/recreation/activities/areas-facilities/camping" },
    { label: "Fraser Coast tourism", url: "https://www.visitfrasercoast.com/" },
  ],
});
