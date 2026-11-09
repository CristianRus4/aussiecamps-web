import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you sleep at rest areas in Western Australia?", "Only at rest areas signed for overnight stops, where you can stay up to 24 hours. At others, treat the stop as a break and not a camp."],
  ["Can you sleep at rest areas in South Australia?", "Where no sign or council rule prohibits it, you can stop for a night in the vehicle. Some councils ban overnight stays outright, such as the Barossa Council, so follow the sign."],
  ["How long can I stay at a rest area on the Nullarbor?", "The stops signed for camping allow up to 24 hours in Western Australia and follow local rules in South Australia. Roadhouses sell fuel, water and meals and often have paid camping."],
  ["Do WA and SA rest areas have toilets and water?", "Many have toilets and tables, and some have shelters, but water is often not drinkable or not provided. Carry your own."],
] as const;

export default article({
  slug: "rest-areas-western-australia-south-australia", publishAt: "2026-11-09",
  title: "Rest Areas in Western Australia and South Australia: Where You Can Stay the Night",
  description: "How rest areas work in WA and SA: signed 24-hour stops in Western Australia, the sign-and-council rule in South Australia, facilities, the Nullarbor and how to use them well.",
  category: "Rules & safety", region: "Western Australia and South Australia",
  places: ["Nullarbor", "Eyre Highway", "North West Coastal Highway", "Great Northern Highway", "Stuart Highway"],
  imageAlt: "Eyre Highway across the Nullarbor Plain",
  intro: "Rest areas are the backbone of a long drive across Western Australia and South Australia, and the rules differ. In WA you can stay up to 24 hours at stops signed for overnight camping. In SA the rule follows the sign and the local council, and some councils ban overnight stays entirely. Either way, treat a rest area as a place to sleep in the vehicle for a night, not a campsite.",
  related: ["can-i-stay-overnight-at-a-rest-area-in-australia", "nullarbor-crossing-camping-guide", "camping-rules-western-australia", "camping-rules-south-australia", "australia-road-trip-fatigue-wildlife-safety"],
  sections: [
    section("Western Australia: the 24-hour rule", ["WA rest areas signed for overnight stops allow you to stay up to 24 consecutive hours. They are the main free option in the state, and they run along the North West Coastal, Great Northern, Great Eastern and South Western highways.", "Where there is no sign, the stop is for a break, not a bed. Camping elsewhere without approval risks a fine."], ["Signed stops: up to 24 hours", "No sign, no bed", "Free"], {
      caption: "How rest areas work in WA and SA.",
      head: ["State", "Overnight rule", "Where it bites"],
      rows: [
        ["Western Australia", "Signed overnight stops: up to 24 hours", "Unsigned stops are for a break"],
        ["South Australia", "Follow the sign and the council", "Some councils ban overnight stays"],
        ["Nullarbor", "Roadhouses and signed stops", "Long gaps; carry water and fuel"],
      ],
    }),
    section("South Australia: sign and council", ["South Australia has no blanket rule. Where no sign or council rule prohibits it, you can stop for a night in the vehicle, and where a sign says no overnight stays, you must move on.", "Some councils ban it entirely. The Barossa Council, for example, prohibits camping or overnight stays in public reserves, car parks, roads and rest areas across its region."], ["Follow the sign", "Check the council", "Barossa bans it"]),
    section("The Nullarbor and the long roads", ["On the Eyre Highway across the Nullarbor, the gaps between fuel and rest stops are long. Roadhouses sell fuel, water and meals and often have paid camping, and signed rest stops fill the gaps. Our Nullarbor guide covers it.", "Fatigue is the point of rest areas: pull in when you are tired and do not push on."], ["Roadhouses sell fuel and water", "Long gaps", "Stop when you are tired"]),
    section("Using a rest area well", ["Park in the car and caravan bays, keep truck bays clear and leave no rubbish. Do not set up awnings and chairs across the grass, do not run a generator and do not stay a second night.", "Carry your own water, because tanks at rest areas may not be drinkable, and a torch for night."], ["Keep truck bays clear", "No generators", "Carry your own water"]),
    { ...section("Find rest areas in AussieCamps", ["AussieCamps maps 1,661 Western Australian roadside rest areas and 391 in South Australia, with each place's facilities as the road authority publishes them. You can filter by facilities, save stops to a trip and see the driving distance between them, which shows the long gaps before you leave.", "Place details are saved on the phone for use without signal, which matters on the Nullarbor. The map, routing and weather need a connection, and AussieCamps runs on iPhone."], ["Rest areas and toilets", "See each leg's distance", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Main Roads Western Australia: rest areas", url: "https://www.mainroads.wa.gov.au/" },
    { label: "SA Department for Infrastructure and Transport: rest areas", url: "https://www.dit.sa.gov.au/" },
    { label: "Barossa Council: camping", url: "https://www.barossa.sa.gov.au/recreation-and-venues/camping" },
    { label: "RAC WA: driving and rest stops", url: "https://rac.com.au/" },
  ],
});
