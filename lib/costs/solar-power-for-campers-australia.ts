import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Do hire campervans in Australia have solar panels?", "Some do and many do not. Most hire vans run their fridge and lights from a house battery that charges from the engine while you drive and from a mains lead at a powered site. Ask the hire company how the van charges and how long the battery lasts."],
  ["How much solar do I need for a campervan fridge?", "A 12 volt compressor fridge is the biggest daily load in most vans. A panel of roughly 100 to 200 watts on the roof, with a good battery and a controller, is a common set-up for a fridge, lights and phone charging, and Australian sun makes it work well. Your own needs depend on the fridge, the battery and the weather."],
  ["Will solar work on a cloudy day?", "Yes, but at a much lower output. A few cloudy days in a row can flatten a small battery, so park in the sun when you can, drive for an hour to charge from the engine or move to a powered site."],
  ["Can I use a generator instead of solar?", "Only where the campground allows it. Many national parks and quiet camps ban generators, so solar is the more flexible option. The generator guide covers the rules by state."],
] as const;

export default article({
  slug: "solar-power-for-campers-australia",
  title: "Solar Power for Campers in Australia: Panels, Batteries and Free Camps",
  description: "How solar works on a campervan: the panel, the battery, the controller and the loads, how much power a fridge needs, and how to camp for days away from a powered site.",
  category: "Camping guides", region: "Australia",
  places: ["Free camps", "National parks", "Outback", "Roadhouses"],
  imageAlt: "Caravans and tents under trees and palms at the Eighty Mile Beach caravan park on the north-west coast of Western Australia",
  intro: "Solar power is what lets a campervan stay away from powered sites for days, and Australia has plenty of sun for it. A panel on the roof charges a battery, the battery runs the fridge, the lights and the phone chargers, and a controller keeps it all safe. Below is how the pieces fit together, how much power you really use and what to check if you hire or buy a van with solar.",
  related: ["can-i-use-a-generator-at-a-campsite-in-australia", "powered-vs-unpowered-sites-australia", "campervan-vs-caravan-australia", "buying-a-campervan-australia-working-holiday", "camping-water-planning", "is-free-camping-legal-australia"],
  sections: [
    section("How a campervan solar set-up works", ["A solar panel makes electricity from sunlight. A charge controller sits between the panel and the battery and stops it overcharging, and the battery stores the power for the fridge, the lights, the pump and the phone chargers. Most vans also charge the house battery from the engine while you drive, using a DC to DC charger or a simpler link, and from mains power at a powered site.", "An inverter turns the battery's 12 volt power into 240 volt for a laptop or a small appliance, but it uses power too, so run it only when needed. Large heaters, kettles and air conditioners are not realistic loads for a small solar system."], ["Panel, controller, battery", "Engine and mains also charge the battery", "Avoid large 240 volt loads"]),
    section("How much power do you use", ["The fridge is the biggest daily load in most vans, followed by lights, a water pump, phones and a laptop. A 12 volt compressor fridge cycles on and off, and it uses more in hot weather and when it is full or opened often. A roof panel of about 100 to 200 watts with a modest battery is a common set-up for a fridge and the small loads.", "Add up what you use in a day, and then see how many days the battery lasts without sun. If it falls short, drive for an hour, move to a powered site or add battery capacity. If you are not sure, ask the hire company or the seller for the battery size and the panel rating."], ["The fridge is the main load", "Hot weather uses more power", "Check battery size and panel rating"]),
    section("Camping with solar", ["Solar makes free camps, rest areas and national park campgrounds practical, because you do not need a power post. Park in the sun to charge, angle the van if you can and keep the panel clear of dust and leaves. Shade from trees cuts the output, and a few cloudy days can run the battery low.", "Many campgrounds ban generators, which makes solar the quieter and more widely allowed option. The generator guide covers the rules by state, and the powered and unpowered sites guide covers when it is worth paying for a powered site."], ["Park in the sun", "Shade cuts the output", "Solar is quiet and widely allowed"]),
    section("If you hire or buy a van", ["Ask whether the van has solar, what the battery size is and how long the fridge runs without hook-up. If you are buying, ask for the details of the install and the age of the battery, because batteries wear out and are one of the costlier items to replace.", "The buying a campervan guide covers the checks for a used van, and the campervan hire cost guide explains what the extras cover."], ["Ask about battery size and age", "Check the install", "Know how long the fridge lasts"]),
    { ...section("Plan the route in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish. Build a trip as ordered stops and it shows the distance, drive time and forecast for each leg, which helps when you want sunny days for solar and a powered site when the forecast turns cloudy.", "The iPhone app is free to download, with in-app purchases."], ["Check the forecast for each stop", "Add each stop in order", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Wikipedia: Solar charge controller", url: "https://en.wikipedia.org/wiki/Charge_controller" },
    { label: "Wikipedia: Photovoltaic system", url: "https://en.wikipedia.org/wiki/Photovoltaic_system" },
    { label: "Wikipedia: Deep-cycle battery", url: "https://en.wikipedia.org/wiki/Deep-cycle_battery" },
  ],
});
