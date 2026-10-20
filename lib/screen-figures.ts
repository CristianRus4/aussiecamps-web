import manifest from "@/lib/image-manifest.json";
import type { Article, ArticleSection } from "@/lib/site";

/**
 * Screenshot figures: one image of the app inside the section about the app, in the listicles and
 * comparison guides. Each image is a pre-rendered 1600x900 WebP (the brand gradient with a centred
 * iPhone screenshot, made by scripts/make-screen-figure.sh) in public/images/screens/.
 *
 * Kept apart from the article literals so the English text and the translation source stay as they
 * are: `allArticles` in lib/site.ts runs `withScreenFigures`, which sets `figure` on the matching
 * section. `section` is the zero-based index into the guide's `sections`. Figures never enter
 * lib/translations/en.json; a translated page uses that locale's section heading as the alt
 * (lib/localized.ts). docs/growth/screen-figures.md lists them and how to add one.
 */
export type ScreenFigure = { slug: string; section: number; src: string; alt: string };

export const screenFigures: ScreenFigure[] = [
  { slug: "wikicamps-alternatives", section: 2, src: "/images/screens/wikicamps-alternatives.webp", alt: "AussieCamps on iPhone: the Cape Le Grand National Park page with its facilities and rules" },
  { slug: "campermate-alternatives", section: 2, src: "/images/screens/campermate-alternatives.webp", alt: "AussieCamps on iPhone: the Ikara-Flinders Ranges National Park page with its park details" },
  { slug: "best-fuel-price-apps-australia", section: 9, src: "/images/screens/best-fuel-price-apps-australia.webp", alt: "AussieCamps on iPhone: the Adelaide to Uluru road trip on the map, with the weather along the route" },
  { slug: "best-road-trip-planner-apps-australia", section: 1, src: "/images/screens/best-road-trip-planner-apps-australia.webp", alt: "AussieCamps on iPhone: the Perth to Broome road trip on the map, with the forecast along the way" },
  { slug: "best-free-camping-apps-australia", section: 1, src: "/images/screens/best-free-camping-apps-australia.webp", alt: "AussieCamps on iPhone: the Lucky Bay Campground page with its amenities and features" },
  { slug: "best-camping-app-australia", section: 1, src: "/images/screens/best-camping-app-australia.webp", alt: "AussieCamps on iPhone: the Karijini National Park page with its amenities and features" },
];

const images = manifest as Record<string, unknown>;

/**
 * Returns the guides with each screen figure set on its section. Throws, so the build fails, on an
 * unknown slug, a section index out of range, a figure with no image-manifest entry, or two figures
 * for one section.
 */
export function withScreenFigures<T extends Pick<Article, "slug" | "sections">>(articles: T[], figures: ScreenFigure[] = screenFigures): T[] {
  const bySlug = new Map<string, ScreenFigure[]>();
  for (const figure of figures) {
    const article = articles.find((item) => item.slug === figure.slug);
    if (!article) throw new Error(`lib/screen-figures.ts: no guide with slug "${figure.slug}"`);
    if (!Number.isInteger(figure.section) || figure.section < 0 || figure.section >= article.sections.length) throw new Error(`lib/screen-figures.ts: ${figure.slug} has no section ${figure.section} (it has ${article.sections.length})`);
    if (!images[figure.src]) throw new Error(`lib/screen-figures.ts: no image-manifest entry for "${figure.src}". Run \`npm run images:manifest\`.`);
    if (!figure.alt.trim()) throw new Error(`lib/screen-figures.ts: ${figure.slug} needs alt text`);
    const list = bySlug.get(figure.slug) ?? [];
    if (list.some((other) => other.section === figure.section)) throw new Error(`lib/screen-figures.ts: ${figure.slug} section ${figure.section} has two figures`);
    bySlug.set(figure.slug, [...list, figure]);
  }
  return articles.map((article) => {
    const list = bySlug.get(article.slug);
    if (!list) return article;
    const sections: ArticleSection[] = article.sections.map((section, index) => {
      const figure = list.find((item) => item.section === index);
      return figure ? { ...section, figure: { src: figure.src, alt: figure.alt } } : section;
    });
    return { ...article, sections };
  });
}
