import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Is the tap water safe to drink at Australian campsites?", "At a caravan or holiday park on town water, yes. At a bush campground, only if the tap is signed as drinking water. Many park taps are fed from tanks, bores or creeks and carry a sign saying not for drinking."],
  ["How do I make campground water safe to drink?", "Bring it to a rolling boil for a minute, or filter and treat it, if you are using water that is not signed as drinking water. Boiling kills the germs that cause gastro, but it does not remove chemicals or salt, so do not use water from a bore that smells or tastes wrong."],
  ["How much water should I carry in the outback?", "More than seems sensible. Plan on at least 4 litres a person a day for drinking alone in hot weather, and extra for cooking and washing, plus a reserve in case the vehicle breaks down. Remote stretches can run a day or more between taps."],
  ["Where can I refill drinking water on the road?", "Most towns have a public tap or a park with a drinking water point, caravan parks usually sell refills, and many rest areas and campgrounds have signed taps. Always read the sign, because untreated tank water looks the same as safe water."],
] as const;

export default article({
  slug: "can-i-drink-the-water-at-australian-campsites", publishAt: "2026-11-17",
  title: "Can I Drink the Water at Australian Campsites?",
  description: "Town water is safe, but many campground taps are not for drinking. How to read the sign, treat questionable water, carry enough in the outback and refill on the road.",
  category: "Rules & safety", region: "Australia",
  places: ["Caravan parks", "National park campgrounds", "Rest areas", "Outback roads"],
  imageAlt: "Camping equipment and drinking-water containers",
  intro: "It depends on the tap. Town water at a holiday or caravan park is safe to drink, but a lot of bush campgrounds run on tank, bore or creek water, and those taps are often signed not for drinking. The sign is the answer, and when there is no sign, treat the water as untreated. Below is how to read a campsite tap, how to make doubtful water safe, how much to carry in remote country and where to fill up.",
  related: ["camping-water-planning", "responsible-camping-australia", "dump-points-australia-guide", "camping-weather-safety-australia", "australia-road-trip-fatigue-wildlife-safety", "best-dump-point-toilet-apps-australia"],
  sections: [
    section("Read the sign, not the tap", ["A tap is not proof of drinking water. Campground taps are often fed from rainwater tanks, bores or nearby creeks, and a sign will say if the water is not for drinking. Treat a missing sign as a no, or ask the ranger, the caretaker or the park's information page.", "Water that is fine for washing dishes or showering can still make you sick if you swallow it. Some campgrounds also supply water that has not been treated for taste, so the safest approach is to carry your own drinking water into a bush camp and use the tap for washing."], ["A tap is not a guarantee", "Signs say drinking or not for drinking", "No sign means treat it as untreated"], {
      caption: "What the water usually is at different camps.",
      head: ["Where", "What to expect", "What to do"],
      rows: [
        ["Caravan or holiday park", "Town water, usually safe to drink", "Drink it, or ask at reception"],
        ["National park campground", "Signed drinking water at some, tank or creek water at others", "Read the sign, carry your own"],
        ["Rest area or roadside stop", "Often no water, or tank water not for drinking", "Do not rely on it"],
        ["Free camp or state forest", "No water, or untreated creek", "Carry all you need, or treat it"],
        ["Remote outback tap or bore", "May be salty, bore fed or unsigned", "Treat as untreated, carry a reserve"],
      ],
    }),
    section("Making doubtful water safe", ["If you have to use water that is not signed as drinking water, the common methods are boiling, filtering and chemical treatment. A rolling boil for a minute kills the germs that cause gastro, including giardia, and it is the simplest option when you have a stove. A filter helps with cloudy water and some parasites, and treatment tablets are a light backup for walks.", "Boiling does not remove chemicals, salt or dissolved minerals. If a bore tastes salty or smells strange, do not drink it, however well you treat it."], ["Boil for a minute, then let it cool", "Filters help with cloudy water", "Boiling does not remove salt or chemicals"]),
    section("Carrying water in remote country", ["On the outback highways, the gap between taps can be a full day or more, and the heat does the rest. Plan on at least 4 litres a person a day for drinking in hot weather, plus water for cooking and washing, and add a reserve in case the vehicle breaks down and you have to wait. Western Australia's park agency gives the same advice for remote travel: carry extra water and expect no phone signal.", "Keep the water in several containers rather than one, so a split tank does not leave you dry, and store it out of direct sun. If the vehicle stops, stay with it, because it is easier to find than a person on foot. Our water planning guide has a longer checklist."], ["At least 4 litres a person a day", "Carry a reserve for a breakdown", "Stay with the vehicle if you stop"]),
    section("Where to refill", ["Most towns have a public tap or a park with a drinking water point, and caravan parks will often let you fill containers for a small fee. Many rest areas and national park campgrounds have signed taps, but tank supplies run low in dry spells, so do not count on the last tap on your route.", "Top up at every sensible opportunity on a remote route, before the long stretches rather than after. And do not wash dishes or rinse your toothbrush in a creek, since soap and food scraps pollute the water others drink."], ["Fill up before the long stretches", "Ask caravan parks about refills", "Keep soap out of creeks"]),
    section("Staying well on the road", ["Water-borne illness is one of the more common ways a camping trip goes wrong, and it is nearly always preventable. Wash your hands before eating and after the toilet, keep drinking water containers clean and covered, and use treated water to brush your teeth when you are unsure of the supply.", "If someone gets stomach cramps or diarrhoea, keep them drinking small amounts of safe water and seek advice if it does not settle or if they are very young, elderly or unwell."], ["Wash hands before eating", "Keep water containers covered", "Seek advice if symptoms persist"]),
    { ...section("Find water points in AussieCamps", ["AussieCamps lists water points as well as campgrounds, national parks, rest areas, dump points and toilets, from official sources, with each place's facilities, fees and rules as the land manager publishes them. Use the Popular features filter to look for drinking water, and set the Cost filter to Free to include public water points.", "The whole directory is inside the app, so search, filters and place details work with no signal. There is no account and no ads, and it runs on iPhone. Check the sign at the tap and the land manager before you drink."], ["Filter for drinking water", "Works with no signal", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "Explore Parks WA: travelling to remote locations", url: "https://exploreparks.dbca.wa.gov.au/travelling-remote-locations" },
    { label: "Queensland Government: camping", url: "https://www.qld.gov.au/recreation/activities/camping" },
    { label: "Healthdirect: giardiasis", url: "https://www.healthdirect.gov.au/giardiasis" },
    { label: "Parks and Wildlife Service Tasmania", url: "https://parks.tas.gov.au/" },
  ],
});
