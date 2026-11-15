import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Where do you pick up a campervan in Sydney?", "Most hire companies have depots a short drive from Sydney Airport, around Mascot and the inner south, and some are further out. The depot is not in the terminal, so check the address on your booking and whether the company runs a shuttle."],
  ["Where should I sleep on the first night of a campervan trip from Sydney?", "Pick a camp within an hour or two of the depot so you are not driving tired after a long flight. Good first nights are Bonnie Vale in Royal National Park, Euroka Clearing in the Blue Mountains, the Hawkesbury River or a holiday park on the Illawarra coast."],
  ["Can I drive from Sydney to Byron Bay in a day?", "You can, but it is about 770 kilometres and a long day, so most campers split it into two or three. Our Sydney to Byron Bay guide has stops and camps along the Pacific Highway."],
  ["Do I need to pay tolls leaving Sydney?", "Often, yes. The motorways around Sydney are tolled and cashless, and your hire company usually passes the charges on, sometimes with a fee. Ask at pick-up how they are handled."],
] as const;

export default article({
  slug: "starting-campervan-trip-sydney",
  title: "Starting a Campervan Trip in Sydney: Pick-Up Day, First Night and Which Way to Go",
  description: "How to start a campervan trip in Sydney: pick-up depots near the airport, first-night camps within two hours, tolls, and whether to head north, south or west.",
  category: "Trip planning", region: "New South Wales",
  places: ["Mascot", "Bonnie Vale", "Euroka Clearing", "Wisemans Ferry", "Kiama", "Katoomba"],
  imageAlt: "The Sydney Harbour Bridge seen from Circular Quay",
  intro: "Most campervan trips in Australia start in Sydney, and the first day sets the tone. You collect the van from a depot near the airport, work out the controls, load up with food and gas, and then need somewhere to sleep that is not too far away. A good first night is short, easy and booked, because you may be tired from the flight and driving on the left. Here is how pick-up day works, where to spend the first night, and how to choose between north, south and west.",
  related: ["first-campervan-trip-australia", "camping-in-sydney", "sydney-3-days-campervan", "toll-roads-australia-hire-car-campervan", "sydney-to-byron-bay-drive", "sydney-south-coast-camping"],
  sections: [
    section("Pick-up day", ["Campervan depots in Sydney are mostly in the industrial areas around Mascot and the inner south, a short drive or shuttle from the airport. A few companies are further out, so check the address on your booking before you leave the terminal. Most hand over vans in the morning, and the paperwork, the walk-around and the briefing take an hour or more.", "Take your driver's licence, your passport and the booking details. Photograph every scratch with the staff, check the spare tyre, the gas bottle and the water, and ask how the bed, the power and the toilet work before you drive away. Our first campervan trip guide has a longer checklist."], ["Check the depot address, not the airport", "Photograph existing damage", "Ask how everything works before you leave"]),
    section("Before you leave the depot", ["Buy groceries, water and gas before you head out of town. The suburbs around the depots have large supermarkets and service stations, and prices go up in smaller towns. Fill the water tank if you can, and set up the navigation with the height of the van in mind.", "Drive on the left and take it slowly for the first hour. A campervan is wider and taller than a car, so give yourself extra room at corners, in car parks and under low bridges, and avoid peak hour if you can."], ["Shop before you leave the city", "Know the van's height", "Avoid peak hour on day one"]),
    section("First night: camps within an hour or two", ["The best first-night camps are close enough to reach by mid-afternoon and quiet enough to recover from the flight. Bonnie Vale campground in Royal National Park is about an hour south, with showers, powered sites and a beach. Euroka Clearing in the Blue Mountains is about an hour west, in the bush, with kangaroos and a quiet evening.", "On the Hawkesbury River, Wisemans Ferry and the river parks make a green first night an hour or so north. On the south coast, holiday parks at Kiama and Wollongong are within about two hours. Book ahead for weekends and school holidays, because the best camps fill up."], ["Choose a camp within 2 hours", "Book weekends ahead", "Arrive before dark"], {
      caption: "First-night camps within an hour or two of the Sydney depots.",
      head: ["Camp", "Direction", "Roughly from Mascot", "Good for"],
      rows: [
        ["Bonnie Vale, Royal National Park", "South", "About 1 hour", "Bush and beach, showers, powered sites"],
        ["Euroka Clearing, Blue Mountains", "West", "About 1 hour", "Bush camp, kangaroos, a quiet start"],
        ["Wisemans Ferry area", "North-west", "About 1 hour 15 minutes", "River setting"],
        ["Kiama and Wollongong holiday parks", "South", "About 1 hour 30 minutes", "Showers, powered sites, the coast"],
        ["Katoomba holiday parks", "West", "About 1 hour 45 minutes", "A mountain base, lookouts"],
      ],
    }),
    section("Tolls and leaving town", ["Most motorways leaving Sydney are tolled, including the M5 south and the M4 and M7 on the west and north-west. Tolls are cashless, so the hire company usually passes them on, sometimes with a handling fee. Ask at pick-up, and see our toll roads guide for how a visitor pays.", "Leaving by a toll-free route often adds only a few minutes outside peak hour, and it avoids a bill with fees. Plan the first stretch of road in advance, because the signs come fast in a big city."], ["Cashless tolls on most motorways", "Ask about hire company fees", "Plan the first stretch"]),
    section("Which way to go: north", ["The Pacific Motorway and Pacific Highway north lead to the Central Coast, Newcastle, Port Stephens, Coffs Harbour and on to Byron Bay. It is about 770 kilometres to Byron Bay, so plan two or three days with stops on the way.", "Our Sydney to Byron Bay guide covers the route, the tolls and the camps, and our Byron Bay camping guide covers where to stay when you arrive. It is the classic first trip, and it suits a one-way hire."], ["About 770 km to Byron Bay", "Two to three days with stops", "A one-way hire suits it"]),
    section("Which way to go: south and west", ["South, the Princes Highway leads through Wollongong, Kiama, Jervis Bay and Batemans Bay to the Sapphire Coast. Our Sydney south coast camping guide covers beach and forest camps, and the hills behind the coast add a loop if you have time.", "West, the Great Western Highway climbs to the Blue Mountains and on to Bathurst and Dubbo. Our Blue Mountains camping weekend guide covers the campgrounds, and it is the shortest option if you only have a few days."], ["Sapphire Coast to the south", "Blue Mountains to the west", "Pick by how many days you have"]),
    section("What to book before you go", ["Book the first and second nights before you land, and the camps for any long weekend or school holiday. Powered sites and national park campgrounds sell out well ahead, and campers who arrive without a booking in peak season often end up driving a long way.", "After that, leave some room for change. Weather, a good beach or a tired driver can change a plan, and Australian roads are long. Our campervan driving guide covers size, safety and the rules."], ["Book night one and two", "Peak season fills", "Leave room for change"]),
    { ...section("Plan the first nights in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points and holiday parks around Sydney, with each place's facilities, fees and rules as the agency publishes them. Save the first nights to a trip, add a to-do list for pick-up day and see the driving route with distance and time for each leg.", "Holiday parks listed by BookEasy can be booked from the app, and national park campgrounds are booked with the park agency. AussieCamps runs on iPhone and is free to download, with in-app purchases."], ["Route with time for each leg", "Dump points and rest areas", "No account and no ads"]), cta: true },
  ],
  sources: [
    { label: "NSW National Parks: Bonnie Vale campground", url: "https://www.nationalparks.nsw.gov.au/camping-and-accommodation/campgrounds/bonnie-vale-campground" },
    { label: "NSW National Parks: camping and accommodation", url: "https://www.nationalparks.nsw.gov.au/camping-and-accommodation" },
    { label: "Transport for NSW: tolls", url: "https://www.transport.nsw.gov.au/roads/tolls" },
    { label: "Destination NSW: plan a trip", url: "https://www.visitnsw.com/" },
  ],
});
