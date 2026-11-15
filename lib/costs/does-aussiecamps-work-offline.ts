import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can I search AussieCamps with no phone signal?", "Yes. The place directory is inside the app, so search, filters and place details open with no signal. There is nothing to download first."],
  ["What needs a connection in AussieCamps?", "The services that fetch live information: map imagery, weather, directions, Street View, photos and booking or provider pages. They return when you are back in range."],
  ["Should I carry a map for remote driving?", "Yes. The place details, saved places and trips are on your phone, while the map imagery loads over a connection. For remote country, carry a paper map or download the area in your maps app before you leave."],
] as const;

export default article({
  slug: "does-aussiecamps-work-offline", publishAt: "2026-12-25",
  title: "Does AussieCamps Work Offline? What Needs Signal and What Doesn't",
  description: "AussieCamps keeps every place's details, your saved places and your trips on your iPhone with no signal. Here is what still needs a connection.",
  category: "App guides", region: "Australia",
  places: ["No phone signal", "Place details", "Saved trips", "Remote driving"],
  imageAlt: "Remote Anne Beadell Highway west of Emu",
  intro: "Yes, the part of AussieCamps you use to choose a campsite works with no signal. The place directory sits inside the app, so search, filters, place details, saved places, collections and trips all stay readable out of range. Live services such as weather, directions and Street View need a connection, so here is how to split your planning between the two.",
  related: ["camping-without-phone-signal", "does-wikicamps-work-offline", "aussiecamps-place-details", "how-to-plan-trip-aussiecamps", "best-weather-apps-camping-australia"],
  sections: [
    section("What stays readable with no signal", ["Every place's details are on your phone from the first time you open the app: names, categories, descriptions, fees, amenities, opening hours and conditions. Search and the filters work the same way, so you can still find a toilet block, a water point or a dog-friendly camp when the bars are gone.", "Your own planning travels with you too. Saved places, collections and trips open with their stops, dates and notes, and there is no download step to remember before you leave town."], ["Search and filters work", "Place details are on the phone", "Saved places and trips open"]),
    section("What needs a connection", ["A few things are fetched live, so they wait for signal: the map imagery, the weather, directions, Street View, photos and the booking or provider pages some places link to.", "None of this stops you choosing a stay. It just means the picture on screen may be thin out bush, so do the live checks in the last town with reception."], ["Map imagery and photos", "Weather and directions", "Street View and booking pages"], {
      caption: "What to expect in AussieCamps when you are out of range.",
      head: ["With no signal", "What you get"],
      rows: [
        ["Search, filters and sorting", "Work as normal"],
        ["Place details and fees", "Readable"],
        ["Saved places, collections and trips", "Readable"],
        ["Weather and directions", "Need a connection"],
        ["Map imagery, Street View and photos", "Need a connection"],
        ["Booking and provider pages", "Need a connection"],
      ],
    }),
    section("Plan and save before the last bar", ["Make the last town with reception a checkpoint. Open your next few stops, check the weather and add anything you want to the trip, then save a backup place for each night in case a road or a site is closed.", "Put gate codes, booking numbers and arrival notes into each stop's note while you can still look them up. Notes are yours, so they open with no signal."], ["Use the last town as a checkpoint", "Save a backup for each night", "Put codes in the stop notes"]),
    section("Back up the live parts", ["Take a screenshot of the directions for any leg you cannot afford to miss, and one of the weather for the next day or two. Screenshots open with no signal, so they cover most of what the live services would have shown.", "For remote country, add a paper map, or download the area in your maps app before you go, and leave your route and an expected check-in time with someone at home."], ["Screenshot key directions", "Screenshot tomorrow's forecast", "Carry a paper map", "Tell someone your plan"]),
    { ...section("Plan your signal-free stops in AussieCamps", ["Open AussieCamps at home, build the trip and save the places along your route. It has no account to sign in to and no ads, and it runs on iPhone.", "Before you settle in, read the sign at the site and check with the land manager, because on-the-ground conditions come first."], ["Build the trip at home", "Nothing to sign in to", "The sign at the site comes first"]), cta: true },
  ],
  sources: [
    { label: "Parks Australia: Plan your visit", url: "https://parksaustralia.gov.au/" },
    { label: "Bureau of Meteorology: Weather and warnings", url: "https://www.bom.gov.au/" },
    { label: "Geoscience Australia: Topographic maps", url: "https://www.ga.gov.au/" },
  ],
});
