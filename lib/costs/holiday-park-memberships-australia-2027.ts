import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Is a BIG4 or G'day Rewards membership worth it?", "Both list 10% off a stay, capped at $50 a booking, so they pay for themselves when the savings beat the fee. For a few stays a year with the same chain it usually works out, and for a single weekend it usually does not."],
  ["Does G'day Rewards cover Discovery Parks?", "Yes. Discovery Parks is part of the G'day Parks network, and G'day Rewards applies across the network's parks. You can add the membership to your cart when you book."],
  ["What does a BIG4 membership include?", "BIG4 Holiday Perks+ gives 10% off a stay, up to $50 a booking, plus member-only offers and discounts from partner brands. Terms apply, so read the conditions when you join."],
  ["How far ahead should I book a holiday park?", "For school holidays, Christmas, Easter and long weekends, months ahead for coastal parks, and a few weeks ahead for quieter times. Midweek stays outside the holidays can often be booked a few days before."],
] as const;

export default article({
  slug: "holiday-park-memberships-australia-2027", publishAt: "2026-11-17",
  title: "Holiday Parks in Australia 2027: BIG4, Discovery and NRMA Memberships, Costs and How to Book",
  description: "How BIG4, G'day Rewards (Discovery Parks) and NRMA Parks and Resorts memberships work, what they save, when one pays for itself and how to book a holiday park for 2027.",
  category: "Costs & budget", region: "Australia",
  places: ["BIG4", "Discovery Parks", "G'day Parks", "NRMA Parks and Resorts", "Holiday parks"],
  imageAlt: "Hahndorf Caravan Park, South Australia",
  intro: "The big holiday park groups all run a membership, and the common deal is about 10% off a stay, capped at $50 a booking. BIG4 has Holiday Perks+, Discovery Parks sits inside the G'day Rewards scheme, and NRMA Parks and Resorts has its own rewards. A membership pays for itself when you book enough nights with one group, and it rarely does for a single trip. Below: what each gives, when to join and how to book.",
  related: ["holiday-park-prices-australia-2026", "caravan-park-vs-holiday-park", "best-family-holiday-parks-australia", "powered-vs-unpowered-sites-australia", "school-holidays-australia-2027"],
  sections: [
    section("The main holiday park groups", ["Three groups cover most of the holiday park market. BIG4 is a network of more than 300 parks, mostly independently owned, with the heaviest concentration in New South Wales, Victoria and Queensland. G'day Parks is a network of more than 350 parks that includes Discovery Parks. NRMA Parks and Resorts runs parks from Queensland to Tasmania, many of them beachside.", "Each park sets its own prices, and none of the chains shows a nightly rate until you search dates, so prices below are rough."], ["Chains are networks of parks", "Each park sets its own price", "Rates show after you search dates"], {
      caption: "The main holiday park memberships, in general terms.",
      head: ["Group", "Membership", "What it gives"],
      rows: [
        ["BIG4", "Holiday Perks+", "About 10% off a stay, capped at $50 a booking, member offers and partner discounts"],
        ["Discovery Parks and G'day Parks", "G'day Rewards", "About 10% off a stay, capped at $50 a booking, across the G'day network"],
        ["NRMA Parks and Resorts", "My NRMA Rewards", "Booking discounts and member benefits at its parks"],
      ],
    }),
    section("What each membership gives", ["BIG4 Holiday Perks+ gives about 10% off a stay, capped at $50 a booking, plus member-only deals and early access to offers. It also lists partner brands that give members a discount, including some vehicle hire and caravan businesses.", "G'day Rewards works across the G'day Parks network and includes Discovery Parks. You can add the membership at checkout, and the discount is about 10% a stay, again with a $50 cap per booking.", "NRMA Parks and Resorts has a rewards scheme with booking discounts and benefits across its parks. The amounts vary, so check the current terms before you book. Top Parks is another group of independent parks with its own member offers, worth a look if you travel a lot in the same region."], ["The cap is $50 a booking", "Check partner discounts", "Read current terms before joining"]),
    section("When a membership pays for itself", ["The sum is simple. Ten per cent of a $200 stay is $20, and a $500 stay hits the $50 cap. If the fee is $50 or less, it can pay for itself in one or two longer stays. For a one-night stopover, it usually does not.", "It also helps to be loyal: a membership only saves money if you actually book that chain, so the best use is a long trip where you plan several nights with one group. Check whether the discount applies to peak dates and to cabins as well as sites."], ["Add up the nights you will book", "Worth it on long trips", "Check peak date exclusions"], {
      caption: "A rough guide to when a membership pays back.",
      head: ["Trip", "Likely result"],
      rows: [
        ["One night on the way", "Probably not worth it"],
        ["A week in one park", "Often pays back, especially with a cabin"],
        ["Several weeks across one chain", "Usually worth joining"],
        ["School holiday peak", "Check that the discount is allowed"],
      ],
    }),
    section("How to book", ["Book on the chain's own site or app, or call the park. Booking direct is often as cheap as any other way, and the park can tell you about site sizes, power and pets. Choose the site type first, then the dates, because powered and unpowered sites are priced differently.", "Try the same stay a week either side, and look at midweek nights, which are usually cheaper than weekends. If you tow a van or drive a big rig, ask the park about site size and access before you pay."], ["Book direct when you can", "Check site size for a big rig", "Compare midweek and weekend rates"]),
    section("Peak times and cancellations", ["The busiest times are the Christmas and New Year holidays, Easter, the school holiday weeks in each state and long weekends. Popular coastal parks sell out well ahead, and prices usually step up in peak. School holiday dates are set state by state, so check the dates for the states you will pass through.", "Cancellation rules vary by park and by how close you are to the date. Read them at checkout, especially for peak stays."], ["Book peak dates early", "Check state school holiday dates", "Read the cancellation terms"]),
    { ...section("Plan holiday park nights in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them, plus photos, weather and Street View. Use the Cost filter to find free and cheaper nights to mix with holiday park stays.", "Save places to collections and build a trip with Add stop to see the driving distance and time for each leg, with dates, notes and weather for each stop. Search, filters and place details work with no signal because the whole directory is inside the app. There is no account and no ads, and it runs on iPhone. Check the park's own terms before you book."], ["Filter by cost", "Build a trip with Add stop", "Place details work with no signal"]), cta: true },
  ],
  sources: [
    { label: "BIG4 Holiday Parks: Holiday Perks+", url: "https://www.big4.com.au/loyalty-club/holiday-perks" },
    { label: "Discovery Parks", url: "https://www.discoveryholidayparks.com.au/" },
    { label: "NRMA Parks and Resorts", url: "https://www.nrmaparksandresorts.com.au/" },
    { label: "Australian Competition and Consumer Commission: consumer rights", url: "https://www.accc.gov.au/consumers" },
  ],
});
