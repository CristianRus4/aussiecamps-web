import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free in South Australia?", "Yes. South Australia lets you camp on Crown land without approval for up to 21 days, and some councils run free or low-cost camps along the River Murray, on the Eyre and Yorke peninsulas and in country towns. National park campsites are not free and must be booked before you arrive."],
  ["What is Crown land camping in SA?", "Unallocated Crown land is state land not set aside for a park or another use. You can camp on it for up to 21 days without approval, keeping vehicles on established tracks and without collecting firewood. Misusing it can bring a $315 expiation."],
  ["Can I free camp along the Murray in South Australia?", "In many places, yes. Long stretches of the riverbank are Crown land or council reserve, and several river councils run free or cheap camping areas. Others are private or banned, so read the sign at each track and check the council's page first."],
  ["Where is free camping banned in South Australia?", "Wherever a council or land manager says so. The Barossa Council, for example, prohibits camping or overnight stays in any public reserve, car park, road or rest area in its region, and people found camping can be fined on the spot."],
] as const;

export default article({
  slug: "free-camping-south-australia", publishAt: "2026-11-09",
  title: "Free Camping in South Australia 2026: Crown Land, the Murray and Council Camps",
  description: "Where to camp for free in South Australia: 21 days on Crown land, River Murray camps, cheap council sites on the peninsulas, rest areas, and the councils that ban it.",
  category: "Camping guides", region: "South Australia",
  places: ["River Murray", "Eyre Peninsula", "Yorke Peninsula", "Crown land", "Barossa"],
  imageAlt: "A campfire burning beside reeds and kayaks at a riverside campsite on the River Murray, South Australia",
  intro: "Yes, South Australia is one of the better states for free camping. Unallocated Crown land is open to campers for up to 21 days without approval, and long stretches of the River Murray are Crown land or council reserve with free riverside camps. Councils on the Eyre and Yorke peninsulas and in country towns run free or cheap sites, often on an honesty box. National park campsites are never free, though, and some councils, such as the Barossa, ban camping on public land altogether.",
  related: ["camping-rules-south-australia", "is-free-camping-legal-australia", "flinders-ranges-camping-guide", "kangaroo-island-camping-guide", "best-free-camping-apps-australia"],
  sections: [
    section("Crown land: up to 21 days", ["South Australia has a rule most states do not: you can camp on unallocated Crown land for up to 21 days without asking anyone. The Department for Environment and Water asks campers to keep vehicles on established tracks, collect no firewood and leave the land as they found it.", "The hard part is knowing the land is Crown land. A fence, a gate or a sign usually means it is private or reserved for another use, and pastoral leases are not open camping. The Department for Environment and Water or the local council can tell you, and misusing Crown land can bring a $315 expiation."], ["21 days without approval", "Stay on established tracks", "No firewood collecting"], {
      caption: "Where you can camp for free in South Australia, and the main limit at each.",
      head: ["Where", "Cost", "Stay", "Watch for"],
      rows: [
        ["Unallocated Crown land", "Free", "Up to 21 days", "Not pastoral leases or private land"],
        ["River Murray reserves and council camps", "Free or a small fee", "Set by the council", "Each stretch has its own manager"],
        ["Peninsula council camps", "Free or an honesty box", "Set by the council", "Bring water; facilities are basic"],
        ["Rest areas", "Free", "Follow the sign", "Some councils ban overnight stays"],
        ["National parks", "Booked fee", "Booked stay", "Never free; Desert Parks Pass in the far north"],
      ],
    }),
    section("The River Murray", ["The river from the Victorian border to Lake Alexandrina is South Australia's favourite free camping country. Much of the bank is Crown land or council reserve, and the river councils run camping areas among the red gums, some free and some for a small fee, with sandy landings for a boat or kayak.", "Each stretch has its own manager, so a free bend can sit beside a private shack block or a no camping reserve. Read the sign at every track entry and check the council's page. The Riverland has fruit fly controls, so buy produce from accredited shops rather than roadside stalls."], ["Red gum bends, free or cheap", "Read the sign at each track", "Riverland fruit fly rules"]),
    section("Eyre and Yorke peninsulas", ["The councils of the Eyre Peninsula and Yorke Peninsula manage a long chain of coastal camps, from beach clearings to sheltered bays. Many charge a few dollars a night through an honesty box or a permit bought online, and a few are free. Facilities are basic: a drop toilet if any, no water and no power.", "These camps suit self-sufficient travellers who carry water and take their rubbish out. Stay limits are set by each council, and some sites close in fire season or over winter, so check before you drive a long dirt road to reach one."], ["Honesty boxes are common", "Carry all your water", "Check fire season closures"]),
    section("Rest areas and the councils that say no", ["South Australia has 391 roadside rest areas in AussieCamps, and the rules on sleeping in them follow the sign and the local council. Where no sign or council rule prohibits it, keep it to a night in the vehicle, not a camp set up for days.", "Some councils ban it outright. The Barossa Council says camping or overnight stays are prohibited in any public reserve, car park, road or rest area in its region, and people found camping can face an on-the-spot fine. Around Adelaide and the wine regions, plan on a caravan park or a booked campground."], ["Follow the rest area sign", "Barossa: no overnight stays", "Book near Adelaide"]),
    section("Parks are booked, not free", ["Almost every national park campsite must be booked and paid before you arrive, up to 12 months ahead, and a booking usually covers vehicle entry to that park. Ikara-Flinders Ranges sites start at $12.30 a night, so a park night stays cheap when no free site is close.", "In the far north, the Desert Parks Pass covers 12 months of entry and camping in the desert parks, and the Simpson Desert parks close every year from 1 December to 15 March. Most parks do not allow dogs, which makes Crown land and council camps the choice with a pet."], ["Book park sites ahead", "Ikara-Flinders from $12.30", "Most parks exclude dogs"]),
    section("Fire season and the border", ["The Fire Danger Season is set by district and in 2026-27 starts on 15 October in the Flinders, Eastern Eyre, West Coast and pastoral districts and on 1 November in the South East, Murraylands and Riverland, running into April. During it, a campfire must sit in a trench 30 cm deep with 4 metres cleared around it, and on a Total Fire Ban day no campfire may be lit at all.", "Crossing into the state, fruit fly host fruit and vegetables must be eaten or binned before the border, and from 1 July 2026 the fine for carrying them is up to $423. Restock once you are across."], ["Fire season from 15 October", "Total Fire Ban: no campfires", "Bin fruit before the border"]),
    { ...section("Find free camps in AussieCamps", ["AussieCamps maps 115 South Australian park campgrounds, 391 roadside rest areas and 199 public dump points, each with the facilities and fees the agency publishes. You can filter by cost, including free sites, and save camps to a trip with dates and notes.", "Place details are saved on the phone for use without signal, which helps on the peninsulas and along the river. The map, routing and weather need a connection, and AussieCamps runs on iPhone."], ["391 rest areas", "Filter by cost", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Department for Environment and Water: accessing Crown land", url: "https://www.environment.sa.gov.au/topics/crown-land/accessing-crown-land" },
    { label: "National Parks and Wildlife Service SA: booking FAQ", url: "https://www.parks.sa.gov.au/book-and-pay/frequently-asked-questions" },
    { label: "National Parks and Wildlife Service SA: camping essentials", url: "https://www.parks.sa.gov.au/know-before-you-go/camping-essentials" },
    { label: "SA Country Fire Service: fire danger season dates", url: "https://www.cfs.sa.gov.au/warnings-restrictions/restrictions/fire-danger-season-dates-permits/" },
    { label: "Barossa Council: camping", url: "https://www.barossa.sa.gov.au/recreation-and-venues/camping" },
    { label: "SA Country Fire Service: what you can and cannot do", url: "https://www.cfs.sa.gov.au/warnings-restrictions/restrictions/what-can-i-do/" },
  ],
});
