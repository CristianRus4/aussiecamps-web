import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Do I need a licence or to register a drone to fly it for fun in Australia?", "No. CASA says flying for fun needs no licence or accreditation, and registration of recreational drones over 250 g has been paused. You still have to follow CASA's safety rules, and the land manager's rules where you fly."],
  ["Can I fly a drone in a national park in Australia?", "Usually not. Parks Victoria, Parks and Wildlife Tasmania, the ACT, Kakadu and Uluru-Kata Tjuta do not allow recreational flying, NSW needs approval, and South Australia only considers permits for research and commercial filming. Western Australia is the exception: DBCA says visitors need no approval but must follow set conditions."],
  ["Can I fly a drone at a campsite in Queensland?", "No. Drones are prohibited in all camping areas in Queensland's national parks, recreation areas and forests. If you have one with you, keep it securely stored in a container in your vehicle."],
  ["How close can I fly a drone to people while camping?", "CASA says keep it at least 30 m from other people and never fly over anyone. A campground is a place where people gather, so even where a drone is allowed, there is rarely a spot to fly it."],
] as const;

export default article({
  slug: "can-i-fly-a-drone-while-camping-in-australia", publishAt: "2026-11-11",
  title: "Can I Fly a Drone in a National Park or Campsite? 2026",
  description: "Usually not. CASA allows flying for fun, but most park agencies ban drones or need approval, and Queensland bans them in camping areas. Rules by state, 2026.",
  category: "Rules & safety", region: "Australia",
  places: ["National parks", "Campgrounds", "Kakadu", "Uluru-Kata Tjuta"],
  imageAlt: "Placeholder: a drone in flight above an Australian coastline",
  intro: "It depends, but in a national park or park campground the answer is usually no. CASA lets you fly a drone for fun, and then the land manager decides: Victoria, Tasmania, the ACT, Kakadu and Uluru-Kata Tjuta do not allow recreational flying, NSW needs approval, and Queensland bans drones in all its camping areas.",
  related: ["camping-rules-queensland", "camping-rules-victoria", "responsible-camping-australia", "camping-rules-new-south-wales"],
  sections: [
    section("The short answer by state", ["CASA sets the national rules for flying a drone for fun. The park agency or land manager then adds its own, and those are usually stricter, so check the one for the park you are camping in."], ["CASA rules apply everywhere", "Parks add stricter rules", "Checked 2026-10-21"], {
      caption: "Recreational drone flying in parks and reserves, checked 21 October 2026.",
      head: ["State, territory or agency", "Recreational drone flying", "Source"],
      rows: [
        ["CASA (all of Australia)", "No licence, accreditation or registration needed for flying for fun; safety rules apply", "Civil Aviation Safety Authority"],
        ["New South Wales", "Approval needed from NPWS to launch, land or fly from within a park; none in Kosciuszko", "NSW National Parks and Wildlife Service"],
        ["Victoria", "Not allowed on Parks Victoria land; flyers may be fined", "Parks Victoria"],
        ["Queensland", "Prohibited in all camping areas in parks, recreation areas and forests, and in signed drone restriction areas", "Queensland Parks and Wildlife Service"],
        ["South Australia", "Offence without a permit in national parks and most reserves; permits only for research and commercial filming", "National Parks and Wildlife Service South Australia"],
        ["Western Australia", "No DBCA approval needed for recreational flying in parks, but conditions apply", "Department of Biodiversity, Conservation and Attractions"],
        ["Tasmania", "Not permitted on reserved land, including national parks", "Parks and Wildlife Service Tasmania"],
        ["Northern Territory", "Varies by park: some need a permit, some prohibit drones", "NT Government"],
        ["ACT", "Prohibited in nature conservation reserves, including Namadgi", "Parks and Conservation Service ACT"],
        ["Kakadu and Uluru-Kata Tjuta", "Prohibited; permits are not issued for recreational flying", "Parks Australia"],
      ],
    }),
    section("CASA's rules for flying for fun", ["CASA says you do not need a licence or accreditation to fly for fun, and that registration of recreational drones over 250 g is on hold. The rules that apply are these: fly no higher than 120 m above ground level, keep the drone in sight with your own eyes, fly only in daylight, and fly only one drone at a time.", "Keep the drone at least 30 m from other people and never fly over anyone. Do not fly in a populous area, which CASA defines as anywhere people are living or gathered for a purpose, and says includes parks, beaches, roads and festivals. A drone over 250 g must stay out of 5.5 km of a controlled airport, and you must not fly over or near emergency operations such as firefighting. CASA recommends checking a CASA-verified drone safety app before each flight."], ["120 m ceiling", "30 m from people", "Daylight, in sight, one drone"]),
    section("Parks where the answer is no", ["Parks Victoria says members of the public cannot fly drones for recreation on land it manages, and visitors who do may be fined. Tasmania's Parks and Wildlife Service says the operation and use of drones by visitors on reserved land, including national parks, is not permitted, with exceptions only for commercial and event filming and scientific research. In the ACT, flying a drone is prohibited in nature conservation reserves, and the Parks ACT Namadgi page says drones are not permitted there.", "In South Australia it is an offence to fly a drone over national parks, conservation parks, game reserves, recreation parks or regional reserves without a permit, and permits are considered only for scientific research and commercial filming or photography. Two Commonwealth parks go further. Kakadu prohibits drones except under a management plan or a park permit, and says permits are not issued for recreational use. Uluru-Kata Tjuta is a no-drone park where use is approved only in exceptional circumstances after consultation with the Central Land Council."], ["Victoria, Tasmania, ACT: no", "SA: permit, research and filming only", "Kakadu and Uluru: no recreational permits"]),
    section("Where you can ask for permission, or fly with conditions", ["In NSW, NPWS requires approval to launch, land or operate a drone from within a park for recreation. You apply with the NPWS form, first checking that the park is not a drone exclusion area, and NPWS may refuse or add conditions. Park alerts override any approval, and the Kosciuszko plan of management prohibits recreational drones across the whole park.", "In Western Australia, DBCA says recreational drone use in parks needs no department approval, provided you follow CASA's rules, do not disturb wildlife or other visitors, avoid emergency operations, and contact the district office before each flight. The Swan Canning Riverpark needs a separate permit. In the Northern Territory, some parks need an operation of aircraft permit, some prohibit drones, and a Territory permit is not valid in Kakadu or Uluru-Kata Tjuta."], ["NSW: apply first", "WA: call the district office", "NT: check each park"]),
    section("At the campsite itself", ["In Queensland, drones are prohibited in all camping areas in protected areas, recreation areas and forests, and QPWS says to keep any drone you have stored in a container in your vehicle or vessel. It is also an offence to fly one into a drone restriction area from outside it.", "Elsewhere, the park rules above apply to the campground as well, and a campground is a place where people gather, which makes CASA's 30 m and populous-area rules hard to meet. On other land, such as a holiday park or a private campground, ask the manager before you fly."], ["Queensland: keep it stored", "Campgrounds are crowded", "Ask the operator"]),
    section("What to do instead", ["Leave the drone in the vehicle and take photos from the ground, from lookouts and from walking tracks. If you want footage of a park where approval is possible, apply early: NSW requires approval before you launch, and an NT permit must come before you arrive.", "Parks Victoria and Tasmania's Parks and Wildlife Service both give disturbance to wildlife as a reason for their rules, and WA asks flyers not to disturb wildlife. If the answer is a clear no, the lawful option is to not fly."], ["Photos from lookouts", "Apply before you travel", "Stored drone is fine"]),
    { ...section("Check this rule at the place in AussieCamps", ["Each AussieCamps place page carries the land manager's facilities, fees and rules as the park agency publishes them, so you can read a campground's own notes before you arrive. The app lists 1,838 campgrounds and 745 national parks, and place details stay readable without signal. The map, weather and photos need reception, and AussieCamps runs on iPhone only.", "The app does not replace the official rule. Confirm with the park agency or land manager before you fly."], ["iPhone only", "Rules from the land manager", "Confirm before flying"]), cta: true },
  ],
  sources: [
    { label: "CASA: drone rules", url: "https://www.casa.gov.au/knowyourdrone/drone-rules" },
    { label: "CASA: flying in populous areas", url: "https://www.casa.gov.au/drones/drone-rules/flying-populous-areas" },
    { label: "NSW National Parks and Wildlife Service: drones in parks policy", url: "https://www.environment.nsw.gov.au/topics/parks-reserves-and-protected-areas/park-policies/drones-in-parks" },
    { label: "Parks Victoria: visitor safety tips", url: "https://www.parks.vic.gov.au/get-into-nature/safety-in-nature/visitor-safety-tips-in-parks" },
    { label: "Queensland Parks: camping legal requirements", url: "https://parks.qld.gov.au/camping/legal-requirements" },
    { label: "National Parks and Wildlife Service SA: drones and aircraft", url: "https://www.parks.sa.gov.au/permits-and-licences/drones-and-aircraft" },
    { label: "DBCA Explore Parks WA: drones in parks", url: "https://exploreparks.dbca.wa.gov.au/drones-parks" },
    { label: "Parks and Wildlife Service Tasmania: drones", url: "https://parks.tas.gov.au/explore-our-parks/know-before-you-go/drones-in-parks" },
    { label: "NT Government: permits to use aircraft and drones in parks", url: "https://nt.gov.au/parks/permits-for-parks/permits-to-use-aircraft-and-drones-in-parks" },
    { label: "Parks ACT: drones", url: "https://www.parks.act.gov.au/before-you-go/drones" },
    { label: "Kakadu National Park: permits", url: "https://kakadu.gov.au/plan/permits/" },
    { label: "Uluru-Kata Tjuta National Park: permits", url: "https://uluru.gov.au/plan/permits" },
  ],
});
