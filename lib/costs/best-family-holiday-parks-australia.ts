import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What makes a good family holiday park in Australia?", "A pool, a playground, a camp kitchen and clean amenities, plus something to do on wet days. The best ones also sit by a beach, river or lake, and run holiday activities in school breaks."],
  ["Which chains run family holiday parks in Australia?", "BIG4, Discovery Parks, G'day Parks and NRMA Parks and Resorts run parks across the country, and many councils and local operators run independent ones. The chains publish their parks and facilities on their sites, but they show nightly prices only once you enter dates."],
  ["When should I book a family holiday park?", "As early as you can for school holidays, long weekends and summer, because the best parks fill months ahead. A midweek or term-time stay is cheaper and quieter."],
  ["Is a cabin or a powered site better for a family?", "A cabin has beds, a bathroom and cooking, so it suits younger children or bad weather. A powered site is cheaper and works well if you have a campervan or caravan with beds and a fridge."],
] as const;

export default article({
  slug: "best-family-holiday-parks-australia",
  title: "Best Family Holiday Parks in Australia: What to Look For and Where to Go",
  description: "How to choose a family holiday park in Australia: the facilities that matter, the regions where family parks cluster, cabin or powered site, when to book and what to pack, plus where to find them.",
  category: "Trip planning", region: "Australia",
  places: ["Gold Coast", "Sunshine Coast", "Byron Bay", "Coffs Harbour", "Jervis Bay", "Margaret River"],
  imageAlt: "Grassed camping area under eucalypts at the Flaxmill Caravan Park in Boyup Brook, Western Australia",
  intro: "A holiday park is the easiest way to camp with children in Australia. You get a pool, a playground, a camp kitchen and clean bathrooms, often beside a beach or a river, and you can choose a powered site for a campervan or a cabin with beds. Below is what makes a park good for a family, the regions where the best ones cluster and how to book one without overpaying.",
  related: ["caravan-park-vs-holiday-park", "holiday-park-prices-australia-2026", "powered-vs-unpowered-sites-australia", "school-holidays-australia-2027", "first-campervan-trip-australia", "campervan-vs-caravan-australia"],
  sections: [
    section("What makes a park good for a family", ["The basics are a pool, a playground, a camp kitchen and clean bathrooms. The best family parks add a jumping pillow or a water play area, a games room for wet days, a kiosk and a quiet corner for adults. A park near a beach, a river or a lake lets children burn energy in the day and sleep early.", "Look at the park's own photos and facilities list, and check the reviews for noise and cleanliness. A big park is lively, and a small one is quieter."], ["Pool and playground", "Camp kitchen and a games room", "Beach, river or lake nearby"]),
    section("Where family parks cluster", ["Family parks are thickest where the weather and the water are good: the Gold Coast, the Sunshine Coast, the northern New South Wales coast around Byron Bay, Coffs Harbour and the mid north coast, the south coast around Jervis Bay and the Great Ocean Road in Victoria. In the west, the Margaret River region and Busselton are popular, and Tasmania's east coast has quiet ones by the sea.", "These regions fill in school holidays, so book early or aim for a shoulder-season week."], ["Gold Coast and Sunshine Coast", "Northern New South Wales and the south coast", "Margaret River and Tasmania's east coast"]),
    section("Cabin or powered site", ["A cabin has beds, a bathroom and a kitchen, so it suits young children and wet weather, and some have a bunk room for a family of four or five. A powered site is cheaper and works well in a campervan or caravan with beds and a fridge, and you can use the park's pool and camp kitchen.", "Prices vary by season and by park. The holiday park prices guide shows what published tariffs charge for a powered site and a cabin, and the powered or unpowered guide covers when each makes sense."], ["Cabins for young children", "Powered sites for vans", "Prices rise in peak season"]),
    section("When to book and how to save", ["Book as early as you can for school holidays, long weekends and summer. The 2027 school holidays guide has the dates by state, and the best parks fill months ahead. A midweek stay or a term-time week is cheaper and quieter.", "The big chains offer membership discounts, and councils and local operators often charge less for a similar site. Compare the same dates in a chain park and a council or independent park in the same town."], ["Book school holidays early", "Midweek and term time are cheaper", "Compare chain and council parks"]),
    section("What to pack and check", ["Pack a few board games, a deck of cards, beach towels and a torch for each child. Many parks have a camp kitchen with a stove and a fridge, but few supply pots and plates, so bring your own.", "Check the check-in time, the quiet hours, whether pets are allowed and the cancellation terms before you book. A park with a pool should have a fence and a gate, and a lifeguard is not guaranteed."], ["Games and towels", "Bring your own pots and plates", "Check pets, quiet hours and cancellation"]),
    { ...section("Plan the trip in AussieCamps", ["AussieCamps carries 1,838 campgrounds from park agencies, and you can filter by cost and facilities. Holiday parks, cabins and farm stays listed by BookEasy can be booked in the app, with the price shown when you check dates, and a trip adds up the nights and the driving distance between stops.", "The iPhone app is free to download, with in-app purchases."], ["Filter by cost and facilities", "Book parks in the app", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "BIG4 Holiday Parks", url: "https://www.big4.com.au/" },
    { label: "Discovery Parks and G'day Rewards", url: "https://www.discoveryholidayparks.com.au/" },
    { label: "NRMA Parks and Resorts", url: "https://www.nrmaparksandresorts.com.au/" },
  ],
});
