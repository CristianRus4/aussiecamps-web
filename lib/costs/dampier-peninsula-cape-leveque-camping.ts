import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free on the Dampier Peninsula?", "No. The land is Aboriginal-owned and the camps are run by the communities, so camping is booked and paid. Camping outside a camp or on a beach is not allowed."],
  ["Do I need a permit to drive the Dampier Peninsula?", "Not for the main road, but some communities and sites ask for a visitor permit or a fee. Check each camp's page and buy any permit before you arrive."],
  ["Do I need a 4WD?", "The main road to Cape Leveque is much better than it was, but the side tracks to many camps are deep sand, and a high clearance 4WD is the safest choice. A 2WD campervan can reach some camps in the dry season."],
  ["When is the best time to go?", "May to October, when it is dry. In the wet season, roads flood and camps close, and in the build-up it is extremely hot and humid."],
] as const;

export default article({
  slug: "dampier-peninsula-cape-leveque-camping", publishAt: "2026-11-10",
  title: "Camping on the Dampier Peninsula and at Cape Leveque",
  description: "How to camp on the Dampier Peninsula north of Broome: community camps at Cape Leveque, Middle Lagoon and Gumbanan, permits, road conditions, the dry season and respectful visiting.",
  category: "Camping guides", region: "Western Australia",
  places: ["Broome", "Cape Leveque", "Middle Lagoon", "Beagle Bay", "Lombadina"],
  imageAlt: "SUBJECT_PLACEHOLDER",
  intro: "The Dampier Peninsula, north of Broome, has some of the most beautiful camping in the Kimberley, with red cliffs, white sand and turquoise water. It is also Aboriginal land, and the camps are run by the communities that own it. There is no free camping, but the camps are cheap by resort standards and the money goes back to the community. Go in the dry season, book ahead, and travel with respect.",
  related: ["perth-to-broome-road-trip", "gibb-river-road-camping", "can-i-camp-on-aboriginal-land-without-a-permit", "can-i-take-alcohol-into-restricted-areas-on-an-outback-road-trip", "wet-season-camping-top-end-northern-wa"],
  sections: [
    section("What the peninsula is like", ["The Dampier Peninsula is a long finger of land north of Broome, about a two hour drive to Cape Leveque. The communities of Beagle Bay, Lombadina and Ardyaloon (One Arm Point) have homes, shops and camps, and welcome visitors who follow the rules.", "The scenery is the point: pindan red earth, white beaches and clear water, with some of the biggest tides in Australia."], ["Aboriginal-owned land", "Red earth and white sand", "Big tides"], {
      caption: "Camps on the Dampier Peninsula.",
      head: ["Where", "Cost", "Best for", "Watch for"],
      rows: [
        ["Kooljaman at Cape Leveque", "Paid", "Cliffs, sunsets, a restaurant", "Book months ahead"],
        ["Middle Lagoon", "Paid", "Beach camping and snorkelling", "Sandy access track"],
        ["Pender Bay and Gumbanan", "Paid", "Quiet beach camps", "4WD recommended"],
        ["Beagle Bay and Lombadina", "Permit and fee", "Church, culture and tours", "Alcohol restrictions"],
      ],
    }),
    section("Permits, fees and respect", ["Most camps charge a nightly fee, and some communities ask visitors to buy a permit to enter or to take a tour. Check each camp's own page before you go, and carry cash in case the card machine is down.", "Alcohol restrictions apply in some communities. Do not take photos of people without asking, and stay on the roads and the camp."], ["Check each camp's page", "Carry cash", "Alcohol restrictions"]),
    section("Roads and vehicles", ["The main road to Cape Leveque is sealed for much of the way, and the dirt sections are graded. The side tracks to Middle Lagoon and Pender Bay are sand, and a high clearance 4WD is the safe choice.", "Rental conditions often forbid unsealed roads, so check yours before you book."], ["Main road mostly sealed", "Side tracks in sand", "Check rental conditions"]),
    section("Fuel, water and supplies", ["Fuel is available at Broome and at some communities, but not at every camp. Fill up in Broome, carry spare water and buy supplies before you leave.", "Mobile signal is patchy outside the communities, so tell someone your plan."], ["Fill up in Broome", "Carry water", "Buy supplies in Broome"]),
    section("When to go", ["May to October is the dry season, with warm days and cool nights, and it is also when the camps are busiest. In the wet season roads flood, camps shut and the heat is extreme. Our wet season camping guide explains the closures.", "Whales pass offshore from July to October, and Cape Leveque is a good lookout."], ["May to October is best", "Wet season closes camps", "Whales pass offshore"]),
    { ...section("Plan the Kimberley in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops.", "Community camps are not all in the app, so check each camp's own page. AussieCamps runs on iPhone."], ["Filter by cost", "Save places to a trip", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Australia's North West: Dampier Peninsula", url: "https://www.australiasnorthwest.com/" },
    { label: "Kooljaman at Cape Leveque", url: "https://www.kooljaman.com.au/" },
    { label: "Visit Broome: Dampier Peninsula", url: "https://www.visitbroome.com.au/" },
    { label: "Main Roads WA: road conditions", url: "https://www.mainroads.wa.gov.au/" },
  ],
});
