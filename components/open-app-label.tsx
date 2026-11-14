import { OPEN_APP_LABEL, OPEN_ON_IPHONE_LABEL } from "@/lib/open-app";

/** "Open in app" on phones and tablets, "Open on iPhone" on a desktop; CSS shows one (app/globals.css). */
export function OpenAppLabel() {
  return <><span className="oa-touch">{OPEN_APP_LABEL}</span><span className="oa-desk">{OPEN_ON_IPHONE_LABEL}</span></>;
}
