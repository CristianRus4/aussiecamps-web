import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What is the excess on a campervan hire in Australia?", "The excess is the amount you pay towards a damage claim before the hire company covers the rest. On standard cover it is often several thousand dollars, and the company usually holds it on your card as a bond. Check the exact amount in the agreement before you book."],
  ["Can I reduce the excess?", "Most hire companies offer a daily fee that cuts the excess to a few hundred dollars or to zero, and some offer a separate package. Compare the total cost over your hire period with the saving it buys."],
  ["What does hire insurance usually not cover?", "Common exclusions include tyres, windscreens, the underbody and roof, damage on unsealed roads or beaches, water damage, a wrong fuel type, driving under the influence and breaches of the agreement. Always read the list for your hire company."],
  ["Do I need extra travel insurance for a campervan trip?", "Hire insurance covers the vehicle and third parties, not you, your luggage or your trip. Travel insurance covers medical costs, cancellations and belongings, and some policies cover rental excess, so check the product disclosure statement."],
] as const;

export default article({
  slug: "campervan-hire-insurance-excess-australia",
  title: "Campervan Hire Insurance and Excess in Australia: What Is Covered",
  description: "Campervan hire insurance in Australia explained: what the standard cover includes, how the excess and bond work, what is usually excluded, and how to reduce the risk of a big bill.",
  category: "Costs & budget", region: "Australia",
  places: ["Hire companies", "Excess", "Bond", "Exclusions"],
  imageAlt: "A remote stretch of the Anne Beadell Highway in the Australian outback",
  intro: "The hire price of a campervan is only part of the cost. The excess, the amount you pay towards any damage claim, is often several thousand dollars, and a list of exclusions can leave you paying the full bill for things like tyres, glass or a mistake on a dirt road. Below is how hire insurance usually works, what to look for in the agreement and how to reduce the risk of a big bill.",
  related: ["campervan-hire-cost-australia-2026", "hit-a-kangaroo-what-to-do-australia", "4wd-basics-hire-vehicles-australia", "how-to-change-a-tyre-campervan-australia", "can-i-drive-a-2wd-hire-campervan-on-4wd-roads-in-australia", "best-campervan-for-backpackers-australia"],
  sections: [
    section("What standard cover includes", ["Hire companies include basic insurance in the price, covering the vehicle and third-party damage up to a limit, subject to an excess. Compulsory third party insurance for injury is part of the vehicle registration in each state, and it is separate from the hire company's cover.", "The agreement lists the terms: the excess, who can drive, where you can drive, what is excluded and what you must do after an accident. Read it before you pay, not at the counter."], ["Basic cover is included", "Excess applies to claims", "Read the agreement before you pay"]),
    section("The excess and the bond", ["The excess is what you pay if the van is damaged, and the company usually holds an amount on your credit card as a bond, released when you return the van undamaged. Standard excess is often several thousand dollars, so a small mistake such as a scraped panel can be a large bill.", "Most companies sell an excess reduction option, charged per day, that cuts the excess to a few hundred dollars or to zero. Compare the total over your trip with the saving, and check that the reduction covers the things you worry about, because many exclusions apply even with it."], ["Excess is often thousands of dollars", "The bond is held on your card", "Compare reduction options"]),
    section("Common exclusions", ["Typical exclusions include tyres and wheels, windscreens and glass, the underbody, the roof and overhead damage, driving on unsealed roads, beaches or river crossings that the agreement does not allow, water damage, putting in the wrong fuel, driving after drinking and breaking the agreement. Some animal strikes are excluded or carry a higher excess.", "The kangaroo guide covers what to do after an animal strike, the 4WD guide covers where you may drive, and the tyre guide covers flat tyres, which are often an exclusion."], ["Tyres and glass", "Unsealed roads and beaches", "Wrong fuel and overhead damage"]),
    section("Ways to reduce the risk", ["Walk around the van at pick-up and photograph every scratch and dent, and again at drop-off. Know the van's height and watch for low clearances at car parks, drive-throughs and service stations. Check whether it takes petrol or diesel before you fill up, and keep to the roads the agreement allows.", "Travel insurance can cover your own medical costs, cancellations and belongings, and some policies cover rental excess, but read the product disclosure statement. Third-party excess cover may cost less than the hire company's reduction."], ["Photograph the van at pick-up and drop-off", "Check petrol or diesel", "Read the travel insurance terms"]),
    { ...section("Plan the route in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish. Build a trip as ordered stops and it shows the distance, drive time and forecast for each leg, so you can plan daylight driving and avoid the long, tired days where mistakes happen.", "The iPhone app is free to download, with in-app purchases."], ["Plan daylight driving", "Add each stop in order", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Excess (insurance)", url: "https://en.wikipedia.org/wiki/Deductible" },
    { label: "Wikipedia: Compulsory third party insurance", url: "https://en.wikipedia.org/wiki/Compulsory_third_party_insurance" },
    { label: "Australian Competition and Consumer Commission", url: "https://www.accc.gov.au/" },
  ],
});
