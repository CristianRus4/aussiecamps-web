import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free in a tent in Australia?", "Yes, but in fewer places than most people expect. State forests, some free national park and reserve camps, a handful of council camps and some Crown land allow tents. Most roadside rest areas do not, because they are for a short rest or for self-contained vehicles."],
  ["Can I pitch a tent at a rest area?", "Usually not. Rest areas are there so drivers can break a trip, and many signs allow overnight stays only in a vehicle or limit the stay to a night. Pitching a tent, setting up chairs or lighting a fire is often what gets a site closed, so read the sign and move on if it does not mention tents."],
  ["Is bush camping in a state forest really free?", "In many forests, yes. New South Wales, Victoria and Tasmania all have forest camps with no fee and no booking, though you bring your own water and carry out your rubbish. Rules change with fire danger, logging and floods, so check the forest manager before you go."],
  ["Do I need a permit to camp on Crown land?", "Often you do, and sometimes it is not allowed at all. Rules differ by state and by the type of land, so ask the land manager rather than assuming a paddock or a beach is open. Camping on leasehold, farmland or Aboriginal land needs the permission of whoever holds it."],
] as const;

export default article({
  slug: "free-camping-with-a-tent-australia",
  title: "Free Camping With a Tent in Australia: Where It Is Allowed in 2027",
  description: "Where you can pitch a tent for free in Australia: why most rest areas say no, and how state forests, park camps, council camps and Crown land differ by state.",
  category: "Camping guides", region: "Australia",
  places: ["State forests", "Crown land", "Council free camps", "National park camps", "Rest areas"],
  imageAlt: "Tent, sleeping bag and backpack at an Australian campground",
  intro: "You can camp for free in a tent in Australia, but not at most of the free stops you see listed. A lot of free camping is built around rest areas and town stopovers for self-contained vehicles, and tents are often not allowed there. Your best free tent nights are in state forests, a few free park camps, some council camps and a little Crown land. This guide goes through each one, state by state, and what each asks of you.",
  related: ["is-free-camping-legal-australia", "can-i-camp-in-a-state-forest-in-australia", "can-i-stay-overnight-at-a-rest-area-in-australia", "free-camping-new-south-wales", "free-camping-victoria", "campervan-vs-car-and-tent-australia"],
  sections: [
    section("Why so many free camps say no to tents", ["Free camping in Australia grew up around vehicles. Councils and road authorities set up rest areas, town stopovers and dump points for caravans, campervans and cars, and the rules usually say the vehicle is the bed. Staying in a tent looks like camping, and camping is what many of those signs rule out.", "The other reason is toilets. A site with no toilet and no bin is only workable for a vehicle with its own, so tents and groups are the ones moved on first. That is why a tent camper needs to look for places that were set up for camping rather than for stopping."], ["Vehicle stops often rule out tents", "A sign saying rest does not mean camp", "Look for sites made for camping"]),
    section("The places that do allow tents", ["State forests are the best free option in the south-east: bush camps with a fire ring at best and a long-drop toilet if you are lucky. Some national parks and reserves keep a free camp or two, usually remote, and some country councils run a free camp at a park, showground edge or river reserve that takes tents as well as vans.", "Crown land and some public land in the outback can be used for bush camping where the state allows it, often with a permit or a pastoral lease owner's say. Treat any bare paddock with suspicion until you know who looks after it."], ["State forests first", "A few free park camps", "Council camps vary town to town"], {
      caption: "Where a tent can go, and what to watch for.",
      head: ["Where", "Tents?", "Cost", "Main limit"],
      rows: [
        ["State forest camps", "Yes, in most", "Free", "Bring water; fire and logging closures"],
        ["Free national park and reserve camps", "Yes, where signed", "Free", "Few sites; often remote"],
        ["Council free camps", "Check the sign", "Free or a few dollars", "Some say self-contained only"],
        ["Crown land and bush camps", "Depends on the state", "Free, sometimes a permit", "Know who manages the land"],
        ["Roadside rest areas", "Usually no", "Free", "A stop, not a campground"],
      ],
    }),
    section("State by state", ["New South Wales and Victoria have the most forest camping: look for Forestry Corporation camps in NSW and Parks Victoria and state forest camps in Victoria, many of them free. Tasmania has free council and forest camps, while Queensland is mostly paid national park camps with a smaller number of free spots, often at rest areas and small town camps.", "Western Australia is the tight one: most legal camps are paid, and free camping is mostly in designated rest areas and some council camps. South Australia has free council camps in the outback and a pastoral system with permits, and the Northern Territory allows stays at some rest stops but tents are not welcome at many. The state rules guides spell out the details."], ["NSW and Victoria: forest camps", "WA: mostly paid camps", "Check the state rules guide"], {
      caption: "A rough guide to tent camping by state.",
      head: ["State or territory", "Free tent options", "Where it gets harder"],
      rows: [
        ["New South Wales", "State forests, a few park camps", "Rest areas rarely allow tents"],
        ["Victoria", "State forest and park camps", "Coast and towns restrict camping"],
        ["Queensland", "Some free camps and rest areas", "Parks mostly booked and paid"],
        ["Tasmania", "Council, forest and reserve camps", "Check closures and fire rules"],
        ["South Australia", "Council camps and some bush sites", "Crown land and pastoral permits"],
        ["Western Australia", "A few council and park camps", "Most camps paid; rest areas limited"],
        ["Northern Territory", "Some rest stops, 24 hours", "Crocodiles and wet season"],
      ],
    }),
    section("What to do at a free tent camp", ["Arrive with everything you need: water, a toilet plan, a stove if fires are banned and a bag for your rubbish. A free forest camp has no host and no bin, so the place stays good only if everyone takes their mess away. Camp on the hard flat ground already used rather than creating a new patch.", "Keep an eye up as well as down. Check for dead branches over the tent, avoid creek beds if rain is forecast and keep food away from the tent in places with possums, dingoes or snakes."], ["Carry water and a toilet kit", "Use existing campsites", "Check for dead branches and flood paths"]),
    section("Fire, weather and when it closes", ["Free camps are the first to close in fire season and after storms. Total fire ban days usually mean no fires and no stoves in many places, and forests close during bad weather. Look at the land manager's page the morning you go, not last week.", "Summer in the south brings fire and heat, winter in the south brings cold and mud, and the tropical north is in its wet season from about November to April. Spring and autumn are the safest months for a tent."], ["Check closures on the day", "Summer fire bans", "Spring and autumn are easiest"]),
    { ...section("Find tent-friendly camps in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them, plus photos, weather and Street View. Use the Cost filter set to Free, and add Popular features such as toilets or drinking water to narrow it down.", "Save camps to collections, build a trip with Add stop and see the driving distance and time for each leg, with dates, notes and weather per stop. The whole directory sits inside the app, so search, filters and place details work with no signal. There is no account and no ads, and it runs on iPhone. Read the sign at the site and check with the land manager before you pitch."], ["Cost filter set to Free", "Filter by toilets or drinking water", "Works with no signal"]), cta: true },
  ],
  sources: [
    { label: "Forestry Corporation NSW: camping in state forests", url: "https://www.forestrycorporation.com.au/visit/camping" },
    { label: "Parks Victoria: camping", url: "https://www.parks.vic.gov.au/" },
    { label: "NSW National Parks: camping", url: "https://www.nationalparks.nsw.gov.au/" },
    { label: "Tasmania Parks and Wildlife Service", url: "https://parks.tas.gov.au/" },
    { label: "Queensland Parks and Forests: camping", url: "https://parks.desi.qld.gov.au/" },
  ],
});
