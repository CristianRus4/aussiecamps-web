/**
 * The `hubs` namespace of each locale (lib/hubs/strings.ts decides what is complete enough to use).
 * One static import per registry locale; scripts/audit-hubs.mjs fails when a locale is missing here.
 */
import de from "./de.json";
import es from "./es.json";
import es419 from "./es-419.json";
import fr from "./fr.json";
import it from "./it.json";
import nl from "./nl.json";
import pt from "./pt.json";
import ptBr from "./pt-br.json";
import ja from "./ja.json";
import ko from "./ko.json";
import zhHans from "./zh-hans.json";
import zhHant from "./zh-hant.json";
import da from "./da.json";
import sv from "./sv.json";
import nb from "./nb.json";
import cs from "./cs.json";
import pl from "./pl.json";
import id from "./id.json";
import ms from "./ms.json";
import vi from "./vi.json";
import th from "./th.json";
import tr from "./tr.json";
import fi from "./fi.json";
import hu from "./hu.json";
import el from "./el.json";
import sk from "./sk.json";
import sl from "./sl.json";

export const hubTranslationFiles: Record<string, unknown> = { de: de, es: es, "es-419": es419, fr: fr, it: it, nl: nl, pt: pt, "pt-br": ptBr, ja: ja, ko: ko, "zh-hans": zhHans, "zh-hant": zhHant, da: da, sv: sv, nb: nb, cs: cs, pl: pl, id: id, ms: ms, vi: vi, th: th, tr: tr, fi: fi, hu: hu, el: el, sk: sk, sl: sl };
