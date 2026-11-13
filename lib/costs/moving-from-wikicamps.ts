import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["How do I switch from WikiCamps to AussieCamps?", "Install AussieCamps, search each of your favourite places and mark it Liked or Want to visit, then rebuild your next trip with Add a stop. Any other spot can go in by its address or as a pin you name."],
  ["How long does it take to move my places and trips?", "For most people, about 15 minutes for their favourites and next trip. Start with the trip you leave on next, and move the long wish list over a quiet evening."],
  ["Can I add a WikiCamps spot that isn't in AussieCamps?", "Yes. Type its address into Add a stop, or drop a pin on the map, name it and add it to your trip. It shows on the route with its distance and drive time like any other stop."],
  ["Will my saved places sync to my other iPhone?", "Yes. With iCloud on and the same Apple Account on both phones, your saved places, collections, pins and trips sync privately, with no AussieCamps account."],
  ["Do I need an account to use AussieCamps?", "No. There is no account, login or verification code. AussieCamps opens straight to the map."],
] as const;

export default article({
  slug: "moving-from-wikicamps", publishAt: "2026-11-14",
  title: "Switch From WikiCamps to AussieCamps in 2027: Move Your Places and Trips",
  description: "Switching from WikiCamps? Move your favourites, lists and trips to AussieCamps in minutes, add any spot by address or pin, with no account to set up.",
  category: "App guides", region: "Australia",
  places: ["Switching apps", "Saved places", "Collections", "Pins"],
  imageAlt: "Two dome tents pitched on grassy bush ground among gum trees near Mansfield, Victoria",
  intro: "Switching from WikiCamps to AussieCamps takes most people about 15 minutes: search your favourite places and mark them, then rebuild your next trip, adding any spot by name, address or a pin you drop and name. There is no account to set up, so you can start the moment the app is installed. We make AussieCamps, and here is the quickest way across.",
  related: ["wikicamps-not-working", "save-collections-aussiecamps", "wikicamps-trip-planner-alternative", "share-camping-trip-aussiecamps", "how-to-use-aussiecamps-filters", "does-wikicamps-work-offline"],
  sections: [
    section("Why campers switch from WikiCamps", ["Lots of WikiCamps users say the new version is harder to use, keeps logging them out and shows ads in an app they paid for. Some also found their favourites harder to track down after the big update.", "AussieCamps keeps it simple. No account, no ads, and it opens straight to the map: filter, tap a place, add it to a trip. It is independent too, not owned by a holiday park group, so free rest areas and national parks sit next to paid parks."], ["No account and no ads", "Opens straight to the map", "Independent, with free stops shown"]),
    section("Before you switch: jot down your lists", ["Open WikiCamps one last time and screenshot your favourites and your next trip, or type the place names into your phone's Notes. Add the town beside each name, because a few campgrounds share names across states.", "Do the urgent bits first: the trip you leave on next, with its booking numbers. The big wish list can wait for a quiet evening."], ["Screenshot your lists", "Note the town for each place", "Next trip first"]),
    section("Where your WikiCamps favourites go", ["AussieCamps has smart collections that fill themselves: Liked, Starred, Want to visit and Visited. Search a place, open it and tap the one you want. Your old site notes go into the place's private note, such as which bay is flattest or where the tap is.", "Marking places Visited also colours in your where-you've-been map in the You tab, which shows how much of Australia you have seen. It is a nice way to bring years of camping across."], ["Smart collections fill themselves", "Old site notes become private notes", "Visited fills your map"], {
      caption: "Where your WikiCamps places and plans live in AussieCamps.",
      head: ["What you had in WikiCamps", "Where it goes in AussieCamps"],
      rows: [
        ["Favourite places", "Liked, with the top few also Starred"],
        ["Places you want to visit", "Want to visit"],
        ["Places you have stayed", "Visited, which fills your where-you've-been map"],
        ["Your own lists", "Named collections with an icon, colour and notes"],
        ["Notes on a site", "A private note on the place"],
        ["Trips", "Trips that start at Home and take any address or pin"],
        ["Your own secret spots", "Pins you drop, name and add to trips"],
      ],
    }),
    section("Rebuild your next trip in minutes", ["Create a trip, tap Start at Home, and add the nights you have booked first. Add a stop finds campgrounds and rest areas by name, your saved pins, your current location or any address, so every stop from your old trip has a way in.", "Drag the stops into the order you will drive, give each one its arrival date, and paste booking numbers into its note. The distance and drive time of every leg appear as you go, so an overlong day stands out straight away."], ["Start at Home", "Booked nights first", "Any stop by name, pin or address"]),
    section("Bring your own spots with you", ["Every camper has a few places that are not on any official list: a mate's property, a quiet bend in a river, the paddock behind a country pub. Drop a pin on the map, give it a name, and add it to your trip like any other stop.", "Your pins are saved under Collections, ready for the next trip, and you can open directions to them or share them in a tap."], ["Drop a pin and name it", "Add it straight to a trip", "Saved for next time"]),
    section("Find new favourites with filters", ["Once your old list is across, the filters help you find new spots. Two of the most asked-for filters, Dogs allowed and 4WD access, sit right up top, and each shows how many places match. Free under Cost shows free rest areas and stops, and features like Toilets, Drinking Water, Showers and Caravan Sites narrow it down.", "Pick a few at once and a place has to match all of them, so you only see spots that really suit you."], ["Dogs allowed and 4WD access", "Free rest areas and stops", "All your picks must match"]),
    section("Bring your partner along", ["If you plan trips as a couple, open the trip, tap Share and choose Collaborate. From then on you share one trip: add stops, move them around, tick them off, and see each other's edits almost straight away. It runs on iCloud, so neither of you creates an account.", "A second iPhone of your own on the same Apple Account syncs on its own, with every saved place, collection, pin and trip."], ["Collaborate live on a trip", "No account for either of you", "Your other devices sync too"]),
    { ...section("Make the switch today", ["AussieCamps is free to download, with in-app purchases. Install it, move your next trip across first, and let the rest of your places follow over a few evenings.", "Wherever you stop, the sign at the site and the land manager's fire bans and closures come first."], ["Free to download", "Next trip first", "Signs and closures first"]), cta: true },
  ],
});
