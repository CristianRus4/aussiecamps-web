import { htmlLang, isLocaleCode, textDirection } from "@/lib/locales";

/** The registry's language tag and text direction on the locale's content. The exporter sets the same on <html>. */
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}) {
  const {locale}=await params;
  if (!isLocaleCode(locale)) return <div lang={locale}>{children}</div>;
  return <div lang={htmlLang(locale)} dir={textDirection(locale)}>{children}</div>;
}
