import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Binoculars, CalendarDays, Caravan, Check, CircleDollarSign, CloudSun, Heart, ListChecks, Map, MapPinned, Navigation, Route, Search, ShieldCheck, Sparkles, TentTree, Trees } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DownloadCard } from "@/components/download-card";
import { ArticleCard } from "@/components/article-card";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL, SITE_URL, articles } from "@/lib/site";

export const metadata: Metadata = {
  title: "AussieCamps | Find camps, plan road trips and explore Australia",
  description: "Explore 74,000+ campsites, caravan parks, rest areas and useful stops across Australia. Filter places, save collections and plan every road trip in one iPhone app.",
  alternates: { canonical: "/" },
};

const features = [
  {icon: Heart, title:"Save every place worth returning to", text:"Star favourites, mark places visited or wanted, and organise camps into custom collections for this weekend or the next big lap."},
  {icon: Route, title:"Plan the complete trip", text:"Put every overnight stop in order, follow the route between them and see the total driving distance before committing to the plan."},
  {icon: ListChecks, title:"Keep notes and to-dos with the route", text:"Attach arrival notes to individual stops and keep the trip checklist beside the itinerary, where it is useful on the road."},
  {icon: CircleDollarSign, title:"Read costs in your currency", text:"Compare reported place costs in the currency you understand instead of converting every stop by hand."},
  {icon: CloudSun, title:"Check the weather around each stay", text:"See current conditions and the forecast while choosing between camps, then recheck official warnings before leaving coverage."},
  {icon: Binoculars, title:"Look Around before the turnoff", text:"Use Apple Look Around where coverage exists to understand the entrance, road and surrounding area before arrival."},
];

const faqs = [
  ["What is AussieCamps?", "AussieCamps is an iPhone app for finding places to camp and stay around Australia, comparing practical details, saving places and building road trips stop by stop."],
  ["What places are included?", "The directory covers 74,000+ places, including 4,000+ accommodation options alongside campgrounds, caravan parks, rest areas, dump points, potable water, day-use areas and experiences."],
  ["Does it work without reception?", "The app bundles its place directory so core place data remains available beyond reliable signal. Live services such as current weather, directions and some map content still need connectivity."],
  ["Can I plan a multi-stop road trip?", "Yes. Create a trip, order stops, add dates and notes, view route distance, track visited places, add packing tasks and sync itinerary details to Calendar."],
  ["Can I filter for free camps or caravan access?", "Yes. Filters cover fee type, category, minimum rating, booking, state and detailed features such as access, amenities, activities, services and affiliations."],
  ["Can I see prices in my own currency?", "Yes. AussieCamps can present reported place costs in your selected currency, making it easier to compare options while travelling."],
  ["Can I book a campsite in AussieCamps?", "Open the booking details for a place to contact its provider and check live availability, prices and terms."],
  ["Are camping rules the same across Australia?", "No. Rules vary by state, territory, council, park and individual site. Always follow current signs, land-manager conditions, fire restrictions and official alerts."],
];

