import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What is the best campervan for backpackers in Australia?", "For one or two people on a budget, a small two-berth van or a converted station wagon or minivan is the usual choice: it is cheap to hire, easy to drive and cheap to fuel. Larger vans suit groups or longer trips, and the best pick depends on how many people, how long and how much you want to do on unsealed roads."],
  ["Do I need a self-contained campervan?", "Not in Australia, where most camps and holiday parks have toilets and showers, but a van with a fridge, a stove and a sink makes free camping and long trips far easier. Check whether the van has a toilet if you plan to camp away from facilities."],
  ["Should I hire or buy as a backpacker?", "Hire is simpler for a few weeks, because the vehicle is checked and insured. Buying can cost less over several months, but you take on repairs, registration and the work of selling it. The hire and buying guides compare the costs."],
  ["Can backpackers under 25 hire a campervan?", "Many companies hire to drivers aged 21 or older, and some add a young driver fee or a higher excess for under 25s. Check the age rules and the extra costs before you book."],
] as const;

export default article({
  slug: "best-campervan-for-backpackers-australia",
  title: "Best Campervan for Backpackers in Australia: Types, Costs and What to Check",
  description: "How backpackers choose a campervan in Australia: small vans and wagons, what to check on the rental, whether to hire or buy, and the extras that matter on a budget trip.",
  category: "Costs & budget", region: "Australia",
  places: ["East coast", "Working holiday", "Budget travel"],
  imageAlt: "A campervan parked near Noosa Heads on the Queensland coast",
  intro: "For a backpacker on a budget, the best campervan is usually the smallest one that lets you sleep and cook comfortably. Small two-berth vans, converted wagons and minivans are cheap to hire, easy to drive and cheap to fuel, and they work for most east coast routes. Below are the types to consider, the checks to make and the choice between hiring and buying.",
  related: ["campervan-hire-cost-australia-2026", "buying-a-campervan-australia-working-holiday", "first-campervan-trip-australia", "campervan-vs-caravan-australia", "working-holiday-road-trip-budget-australia-2026", "driving-in-australia-overseas-licence"],
  sections: [
    section("Small vans and wagons", ["A two-berth van, a converted wagon or a minivan is the usual backpacker choice. These vehicles have a bed, often a small kitchen, and are cheaper to hire and run than a full motorhome. They fit in ordinary car parks, handle city streets and need less fuel on long drives.", "If you are three or four people, or travelling for months, a bigger van or a motorhome gives more room, but costs more to hire and to fuel. Hire companies publish vehicle types, daily rates and what each one sleeps."], ["Two-berth van or converted wagon", "Cheaper to hire and fuel", "Larger vans for groups"]),
    section("What to check before you book", ["Check what the daily rate includes, because insurance, kilometres, bedding, a kitchen kit and extras vary. Look at the excess, the one-way fee and the bond, and read the rules for unsealed roads and for drivers under 25. Make sure the van has what you need to camp for a few days, such as a fridge, a stove, a water container and a way to charge your phone.", "The hire cost guide covers typical prices and the extras, and the first campervan trip guide covers the first days. If you are on a working holiday, see the working holiday budget guide."], ["Check what is included", "Read the age and road rules", "Check the cooking and fridge kit"]),
    section("Hire or buy", ["For a few weeks, hire is simple, because the vehicle is checked, insured and supported by a roadside service. For several months, buying can cost less overall, but you take on repairs, registration, insurance and the work of selling it at the end. The buying a campervan guide covers the checks and the paperwork.", "A good plan for a short trip is to hire a small van on the east coast and spend your nights at holiday parks and free camps with toilets and showers."], ["Hire for a few weeks", "Buy for several months", "Budget for repairs if you buy"]),
    section("Camps that suit backpackers", ["Holiday parks and caravan parks have showers, kitchens and laundries, and often a powered site, which is useful on a small van. Free camps and rest areas are cheaper, but check the local rules and whether toilets are on site. Mixing the two, with a free camp most nights and a holiday park every few, keeps costs down and gives you showers and laundry.", "The caravan park and holiday park guide compares them, and the free camping legality guide covers where you can stay for free."], ["Mix free camps and holiday parks", "Check toilets and rules", "Use parks for laundry and showers"]),
    { ...section("Plan the trip in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish. Build a trip as ordered stops and it shows the distance, drive time and forecast for each leg, which helps a backpacker plan fuel and nights on a budget.", "The iPhone app is free to download, with in-app purchases."], ["Plan each leg's distance and time", "Add each stop in order", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Campervan", url: "https://en.wikipedia.org/wiki/Campervan" },
    { label: "Wikipedia: Working holiday visa (Australia)", url: "https://en.wikipedia.org/wiki/Working_holiday_visa_(Australia)" },
  ],
});
