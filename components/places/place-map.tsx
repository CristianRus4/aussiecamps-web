/**
 * The map on every listing and place page: OpenStreetMap through OpenFreeMap's Positron style (its Dark
 * style when the reader's system is in dark mode, like the rest of the site), drawn by MapLibre, turned
 * grey and faint, with the places as dots on top. Readers can move it (a mouse drag; two fingers on a
 * phone, with MapLibre's cooperative-gestures hint, so one finger still scrolls the page) and zoom with
 * the + and − buttons; the scroll wheel always scrolls the page. It fills the width of the page and
 * frames the dots in the middle.
 *
 * A map of many places clusters its dots while zoomed out (a tap on a cluster zooms in). When the page
 * gives the places' `labels`, a dot shows its name on hover; a click opens its page on a desktop, a tap
 * on a phone opens a small card linking to it.
 *
 * The page carries the points, rounded (2 decimals, about a kilometre, unless `precision` says otherwise),
 * and any labels; MapLibre and the tiles load from their CDNs when the map scrolls into view. The loader is
 * a `data-static-tools` script, the kind the static export keeps, and runs once however many maps a page
 * has. Without JavaScript or WebGL the box stays empty.
 */
const LIB = "https://cdn.jsdelivr.net/npm/maplibre-gl@4.7.1/dist/maplibre-gl.";
const STYLE = "https://tiles.openfreemap.org/styles/positron";
const DARK_STYLE = "https://tiles.openfreemap.org/styles/dark";
/** Above this many dots a map clusters them while zoomed out. */
const CLUSTER_FROM = 150;

export const mapScript = `(function(){if(window.plMap)return;window.plMap=1;
var q=[],started=0,style=null,font=null;
var grey={background:["background-color","#eeefec"],park:["fill-color","#e8e9e6"],water:["fill-color","#d3d6d6"],waterway:["line-color","#d3d6d6"],landcover_wood:["fill-color","#e6e7e4"],landcover_glacier:["fill-color","#f3f3f1"],landcover_ice_shelf:["fill-color","#f3f3f1"],landuse_residential:["fill-color","#e7e7e5"]};
var fine=window.matchMedia&&matchMedia("(hover: hover) and (pointer: fine)").matches;
function load(){if(started)return;started=1;var c=document.createElement("link");c.rel="stylesheet";c.href="${LIB}css";document.head.appendChild(c);
var s=document.createElement("script");s.src="${LIB}js";s.onload=function(){var dark=window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches;fetch(dark?"${DARK_STYLE}":"${STYLE}").then(function(r){return r.json();}).then(function(j){
j.layers.forEach(function(l){l.paint=l.paint||{};if(grey[l.id]&&!dark)l.paint[grey[l.id][0]]=grey[l.id][1];if(l.type==="symbol"){l.paint["text-opacity"]=0.55;l.paint["icon-opacity"]=0.4;if(!font&&l.layout&&l.layout["text-font"])font=l.layout["text-font"];}if(l.type==="line"&&!grey[l.id])l.paint["line-opacity"]=0.6;});
style=j;var w=q;q=null;w.forEach(draw);}).catch(function(){});};document.head.appendChild(s);}
function fc(p,lb,ty){return{type:"FeatureCollection",features:p.map(function(c,i){var pr={};if(lb&&lb[i]){pr.n=lb[i][0];pr.u="/places/"+lb[i][1]+"/";pr.t=ty&&ty[lb[i][2]]||"";}return{type:"Feature",properties:pr,geometry:{type:"Point",coordinates:c}};})};}
function card(pr){var a=document.createElement("a");a.className="pl-map-card";a.href=/^\\/places\\//.test(pr.u)?pr.u:"#";var b=document.createElement("strong");b.textContent=pr.n;a.appendChild(b);if(pr.t){var t=document.createElement("small");t.textContent=pr.t;a.appendChild(t);}return a;}
function draw(el){try{var d=JSON.parse(el.getAttribute("data-pl-map")),p=d.p,f=d.f,lb=d.l||null,ty=d.t||null,all=f?p.concat([f]):p;if(!all.length)return;
var col=getComputedStyle(el).getPropertyValue("--fern").trim()||"#49642f",w=180,s=90,e=-180,n=-90,many=p.length>${CLUSTER_FROM};
all.forEach(function(c){w=Math.min(w,c[0]);e=Math.max(e,c[0]);s=Math.min(s,c[1]);n=Math.max(n,c[1]);});
var o={container:el,style:style,attributionControl:false,fadeDuration:0,scrollZoom:false,cooperativeGestures:true,dragRotate:false,pitchWithRotate:false,touchPitch:false,boxZoom:false,keyboard:false};
if(e-w<0.01&&n-s<0.01){o.center=[(w+e)/2,(s+n)/2];o.zoom=11;}else{o.bounds=[[w,s],[e,n]];o.fitBoundsOptions={padding:Math.min(60,el.clientHeight/6),maxZoom:12};}
var m=new maplibregl.Map(o);m.touchZoomRotate.disableRotation();m.addControl(new maplibregl.NavigationControl({showCompass:false}),"top-right");m.addControl(new maplibregl.AttributionControl({compact:true}));
m.on("load",function(){var r=p.length>600?3:p.length>120?4:5;
m.addSource("pl",{type:"geojson",data:fc(p,lb,ty),cluster:many,clusterRadius:42,clusterMaxZoom:9});
if(many){m.addLayer({id:"pl-c",type:"circle",source:"pl",filter:["has","point_count"],paint:{"circle-color":col,"circle-opacity":0.9,"circle-radius":["step",["get","point_count"],12,25,15,100,19,500,23],"circle-stroke-width":2,"circle-stroke-color":"#fff"}});
if(font)m.addLayer({id:"pl-n",type:"symbol",source:"pl",filter:["has","point_count"],layout:{"text-field":["get","point_count_abbreviated"],"text-size":11,"text-font":font,"text-allow-overlap":true},paint:{"text-color":"#fff"}});
m.on("click","pl-c",function(ev){var ft=ev.features[0];m.getSource("pl").getClusterExpansionZoom(ft.properties.cluster_id).then(function(z){m.easeTo({center:ft.geometry.coordinates,zoom:z});});});
m.on("mouseenter","pl-c",function(){m.getCanvas().style.cursor="pointer";});m.on("mouseleave","pl-c",function(){m.getCanvas().style.cursor="";});}
m.addLayer({id:"pl",type:"circle",source:"pl",filter:["!",["has","point_count"]],paint:{"circle-radius":lb?r+1:r,"circle-color":col,"circle-opacity":f?0.55:0.85,"circle-stroke-width":1,"circle-stroke-color":"#fff"}});
if(f){m.addSource("pl-f",{type:"geojson",data:fc([f])});m.addLayer({id:"pl-f",type:"circle",source:"pl-f",paint:{"circle-radius":8,"circle-color":col,"circle-stroke-width":3,"circle-stroke-color":"#fff"}});}
if(lb){var tip=new maplibregl.Popup({closeButton:false,closeOnClick:false,offset:10,className:"pl-map-tip"}),open=new maplibregl.Popup({closeButton:false,offset:10,className:"pl-map-pop"});
m.on("mouseenter","pl",function(ev){var ft=ev.features[0];if(!ft.properties.n)return;m.getCanvas().style.cursor="pointer";if(fine)tip.setLngLat(ft.geometry.coordinates).setText(ft.properties.n).addTo(m);});
m.on("mouseleave","pl",function(){m.getCanvas().style.cursor="";tip.remove();});
m.on("click","pl",function(ev){var pr=ev.features[0].properties;if(!pr.n)return;if(fine&&/^\\/places\\//.test(pr.u)){location.href=pr.u;return;}open.setLngLat(ev.features[0].geometry.coordinates).setDOMContent(card(pr)).addTo(m);});}
var a=el.querySelector(".maplibregl-ctrl-attrib");if(a)a.classList.remove("maplibregl-compact-show");});}catch(x){}}
function show(el){if(q){q.push(el);load();}else draw(el);}
var els=document.querySelectorAll("[data-pl-map]");if(!("IntersectionObserver" in window)){els.forEach(show);return;}
var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){io.unobserve(en.target);show(en.target);}});},{rootMargin:"300px"});
els.forEach(function(el){io.observe(el);});})();`;

