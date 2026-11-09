import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free near Sydney?", "Not in Sydney itself, but within two or three hours there are free options: state forests such as Belanglo and the Watagans, a few council camps in country towns, and rest areas for a night in the vehicle. Camping in city parks, beaches and streets is banned and councils fine for it."],
  ["Is it legal to sleep in a campervan in Sydney?", "Usually not on the street or in a park. Councils across Sydney sign against overnight camping, and rangers and parking officers do patrol popular beaches and car parks. A holiday park is the safe base for the city itself."],
  ["Where is the nearest free camping to Sydney?", "Belanglo State Forest in the Southern Highlands and the forests of the Watagans near Lake Macquarie are the usual picks, both roughly two hours away. Check Forestry Corporation's page for closures first."],
  ["What should I do with a campervan for a few days in Sydney?", "Park it at a caravan park on the edge of the city and use trains and ferries to get in. Driving a van into the CBD and finding overnight parking is slow, tolled and expensive."],
] as const;

export default article({
  slug: "free-camping-near-sydney", publishAt: "2026-11-09",
  title: "Free Camping Near Sydney: Where to Stay for Free Within a Few Hours",
  description: "Where to camp for free near Sydney: state forests, council camps and rest areas within two or three hours, why the city itself is off limits, and what to do instead.",
  category: "Camping guides", region: "New South Wales",
  places: ["Belanglo State Forest", "Watagans", "Blue Mountains", "Southern Highlands", "Hunter Valley"],
  imageAlt: "Three Sisters, Blue Mountains",
  intro: "You cannot camp for free in Sydney itself, but you do not have to go far. Within two or three hours the state forests of the Southern Highlands, the Watagans and the ranges allow free camping with no booking, and country councils on every side run free or cheap camps for travellers. In the city, parks, beaches and streets are signed against overnight stays, so the plan is to base yourself at a holiday park, then head out for the free nights.",
  related: ["camping-rules-new-south-wales", "can-i-camp-in-a-state-forest-in-australia", "blue-mountains-camping-weekend", "sydney-south-coast-camping", "can-i-sleep-in-a-campervan-in-the-city-in-australia"],
  sections: [
    section("Why Sydney itself is off limits", ["Greater Sydney is covered by dozens of councils, and almost all of them sign against camping and overnight stays in parks, on beaches, in car parks and on streets. Rangers patrol the popular spots, particularly in summer, and an on-the-spot fine is the usual result of a night in the van beside the beach.", "Sydney Harbour National Park and the other national parks inside the city have no vehicle camping either. The workable options are a holiday park or a caravan park at the edge of town, then a drive out to the free camps."], ["No camping in parks or on beaches", "Fines are common in summer", "Base at a holiday park"], {
      caption: "Where you can stay near Sydney, how far it is, and the main limit.",
      head: ["Where", "Drive from the CBD", "Cost", "Main limit"],
      rows: [
        ["Belanglo State Forest", "About 1 hour 45 minutes", "Free", "Basic; check closures and fire bans"],
        ["Watagans state forest", "About 2 hours", "Free", "Fills on long weekends; no booking"],
        ["Blue Mountains national park campgrounds", "About 2 hours", "Booked fee", "Book ahead; no dogs"],
        ["Country council camps", "2 to 4 hours", "Free or a small fee", "Each council sets the stay limit"],
        ["Rest areas", "Along the highways", "Free", "One night in the vehicle; none if signed"],
      ],
    }),
    section("State forests an easy drive away", ["Forestry Corporation of NSW lets you camp in its state forests for free, with no booking, for up to four weeks. Belanglo, in the Southern Highlands, has a free camping area that suits a weekend out of the city, and the Watagans, west of Lake Macquarie, have camping and picnic areas under tall trees.", "Both are first come, first served, so on a long weekend arrive early or have a second forest in mind. Facilities are basic: a toilet and tables if you are lucky. Bring your own water and take every bag of rubbish out. Dogs are welcome in state forests if kept under control."], ["Free for up to four weeks", "No booking, first come", "Bring water, take rubbish out"]),
    section("The Blue Mountains and the national parks", ["The Blue Mountains and Wollemi have campgrounds a couple of hours from Sydney, but they are booked and paid, not free, and dogs are not allowed in NSW national parks. They are worth it for the scenery, and they give a legal, safe night at the price of a booking fee.", "If you have a weekend, our Blue Mountains guide covers where to stay and how to plan it. For the south, the Sydney south coast guide covers beach and forest camps from Wollongong to Eden."], ["Parks are booked, not free", "No dogs in national parks", "Book weekends early"]),
    section("Country council camps", ["Many towns within a few hours of Sydney, in the Hunter, the Central West and the Southern Tablelands, run free or low-cost camps on a riverside reserve or the edge of town. Some take only self-contained vehicles with a toilet on board, some ask for a donation, and the stay limit is on the sign.", "Showgrounds are the other cheap standby: a modest fee for toilets, hot showers and sometimes power, except when an event is on."], ["Read the stay limit", "Some need a toilet on board", "Showgrounds have showers"]),
    section("Rest areas and the roadside", ["Rest areas along the Hume, Pacific, Newell and Great Western highways are built for driver fatigue. Treat one as a place to sleep in the vehicle for a night, not a campsite: no awning, no chairs out across the grass, no second night.", "Where a sign says no overnight stays, drive on to the next town or forest. Our guide to sleeping at a rest area explains the rules state by state."], ["One night in the vehicle", "Keep truck bays clear", "A sign against it means go"]),
    section("Fire, weather and long weekends", ["The NSW bush fire danger period runs from 1 October to 31 March, and on a Total Fire Ban day no fire may be lit in the open. State forests also declare their own fire bans, which allow gas cooking only. Check the RFS rating each morning in summer.", "Long weekends and school holidays are when free camps near Sydney fill. Go midweek, arrive before lunch, and keep a booked national park or holiday park night as the fallback."], ["Fire danger: 1 October to 31 March", "Gas cooking only on ban days", "Arrive early on long weekends"]),
    { ...section("Find free camps near Sydney in AussieCamps", ["AussieCamps maps 372 NSW national park campgrounds, 869 roadside rest areas and 347 public dump points, each with the facilities, fees and rules the agency publishes. You can filter by cost, including free sites, save the ones you like to a trip and see the driving distance between stops.", "State forest camping areas are not in the app yet, so use Forestry Corporation's pages for those. Place details are saved on the phone for use without signal, while the map, routing and weather need a connection. AussieCamps runs on iPhone."], ["Filter by cost", "Rest areas and dump points", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Forestry Corporation of NSW: camping and picnics", url: "https://www.forestrycorporation.com.au/visit/activities/camping-and-picnics" },
    { label: "NSW National Parks: camping", url: "https://www.nationalparks.nsw.gov.au/camping-and-accommodation" },
    { label: "NSW Rural Fire Service: fire danger ratings and total fire bans", url: "https://www.rfs.nsw.gov.au/fire-information/fdr-and-tobans" },
    { label: "Destination NSW: Sydney and surrounds", url: "https://www.visitnsw.com/destinations/sydney-and-surrounds" },
  ],
});
