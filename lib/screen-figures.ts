import manifest from "@/lib/image-manifest.json";
import type { Article } from "@/lib/site";

/**
 * Screenshot figures: one image of AussieCamps inside the section about the app, in the listicles and
 * comparison guides. Each image is a pre-rendered 1600x900 WebP (scripts/make-screen-figure.sh): the
 * brand gradient with a centred iPhone screenshot and its own soft shadow, in public/images/screens/.
 *
 * The article literals stay untouched: `allArticles` in lib/site.ts runs `applyScreenFigures`, which
 * sets `figure` on the matching section. `section` is the zero-based index into the guide's
 * `sections`. `alt` is English only: a translated page uses that locale's section heading as the alt
 * (lib/localized.ts), so nothing here enters lib/translations/en.json. docs/growth/screen-figures.md
 * lists the figures and how to add one. The same module exists on both sites (docs/PARITY.md).
 */
export type ScreenFigure = { slug: string; section: number; src: string; alt: string };

export const screenFigures: readonly ScreenFigure[] = [
  { slug: "wikicamps-alternatives", section: 2, src: "/images/screens/wikicamps-alternatives.webp", alt: "AussieCamps on iPhone: the Cape Le Grand National Park page with its facilities and rules" },
  { slug: "campermate-alternatives", section: 2, src: "/images/screens/campermate-alternatives.webp", alt: "AussieCamps on iPhone: the Ikara-Flinders Ranges National Park page with its park details" },
  { slug: "best-fuel-price-apps-australia", section: 9, src: "/images/screens/best-fuel-price-apps-australia.webp", alt: "AussieCamps on iPhone: the Adelaide to Uluru road trip on the map, with the weather along the route" },
  { slug: "best-road-trip-planner-apps-australia", section: 1, src: "/images/screens/best-road-trip-planner-apps-australia.webp", alt: "AussieCamps on iPhone: the Perth to Broome road trip on the map, with the forecast along the way" },
  { slug: "best-free-camping-apps-australia", section: 1, src: "/images/screens/best-free-camping-apps-australia.webp", alt: "AussieCamps on iPhone: the Lucky Bay Campground page with its amenities and features" },
  { slug: "best-caravan-rv-apps-australia", section: 1, src: "/images/screens/best-caravan-rv-apps-australia.webp", alt: "AussieCamps on iPhone: the Cape Hillsborough National Park amenities, with Caravan Sites listed under Vehicles and RVs" },
  { slug: "best-camping-app-australia", section: 1, src: "/images/screens/best-camping-app-australia.webp", alt: "AussieCamps on iPhone: the Karijini National Park page with its amenities and features" },
];

const images = manifest as Record<string, unknown>;

/**
 * Returns `list` with each figure set on its section. Throws, so the build fails at module load like
 * assertPublishAt, when a section is used twice, a slug is listed twice (one figure per guide), a slug
 * is unknown, a section index is out of range, the image has no lib/image-manifest.json entry, or
 * the alt is empty.
 */
export function applyScreenFigures<T extends Pick<Article, "slug" | "sections">>(list: T[], figures: readonly ScreenFigure[] = screenFigures): T[] {
  const bySlug = new Map<string, ScreenFigure>();
  for (const figure of figures) {
    const listed = bySlug.get(figure.slug);
    if (listed?.section === figure.section) throw new Error(`screen-figures: section ${figure.section} of "${figure.slug}" has two figures`);
    if (listed) throw new Error(`screen-figures: "${figure.slug}" is listed twice`);
    const article = list.find((item) => item.slug === figure.slug);
    if (!article) throw new Error(`screen-figures: unknown guide slug "${figure.slug}"`);
    if (!Number.isInteger(figure.section) || figure.section < 0 || figure.section >= article.sections.length) {
      throw new Error(`screen-figures: section ${figure.section} is out of range for "${figure.slug}" (${article.sections.length} sections)`);
    }
    if (!images[figure.src]) throw new Error(`screen-figures: no image-manifest entry for "${figure.src}". Run \`npm run images:manifest\`.`);
    if (!figure.alt.trim()) throw new Error(`screen-figures: "${figure.slug}" needs alt text`);
    bySlug.set(figure.slug, figure);
  }
  return list.map((article) => {
    const figure = bySlug.get(article.slug);
    if (!figure) return article;
    return {
      ...article,
      sections: article.sections.map((part, index) => (index === figure.section ? { ...part, figure: { src: figure.src, alt: figure.alt } } : part)),
    };
  });
}
