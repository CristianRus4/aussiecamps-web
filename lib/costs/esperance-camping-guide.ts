import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Where can you camp near Esperance?", "At Cape Le Grand National Park, which has campgrounds at Lucky Bay and Le Grand Beach, at Cape Arid and Stokes National Parks, and at caravan parks in town. Park campgrounds are booked and paid, and there is no free camping on the beaches."],
  ["How far is Esperance from Perth?", "About 720 kilometres, or 8 to 9 hours of driving, by Albany Highway and the south coast or by the Coolgardie-Esperance Highway. Most people split it over two days."],
  ["Is Lucky Bay worth camping at?", "Yes. It is famous for white sand and kangaroos on the beach. The campground fills early in school holidays and the long weekends, so book ahead."],
  ["When is the best time to camp at Esperance?", "Spring and autumn are the best, with mild days and wildflowers in spring. Summer is warm and busy, and winter is cool and wet."],
] as const;

export default article({
  slug: "esperance-camping-guide", publishAt: "2026-11-09",
  title: "Esperance Camping Guide: Cape Le Grand, Lucky Bay and the South Coast",
  description: "Camping at Esperance: the Cape Le Grand and Cape Arid campgrounds, Lucky Bay's kangaroos, how far it is from Perth, the best season and how to book.",
  category: "Camping guides", region: "Western Australia",
  places: ["Cape Le Grand National Park", "Lucky Bay", "Cape Arid", "Great Ocean Drive", "Fitzgerald River"],
  imageAlt: "Greens Pool near Denmark, Western Australia",
  intro: "Esperance is the end of a long road and worth it. The white beaches of Cape Le Grand and Cape Arid have some of the best coastal camping in Western Australia, and Lucky Bay's campground lets you wake to kangaroos on the sand. Park camps are booked and paid, there is no free camping on the beaches, and the town has caravan parks for the rest. Plan two days from Perth and book before school holidays.",
  related: ["perth-to-albany-drive", "south-west-wa-camping-loop", "camping-rules-western-australia", "perth-to-exmouth-drive", "nullarbor-crossing-camping-guide"],
  sections: [
    section("Getting there", ["Esperance is about 720 kilometres from Perth, 8 to 9 hours of driving. Most people take the inland route by Coolgardie or go via Albany and the south coast, and split it over two days. The road is sealed, with long gaps between fuel and rest stops.", "Fill up in Ravensthorpe or Norseman and watch for kangaroos at dawn and dusk."], ["About 720 km from Perth", "Split it over two days", "Watch for kangaroos at dawn and dusk"]),
    section("Cape Le Grand National Park", ["Cape Le Grand, 50 kilometres east of Esperance, is the main draw. The Lucky Bay campground sits behind the beach, where kangaroos graze on the sand, and Le Grand Beach has a smaller campground. The park has granite peaks to climb, including Frenchman Peak, and clear blue bays.", "Camping is booked and paid through the state parks system, and park entry applies. The campgrounds fill in school holidays and at Easter, so book early."], ["Lucky Bay: kangaroos on the beach", "Booked and paid", "Book ahead for holidays"], {
      caption: "Where to stay at Esperance and the main limit at each.",
      head: ["Where", "Cost", "Booking", "Main limit"],
      rows: [
        ["Cape Le Grand (Lucky Bay, Le Grand Beach)", "Park camp fee plus entry", "Required", "Fills in holidays"],
        ["Cape Arid National Park", "Park camp fee plus entry", "Required", "Remote; 4WD tracks"],
        ["Esperance caravan parks", "Paid", "Recommended", "Easy base for the town"],
        ["Rest stops on the highways", "Free", "None", "24 hours where signed"],
      ],
    }),
    section("Cape Arid and the east", ["Cape Arid National Park, further east, is quieter and wilder, with campgrounds at Thomas River and Seal Creek. Some tracks need a 4WD and the park is remote, so carry water, fuel and a recovery kit.", "Check road conditions with the park before you go, particularly after rain."], ["Quieter and wilder", "Some tracks need 4WD", "Carry water and fuel"]),
    section("In and around town", ["Esperance has caravan parks close to the beaches, and the Great Ocean Drive loop passes the pink lake, the wind farm and the coast. Pink Lake is no longer reliably pink, so do not make it the reason you come.", "The town has a good supermarket and the usual services, so stock up before the national parks."], ["Great Ocean Drive loop", "Stock up in town", "Pink Lake is not always pink"]),
    section("Season and weather", ["Spring, September to November, brings wildflowers and mild days. Autumn is calm and warm. Summer is warm and busy, with fire risk, and winter is cool, wet and quiet.", "The south coast is windy and the sea is cold and rough, so swim at the sheltered bays."], ["Spring: wildflowers", "Summer is busy", "Swim at sheltered bays"]),
    { ...section("Plan the drive in AussieCamps", ["AussieCamps maps 260 Western Australian park campgrounds and 1,661 roadside rest areas, with each place's facilities and fees as the agency publishes them. You can build a trip with ordered stops and see the driving distance for each leg, which shows the long gaps before you leave.", "Place details are saved on the phone for use without signal, which matters on WA's empty stretches. The map, routing and weather need a connection, and AussieCamps runs on iPhone."], ["See each leg's distance", "Filter by cost", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Parks and Wildlife Service WA: Cape Le Grand National Park", url: "https://exploreparks.dbca.wa.gov.au/park/cape-le-grand-national-park" },
    { label: "Parks and Wildlife Service WA: Cape Arid National Park", url: "https://exploreparks.dbca.wa.gov.au/park/cape-arid-national-park" },
    { label: "Experience Esperance", url: "https://www.visitesperance.com/" },
    { label: "Main Roads Western Australia: road conditions", url: "https://www.mainroads.wa.gov.au/" },
  ],
});
