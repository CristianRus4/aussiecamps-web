import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["How much money do I need for two weeks in Australia?", "For two weeks of food, beds and local costs, about $1,120 to $1,820 a person if you cook most meals and camp cheaply, and about $2,240 to $3,640 on a mixed budget with caravan parks and some meals out. Flights and the vehicle are extra."],
  ["What costs the most on an Australian road trip?", "For most trips the order is the vehicle, fuel, food, campsites and activities. Fuel is the biggest running cost over Australian distances, and a slower route saves more than a cheaper campsite."],
  ["How much fuel will two weeks of driving use?", "Multiply the kilometres by litres per 100 km, divide by 100 and multiply by the price per litre. A 2,000 km trip at 12 litres per 100 km uses 240 litres, about $559 at the November 2026 city petrol average."],
  ["How much should I keep as a reserve?", "Hold enough for a tyre, a windscreen or a night in a cabin when the weather turns, and keep it separate from the daily budget so you never have to decide whether an unexpected cost is affordable."],
] as const;

export default article({
  slug: "two-week-australia-trip-cost",
  title: "How Much Money Do You Need for Two Weeks in Australia? A Camping Road Trip Budget (2026)",
  description: "A worked budget for two weeks in Australia by campervan or car: daily costs, hire add-ons, fuel, campsites and a reserve, with totals for a frugal and a mixed trip.",
  category: "Costs & budget", region: "Australia",
  places: ["Campgrounds", "Holiday parks", "Fuel stops", "Supermarkets"],
  imageAlt: "The long straight Stuart Highway in the Northern Territory",
  intro: "Two weeks is the trip most visitors plan, and the honest answer is a range. A frugal camping trip can run on about $1,120 to $1,820 a person for food, beds and local costs, and a mixed trip with caravan parks and meals out on about $2,240 to $3,640, before flights and the vehicle. The vehicle, its fuel and the add-ons then come on top. This guide builds the total in steps, using the daily budgets from our Australia travel cost guide and published hire and fuel prices from October and November 2026.",
  related: ["australia-travel-cost-2026", "campervan-road-trip-budget-australia", "campervan-hire-cost-australia-2026", "australia-road-trip-fuel-cost-2026", "camping-fees-australia-2026", "holiday-park-prices-australia-2026"],
  sections: [
    section("The short answer", ["The two daily budgets in the travel cost guide, multiplied by 14 days, give the base for food, beds and local costs. The table adds the vehicle and fuel that a road trip needs."], undefined, { caption: "Two weeks in Australia per person for food, beds and local costs, before flights and the vehicle, based on the 2026 daily budgets.", head: ["Style", "Per day", "Fourteen days", "What it assumes"], rows: [
      ["Frugal", "$80 to $130", "$1,120 to $1,820", "Cooking almost every meal, free camps and cheap national park sites, moderate distances"],
      ["Mixed", "$160 to $260", "$2,240 to $3,640", "A caravan park every third night, some meals out and a few paid activities"],
    ] }),
    section("Add the vehicle", ["A hired campervan is the largest single item. Prices vary by company and season, and daily rates are quoted at booking rather than published, so get quotes for your dates. Add-ons are published: Apollo and Maui's High Road cover is $67 a day, so a 14-day hire costs $938 for cover, plus a one-way fee such as $200 for Sydney to Cairns, an extra driver at $4 a day and an RV Essentials Kit at $155. Those add-ons come to $1,349 before the daily rate, fuel and campsites.", "A car and tent trip costs less to start with, because you skip the add-ons. Our campervan vs car and tent guide compares the two."], ["Get quotes for your dates", "Add cover, one-way and extra driver fees", "The bond is held on your card"]),
    section("Add the fuel", ["Fuel is the line that grows with distance. Multiply kilometres by litres per 100 km, divide by 100, then by the price per litre. The Australian Institute of Petroleum put the five-largest-city average at $2.33 a litre for petrol and $2.77 for diesel in the week ending 1 November 2026, and remote roadhouses charge more.", "A fortnight covering 2,000 km at 12 litres per 100 km uses 240 litres, or about $559 on petrol and $665 on diesel at those averages. Add 15 per cent for detours, and budget for the higher price on remote legs."], ["Kilometres times litres per 100 km", "Add 15% for detours", "Remote fuel costs more"]),
    section("Campsites and park fees", ["Campsites are usually a smaller line than people expect. Queensland's national park camping costs $7.75 a person or $31 a family a night from 1 July 2026, Western Australia's costs $10, $15 or $20 an adult by facilities, and a holiday park powered site runs from about $30 to $60 a night in the published 2026 tariffs. Park entry and booking fees are often separate.", "Mix cheap or free nights with a serviced night every few days for showers, laundry and water. It usually earns its price."], ["Check entry and booking fees", "Mix cheap and serviced nights", "Cabins cost more in peak season"]),
    section("The costs that only appear once you arrive", ["Excess reduction, one-way fees, a local SIM, park passes and the bond held on your card are rarely included in a daily budget, and together they add several hundred dollars to a fortnight. Interstate quarantine can also cost you produce you bought before a border.", "Contactless cards are accepted almost everywhere, but carry some cash for honesty boxes and remote roadhouses, and use a card with no foreign transaction fees."], ["Excess and one-way fees", "Park passes", "Cash for remote stops"]),
    section("A worked example", ["Take two people sharing a campervan for 14 days on a mixed budget. Food, beds and local costs run $2,240 to $3,640 each; add the hire add-ons of $1,349 for the van and about $559 to $665 for 2,000 km of fuel, plus the daily hire rate on your quote. Flights are separate.", "Shared costs fall per person when two travel together, which is why a van with two people is often cheaper than two solo travellers. Hold a reserve of several hundred dollars on top, separate from the daily budget."], ["Split the van and fuel between two", "Flights are extra", "Keep a separate reserve"]),
    { ...section("Track the trip in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 745 national parks, with each place's fees and rules as the agency publishes them, so you can compare the cost of a night before you drive. Save the stops to a trip to see the driving distance between them and work out the fuel.", "It runs on iPhone and is free to download, with in-app purchases."], ["Compare campground fees", "See distance between stops", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Australian Institute of Petroleum: weekly petrol prices report", url: "https://aip.com.au/pricing/weekly-petrol-prices-report-week-ending-1-november-2026/" },
    { label: "Australian Institute of Petroleum: weekly diesel prices report", url: "https://aip.com.au/pricing/weekly-diesel-prices-report-week-ending-1-november-2026/" },
    { label: "Apollo: liability options", url: "https://www.apollocamper.com/travel-info/liability-options" },
    { label: "Queensland Parks: camping bookings", url: "https://parks.qld.gov.au/camping/bookings" },
    { label: "Explore Parks WA: camping fees", url: "https://exploreparks.dbca.wa.gov.au/camping-fees" },
    { label: "Tourism Australia: Australia on a budget", url: "https://www.australia.com/en-sg/facts-and-planning/about-australia/australia-on-budget.html" },
  ],
});
