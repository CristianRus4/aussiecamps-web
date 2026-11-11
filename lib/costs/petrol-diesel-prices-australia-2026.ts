import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["How much is petrol in Australia right now?", "On 28 October 2026, regular unleaded averaged $2.34 a litre across Sydney, Melbourne, Brisbane, Adelaide and Perth, from $2.28 in Adelaide to $2.46 in Canberra. Diesel averaged $2.77 a litre in the same five cities. Country towns usually pay more."],
  ["Why is diesel more expensive than petrol in Australia in 2026?", "Diesel rose further after the Middle East conflict that began in late February 2026. On 21 October, the five-city average was 63 cents a litre above its 20 February level for petrol and 100 cents above it for diesel, so diesel now costs about 40 cents a litre more than petrol at the pump."],
  ["Is fuel cheaper in the city or the outback?", "In the city. The Northern Territory Treasury's July 2026 brief put unleaded at 254.0 cents a litre in Alice Springs against 184.4 in Darwin. Remote roadhouses charge more again, so fill up in the larger towns and treat the price at a lone roadhouse as the cost of getting there."],
  ["Is there a cheapest day to buy petrol in Australia?", "Not reliably in 2026. The ACCC says the usual price cycles have mostly not occurred in Sydney, Melbourne, Brisbane and Adelaide since late February 2026. In Perth, FuelWatch fixes each station's price for the next day and publishes it from 2.30 pm, so you can see tomorrow's price before you fill up."],
] as const;

