import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Binoculars, CalendarDays, Caravan, Check, ChevronRight, CloudSun, Compass, Filter, Heart, ListChecks, Map, MapPinned, Navigation, Route, Search, ShieldCheck, Sparkles, TentTree, Trees, WifiOff } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DownloadCard } from "@/components/download-card";
import { ArticleCard } from "@/components/article-card";
import { APP_STORE_URL, SITE_URL, articles } from "@/lib/site";

export const metadata: Metadata = {
  title: "AussieCamps | Find camps, plan road trips and explore Australia",
  description: "Explore 73,945 campsites, caravan parks, rest areas and useful stops across Australia. Filter places, save collections and plan every road trip in one iPhone app.",
  alternates: { canonical: "/" },
};

const features = [
  {icon: MapPinned, title:"Every kind of stop, one map", text:"Explore 73,945 places across Australia, from bush camps and caravan parks to water taps, dump points and roofed stays."},
  {icon: Filter, title:"Find what actually fits", text:"Filter by fee, rating, booking, state, vehicle access and details like toilets, power, dogs, water or waterfront."},
  {icon: Route, title:"Build the whole run", text:"Order your stops, see driving distance, add dates and notes, track visited places and keep a packing list with the trip."},
  {icon: Heart, title:"Save it your way", text:"Star a favourite, mark places visited or wanted, then build custom collections for weekends, seasons and dream routes."},
  {icon: WifiOff, title:"Keep the directory beyond signal", text:"The complete bundled place directory and core place details stay available offline. Live maps, weather and directions can still need reception."},
  {icon: Compass, title:"Pick a road worth taking", text:"Follow coastlines, cross the outback and find a good place to stop before the light disappears."},
];

const faqs = [
  ["What is AussieCamps?", "AussieCamps is an iPhone app for finding places to camp and stay around Australia, comparing practical details, saving places and building road trips stop by stop."],
  ["What places are included?", "The current directory contains 73,945 places, including campgrounds, caravan parks, roofed accommodation, roadside rest areas, dump points, potable water, day-use areas, experiences and other useful stops."],
  ["Does it work without reception?", "The app bundles its place directory so core place data remains available beyond reliable signal. Live services such as current weather, directions and some map content still need connectivity."],
  ["Can I plan a multi-stop road trip?", "Yes. Create a trip, order stops, add dates and notes, view route distance, track visited places, add packing tasks and sync itinerary details to Calendar."],
  ["Can I filter for free camps or caravan access?", "Yes. Filters cover fee type, category, minimum rating, booking, state and detailed features such as access, amenities, activities, services and affiliations."],
  ["Can I book a campsite in AussieCamps?", "Open the booking details for a place to contact its provider and check live availability, prices and terms."],
  ["Are camping rules the same across Australia?", "No. Rules vary by state, territory, council, park and individual site. Always follow current signs, land-manager conditions, fire restrictions and official alerts."],
];

