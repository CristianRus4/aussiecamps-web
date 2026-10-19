import { htmlLang, isLocaleCode } from "@/lib/locales";

/** The registry's language tag on the locale's content. The exporter sets the same tag on <html>. */
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}) {
  const {locale}=await params;
  return <div lang={isLocaleCode(locale)?htmlLang(locale):locale}>{children}</div>;
}
