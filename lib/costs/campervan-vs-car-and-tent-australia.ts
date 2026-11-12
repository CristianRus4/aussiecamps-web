import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Is a campervan or a car and tent cheaper in Australia?", "A car and tent usually costs less to run, because the car uses less fuel and a tent needs no hire add-ons. A campervan's cost is mostly the daily hire or the purchase, then fuel, which is the biggest running cost over Australian distances. Work it out for your own dates and route."],
  ["Can I sleep in my car instead of a tent?", "Only where camping is allowed. Many councils count sleeping in a parked car as camping, and national park permits apply whether you sleep in a tent or the car. A booked campground or a signed rest area is the safe choice."],
  ["Do I need a special licence for a campervan?", "Not for a typical one. A car licence covers a vehicle up to 4.5 tonnes gross vehicle mass seating up to 12 people, including the driver. Check your overseas licence rules for each state."],
  ["Which is better for a first trip?", "Choose the one you will enjoy on a wet, cold or hot night, not only a dry one. A tent is cheap to try, and a van adds comfort and speed of setting up."],
] as const;

export default article({
  slug: "campervan-vs-car-and-tent-australia",
  title: "Campervan vs Car and Tent in Australia: Costs, Rules and Comfort (2026)",
  description: "Campervan or car and tent for an Australian road trip: running costs, fuel, camping rules, where you can sleep, comfort in the weather and who each suits.",
  category: "Trip planning", region: "Australia",
  places: ["Campgrounds", "Holiday parks", "Rest areas", "National parks"],
  imageAlt: "A campervan parked at Aldinga, South Australia",
  intro: "The choice is between a campervan, which is a bed, a kitchen and a vehicle in one, and a car with a tent, which is cheaper to start but more work every day. Neither is better for everyone. The right one depends on the length of the trip, the season, the roads and how much you want to set up each night. Here is how they compare on cost, rules, comfort and the kind of trip each suits.",
  related: ["campervan-vs-caravan-australia", "first-campervan-trip-australia", "sleeping-in-car-australia", "campervan-hire-cost-australia-2026", "camping-packing-list-australia", "campervan-road-trip-budget-australia"],
  sections: [
    section("At a glance", ["A tent is cheaper to carry and gives you more places to camp, while a van is faster to set up and more comfortable in bad weather."], undefined, { caption: "Campervan and car with a tent compared for an Australian road trip, November 2026.", head: ["Point", "Campervan", "Car and tent"], rows: [
      ["Up-front cost", "Daily hire, or buying a vehicle", "Hire car or your own car, plus a tent"],
      ["Fuel", "Heavier, so more fuel per kilometre", "Usually less fuel per kilometre"],
      ["Setting up", "Minutes", "Longer, and harder in rain or wind"],
      ["Weather", "Shelter on wet and cold nights", "Wind, rain and heat are felt directly"],
      ["Where you can sleep", "Campgrounds and signed overnight areas", "Campgrounds only, where a tent is allowed"],
      ["Roads", "Hire contracts often ban unsealed roads", "A car is subject to its own hire terms"],
    ] }),
    section("Cost: where the money goes", ["A campervan's cost is mostly the vehicle, which you pay for every day whether you drive or not, and the add-ons around it. For example, Apollo and Maui's published High Road cover is $67 a day, which comes to $938 for 14 days, before the daily rate, a one-way fee, extra drivers or a kit. A tent has none of that.", "Fuel is the line that dominates over Australian distances. The Australian Institute of Petroleum put the five-largest-city average at $2.33 a litre for petrol and $2.77 for diesel in the week ending 1 November 2026. At those prices 1,000 km costs about $280 in a campervan using 12 litres per 100 km on petrol, and about $186 in a car using 8, so a heavier van costs more every day it runs."], ["Hire add-ons can add hundreds", "Fuel is the largest running cost", "A lighter car uses less fuel"]),
    section("Where you can sleep", ["Rules are written for the place, not the vehicle. National park campsites need a booked permit in Queensland whether you sleep in a tent or a car, and councils often count sleeping in a parked car or van as camping. A holiday park or a campground is the safe choice for either.", "A tent suits fewer places than a vehicle: it needs a pitch, so it is limited to campgrounds and permitted camping, while a campervan can use a signed overnight area at a rest area. In Queensland rest areas allow up to 20 hours unless signed, and in Western Australia up to 24 consecutive hours where signed, but both are stopping places and not campsites."], ["Rules follow the place, not the vehicle", "Tents need a pitch", "Rest areas allow a short stop"]),
    section("Comfort, weather and safety", ["A van keeps you out of the wind and rain and cooks under cover, which counts on a wet week. A tent is cooler in hot weather with the flaps open but lets in the weather, and pegging out in strong wind takes practice. Inland and alpine nights fall below freezing in winter, so a sleeping bag rated for the conditions matters in both.", "Never run the engine for heating or bring a gas stove or heater into a tent or van, because of carbon monoxide. Heat is the main limit on sleeping in a vehicle, since cabins warm quickly after sunrise."], ["A van suits wet weeks", "A tent suits hot nights", "No gas appliances inside"]),
    section("Licence, size and roads", ["A car licence covers a campervan up to 4.5 tonnes gross vehicle mass seating up to 12 people, including the driver, so most campervans need no special licence. A larger motorhome is a different matter, and the road rules for towing and size are in our campervan vs caravan guide.", "Most hire companies ban unsealed roads for 2WD campers, apart from a short access road to a campground, and a hire car has its own terms. Read the contract before you plan a dirt road, because the insurance can stop at the bitumen."], ["Car licence covers most vans", "Check hire contract for unsealed roads", "Larger motorhomes differ"]),
    section("Who each suits", ["A campervan suits a longer trip, a wet or cold season, travellers who change camp often and people who want a bed made in minutes. A car and a tent suit a short trip, a tight budget, a few nights in one place, and travellers who want national park camps and the quiet of a tent.", "You do not have to choose for the whole trip. Some travellers hire a car and tent for a week and rent a cabin or a holiday park site on the wettest nights."], ["Van for long or wet trips", "Tent for short, cheap trips", "Mix both on a long route"]),
    { ...section("Plan either trip in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 745 national parks, with each place's facilities, fees and rules as the agency publishes them. Filter by cost, water, toilets and power, save places to a trip and see the driving distance between stops.", "It runs on iPhone and is free to download, with in-app purchases."], ["Filter by cost and facilities", "Distance between stops", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Australian Institute of Petroleum: weekly petrol prices report", url: "https://aip.com.au/pricing/weekly-petrol-prices-report-week-ending-1-november-2026/" },
    { label: "Queensland Parks: camping bookings", url: "https://parks.qld.gov.au/camping/bookings" },
    { label: "Queensland Government: rest areas", url: "https://www.qld.gov.au/transport/safety/holiday-travel/stops/rest" },
    { label: "Main Roads WA: long-distance driving", url: "https://www.mainroads.wa.gov.au/travel-information/driving-in-wa/long-distance-driving/" },
    { label: "Apollo: liability options", url: "https://www.apollocamper.com/travel-info/liability-options" },
  ],
});
