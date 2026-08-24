import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowRightLeft, ArrowUpRight, Binoculars, CalendarDays, Calculator, Caravan, Check, CircleDollarSign, Clock, CloudSun, Droplets, Fuel, Heart, Layers, ListChecks, Map, MapPin, MapPinned, Menu, Navigation, Route, Search, ShieldCheck, SlidersHorizontal, TentTree, Trees, Wallet } from "lucide-react";
import { FaApple } from "react-icons/fa6";
import { BrandMark } from "./brand-mark";
import { Button } from "./ui/button";
import { APP_STORE_URL, SITE_URL, SUPPORT_EMAIL, type Article } from "@/lib/site";
import { currencyRates, displayCurrencies, exchangeRateDate, formatAudRange } from "@/lib/currency";
import { getPage, getTranslation, localizedArticles, localizedCategories, localeCodes, localeLabels, type LocaleCode } from "@/lib/localized";
import { articleSchema, homeSchema } from "@/lib/seo";
import type { StaticPageKind } from "@/lib/source-strings";

const prefix = (locale: LocaleCode, path = "") => `/${locale}${path}`;

function LanguageNav({ locale }: { locale: LocaleCode }) {
  return <nav className="language-nav" aria-label="Languages"><Link href="/">English</Link>{localeCodes.map((code) => <Link href={`/${code}`} aria-current={code === locale ? "page" : undefined} key={code}>{localeLabels[code]}</Link>)}</nav>;
}

export function LocalizedHeader({ locale }: { locale: LocaleCode }) {
  const ui = getTranslation(locale);
  return <header className="site-header"><div className="nav-wrap"><Link href={prefix(locale)} className="brand-link"><BrandMark/></Link><nav className="desktop-nav" aria-label="Main navigation"><Link href={`${prefix(locale)}#features`}>{ui.navFeatures}</Link><Link href={prefix(locale,"/guides")}>{ui.navGuides}</Link><Link href={prefix(locale,"/tools")}>{ui.navTools}</Link><Link href={prefix(locale,"/support")}>{ui.navSupport}</Link></nav><Button asChild size="sm" className="desktop-download"><a href={APP_STORE_URL}>{ui.download}</a></Button><Button asChild size="sm" className="mobile-download"><a href={APP_STORE_URL}>{ui.downloadShort}</a></Button><details className="mobile-menu"><summary aria-label="Open menu"><Menu size={22}/></summary><nav aria-label="Mobile navigation"><Link href={`${prefix(locale)}#features`}>{ui.navFeatures}</Link><Link href={prefix(locale,"/guides")}>{ui.navGuides}</Link><Link href={prefix(locale,"/tools")}>{ui.navTools}</Link><Link href={prefix(locale,"/support")}>{ui.navSupport}</Link><a href={APP_STORE_URL}>{ui.download}</a></nav></details></div></header>;
}

export function LocalizedFooter({ locale }: { locale: LocaleCode }) {
  const ui = getTranslation(locale);
  return <footer className="footer"><div className="footer-grid"><div><BrandMark/><p>{ui.footerText}</p></div><div><strong>{ui.explore}</strong><Link href={prefix(locale,"/guides")}>{ui.travelGuides}</Link><Link href={prefix(locale,"/tools")}>{ui.navTools}</Link><Link href={`${prefix(locale)}#features`}>{ui.navFeatures}</Link></div><div><strong>{ui.help}</strong><Link href={prefix(locale,"/support")}>{ui.navSupport}</Link><a href={`mailto:${SUPPORT_EMAIL}`}>{ui.contact}</a></div><div><strong>{ui.getApp}</strong><a href={APP_STORE_URL}>{ui.download}</a><Link href={prefix(locale,"/privacy")}>{ui.privacy}</Link><Link href={prefix(locale,"/terms")}>{ui.terms}</Link></div></div><LanguageNav locale={locale}/><div className="footer-bottom"><span>© {new Date().getFullYear()} <a href="https://cntxtlabs.co/">Cntxt Labs</a></span><span>{ui.footerLine}</span></div></footer>;
}