export default article({
  slug: "petrol-diesel-prices-australia-2026", publishAt: "2026-11-11",
  title: "Petrol and Diesel Prices in Australia 2026: Price per Litre by City",
  description: "Petrol averaged $2.34 a litre and diesel $2.77 in the five largest cities on 28 October 2026. Prices for every capital, the outback gap and what a tank costs.",
  category: "Costs & budget", region: "Australia",
  places: ["Sydney", "Melbourne", "Brisbane", "Perth", "Alice Springs"],
  imageAlt: "A BP service station at Semaphore in Adelaide, South Australia, with a white four-wheel drive at the pumps, photographed during the 2026 fuel crisis",
  intro: "On 28 October 2026, regular unleaded petrol averaged $2.34 a litre and diesel $2.77 a litre across Sydney, Melbourne, Brisbane, Adelaide and Perth, from the ACCC's weekly figures published by the Australian Government's Fuel Plan site. Canberra, Hobart and Darwin were dearer, at $2.43 to $2.46 for petrol, and country towns pay more again. Prices are well above where they were before the Middle East conflict began in February 2026, and diesel has risen the most.",
  related: ["australia-road-trip-fuel-cost-2026", "best-fuel-price-apps-australia", "road-trip-fuel-planning-australia", "working-holiday-road-trip-budget-australia-2026"],
  sections: [
    section("Prices by capital city", ["The table gives the average retail price per litre in each capital on 28 October 2026. Adelaide was the cheapest city for petrol and Perth for diesel. Canberra was the dearest for both.", "City averages are a guide, not a quote: the price at one station can sit well above or below its city's average, and an app or state price site shows the station you are driving past."], ["Adelaide: cheapest petrol", "Perth: cheapest diesel", "Canberra: dearest for both"], {
      caption: "Average retail fuel prices per litre on 28 October 2026, from the ACCC weekly report via the Australian Government's Fuel Plan site.",
      head: ["City", "Unleaded petrol", "Diesel"],
      rows: [
        ["Sydney", "$2.36", "$2.78"],
        ["Melbourne", "$2.36", "$2.79"],
        ["Brisbane", "$2.36", "$2.81"],
        ["Adelaide", "$2.28", "$2.76"],
        ["Perth", "$2.34", "$2.69"],
        ["Canberra", "$2.46", "$2.89"],
        ["Hobart", "$2.44", "$2.82"],
        ["Darwin", "$2.43", "$2.84"],
        ["Five largest cities", "$2.34", "$2.77"],
      ],
    }),
    section("Why fuel costs more in 2026", ["Prices jumped after the Middle East conflict began in late February 2026. The Australian Government halved fuel excise in April, cut the discount to 16 cents a litre from 1 July to 2 August, and restored the full rate from 3 August, which pushed pump prices up again.", "By late October prices had eased from their peak: on 28 October the five-city average was 23 cents a litre lower for petrol and 46 cents lower for diesel than on 31 March. They were still well above pre-conflict levels. On 21 October, petrol was 63 cents a litre and diesel 100 cents a litre higher than on 20 February."], ["Conflict from late February 2026", "Excise back in full from 3 August", "Diesel up a dollar on February"]),
    section("Country and outback prices", ["Fuel costs more the farther you are from a capital, because of freight and smaller sales. The Northern Territory Treasury's July 2026 brief put regular unleaded at 254.0 cents a litre in Alice Springs and 235.9 in Katherine, against 184.4 in Darwin: a gap of about 70 cents a litre between Darwin and Alice Springs.", "Roadhouses on long remote stretches often charge more than the nearest town. Do not skip one to save a few dollars if the next fuel is out of range: plan fills in the larger towns and buy what you need to reach the next one."], ["Alice Springs: 70 cents above Darwin in July", "Fill in the larger towns", "Never skip fuel to save money"]),
    section("When to fill up", ["The ACCC says petrol price cycles, in which prices climb sharply and then fall over days or weeks, have mostly not occurred in Sydney, Melbourne, Brisbane and Adelaide since late February 2026, so there is no reliable cheap day this year. The ACCC publishes buying tips for the five largest cities, but not for Canberra, Hobart or Darwin.", "Western Australia works differently. Under FuelWatch, each station sets its price for the next day and cannot change it for 24 hours, and FuelWatch publishes tomorrow's prices from 2.30 pm. In Perth and the WA towns it covers, check tonight and fill up wherever tomorrow is cheaper."], ["No reliable cheap day in 2026", "WA prices are fixed a day ahead", "Compare stations, not weekdays"]),
    section("What a tank costs", ["At the October averages, filling a 60-litre petrol tank from empty costs about $140, and an 80-litre diesel tank about $222. A campervan using 12 litres per 100 km on diesel costs about 33 cents a kilometre to fuel, so a 1,000 km week costs about $330.", "To cost a whole trip, multiply the distance by the vehicle's consumption and the price per litre, then add a margin for remote fills. The road trip fuel cost guide and the fuel cost calculator do that from your route."], ["60 L of petrol: about $140", "80 L of diesel: about $222", "Diesel van: about 33 cents a km"]),
    section("Fuel at the pump", ["Australian pumps label petrol as unleaded 91, premium 95 and premium 98, plus E10, a blend with 10% ethanol, and diesel. Use the fuel named on the filler cap or in the hire agreement; the wrong fuel can stop the engine and lead to an expensive repair.", "Most stations are self-serve: fill first, note the pump number, then pay inside. In remote areas some pumps take a card before they start, and small roadhouses keep shorter hours, so fill up before dark."], ["Check the filler cap", "Fill first, then pay inside", "Some remote pumps close at night"]),
    { ...section("Plan fuel stops in AussieCamps", ["AussieCamps adds up the driving distance between the stops in your trip, so you can see the long legs and plan where to fill before you leave. Save the towns where you will refuel alongside your campsites.", "Place details are saved on the phone for use without signal. The map, routing and weather need a connection, and AussieCamps runs on iPhone."], ["See each leg's distance", "Plan fills before remote legs", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Australian Government Fuel Plan: fuel statistics", url: "https://fuelplan.gov.au/fuel-statistics" },
    { label: "ACCC: petrol price cycles in the 5 largest cities", url: "https://www.accc.gov.au/consumers/petrol-and-fuel/petrol-price-cycles-in-the-5-largest-cities" },
    { label: "Department of the Prime Minister and Cabinet: fuel tax relief extended", url: "https://www.pmc.gov.au/news/fuel-tax-relief-extended" },
    { label: "Department of Infrastructure: fuel excise relief measures from 1 July 2026", url: "https://www.infrastructure.gov.au/sites/default/files/documents/fact-sheet-fuel-excise-relief-measures-from-1-july-2026.pdf" },
    { label: "Northern Territory Treasury: fuel prices, July 2026", url: "https://treasury.nt.gov.au/__data/assets/pdf_file/0004/1627204/fuel-prices-july-2026.pdf" },
    { label: "WA Consumer Protection: FuelWatch and fuel prices", url: "https://consumerprotection.wa.gov.au/fuelwatch-and-fuel-prices" },
  ],
});
