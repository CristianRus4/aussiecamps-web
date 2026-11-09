import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free near Cairns?", "Very little. Queensland charges for national park and forest camping, and Cairns-area councils ban camping in the city, on beaches and in parks. Free options are limited to some rest areas and a few council camps further out on the Atherton Tableland and along the highways."],
  ["Is it safe to camp near Cairns in the wet season?", "The wet season, roughly December to April, brings heavy rain, flooding and cyclones, and some roads and camps close. Winter, May to October, is the best camping season."],
  ["Are there crocodiles near Cairns campsites?", "Yes, in estuaries, rivers and some waterholes. Obey crocodile warning signs, do not swim in the north's creeks and keep camp well back from the water."],
  ["Where should I stay in a campervan in Cairns?", "A holiday park or caravan park in or near the city. Councils sign against overnight stays in streets, car parks and beaches."],
] as const;

export default article({
  slug: "free-camping-near-cairns", publishAt: "2026-11-09",
  title: "Free Camping Near Cairns: What to Expect in Tropical North Queensland",
  description: "Where to camp near Cairns: why free camping is scarce in Far North Queensland, the cheap permit camps and council sites, and wet-season and crocodile cautions.",
  category: "Camping guides", region: "Queensland",
  places: ["Atherton Tableland", "Daintree", "Cape Tribulation", "Port Douglas", "Palm Cove"],
  imageAlt: "Cape Tribulation and the Daintree coast",
  intro: "Free camping near Cairns is rare. Queensland charges for camping in its national parks and forests, councils ban it in and around the city, and the tropical climate adds wet-season floods and crocodiles to the mix. What you can do is stay cheaply at permit camps on the Tablelands and the Daintree coast, use a holiday park for the city, and keep the odd free night for a rest area or council camp further out.",
  related: ["camping-rules-queensland", "brisbane-to-cape-tribulation", "brisbane-to-cairns-drive", "wet-season-camping-top-end-northern-wa", "can-i-stay-overnight-at-a-rest-area-in-australia"],
  sections: [
    section("Why free is rare in the tropics", ["Queensland's parks and forests need a booked camping permit, so there are no free park camps. Cairns and the coast between Palm Cove and Port Douglas are tourist country, and councils sign against camping in streets, car parks and on beaches. Rangers patrol in the dry season when the town is full.", "The practical plan is a holiday park for the city nights and a few permit camps or council camps for the rest."], ["Parks need a permit", "No camping on beaches", "Patrols in the dry season"], {
      caption: "Where you can stay near Cairns, how far it is, and the main limit.",
      head: ["Where", "Drive from Cairns", "Cost", "Main limit"],
      rows: [
        ["Park and forest campgrounds", "1 to 3 hours", "Booked permit", "Not free; book ahead"],
        ["Council camps on the Tablelands", "1 to 2 hours", "Low cost", "Each sets its own rules"],
        ["Daintree and Cape Tribulation camps", "2 to 3 hours", "Paid", "Crocodiles; wet-season closures"],
        ["Rest areas", "Along the highways", "Free", "Follow the sign; limits vary"],
      ],
    }),
    section("The Tablelands and the coast", ["The Atherton Tableland is cooler than the coast and has lakes, waterfalls and cheap camps, including council-run sites in the small towns. It is the best place near Cairns for a low-cost night.", "North to the Daintree and Cape Tribulation the camps are privately run or in national park, with fees and bookings. South to Mission Beach and Innisfail has holiday parks and a few forest camps."], ["Tablelands are cooler and cheaper", "Daintree camps are paid", "Mission Beach has parks"]),
    section("Wet season and cyclones", ["The wet season, roughly December to April, brings heavy rain, flooding and the risk of cyclones. Roads, causeways and fords close, and some parks shut their campgrounds. Check Queensland Parks and Traffic and Travel Information before you drive.", "Winter, from May to October, is the best time: dry, warm days and cool nights."], ["Wet: December to April", "Roads and parks close", "Best time: May to October"]),
    section("Crocodiles and stingers", ["Saltwater crocodiles live in estuaries, rivers and some creeks and waterholes. Do not swim or camp close to the water's edge where signs warn of them, and never clean fish or leave food at the water.", "From about November to May, marine stingers make the sea unsafe without a stinger suit; swim only in netted areas."], ["Obey crocodile signs", "Camp back from the water", "Stinger season: November to May"]),
    { ...section("Find camps near Cairns in AussieCamps", ["AussieCamps maps 517 Queensland park campgrounds, 1,688 roadside rest areas and 324 public dump points, each with the facilities and fees the agency publishes. You can filter by cost, save camps to a trip and see the driving distance between stops.", "Place details are saved on the phone for use without signal, while the map, routing and weather need a connection. AussieCamps runs on iPhone."], ["Filter by cost", "Rest areas and dump points", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Queensland Parks: camping and accommodation", url: "https://parks.qld.gov.au/camping" },
    { label: "Queensland Government: crocodile safety", url: "https://www.qld.gov.au/environment/plants-animals/animals/crocodiles" },
    { label: "Tropical North Queensland: camping", url: "https://www.tropicalnorthqueensland.org.au/" },
    { label: "Queensland Traffic and Travel Information", url: "https://qldtraffic.qld.gov.au/" },
  ],
});
