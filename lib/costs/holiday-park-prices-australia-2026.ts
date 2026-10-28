import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["How much is a powered site at a holiday park in Australia?", "Published council tariffs for 2026 show $40 to $60 a night for two people: Greater Shepparton's Victoria Park Lake is $40 off-peak and $55 in peak, Boondooma Dam in Queensland $50 and $60, and Ross in Tasmania $30 and $40. Big holiday parks are usually dearer, and the chains show prices only after you enter dates."],
  ["How much is a cabin at a holiday park?", "Council-run cabins in the tariffs read run from $85 a night for a budget cabin at Ross in Tasmania to $135 off-peak and $145 in peak for a lakeside cabin at Boondooma Dam, for up to two people. Chain parks price cabins by the date you search."],
  ["Is it cheaper to camp in the off-season?", "Yes. Each tariff read charges less off-peak, and the peak tier is $4 to $20 a night higher for a powered site. Peak periods cover school holidays, long weekends and summer, so a midwinter or term-time night costs least."],
  ["Do holiday park memberships save money?", "On the chains read, a membership takes 10% off, capped at $50 a booking: BIG4 Holiday Perks+ and G'day Rewards both list it. It pays back after a few stays, so compare the fee against the nights you expect to book."],
] as const;

export default article({
  slug: "holiday-park-prices-australia-2026", publishAt: "2026-12-20",
  title: "Holiday Park Prices in Australia 2026: Powered, Unpowered and Cabin Costs",
  description: "Published 2026 tariffs show powered sites from $30 to $60 a night, unpowered from $20 to $40 and cabins from $85, with peak seasons higher. Prices and how to save.",
  category: "Costs & budget", region: "Australia",
  places: ["Holiday parks", "Council parks", "Powered sites", "Cabins"],
  imageAlt: "Grassed camping area under eucalypts at the Flaxmill Caravan Park in Boyup Brook, Western Australia",
  intro: "In published 2026 council tariffs, a powered site costs $30 to $60 a night for two people, an unpowered site $20 to $40 and a cabin from $85, and the peak season adds roughly $4 to $20 a night to a site. The big chains do not publish a price until you enter your dates, so the council tariffs are the clearest price list there is. The pages below were read on 28 October 2026, and each park sets its own price.",
  related: ["powered-vs-unpowered-sites-australia", "camping-fees-australia-2026", "caravan-park-vs-holiday-park", "accommodation-costs-australia-2026"],
  sections: [
    section("What published tariffs show", ["Four parks that publish a 2026 tariff give a spread of prices across states. The prices are per night for one to two people unless noted, and each park has a peak tier for school holidays and summer."], ["Peak adds $4 to $20 for a site", "Cabins cost $85 and up", "Chains show prices after you search"], {
      caption: "Published holiday park prices in 2026, per night for one or two people, read 28 October 2026.",
      head: ["Park and state", "Unpowered site", "Powered site", "Cabin"],
      rows: [
        ["Ross Caravan Park, Tasmania (peak 1 September to 30 April)", "$30 peak, $20 off-peak", "$40 peak, $30 off-peak", "$99 to $145 peak, $85 to $130 off-peak"],
        ["Victoria Park Lake, Shepparton, Victoria (from 1 January 2026)", "$40 peak, $36 off-peak", "$55 peak, $40 off-peak; waterfront $57 and $43", "Not listed"],
        ["Boondooma Dam, Queensland (2026-27)", "$22 an adult peak, $18 off-peak", "$60 peak, $50 off-peak at The Terraces", "$145 peak, $135 off-peak"],
        ["Exhibition Park, Canberra", "$35 until 1 November 2026, then $40", "$40 until 1 November 2026, then $45", "Not listed"],
      ],
    }),
    section("Powered, unpowered and cabin prices", ["A powered site costs $5 to $20 a night more than an unpowered one in these tariffs, and the biggest gap is at Victoria Park Lake in peak season, where powered is $55 against $40 unpowered. Boondooma Dam prices an unpowered site per adult, so two adults pay $36 off-peak, close to the powered rate.", "A budget cabin at Ross in Tasmania is $85 off-peak and $99 in peak, and the bigger cabins run $120 to $145. At Boondooma Dam a self-contained lakeside cabin is $135 or $145 for two, with $18 or $22 for each extra adult."], ["Powered adds $5 to $20", "Check per-person pricing", "Extra guests cost extra"]),
    section("Peak and off-peak", ["Peak is when the park fills: school holidays, long weekends and summer. Ross runs peak from 1 September to 30 April and off-peak from 1 May to 31 August, so the cheap months are the Tasmanian winter. Victoria Park Lake and Boondooma Dam publish a peak and an off-peak tier too.", "The chains charge by date instead of by a published tier, so the same site can differ by the week. Search the dates you want, then try the same park a week either side."], ["Winter is cheapest in Tasmania", "Chains price by date", "Try the dates either side"]),
    section("The big chains", ["BIG4 lists 312 parks and G'day Parks lists more than 350 across Australia, and Discovery Parks is part of the G'day network. None of the chain home pages read shows a nightly price. They show it after you enter dates, which is why this page leans on council tariffs.", "NRMA Parks and Resorts runs a rewards scheme with booking discounts across its parks, from Queensland to Tasmania, and its home page does not list a nightly price either."], ["BIG4: 312 parks", "G'day: 350+ parks", "No prices before you search"]),
    section("How to pay less", ["Choose an unpowered site when a battery or solar covers you, travel in the off-peak tier, and ask about weekly rates, which Ross lists as negotiable. Compare the same dates across a council park and a chain park in the same town.", "BIG4 Holiday Perks+ and G'day Rewards each list 10% off a stay, capped at $50 a booking. For a trip with several nights at the same chain, that can pay for the membership, and for one weekend it usually will not."], ["Unpowered when you can", "Ask about weekly rates", "10% membership caps at $50"]),
    { ...section("Plan the budget in AussieCamps", ["AussieCamps carries 1,838 campgrounds from park agencies, and you can filter by cost to see the free and cheaper ones before a holiday park night. Holiday parks, cabins and farm stays listed by BookEasy can be booked in the app, with the price shown when you check dates.", "A trip adds up the nights and the driving distance between stops, and every place's details are saved on the phone for use without signal. The map, routing and weather need a connection, and it runs on iPhone only."], ["Filter by cost", "Book parks in the app", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Northern Midlands Council: caravan parks and camping grounds fees (Ross)", url: "https://northernmidlands.tas.gov.au/source-assets/files/Fees-and-Charges/Caravan-Parks-and-Camping-Grounds_2026-07-21-052427_hvdg.pdf" },
    { label: "Greater Shepparton City Council: schedule of fees and charges 2026-27", url: "https://greatershepparton.vic.gov.au/assets/files/documents/finance/Appendix_A_-_Schedule_of_Fees_and_Charges_2026-2027-WEB.pdf" },
    { label: "South Burnett Regional Council: Boondooma Dam fee schedule 2026-27", url: "https://www.southburnett.qld.gov.au/files/assets/public/v/4/places-and-spaces/documents/boondooma-dam/parks-fees-and-charges-2026-27-boondooma.pdf" },
    { label: "Exhibition Park in Canberra: camping rates and reservations", url: "https://exhibitionparkincanberra.com.au/camping/rates-reservations/" },
    { label: "BIG4 Holiday Parks", url: "https://www.big4.com.au/" },
    { label: "Discovery Parks and G'day Rewards", url: "https://www.discoveryholidayparks.com.au/" },
    { label: "NRMA Parks and Resorts", url: "https://www.nrmaparksandresorts.com.au/" },
  ],
});
