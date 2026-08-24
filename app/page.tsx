import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Binoculars, CalendarDays, Caravan, Check, CircleDollarSign, CloudSun, Heart, Layers, ListChecks, Map, MapPinned, Navigation, Route, Search, ShieldCheck, SlidersHorizontal, TentTree, Trees } from "lucide-react";
import { FaApple } from "react-icons/fa6";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DownloadCard } from "@/components/download-card";
import { ArticleCard } from "@/components/article-card";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL, SITE_URL, articles } from "@/lib/site";

export const metadata: Metadata = {
  title: "AussieCamps | Find camps, plan road trips and explore Australia",
  description: "74,000+ campsites, caravan parks, rest areas and useful stops across Australia, bundled offline. Filter for exactly the place you want, save collections and plan the whole road trip stop by stop.",
  alternates: { canonical: "/" },
};

const features = [
  {icon: Layers, title:"Smart collections and your own lists", text:"Liked, Starred, Want to visit and Visited fill themselves as you mark places. Build named collections on top for a region, a season or the shortlist you are still arguing about."},
  {icon: SlidersHorizontal, title:"Filters that answer a real question", text:"Ask for free camping areas with toilets and drinking water around the Gold Coast, then narrow further by category, fee, rating, online booking, state and detailed access, amenity, activity and service features."},
  {icon: Map, title:"Standard, satellite and 3D maps", text:"Switch between the standard map and satellite imagery you can tilt and spin into real terrain. Pins group into counts when you are zoomed out and break apart as you move in."},
  {icon: Binoculars, title:"Street View before the turnoff", text:"Street View opens straight from the place screen where coverage exists, so you can see the entrance, the road surface and the surroundings before committing the van to the turnoff."},
  {icon: CloudSun, title:"Weather on every place", text:"Current conditions and the forecast sit on the place screen and beside each trip stop, so a choice between two camps can be made with the sky in mind."},
  {icon: CircleDollarSign, title:"Costs in your own currency", text:"Visiting and not fluent in Australian dollars? Choose your currency and set the rate once, and reported fees are shown alongside in money you can judge at a glance."},
];

const faqs = [
  ["What is AussieCamps?", "AussieCamps is an iPhone app for finding places to camp and stay around Australia. It bundles a directory of 74,000+ places so the details stay readable without reception, and it turns the ones you save into a road trip with an ordered route, dates, notes and to-dos."],
  ["What places are included?", "More than 74,000 places: campgrounds, caravan parks, roofed accommodation, farm and station stays, backpacker hostels, roadside rest areas, day-use areas, dump points, potable water, laundromats, information centres, long-vehicle parking, experiences and other useful stops."],
  ["Does it work without reception?", "The place directory is bundled with the app, so names, categories, descriptions, fees, amenities, opening hours and conditions stay readable well beyond signal. Live services such as weather, routing, Street View, photos and provider pages still need a connection."],
  ["Can I plan a multi-stop road trip?", "Yes, and it is the app's main feature. Add places as stops, drag them into order, attach a date and arrival notes to each one, see the driving distance leg by leg and across the whole trip, open directions to the next stop, check the weather at each one, tick stops off as visited and keep the packing list beside the itinerary. Itinerary details can sync to Calendar."],
  ["What are collections?", "Two kinds. Smart collections (Liked, Starred, Want to visit, Visited, Pins and All saved) fill themselves as you mark places. On top of those you can create your own named collections with an icon and notes for a region, a season, a vehicle or a shortlist."],
  ["Can I filter for free camps or caravan access?", "Yes, and combinations of them. Filters cover category, fee type, minimum rating, online booking, state or territory, and detailed feature groups for access, amenities, activities, services and affiliations, so \u201cfree camping areas with toilets and drinking water in Queensland\u201d is a single query."],
  ["What is on a place screen?", "Photos, a description, opening hours, fees, terms and conditions, amenities and features grouped by type, current alerts, ratings, contact and booking details, weather, Street View where coverage exists, directions, and nearby alternatives."],
  ["What map views are there?", "A standard map and a satellite view built on Apple's flyover imagery, which you can tilt and rotate for real 3D terrain. Street View, built on Apple's Look Around imagery, gives the street-level view from the place screen."],
  ["Can I see prices in my own currency?", "Yes. Choose your currency in settings and set the conversion rate, and reported fees are shown in that currency alongside the Australian dollar figure."],
  ["Can I book a campsite in AussieCamps?", "Open the booking details for a place to reach its provider and check live availability, prices and terms."],
  ["Are camping rules the same across Australia?", "No. Rules vary by state, territory, council, park and individual site. Always follow current signs, land-manager conditions, fire restrictions and official alerts."],
];

