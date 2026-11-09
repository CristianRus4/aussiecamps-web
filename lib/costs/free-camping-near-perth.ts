import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free near Perth?", "Only in a few places. Western Australia treats camping outside a licensed camping ground as something that needs approval, so free options are signed rest areas for up to 24 hours and some shire camps further out. Camping in Perth, on its beaches or in its parks is banned."],
  ["Is free camping legal in Western Australia?", "Only where it is approved. Signed rest stops allow overnight stops for up to 24 hours, some shires run free or low-cost camps, and a landowner can let you stay on private land. Anywhere else risks a fine."],
  ["Where can I camp cheaply near Perth?", "Park campgrounds in the Perth Hills, the Darling Range and along the coast cost $10 to $20 per adult a night, and caravan parks in the coastal towns are the easy alternative."],
  ["Can I sleep in my campervan in Perth?", "Not on the street, in car parks or on beaches in most councils. Use a caravan park or holiday park as your base."],
] as const;

export default article({
  slug: "free-camping-near-perth", publishAt: "2026-11-09",
  title: "Free Camping Near Perth: Rest Stops, Shire Camps and Cheap Park Sites",
  description: "Where to camp near Perth: the few free options within a day's drive, how cheap park camps work, and why camping in Perth itself is banned.",
  category: "Camping guides", region: "Western Australia",
  places: ["Perth Hills", "Lane Poole Reserve", "Yanchep", "Margaret River", "Wheatbelt"],
  imageAlt: "A rocky coast with a grassy headland and low heath under a pale evening sky, north of Sugarloaf Rock in Leeuwin-Naturaliste National Park",
  intro: "Free camping near Perth is limited. Western Australia expects camping to happen in licensed camping grounds or with approval, so the free options are signed rest stops that allow up to 24 hours, a few shire camps in the Wheatbelt and along the coast, and private land with the owner's permission. The good news is that park campgrounds in the hills and on the coast cost only $10 to $20 per adult a night, which keeps a trip from Perth cheap.",
  related: ["camping-rules-western-australia", "perth-to-margaret-river-drive", "south-west-wa-camping-loop", "can-i-stay-overnight-at-a-rest-area-in-australia", "can-i-sleep-in-a-campervan-in-the-city-in-australia"],
  sections: [
    section("Why WA is strict", ["Western Australia's rules treat camping outside a licensed caravan park or camping ground as needing approval, whether the land is state, shire or private. That rules out the easy forest camping of the eastern states, and the Perth metro councils all sign against camping in parks, on beaches and in car parks.", "What is left is still enough for a weekend: signed rest stops, approved shire camps, private land with permission and park campgrounds at a low fee."], ["Camping needs approval", "No camping in Perth parks", "Rest stops: up to 24 hours"], {
      caption: "Where you can stay near Perth, how far it is, and the main limit.",
      head: ["Where", "Drive from the CBD", "Cost", "Main limit"],
      rows: [
        ["Park campgrounds in the hills and coast", "45 minutes to 3 hours", "$10 to $20 per adult", "Book ahead in spring and holidays"],
        ["Rest stops signed for overnight", "Along the highways", "Free", "Up to 24 hours; only where signed"],
        ["Shire camps", "2 to 5 hours", "Free or low cost", "Each sets its own rules"],
        ["Caravan parks in coastal towns", "1 to 3 hours", "Paid", "Easiest in school holidays"],
      ],
    }),
    section("Park camps in the hills and on the coast", ["The Perth Hills and the Darling Range have campgrounds under the jarrah and marri, Lane Poole Reserve near Dwellingup is a favourite for a weekend, and the coast north of the city has camps at Yanchep and further up. Most take bookings through the state parks system and cost $10 to $20 per adult a night.", "Spring is wildflower season and the busiest time, so book early. Summer is hot and fire-prone, with total fire bans common."], ["$10 to $20 per adult", "Book spring early", "Summer fire bans"]),
    section("Rest stops and shire camps", ["Rest stops signed for overnight stops on the Brand, Great Northern and South Western highways allow up to 24 hours. Without the sign, treat the stop as a break, not a bed.", "Some Wheatbelt and coastal shires run free or low-cost camps to bring travellers into town, often for self-contained vehicles. The shire's website or the visitor centre has the current rule."], ["Only where signed", "Many need self-contained", "Check the shire page"]),
    section("Private land and the landowner rule", ["A landowner can let you stay on their property, and WA's rules let a visitor stay up to five nights with permission. Ask first, leave gates as you found them and pay in goods or a fee if offered."], ["Ask the owner", "Up to 5 nights", "Leave gates as found"]),
    section("Weather and fire", ["Perth summers are hot and dry, with fire bans on bad days and heat that makes a tent miserable. Spring and autumn are the best camping seasons, with wildflowers from August to November.", "Check the DFES fire danger rating each morning in summer."], ["Spring and autumn are best", "Summer total fire bans", "Check the DFES rating"]),
    { ...section("Find camps near Perth in AussieCamps", ["AussieCamps maps 260 Western Australian park campgrounds, 1,661 roadside rest areas and 238 public dump points, each with the facilities and fees the agency publishes. You can filter by cost, save camps to a trip and see the driving distance between stops.", "Place details are saved on the phone for use without signal, which matters on WA's empty stretches, while the map, routing and weather need a connection. AussieCamps runs on iPhone."], ["Filter by cost", "Rest areas and dump points", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Parks and Wildlife Service WA: camping", url: "https://exploreparks.dbca.wa.gov.au/camping" },
    { label: "Main Roads Western Australia: rest areas", url: "https://www.mainroads.wa.gov.au/" },
    { label: "DFES: fire danger ratings and total fire bans", url: "https://www.dfes.wa.gov.au/" },
    { label: "Tourism Western Australia: camping", url: "https://www.westernaustralia.com/" },
  ],
});
