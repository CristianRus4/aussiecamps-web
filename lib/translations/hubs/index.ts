/**
 * The `hubs` namespace of each locale (lib/hubs/strings.ts decides what is complete enough to use).
 * One static import per registry locale; scripts/audit-hubs.mjs fails when a locale is missing here.
 */
import de from "./de.json";
import es from "./es.json";
import fr from "./fr.json";
import it from "./it.json";
import nl from "./nl.json";
import pt from "./pt.json";
import ja from "./ja.json";
import ko from "./ko.json";
import zhHans from "./zh-hans.json";
import zhHant from "./zh-hant.json";
import da from "./da.json";
import sv from "./sv.json";
import nb from "./nb.json";
import cs from "./cs.json";
import pl from "./pl.json";

export const hubTranslationFiles: Record<string, unknown> = { de: de, es: es, fr: fr, it: it, nl: nl, pt: pt, ja: ja, ko: ko, "zh-hans": zhHans, "zh-hant": zhHant, da: da, sv: sv, nb: nb, cs: cs, pl: pl };
