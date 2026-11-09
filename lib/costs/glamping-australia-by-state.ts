import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What is glamping in Australia?", "Camping with the comfort left in: a bell tent, safari tent, cabin or dome with a real bed, power and sometimes a private bathroom, set in a campground or on a farm, vineyard or beach."],
  ["How much does glamping cost in Australia?", "It ranges from around the price of a good cabin at a holiday park to several hundred dollars a night at remote or luxury sites. Prices rise in school holidays and in peak season."],
  ["Where is the best glamping in Australia?", "Popular regions include the Hunter Valley, the Blue Mountains, the Yarra Valley and Great Ocean Road, the Tasmanian east coast, the Margaret River region, Kangaroo Island, the Daintree and the Top End. The best choice depends on the state and the season."],
  ["Do I need to book glamping in advance?", "Yes. The popular sites book out for weekends, school holidays and the cooler months, so book weeks or months ahead."],
] as const;

export default article({
  slug: "glamping-australia-by-state", publishAt: "2026-11-09",
  title: "Glamping in Australia by State: Where to Find Comfortable Camping",
  description: "Where to go glamping in each Australian state: bell tents, safari tents and eco retreats by region, what to expect for price and season, and when to book.",
  category: "Camping guides", region: "Australia",
  places: ["Hunter Valley", "Yarra Valley", "Margaret River", "Kangaroo Island", "Bay of Fires"],
  imageAlt: "Sunset campsite in Hattah-Kulkyne National Park, Victoria",
  intro: "Glamping is camping with the discomfort taken out: a bed, often power, sometimes a private bathroom, in a tent, dome or cabin in a good spot. Australia has plenty, from vineyards in the Hunter and Yarra valleys to eco retreats at Karijini and the Top End. Book early, choose the season for the region and keep the budget in mind, because the best sites cost several times a normal campsite.",
  related: ["best-time-camping-australia", "holiday-park-prices-australia-2026", "choosing-campsite-australia", "school-holidays-australia-2027", "karijini-national-park-camping"],
  sections: [
    section("What glamping is", ["Glamping, or glamorous camping, covers bell tents, safari tents, domes, yurts and cabins with a real bed and often power, in campgrounds, on farms, at vineyards and beside beaches. Some have private bathrooms, some share a block, and the extras vary.", "Check what is included before you book: bedding, power, heating, cooking, linen and whether pets are allowed."], ["Real bed, often power", "Tents, domes and cabins", "Check what is included"], {
      caption: "Where to look for glamping in each state.",
      head: ["State", "Where to look", "Good for"],
      rows: [
        ["New South Wales", "Hunter Valley, Blue Mountains, south coast", "Wine, bush and beach weekends"],
        ["Victoria", "Yarra Valley, Great Ocean Road, Grampians", "Weekends from Melbourne"],
        ["Queensland", "Noosa hinterland, Daintree, Whitsundays", "Rainforest and reef trips"],
        ["Western Australia", "Margaret River, Karijini, Ningaloo, Kimberley", "Coast and gorge country"],
        ["South Australia", "Barossa, Kangaroo Island, Flinders Ranges", "Wine, wildlife and outback"],
        ["Tasmania", "East coast, Cradle Mountain", "Beaches and mountains"],
        ["Northern Territory", "Kakadu, Uluru, Litchfield", "Dry season outback"],
      ],
    }),
    section("The south-east: NSW, Victoria and Tasmania", ["Glamping near Sydney and Melbourne runs from Hunter Valley vineyards and Blue Mountains domes to Yarra Valley and Great Ocean Road tents. Tasmania has retreats on the east coast and at Cradle Mountain.", "These are weekend trips, so they book out on Fridays and Saturdays; a midweek stay is cheaper and quieter."], ["Weekend trips from the cities", "Midweek is cheaper", "Book Fridays and Saturdays early"]),
    section("Queensland, the Top End and the west", ["In Queensland, glamping is mostly rainforest and coast: Noosa's hinterland, the Daintree and the islands. In the Top End, Kakadu and Litchfield have tents and cabins that suit the dry season, May to October. In the west, Margaret River, Karijini and Ningaloo have eco tents and retreats.", "Remote sites charge more and book out early in the cooler months."], ["Dry season in the north", "Remote sites cost more", "Book the cooler months early"]),
    section("South Australia", ["The Barossa has vineyard stays, Kangaroo Island has tents among the wildlife, and the Flinders Ranges has retreats in the outback. Autumn and spring are the best times, with summer hot and the Flinders cold in winter."], ["Vineyards, wildlife, outback", "Spring and autumn are best", "Book school holidays early"]),
    section("Price and booking", ["Glamping costs more than a standard campsite, from the price of a good holiday park cabin up to several hundred dollars a night at remote or luxury sites. Prices rise in school holidays and in the high season, and many places set a two-night minimum on weekends.", "Read the cancellation terms and ask about weather policies, particularly in cyclone or fire season."], ["Cabin prices to several hundred", "Two-night minimums", "Check cancellation terms"]),
    { ...section("Plan the trip in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, with each place's facilities, fees and rules as the agency publishes them, and can show you where a basic night fits between glamping stays. You can filter by cost, save camps to a trip and see the driving distance between stops.", "Place details are saved on the phone for use without signal, while the map, routing and weather need a connection. AussieCamps runs on iPhone."], ["Fit a cheap night between stays", "Filter by cost", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Tourism Australia: camping and glamping", url: "https://www.australia.com/" },
    { label: "Visit NSW: camping and glamping", url: "https://www.visitnsw.com/" },
    { label: "Visit Victoria: camping", url: "https://www.visitvictoria.com/things-to-do/camping" },
    { label: "Tourism Western Australia: camping", url: "https://www.westernaustralia.com/" },
  ],
});
