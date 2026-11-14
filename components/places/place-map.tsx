/**
 * The map on every listing and place page: OpenStreetMap through OpenFreeMap's Positron style (its Dark
 * style when the reader's system is in dark mode, like the rest of the site), drawn by MapLibre, turned
 * grey and faint, with the places as dots on top. It fills the width of the page and
 * frames the dots in the middle.
 *
 * The page carries only the points, rounded (2 decimals, about a kilometre, unless `precision` says
 * otherwise); MapLibre and the tiles load from their CDNs when the map scrolls into view. The loader is a
 * `data-static-tools` script, the kind the static export keeps, and runs once however many maps a page
 * has. Without JavaScript or WebGL the box stays empty.
 */
const LIB = "https://cdn.jsdelivr.net/npm/maplibre-gl@4.7.1/dist/maplibre-gl.";
const STYLE = "https://tiles.openfreemap.org/styles/positron";
const DARK_STYLE = "https://tiles.openfreemap.org/styles/dark";

const mapScript = `(function(){if(window.plMap)return;window.plMap=1;
var q=[],started=0,style=null;
var grey={background:["background-color","#eeefec"],park:["fill-color","#e8e9e6"],water:["fill-color","#d3d6d6"],waterway:["line-color","#d3d6d6"],landcover_wood:["fill-color","#e6e7e4"],landcover_glacier:["fill-color","#f3f3f1"],landcover_ice_shelf:["fill-color","#f3f3f1"],landuse_residential:["fill-color","#e7e7e5"]};
function load(){if(started)return;started=1;var c=document.createElement("link");c.rel="stylesheet";c.href="${LIB}css";document.head.appendChild(c);
var s=document.createElement("script");s.src="${LIB}js";s.onload=function(){var dark=window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches;fetch(dark?"${DARK_STYLE}":"${STYLE}").then(function(r){return r.json();}).then(function(j){
j.layers.forEach(function(l){l.paint=l.paint||{};if(grey[l.id]&&!dark)l.paint[grey[l.id][0]]=grey[l.id][1];if(l.type==="symbol"){l.paint["text-opacity"]=0.55;l.paint["icon-opacity"]=0.4;}if(l.type==="line"&&!grey[l.id])l.paint["line-opacity"]=0.6;});
style=j;var w=q;q=null;w.forEach(draw);}).catch(function(){});};document.head.appendChild(s);}
function fc(p){return{type:"FeatureCollection",features:p.map(function(c){return{type:"Feature",properties:{},geometry:{type:"Point",coordinates:c}};})};}
function draw(el){try{var d=JSON.parse(el.getAttribute("data-pl-map")),p=d.p,f=d.f,all=f?p.concat([f]):p;if(!all.length)return;
var col=getComputedStyle(el).getPropertyValue("--fern").trim()||"#49642f",w=180,s=90,e=-180,n=-90;
all.forEach(function(c){w=Math.min(w,c[0]);e=Math.max(e,c[0]);s=Math.min(s,c[1]);n=Math.max(n,c[1]);});
var o={container:el,style:style,interactive:false,attributionControl:false,fadeDuration:0};
if(e-w<0.01&&n-s<0.01){o.center=[(w+e)/2,(s+n)/2];o.zoom=11;}else{o.bounds=[[w,s],[e,n]];o.fitBoundsOptions={padding:Math.min(60,el.clientHeight/6),maxZoom:12};}
var m=new maplibregl.Map(o);m.addControl(new maplibregl.AttributionControl({compact:true}));
m.on("load",function(){var r=p.length>600?3:p.length>120?4:5;
m.addSource("pl",{type:"geojson",data:fc(p)});m.addLayer({id:"pl",type:"circle",source:"pl",paint:{"circle-radius":r,"circle-color":col,"circle-opacity":f?0.55:0.85,"circle-stroke-width":1,"circle-stroke-color":"#fff"}});
if(f){m.addSource("pl-f",{type:"geojson",data:fc([f])});m.addLayer({id:"pl-f",type:"circle",source:"pl-f",paint:{"circle-radius":8,"circle-color":col,"circle-stroke-width":3,"circle-stroke-color":"#fff"}});}
var a=el.querySelector(".maplibregl-ctrl-attrib");if(a)a.classList.remove("maplibregl-compact-show");});}catch(x){}}
function show(el){if(q){q.push(el);load();}else draw(el);}
var els=document.querySelectorAll("[data-pl-map]");if(!("IntersectionObserver" in window)){els.forEach(show);return;}
var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){io.unobserve(en.target);show(en.target);}});},{rootMargin:"300px"});
els.forEach(function(el){io.observe(el);});})();`;

type Point = [number, number];

export function PlaceMap({ points, focus, label, precision = 2, small = false }: { points: Point[]; focus?: Point; label: string; precision?: number; small?: boolean }) {
  const scale = 10 ** precision;
  const round = ([lng, lat]: Point): Point => [Math.round(lng * scale) / scale, Math.round(lat * scale) / scale];
  const unique = [...new Map(points.map(round).map((point) => [point.join(","), point])).values()];
  const data = { p: unique, ...(focus ? { f: focus } : {}) };
  if (!unique.length && !focus) return null;
  return <>
    <figure className={small ? "pl-map pl-map-small" : "pl-map"} role="img" aria-label={label} data-pl-map={JSON.stringify(data)} />
    <script data-static-tools dangerouslySetInnerHTML={{ __html: mapScript }} />
  </>;
}
