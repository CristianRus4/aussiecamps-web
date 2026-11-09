import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp for free near Adelaide?", "Yes, within a few hours. South Australia lets you camp on unallocated Crown land for up to 21 days without approval, and councils along the River Murray and on the Yorke and Fleurieu peninsulas run free or cheap camps. Camping in Adelaide itself is not allowed."],
  ["Can I camp in the Adelaide Hills?", "In booked park campgrounds, yes. The Barossa Council bans camping or overnight stays in public reserves, car parks, roads and rest areas, so do not assume a quiet spot is fine."],
  ["Where is the closest free camping to Adelaide?", "River Murray camps at the Riverland end of the Murraylands, and council camps on the Yorke Peninsula, are the nearest, about two to three hours away."],
  ["Can I sleep in a campervan in Adelaide?", "Not on the street or in parks in most council areas. Use a caravan park or holiday park on the city's edge as your base."],
] as const;

export default article({
  slug: "free-camping-near-adelaide", publishAt: "2026-11-09",
  title: "Free Camping Near Adelaide: Crown Land, the Murray and Peninsula Camps",
  description: "Where to camp for free near Adelaide: 21 days on Crown land, River Murray camps, cheap peninsula council sites and the councils that ban it.",
  category: "Camping guides", region: "South Australia",
  places: ["River Murray", "Yorke Peninsula", "Fleurieu Peninsula", "Adelaide Hills", "Barossa"],
  imageAlt: "Hahndorf Caravan Park, South Australia",
  intro: "Adelaide is a good city to camp near. South Australia lets you camp on unallocated Crown land for up to 21 days without approval, long stretches of the River Murray have free riverside camps, and councils on the Yorke and Fleurieu peninsulas run free or low-cost sites. In Adelaide, the Adelaide Hills and the Barossa the rules are stricter, so use a holiday park for the city and keep the free nights for the country.",
  related: ["camping-rules-south-australia", "flinders-ranges-camping-guide", "kangaroo-island-camping-guide", "adelaide-to-melbourne-drive", "caravan-park-vs-holiday-park"],
  sections: [
    section("Crown land and the 21-day rule", ["South Australia's unallocated Crown land is open to campers for up to 21 days without approval. Keep vehicles on established tracks, collect no firewood and leave the land as you found it. A fence, a gate or a sign usually means it is not Crown land.", "In Adelaide and its hills, camping in parks, on beaches and on streets is banned, and misuse of the Crown land rule can bring an expiation of $315."], ["Up to 21 days on Crown land", "Stay on tracks, no firewood", "Not in the city"], {
      caption: "Where you can stay near Adelaide, how far it is, and the main limit.",
      head: ["Where", "Drive from the CBD", "Cost", "Main limit"],
      rows: [
        ["Unallocated Crown land", "2 to 4 hours", "Free", "Not private or pastoral land"],
        ["River Murray camps", "1.5 to 3 hours", "Free or a small fee", "Each stretch has its own manager"],
        ["Peninsula council camps", "2 to 4 hours", "Free or an honesty box", "Basic; bring water"],
        ["National park campgrounds", "1 to 3 hours", "Booked fee", "Never free"],
        ["Rest areas", "Along the highways", "Free", "Some councils ban overnight stays"],
      ],
    }),
    section("The River Murray", ["The river from the Victorian border to Lake Alexandrina is South Australia's favourite free camping country. Much of the bank is Crown land or council reserve, and the river councils run camping areas among the red gums, some free and some for a small fee.", "Each stretch has its own manager, so a free bend can sit beside a banned one. Read the sign at every track."], ["Free riverside camps", "Each stretch differs", "Read the sign"]),
    section("Yorke and Fleurieu peninsulas", ["The Yorke Peninsula, an easy drive from Adelaide, has a long chain of council coastal camps, many on an honesty box. The Fleurieu has beach and bush camps and the booked park sites at Deep Creek.", "Facilities are basic: a drop toilet if any, no water, no power. They suit self-sufficient travellers."], ["Honesty box camps", "Bring water", "Self-sufficient"]),
    section("The councils that say no", ["Some councils ban free camping outright. The Barossa Council, for example, prohibits camping or overnight stays in public reserves, car parks, roads and rest areas across its region, and on-the-spot fines follow.", "When there is no sign, check the council page before you stay."], ["Barossa bans it", "On-the-spot fines", "Check the council page"]),
    section("Fire season", ["The Fire Danger Season starts in October or November depending on district and runs into April. On a Total Fire Ban day no campfire may be lit, and during the season fires must be in a trench with a cleared area around them.", "Check the CFS before you light anything."], ["Season: October to April", "Trench and cleared area", "No fire on ban days"]),
    { ...section("Find camps near Adelaide in AussieCamps", ["AussieCamps maps 115 South Australian park campgrounds, 391 roadside rest areas and 199 public dump points, each with the facilities and fees the agency publishes. You can filter by cost, including free sites, and save camps to a trip with dates and notes.", "Place details are saved on the phone for use without signal, while the map, routing and weather need a connection. AussieCamps runs on iPhone."], ["Filter by cost", "Rest areas and dump points", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Department for Environment and Water: accessing Crown land", url: "https://www.environment.sa.gov.au/topics/crown-land/accessing-crown-land" },
    { label: "National Parks and Wildlife Service SA: camping", url: "https://www.parks.sa.gov.au/" },
    { label: "SA Country Fire Service: fire danger season", url: "https://www.cfs.sa.gov.au/" },
    { label: "Barossa Council: camping", url: "https://www.barossa.sa.gov.au/recreation-and-venues/camping" },
  ],
});
