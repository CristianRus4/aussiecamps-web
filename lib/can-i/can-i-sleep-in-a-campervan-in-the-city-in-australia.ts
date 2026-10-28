import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can I sleep in my campervan on a city street in Australia?", "Usually not. Brisbane's local law makes it illegal to camp overnight in a vehicle on a road, and Darwin regulates camping in a motor vehicle or campervan in public spaces. Other cities set the rule council by council, so read the signs."],
  ["Is it legal to sleep in a car in Australia?", "There is no national ban. The RAA says South Australia has no state law against it, but most councils there have by-laws that stop people sleeping overnight in parks and car parks."],
  ["When can I sleep in a vehicle in Brisbane?", "Brisbane lists exceptions for managing fatigue, personal safety and emergencies, in signed areas, and in tourist accommodation such as caravan parks and camping grounds. Outside those, camping overnight in a vehicle on a road is illegal."],
  ["What is the cheapest legal place to park a campervan near a city?", "A caravan park or holiday park gives you a legal site and facilities for a published nightly price. Some councils and showgrounds also run low-cost overnight areas for self-contained vehicles, so ask the local council."],
] as const;

export default article({
  slug: "can-i-sleep-in-a-campervan-in-the-city-in-australia", publishAt: "2026-12-18",
  title: "Can I Sleep in a Campervan in the City in Australia? Capital City Rules 2026",
  description: "Usually not on the street. Brisbane and Darwin ban it in public places, Perth needs approval, and councils elsewhere set the rule. Capital city rules, 2026.",
  category: "Rules & safety", region: "Australia",
  places: ["Capital cities", "Holiday parks", "City streets", "Council car parks"],
  imageAlt: "Cars parked at the kerb on High Street in Fremantle, Western Australia, at dusk",
  intro: "Usually not on the street. Brisbane makes it illegal to camp overnight in a vehicle on a road, Darwin regulates camping in a motor vehicle or campervan in public spaces, and Perth needs approval to camp in a caravan on land that is not a caravan park. Elsewhere the council sets the rule, so a legal bed in a city means a holiday park or a signed overnight area. The pages below were read on 28 October 2026.",
  related: ["sleeping-in-car-australia", "can-i-stay-overnight-at-a-rest-area-in-australia", "is-free-camping-legal-australia", "caravan-park-vs-holiday-park"],
  sections: [
    section("What the main cities say", ["Australia has no single rule for sleeping in a campervan in a city. Councils write local laws and by-laws, and the answer changes at each council boundary. The table shows what each official source says."], ["Councils decide", "Look for signed areas", "Holiday parks are the safe answer"], {
      caption: "Sleeping in a vehicle in capital cities, from council and official pages read 28 October 2026.",
      head: ["City", "What the source says", "Source"],
      rows: [
        ["Brisbane", "Illegal to camp overnight in a vehicle on a road, including footpaths, road shoulders and reserves. Exceptions for fatigue, personal safety, emergencies, signed areas and tourist accommodation.", "Brisbane City Council, Health, Safety and Amenity Local Law 2021"],
        ["Darwin", "Camping in public spaces is regulated under a by-law that covers sleeping in a motor vehicle, campervan, caravan or tent. Rangers can issue on-the-spot fines.", "City of Darwin"],
        ["Perth", "Approval may be needed to camp or occupy a caravan on land that is not a caravan park or camping ground.", "City of Perth, via business.gov.au"],
        ["Adelaide", "South Australia has no state law against sleeping in a car, but most councils have by-laws that stop it in parks and car parks. Signs may or may not be posted.", "RAA"],
        ["Canberra", "Camping on public unleased land without a permit is an offence, with a maximum of 20 penalty units.", "ACT Government"],
        ["Sydney, Melbourne and Hobart", "No single city-wide answer was found on the official pages read. The rule comes from each council's local law and parking signs.", "Check the council"],
      ],
    }),
    section("Why cities say no", ["A kerbside bed in a suburb is camping in a public place for most council laws, and councils use those laws to keep streets, beaches and parks for residents. Rangers patrol the busy spots, and the penalty is usually an on-the-spot fine, and in Darwin unattended camping gear can be impounded.", "The state road rules and the council's rules are separate. A space you can legally park in for the day may still be a place you may not camp in overnight."], ["Local laws, not road rules", "Rangers patrol hotspots", "A legal park is not a legal bed"]),
    section("The exceptions that exist", ["Brisbane's page names the cases it allows: managing fatigue, personal safety, an emergency, a designated signed area, or tourist accommodation such as a caravan park. Fatigue is a real reason to stop, and the RAA recommends a designated rest stop or a caravan park for a nap.", "A fatigue stop is short and in the right place. It is not a way to stay the night in a city street, and a ranger who finds you there will judge it on the signs and the time."], ["Fatigue is an exception", "Emergencies are an exception", "Signed areas are an exception"]),
    section("Legal places to sleep near a city", ["A holiday park or caravan park inside or near the city is the plain answer, with a legal site and showers for a nightly price you can compare before you book. The guide to holiday park prices shows what the published tariffs look like.", "Councils and showgrounds sometimes run signed overnight areas for self-contained vehicles, and rest areas on the highways outside the city follow the road authority's rule. The rest area guide covers those, and the free camping guide covers where free camping is legal."], ["Holiday park near the centre", "Ask the council about overnight areas", "Rest areas outside the city"]),
    section("If a ranger knocks", ["Be polite, move on when asked and keep the vehicle's papers to hand. Penalties are set by the council, and a hire company will pass a fine on to the hirer.", "Photograph any sign at the spot, because a sign decides what the local law allows. If you slept somewhere that turned out to be banned, do not argue at 2am: drive to a legal site and sort out any fine afterwards."], ["Move on when asked", "Photograph the sign", "Hire companies pass on fines"]),
    { ...section("Plan the legal nights in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 5,552 rest areas from park agencies and road authorities, and holiday parks from BookEasy that you can book in the app. Put each night's place into a trip and the app shows the driving distance and time between them.", "Place details are kept on the phone and open without reception, and the map, routing and weather need signal. It is made for iPhone, and city street rules are not in its data, so read the sign and the council's page."], ["Holiday parks to book", "Trips with distances", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Brisbane City Council: camping on a road", url: "https://www.brisbane.qld.gov.au/laws-and-permits/local-laws/camping-on-a-road" },
    { label: "City of Darwin: regulating camping in public places", url: "https://www.darwin.nt.gov.au/council/laws-and-by-laws/camping-in-public-places" },
    { label: "business.gov.au: approval to camp or occupy a caravan, City of Perth", url: "https://ablis.business.gov.au/service/wa/approval-to-camp-or-occupy-a-caravan-city-of-perth/35633" },
    { label: "RAA: is it legal to sleep in your vehicle?", url: "https://samove.raa.com.au/is-it-legal-to-sleep-in-your-car/" },
    { label: "ACT Legislation: Public Unleased Land Act 2013", url: "https://www.legislation.act.gov.au/a/2013-3/current/pdf/2013-3.pdf" },
  ],
});
