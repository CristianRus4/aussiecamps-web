import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What is the best trip planner app for camping in Australia?", "For iPhone, AussieCamps plans a camping road trip from your front door: add campgrounds, rest areas, addresses or your own pins, and see the distance, drive time, date and weather for every stop. There is no account and no ads."],
  ["How do I plan a caravan trip on my phone?", "Start at Home, add the nights you have booked, then fill the gaps with stops that suit a van. Filter for Caravan Sites, check the drive time of each leg so no day runs too long, and put booking numbers in each stop's note."],
  ["Does AussieCamps show distance between stops?", "Yes. Every leg shows its distance and drive time, including the drive from home to your first stop when you start at Home, so you can see the whole trip at a glance."],
  ["Can I start a trip from home in AussieCamps?", "Yes. Set your home address once in the You tab, then tap Start at Home or Finish at Home on any trip. The drive from your door is part of the route."],
  ["Can I add an address or my own spot to a trip?", "Yes. Add a stop searches places in the app, your saved pins, your current location and any address. You can also drop a pin on the map, name it and add it to the trip."],
] as const;

export default article({
  slug: "wikicamps-trip-planner-alternative", publishAt: "2026-11-14",
  title: "WikiCamps Trip Planner Alternative (2027): Road Trips in AussieCamps",
  description: "Over the WikiCamps trip planner? AussieCamps plans your 2027 road trip from Home to any address, with distance per leg, dates, weather and live sharing.",
  category: "App guides", region: "Australia",
  places: ["Trip planner", "Start at Home", "Distance per leg", "Plan together"],
  imageAlt: "A four-wheel drive towing a caravan beside the Bunda Cliffs on the Nullarbor coast",
  intro: "Looking for a WikiCamps trip planner alternative? AussieCamps plans a camping road trip from your front door to the last campground, showing the distance and drive time of every leg, a date and note on each stop, and the weather ahead. We make AussieCamps. It opens straight to the map, with no account to make and no ads, and here is how planning a trip in it works.",
  related: ["how-to-plan-trip-aussiecamps", "best-road-trip-planner-apps-australia", "moving-from-wikicamps", "share-camping-trip-aussiecamps", "roadtrippers-alternatives"],
  sections: [
    section("Why campers look for a WikiCamps trip planner alternative", ["Plenty of campers say WikiCamps' new version has made trip planning fiddly, and many mention being logged out and seeing ads after paying for the app. If that sounds familiar, a planner that just gets out of your way is a nice change.", "AussieCamps starts on the map the second it opens. Pick a campground, pop it in a trip, and carry on planning."], ["Open the app, you're on the map", "Tap a place, add it to a trip", "No logins, no ads"]),
    section("Start at Home and finish at Home", ["Set your home address once in the You tab and every trip can use it. Tap Start at Home and the drive from your driveway to the first campground becomes the first leg, with its own distance and drive time. Tap Finish at Home and the trip ends back at your door.", "That makes the total for a long weekend or a three-month lap honest from the start, not just the bit between campsites."], ["Set your home address once", "Start at Home in one tap", "The whole drive in the total"]),
    section("Add any stop: a campground, a pin or an address", ["One Add a stop search finds everything. Type a campground or rest area name, an address, your current location or one of your saved pins, and drop it into the trip.", "Got a spot that is not on any map, like a mate's farm or a favourite riverbank? Drop a pin on it, give it a name and add it to the trip. Every stop, listed or not, shows on the route with its distance and drive time."], ["Places, pins and addresses in one search", "Name a pin and make it a stop", "Every stop on the route"]),
    section("Your trip planning jobs, task by task", ["Here is how the everyday planning jobs work in AussieCamps. Most take a tap or two."], ["Drag stops to reorder", "A note on every stop", "Packing list built in"], {
      caption: "Road trip planning jobs and how they work in AussieCamps.",
      head: ["Planning job", "In AussieCamps"],
      rows: [
        ["Start from home", "Start at Home, using the address saved in the You tab"],
        ["Add a stop", "One search for places, pins, your location or any address"],
        ["Add your own spot", "Drop a pin, name it and add it to the trip"],
        ["Change the order", "Drag the stops and the route follows"],
        ["Spot a long day", "Distance and drive time on every leg"],
        ["Keep booking details", "An arrival date and a note on every stop"],
        ["Pack", "Tick items off the trip's packing list"],
        ["Plan with your partner", "Collaborate on the trip live, with no account"],
      ],
    }),
    section("Find stops that suit your rig with filters", ["The filters help you pick the right stops before you add them. Dogs allowed and 4WD access sit at the top of the filter sheet, each with a count of matching places. Under Cost, Free shows free rest areas and stops, and features like Toilets, Drinking Water, Showers, Caravan Sites and Tent Sites narrow it down.", "Choose a few and a place has to match all of them, so Dogs allowed plus Caravan Sites plus Toilets shows only spots that take the dog, the van and you."], ["Dogs allowed and 4WD access up top", "Free rest areas and stops", "Every filter you pick must match"]),
    section("On the road with your trip", ["Set the trip to In progress when you leave and tick each stop off as you go. Directions to the next stop open in Apple Maps or Google Maps, whichever you prefer, and the weather for the stops ahead sits right in the trip.", "If a campground is full, Worth a stop nearby suggests other places close by. Each place's fees, facilities and conditions are kept on your phone, along with your trip and notes, so you can still read them when the bars drop out."], ["Tick stops off as you travel", "Weather for the stops ahead", "Backups close by"]),
    section("Plan it together and share it", ["Tap Share on the trip and choose Collaborate to plan it with your partner. Either of you can add a stop, shuffle the order or update a note, and the other phone catches up in seconds, no login needed.", "For family back home, Send copy makes a link anyone can open in a web browser to see the stops, dates and notes. Share as image sends a picture of the route, stops and nights, and calendar sync puts the whole trip in your diary."], ["Collaborate live with your partner", "A browser link for family", "Calendar sync for your diary"]),
    section("Why switchers plan their trips in AussieCamps", ["There is nothing to sign in to, so nothing logs you out at a campsite. There are no ads. Trips start and finish at home and take any address or pin, and you can plan with your partner live.", "AussieCamps is also independent, not owned by a holiday park group, so free rest areas, national parks and paid parks all sit on the same map."], ["No account, no logouts", "Home, addresses and pins in trips", "Independent, with free stops shown"]),
    { ...section("Plan your next road trip in AussieCamps", ["AussieCamps is free to download, with in-app purchases. Set your home address, start a trip, and add the nights you have already booked; the rest of the route fills in around them.", "On the day, campground signs, fire bans and road closures always outrank the app."], ["Free to download", "Booked nights first", "Signs and closures come first"]), cta: true },
  ],
});
