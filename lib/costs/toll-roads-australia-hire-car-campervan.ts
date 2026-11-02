import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["How do I pay tolls in Australia without an e-tag?", "Buy a pass online, either before you drive or within the window after the trip: 3 days in Queensland, 72 hours in New South Wales, and 5 days for CityLink in Melbourne (3 days for EastLink). Linkt sells passes for all three cities. Miss the window and the vehicle's owner gets a toll notice with fees added."],
  ["Do I pay tolls in a hire car or campervan?", "Yes. The hire company receives the toll and charges your card, usually with a fee per toll: JUCY lists $3.45, Enterprise $3 and Redspot $3.36. Read the toll section of your rental agreement before you drive, and ask whether a tag is fitted."],
  ["Which Australian cities have toll roads?", "Sydney, Melbourne and Brisbane. You can drive around the country on the highways between the capitals without paying a toll, but the fastest routes into and through those three cities often use one."],
  ["What happens if I forget to pay a toll in Sydney?", "Service NSW says you can buy a pass or open an account up to 72 hours after the trip. After that, the registered owner may get an unpaid toll reminder by email or text, with 48 hours to pay, and then a Toll Payment Demand that can include a video matching fee. In a hire car, the company passes it on to you with its own fee."],
] as const;

export default article({
  slug: "toll-roads-australia-hire-car-campervan", publishAt: "2026-12-25",
  title: "Toll Roads in Australia 2026: How Visitors Pay in a Hire Car or Campervan",
  description: "Sydney, Melbourne and Brisbane have toll roads. How to pay without an e-tag, the days you have after a trip, Linkt passes and what hire companies charge per toll.",
  category: "Costs & budget", region: "Australia",
  places: ["Sydney", "Melbourne", "Brisbane", "Linkt", "Hire cars"],
  imageAlt: "The CityLink freeway in Melbourne looking north from the Toorak Road bridge at dusk, with traffic and street lights",
  intro: "Only Sydney, Melbourne and Brisbane have toll roads, and none of them has a toll booth: a camera or e-tag reader records each trip. Without an e-tag, buy a pass online before you drive or soon after, within 3 days in Queensland, 72 hours in New South Wales or 5 days for Melbourne's CityLink. In a hire car or campervan, the company pays the toll and charges your card, usually with a fee of about $3 per toll. We read each toll operator's and government page on 3 November 2026.",
  related: ["australia-road-trip-fuel-cost-2026", "campervan-hire-cost-australia-2026", "first-two-weeks-working-holiday-australia", "sydney-to-melbourne-drive"],
  sections: [
    section("Where the toll roads are", ["Sydney has the most, including the Sydney Harbour Bridge and Tunnel and the motorways of the WestConnex network. Melbourne has CityLink and EastLink. Brisbane has the Gateway and Logan Motorways, the Clem7 and Legacy Way tunnels, the Go Between Bridge and AirportlinkM7.", "Adelaide, Perth, Hobart, Darwin and Canberra have no toll roads, and neither do the highways between the capitals. A sat-nav or map app can avoid tolls if you set it to, at the cost of a slower drive through the city."], ["Tolls only in Sydney, Melbourne, Brisbane", "No toll booths: cameras and tags", "Set your map to avoid tolls if you prefer"]),
    section("How long you have to pay", ["Each state gives you a few days after the trip to buy a pass or open an account. After that, the vehicle's registered owner gets a notice with fees added, and in a hire car that owner is the rental company, which passes the cost on to you.", "In Melbourne the window depends on the road: Linkt says a pass covers CityLink trips made up to 5 days before, but EastLink trips only up to 3 days before, and only on its Visitor's Pass. Weekend and 24-hour CityLink passes do not cover EastLink."], ["Queensland: 3 days", "New South Wales: 72 hours", "Melbourne: 5 days CityLink, 3 days EastLink"], {
      caption: "How long you have to pay for a toll trip without an e-tag. From each state's payment provider or government, read 3 November 2026.",
      head: ["City", "Roads", "Pay within", "Where to pay"],
      rows: [
        ["Sydney", "Motorways and tunnels", "72 hours after the trip", "Linkt for most roads; E-Toll for the Harbour Bridge and Tunnel"],
        ["Melbourne", "CityLink", "5 days after the first trip", "Linkt"],
        ["Melbourne", "EastLink", "3 days, on a Visitor's Pass", "Linkt or EastLink"],
        ["Brisbane", "All Queensland toll roads", "3 days after the trip", "Linkt Brisbane"],
      ],
    }),
    section("Passes for visitors", ["In Sydney, Linkt's Sydney Pass costs $1.50 to start online, or $3.30 by phone, and charges the tolls to your card, plus a video matching fee of $0.75 per trip because there is no tag. Service NSW also lists the E-Toll eMU Casual Pass for visitors and anyone using NSW toll roads for up to 30 days.", "In Melbourne, a Linkt pass covers CityLink, and the Visitor's Pass also covers EastLink. In Brisbane, Linkt sells passes for the Queensland toll roads. Register the pass to the number plate of the vehicle you are driving, and update it if you swap cars."], ["Sydney Pass: $1.50 to start online", "No tag: $0.75 per trip", "Register the right number plate"]),
    section("Tolls in a hire car or campervan", ["Most hire companies receive the tolls on their vehicles and charge them to the card on your booking, with their own fee for each toll. JUCY lists a service fee of $3.45 per toll, Enterprise $3 per toll and Redspot $3.36 per toll transaction, and other companies charge per toll or per day of the hire.", "On a week in Sydney, those fees can cost more than the tolls. Ask at pick-up whether the vehicle carries a tag and how tolls are charged, and if a company allows it, buy your own pass for the vehicle's number plate before you drive on a toll road."], ["Expect about $3 a toll in fees", "Ask whether a tag is fitted", "A pass can avoid the hire fee"]),
    section("If you miss the window", ["In New South Wales, the registered owner gets an unpaid toll reminder, with 48 hours to pay, then a Toll Payment Demand, which can include a video matching fee. In Victoria, Fines Victoria says you must have a valid account or pass to use a toll road, and Linkt says an unpaid trip brings a toll notice in the mail within 4 weeks.", "In Queensland, the registered owner gets an unpaid toll notice from the road's payment provider if the toll is not paid within 3 days, and fees rise with each notice that goes unpaid. Pay on the day you drive and you avoid every one of these."], ["NSW: reminder, then a demand", "Victoria: a pass is the law", "Pay on the day you drive"]),
    { ...section("Plan city legs in AussieCamps", ["AussieCamps shows campgrounds, holiday parks and rest areas around Sydney, Melbourne and Brisbane, so you can stop outside the city and drive in by public transport, or plan the day you cross town. A trip adds up the driving distance between stops.", "Place details are saved on the phone for use without signal. The map, routing and weather need a connection, and AussieCamps runs on iPhone."], ["Stay outside the city", "See each leg's distance", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Service NSW: travelling on toll roads and paying a toll notice", url: "https://www.service.nsw.gov.au/guide/pay-toll-notice" },
    { label: "Linkt: Sydney Pass fees", url: "https://linkt.com.au/legal/fees/sydney-pass-fees" },
    { label: "Linkt: ways to pay for your toll travel", url: "https://linkt.com.au/help/toll-payments/payment-options" },
    { label: "Fines Victoria: a valid toll account or pass stops you getting a fine", url: "https://online.fines.vic.gov.au/News/Having-a-valid-toll-account-or-pass-stops-you-from-getting-a-fine" },
    { label: "Queensland Government: paying tolls", url: "https://www.qld.gov.au/transport/safety/tolls" },
    { label: "JUCY: toll roads in Australia", url: "https://helphub.jucy.com/en/articles/8400799-toll-roads-in-australia" },
    { label: "Enterprise Rent-A-Car Australia: toll charges", url: "https://enterpriserentacar.com.au/en/help/faq/toll-charges.html" },
    { label: "Redspot: driving on toll roads", url: "https://www.redspot.com.au/etoll" },
  ],
});
