import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can I drive a campervan on a normal car licence in Australia?", "Yes, for almost every hire campervan. A standard car (C class) licence covers vehicles up to 4.5 tonnes gross vehicle mass and up to 12 seats including the driver, and most hire campervans and motorhomes fall under that."],
  ["What licence do I need for a bigger motorhome?", "A motorhome over 4.5 tonnes GVM needs a heavier class, usually light rigid (LR) for vehicles up to 8 tonnes. Check the GVM on the compliance plate or the hire company's specification before you book."],
  ["Can I hire a campervan with an overseas licence?", "Usually yes, if the licence is current and in English, or comes with an English translation or an International Driving Permit. The hire company sets its own documents rule, so check the conditions before you pay."],
  ["Can a P-plate driver or a young driver hire a campervan?", "Often only with conditions. Many hire companies set a minimum age of 21 or 25, ask that you have held a full licence for a year or two, and charge more for younger drivers. Provisional licence holders are frequently refused, so ask first."],
] as const;

export default article({
  slug: "can-i-drive-a-campervan-on-a-car-licence-in-australia", publishAt: "2026-11-17",
  title: "Can I Drive a Campervan on a Car Licence in Australia?",
  description: "Yes for nearly every hire campervan: a car licence covers vehicles to 4.5 tonnes. Larger motorhomes, overseas licences and age rules from hire companies explained.",
  category: "Rules & safety", region: "Australia",
  places: ["Hire campervans", "Motorhomes", "Overseas licences", "Light rigid licence"],
  imageAlt: "Campervan parked beside a rural road",
  intro: "Yes. A standard car licence covers almost every campervan you can hire in Australia, because the car class allows vehicles up to 4.5 tonnes gross vehicle mass and up to 12 seats. Only the larger motorhomes go over that line, and those need a heavier licence. Here is how the weight limit works, what changes if your licence is from overseas, and why a hire company can still say no to a driver who is legally allowed to drive.",
  related: ["overseas-driver-licence-australia-state-guide", "campervan-driving-australia-safety-guide", "campervan-vs-caravan-australia", "driving-in-australia-overseas-licence", "campervan-hire-cost-australia-2026", "first-campervan-trip-australia"],
  sections: [
    section("The weight limit that decides it", ["Australian licences are split by vehicle weight, not by whether a vehicle has a bed in the back. A standard car licence, called C class, covers a vehicle up to 4.5 tonnes gross vehicle mass (GVM) that carries no more than 12 people including the driver. GVM is the maximum loaded weight the manufacturer allows, and it is on the compliance plate, not the same as the weight of the empty vehicle.", "A converted van, a small campervan and most hire motorhomes sit well under 4.5 tonnes. A larger coachbuilt motorhome or a truck-based one can go over, and then you need a heavier class."], ["Check the GVM, not the empty weight", "4.5 tonnes is the usual car limit", "The compliance plate shows the figure"], {
      caption: "Which licence covers which campervan, in general terms.",
      head: ["Vehicle", "Usual weight", "Licence needed"],
      rows: [
        ["Van conversion or small campervan", "Under 4.5 tonnes GVM", "Car (C class)"],
        ["Most hire motorhomes", "Under 4.5 tonnes GVM", "Car (C class)"],
        ["Large motorhome", "Over 4.5 tonnes GVM, up to 8 tonnes", "Light rigid (LR)"],
        ["Heavy coachbuilt or bus-based motorhome", "Over 8 tonnes GVM", "A heavier class, check with the road authority"],
      ],
    }),
    section("Heavier motorhomes and towing", ["If a motorhome is over 4.5 tonnes GVM, a light rigid licence is the usual next step, and the state road authority runs the test. Rules can differ in small ways between states, so confirm the class with the authority for the state where your licence was issued.", "Towing is a separate question. A car licence covers a car and a trailer within set limits, but a heavy caravan behind a large vehicle can push the combination past them. Our campervan and caravan comparison explains the difference."], ["LR is the usual class above 4.5 tonnes", "Towing is judged on the combination", "Confirm with the road authority"]),
    section("Driving on an overseas licence", ["A visitor can generally drive in Australia on a current overseas licence, as long as it is in English or comes with an approved English translation or an International Driving Permit. The permit supports your own licence and does not replace it, so carry both, and arrange it before you leave home because it generally cannot be issued here.", "Any condition on your licence travels with you, such as glasses or automatic only. The visitor period is limited and varies by state, and it changes if you become a resident, so check the authority for the state you are in. Our overseas licence state guide has the details."], ["Carry the licence and the permit or translation", "Get the permit before you travel", "Conditions on your licence still apply"]),
    section("P plates, young drivers and hire company rules", ["Being legally allowed to drive is not the same as being allowed to hire. Most hire companies set their own minimum age, commonly 21 or 25, and ask that you have held a full licence for a year or more. Younger drivers often pay a daily surcharge, and drivers on a provisional or P plate licence are frequently refused.", "The conditions also cover extra drivers, so anyone who might take the wheel needs to be named on the agreement and meet the same rules. Insurance can be void if an unlisted driver has an accident."], ["Ask about the minimum age and licence history", "Young driver fees are common", "Every driver must be on the agreement"]),
    section("Before you drive away", ["Look at the vehicle's height, length and weight, and write the height somewhere you can see it. A campervan is taller and longer than a car, so car park barriers, low branches and tight corners are all new problems, and the vehicle handles differently in wind and on hills when it is loaded.", "Take the walk-around at pick-up seriously, photograph any damage and ask about unsealed roads, because many rentals exclude them. Our campervan driving guide covers size, safety and legal limits in more detail."], ["Write the vehicle height on the dash", "Photograph damage at pick-up", "Ask what roads the agreement allows"]),
    { ...section("Plan a campervan trip in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them. Filter by cost, dogs allowed, 4WD access, online booking and facilities such as toilets and drinking water, so you can pick camps that suit a vehicle of your size.", "Save places to a collection, build a trip with Add stop and see the driving distance and time for each leg. The whole directory is inside the app, so search, filters and place details work with no signal. There is no account and no ads, and it runs on iPhone. Check the sign at the site and the land manager before you settle in."], ["Plan legs with distance and time", "Works with no signal", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "NSW Government: licence classes and conditions", url: "https://www.nsw.gov.au/driving-boating-and-transport/driver-and-rider-licences/licence-classes-and-conditions/classes" },
    { label: "NSW Government: visiting from overseas or interstate", url: "https://www.nsw.gov.au/driving-boating-and-transport/driver-and-rider-licences/visiting-or-moving-to-nsw/visiting-from-overseas-or-interstate" },
    { label: "Queensland Government: driving on an overseas licence", url: "https://www.qld.gov.au/transport/licensing/driver-licensing/overseas/driving" },
    { label: "Transport Victoria: tourists driving in Victoria", url: "https://transport.vic.gov.au/road-and-active-transport/road-rules-and-safety/tourists-driving-in-victoria" },
    { label: "Austroads: Australian driver licensing", url: "https://austroads.gov.au/drivers-and-vehicles/registration-and-licensing/australian-driver-licensing" },
  ],
});