type Point = [number, number];
/** A dot's name, its page (/places/<state>/<slug>/) and its type, for the hover label and the tap card. */
export type MapLabel = [name: string, href: string, type?: string];

/** `children` sit on the map, in its bottom-leading corner (the place page's Open in Maps button). */
export function PlaceMap({ points, labels, focus, label, precision = 2, small = false, children }: { points: Point[]; labels?: MapLabel[]; focus?: Point; label: string; precision?: number; small?: boolean; children?: React.ReactNode }) {
  const scale = 10 ** precision;
  const round = ([lng, lat]: Point): Point => [Math.round(lng * scale) / scale, Math.round(lat * scale) / scale];
  // One dot per rounded point; a labelled dot keeps the first place's label.
  const byPoint = new Map<string, [Point, MapLabel | undefined]>();
  points.forEach((point, index) => { const rounded = round(point); const key = rounded.join(","); if (!byPoint.has(key)) byPoint.set(key, [rounded, labels?.[index]]); });
  const unique = [...byPoint.values()];
  // Labels travel compactly: the page path without /places/ and its slashes, and the type as an index.
  const types = [...new Set(unique.flatMap(([, entry]) => (entry?.[2] ? [entry[2]] : [])))];
  const compact = (entry?: MapLabel) => (entry ? [entry[0], entry[1].replace(/^\/places\/|\/$/g, ""), types.indexOf(entry[2] ?? "")] : null);
  const data = { p: unique.map(([point]) => point), ...(labels ? { l: unique.map(([, entry]) => compact(entry)), t: types } : {}), ...(focus ? { f: focus } : {}) };
  if (!unique.length && !focus) return null;
  const map = <figure className={small ? "pl-map pl-map-small" : "pl-map"} role="img" aria-label={label} data-pl-map={JSON.stringify(data)} />;
  return <>
    {children ? <div className={small ? "pl-map-frame pl-map-frame-small" : "pl-map-frame"}>{map}<div className="pl-map-overlay">{children}</div></div> : map}
    <script data-static-tools dangerouslySetInnerHTML={{ __html: mapScript }} />
  </>;
}
