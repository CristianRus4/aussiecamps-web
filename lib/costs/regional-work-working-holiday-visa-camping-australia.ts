import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What is regional work for a second working holiday visa?", "Backpackers on a Working Holiday visa (subclass 417) or Work and Holiday visa (subclass 462) can qualify for a second or third year by doing a set number of days of specified work in a regional area. The Department of Home Affairs lists the industries, regions and days."],
  ["Where can I camp while doing regional work?", "Many farms, caravan parks and rural towns offer camping or cheap sites for workers, and some employers provide accommodation. Check the rules for the property and the local council."],
  ["Do I need a campervan for regional work?", "Not always, but it gives you freedom to move between work sites and cut accommodation costs. A van also helps if work is spread across a wide area."],
  ["Which areas count as regional?", "The Department of Home Affairs publishes a list of postcodes. Check the postcode of the work place against the current list before you start, because the rules change."],
] as const;

export default article({
  slug: "regional-work-working-holiday-visa-camping-australia",
  title: "Regional Work for a Second or Third Working Holiday Visa: Camping and Living on the Road in 2026",
  description: "How backpackers camp and live in a van while doing regional work for a second or third working holiday visa in Australia: where to stay, what to check, harvest seasons and planning the route.",
  category: "Trip planning", region: "Australia",
  places: ["Queensland", "Victoria", "New South Wales", "Western Australia", "Tasmania"],
  imageAlt: "A backpacker's campervan parked beside an orchard in rural Australia",
  intro: "A second or third working holiday visa in Australia depends on doing specified work in a regional area, and many backpackers do it from a van or a tent. Camping cuts costs and gives you freedom to follow the work, but the farms, regions and rules matter more than the campsite. Here the focus is the camping and travel side. The visa rules themselves come from the Department of Home Affairs and change, so check them before you commit.",
  related: ["first-two-weeks-working-holiday-australia", "buying-a-campervan-australia-working-holiday", "best-apps-working-holiday-australia", "working-holiday-road-trip-budget-australia-2026", "selling-a-campervan-australia-before-you-leave", "camping-fees-australia-2026"],
  sections: [
    section("What counts as regional work", ["The Department of Home Affairs lists the industries, such as plant and animal cultivation, fishing, forestry, mining and construction, and the regional postcodes where the work counts. For a second or third year you need to complete a set number of days of specified work, and the rules differ by visa type and year, so read the official page before you start.", "Because the rules change, check the current list of eligible postcodes and industries and keep payslips and employer details. This guide does not repeat them in detail."], ["Check the official list", "Keep payslips and records", "Rules change"]),
    section("Where to sleep while you work", ["Many farms offer camping, cheap caravan sites or accommodation to workers, and some regional towns have caravan parks with long-stay or weekly rates. Others expect you to find your own place, so ask before you accept the job.", "Free camping near a work site is often restricted by local councils and signs, so read the rules rather than assume. The overnight rest area guide and the camping rules guides explain what is allowed, and a caravan park is often the safer choice for a long stay."], ["Ask the employer first", "Caravan parks for long stays", "Check council rules for free camps"]),
    section("Harvest seasons and routes", ["Work follows the seasons: fruit and vegetable picking is busiest in different regions at different times of year, and a route that follows the harvest can keep you in work. Popular regions include Queensland's Bundaberg and Bowen, the Riverland and Sunraysia on the Murray, the Goulburn Valley, Tasmania and the south-west of Western Australia.", "A van gives you flexibility to move from one harvest to the next. Plan fuel and camps for each leg, and the road trip fuel and budget guides cover the costs."], ["Follow the harvest", "Plan fuel and camps for each leg", "A van gives you flexibility"]),
    section("Budget and vehicle", ["Your costs are the vehicle, fuel, camping and food, and the working holiday budget guide covers them. If you are buying a campervan for the year, the buying and selling guides cover registration, inspection and resale.", "Keep a small buffer for repairs, and sell the van before you fly home so you are not left with it."], ["Vehicle, fuel, camping and food", "Keep a repair buffer", "Plan the sale early"]),
    { ...section("Plan the route in AussieCamps", ["AussieCamps lists 1,838 campgrounds, 5,552 rest areas and 1,393 dump points from park agencies, road authorities and public datasets, and each place page shows the facilities those sources publish. Build a trip as ordered stops with dates and notes and it shows the distance, drive time and forecast for each leg, which helps when you move between work sites.", "The iPhone app is free to download, with in-app purchases."], ["Add each stop in order", "Notes for each work site", "Free to download"]), cta: true },
  ],
  sources: [
    { label: "Department of Home Affairs: Working Holiday visa (subclass 417)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417" },
    { label: "Department of Home Affairs: Work and Holiday visa (subclass 462)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462" },
    { label: "Wikipedia: Working holiday visa", url: "https://en.wikipedia.org/wiki/Working_holiday_visa" },
  ],
});
