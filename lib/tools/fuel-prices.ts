/**
 * Australian Institute of Petroleum weekly averages for the week ending 2026-11-01, in cents per
 * litre: [unleaded petrol, diesel]. Row order matches the fuel price table's labels in
 * `toolStrings`: Sydney, Melbourne, Brisbane, Adelaide, Perth, Canberra, Hobart, Darwin, the five
 * largest cities (the unweighted average of Sydney, Melbourne, Brisbane, Adelaide and Perth), the
 * national regional average and regional Northern Territory.
 */
export const fuelPrices: [number, number][] = [
  [236.4, 278.2], [236.4, 279.2], [237.3, 281.5], [227.9, 275.6], [228.5, 269.7],
  [246.6, 288.4], [245.6, 282.7], [245.4, 286.1], [233.3, 276.8], [241.7, 281.6], [287.3, 322.9],
];

/** The five-city averages in A$ a litre, rounded to the cent: the calculator's default and the worked example. */
export const fuelBenchmark = { petrol: Math.round(fuelPrices[8][0]) / 100, diesel: Math.round(fuelPrices[8][1]) / 100 };
