import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Where can I see kangaroos from a campsite in Australia?", "Many campgrounds have kangaroos at dawn and dusk, including Cape Le Grand National Park in Western Australia, where they visit Lucky Bay beach. Stay at a distance and keep your food secured."],
  ["Can I feed wild animals at a campground?", "No. Feeding wildlife is banned in national parks and harms the animals, and it draws them to camps and roads. Keep food and rubbish in the vehicle or a secured bin."],
  ["Where can I see koalas and wombats?", "Koalas are seen in the manna gums along the Cape Otway road on the Great Ocean Road, and wombats are common at campgrounds such as Tidal River in Wilsons Promontory National Park and in Tasmania. Watch from a distance and never approach."],
  ["When can I see whales from the coast?", "Whales migrate along the east and west coasts in winter and spring, with sightings from May to November. Our winter camping guide lists the regions, and a campsite with a clifftop view makes it easy."],
] as const;

export default article({
  slug: "wildlife-encounters-campervan-australia",
  title: "Wildlife Encounters From a Campervan in Australia: Where to See Animals and How to Behave",
  description: "Where to see kangaroos, koalas, wombats and whales from a campsite in Australia, the best times of day, and the rules for keeping animals and yourself safe.",
  category: "Trip planning", region: "Australia",
  places: ["Cape Le Grand", "Cape Otway", "Wilsons Promontory", "Kangaroo Island", "Maria Island"],
  imageAlt: "A wild wombat grazing at Wilsons Promontory, Victoria",
  intro: "Camping is the easiest way to see Australian wildlife: kangaroos graze at the edge of the camp at dawn, wombats wander past at dusk and whales pass offshore in winter. Seeing them well depends on knowing when and where to look, and on a few rules that protect both the animals and you. Below are places that suit a campervan, the best times of day, and how to behave when an animal walks into your camp.",
  related: ["hit-a-kangaroo-what-to-do-australia", "australia-road-trip-fatigue-wildlife-safety", "esperance-camping-guide", "great-ocean-road-camping-guide", "australian-winter-camping-whales-snow-warm-camps", "glow-worm-caves-camping-australia"],
  sections: [
    section("When wildlife is out", ["Most Australian animals are most active around dawn and dusk and at night, which is when kangaroos, wombats and other animals are on the move. An early start and a quiet evening at camp will show you more than a midday drive.", "The same hours are the most dangerous on the road. Aim to be at camp before sunset and start after it is properly light, and read our guide to what to do if you hit a kangaroo before you drive in the bush."], ["Dawn and dusk are best", "Be at camp before dark", "Drive carefully near sunrise and sunset"]),
    section("Places that work from a campervan", ["These camps and coasts suit a van and are known for the animals around them.", "Cape Le Grand National Park in Western Australia has kangaroos that graze on Lucky Bay beach. Wilsons Promontory National Park in Victoria has wombats that wander around the Tidal River campground. Along the Great Ocean Road, the road through the manna gums at Cape Otway is a reliable place to see wild koalas, though numbers change with the health of the trees."], ["Lucky Bay for kangaroos", "Tidal River for wombats", "Cape Otway for koalas"], { caption: "Places to see wildlife from a campsite, November 2026.", head: ["Place", "State", "What you may see"], rows: [
      ["Cape Le Grand National Park", "Western Australia", "Kangaroos on the beach"],
      ["Wilsons Promontory National Park", "Victoria", "Wombats and kangaroos"],
      ["Cape Otway, Great Ocean Road", "Victoria", "Koalas in the manna gums"],
      ["Maria Island", "Tasmania", "Wombats and other wildlife on a car-free island"],
      ["Warrnambool, Logans Beach", "Victoria", "Whales from May to October"],
    ] }),
    section("Whales from the coast", ["Whales pass the east and west coasts on migration in winter and spring, and a campsite with a headland view lets you watch from your camp chair. Logans Beach at Warrnambool in Victoria is a known whale nursery between May and October, and our winter guide lists more regions.", "Watch from land, or book an operator that follows the rules for approaching whales. Do not chase them in a private boat."], ["May to November for whales", "Watch from a headland", "Use a licensed operator"]),
    section("How to behave around wildlife", ["Keep your distance and watch quietly, without cornering, touching or feeding any animal. Feeding wildlife is banned in national parks, and human food makes animals sick and bold, which leads to them being moved or destroyed.", "Store food, rubbish and cooking gear inside the vehicle or in a secured bin, and keep pets on a lead where dogs are allowed. At night, use a red torch to look around the camp, which disturbs animals less than white light."], ["Never feed wildlife", "Secure food and rubbish", "Use a red torch at night"]),
    section("Staying safe", ["Most wildlife wants to avoid you, but kangaroos can kick and scratch if cornered, snakes are common in warm months and many animals carry ticks. Watch where you put your hands and feet, wear closed shoes at night and check yourself and your pets for ticks after bushwalks.", "In the tropical north, crocodiles live in rivers, estuaries and the sea, and signs mean it. Read our guide to safe swimming in Queensland before you get in the water."], ["Closed shoes at night", "Check for ticks", "Obey crocodile signs"]),
    { ...section("Find a camp near the wildlife in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks, with each place's facilities, fees and rules as the agency publishes them. It does not list animal sightings, so check the park agency's page for current wildlife advice.", "It runs on iPhone and is free to download, with in-app purchases."], ["Find parks and campgrounds", "Check park pages for wildlife advice", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Parks Victoria: Wilsons Promontory National Park", url: "https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park" },
    { label: "Parks and Wildlife Service Tasmania: Maria Island National Park", url: "https://parks.tas.gov.au/explore-our-parks/maria-island-national-park" },
    { label: "Parks Australia: protecting wildlife", url: "https://parksaustralia.gov.au/" },
    { label: "Department of Climate Change, Energy, the Environment and Water: whales and dolphins", url: "https://www.dcceew.gov.au/environment/marine/marine-species/cetaceans" },
  ],
});
