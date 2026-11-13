import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can two people share a trip in AussieCamps?", "Partly. One person keeps the trip and sends the other a readable itinerary with every stop, date, distance and forecast. There is no live shared trip that both of you edit yet, so re-send the itinerary after a change."],
  ["Does AussieCamps sync between phones?", "Yes, between iPhones signed in to the same Apple Account with iCloud turned on. Saved places, collections, pins and trips sync privately through iCloud. Phones on different Apple Accounts do not sync with each other."],
  ["How do I send my camping itinerary to someone?", "Open the trip in AussieCamps, tap share and pick Messages, WhatsApp, email or another app. The other person receives the trip as plain text, with each stop's arrival time, the distance to the next stop and the weather."],
  ["Do I need an account to share a trip?", "No. AussieCamps has no account at all. Sharing goes through your iPhone's own share sheet, so the trip leaves through whichever messaging or email app you choose."],
  ["Can my partner see the trip without the app?", "Yes. The itinerary is plain text that reads in any messaging or email app, and shared places and pins come with a link that opens in Maps."],
] as const;

export default article({
  slug: "share-camping-trip-aussiecamps", publishAt: "2026-11-14",
  title: "Share a Camping Trip Plan With Your Partner in AussieCamps",
  description: "Travelling as two? How to send your AussieCamps trip, places and pins to a partner, keep it in your calendar, and sync it across your own iPhones.",
  category: "App guides", region: "Australia",
  places: ["Share trip", "Calendar sync", "iCloud sync", "Travelling as a couple"],
  imageAlt: "A camper trailer and camp table set up on the beach at South Lefroy Bay, Western Australia",
  intro: "You can share a camping trip plan from AussieCamps in a few taps: Share trip sends your partner a readable itinerary with every stop, date, distance and forecast, and your own iPhones keep the trip in step through iCloud. We make AussieCamps, and there is one thing it does not do yet: give two people one live trip they both edit. So this guide sets out exactly what a travelling couple can share today, as of November 2026, and a routine that works well around that gap.",
  related: ["how-to-plan-trip-aussiecamps", "save-collections-aussiecamps", "wikicamps-trip-planner-alternative", "moving-from-wikicamps", "aussiecamps-widgets-guide"],
  sections: [
    section("What Share trip sends, and how", ["Open the trip and tap share, and your iPhone's share sheet appears: Messages, WhatsApp, email or any other app you use. AussieCamps writes the trip out as plain text and finishes it with the line “I made this trip plan with AussieCamps”. Whoever receives it can read it on any phone, tablet or computer, with no app to install and nothing to sign in to.", "The itinerary is built for the passenger seat. It opens with the trip name and dates, then the number of places, the total distance and the total drive time. Each stop follows in order with its arrival time, the distance to the next stop and the forecast, and the packing list comes last, so the person loading the car has it too."], ["Plain text through your share sheet", "No app needed to read it", "The packing list goes with it"], {
      caption: "What a shared AussieCamps trip contains, November 2026.",
      head: ["Part of the itinerary", "What your partner sees"],
      rows: [
        ["Heading", "Trip name and its start and end dates"],
        ["Summary", "Number of places, total distance and total drive time"],
        ["Each stop, in order", "Arrival time, distance to the next stop and the weather"],
        ["The list", "The trip's packing list or checklist"],
      ],
    }),
    section("Send a single place or a dropped pin", ["Often you only need to send one spot: tonight's campground, a dump point on the way out of town, the water tap where you will refill. Open the place and use Share place, and your partner gets its name with an Open in Maps link that drops them straight into directions.", "A pin works the same way. Press and hold on the map to drop one at a spot that has no listing, such as a lookout or a friend's driveway, and Share pin sends it with a Maps link. Saved pins stay under Collections > Pins on your phone for next time."], ["Share place for one stop", "Pins share with a Maps link", "Saved pins wait under Pins"]),
    section("Put the trip in your calendar", ["Every trip has a calendar switch. With it on, AussieCamps writes the route, the arrival dates, the distances, the forecast and the packing list into a calendar named after the app, on your phone's default calendar account. The trip needs a start date and an end date before the switch will work.", "For a couple, this is the easiest way to keep the trip in view beside work rosters, school pick-ups and the dog's kennel booking. It sits in your own calendar, so treat it as your copy and keep sending the itinerary to your partner when plans change."], ["One switch per trip", "Start and end dates required", "It lands in your own calendar"]),
    section("Your own iPhones stay in sync", ["If you carry two iPhones on one Apple Account, or you and your partner share one Apple Account between your phones, AussieCamps syncs automatically. With iCloud turned on, saved places, collections, pins and trips appear on each phone, and a change made on one shows up on the other.", "There is no AussieCamps account behind this. No email, no password, no verification code, and nothing to log back in to at a campsite. Phones on separate Apple Accounts do not sync with each other, which is why the share options above matter for most couples."], ["Same Apple Account, automatic sync", "No login of any kind", "Separate accounts share by message"]),
    section("A routine that works for two", ["Pick one planner. Whoever enjoys the planning keeps the trip on their phone, adds the stops and dates, and is the only one who edits it. The other person suggests changes by message, with the place's name and nearest town, and the planner adds it.", "Re-share after each change that matters. A new date, a swapped campground or a dropped night is worth a fresh itinerary, and the newest message in the chat becomes the plan. Saying so in the message, such as “updated Thursday”, saves a wrong turn.", "On the road, the passenger runs directions. Tapping a shared place link opens it in Maps on the passenger's phone, so the driver's phone can stay on the dash while the passenger checks the next stop, the forecast and the distance still to go."], ["One person edits the trip", "Re-share after every real change", "Passenger runs directions from the links"]),
    section("What it does not do yet", ["AussieCamps has no shared trip that two people on different Apple Accounts can both edit, so changes your partner makes on their side do not come back to your trip. WikiCamps users have asked for something similar: one App Store reviewer in September 2025 wanted shared trips that update live, and WikiCamps' October 2026 update made its shared trip links open inside its app."], ["No jointly edited trip yet", "Edits do not flow back", "Re-sharing covers the gap"]),
    { ...section("Plan the next trip together", ["AussieCamps is free to download, with in-app purchases. There is no account for either of you to set up. Build the trip on one phone, send it to the other, and you are both looking at the same stops.", "Whoever is planning, the sign at the site and the land manager's closures and fire advice still decide where you can stop on the night."], ["Free to download, no account", "Build once, share to both", "Signs on the ground decide"]), cta: true },
  ],
  sources: [
    { label: "Apple Support: iCloud", url: "https://support.apple.com/en-au/icloud" },
  ],
});
