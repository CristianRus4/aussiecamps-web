import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can I drive a 2WD hire campervan on unsealed roads in Australia?", "Generally not. Britz says its 2WD campers cannot be driven on unsealed roads, apart from well-maintained access roads under 12 kilometres to recognised commercial campgrounds or major attractions."],
  ["What happens if I take a hire campervan on a road it is banned from?", "Britz says driving into a restricted area without permission may void the liability option, and Jucy says its excess reduction cover does not apply on an unsealed road. You would pay for any damage yourself."],
  ["Is the Gibb River Road a 4WD road?", "It is mostly unsealed, and road condition signs at its junctions list closed sections and recommend four wheel drive on the Kalumburu Road. A 2WD hire campervan is not allowed on it under the contracts read."],
  ["Can a hire campervan drive on K'gari (Fraser Island)?", "Not a 2WD one. Queensland Parks says K'gari's sand tracks suit only high clearance 4WD vehicles with low range, and a vehicle access permit is needed."],
] as const;

export default article({
  slug: "can-i-drive-a-2wd-hire-campervan-on-4wd-roads-in-australia", publishAt: "2026-12-19",
  title: "Can I Drive a 2WD Hire Campervan on 4WD Roads in Australia? 2026",
  description: "No. Hire contracts ban 2WD campers from unsealed roads beyond short campground access roads, and some roads are 4WD only. What is banned and what to hire instead.",
  category: "Rules & safety", region: "Australia",
  places: ["Gibb River Road", "K'gari", "Outback tracks", "Sealed highways"],
  imageAlt: "Road condition signs for the Gibb River Road and Kalumburu Road in the Kimberley, Western Australia, noting that four wheel drive is recommended",
  intro: "No. The hire contracts read ban 2WD campervans from unsealed roads, apart from a short access road to a recognised campground, and breaking the rule can void your damage cover. Some famous roads are 4WD only as well, so a 2WD camper stays on sealed highways such as the Stuart Highway and Eyre Highway. The pages below were read on 28 October 2026, and your own contract is the final word.",
  related: ["can-i-drive-on-the-beach-in-australia", "gibb-river-road-camping", "campervan-hire-cost-australia-2026", "campervan-driving-australia-safety-guide"],
  sections: [
    section("What hire companies say", ["Hire contracts are stricter than the law. A 2WD campervan can be driven on a gravel road by any licensed driver, but the hire company decides where its vehicle may go, and the contract decides who pays if something breaks."], ["Contract beats road rules", "Read the clause before you book", "Ask if unsure"], {
      caption: "Unsealed road rules in three hire companies' help pages, read 28 October 2026.",
      head: ["Company", "What its page says"],
      rows: [
        ["Britz", "2WD campers cannot be driven on unsealed roads, except well-maintained access roads under 12 kilometres long to recognised commercial campgrounds or major tourist attractions. Driving into restricted areas without permission may void the liability option."],
        ["Jucy", "Excess reduction cover does not apply if you drive on an unsealed road. Off-road conditions include fire trails, beaches, sand, tracks, fields and paddocks. Reasonable use of access roads to recognised commercial campgrounds is the carve-out."],
        ["Spaceships", "Vehicles are used on sealed roads, and closed or restricted roads are out unless authorised in writing."],
      ],
    }),
    section("What counts as unsealed", ["An unsealed road is any road not sealed with a hard surface such as bitumen, tar or concrete. That includes graded gravel and dirt roads that a family sedan could drive, which is why a hire contract can ban a road that looks easy.", "The short access road to a recognised commercial campground is the usual exception, and the limit differs by company, so ask before you rely on it for a free camp or a farm gate."], ["Gravel counts as unsealed", "Access roads have a length limit", "Free camps and farm gates may not qualify"]),
    section("Roads that are 4WD only or close to it", ["Some roads fail a 2WD vehicle before any contract applies. On K'gari, Queensland Parks says the sand tracks are rough and suit only high clearance 4WD vehicles with low range, all-wheel drive is not recommended, and a vehicle access permit must be bought before you go.", "The Gibb River Road in Western Australia is mostly unsealed, and the road condition signs at its junctions show closed sections and recommend four wheel drive on the Kalumburu Road. Outback roads such as the Oodnadatta Track and the Birdsville Track are also unsealed, so a 2WD hire campervan is out of bounds on them, and the guide to the Queensland Outback Way covers a long outback route in detail."], ["K'gari: high clearance 4WD and a permit", "Gibb River Road: mostly unsealed", "Outback tracks count as unsealed"]),
    section("Beaches and sand", ["Driving on a beach is a separate rule, and the hire contracts list beaches as off limits for 2WD campers. The beach driving guide covers where driving on sand is legal and which permits apply.", "A 4WD hire vehicle has its own terms, so read the one for the vehicle you actually book rather than assuming the 2WD rules carry over."], ["Beaches are banned for 2WD hire", "4WD hire has its own terms", "Permits apply in addition"]),
    section("What to do instead", ["Stay on sealed highways. The Stuart Highway, the Eyre Highway across the Nullarbor and the Great Ocean Road are sealed, and the drive guides on this site cover many sealed routes in detail.", "If the trip needs an unsealed road, hire a vehicle that the company allows on it, or book a tour. Ask for the permission in writing, because a verbal yes at pick-up is hard to prove later."], ["Sealed highways for 2WD", "Hire a 4WD or take a tour", "Get permission in writing"]),
    { ...section("Check road type in AussieCamps", ["AussieCamps carries 1,838 campgrounds and 5,552 rest areas from park agencies and road authorities, and a place page lists the access notes the agency publishes, such as 4WD-only tracks. Trips show the driving distance and time between stops.", "Place details open without reception, while the map, routing and weather need signal. It runs on iPhone only and does not label every road as sealed or unsealed, so confirm the road with the hire company before you go."], ["Access notes from agencies", "Trips with distances", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Britz: restrictions on where you can drive a 2WD campervan in Australia", url: "https://help.britz.com/support/solutions/articles/5000681599-are-there-restrictions-on-where-we-can-drive-a-2wd-campervan-in-australia-" },
    { label: "Jucy: help page on Kangaroo Island, unsealed roads and excess reduction cover", url: "https://helphub.jucy.com/en/articles/6648005-kangaroo-island" },
    { label: "Spaceships: what kind of roads can we drive on?", url: "https://faq.spaceshipsrentals.com.au/content/what-kind-of-roads-can-we-drive-on-sealed-unsealed-dirt-roads-or-where-can-we-drive" },
    { label: "Queensland Parks: K'gari, getting there and getting around", url: "https://parks.qld.gov.au/parks/kgari-fraser/visiting-safely/getting-there-and-getting-around" },
  ],
});
