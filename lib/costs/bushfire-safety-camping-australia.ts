import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What should campers do on a Catastrophic fire danger day?", "Leave bush fire risk areas the day before or early that morning. The national message for Catastrophic is \"For your survival, leave bush fire risk areas\", and in Victoria, Parks Victoria and DEECA close parks and state forests on days forecast as Catastrophic, cancelling and refunding the camping bookings."],
  ["Which app shows bushfire warnings in Australia?", "Each state runs its own: Hazards Near Me NSW, VicEmergency, Emergency WA, Alert SA and TasALERT. Queensland posts warnings on the Queensland Fire Department's current incidents map, the ACT on the ESA site and the Northern Territory on SecureNT. Set a watch zone for where you are camping, not only for home."],
  ["What is the difference between a fire danger rating and a warning?", "A fire danger rating is a forecast of how dangerous a fire would be if one started, from Moderate to Catastrophic. A warning is about a fire that is burning: Advice, Watch and Act or Emergency Warning. A Catastrophic day can have no fire at all, and an Advice warning can come on a Moderate day."],
  ["Will an overseas phone get emergency alerts in Australia?", "The AusAlert site says alerts reach visitors in the area and people roaming on their phone, as long as the device is compatible. Do not rely on it alone: install the state warning app and check it each morning while you are in fire country."],
] as const;

