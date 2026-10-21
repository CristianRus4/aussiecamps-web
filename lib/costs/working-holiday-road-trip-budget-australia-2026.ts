import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["How much does a working holiday road trip in Australia cost per week?", "For two people sharing a petrol campervan and driving 1,000 km a week, about $475 to $775 a week on fuel, groceries and campsites, using published prices from October 2026. That is roughly $240 to $390 each. The vehicle, insurance, eating out, activities and repairs come on top."],
  ["How much should I budget for fuel on a campervan road trip?", "Multiply the kilometres by the litres per 100 km, divide by 100 and multiply by the price per litre. At 12 L/100 km, 1,000 km is 120 litres, which is $289 at the $2.41 petrol average and $336 at the $2.80 diesel average the government's Fuel Plan page showed for 14 October 2026. Remote roadhouses charge more."],
  ["Is free camping the cheapest way to do a working holiday road trip?", "It cuts the camping line to $0, but fuel and food stay, and a free camp is only legal where the land manager allows it by sign or standing rule. Many travellers still pay for a night with showers and laundry every few days, so budget for at least one paid night a week."],
  ["Do I need to budget for gaps in work on a working holiday visa?", "Yes. Home Affairs says you can only work for the same employer for a maximum of 6 months on a working holiday visa, though it lists exemptions such as plant and animal cultivation work. A move between jobs can mean a week or two of unpaid travel, so hold a buffer worth at least a couple of weekly budgets."],
] as const;

