import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["What are the quiet hours at Australian campgrounds?", "Most national park campgrounds ask for quiet from about 10 pm to 7 am or 8 am, and some start earlier. Check the sign at the entrance, because the hours differ by park and by state."],
  ["Are dogs allowed in national park campgrounds?", "Mostly no. Dogs are banned from most national parks and their campgrounds, with a few exceptions in some states, and state forests and some council camps are more relaxed. Check the specific park before you load the dog in the car."],
  ["Do I need permission to fly a drone at a campsite?", "Usually yes. Most parks ask for written approval before you launch, and flying near other campers or wildlife is often banned outright. Check the park's rules first."],
  ["Can I use a generator at a national park campground?", "Often not, or only at set hours and in set areas. Many campgrounds are generator-free, and the ones that allow them still expect you to keep the noise down. Solar and a battery are the easier answer."],
] as const;

export default article({
  slug: "national-park-campsite-rules-australia", publishAt: "2026-11-23",
  title: "National Park Campsite Rules in Australia: Quiet Hours, Dogs, Drones and Generators",
  description: "A plain summary of the rules at national park campsites in Australia: quiet hours, dogs, drones, generators, fires, firewood, rubbish, site limits and alcohol.",
  category: "Rules & safety", region: "Australia",
  places: ["National parks", "Campgrounds", "Quiet hours", "Dogs", "Drones"],
  imageAlt: "Mount Clear Campground in Namadgi National Park, ACT",
  intro: "National park campsites share a short list of rules, and most of them come down to being quiet, leaving things as you found them and doing what the sign says. The details change by state and by park, so use this as a quick checklist and follow the links when one rule matters to your trip. The land manager's page for the campground always has the final say.",
  related: ["can-i-use-a-generator-at-a-campsite-in-australia", "can-i-fly-a-drone-while-camping-in-australia", "camping-with-dogs-australia", "can-i-collect-firewood-while-camping-in-australia", "campfires-camping-australia", "responsible-camping-australia"],
  sections: [
    section("The rules most campgrounds share", ["Almost every national park campground asks for quiet hours at night, no dogs, rubbish carried out, and fires only in the places provided. Most also limit the number of people, tents and vehicles on a site, and some set a maximum number of nights you can stay.", "None of this is hard to follow if you check before you go. The rules are on the booking page, on the sign at the campground entrance and in the confirmation email, and rangers do walk through."], ["Read the booking confirmation", "Check the sign at the entrance", "Rangers do patrol"]),
    section("A quick table", ["Here is how the common rules usually look, with the detailed guide to read when you need the full story."], ["Rules change by state and park", "Closures and fire bans override everything"], {
      caption: "Common national park campsite rules and where to read more.",
      head: ["Rule", "Usually", "Detail"],
      rows: [
        ["Quiet hours", "About 10 pm to 7 or 8 am", "Sign at the campground"],
        ["Dogs", "Banned in most parks and camps", "See our dogs guide"],
        ["Drones", "Permission needed, often banned near people", "See our drone guide"],
        ["Generators", "Limited or banned, set hours at some", "See our generator guide"],
        ["Campfires", "Only in fire rings, banned on fire ban days", "See our campfire guide"],
        ["Firewood", "Often no collecting, bring your own", "See our firewood guide"],
        ["Rubbish", "Take it out, bins are often absent", "Leave no trace"],
        ["Site limits", "Set people, tents and vehicles per site", "Booking page"],
        ["Alcohol", "Banned or limited at some camps", "Sign and park page"],
      ],
    }),
    section("Quiet hours, rubbish and site limits", ["Quiet hours usually run from about 10 pm until early morning, and that includes car doors, music and loud talk. The sound travels a long way in the bush, and the camps with the best views are often the ones where everyone is close together.", "Bins are scarce in national parks, so plan to carry rubbish out, including food scraps, which attract wildlife. Booked sites also have limits on people, tents and vehicles, and an extra car or a group bigger than the booking can be turned away."], ["Quiet from about 10 pm", "Take all rubbish out", "Do not exceed the site's limits"]),
    section("Dogs, drones and generators", ["Dogs are banned from most national parks and their campgrounds because of wildlife, so check before you travel and look for a state forest or a pet-friendly holiday park instead. Drones usually need written permission, and flying them over campers or near wildlife is often banned. Generators are limited or banned at many camps, so solar panels and a battery are the simpler plan.", "Each of these has its own detailed guide with the rules by state, so use those when the answer matters for your trip."], ["Dogs: look for state forests or holiday parks", "Drones: ask first", "Generators: solar is simpler"]),
    section("Fires, firewood and alcohol", ["Fires are allowed only in the fire rings or barbecues provided, and not at all on fire ban days, so check the fire danger rating before you light up. Collecting firewood is banned at many parks, so bring your own bag from a local shop, and do not move firewood between regions because of pests.", "A few parks and campgrounds limit alcohol, especially over New Year and long weekends, and some Aboriginal land areas ban it. If you are not sure, leave it at home or check the park page first."], ["Fire ban days mean no fires at all", "Buy firewood locally", "Check alcohol rules at busy camps"]),
    { ...section("Check each camp in AussieCamps", ["AussieCamps lists campgrounds, national parks, rest areas, dump points, water points and toilets from official sources, with each place's facilities, fees and rules as the land manager publishes them, plus photos, weather and Street View. Use the Dogs allowed filter to find camps that welcome dogs and the Popular features filter for campfires, toilets and drinking water, and narrow to a state or territory.", "Save the camps you like to a collection, build a trip with Add stop and read each place's rules before you go. The whole directory is inside the app, so search, filters and place details work with no signal. There is no account and no ads, and it runs on iPhone. The sign at the site and the land manager's page always have the last word."], ["Use the Dogs allowed filter", "Read each place's rules", "Check the sign at the site"]), cta: true },
  ],
  sources: [
    { label: "NSW National Parks: park rules", url: "https://www.nationalparks.nsw.gov.au/plan-a-trip/park-rules" },
    { label: "Parks Victoria: park rules", url: "https://www.parks.vic.gov.au/legal" },
    { label: "Queensland Parks: camping and park rules", url: "https://parks.qld.gov.au/camping" },
    { label: "Explore Parks WA: camping", url: "https://exploreparks.dbca.wa.gov.au/where-and-when-camp" },
    { label: "Parks and Wildlife Tasmania: know before you go", url: "https://parks.tas.gov.au/explore-our-parks/know-before-you-go" },
  ],
});
