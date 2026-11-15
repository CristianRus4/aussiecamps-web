import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Can you camp near the Three Sisters?", "Not at Echo Point. The nearest options are holiday parks in Katoomba and Blackheath, or national park campgrounds such as Euroka on the eastern side of the mountains, which is a longer drive."],
  ["Where do I camp for the Grand Canyon walk?", "Blackheath is the closest base, with a holiday park in town. Evans Lookout, where the walk starts, is a few minutes from Blackheath, and the Megalong Valley below has private campgrounds."],
  ["Do Blue Mountains national park campgrounds need booking?", "Yes. National park campgrounds in New South Wales are booked through NSW National Parks, and some free ones still need a booking. Check the park alerts page for closures before you go."],
  ["Is the Blue Mountains cold?", "At around 1,000 metres it is often 5 to 8 degrees cooler than Sydney, with fog, wind and frost in winter. Pack a warm layer for camp even in summer."],
] as const;

export default article({
  slug: "blue-mountains-walks-where-to-camp", publishAt: "2026-11-29",
  title: "Where to camp for the Blue Mountains walks: Three Sisters and Grand Canyon",
  description: "The best Blue Mountains walks and the camp nearest to each: Three Sisters at Echo Point, the Prince Henry Cliff Walk, Grand Canyon at Blackheath, National Pass at Wentworth Falls and Govetts Leap.",
  category: "Camping guides", region: "New South Wales",
  places: ["Katoomba", "Echo Point", "Blackheath", "Wentworth Falls", "Govetts Leap", "Megalong Valley", "Glenbrook", "Blue Mountains National Park"],
  imageAlt: "Three Sisters, Blue Mountains",
  intro: "The Blue Mountains walks are clustered along the Great Western Highway, but the national park campgrounds are scattered, and some are a long way from the lookouts. The good news is that two towns, Katoomba and Blackheath, have holiday parks within a few minutes of the main tracks, and a few bush campgrounds are worth the drive. Here is each walk, and the camp that suits it.",
  related: ["blue-mountains-camping-weekend", "sydney-to-dubbo-drive", "free-camping-near-sydney", "camping-rules-new-south-wales", "wet-weather-camping-australia", "free-camping-new-south-wales"],
  sections: [
    section("Walks and the nearest camp", ["The Blue Mountains sit about two hours from Sydney, and the walking is spread over about 25 kilometres of the highway between Wentworth Falls and Blackheath. Match the camp to the walk rather than the other way round, because the roads between lookouts take longer than they look.", "All of these are day walks with good paths, but several include steep stairs and cliff edges."], undefined, { caption: "Blue Mountains walks and their nearest base, November 2026.", head: ["Walk", "Start", "Nearest base", "Time on foot"], rows: [
      ["Three Sisters and Giant Stairway", "Echo Point, Katoomba", "Katoomba holiday parks", "1 to 2 hours"],
      ["Prince Henry Cliff Walk", "Echo Point or Gordon Falls", "Katoomba or Leura", "2 to 4 hours one way"],
      ["Grand Canyon track", "Evans Lookout, Blackheath", "Blackheath holiday park", "About 3 hours"],
      ["National Pass", "Wentworth Falls picnic area", "Katoomba", "3 to 4 hours"],
      ["Govetts Leap and Pulpit Rock", "Govetts Leap Lookout, Blackheath", "Blackheath", "1 to 3 hours"],
    ] }),
    section("Three Sisters and Katoomba", ["The Three Sisters at Echo Point are the postcard view of the mountains. The Giant Stairway drops about 900 steps to the valley floor, and the walk back up is steep, so allow plenty of time. The Prince Henry Cliff Walk runs along the escarpment past a string of lookouts and is easy to do in sections.", "Katoomba has holiday parks within a few minutes of Echo Point, which is the practical base for these walks. The streets around the lookout are busy in the middle of the day, so walk early."], ["Go before 9am", "Do the Giant Stairway slowly", "Stay in Katoomba"]),
    section("Grand Canyon and Blackheath", ["The Grand Canyon track starts at Evans Lookout near Blackheath and winds down through a damp, mossy gorge before looping back up. It is one of the best walks in the mountains, and it is cool and shaded in summer. Govetts Leap is nearby, with a big lookout over the Grose Valley and tracks along the cliff edge.", "Blackheath has a holiday park in town and is the best base for both walks. Below the escarpment, the Megalong Valley has private campgrounds on farmland for tents and vans, a pleasant drive down from the highway."], ["Start at Evans Lookout", "Blackheath is the base", "Try Megalong Valley farms"]),
    section("Wentworth Falls and National Pass", ["National Pass starts at Wentworth Falls picnic area, drops down a staircase beside the falls, and traces a narrow ledge cut into the cliff. It is the most dramatic walk in the Blue Mountains and a half-day effort. Check the national park alerts before you go, because the track closes when it is wet or damaged.", "Wentworth Falls itself has no good campground, so use Katoomba as a base, or stay at a holiday park further along the highway."], ["Check alerts first", "Allow a half day", "Katoomba is 20 minutes"]),
    section("National park campgrounds", ["Euroka, near Glenbrook, is the best-known Blue Mountains national park campground. It is open to cars for a fee and it is booked through NSW National Parks. It is on the eastern side of the mountains, so the lookouts are a drive away, but it is a good base for Sydney visitors and has kangaroos in the evening. Check whether it suits your van before you book.", "Perrys Lookdown, near Blackheath, is a small basic camp that is walk-in and not suited to vans. Murphys Glen and Ingar are quiet bush camps with no drinking water. Their status changes with maintenance and weather, so check the NSW National Parks site and book before you go. Our NSW free camping guide and weekend guide cover more camps."], ["Book through NSW National Parks", "Check van access first", "Bring your own water"]),
    section("Closures, fog and cold", ["Tracks in the Blue Mountains close after storms, rockfalls and bushfire. The NSW National Parks alerts page lists every closure by track, and it is worth checking the morning you walk and again the night before. Some stairways are closed for repairs for months.", "At about 1,000 metres the mountains are colder and wetter than Sydney, with fog that can hide the lookouts all day. Cold nights are normal even in spring, so bring a warm sleeping bag and layers. Our wet weather camping guide has tips for staying dry in a tent or van."], ["Check park alerts", "Pack warm layers", "Fog hides the views"]),
    { ...section("Plan the Blue Mountains walks in AussieCamps", ["Build a trip with Add stop, choosing the campgrounds and caravan parks near each walk. Each leg shows the driving distance and time, so you can see what Euroka adds to a Katoomba morning. Add dates, notes and weather to each stop.", "Use the Cost filter to switch between free and paid camps, the Online booking filter for sites you can reserve, and the Popular features filter for toilets and drinking water. The directory is inside the app, so search and details work with no signal in the gorges. There is no account and no ads, and it is an iPhone app."], ["Add each walk start", "Filter by drinking water", "Plan around fog and cold"]), cta: true },
  ],
  sources: [
    { label: "NSW National Parks: Blue Mountains National Park", url: "https://www.nationalparks.nsw.gov.au/visit-a-park/parks/blue-mountains-national-park" },
    { label: "NSW National Parks: Alerts and closures", url: "https://www.nationalparks.nsw.gov.au/alerts" },
    { label: "Visit NSW: Blue Mountains", url: "https://www.visitnsw.com/destinations/blue-mountains" },
    { label: "Bureau of Meteorology", url: "http://www.bom.gov.au/" },
  ],
});