/** The QR card plus the store button, exactly as the English pages show it. */
function LocalizedDownloadCard({ locale }: { locale: LocaleCode }) {
  return <div className="download-card"><div className="qr-image" style={{ "--qr": "url(/images/aussie-qr.png)" } as React.CSSProperties}/><StoreLink locale={locale}/></div>;
}

function StoreLink({ locale }: { locale: LocaleCode }) { const ui = getTranslation(locale); return <a className="store-button" href={APP_STORE_URL}><FaApple aria-hidden="true"/><span>{ui.download}</span></a>; }

function LocalizedCard({ article, locale, priority = false }: { article: Article; locale: LocaleCode; priority?: boolean }) {
  const ui = getTranslation(locale);
  const label = localizedCategories(locale).find((entry) => entry.source === article.category)?.label ?? article.category;
  return <Link className={`article-card ${priority ? "article-card-featured" : ""}`} href={prefix(locale,`/guides/${article.slug}`)}><div className="article-image" style={{backgroundImage:`linear-gradient(180deg, transparent 35%, rgba(16,26,13,.45)), url(${article.image})`}}><span>{label}</span></div><div className="article-card-copy"><div className="eyebrow"><MapPin size={13}/>{article.region} · {article.readTime} min</div><h3>{article.title}</h3><p>{article.description}</p><span className="text-link">{ui.readGuide} <ArrowUpRight size={15}/></span></div></Link>;
}

