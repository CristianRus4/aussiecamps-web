import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from "@/lib/site";
import { staticPages } from "@/lib/source-strings";
import { mainData } from "@/lib/analytics";
import { alternatesFor } from "@/lib/seo";

export const metadata: Metadata = { title: "Privacy policy", description: "How AussieCamps handles app and website data, including website analytics and your privacy choices.", alternates: { canonical: "/privacy/", languages: alternatesFor("privacy") } };

/** Rendered from the same source the translations are made from, so English and every locale say the same thing. */
export default function Privacy() {
  const page = staticPages.privacy;
  return <><Header /><main className="legal-page" {...mainData({ kind: "legal" })}>
    <p className="eyebrow">{page.effective}</p>
    <h1>{page.title}</h1>
    <p className="legal-lede">{page.lede}</p>
    {page.sections.map((section) => <section key={section.heading} id={section.id}>
      <h2>{section.heading}</h2>
      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>)}
    <p>Email <a href={SUPPORT_MAILTO}>{SUPPORT_EMAIL}</a>.</p>
  </main><Footer pageKey="privacy" /></>;
}
