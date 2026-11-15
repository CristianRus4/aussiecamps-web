import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Do you need to book camping at Wilsons Promontory?", "Yes. All camping at Tidal River and the hike-in camps is booked online with Parks Victoria, and summer, Christmas, Easter and long weekends fill fast. Book as soon as bookings open for your dates."],
  ["Is there a ballot for Tidal River in summer?", "No. Tidal River sites for summer are booked online with Parks Victoria like the rest of the year, and the peak dates go quickly. Check the Parks Victoria booking page for when your dates open."],
  ["Can you take a dog to Wilsons Promontory?", "No. Pets are not allowed in the national park, including at Tidal River. Fires, drones, generators and firearms are also not allowed."],
  ["How far is Wilsons Promontory from Melbourne?", "About three hours by road, via the Princes Freeway and South Gippsland Freeway towards Meeniyan, then Meeniyan-Promontory Road. There is no fuel at Tidal River, and the nearest is at Yanakie."],
] as const;

export default article({
  slug: "wilsons-promontory-camping",
  title: "Wilsons Promontory Camping 2026-27: Tidal River, Hike-In Camps, Bookings and the Drive from Melbourne",
  description: "How to camp at Wilsons Promontory: Tidal River, the hike-in camps, summer bookings, park rules and the three-hour drive from Melbourne.",
  category: "Camping guides", region: "Victoria",
  places: ["Wilsons Promontory", "Tidal River", "Sealers Cove", "Little Waterloo Bay", "Yanakie", "Squeaky Beach"],
  imageAlt: "Lichen-covered granite boulders beside the tea-coloured water of Tidal River, Wilsons Promontory, Victoria",
  intro: "Wilsons Promontory is the southernmost point of mainland Australia and one of Victoria's most loved national parks. Tidal River is a big riverside campground with beaches, bush and wombats at the door, and the hike-in camps at places like Sealers Cove and Little Waterloo Bay give a quieter night on the coast. It is about three hours from Melbourne and extremely popular, so booking, fuel and a few park rules matter more than at most camps.",
  related: ["easy-overnight-bushwalks-huts-families", "camping-rules-victoria", "free-camping-near-melbourne", "camping-in-melbourne", "great-ocean-road-camping-guide", "campervan-holiday-with-kids-australia"],
  sections: [
    section("Getting there from Melbourne", ["The drive from Melbourne is about three hours, along the Princes Freeway and South Gippsland Freeway, then through Meeniyan and along Meeniyan-Promontory Road to Tidal River. The last stretch past Yanakie is quiet, winding road, so take it slowly at dusk, when wombats, kangaroos and wallabies are on the verge.", "There is no fuel at Tidal River. Fill up in Yanakie or before you leave Melbourne. In summer the car parks at popular spots fill by mid morning, so arrive early on busy days."], ["About three hours from Melbourne", "Fuel at Yanakie, not in the park", "Take care with wildlife at dusk"]),
    section("Tidal River campground", ["Tidal River is the main campground in Wilsons Promontory National Park, beside the river and a short walk from the beach at Norman Bay. It has toilets, showers, a general store, a visitor centre and sites for tents, camper trailers and caravans. Powered sites are limited, so check the booking page for your vehicle.", "The park limits vehicles per site, with a maximum of two cars on a booking, and the rule is enforced. Sites are close together in peak periods, so keep to quiet hours and respect your neighbours."], ["Toilets, showers and a general store", "Two vehicles per site", "Powered sites are limited"]),
    section("Bookings, fees and the summer rush", ["All camping is booked online with Parks Victoria, and peak periods sell out. Christmas, January, Easter and long weekends are the hardest, and booking opens well ahead, so check the Parks Victoria page for when dates open. Tidal River once used a summer ballot, which Parks Victoria removed in 2023, so check the booking page for how your dates are handled. Our camping fees and national park fees pages give the typical charges, and the Parks Victoria fees page has the current price.", "If your dates are full, check again in the weeks before, because cancellations free up sites. Otherwise, look at the nearby coast and our Victoria guides, such as free camping near Melbourne, for places you can stay without a booking."], ["Book as soon as dates open", "Check for cancellations", "See current fees with Parks Victoria"]),
    section("Hike-in camps", ["The park has several hike-in camps, including Sealers Cove, Little Waterloo Bay, Oberon Bay, Refuge Cove, Roaring Meg and Halfway Hut. Each has basic facilities and needs a booking, and you carry everything in and out. Sealers Cove, reached from Telegraph Saddle, is a long, sheltered beach with creek water and is a good first overnight, and Little Waterloo Bay and Oberon Bay are also popular, shorter routes.", "Water is usually at a tank or creek, so carry a way to treat it. The camps are fuel stove only. Check the Parks Victoria page for track closures, because storms and fire can close sections for long periods."], ["Sealers Cove from Telegraph Saddle", "Treat creek water", "Fuel stove only"]),
    section("The camps at a glance", ["A quick look at the main options, with the booking made through Parks Victoria for each."], undefined, {
      caption: "Camping at Wilsons Promontory.",
      head: ["Camp", "Type", "Best for", "Watch for"],
      rows: [
        ["Tidal River", "Drive-in campground", "Families, beaches, first visits", "Summer sells out"],
        ["Sealers Cove", "Hike-in camp", "A first overnight walk", "Fuel stove only, treat water"],
        ["Little Waterloo Bay", "Hike-in camp", "Quiet beach and swimming", "Book ahead in peak season"],
        ["Oberon Bay", "Hike-in camp", "A beach with surf and sunsets", "Check track and tide notes"],
        ["Refuge Cove", "Hike-in camp", "Walkers doing the longer routes", "A longer walk in, plan the day"],
      ],
    }),
    section("Park rules to know", ["Pets are not allowed anywhere in the park. Fires, solid fuel BBQ compounds, drones, generators and firearms are also not allowed, so bring a gas stove and leave the dog at home. Our camping rules Victoria guide has the wider rules for the state's parks, and our camping with dogs guide lists places nearby that do allow pets.", "Wombats are bold and will raid food left out and chew through tent bags, so keep food in the car or a locked box. Do not feed any wildlife, and keep your distance."], ["No pets, fires or generators", "Gas stove only", "Lock food away from wombats"]),
    section("When to go and what to see", ["Summer is busy and warm, with calm days for swimming at Squeaky Beach and Norman Bay. Autumn and spring have quieter camps and good walking, and winter is cold and windy but peaceful. Check the weather before a hike-in trip, because the Prom's weather changes fast.", "Walk to the Mount Oberon summit for views over the park and the coast, to Squeaky Beach for its squeaky white sand, or to Whisky Bay and Picnic Bay along the coast. Our best time to camp guide has the season detail."], ["Summer for swimming", "Autumn and spring for quiet", "Weather changes fast"]),
    section("Staying nearby when the park is full", ["The towns of Foster, Yanakie and Fish Creek have caravan parks and cabins within half an hour of the park gate. Our caravan parks guide covers how to find and compare them. They are a good backup if Tidal River is booked out.", "Day trips into the park from Yanakie are easy, but remember to pay the park entry and arrive before the car parks fill."], ["Foster, Yanakie and Fish Creek", "Arrive early for day trips", "Caravan parks as a backup"]),
    { ...section("Plan the trip in AussieCamps", ["AussieCamps lists campgrounds, national parks and holiday parks around Wilsons Promontory, with each place's facilities, fees and rules as the agency publishes them. Save Tidal River and the nearby caravan parks to a trip, with the driving route from Melbourne and the weather for each stop.", "Camp bookings are made with Parks Victoria. AussieCamps runs on iPhone and is free to download, with in-app purchases."], ["Camps near the Prom", "Driving route from Melbourne", "Book with Parks Victoria"]), cta: true },
  ],
  sources: [
    { label: "Parks Victoria: Wilsons Promontory National Park", url: "https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park" },
    { label: "Parks Victoria: camping and bookings", url: "https://www.parks.vic.gov.au/stay" },
    { label: "Parks Victoria: fees and charges", url: "https://www.parks.vic.gov.au/get-into-nature/fees-and-charges" },
    { label: "Visit Victoria: Wilsons Promontory", url: "https://www.visitvictoria.com/regions/gippsland/see-and-do/nature-and-wildlife/national-parks/wilsons-promontory-national-park" },
  ],
});
