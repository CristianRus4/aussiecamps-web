import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["When is wildflower season in Western Australia?", "The main season runs from about August to October, with the peak usually in September. It starts in the north, around Kalbarri and the Mid West, in July and August, and moves south through Perth and the south coast into October and November."],
  ["Where are the best places to see wildflowers in Western Australia?", "Popular areas include the Mid West around Mullewa, Geraldton and Kalbarri, the Wheatbelt, Kings Park in Perth, the Stirling Range, and Fitzgerald River National Park on the south coast. The bloom varies each year, so check recent reports."],
  ["Can I pick wildflowers?", "No. Wildflowers in Western Australia are protected, and picking them without a licence is illegal, so look and photograph, and stay on tracks and paths."],
  ["Is it busy during wildflower season?", "Yes. It is spring, school holidays fall in the season and popular towns and campgrounds fill, so book holiday parks and national park camps ahead, especially in September and on weekends."],
] as const;

export default article({
  slug: "wa-wildflower-season-camping-australia",
  title: "WA Wildflower Season: Where and When to Camp for the Bloom",
  description: "Western Australia's wildflower season runs from about July to November. Where the bloom starts and moves, the best regions to drive, and where to camp and book.",
  category: "Trip planning", region: "Western Australia",
  places: ["Mid West", "Kalbarri", "Wheatbelt", "Stirling Range", "Fitzgerald River"],
  imageAlt: "Greens Pool near Denmark on the south coast of Western Australia",
  intro: "Every spring, Western Australia's south-west and Mid West put on one of the world's great wildflower shows, with thousands of species that grow nowhere else. The bloom starts in the north around July and moves south through September and into November, so the best trip follows it. Below are the regions to see, when to go and where to camp.",
  related: ["south-west-wa-camping-loop", "perth-to-albany-drive", "perth-to-exmouth-drive", "camping-rules-western-australia", "best-time-camping-australia", "perth-to-margaret-river-drive"],
  sections: [
    section("When the bloom happens", ["The main season runs from about August to October, with the peak usually in September. It starts in the north, around Kalbarri and the Mid West, in July and August, and moves south through the Wheatbelt and Perth in September, reaching the south coast and the Stirling Range into October and November.", "The bloom varies with the rain each year, so check recent reports from local visitor centres before you set the route. Spring weather can be cool and wet, and nights are cold in the south."], ["August to October is the main season", "North first, then south", "Check recent bloom reports"]),
    section("Where to go", ["The Mid West, around Mullewa, Geraldton and Kalbarri, is known for everlastings and wreath flowers. The Wheatbelt has roadside displays and the south coast has the Stirling Range and Fitzgerald River National Park, which is famous for its wide range of plant species. Kings Park in Perth has a wildflower festival in spring.", "The south-west camping loop and Perth to Albany drive guides cover the southern part of the route, and the Perth to Exmouth guide covers the Coral Coast north of Geraldton."], ["Mid West and Kalbarri", "Stirling Range and Fitzgerald River", "Kings Park in Perth"]),
    section("Where to camp", ["Holiday parks and national park campgrounds are common in the Mid West, the Stirling Range and the south coast, and many country towns have a caravan park or a showground. Free camps and rest areas are listed along the main highways, and the Western Australia camping rules guide covers the rules.", "It is peak season, with school holidays in the middle of it, so book popular campgrounds ahead, especially on weekends."], ["Holiday parks and national park camps", "Book ahead in September", "Check the state rules"]),
    section("Looking after the flowers", ["Wildflowers in Western Australia are protected, and picking them without a licence is illegal. Stay on tracks and paths, do not trample the bush and clean your shoes and tyres if you can, because plant disease can spread on mud.", "Weather and wildlife matter in spring too. Roads in the Wheatbelt are used by trucks, and kangaroos are active at dawn and dusk."], ["Do not pick the flowers", "Stay on tracks", "Watch for wildlife at dawn and dusk"]),
    { ...section("Plan the route in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish. Build a trip as ordered stops and it shows the distance, drive time and forecast for each leg, so you can follow the bloom north to south and see where the cold nights are.", "The iPhone app is free to download, with in-app purchases."], ["Follow the bloom north to south", "Add each stop in order", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Fitzgerald River National Park", url: "https://en.wikipedia.org/wiki/Fitzgerald_River_National_Park" },
    { label: "Wikipedia: Wildflowers of Western Australia", url: "https://en.wikipedia.org/wiki/Flora_of_Western_Australia" },
    { label: "Parks and Wildlife Service Western Australia", url: "https://www.dbca.wa.gov.au/" },
  ],
});