const reviews = [
  { name: "Amélie D.", country: "France", title: "Made our trip so much simpler", quote: "We crossed the country doing a mix of campsites and holiday parks and choosing each stop got so much easier. The offline details were a lifesaver more than once." },
  { name: "Michael K.", country: "United States", title: "The filters alone are worth it", quote: "Filters are brilliant when you've got a big rig and need to know what you're driving into. Fast, no fuss." },
  { name: "Priya S.", country: "Canada", title: "useful for every kind of stop", quote: "we found lovely holiday parks for the kids and a few quieter spots for later on. having the prices and access notes in one place saved so much time, i was doing all this in a spreadsheet before which was... not great" },
  { name: "Lukas H.", country: "Germany", title: "Good when plans change", quote: "Helped us find a simple overnight stop when our plans fell apart, then somewhere lovely to stay a few days. Much better than searching town by town." },
  { name: "Oliver P.", country: "United Kingdom", title: "Clear and easy to trust", quote: "Clear maps, useful details, no nonsense. We used it for caravan parks, free camps and a couple of huts and it became part of the daily routine without me really noticing." },
  { name: "Ben T.", country: "Australia", title: "Did the big lap with this", quote: "Ten months around the country and I opened it every single day. Filtering for rig length and access saved us a lot of wasted kilometres up north. The amount of times we would have driven somewhere that just doesn't fit a 7 metre van." },
  { name: "Sarah N.", country: "New Zealand", title: "Less daunting", quote: "Came over for six weeks with no idea where to start. Building the route stop by stop and actually seeing the distance made the whole thing feel manageable." },
  { name: "Femke V.", country: "Netherlands", title: "offline was the selling point", quote: "between broome and darwin there is a LOT of nothing. having the place details still readable with no signal is the reason we kept using it" },
  { name: "Grace O.", country: "Ireland", title: "Good for a tent too!", quote: "Most of these apps feel built for big caravans. We were in a small car with a tent and still found plenty that actually suited us." },
];