export function LocalizedHome({ locale }: { locale: LocaleCode }) {
  const ui = getTranslation(locale);
  const articleList = localizedArticles(locale);
  const features = [[Layers,ui.feature1Title,ui.feature1Text],[SlidersHorizontal,ui.feature2Title,ui.feature2Text],[Map,ui.feature3Title,ui.feature3Text],[Binoculars,ui.feature4Title,ui.feature4Text],[CloudSun,ui.feature5Title,ui.feature5Text],[CircleDollarSign,ui.feature6Title,ui.feature6Text]] as const;
  const reviews = [["Amélie D.",ui.review1Country,ui.review1Title,ui.review1Quote],["Michael K.",ui.review2Country,ui.review2Title,ui.review2Quote],["Priya S.",ui.review3Country,ui.review3Title,ui.review3Quote],["Lukas H.",ui.review4Country,ui.review4Title,ui.review4Quote],["Oliver P.",ui.review5Country,ui.review5Title,ui.review5Quote],["Ben T.",ui.review6Country,ui.review6Title,ui.review6Quote],["Sarah N.",ui.review7Country,ui.review7Title,ui.review7Quote],["Femke V.",ui.review8Country,ui.review8Title,ui.review8Quote],["Grace O.",ui.review9Country,ui.review9Title,ui.review9Quote]];
  const faqs = [[ui.faq1q,ui.faq1a],[ui.faq2q,ui.faq2a],[ui.faq3q,ui.faq3a],[ui.faq4q,ui.faq4a],[ui.faq5q,ui.faq5a],[ui.faq6q,ui.faq6a],[ui.faq7q,ui.faq7a],[ui.faq8q,ui.faq8a],[ui.faq9q,ui.faq9a],[ui.faq10q,ui.faq10a],[ui.faq11q,ui.faq11a]];
  const audiences = [[Binoculars,ui.audience1Title,ui.audience1Text],[Caravan,ui.audience2Title,ui.audience2Text],[Navigation,ui.audience3Title,ui.audience3Text],[TentTree,ui.audience4Title,ui.audience4Text]] as const;
  // Localised pages carry the same structured data as English, with the FAQ in their own language.
  const schema = homeSchema(ui.metaDescription, faqs as [string, string][]);
  return <>
    <LocalizedHeader locale={locale}/>
    <main>
      <section className="hero"><div className="hero-glow"/><div className="hero-grid"><div className="hero-copy"><span className="kicker"><Caravan size={14}/> {ui.heroKicker}</span><h1>{ui.heroTitle}</h1><p>{ui.heroText}</p><div className="hero-actions"><LocalizedDownloadCard locale={locale}/><Button asChild variant="outline" size="lg" className="rounded-[14px]"><Link href={`${prefix(locale)}#features`}>{ui.seeHow}<ArrowRight/></Link></Button></div><div className="hero-proof"><span><strong>{ui.statPlaces}</strong><small>{ui.statPlacesLabel}</small></span><span><strong>{ui.statOffline}</strong><small>{ui.statOfflineLabel}</small></span><span><strong>{ui.statStays}</strong><small>{ui.statStaysLabel}</small></span></div></div><div className="hero-visual"><div className="image-slot hero-image-slot" style={{backgroundImage:"url(/images/aussie-hero.webp)"}}/></div></div></section>

      <section className="trust-strip"><p>{ui.trustLine}</p><div>{[TentTree,Caravan,Trees,Navigation,Map,CloudSun].map((Icon,i)=><span key={i}><Icon/>{[ui.trustCampsites,ui.trustCaravanParks,ui.trustNationalParks,ui.trustRestAreas,ui.trustUsefulStops,ui.trustExperiences][i]}</span>)}</div></section>

      <section className="section story-section" id="how-it-works"><div className="section-head"><div><p className="eyebrow">{ui.processEyebrow}</p><h2>{ui.processTitle}</h2></div><p>{ui.processText}</p></div><div className="steps-grid">{[[Search,ui.findTitle,ui.findText],[Heart,ui.saveTitle,ui.saveText],[Route,ui.planTitle,ui.planText]].map(([Icon,title,text])=><article key={String(title)}><Icon/><h3>{String(title)}</h3><p>{String(text)}</p></article>)}</div></section>

      <section className="feature-stage" id="features"><div className="feature-intro"><p className="eyebrow">{ui.featuresEyebrow}</p><h2>{ui.featuresTitle}</h2><p>{ui.featuresText}</p></div><div className="feature-showcase"><div className="feature-copy-large"><div className="icon-tile"><MapPinned/></div><p className="eyebrow">{ui.featureMainEyebrow}</p><h3>{ui.featureMainTitle}</h3><p>{ui.featureMainText}</p><ul><li><Check/>{ui.featureList1}</li><li><Check/>{ui.featureList2}</li><li><Check/>{ui.featureList3}</li></ul></div><div className="product-images"><div className="image-slot product-shot product-shot-one" style={{backgroundImage:"url(/images/aussie-feature-1.webp)"}}/><div className="image-slot product-shot product-shot-two" style={{backgroundImage:"url(/images/aussie-feature-2.webp)"}}/></div></div><div className="feature-grid">{features.map(([Icon,title,text])=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="section itinerary-section"><div className="itinerary-image image-slot" style={{backgroundImage:"url(/images/aussie-feature-3.webp)"}}/><div className="itinerary-copy"><p className="eyebrow">{ui.plannerEyebrow}</p><h2>{ui.plannerTitle}</h2><p>{ui.plannerText}</p><div className="metric-grid"><div><Route/><strong>{ui.plannerMetric1Title}</strong><small>{ui.plannerMetric1Text}</small></div><div><CalendarDays/><strong>{ui.plannerMetric2Title}</strong><small>{ui.plannerMetric2Text}</small></div><div><ListChecks/><strong>{ui.plannerMetric3Title}</strong><small>{ui.plannerMetric3Text}</small></div><div><CloudSun/><strong>{ui.plannerMetric4Title}</strong><small>{ui.plannerMetric4Text}</small></div></div></div></section>

      <section className="section guide-preview"><div className="guide-preview-head"><div><p className="eyebrow">{ui.routesEyebrow}</p><h2>{ui.routesTitle}</h2></div><div><p>{ui.routesText}</p><Link href={prefix(locale,"/guides")} className="text-link">{ui.exploreRoutes}<ArrowRight/></Link></div></div><div className="article-grid guide-preview-grid">{articleList.slice(0,5).map((article,index)=><LocalizedCard article={article} locale={locale} priority={index===0} key={article.slug}/>)}</div></section>

      <section className="section audiences"><div className="audience-copy"><p className="eyebrow">{ui.audiencesEyebrow}</p><h2>{ui.audiencesTitle}</h2></div><div className="audience-grid">{audiences.map(([Icon,title,text])=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="reviews-section"><div className="reviews-head"><div><p className="eyebrow">{ui.reviewsEyebrow}</p><h2>{ui.reviewsTitle}</h2></div></div><div className="review-wall">{reviews.map(([name,country,title,quote],index)=><article className={`review-card review-${index+1}`} key={name}><div className="review-stars">★★★★★</div><h3>{title}</h3><blockquote>“{quote}”</blockquote><footer><span className="review-avatar">{name[0]}</span><span><strong>{name}</strong><small>{country}</small></span></footer></article>)}</div></section>

      <section className="principles"><div><ShieldCheck/><h2>{ui.principlesTitle}</h2></div><div className="principle-list">{[[ui.principle1Title,ui.principle1Text],[ui.principle2Title,ui.principle2Text],[ui.principle3Title,ui.principle3Text]].map(([title,text])=><article key={title}><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

      <section className="section faq-section"><div><p className="eyebrow">{ui.faqEyebrow}</p><h2>{ui.faqTitle}</h2><p>{ui.faqIntro}</p></div><div className="faq-list">{faqs.map(([question,answer],index)=><details key={question} open={index===0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="download-section"><div className="download-image image-slot" style={{backgroundImage:"url(/images/aussie-download.webp)"}}/><div className="download-copy"><p className="eyebrow">{ui.downloadEyebrow}</p><h2>{ui.downloadTitle}</h2><p>{ui.downloadText}</p><LocalizedDownloadCard locale={locale}/></div></section>
    </main>
    <Button asChild className="mobile-cta"><a href={APP_STORE_URL}><FaApple aria-hidden="true"/><span>{ui.download}</span></a></Button>
    <LocalizedFooter locale={locale}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </>;
}

export function LocalizedGuides({ locale }: { locale: LocaleCode }) {
  const ui = getTranslation(locale);
  const list = localizedArticles(locale);
  return <><LocalizedHeader locale={locale}/><main><section className="page-hero guides-hero"><p className="eyebrow">{ui.guidesEyebrow}</p><h1>{ui.guidesTitle}</h1><p>{list.length} {ui.guidesIntro}</p></section><section className="content-shell">{localizedCategories(locale).map(({source,label})=>{const group=list.filter((article)=>article.category===source);if(!group.length)return null;return <section className="category-section" key={source}><div className="category-heading"><h2>{label}</h2><span>{group.length} {group.length===1?ui.guideSingular:ui.guidePlural}</span></div><div className="article-grid">{group.map((article)=><LocalizedCard article={article} locale={locale} key={article.slug}/>)}</div></section>;})}</section></main><LocalizedFooter locale={locale}/></>;
}

export function LocalizedArticle({ locale, slug }: { locale: LocaleCode; slug: string }) {
  const ui = getTranslation(locale);
  const list = localizedArticles(locale);
  const item = list.find((article) => article.slug === slug);
  if (!item) return null;
  const categoryLabel = localizedCategories(locale).find((entry) => entry.source === item.category)?.label ?? item.category;
  const related = list.filter((article) => article.slug !== slug && (article.category === item.category || article.region === item.region)).slice(0, 3);
  const schema = articleSchema({...item, category: categoryLabel}, `${SITE_URL}/${locale}/guides/${item.slug}`);
  return <><LocalizedHeader locale={locale}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><main><article className="article-page"><div className="article-breadcrumb"><Link href={prefix(locale,"/guides")}><ArrowLeft/>{ui.backToGuides}</Link><span>{categoryLabel}</span></div><header className="article-header"><p className="eyebrow">{categoryLabel} · {item.region}</p><h1>{item.title}</h1><p>{item.description}</p><div><span><Clock/>{item.readTime} {ui.minuteRead}</span><span><MapPin/>{item.places.length} {ui.places}</span></div></header><figure className="article-hero-image" style={{backgroundImage:`url(${item.image})`}} aria-label={item.imageAlt}><figcaption className="article-photo-credit"><a href="https://github.com/CristianRus4/aussiecamps-web/tree/main/docs">{ui.photoCredits}</a></figcaption></figure><div className="article-layout"><div className="article-body"><p className="article-intro">{item.intro}</p>
  {item.priceTable&&<section className="article-price-section"><span className="section-count">AUD</span><h2>{ui.priceTitle}</h2><p>{item.priceTable.note}</p><div className="price-table-meta"><strong>{ui.pricesChecked} {item.priceTable.asOf}</strong><span>{ui.conversionsUse} {exchangeRateDate}.</span></div><div className="price-table-wrap"><table className="price-table"><thead><tr><th>{ui.item}</th>{displayCurrencies.map((currency)=><th key={currency}>{currency}</th>)}</tr></thead><tbody>{item.priceTable.rows.map((row)=><tr key={row.label}><th><strong>{row.label}</strong>{row.unit&&<span>{row.unit}</span>}</th>{displayCurrencies.map((currency)=><td key={currency}>{formatAudRange(row.audLow,row.audHigh,currency)}</td>)}</tr>)}</tbody></table></div><p className="price-table-disclaimer">{ui.currencyDisclaimer}</p></section>}
  {item.sections.map((section,index)=><section key={section.heading}><span className="section-count">{String(index+1).padStart(2,"0")}</span><h2>{section.heading}</h2>{section.body.map((paragraph:string)=><p key={paragraph}>{paragraph}</p>)}{section.tips&&<div className="article-tips"><strong>{ui.keepInMind}</strong><ul>{section.tips.map((tip)=><li key={tip}>{tip}</li>)}</ul></div>}</section>)}<section><span className="section-count">MAP</span><h2>{ui.placesAlong}</h2><div className="place-chips">{item.places.map((place)=><span key={place}><MapPin/>{place}</span>)}</div></section>{item.sources&&<section className="sources"><h2>{ui.checkBefore}</h2><p>{ui.checkText}</p><ul>{item.sources.map((source)=><li key={source.url}><a href={source.url}>{source.label}<ArrowRight/></a></li>)}</ul></section>}<div className="article-end-cta"><div><p className="eyebrow">{ui.takeRoad}</p><h2>{ui.savePlanTitle}</h2><p>{ui.savePlanText}</p></div><StoreLink locale={locale}/></div></div></div></article><section className="related-section"><h2>{ui.related}</h2><div className="article-grid">{related.map((article)=><LocalizedCard article={article} locale={locale} key={article.slug}/>)}</div></section></main><LocalizedFooter locale={locale}/></>;
}

export function LocalizedTools({ locale }: { locale: LocaleCode }) {
  const ui = getTranslation(locale);
  // The same single inline script the English /tools page uses, with its two user-visible strings
  // injected from the translation so a localised page never falls back to English mid-calculation.
  const script = `(function(){
const rates=${JSON.stringify(currencyRates)};
const invalid=${JSON.stringify(ui.enterValidValues)},invalidAmount=${JSON.stringify(ui.enterValidAmount)};
const money=(value,currency)=>new Intl.NumberFormat('${locale}',{style:'currency',currency,maximumFractionDigits:currency==='JPY'||currency==='KRW'?0:value<10?2:0}).format(value);
const aud=(value)=>'A$'+value.toFixed(2);
const num=(root,name)=>Number(root.querySelector('[data-'+name+']').value);
const bind=(selector,update)=>{const root=document.querySelector(selector);if(!root)return;root.addEventListener('input',update.bind(null,root));root.addEventListener('change',update.bind(null,root));update(root)};
bind('[data-currency-tool]',(root)=>{const amount=num(root,'currency-amount');const from=root.querySelector('[data-currency-from]').value;const to=root.querySelector('[data-currency-to]').value;root.querySelector('[data-currency-output]').textContent=Number.isFinite(amount)&&amount>=0?money(amount/rates[from]*rates[to],to):invalidAmount});
bind('[data-fuel-tool]',(root)=>{const distance=num(root,'fuel-distance'),consumption=num(root,'fuel-consumption'),price=num(root,'fuel-price');const valid=[distance,consumption,price].every(v=>Number.isFinite(v)&&v>=0);const litres=distance*consumption/100;root.querySelector('[data-fuel-output]').textContent=valid?litres.toFixed(1)+' L · '+aud(litres*price):invalid});
bind('[data-drive-tool]',(root)=>{const distance=num(root,'drive-distance'),speed=Number(root.querySelector('[data-drive-speed]').value),stops=num(root,'drive-stops');const valid=[distance,speed,stops].every(v=>Number.isFinite(v)&&v>=0)&&speed>0;if(!valid){root.querySelector('[data-drive-output]').textContent=invalid;return}
const minutes=Math.round(distance/speed*60+stops*20);root.querySelector('[data-drive-output]').textContent=Math.floor(minutes/60)+' h '+String(minutes%60).padStart(2,'0')+' min'});
bind('[data-tank-tool]',(root)=>{const fresh=num(root,'tank-fresh'),grey=num(root,'tank-grey'),people=num(root,'tank-people');const valid=[fresh,grey,people].every(v=>Number.isFinite(v)&&v>=0)&&people>0;if(!valid){root.querySelector('[data-tank-output]').textContent=invalid;return}
const freshDays=fresh/(people*11),greyDays=grey/(people*9);root.querySelector('[data-tank-output]').textContent=freshDays.toFixed(1)+' ${ui.daysFresh} · '+greyDays.toFixed(1)+' ${ui.daysGrey}'});
bind('[data-camp-tool]',(root)=>{const adults=num(root,'camp-adults'),nights=num(root,'camp-nights'),perPerson=num(root,'camp-per-person'),perSite=num(root,'camp-per-site');const valid=[adults,nights,perPerson,perSite].every(v=>Number.isFinite(v)&&v>=0);if(!valid){root.querySelector('[data-camp-output]').textContent=invalid;return}
const a=adults*nights*perPerson,b=nights*perSite;root.querySelector('[data-camp-output]').textContent=aud(a)+' vs '+aud(b)+' · '+(a===b?${JSON.stringify(ui.theSame)}:(a<b?${JSON.stringify(ui.perAdultCheaper)}:${JSON.stringify(ui.perSiteCheaper)}))});
})();`;
  return <><LocalizedHeader locale={locale}/><main>
    <section className="page-hero tools-hero"><p className="eyebrow">{ui.toolsEyebrow}</p><h1>{ui.toolsTitle}</h1><p>{ui.toolsIntro}</p></section>
    <section className="tools-shell">
      <section className="tool-card" data-currency-tool><div className="tool-heading"><ArrowRightLeft/><div><p className="eyebrow">{ui.currencyEyebrow}</p><h2>{ui.currencyTitle}</h2></div></div><p>{ui.currencyText} {exchangeRateDate}.</p><div className="converter-grid"><label><span>{ui.amount}</span><input data-currency-amount inputMode="decimal" defaultValue="100"/></label><label><span>{ui.from}</span><select data-currency-from defaultValue="AUD">{displayCurrencies.map((currency)=><option value={currency} key={currency}>{currency}</option>)}</select></label><label><span>{ui.to}</span><select data-currency-to defaultValue="NZD">{displayCurrencies.map((currency)=><option value={currency} key={currency}>{currency}</option>)}</select></label></div><output className="tool-output" data-currency-output>NZD 120</output></section>
      <section className="tool-card" data-fuel-tool><div className="tool-heading"><Fuel/><div><p className="eyebrow">{ui.fuelEyebrow}</p><h2>{ui.fuelTitle}</h2></div></div><p>{ui.fuelText}</p><div className="converter-grid"><label><span>{ui.labelDistance}</span><input data-fuel-distance inputMode="decimal" defaultValue="1000"/></label><label><span>{ui.labelConsumption}</span><input data-fuel-consumption inputMode="decimal" defaultValue="12"/></label><label><span>{ui.labelFuelPrice}</span><input data-fuel-price inputMode="decimal" defaultValue="2.08"/></label></div><output className="tool-output" data-fuel-output>120.0 L · A$249.60</output></section>
      <section className="tool-card" data-drive-tool><div className="tool-heading"><Clock/><div><p className="eyebrow">{ui.driveEyebrow}</p><h2>{ui.driveTitle}</h2></div></div><p>{ui.driveText}</p><div className="converter-grid"><label><span>{ui.labelDistance}</span><input data-drive-distance inputMode="decimal" defaultValue="250"/></label><label><span>{ui.labelRoadType}</span><select data-drive-speed defaultValue="60"><option value="85">{ui.roadMotorway}</option><option value="70">{ui.roadHighway}</option><option value="60">{ui.roadWinding}</option><option value="45">{ui.roadNarrow}</option></select></label><label><span>{ui.labelStops}</span><input data-drive-stops inputMode="numeric" defaultValue="3"/></label></div><output className="tool-output" data-drive-output>4 h 32 min</output></section>
      <section className="tool-card" data-tank-tool><div className="tool-heading"><Droplets/><div><p className="eyebrow">{ui.tankEyebrow}</p><h2>{ui.tankTitle}</h2></div></div><p>{ui.tankText}</p><div className="converter-grid"><label><span>{ui.labelFresh}</span><input data-tank-fresh inputMode="decimal" defaultValue="100"/></label><label><span>{ui.labelGrey}</span><input data-tank-grey inputMode="decimal" defaultValue="90"/></label><label><span>{ui.labelPeople}</span><input data-tank-people inputMode="numeric" defaultValue="2"/></label></div><output className="tool-output" data-tank-output>4.5 {ui.daysFresh} · 4.5 {ui.daysGrey}</output></section>
      <section className="tool-card" data-camp-tool><div className="tool-heading"><Wallet/><div><p className="eyebrow">{ui.campEyebrow}</p><h2>{ui.campTitle}</h2></div></div><p>{ui.campText}</p><div className="converter-grid"><label><span>{ui.labelAdults}</span><input data-camp-adults inputMode="numeric" defaultValue="2"/></label><label><span>{ui.labelNights}</span><input data-camp-nights inputMode="numeric" defaultValue="5"/></label><label><span>{ui.labelPerAdult}</span><input data-camp-per-person inputMode="decimal" defaultValue="20"/></label><label><span>{ui.labelPerSite}</span><input data-camp-per-site inputMode="decimal" defaultValue="50"/></label></div><output className="tool-output" data-camp-output>A$200 vs A$250 · {ui.perAdultCheaper}</output></section>
      <section className="tools-reading"><div><CircleDollarSign/><h2>{ui.toolsReadingTitle}</h2></div><p>{ui.toolsReadingText}</p><Link href={prefix(locale,"/guides")} className="text-link">{ui.toolsReadingLink} <ArrowRight/></Link></section>
      <section className="tools-note"><Calculator/><p>{ui.calculatorNote}</p></section>
    </section>
  </main><LocalizedFooter locale={locale}/><script data-static-tools dangerouslySetInnerHTML={{__html:script}}/></>;
}

export function LocalizedInformationPage({ locale, kind }: { locale: LocaleCode; kind: StaticPageKind }) {
  const ui = getTranslation(locale);
  const page = getPage(locale, kind);
  return <><LocalizedHeader locale={locale}/><main className={kind==="support"?undefined:"legal-page"}>{kind==="support"?<section className="page-hero support-hero"><p className="eyebrow">{ui.navSupport}</p><h1>{page.title}</h1><p>{page.lede}</p><Button asChild size="lg"><a href={`mailto:${SUPPORT_EMAIL}`}>{ui.contact}</a></Button></section>:<><p className="eyebrow">{page.effective}</p><h1>{page.title}</h1><p className="legal-lede">{page.lede}</p></>}<section className={kind==="support"?"support-shell":undefined}>{page.sections.map((section)=><section className={kind==="support"?"support-group":undefined} key={section.heading}><div><h2>{section.heading}</h2></div><div>{section.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}</div></section>)}</section></main><LocalizedFooter locale={locale}/></>;
}
