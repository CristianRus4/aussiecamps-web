import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free in Coober Pedy?", "Not freely around town. The council keeps camping to caravan parks and signed places, and the opal fields are dotted with old mine shafts that are dangerous in the dark. The free nights are at rest areas on the Stuart Highway, where the sign allows it."],
  ["Is it safe to walk around the opal fields?", "Take care. There are old and unmarked shafts, and a fall can be fatal. Stay on the marked tracks and paths, keep children and pets close, and do not walk the fields at night."],
  ["Can you stay underground in Coober Pedy?", "Yes. Several hotels and a caravan park have underground rooms and sites that stay cool in summer and warm in winter, which is the usual reason to stay in town."],
  ["How far is Coober Pedy from Uluru?", "It is roughly 700 kilometres from Coober Pedy to Uluru by road, with long stretches between fuel. Most people split it with a night at Marla or Erldunda."],
] as const;

export default article({
  slug: "free-camping-coober-pedy", publishAt: "2026-11-10",
  title: "Free Camping in Coober Pedy: Where to Stay in the Opal Town",
  description: "Where to camp around Coober Pedy: why free camping in town is limited, the caravan parks and underground stays, rest areas on the Stuart Highway and how to stay safe on the opal fields.",
  category: "Camping guides", region: "South Australia",
  places: ["Coober Pedy", "The Breakaways", "Stuart Highway", "Painted Desert", "Marla"],
  imageAlt: "Uluṟu, Uluṟu-Kata Tjuṯa National Park",
  intro: "Coober Pedy sits halfway between Adelaide and Uluru, and almost everyone stops for a night. Free camping in town is limited, because the council keeps camping to caravan parks and signed spots and the opal fields are riddled with old mine shafts. The best value is a powered site at a caravan park, or a rest area on the Stuart Highway if you only need to sleep. Plan around the heat, the long fuel gaps and the underground stays that most visitors come for.",
  related: ["camping-rules-south-australia", "adelaide-to-uluru-road-trip", "is-free-camping-legal-australia", "camping-water-planning", "australia-road-trip-fatigue-wildlife-safety"],
  sections: [
    section("What the town allows", ["Coober Pedy is a mining town, and the council does not allow camping across town and the opal fields. You can camp at the caravan parks, which have powered and unpowered sites, and at a few signed places. Rangers and locals notice a van parked where it should not be.", "The old opal mine shafts are the real reason to follow the rules. Many are open or lightly covered, and they are very dangerous in the dark."], ["Camp at the caravan parks", "Do not wander the fields", "Old shafts are a real danger"], {
      caption: "Where to stay in and around Coober Pedy.",
      head: ["Where", "Cost", "Best for", "Watch for"],
      rows: [
        ["Caravan parks", "Paid", "Power, showers, shade", "Book in winter"],
        ["Underground stays", "Paid", "Cool nights, the novelty", "Limited sites"],
        ["Stuart Highway rest areas", "Free", "One night in the vehicle", "No facilities"],
        ["Marla and Cadney Park", "Free or small fee", "Overnight on the road to Uluru", "Fuel and water to carry"],
      ],
    }),
    section("Underground and powered stays", ["Coober Pedy is the one place where sleeping underground is normal. Several hotels and a caravan park have rooms and sites dug into the hillside, which stay around the same temperature all year. In a summer that regularly passes 40 degrees, that alone is worth the booking.", "Book ahead in the cooler months, when the town is full of travellers heading to or from Uluru."], ["Underground rooms stay cool", "Book in winter", "Powered sites for summer"]),
    section("Rest areas on the Stuart Highway", ["The Stuart Highway north and south of town has rest areas designed for drivers to sleep in the vehicle. Treat them as a night's stop, not a camp: no awning, no chairs, no second night, and take your rubbish with you.", "Some roadhouses along the road, such as Marla and Cadney Park, let you camp for a small fee and sell fuel, water and a meal. Check opening hours, because they can be a long way apart."], ["One night in the vehicle", "Roadhouses sell fuel and water", "Check opening hours"]),
    section("The Breakaways and the Painted Desert", ["The Breakaways, about 30 kilometres from town, is a reserve of colourful hills that is best at sunrise and sunset. A pass is needed to enter and camping is not allowed inside, so go for the light and return to town.", "The Painted Desert is further out, on a station that offers camping and tours. Check the conditions and the road before you go, because the dirt turns to bull dust or mud quickly."], ["Go for the light, not a camp", "Pass needed at the Breakaways", "Check dirt road conditions"]),
    section("Heat, water and fuel", ["Summer in Coober Pedy is extreme and the desert between the towns is dry. Carry more water than you expect to use, keep fuel above half, and avoid driving at dawn and dusk when kangaroos and emus are on the road.", "Mobile signal is patchy outside the town. Tell someone your route and your arrival time, and never leave the road to find a camp."], ["Carry extra water", "Avoid dawn and dusk driving", "Let someone know your plan"]),
    { ...section("Plan the Stuart Highway in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops, which is the number that matters on the way to Uluru.", "Caravan parks and roadhouse camps are not all in the app, so check their own pages for those. AussieCamps runs on iPhone."], ["Filter by cost", "Check the distance between stops", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "South Australian Tourism Commission: Coober Pedy", url: "https://southaustralia.com/places-to-go/outback/coober-pedy" },
    { label: "Coober Pedy council", url: "https://www.cooberpedy.sa.gov.au/" },
    { label: "Parks SA", url: "https://www.parks.sa.gov.au/" },
    { label: "South Australian Department for Infrastructure and Transport: road conditions", url: "https://www.dit.sa.gov.au/" },
  ],
});
