import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What is a campervan relocation in Australia?", "Hire companies need vehicles moved between cities, so they offer them at a very low price, often $1 a day, for a fixed number of days. You get the campervan and often some fuel or ferry help, and they get the vehicle where they need it."],
  ["How much does a campervan relocation cost?", "Many relocations cost about $1 a day, plus fuel, insurance and sometimes a bond. Terms vary by company and route, so read the offer carefully."],
  ["How long do I get for a relocation?", "Usually between 3 and 14 days, depending on the distance. Some companies add extra days or a fuel allowance on long routes such as Melbourne to Perth or Brisbane to Darwin."],
  ["Who can do a relocation?", "Drivers need a full licence and must meet the age and licence rules of the hire company, which are usually the same as for a normal hire. International visitors need a licence in English or an accompanying translation, or an international driving permit."],
] as const;

export default article({
  slug: "campervan-relocations-australia",
  title: "Campervan Relocations in Australia 2026: How They Work, What They Cost and Where to Find Them",
  description: "Campervan relocations in Australia often cost about $1 a day for a fixed number of days. How they work, typical routes, what to check, and how to plan the camping on the way.",
  category: "Costs & budget", region: "Australia",
  places: ["Sydney", "Melbourne", "Brisbane", "Perth", "Darwin", "Cairns"],
  imageAlt: "A white campervan parked at a quiet roadside rest area in the Australian bush",
  intro: "A campervan relocation is a cheap way to cross Australia: hire companies need their vans moved between cities, so they offer them for about $1 a day for a fixed number of days. You drive the route they pick, often with some fuel help, and pay for fuel, insurance and camping on the way. The catch is that the dates and routes are set by the company.",
  related: ["campervan-hire-cost-australia-2026", "campervan-road-trip-budget-australia", "road-trip-fuel-planning-australia", "can-i-stay-overnight-at-a-rest-area-in-australia", "first-campervan-trip-australia", "camping-fees-australia-2026"],
  sections: [
    section("How relocations work", ["Hire companies run into the same problem: vans end up in the wrong city, for example after one-way hires from Melbourne to Sydney. To move them back they offer relocations, usually at about $1 a day, for a fixed number of days. The listing shows the pick-up and drop-off, the dates and what is included.", "Offers appear and disappear quickly, and the popular routes, such as Sydney to Melbourne, fill fast. If you have flexible dates you will have more choice."], ["About $1 a day", "Fixed dates and routes", "Offers go quickly"]),
    section("What you pay and what to check", ["Even at $1 a day you still pay for fuel, insurance and camping, and some companies charge a bond, an insurance excess or a cleaning fee. Fuel allowance or ferry cover is included on some routes, which helps on a long drive. The campervan hire cost guide covers the usual extras and the budget guide covers the full cost of a trip.", "Read the days allowed, the kilometre limit, the bond, the insurance and the pick-up and drop-off times before you book. A tight deadline on a long route leaves little time to stop."], ["Fuel and insurance on top", "Check the bond", "Check the days allowed"]),
    section("Typical routes and timing", ["Common relocation routes run between the east coast cities, such as Sydney, Melbourne and Brisbane, and from Perth and Darwin across the north and west. A route like Melbourne to Perth or Brisbane to Darwin is a long drive with few days, so plan the stops before you commit.", "The drive guides for each route show where to stop, and the road trip fuel guide covers the fuel gaps. If the dates are tight, book the camps ahead on popular legs."], ["East coast routes are most common", "Long routes have short deadlines", "Plan stops before you book"]),
    section("Camping on a relocation", ["Relocations are usually in a campervan, so you can sleep in it and stay in caravan parks, roadhouse camps and free rest areas where allowed. The camping rules guides explain where overnight stays are legal in each state, and the overnight rest area guide covers the signs.", "Because the days are fixed, it helps to plan which night is where before you start, and book popular camps early."], ["Sleep in the van", "Check overnight rules", "Plan each night ahead"]),
    { ...section("Plan the relocation in AussieCamps", ["Build the route as a trip in AussieCamps: add each overnight stop in order and it shows the distance and drive time of each leg, with a forecast for the day you expect to arrive. AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish.", "Open the trip while you still have a connection, because map tiles, routing and weather need one. The iPhone app is free to download, with in-app purchases."], ["Add each stop in order", "Forecast for each arrival day", "Open the trip before you leave"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Campervan", url: "https://en.wikipedia.org/wiki/Campervan" },
    { label: "Wikipedia: Road trip", url: "https://en.wikipedia.org/wiki/Road_trip" },
  ],
});
