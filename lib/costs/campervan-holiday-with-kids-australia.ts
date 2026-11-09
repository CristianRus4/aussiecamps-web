import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Is a campervan holiday good with kids in Australia?", "Yes, if you plan short driving days, book holiday parks with playgrounds and pools, and choose a van with proper child seat anchor points. Most families do best with 2 to 3 hours of driving a day."],
  ["Do child car seats work in a campervan?", "Child seats must be fitted to approved anchor points and seatbelts, and not every seat in a campervan is suitable. Check with the hire company before you book and ask what seats and anchors are fitted."],
  ["How many kids fit in a campervan?", "It depends on the van. Two-berth vans suit one child or a baby, four-berth vans suit two kids, and larger motorhomes sleep five or six. Check the number of seatbelts as well as beds."],
  ["Where should families stay on a campervan trip?", "Holiday parks with playgrounds, pools and powered sites are the easy choice, with a few park camps on the way for a bush night. Free camps suit older kids."],
] as const;

export default article({
  slug: "campervan-holiday-with-kids-australia", publishAt: "2026-11-09",
  title: "Campervan Holiday With Kids in Australia: Planning, Safety and Where to Stay",
  description: "Planning a campervan trip in Australia with kids: choosing a van and child seats, short driving days, holiday parks with playgrounds, heat and safety, and what to pack.",
  category: "Camping guides", region: "Australia",
  places: ["Holiday parks", "Beaches", "National parks", "Showgrounds", "Playgrounds"],
  imageAlt: "Campervan near Noosa Heads, Queensland",
  intro: "A campervan holiday with kids is one of the easiest ways to see Australia, as long as the plan matches the family. Keep driving days to 2 or 3 hours, book holiday parks with playgrounds and pools, check the van has proper child seat anchor points, and pick a season that is not too hot. A mix of powered holiday park nights and the odd bush camp keeps everyone happy.",
  related: ["first-campervan-trip-australia", "campervan-hire-cost-australia-2026", "powered-vs-unpowered-sites-australia", "holiday-park-prices-australia-2026", "school-holidays-australia-2027"],
  sections: [
    section("Choosing the van", ["Pick a van by the number of seatbelts and the sleeping layout, not just the number of beds. Child seats must be fitted to the correct anchor points, so ask the hire company which seats are suitable and whether it supplies seats.", "A van with a toilet and shower makes a big difference with young kids, and an awning gives a shaded play area at camp."], ["Check seatbelts and anchors", "Ask about child seats", "Toilet and shower help"]),
    section("Short driving days", ["Distances in Australia are long, and kids get tired of the back seat. Aim for 2 to 3 hours of driving a day, with a stop at a playground, beach or park in the middle, and fewer one-night stops.", "Our road trip guides give distances and stage times for the main routes."], ["2 to 3 hours a day", "Stop at playgrounds", "Fewer one-night stays"], {
      caption: "What suits families on a campervan trip.",
      head: ["Choice", "Suits", "Watch for"],
      rows: [
        ["Holiday parks with pools and playgrounds", "Younger kids, power and showers", "Fills in school holidays"],
        ["National park camps", "Older kids, nature, quiet", "Basic; no power; no dogs"],
        ["Beachside camps", "Swimming and play", "Check surf and crocodile signs"],
        ["Free camps", "Older kids and short stays", "Basic; bring water"],
      ],
    }),
    section("Where to stay", ["Holiday parks are the easy choice: playgrounds, pools, camp kitchens and powered sites. Book early for school holidays. Park camps give a bush night, and free camps suit older kids, with basic facilities and no showers.", "Our school holidays guide lists the dates by state so you can avoid the peaks."], ["Holiday parks for the base", "Parks for a bush night", "Check school holiday dates"]),
    section("Heat, sun and water safety", ["Summer is hot, so travel in spring or autumn where you can, or head south or to the mountains. Use sunscreen, hats and shade, carry plenty of water and never leave kids or pets in a parked van.", "Swim between the flags where there are patrolled beaches, and obey crocodile and stinger signs in the north."], ["Spring and autumn are easier", "Never leave kids in the van", "Swim between the flags"]),
    section("Packing and routines", ["Pack games, books and a tablet for the longer drives, a night light, sleeping bags and a few of the comforts of home. Keep bedtimes close to normal, and build in a rest day every few days.", "Our packing list guide covers the basics."], ["Games and books", "Keep bedtimes", "Rest days"]),
    { ...section("Plan the trip in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save camps to a trip and see the driving distance between stops, which helps you keep driving days short.", "Place details are saved on the phone for use without signal, while the map, routing and weather need a connection. AussieCamps runs on iPhone."], ["See each leg's distance", "Filter by cost", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Tourism Australia: family holidays", url: "https://www.australia.com/" },
    { label: "Transport for NSW: child car seats", url: "https://www.transport.nsw.gov.au/roadsafety/topics/child-car-seats" },
    { label: "Surf Life Saving Australia: beach safety", url: "https://www.beachsafe.org.au/" },
    { label: "Queensland Government: caravan and camping", url: "https://www.qld.gov.au/recreation/activities/camping" },
  ],
});
