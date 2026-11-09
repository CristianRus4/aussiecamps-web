import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Where can I buy camping gear in Australia?", "At Kmart for cheap basics, Anaconda and BCF for a wider range of tents, sleeping bags, stoves and coolers, and outdoor specialists for hiking gear. Supermarkets and Bunnings cover the small items."],
  ["Is Kmart camping gear any good?", "For a short trip or a first time out, yes. It is cheap and does the job, but it is not built for years of heavy use or harsh weather, so upgrade the pieces that matter, like the tent and the sleeping bag, as you go."],
  ["Is it cheaper to buy or hire camping gear?", "For a trip of a few weeks, buying cheap basics is usually cheaper than hiring, and you can resell or donate afterwards. A campervan with a kitchen and bedding hire avoids most of it."],
  ["What should I buy first for camping in Australia?", "A good sleeping bag or bedding, a mat, a torch or headlamp, a stove and fuel, water containers and a first aid kit. Then add the tent or shelter that suits the season."],
] as const;

export default article({
  slug: "buying-camping-gear-australia", publishAt: "2026-11-09",
  title: "Buying Camping Gear in Australia: Kmart, Anaconda and BCF Compared",
  description: "Where to buy camping gear in Australia: what Kmart, Anaconda and BCF each do well, what to buy first, when to spend more and how to avoid buying things you will not use.",
  category: "Camping guides", region: "Australia",
  places: ["Kmart", "Anaconda", "BCF", "Bunnings", "Supermarkets"],
  imageAlt: "Tent, sleeping bag and backpack at an Australian campground",
  intro: "Camping gear in Australia is easy to buy and easy to overspend on. Kmart covers cheap basics, Anaconda and BCF have the wider ranges of tents, stoves, coolers and 4WD gear, and Bunnings and the supermarket fill in the small items. Buy cheap for a short trip, spend more on the sleeping bag, mat and tent, and skip anything you cannot name a use for.",
  related: ["camping-packing-list-australia", "first-campervan-trip-australia", "camping-water-planning", "working-holiday-road-trip-budget-australia-2026", "campervan-vs-caravan-australia"],
  sections: [
    section("What each store is good for", ["Kmart is the cheap starting point: basic tents, chairs, mats, lanterns and cookware at low prices. It is fine for a first trip or a short holiday. Anaconda and BCF are the camping specialists, with a wider range of tents, sleeping bags, stoves, fridges, awnings and recovery gear, and staff who can help.", "Bunnings has gas bottles, tarps, rope, buckets and tools, and the supermarket has the small things, from matches to wet wipes."], ["Kmart: cheap basics", "Anaconda and BCF: wider range", "Bunnings: the small things"], {
      caption: "Where to buy camping gear in Australia and what each does best.",
      head: ["Shop", "Good for", "Watch for"],
      rows: [
        ["Kmart", "Cheap tents, chairs, mats, lanterns", "Not built for heavy use"],
        ["Anaconda", "Wide range, hiking and camping", "Prices vary; wait for sales"],
        ["BCF", "Camping, 4WD and fishing gear", "Prices vary; wait for sales"],
        ["Bunnings", "Gas, tarps, rope, tools", "Not a camping specialist"],
      ],
    }),
    section("What to buy first", ["Start with sleep and safety: a sleeping bag suited to the season, a mat or stretcher, a headlamp, water containers, a stove and fuel, and a first aid kit. Then add the tent or shelter, a cooler or fridge and cookware.", "If you are hiring or buying a campervan, much of this is in the van already, so buy less."], ["Sleep first", "Then cook and carry water", "A van needs less"]),
    section("When to spend more", ["Spend on what you use every day: the sleeping bag, the mat and the tent. Cheap versions leak, tear or leave you cold, and the saving is not worth a bad night. Cheap is fine for chairs, tables and cookware.", "Sales at Anaconda and BCF around long weekends and the end of the financial year make the bigger items cheaper."], ["Spend on sleep and shelter", "Cheap chairs are fine", "Wait for sales"]),
    section("Buy, hire or borrow", ["For a short holiday you can hire a tent or buy at Kmart and sell it at the end. For a long trip, buy, and sell or donate when you leave. Our campervan buying and selling guides cover the larger decisions.", "Check the weather: Australian nights in the high country and desert are cold, and a cheap summer sleeping bag will not cut it."], ["Short trip: buy cheap or hire", "Long trip: buy and resell", "Match the bag to the season"]),
    { ...section("Plan your trip in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, with each place's facilities, fees and rules as the agency publishes them, so you know whether you need a stove, water or a toilet. You can filter by cost, save camps to a trip and see the driving distance between stops.", "Place details are saved on the phone for use without signal, while the map, routing and weather need a connection. AussieCamps runs on iPhone."], ["Check facilities first", "Filter by cost", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "ACCC: consumer guarantees", url: "https://www.accc.gov.au/consumers/buying-products-and-services/consumer-guarantees" },
    { label: "Kmart Australia: camping", url: "https://www.kmart.com.au/" },
    { label: "Anaconda: camping", url: "https://www.anacondastores.com/" },
    { label: "BCF: camping", url: "https://www.bcf.com.au/" },
  ],
});