const reviews = [
  { name: "Amélie D.", country: "France", title: "Made our Australian road trip simpler", quote: "We crossed the country with a mix of campsites and holiday parks, and this made choosing each stop much easier. The offline details were a lifesaver." },
  { name: "Michael K.", country: "United States", title: "The filters alone are worth it", quote: "The filters are brilliant when you need a place for a big rig or want to check facilities before driving out of your way. Fast and easy to use." },
  { name: "Priya S.", country: "Canada", title: "Useful for every kind of stop", quote: "We found lovely holiday parks for the family and a few quieter spots for later in the trip. Having prices and access notes together saved so much time." },
  { name: "Lukas H.", country: "Germany", title: "A great companion when plans change", quote: "It helped us find a simple overnight stop when our plans changed, then a beautiful place to stay for a few days. Much better than searching town by town." },
  { name: "Oliver P.", country: "United Kingdom", title: "Clear, practical and easy to trust", quote: "Clear maps, useful details and no fuss. We used it for caravan parks, free camps and a couple of huts, and it became part of our daily routine." },
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
            <span className="kicker"><Sparkles size={14}/> Built for the long way around</span>
            <h1>Australia is big.<br/><em>Your plan</em> can be simple.</h1>
            <p>Find camps, caravan parks, stays and useful stops. Know what is there. Build the road trip. Keep it all in one place.</p>
            <div className="hero-actions"><DownloadCard compact/><Link href="/#how-it-works" className="button button-ghost">See how it works <ArrowRight size={17}/></Link></div>
            <div className="hero-proof"><span><strong>73,945</strong><small>places across Australia</small></span><span><strong>19</strong><small>useful place categories</small></span><span><strong>8</strong><small>states & territories covered</small></span></div>
          </div>
          <div className="hero-visual">
            <div className="image-slot hero-image-slot" style={{backgroundImage:"url(/images/aussie-hero.webp)"}} role="img" aria-label="AussieCamps map screen" />
          </div>
        </div>
      </section>

      <section className="trust-strip"><p>Campsites, caravan parks and useful stops across Australia.</p><div>{[TentTree,Caravan,Trees,Navigation,Map,CloudSun].map((Icon,i)=><span key={i}><Icon/>{["Campsites","Caravan parks","National parks","Rest areas","Useful stops","Experiences"][i]}</span>)}</div></section>

      <section className="section story-section" id="how-it-works">
        <div className="section-head"><span className="section-number">01</span><div><p className="eyebrow">From idea to open road</p><h2>Find a camp.<br/>Build the trip.</h2></div><p>Find tonight’s camp, line up tomorrow’s drive and keep your trip notes close.</p></div>
        <div className="steps-grid">
          <article><span>01</span><Search/><h3>Find the right place</h3><p>Search the map or browse nearby, then narrow thousands of options to the few that fit your setup.</p></article>
          <article><span>02</span><ListChecks/><h3>Know before you drive</h3><p>Check fees, access, facilities, weather and nearby services before turning off the highway.</p></article>
          <article><span>03</span><Route/><h3>Make it a trip</h3><p>Add stops in order, keep dates and notes attached, then take the plan with you.</p></article>
        </div>
      </section>

      <section className="feature-stage" id="features">
        <div className="feature-intro"><span className="section-number light">02</span><p className="eyebrow">The full toolkit</p><h2>Know what is there<br/>before you drive in.</h2><p>Compare access, fees, facilities and weather before leaving the highway.</p></div>
        <div className="feature-showcase">
          <div className="feature-copy-large"><span className="feature-index">01 / 03</span><div className="icon-tile"><MapPinned/></div><p className="eyebrow">Explore</p><h3>Campsites across Australia, in your pocket.</h3><p>Move from national parks to caravan parks, free camps, rest areas and useful services without changing the map or rebuilding the search.</p><ul><li><Check/>Map and list views</li><li><Check/>Clustered pins and nearby search</li><li><Check/>Standard and satellite maps</li></ul></div>
          <div className="product-images"><div className="image-slot product-shot product-shot-one" style={{backgroundImage:"url(/images/aussie-feature-1.webp)"}} role="img" aria-label="AussieCamps explore screen"/><div className="image-slot product-shot product-shot-two" style={{backgroundImage:"url(/images/aussie-feature-2.webp)"}} role="img" aria-label="AussieCamps place details screen"/></div>
        </div>
        <div className="feature-grid">{features.map(({icon:Icon,title,text})=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section itinerary-section">
        <div className="itinerary-image image-slot" style={{backgroundImage:"url(/images/aussie-feature-3.webp)"}} role="img" aria-label="AussieCamps trip planner screen"/>
        <div className="itinerary-copy"><span className="section-number">03</span><p className="eyebrow">A planner that comes along</p><h2>Stop by stop.<br/>Day by <em>day.</em></h2><p>Turn saved places into a route you can understand at a glance. Add arrival dates, stop notes, a checklist and nearby alternatives.</p><div className="metric-grid"><div><CalendarDays/><strong>Dates & notes</strong><small>attached to each trip</small></div><div><Route/><strong>Route distance</strong><small>between ordered stops</small></div><div><ListChecks/><strong>Packing list</strong><small>with camping essentials</small></div><div><CloudSun/><strong>Weather</strong><small>when live data is available</small></div></div></div>
      </section>

      <section className="section guide-preview">
        <div className="guide-preview-head"><div><span className="section-number">04</span><p className="eyebrow">Routes worth taking slowly</p><h2>Take the coast.<br/><em>Cross the red dirt.</em></h2></div><div><p>Choose a direction, find tonight’s camp and leave enough room for the places you did not plan.</p><Link href="/guides" className="text-link">Explore road trips <ArrowRight/></Link></div></div>
        <div className="article-grid">{articles.filter(a=>a.category==="Road trips").slice(0,3).map((a,i)=><ArticleCard article={a} priority={i===0} key={a.slug}/>)}</div>
      </section>

      <section className="section audiences"><div className="audience-copy"><p className="eyebrow">However you carry home</p><h2>Made for tents,<br/>vans and <em>big laps.</em></h2></div><div className="audience-grid">{[["Backpackers","Make a tight budget and flexible route work together.",Binoculars],["Campervans","Find the facilities, access and overnight mix you need.",Caravan],["Caravans & big rigs","Filter for space, services and practical access notes.",Navigation],["Weekend campers","Keep nearby favourites ready when Friday arrives.",TentTree]].map(([t,d,I])=>{const Icon=I as typeof TentTree;return <article key={t as string}><Icon/><h3>{t as string}</h3><p>{d as string}</p><ChevronRight/></article>})}</div></section>

      <section className="reviews-section">
        <div className="reviews-head"><div><p className="eyebrow">What travellers say</p><h2>Made for plans<br/>that <em>change.</em></h2></div></div>
        <div className="review-wall">{reviews.map((review,i)=><article className={`review-card review-${i+1}`} key={review.name}><div className="review-stars">★★★★★</div><h3>{review.title}</h3><blockquote>“{review.quote}”</blockquote><footer><span className="review-avatar">{review.name.charAt(0)}</span><span><strong>{review.name}</strong><small>{review.country}</small></span></footer></article>)}</div>
      </section>

      <section className="principles"><div><ShieldCheck/><h2>Useful first.<br/>Honest always.</h2></div><div className="principle-list"><article><span>01</span><div><h3>Signs beat screens</h3><p>On-site notices, land managers and current emergency advice always take priority over a listing.</p></div></article><article><span>02</span><div><h3>Current checks matter</h3><p>Check the latest booking, road, fire and closure updates before departure.</p></div></article><article><span>03</span><div><h3>Leave places better</h3><p>Legal camping, thoughtful waste disposal and respect for Country keep these places open.</p></div></article></div></section>

      <section className="section faq-section"><div><span className="section-number">05</span><p className="eyebrow">A few straight answers</p><h2>Good questions.<br/><em>Clear answers.</em></h2><p>Still stuck? <Link href="/support">Visit support</Link> or send us a note.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

      <section className="download-section"><div className="download-image image-slot" style={{backgroundImage:"url(/images/aussie-download.webp)"}} role="img" aria-label="AussieCamps app screen"/><div className="download-copy"><p className="eyebrow">Your next place is out there</p><h2>Take the map.<br/><em>Make it yours.</em></h2><p>Start exploring Australia in AussieCamps for iPhone.</p><DownloadCard/></div></section>
    </main>
    <a className="mobile-cta" href={APP_STORE_URL}>Download AussieCamps <ArrowRight/></a>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </>;
}
