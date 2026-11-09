import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What is the speed limit on Australian highways?", "Whatever the sign says, usually 100 or 110 km/h. Where there is no sign, the default outside built-up areas is 100 km/h in most states and 110 km/h in Western Australia and the Northern Territory. Parts of the Stuart, Barkly, Victoria and Arnhem highways in the Northern Territory are signed 130 km/h."],
  ["Do speeding fines reach tourists in hire cars?", "Yes. Camera fines go to the registered owner, which is the hire company. Tourism Australia says the company passes the fine on, and if you do not pay it the amount can come off your credit card or security bond, usually with the company's own fee added."],
] as const;

export default article({
  slug: "speed-limits-australia-visitors", publishAt: "2026-11-09",
  title: "Speed Limits in Australia 2026: Default Limits by State for Visitors",
  description: "Australian speed limits for visitors: 50 km/h in towns, 100 or 110 km/h on open roads, 130 km/h on parts of four NT highways, plus school zones, cameras and fines in a hire car.",
  category: "Rules & safety", region: "Australia",
  places: ["Northern Territory", "Western Australia", "School zones", "Hire cars"],
  imageAlt: "A 130 km/h speed limit sign beside a highway in the Northern Territory, with dry grass and scrub behind it",
  intro: "Where there is no sign, Australia's default speed limit is 50 km/h in a built-up area and 100 km/h outside one. Western Australia and the Northern Territory set the open-road default at 110 km/h, and the Northern Territory's built-up default is 60 km/h unless a town signs it lower. Signs override every default, school zones drop to 40 km/h or less at set times, and cameras are common, including average speed cameras that time you between two points. In a hire car the fine goes to the company, which passes it on to you. We read each state's road authority page on 9 November 2026.",
  related: ["australia-road-rules-state-differences", "driving-in-australia-road-rules-visitors", "australian-road-signs-visitors-guide", "campervan-driving-australia-safety-guide"],
  sections: [
    section("Default limits by state", ["A default limit applies on a road with no speed sign, or after an end speed limit sign. In New South Wales, a built-up area is one with street lights and buildings beside the road less than 100 m apart; most states use the same idea. The table sets out each default, with the limits that apply to learner and provisional drivers where a state publishes them.", "Visitors on a full overseas licence follow the same limits as local drivers. The lower learner and provisional limits apply to drivers on local L or P plates."], ["50 km/h in town, by default", "100 km/h outside, 110 in WA and the NT", "A sign always overrides"], {
      caption: "Default speed limits where no sign is posted. From each state and territory road authority, read 9 November 2026.",
      head: ["State", "Built-up area", "Outside built-up areas", "Also note"],
      rows: [
        ["New South Wales", "50 km/h", "100 km/h", "Learners and P1 drivers 90 km/h, P2 drivers 100 km/h"],
        ["Victoria", "50 km/h", "100 km/h", "Some freeways signed 110 km/h"],
        ["Queensland", "50 km/h", "100 km/h", "A few higher-standard roads signed 110 km/h"],
        ["South Australia", "50 km/h", "100 km/h", "Learners and provisional drivers may not use 110 km/h sections"],
        ["Western Australia", "50 km/h", "110 km/h", "WA posts its maximums on some roads into the state"],
        ["Tasmania", "50 km/h", "100 km/h sealed, 80 km/h unsealed", "Gravel roads are 80 km/h unless signed"],
        ["Northern Territory", "60 km/h, or lower where a town sets it", "110 km/h", "130 km/h on signed parts of four highways; learners 80, provisional 100"],
        ["Australian Capital Territory", "50 km/h", "100 km/h", "Signs set the limit on most roads"],
      ],
    }),
    section("Where 130 km/h is legal, and where it isn't", ["The Northern Territory is the only place in Australia with 130 km/h limits. The NT Government says some sections of the Barkly, Stuart, Victoria and Arnhem highways have a 130 km/h maximum, shown on signs, while heavy vehicles are held to 100 km/h. Everywhere else the highest posted limit is 110 km/h.", "A 130 sign is a maximum for good conditions, not a target. In a hire campervan, at dusk, or with kangaroos and cattle beside the road, 130 km/h leaves no time to stop. Hire agreements can add their own rules for remote roads, so read yours before a long Territory leg."], ["130 km/h only in the NT", "Four highways, signed sections only", "Not a target in a campervan"]),
    section("School zones and other low limits", ["Every state cuts speed around schools on school days, with the hours on the sign. New South Wales uses 40 km/h, marks zones with flashing lights and zigzag lines painted on the road, and fines speeding in a school zone more heavily. Victoria uses 30, 40 or 60 km/h depending on the road, with time-based zones from 8 to 9.30 am and 2.30 to 4 pm on weekdays in term time, but not on public holidays.", "South Australia is the exception to remember: drivers must slow to 25 km/h in a school zone whenever children are present, and when passing a school bus that has stopped to pick up or set down children. The Northern Territory uses 40 km/h at the times shown. Shared zones are 10 km/h in New South Wales, and you give way to people walking in them."], ["Read the times on the sign", "SA: 25 km/h when children are there", "Shared zones: 10 km/h"]),
    section("Speed cameras, including average speed cameras", ["Expect fixed cameras, mobile cameras in parked cars and vans, and cameras at traffic lights that also check speed. Transport for NSW says every mainland state and the ACT except New South Wales uses average speed cameras for both cars and heavy vehicles, timing you between two points on a highway. New South Wales has used them on trucks since 2010, and after a trial on two regional highways it is keeping them switched on for cars at those sites.", "A camera does not stop you, so the first you hear of it is the notice. New South Wales says learner and P1 drivers lose their licence for any speeding offence, and most states add demerit points as well as a fine. Several states, New South Wales among them, apply double demerit points over holiday periods."], ["Average speed cameras in most states", "Notices arrive by post", "Double demerits at holidays"]),
    section("Fines in a hire car or campervan", ["A camera fine goes to the registered owner of the vehicle. In a hire car or campervan that is the hire company, which nominates you as the driver. Tourism Australia says the fine is sent to your car hire company, and that if you do not pay it, it can come off your credit card or security bond.", "Most companies add an administration fee for handling each notice, so one camera can cost more than the fine. Keep the hire agreement until the bond is back, and check the card statement for a few weeks after you return the vehicle."], ["The fine follows the vehicle", "Expect an admin fee", "Watch your card after the trip"]),
    section("Driving below the limit", ["Queensland's rule of thumb holds everywhere: a posted limit is the maximum in good conditions, and rain, darkness or a hazard call for less. The same goes for gravel, which Tasmania limits to 80 km/h by default, and for a tall campervan in a crosswind.", "If you are towing a caravan, lower vehicle limits can apply on top of the posted one, and they differ by state. Slow down for roadworks, emergency vehicles with flashing lights and stock on the road, and pull over to let traffic past when a queue builds behind you."], ["Signs are a maximum", "Slower on gravel and in wind", "Let queues past"]),
    { ...section("Plan shorter legs in AussieCamps", ["Speed limits matter less when the day is short. Add your stops to a trip in AussieCamps and it shows the driving distance and time for each leg and the whole journey, so you can see where a day runs long and add a rest area or campground between.", "AussieCamps lists 5,552 rest areas and 1,838 campgrounds from road authorities and park agencies. Place details stay readable with no signal; the map, directions and weather need a connection. AussieCamps runs on iPhone."], ["Leg times before you drive", "Rest areas between towns", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "NSW Government: speed limits", url: "https://www.nsw.gov.au/driving-boating-and-transport/roads-safety-and-rules/safe-driving/speed-limits-and-cameras/speed-limits" },
    { label: "NSW Government: speeding offences and penalties", url: "https://www.nsw.gov.au/driving-boating-and-transport/demerits-penalties-and-offences/offences/speeding-offences-and-penalties" },
    { label: "Transport for NSW: average speed cameras", url: "https://www.transport.nsw.gov.au/roadsafety/topics-tips/speeding/enforcement-cameras/average-speed-cameras" },
    { label: "Transport Victoria: speed limits", url: "https://transport.vic.gov.au/road-and-active-transport/road-rules-and-safety/speed-limits" },
    { label: "Transport Victoria: school zones", url: "https://transport.vic.gov.au/road-and-active-transport/road-rules-and-safety/school-zones" },
    { label: "Queensland Government: speed limits", url: "https://www.qld.gov.au/transport/safety/rules/speed-limits" },
    { label: "My Licence SA: speed limits in the Driver's Handbook", url: "https://mylicence.sa.gov.au/roadrules/the-drivers-handbook/speed-limits" },
    { label: "My Licence SA: 25 km/h speed limits", url: "https://mylicence.sa.gov.au/roadrules/drive25" },
    { label: "Main Roads WA: speed zones and default limits", url: "https://www.mainroads.wa.gov.au/technical-commercial/technical-library/road-traffic-engineering/traffic-management/speed-zones/" },
    { label: "Department of State Growth Tasmania: speed limits", url: "https://www.transport.tas.gov.au/managing_the_roads/speed_limits_in_tasmania/about_speed_limits" },
    { label: "NT Government: speed limits", url: "https://nt.gov.au/driving/safety/speed-limits" },
    { label: "ACT Policing: speed limits", url: "https://police.act.gov.au/node/343" },
    { label: "Tourism Australia: driving in Australia", url: "https://www.australia.com/en/facts-and-planning/getting-around/driving-in-australia.html" },
  ],
});