export default article({
  slug: "working-holiday-road-trip-budget-australia-2026", publishAt: "2026-12-02",
  title: "Working Holiday Road Trip Budget in Australia 2026: Cost Per Week",
  description: "Two people in a campervan spend about $475 to $775 a week on fuel, food and camping, with fuel $289 at 1,000 km. Costs by camping style, October 2026.",
  category: "Costs & budget", region: "Australia",
  places: ["National parks", "Holiday parks", "Free camps", "Fuel stops"],
  imageAlt: "The roadhouse and fuel pumps at Nullarbor, South Australia, with a tanker truck and parked vehicles",
  intro: "Two people sharing a petrol campervan and driving 1,000 km a week spend about $475 to $775 a week on fuel, groceries and campsites, depending on how they camp, using published prices from October 2026. Fuel is $289 of that at 12 L/100 km and $2.41 a litre, and the vehicle, insurance, eating out and activities come on top. This guide sets the weekly figure out by camping style so you can swap in your own kilometres and nights.",
  related: ["campervan-road-trip-budget-australia", "australia-road-trip-fuel-cost-2026", "camping-fees-australia-2026", "australia-grocery-prices-2026"],
  sections: [
    section("The weekly number for two people", ["The table adds three lines for seven nights: fuel for 1,000 km in a petrol van at 12 L/100 km, groceries at $85 each for the core staples in the grocery prices guide, and the camping nights. Camping prices come from published tariffs in the camping fees guide and one showground tariff, not from an average of holiday parks, because the big chains show a price only after you enter dates.", "Each total is arithmetic on those inputs for one week, so treat it as a starting point and replace the numbers with your own."], ["Fuel $289 for 1,000 km", "Groceries $170 for two", "Camping is the line you control"], {
      caption: "One week for two people in a petrol campervan, 1,000 km at 12 L/100 km. Excludes the vehicle, insurance, eating out, activities and repairs.",
      head: ["Camping style", "Camping for 7 nights", "Fuel", "Groceries", "Total for the week"],
      rows: [
        ["Free camps, plus one national park night", "$16 to $40", "$289", "$170", "$475 to $499"],
        ["Mixed: 4 free, 2 national park, 1 powered holiday park", "$77 to $125", "$289", "$170", "$536 to $584"],
        ["National park campgrounds every night", "$112 to $280", "$289", "$170", "$571 to $739"],
        ["Powered site every night at the $45 showground tariff", "$315", "$289", "$170", "$774"],
      ],
    }),
    section("Fuel: the line that moves most", ["The government's Fuel Plan page showed average retail prices in the five largest cities on 14 October 2026 of about $2.41 a litre for petrol and $2.80 for diesel. NRMA's weekly report for Sydney on 19 October showed regular unleaded at 239.8 cents and diesel at 280.1 cents. The fuel cost guide's examples use the 5 August 2026 benchmark, so use the dated figures here when you compare.", "Distance matters more than price. Halving the kilometres halves the bill, and remote roadhouses charge more than the city averages."], ["Petrol about $2.41, diesel about $2.80", "Halve the kilometres, halve the fuel", "Remote fuel costs more"], {
      caption: "Weekly fuel at 12 L/100 km using the Fuel Plan averages for 14 October 2026.",
      head: ["Kilometres in a week", "Litres", "Petrol at $2.41", "Diesel at $2.80"],
      rows: [
        ["500 km", "60 L", "$145", "$168"],
        ["1,000 km", "120 L", "$289", "$336"],
        ["1,500 km", "180 L", "$434", "$504"],
      ],
    }),
    section("Campsites: what the published tariffs say", ["Queensland charges $7.75 per person a night or $31 for a family, Victoria's campgrounds are half price from $16 a site until July 2027, and Western Australia and the Northern Territory charge $10 to $20 per adult, as the camping fees guide sets out. Parks Victoria says the half-price fees were reintroduced on 1 July 2025 for two years.", "For holiday parks, Exhibition Park in Canberra publishes a tariff of $40 powered and $35 unpowered a night until 1 November 2026, rising to $45 and $40 from that date. The big chains show a price only after you enter dates, so get a quote for your own route and season."], ["Parks Victoria half price to July 2027", "Powered adds about $5 at one showground", "Get chain quotes for your dates"]),
    section("Food", ["The grocery prices guide puts a solo week of core staples at about $85 on Numbeo's community-reported prices for October 2026, which is $170 for two. Eating out adds quickly: the eating out guide shows an inexpensive restaurant meal at $20 to $45 a person in Sydney.", "A small campervan fridge limits what you can carry, so budget for restocking every two or three days instead of one big shop."], ["Staples about $85 a person", "Eating out is the line that drifts", "Restock more often"]),
    section("What the weekly number leaves out", ["The vehicle comes first. A 14-day Apollo or Maui hire with top cover, a one-way fee, an extra driver and a kit adds $1,349 before the daily rate, as the hire cost guide works out. If you buy, Queensland's published 12-month registration and compulsory third party cost on 1 October 2026 was $864.50 to $880.50 for a four-cylinder light vehicle, and the buying guide covers transfer duty.", "Then add travel insurance, a phone plan, activities and a repair reserve. The campervan budget guide recommends holding money for a tyre, a windscreen or a changed ferry, and a working holiday visa has its own application charge and funds requirement on the Home Affairs website."], ["Vehicle costs sit outside the week", "Keep a repair reserve", "Check visa costs with Home Affairs"]),
    section("Budget around work stops", ["Home Affairs says that on a working holiday visa you can only work for the same employer for a maximum of 6 months, with exemptions that include plant and animal cultivation work anywhere in Australia and some industries in northern Australia. Plan a break in your budget each time a job ends, because travel between jobs earns nothing.", "The Fair Work Ombudsman publishes the national minimum wage and casual loading, and it changes each 1 July, so check its page for the current rate before you plan your weekly income."], ["6 months with one employer", "Hold a buffer between jobs", "Check the current minimum wage"]),
    section("Ways to lower the weekly number", ["Drive fewer kilometres, because fuel scales with distance. Use free camps only where the land manager allows camping by sign or standing rule, and read the state rules in the free camping guide. Pair two or three low-cost nights with one serviced night for showers, laundry, water and charging, which the campervan budget guide recommends.", "Check each park agency's fee page before you book, because the half-price Victorian fees end in July 2027 and fees can change each 1 July."], ["Fewer kilometres, lower fuel", "One serviced night a week", "Check fees before booking"]),
    { ...section("Price the nights in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, including free sites, and read reported camping prices on a place page.", "Holiday parks and motels listed by BookEasy can be booked in the app with their address, hours and a Book now button. Build a trip with ordered stops, dates, notes and route distance, then use the distance in the fuel formula above. Place details work offline; map tiles, routing, weather and photos need signal."], ["Filter by cost", "Read reported prices", "Use trip route distance for fuel"]), cta: true },
  ],
  sources: [
    { label: "Australian Government Fuel Plan: fuel statistics", url: "https://fuelplan.gov.au/fuel-statistics" },
    { label: "NRMA: weekly fuel report", url: "https://www.mynrma.com.au/cars-and-driving/fuel-finder/weekly-report" },
    { label: "Parks Victoria: booking information", url: "https://www.parks.vic.gov.au/where-to-stay/booking-information" },
    { label: "Exhibition Park in Canberra: camping rates and reservations", url: "https://exhibitionparkincanberra.com.au/camping/rates-reservations/" },
    { label: "Queensland Government: registration costs", url: "https://www.qld.gov.au/transport/registration/fees/cost" },
    { label: "Apollo: liability options", url: "https://www.apollocamper.com/travel-info/liability-options" },
    { label: "Home Affairs: 6-month work limitation, Work and Holiday visa", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/6-month-work-limitation" },
    { label: "Fair Work Ombudsman: minimum wages", url: "https://www.fairwork.gov.au/pay-and-wages/minimum-wages" },
  ],
});