const reviews = [
  { name: "Amélie D.", country: "France", title: "Made our Australian road trip simpler", quote: "We crossed the country with a mix of campsites and holiday parks, and this made choosing each stop much easier. The offline details were a lifesaver." },
  { name: "Michael K.", country: "United States", title: "The filters alone are worth it", quote: "The filters are brilliant when you need a place for a big rig or want to check facilities before driving out of your way. Fast and easy to use." },
  { name: "Priya S.", country: "Canada", title: "Useful for every kind of stop", quote: "We found lovely holiday parks for the family and a few quieter spots for later in the trip. Having prices and access notes together saved so much time." },
  { name: "Lukas H.", country: "Germany", title: "A great companion when plans change", quote: "It helped us find a simple overnight stop when our plans changed, then a beautiful place to stay for a few days. Much better than searching town by town." },
  { name: "Oliver P.", country: "United Kingdom", title: "Clear, practical and easy to trust", quote: "Clear maps, useful details and no fuss. We used it for caravan parks, free camps and a couple of huts, and it became part of our daily routine." },
  { name: "Ben T.", country: "Australia", title: "Did the big lap with this open daily", quote: "Ten months around the country and I opened it every single day. Filtering for rig length and access saved us a lot of wasted kilometres up north." },
  { name: "Sarah N.", country: "New Zealand", title: "Made a long trip feel manageable", quote: "We came over for six weeks and had no idea where to start. Building the route stop by stop and seeing the distance made the whole thing far less daunting." },
  { name: "Femke V.", country: "Netherlands", title: "The offline details were the selling point", quote: "Between Broome and Darwin there is a lot of nothing. Having the place details still readable without signal is what made us keep using it." },
  { name: "Diego R.", country: "Spain", title: "Rest areas and water when we needed them", quote: "Long driving days across the Nullarbor meant planning around fuel, water and somewhere legal to stop. Finding those together in one place made it simple." },
  { name: "Grace O.", country: "Ireland", title: "Good for a tent, not just a caravan", quote: "Most apps feel built for big rigs. We were in a small car with a tent and still found plenty of places that actually suited us." },
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
            <p>Find camps, save the places that matter and turn them into a complete road trip with routes, distance, dates, notes and to-dos.</p>
            <div className="hero-actions"><DownloadCard/><Button asChild variant="outline" size="lg" className="w-[170px] rounded-[14px]"><Link href="/#how-it-works">See how it works <ArrowRight/></Link></Button></div>
            <div className="hero-proof"><span><strong>74,000+</strong><small>places across Australia</small></span><span><strong>4,000+</strong><small>accommodation options</small></span><span><strong>Offline</strong><small>core place details</small></span></div>
          </div>
          <div className="hero-visual">
            <div className="image-slot hero-image-slot" style={{backgroundImage:"url(/images/aussie-hero.webp)"}} role="img" aria-label="AussieCamps map screen" />
          </div>
        </div>
      </section>

      <section className="trust-strip"><p>Campsites, caravan parks and useful stops across Australia.</p><div>{[TentTree,Caravan,Trees,Navigation,Map,CloudSun].map((Icon,i)=><span key={i}><Icon/>{["Campsites","Caravan parks","National parks","Rest areas","Useful stops","Experiences"][i]}</span>)}</div></section>

      <section className="section story-section" id="how-it-works">
        <div className="section-head"><div><p className="eyebrow">From idea to open road</p><h2>Find a camp.<br/>Build the trip.</h2></div><p>Find tonight’s camp, save tomorrow’s possibilities and keep the route, distance, notes and to-dos together.</p></div>
        <div className="steps-grid">
          <article><Search/><h3>Find the right place</h3><p>Search 74,000+ places, browse nearby and filter for the access, facilities and price that suit your setup.</p></article>
          <article><Heart/><h3>Save places without losing them</h3><p>Keep favourites, future stops and custom collections organised while the route is still taking shape.</p></article>
          <article><Route/><h3>Turn saved places into a trip</h3><p>Order the stops, calculate the route and distance, then add dates, notes and to-dos to the same plan.</p></article>
        </div>
      </section>

      <section className="feature-stage" id="features">
        <div className="feature-intro"><p className="eyebrow">The full toolkit</p><h2>Find it. Save it.<br/>Plan the whole road ahead.</h2><p>Explore places, compare the details, organise favourites and build a trip that stays useful after the planning table.</p></div>
        <div className="feature-showcase">
          <div className="feature-copy-large"><div className="icon-tile"><MapPinned/></div><p className="eyebrow">Explore and save</p><h3>Australia’s camping places, ready for a real plan.</h3><p>Move from national parks to caravan parks, free camps, rest areas and useful services, then save the strongest options directly into collections and trips.</p><ul><li><Check/>Map, list and satellite views</li><li><Check/>Powerful access and facility filters</li><li><Check/>Offline core place details</li></ul></div>
          <div className="product-images"><div className="image-slot product-shot product-shot-one" style={{backgroundImage:"url(/images/aussie-feature-1.webp)"}} role="img" aria-label="AussieCamps explore screen"/><div className="image-slot product-shot product-shot-two" style={{backgroundImage:"url(/images/aussie-feature-2.webp)"}} role="img" aria-label="AussieCamps place details screen"/></div>
        </div>
        <div className="feature-grid">{features.map(({icon:Icon,title,text})=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section itinerary-section">
        <div className="itinerary-image image-slot" style={{backgroundImage:"url(/images/aussie-feature-3.webp)"}} role="img" aria-label="AussieCamps trip planner screen"/>
        <div className="itinerary-copy"><p className="eyebrow">A planner that comes along</p><h2>Stop by stop.<br/>Day by <em>day.</em></h2><p>Turn saved places into an ordered route you can understand at a glance. Calculate the drive, add dates and stop notes, keep to-dos beside the itinerary and hold nearby alternatives for the days that change.</p><div className="metric-grid"><div><Route/><strong>Route & distance</strong><small>across ordered stops</small></div><div><CalendarDays/><strong>Dates & notes</strong><small>attached to every stop</small></div><div><ListChecks/><strong>Trip to-dos</strong><small>and packing tasks together</small></div><div><CloudSun/><strong>Place weather</strong><small>when live data is available</small></div></div></div>
      </section>

      <section className="section guide-preview">
        <div className="guide-preview-head"><div><p className="eyebrow">Routes worth taking slowly</p><h2>Take the coast.<br/><em>Cross the red dirt.</em></h2></div><div><p>Choose a direction, save the camps that fit and turn the strongest stops into a route of your own.</p><Link href="/guides" className="text-link">Explore road trips <ArrowRight/></Link></div></div>
        <div className="article-grid">{articles.filter(a=>a.category==="Road trips").slice(0,3).map((a,i)=><ArticleCard article={a} priority={i===0} key={a.slug}/>)}</div>
      </section>

      <section className="section audiences"><div className="audience-copy"><p className="eyebrow">However you carry home</p><h2>Made for tents,<br/>vans and <em>big laps.</em></h2></div><div className="audience-grid">{[["Backpackers","Make a tight budget and flexible route work together.",Binoculars],["Campervans","Find the facilities, access and overnight mix you need.",Caravan],["Caravans & big rigs","Filter for space, services and practical access notes.",Navigation],["Weekend campers","Keep nearby favourites ready when Friday arrives.",TentTree]].map(([t,d,I])=>{const Icon=I as typeof TentTree;return <article key={t as string}><Icon/><h3>{t as string}</h3><p>{d as string}</p></article>})}</div></section>

      <section className="reviews-section">
        <div className="reviews-head"><div><p className="eyebrow">What travellers say</p><h2>Made for plans<br/>that <em>change.</em></h2></div></div>
        <div className="review-wall">{reviews.map((review,i)=><article className={`review-card review-${i+1}`} key={review.name}><div className="review-stars">★★★★★</div><h3>{review.title}</h3><blockquote>“{review.quote}”</blockquote><footer><span className="review-avatar">{review.name.charAt(0)}</span><span><strong>{review.name}</strong><small>{review.country}</small></span></footer></article>)}</div>
      </section>

      <section className="principles"><div><ShieldCheck/><h2>Useful first.<br/>Honest always.</h2></div><div className="principle-list"><article><div><h3>Signs beat screens</h3><p>On-site notices, land managers and current emergency advice always take priority over a listing.</p></div></article><article><div><h3>Current checks matter</h3><p>Check the latest booking, road, fire and closure updates before departure.</p></div></article><article><div><h3>Leave places better</h3><p>Legal camping, thoughtful waste disposal and respect for Country keep these places open.</p></div></article></div></section>

      <section className="section faq-section"><div><p className="eyebrow">A few straight answers</p><h2>Good questions.<br/><em>Clear answers.</em></h2><p>Still stuck? <Link href="/support">Visit support</Link> or send us a note.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

      <section className="download-section"><div className="download-image image-slot" style={{backgroundImage:"url(/images/aussie-download.webp)"}} role="img" aria-label="AussieCamps app screen"/><div className="download-copy"><p className="eyebrow">Your next place is out there</p><h2>Find it. Save it.<br/><em>Plan the road ahead.</em></h2><p>Explore Australia, organise favourite places and keep the route, distance, notes and to-dos together in AussieCamps for iOS.</p><DownloadCard/></div></section>
    </main>
    <Button asChild className="mobile-cta"><a href={APP_STORE_URL}>Download for iOS <ArrowRight/></a></Button>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </>;
}