export default function Home() {
  const schema = {"@context":"https://schema.org","@graph":[{"@type":"WebSite",name:"AussieCamps",url:SITE_URL,description:metadata.description},{"@type":"MobileApplication",name:"AussieCamps",operatingSystem:"iOS",applicationCategory:"TravelApplication",description:metadata.description},{"@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}]};
  return <>
    <Header />
    <main>
      <section className="hero">
        <div className="hero-glow"/>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="kicker"><Caravan size={14}/> The best camping app for Australia</span>
            <h1>Australia is big.<br/><em>Your plan</em> can be simple.</h1>
            <p>74,000+ places across Australia, bundled offline so they still open with no signal. Filter down to exactly what you need, save it, and turn the shortlist into a road trip with routes, distance, dates, notes and to-dos.</p>
            <div className="hero-actions"><DownloadCard/><Button asChild variant="outline" size="lg" className="rounded-[14px]"><Link href="/#how-it-works">See how it works <ArrowRight/></Link></Button></div>
            <div className="hero-proof"><span><strong>74,000+</strong><small>places across Australia</small></span><span><strong>Offline</strong><small>every place detail, no signal needed</small></span><span><strong>4,000+</strong><small>places to stay</small></span></div>
          </div>
          <div className="hero-visual">
            <div className="image-slot hero-image-slot" style={{backgroundImage:"url(/images/aussie-hero.webp)"}} role="img" aria-label="AussieCamps map screen" />
          </div>
        </div>
      </section>

      <section className="trust-strip"><p>Campsites, caravan parks and useful stops across Australia.</p><div>{[TentTree,Caravan,Trees,Navigation,Map,CloudSun].map((Icon,i)=><span key={i}><Icon/>{["Campsites","Caravan parks","National parks","Rest areas","Useful stops","Experiences"][i]}</span>)}</div></section>

      <section className="section story-section" id="how-it-works">
        <div className="section-head"><div><p className="eyebrow">From idea to open road</p><h2>Find a camp.<br/>Build the trip.</h2></div><p>Filter down to tonight’s camp, save tomorrow’s possibilities into collections and keep the route, distance, dates, notes and to-dos together in one trip.</p></div>
        <div className="steps-grid">
          <article><Search/><h3>Find the exact place</h3><p>Search 74,000+ places, browse what is nearby, or stack filters until only the free camping areas with toilets and water in your corner of the map are left.</p></article>
          <article><Heart/><h3>Save it into a collection</h3><p>Like, star or mark a place as visited and the smart collections update themselves. Build your own named lists for a region, a season or a shortlist.</p></article>
          <article><Route/><h3>Turn it into a trip</h3><p>Order the stops, see the distance between them, add dates and notes, check each stop’s weather, get directions and tick them off as you go.</p></article>
        </div>
      </section>

      <section className="feature-stage" id="features">
        <div className="feature-intro"><p className="eyebrow">The full toolkit</p><h2>Find it. Save it.<br/>Plan the whole road ahead.</h2><p>Explore places, compare the details, organise favourites and build a trip that stays useful after the planning table.</p></div>
        <div className="feature-showcase">
          <div className="feature-copy-large"><div className="icon-tile"><MapPinned/></div><p className="eyebrow">Know the place before you get there</p><h3>Every place opens with the detail that decides it.</h3><p>Photos, a real description, opening hours, fees, terms and conditions, amenities and features grouped by type, current alerts, ratings, contact and booking details, the weather, and Street View to see the entrance from the road.</p><ul><li><Check/>Photos, hours, fees, conditions and amenities</li><li><Check/>Street View, weather and directions built in</li><li><Check/>Bundled offline, it opens with no signal</li></ul></div>
          <div className="product-images"><div className="image-slot product-shot product-shot-one" style={{backgroundImage:"url(/images/aussie-feature-1.webp)"}} role="img" aria-label="AussieCamps explore screen"/><div className="image-slot product-shot product-shot-two" style={{backgroundImage:"url(/images/aussie-feature-2.webp)"}} role="img" aria-label="AussieCamps place details screen"/></div>
        </div>
        <div className="feature-grid">{features.map(({icon:Icon,title,text})=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section itinerary-section">
        <div className="itinerary-image image-slot" style={{backgroundImage:"url(/images/aussie-feature-3.webp)"}} role="img" aria-label="AussieCamps trip planner screen"/>
        <div className="itinerary-copy"><p className="eyebrow">The main event</p><h2>Stop by stop.<br/>Day by <em>day.</em></h2><p>The trip planner is what everything else feeds. Add saved places as stops and drag them into the order you will actually drive. Every leg shows its distance, directions open to the next one, each stop carries its own date, arrival notes and weather, and you tick them off as visited while you travel. Nearby alternatives stay attached for the days that change, the packing list sits beside the itinerary, and the whole thing can sync to Calendar.</p><div className="metric-grid"><div><Route/><strong>Distance & directions</strong><small>leg by leg, and the whole trip</small></div><div><CalendarDays/><strong>Dates & notes</strong><small>attached to every stop</small></div><div><ListChecks/><strong>Visited & to-dos</strong><small>progress you can see</small></div><div><CloudSun/><strong>Weather per stop</strong><small>beside the itinerary</small></div></div></div>
      </section>

      <section className="section guide-preview">
        <div className="guide-preview-head"><div><p className="eyebrow">Routes worth taking slowly</p><h2>Take the coast.<br/><em>Cross the red dirt.</em></h2></div><div><p>Choose a direction, save the camps that fit and turn the strongest stops into a route of your own.</p><Link href="/guides" className="text-link">Explore road trips <ArrowRight/></Link></div></div>
        <div className="article-grid guide-preview-grid">{articles.filter(a=>a.category==="Road trips").slice(0,5).map((a,i)=><ArticleCard article={a} priority={i===0} key={a.slug}/>)}</div>
      </section>

      <section className="section audiences"><div className="audience-copy"><p className="eyebrow">However you carry home</p><h2>Made for tents,<br/>vans and <em>big laps.</em></h2></div><div className="audience-grid">{[["Backpackers","Make a tight budget and flexible route work together.",Binoculars],["Campervans","Find the facilities, access and overnight mix you need.",Caravan],["Caravans & big rigs","Filter for space, services and practical access notes.",Navigation],["Weekend campers","Keep nearby favourites ready when Friday arrives.",TentTree]].map(([t,d,I])=>{const Icon=I as typeof TentTree;return <article key={t as string}><Icon/><h3>{t as string}</h3><p>{d as string}</p></article>})}</div></section>

      <section className="reviews-section">
        <div className="reviews-head"><div><p className="eyebrow">What travellers say</p><h2>Made for plans<br/>that <em>change.</em></h2></div></div>
        <div className="review-wall">{reviews.map((review,i)=><article className={`review-card review-${i+1}`} key={review.name}><div className="review-stars">★★★★★</div><h3>{review.title}</h3><blockquote>“{review.quote}”</blockquote><footer><span className="review-avatar">{review.name.charAt(0)}</span><span><strong>{review.name}</strong><small>{review.country}</small></span></footer></article>)}</div>
      </section>

      <section className="principles"><div><ShieldCheck/><h2>Useful first.<br/>Honest always.</h2></div><div className="principle-list"><article><div><h3>Signs beat screens</h3><p>On-site notices, land managers and current emergency advice always take priority over a listing.</p></div></article><article><div><h3>Current checks matter</h3><p>Check the latest booking, road, fire and closure updates before departure.</p></div></article><article><div><h3>Leave places better</h3><p>Legal camping, thoughtful waste disposal and respect for Country keep these places open.</p></div></article></div></section>

      <section className="section faq-section"><div><p className="eyebrow">A few straight answers</p><h2>Good questions.<br/><em>Clear answers.</em></h2><p>Still stuck? <Link href="/support">Visit support</Link> or send us a note.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

      <section className="download-section"><div className="download-image image-slot" style={{backgroundImage:"url(/images/aussie-download.webp)"}} role="img" aria-label="AussieCamps app screen"/><div className="download-copy"><p className="eyebrow">Your next place is out there</p><h2>Find it. Save it.<br/><em>Plan the road ahead.</em></h2><p>74,000+ Australian places offline, filters sharp enough to find the exact one, collections that organise themselves and a trip planner that holds the whole route. AussieCamps for iOS.</p><DownloadCard/></div></section>
    </main>
    <Button asChild className="mobile-cta"><a href={APP_STORE_URL} aria-label="Download AussieCamps for iOS"><FaApple aria-hidden="true"/><span>Download</span></a></Button>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </>;
}
