import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Do national park campgrounds in Australia have power?", "Rarely. Most national park campgrounds are unpowered, with a toilet, sometimes water and not much else. Powered sites are a holiday park, caravan park and showground feature, and a few parks have a powered section."],
  ["Where can I find powered campsites in Australia?", "In holiday parks and caravan parks in every state, at many showgrounds, and in a small number of park campgrounds. The park or showground's own page says which sites have power."],
  ["Which state has the most powered sites?", "Queensland, New South Wales and Victoria have the densest networks of holiday parks and showgrounds, so powered sites are easiest to find there. The Northern Territory and the Western Australian outback have fewer, spread far apart."],
  ["How do I find powered sites on a long road trip?", "Plan a powered night every few days to charge the batteries and run the fridge, and book it in school holidays. Holiday parks and showgrounds near the main highways are the reliable choice."],
] as const;

export default article({
  slug: "powered-campsites-australia-by-state", publishAt: "2026-11-09",
  title: "Powered Campsites in Australia by State: Where to Find Power on a Road Trip",
  description: "Where to find powered campsites in each Australian state: holiday parks, showgrounds and the few park campgrounds with power, and how to plan power nights on a long trip.",
  category: "Camping guides", region: "Australia",
  places: ["Holiday parks", "Showgrounds", "Caravan parks", "National parks", "Roadhouses"],
  imageAlt: "Caravans and motorhomes parked on red ground at the Eighty Mile Beach caravan park on the north-west coast of Western Australia",
  intro: "Powered campsites in Australia are mostly in holiday parks, caravan parks and showgrounds, not in national parks. Queensland, New South Wales and Victoria have the densest networks, South Australia and Tasmania have good coverage along the main routes, and Western Australia and the Northern Territory have fewer, spread out along the highways. Plan a powered night every few days to charge batteries and run the fridge, and book ahead in the school holidays.",
  related: ["powered-vs-unpowered-sites-australia", "caravan-park-vs-holiday-park", "holiday-park-prices-australia-2026", "can-i-use-a-generator-at-a-campsite-in-australia", "campervan-vs-caravan-australia"],
  sections: [
    section("Where power is, and where it is not", ["Powered sites are a commercial feature. Holiday parks and caravan parks offer them in every state, many showgrounds have a powered section, and a handful of park campgrounds do too. National park and state forest camps are almost always unpowered, with a toilet and sometimes water.", "That shapes a trip: free and park camps for the bush nights, a powered holiday park or showground every few days to recharge, wash and fill up."], ["Power is mostly commercial", "Parks and forests are unpowered", "Plan a power night every few days"], {
      caption: "What to expect for powered campsites by state.",
      head: ["State", "Where power is", "What to expect"],
      rows: [
        ["New South Wales", "Holiday parks, showgrounds, some coast parks", "Dense on the coast; fewer inland"],
        ["Victoria", "Holiday parks, showgrounds, some Parks Victoria camps", "Good coverage; book summer early"],
        ["Queensland", "Holiday parks, showgrounds, councils", "Dense on the coast; sparse in the outback"],
        ["Western Australia", "Caravan parks, roadhouses", "Long gaps in the north and Nullarbor"],
        ["South Australia", "Caravan parks, showgrounds", "Good along the main routes"],
        ["Tasmania", "Holiday parks, showgrounds", "Fills in summer; book early"],
        ["Northern Territory", "Caravan parks, roadhouses", "Few and far between"],
        ["ACT", "Holiday parks and showground camping", "Park campgrounds are unpowered"],
      ],
    }),
    section("The east coast", ["Between Melbourne, Sydney and Cairns the coast is lined with holiday parks, most with powered sites, and showgrounds fill the gaps inland. This is the easiest stretch in the country for power, and prices rise in school holidays and on long weekends.", "Book the coastal powered sites early for summer and Easter."], ["Dense network", "Holiday prices rise", "Book summer and Easter"]),
    section("The west, the north and the Nullarbor", ["In Western Australia and the Top End, powered sites sit in caravan parks and roadhouses a long way apart, so work out the gaps before you leave. On the Nullarbor, roadhouses are the usual option and power is limited.", "Carry enough battery or solar to cover the stretches in between."], ["Long gaps", "Roadhouses sell power", "Carry spare battery"]),
    section("Showgrounds", ["Many country showgrounds take campers for a modest fee, with a powered section, toilets and hot showers. They are a good cheap alternative to a holiday park, but close when a show or event is on.", "The council or showground website has the current price and rules."], ["Cheap powered nights", "Closed during events", "Check the price"]),
    section("Booking and price", ["Powered sites cost more than unpowered ones, and the gap varies by park. In school holidays and over summer, popular parks sell out weeks ahead. Our powered versus unpowered guide has examples of the price difference.", "Ask about the amp rating if you run an air conditioner, and about the lead length."], ["Book school holidays early", "Ask about the amp rating", "Check lead length"]),
    { ...section("Check the site type in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save camps to a trip and see the driving distance between stops.", "Place details are saved on the phone for use without signal, while the map, routing and weather need a connection. AussieCamps runs on iPhone."], ["Filter by cost", "Plan a trip with stops", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Discovery Parks: caravan parks and holiday parks", url: "https://www.discoveryholidayparks.com.au/" },
    { label: "Exhibition Park in Canberra: camping", url: "https://exhibitionparkincanberra.com.au/camping/rates-reservations/" },
    { label: "Tourism Australia: caravan and camping", url: "https://www.australia.com/" },
    { label: "NSW National Parks: generators when camping", url: "https://www.nationalparks.nsw.gov.au/conservation-and-heritage/care-for-parks/considerate-camping/camping-generators" },
  ],
});