export default article({
  slug: "bushfire-safety-camping-australia", publishAt: "2026-11-11",
  title: "Bushfire Safety for Campers in Australia 2026-27: Ratings, Warnings and Apps",
  description: "What each fire danger rating means for a campsite, the three warning levels, the warning app for every state and when to leave. Checked November 2026.",
  category: "Rules & safety", region: "Australia",
  places: ["Fire danger ratings", "Warning apps", "Park closures", "Neighbourhood Safer Places"],
  imageAlt: "A roadside fire danger rating sign in New South Wales reading Your fire risk today is, with Moderate, High, Extreme and Catastrophic segments",
  intro: "Check two things each morning in fire season: the fire danger rating for your district and any warnings near your campsite. On an Extreme day, reconsider staying in bush or grass country; on a Catastrophic day, leave it the night before or early in the morning, because parks may close and help may not reach you. Warnings come from your state's app or website, not from a national one, so install the right app before you drive into the bush. We read each fire service's page on 3 November 2026.",
  related: ["campfires-camping-australia", "camping-weather-safety-australia", "christmas-summer-camping-australia-2026-27", "camping-without-phone-signal"],
  sections: [
    section("Fire danger ratings: what each level means at a campsite", ["The Australian Fire Danger Rating System uses the same four levels in every state, so the sign outside a country town and the forecast in an app mean the same thing. The rating is a forecast of how a fire would behave if one started that day, not a sign that a fire is burning.", "On a Moderate or High day most campsites stay open, but know how you would get out. From Extreme, the official message is to take action now, and the Northern Territory adds that travellers should reconsider travel through bush fire risk areas. Catastrophic means leave."], ["Same four levels in every state", "A rating is a forecast, not a fire", "Catastrophic means leave"], {
      caption: "Fire danger ratings and the official message for each, with what it means for a camper. Read 3 November 2026.",
      head: ["Rating", "Official message", "For a camper"],
      rows: [
        ["Moderate", "Plan and prepare", "Know the exits from your campground and where the nearest town is"],
        ["High", "Prepare to act", "Check warnings morning and evening, and keep the car packed and fuelled"],
        ["Extreme", "Take action now to protect your life and property", "Reconsider staying in bush or grassland; move to a town or the coast"],
        ["Catastrophic", "For your survival, leave bush fire risk areas", "Leave the night before or early in the morning; parks may close"],
      ],
    }),
    section("The 2026-27 outlook", ["AFAC's Seasonal Bushfire Outlook for spring 2026, last updated on 19 August 2026, shows increased fire potential in northern and southeastern New South Wales, south-east Queensland, northeastern Tasmania, large parts of the Northern Territory and parts of Victoria, South Australia and Western Australia. Dry soil, below-average rain and heavy fuel loads lie behind it.", "AFAC publishes a summer outlook each year, usually in late November. Read it before you lock in a January trip to forest country, and expect total fire bans and park closures to be likelier in the areas it marks."], ["Spring 2026: higher risk in parts of every state", "A summer outlook follows in late November", "Check it before booking forest sites"]),
    section("Warning levels: Advice, Watch and Act, Emergency Warning", ["When a fire is burning, the fire service issues a warning at one of three levels, each with an action such as \"Leave now\" or \"Shelter now\". The levels can be skipped: a fast fire can start at Watch and Act or Emergency Warning with no Advice first.", "Tasmania Fire Service, like every state, uses the Australian Warning System. Read the action in the warning and follow it straight away: when it says it is too late to leave, do not try to drive out through smoke."], ["Warnings can skip a level", "Follow the action in the warning", "Too late to leave means shelter"], {
      caption: "Australian Warning System levels for bushfires, from Tasmania Fire Service. Read 3 November 2026.",
      head: ["Level", "Colour", "What it means", "Typical actions"],
      rows: [
        ["Advice", "Yellow", "A fire has started; no immediate danger", "Stay informed, avoid the area"],
        ["Watch and Act", "Orange", "Conditions are changing and the threat is higher", "Prepare to leave, or leave now if you are not prepared"],
        ["Emergency Warning", "Red", "You may be in danger and must act now", "Leave immediately, or shelter now if it is too late to leave"],
      ],
    }),
    section("Warning apps and websites by state", ["There is no single national bushfire app. Install the app for each state you will camp in and set a watch zone on the campsite, because the app warns you about the places you choose, not only about your location.", "Phones also get government alerts. AusAlert, the national system that sends warnings to phones by cell broadcast, says this includes visitors to an area and people roaming on their phone, if the device is compatible. Treat it as a backup: in a valley with no signal, nothing arrives, so check the app before you lose coverage and carry an AM or FM radio for ABC emergency broadcasts."], ["One app per state", "Set a watch zone on the campsite", "Radio works when mobiles do not"], {
      caption: "Where each state and territory publishes bushfire warnings. Read 3 November 2026.",
      head: ["State or territory", "Warnings", "Fire service"],
      rows: [
        ["New South Wales", "Hazards Near Me NSW app", "NSW Rural Fire Service"],
        ["Victoria", "VicEmergency app and website", "CFA and Fire Rescue Victoria"],
        ["Queensland", "Current incidents map at fire.qld.gov.au", "Queensland Fire Department"],
        ["South Australia", "Alert SA app", "Country Fire Service"],
        ["Western Australia", "Emergency WA app and website", "Department of Fire and Emergency Services"],
        ["Tasmania", "TasALERT website", "Tasmania Fire Service"],
        ["Australian Capital Territory", "ESA website, Fires Near Me page", "ACT Emergency Services Agency"],
        ["Northern Territory", "SecureNT website", "NT Fire and Rescue Service and Bushfires NT"],
      ],
    }),
    section("When parks close", ["Victoria closes parks and forests on Catastrophic days. Parks Victoria says that on a forecast Catastrophic fire danger rating, it and DEECA close parks and forests, including state forests and national parks, for public safety. If you are already there, leave the night before or early in the morning, and do not wait for a sign or a personal warning, which may not come. On 9 January 2026, camping bookings for the closure were cancelled and refunded.", "Other states close parks area by area as conditions demand, and a closure can cover campgrounds, picnic areas and walking tracks. Each park agency lists closures and fire bans on the park's alerts page, so check it on the morning you plan to arrive, not only when you book."], ["Victoria closes parks on Catastrophic days", "Closures may not be signposted", "Check park alerts the same morning"]),
    section("If a fire starts near your campsite", ["Leave early, before the fire is close. Roads near a fire close quickly, smoke cuts visibility to a few metres, and a campground in forest is one of the worst places to be when the front arrives. Drive towards a town or cleared ground, never towards the smoke, and call Triple Zero (000) if you see a fire with no one attending to it.", "If you cannot leave, go to a place of last resort. In New South Wales these are Neighbourhood Safer Places, which the NSW Rural Fire Service describes as a place of last resort that does not guarantee your safety; other states keep similar lists. Find the nearest one when you arrive, not when the warning comes."], ["Leave before the fire is close", "Call 000 for an unattended fire", "Know the nearest place of last resort"]),
    { ...section("Plan around fire season in AussieCamps", ["AussieCamps puts campgrounds, rest areas and holiday parks on one map, so when a forest campground closes for a fire day, you can find a stay in the nearest town or on the coast and save it to your trip. Place details are saved on the phone, so you can still read a campsite's facilities without signal.", "The map, routing and weather need a connection, so check them and your state's warning app before you drive out of coverage. AussieCamps runs on iPhone."], ["Find a town or coast stay fast", "Details saved for no signal", "Check warnings before you lose coverage"]), cta: true },
  ],
  sources: [
    { label: "AFAC: Seasonal Bushfire Outlook, spring 2026", url: "https://afac.com.au/public-resources/seasonal-bushfire-outlook-spring-2026" },
    { label: "Tasmania Fire Service: the Australian Warning System explained", url: "https://www.fire.tas.gov.au/warning-system-explained/" },
    { label: "CFA: about fire danger ratings", url: "https://www.cfa.vic.gov.au/warnings-restrictions/fire-bans-ratings-and-restrictions/about-fire-danger-ratings/about-fire-danger-ratings" },
    { label: "SecureNT: fire danger ratings", url: "https://securent.nt.gov.au/prepare-for-an-emergency/fires/bushfires/fire-danger-ratings" },
    { label: "Parks Victoria: Catastrophic forecast park closures", url: "https://www.parks.vic.gov.au/get-into-nature/safety-in-nature/changed-conditions-and-closures/catastrophic-forecast-park-closures" },
    { label: "Parks Victoria: major park closures, Friday 9 January 2026", url: "https://www.parks.vic.gov.au/news/2026/01/08/01/55/Major-park-closures-Friday-9-January" },
    { label: "NSW Government: Hazards Near Me NSW", url: "https://www.nsw.gov.au/emergency/hazards-near-me-app" },
    { label: "NSW Rural Fire Service: Neighbourhood Safer Places", url: "https://www.rfs.nsw.gov.au/plan-and-prepare/neighbourhood-safer-places" },
    { label: "Queensland Government: tune in to bushfire warnings", url: "https://www.qld.gov.au/emergency/dealing-disasters/disaster-types/bushfires/bushfire-aware/tune-in-to-bushfire-warnings-and-local-conditions" },
    { label: "ACT Emergency Services Agency: Fires Near Me", url: "https://esa.act.gov.au/community-information/bushfires/fires-near-me/" },
    { label: "TasALERT: know your warnings", url: "https://alert.tas.gov.au/know-your-warnings" },
    { label: "AusAlert: what is AusAlert", url: "https://www.ausalert.gov.au/node/9" },
  ],
});
