import { FaApple } from "react-icons/fa6";
import { appStoreUrl } from "@/lib/app-store";

/** The download line right under a page's opening answer: one sentence naming the feature, one button. */
export function AnswerCta({ text, label, locale }: { text: string; label: string; locale: string }) {
  return <div className="answer-cta">
    <p>{text}</p>
    <a className="store-button" href={appStoreUrl({ placement: "ans", locale })} data-cta="ans"><FaApple aria-hidden="true" /><span>{label}</span></a>
  </div>;
}
