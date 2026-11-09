import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you sleep in a campervan in Byron Bay?", "Not in public places. Byron Shire Council bans camping in vehicles on streets, in car parks and in reserves, and rangers patrol, particularly in summer. Stay at a holiday park or caravan park instead."],
  ["Can you sleep in a campervan in Noosa?", "No, not on public land. Noosa Council signs against overnight stays in streets, car parks and at the beaches, and enforces it. Use a caravan park or holiday park in the area."],
  ["Is it legal to sleep in a campervan on the Gold Coast?", "Not on public land. The City of Gold Coast bans camping and sleeping in vehicles in parks, on beaches and on streets, with fines for breaking the rule. Use a caravan park or holiday park."],
  ["Where can I park a campervan overnight near the Gold Coast?", "In a caravan park or holiday park, or at a booked campground in a hinterland national park. Check each council's page for current rules before you stay anywhere else."],
] as const;

export default article({
  slug: "byron-noosa-gold-coast-campervan-rules", publishAt: "2026-11-09",
  title: "Campervan Rules in Byron Bay, Noosa and the Gold Coast: Where You Can Stay",
  description: "Where you can and cannot sleep in a campervan in Byron Bay, Noosa and the Gold Coast: the council bans, the fines, and the holiday parks and hinterland camps that work instead.",
  category: "Rules & safety", region: "Queensland",
  places: ["Byron Bay", "Noosa", "Gold Coast", "Tweed", "Sunshine Coast"],
  imageAlt: "Aerial view of Cape Byron and its lighthouse, with surf along the coast and the green headland rising from the sea",
  intro: "Byron Bay, Noosa and the Gold Coast are the most popular stretch of the east coast and the strictest for campervans. All three councils ban sleeping in vehicles in streets, car parks, reserves and on beaches, and rangers patrol, particularly in summer and school holidays. The reliable answer is a holiday park or caravan park, with booked camps in the hinterland for a quieter night.",
  related: ["can-i-sleep-in-a-campervan-in-the-city-in-australia", "brisbane-to-byron-bay-drive", "sunshine-coast-hinterland-camping", "camping-rules-queensland", "camping-rules-new-south-wales"],
  sections: [
    section("Why these three are strict", ["The three places are some of the most visited in the country, with limited parking, residents who complain about vans on their streets and councils that have chosen to act. Each has its own local law banning overnight camping in vehicles in public places.", "Fines are issued, and in peak season the patrols start early and finish late. Treat the rule as enforced, not theoretical."], ["Bans in streets and car parks", "Patrols in summer", "Fines are enforced"], {
      caption: "Campervan rules in each area and what to do instead.",
      head: ["Area", "Sleeping in a van in public", "What to do instead"],
      rows: [
        ["Byron Bay (Byron Shire)", "Banned in streets, car parks and reserves", "Holiday parks in and around Byron"],
        ["Noosa", "Banned in public places", "Caravan parks in Noosa and the hinterland"],
        ["Gold Coast", "Banned in parks, on beaches and on streets", "Holiday parks along the coast"],
        ["Tweed and the hinterlands", "Check each council", "Booked national park camps"],
      ],
    }),
    section("Byron Bay", ["Byron Shire Council bans camping in vehicles in public places, and the town's holiday parks are close to the beach and the centre. They fill early, so book well ahead for school holidays, Easter and summer.", "Out in the Byron hinterland and across the Tweed, booked national park camps and small private camps offer a quieter option."], ["Holiday parks near the beach", "Book early", "Hinterland camps are quieter"]),
    section("Noosa", ["Noosa Council signs against overnight stays in streets and car parks, and enforces it. Caravan parks in Noosa, Tewantin and Noosaville are the straightforward choice, and the Noosa hinterland and the Great Sandy region have permit camps.", "Our first campervan trip guide covers a Brisbane to Noosa run."], ["Caravan parks in Noosa and Tewantin", "Permit camps nearby", "Enforcement is active"]),
    section("The Gold Coast", ["The City of Gold Coast bans camping and sleeping in vehicles in parks, on beaches and on streets. Holiday parks line the coast from Coolangatta to the Spit, and the Gold Coast hinterland, including Lamington and Springbrook, has booked camps.", "If a sign or a ranger says move on, do so; arguing leads to a fine."], ["Holiday parks along the coast", "Hinterland camps are booked", "Move on if asked"]),
    section("Tips for a campervan trip on this coast", ["Book holiday parks weeks ahead in summer and school holidays, check each council's page for the current rule, and use the hinterland camps for the nights you want to be quiet.", "If you are travelling Brisbane to Byron Bay, our drive guide covers the route and where to stop."], ["Book ahead", "Check the council page", "Use hinterland camps"]),
    { ...section("Find camps on this coast in AussieCamps", ["AussieCamps maps 517 Queensland park campgrounds and 372 NSW national park campgrounds, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save camps to a trip and see the driving distance between stops.", "Place details are saved on the phone for use without signal, while the map, routing and weather need a connection. AussieCamps runs on iPhone."], ["Filter by cost", "Plan a trip with stops", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Byron Shire Council: camping and caravans", url: "https://www.byron.nsw.gov.au/" },
    { label: "Noosa Council: camping", url: "https://www.noosa.qld.gov.au/" },
    { label: "City of Gold Coast: camping and caravans", url: "https://www.goldcoast.qld.gov.au/" },
    { label: "Queensland Parks: camping", url: "https://parks.qld.gov.au/camping" },
  ],
});
