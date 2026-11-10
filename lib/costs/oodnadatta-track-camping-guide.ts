import { article, section } from "@/lib/can-i/helpers";

export const faq = [
  ["Where can you camp on the Oodnadatta Track?", "At Farina, Coward Springs, William Creek, Oodnadatta and Mount Dare, where there are campgrounds with different levels of facilities, and at bush camps beside waterholes and creeks along the way. Always camp at a marked site or on land where camping is allowed."],
  ["Do I need a 4WD for the Oodnadatta Track?", "In dry weather the track is often passable in a high clearance 2WD, but it is a long gravel road with corrugations and sharp stones, and most rental agreements prohibit it. A 4WD with good tyres is the safer choice."],
  ["How long does the Oodnadatta Track take?", "About 620 kilometres from Marree to Marla. Allow two to four days with stops, and more if you add Dalhousie Springs or Lake Eyre."],
  ["Is the Oodnadatta Track open all year?", "Technically yes, but it closes after rain and summer is dangerously hot. April to October is the season. Check the road report before you set out."],
] as const;

export default article({
  slug: "oodnadatta-track-camping-guide", publishAt: "2026-11-10",
  title: "Oodnadatta Track Camping Guide: Marree to Marla, Camps, Fuel and Conditions",
  description: "How to camp and drive the Oodnadatta Track in South Australia: Marree to Marla, Farina, Coward Springs, William Creek, Oodnadatta, fuel, road conditions and the best time to go.",
  category: "Camping guides", region: "South Australia",
  places: ["Marree", "Coward Springs", "William Creek", "Oodnadatta", "Marla"],
  imageAlt: "A motorhome and a 4WD camped among palm trees at Coward Springs camping area, South Australia",
  intro: "The Oodnadatta Track is one of Australia's great outback drives. It runs about 620 kilometres from Marree to Marla through gibber plains, dry lakes and spring-fed oases, following the old telegraph and railway line. It is a gravel road a long way from help, so it rewards a plan: fuel at every chance, water for the whole trip, a vehicle in good shape and a camp chosen each night before dark. Go between April and October, and give it three or four days.",
  related: ["flinders-ranges-camping-guide", "free-camping-coober-pedy", "camping-rules-south-australia", "can-i-drive-a-2wd-hire-campervan-on-4wd-roads-in-australia", "camping-without-phone-signal"],
  sections: [
    section("The route in short", ["Most people drive from Marree to Oodnadatta and on to Marla or Coober Pedy, though it also works in reverse. Marree is about 700 kilometres north of Adelaide, and Marla sits on the Stuart Highway.", "The track passes Lake Eyre South, Coward Springs, the mound springs, William Creek, Algebuckina Bridge and the Painted Desert. Fuel and a meal are at Marree, William Creek, Oodnadatta and Marla, so plan each tank around them."], ["About 620 km, mostly gravel", "Fuel at four points", "Three or four days is comfortable"], {
      caption: "The main stops on the Oodnadatta Track.",
      head: ["Stop", "What is there", "Camping", "Watch for"],
      rows: [
        ["Marree", "Fuel, pub, Farina trips", "Caravan park", "Last supplies for the Flinders side"],
        ["Farina", "Ruins of an old town", "Basic bush camp", "No water, no services"],
        ["Coward Springs", "Date palms and a warm spa", "Campground", "Limited shade in summer"],
        ["William Creek", "Pub, fuel, Lake Eyre flights", "Hotel campground", "Fuel can be expensive"],
        ["Oodnadatta", "Roadhouse, fuel, food", "Roadhouse camping", "Limited hours"],
        ["Mount Dare", "Fuel and a pub on the Dalhousie side", "Hotel campground", "Needs a detour"],
      ],
    }),
    section("Where to camp", ["There is a good spread of camps along the way. Coward Springs has date palms and a warm spring bath, William Creek and Oodnadatta have hotel and roadhouse camps with showers, and Farina is a simple bush camp near the old town ruins. Bush camps beside waterholes and dry creeks are common, but only where camping is allowed and never in a creek bed when rain is forecast.", "Most camps charge a small fee, paid at the hotel or into an honesty box, so carry some cash. Dalhousie Springs, a hot pool oasis in Witjira National Park, sits off the track and needs a Desert Parks Pass."], ["Coward Springs and William Creek", "Carry cash for camp fees", "Dalhousie needs a Desert Parks Pass"]),
    section("Road conditions and vehicle", ["The track is well graded in places and rough in others, with corrugations, loose stones and the occasional creek crossing. After rain it can become impassable within hours and may be closed. Check the South Australian road report before you set out and again along the way.", "Many rental agreements prohibit the track, so confirm yours in writing. Carry two spare tyres, a compressor, extra fuel if your tank range is under 500 kilometres and a satellite messenger or a UHF radio. For the basics, read our guide to 4WD driving for hire vehicles."], ["Check the road report", "Two spare tyres", "Confirm your rental allows it"]),
    section("Season and heat", ["April to October is the season, with warm days and cool nights. Summer is very hot, regularly above 40 degrees, and flash rain can close the road for days.", "Carry at least 10 litres of water per person per day plus a reserve, and if you break down, stay with your vehicle. Tell someone your route and when you expect to arrive."], ["April to October", "10 litres of water per person a day", "Stay with the vehicle"]),
    section("Lake Eyre, springs and extras", ["The mound springs near Coward Springs, including Blanche Cup and The Bubbler, are small oases that feed a unique wetland and should be viewed from the paths. From William Creek, scenic flights give the best view of Lake Eyre, Kati Thanda, and in a wet year the lake fills with water and birds.", "If you have time, add the Painted Desert, Algebuckina Bridge and the opal town of Coober Pedy, where our free camping guide shows where to stay."], ["Mound springs: stay on the paths", "Scenic flights from William Creek", "Add Coober Pedy"]),
    { ...section("Plan the Oodnadatta Track in AussieCamps", ["AussieCamps lists 1,838 campgrounds and 745 national parks from the state park agencies, plus 5,552 rest areas from road authorities, with each place's facilities, fees and rules as the agency publishes them. You can filter by cost, save places to a trip and see the driving distance between stops, which shows the long gaps between fuel on a route like this.", "Check conditions on the road report before you drive. AussieCamps runs on iPhone."], ["See the distance between stops", "Filter by cost", "iPhone only"]), cta: true },
  ],
  sources: [
    { label: "South Australia: Oodnadatta Track", url: "https://southaustralia.com/" },
    { label: "SA Department for Environment and Water: Desert Parks Pass", url: "https://www.parks.sa.gov.au/" },
    { label: "SA Department for Infrastructure and Transport: outback road conditions", url: "https://www.dit.sa.gov.au/" },
    { label: "Visit Coober Pedy: the Oodnadatta Track", url: "https://www.opalcapitaloftheworld.com.au/" },
  ],
});
