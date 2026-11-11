import { appStoreUrl } from "@/lib/app-store";
import { splitIntroCta } from "@/lib/intro-cta";

/** Chinese and Japanese run sentences together; every other script separates them with a space. */
const joinsWithoutSpace = (locale: string) => locale === "ja" || locale.startsWith("zh");

/**
 * The app sentence that ends a guide's first paragraph (lib/intro-cta.ts), rendered inside the
 * `article-intro` paragraph with its own App Store link (placement `intro`, `ct=w_intro_<locale>`).
 */
export function IntroCta({ text, locale }: { text?: string; locale: string }) {
  const parts = text ? splitIntroCta(text) : undefined;
  if (!parts) return null;
  return <>{joinsWithoutSpace(locale) ? "" : " "}{parts.before}<a className="intro-cta" href={appStoreUrl({ placement: "intro", locale })} data-cta="intro">{parts.link}</a>{parts.after}</>;
}
