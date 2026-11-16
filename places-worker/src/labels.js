/**
 * The words of a live link's page in the visitor's language (the Accept-Language header), falling back to
 * English. Only the page's own labels: the stats, the headings and messages of a missing or removed link, the
 * contact line and Report. The rest of the page (header, footer, Open in app) is the English shell.
 *
 * Translated directly (not Decoder) on 16 Nov 2026 for the 28 languages the site has: machine-translated, not
 * reviewed by a person.
 *
 * contact is the sentence around the contact link: [before, link text, after].
 */
export const LABELS = {
  en: { dates: "Dates", stops: "Stops", distance: "Distance", driving: "Driving", places: "Places", trip: "Shared trip", collection: "Shared collection", missing: "This link doesn't exist", removed: "This link was removed", contact: ["If you think this is a mistake, ", "contact us", "."], report: "Report" },
  de: { dates: "Datum", stops: "Stopps", distance: "Strecke", driving: "Fahrzeit", places: "Orte", trip: "Geteilte Reise", collection: "Geteilte Sammlung", missing: "Diesen Link gibt es nicht", removed: "Dieser Link wurde entfernt", contact: ["Wenn du glaubst, dass das ein Fehler ist, ", "schreib uns", "."], report: "Melden" },
  es: { dates: "Fechas", stops: "Paradas", distance: "Distancia", driving: "Conducción", places: "Lugares", trip: "Viaje compartido", collection: "Colección compartida", missing: "Este enlace no existe", removed: "Este enlace se ha eliminado", contact: ["Si crees que es un error, ", "escríbenos", "."], report: "Denunciar" },
  "es-419": { dates: "Fechas", stops: "Paradas", distance: "Distancia", driving: "Manejo", places: "Lugares", trip: "Viaje compartido", collection: "Colección compartida", missing: "Este enlace no existe", removed: "Este enlace fue eliminado", contact: ["Si crees que es un error, ", "escríbenos", "."], report: "Reportar" },
  fr: { dates: "Dates", stops: "Étapes", distance: "Distance", driving: "Conduite", places: "Lieux", trip: "Voyage partagé", collection: "Collection partagée", missing: "Ce lien n'existe pas", removed: "Ce lien a été supprimé", contact: ["Si vous pensez que c'est une erreur, ", "contactez-nous", "."], report: "Signaler" },
  it: { dates: "Date", stops: "Tappe", distance: "Distanza", driving: "Guida", places: "Luoghi", trip: "Viaggio condiviso", collection: "Raccolta condivisa", missing: "Questo link non esiste", removed: "Questo link è stato rimosso", contact: ["Se pensi che sia un errore, ", "contattaci", "."], report: "Segnala" },
  nl: { dates: "Data", stops: "Stops", distance: "Afstand", driving: "Rijtijd", places: "Plekken", trip: "Gedeelde reis", collection: "Gedeelde verzameling", missing: "Deze link bestaat niet", removed: "Deze link is verwijderd", contact: ["Denk je dat dit een fout is? ", "Neem contact op", "."], report: "Melden" },
  pt: { dates: "Datas", stops: "Paragens", distance: "Distância", driving: "Condução", places: "Locais", trip: "Viagem partilhada", collection: "Coleção partilhada", missing: "Esta ligação não existe", removed: "Esta ligação foi removida", contact: ["Se achas que é um erro, ", "contacta-nos", "."], report: "Denunciar" },
  "pt-br": { dates: "Datas", stops: "Paradas", distance: "Distância", driving: "Direção", places: "Lugares", trip: "Viagem compartilhada", collection: "Coleção compartilhada", missing: "Este link não existe", removed: "Este link foi removido", contact: ["Se você acha que é um erro, ", "fale com a gente", "."], report: "Denunciar" },
  ja: { dates: "日程", stops: "立ち寄り先", distance: "距離", driving: "運転時間", places: "場所", trip: "共有された旅", collection: "共有されたコレクション", missing: "このリンクは存在しません", removed: "このリンクは削除されました", contact: ["間違いだと思われる場合は、", "お問い合わせ", "ください。"], report: "報告" },
  ko: { dates: "날짜", stops: "경유지", distance: "거리", driving: "운전 시간", places: "장소", trip: "공유된 여행", collection: "공유된 컬렉션", missing: "존재하지 않는 링크예요", removed: "삭제된 링크예요", contact: ["잘못된 것 같다면 ", "문의해 주세요", "."], report: "신고" },
  "zh-hans": { dates: "日期", stops: "站点", distance: "距离", driving: "驾驶时间", places: "地点", trip: "共享的行程", collection: "共享的收藏", missing: "此链接不存在", removed: "此链接已被删除", contact: ["如果你认为这是个错误，请", "联系我们", "。"], report: "举报" },
  "zh-hant": { dates: "日期", stops: "停靠點", distance: "距離", driving: "駕駛時間", places: "地點", trip: "分享的行程", collection: "分享的收藏夾", missing: "此連結不存在", removed: "此連結已被移除", contact: ["如果你認為這是錯誤，請", "聯絡我們", "。"], report: "檢舉" },
  da: { dates: "Datoer", stops: "Stop", distance: "Afstand", driving: "Køretid", places: "Steder", trip: "Delt tur", collection: "Delt samling", missing: "Dette link findes ikke", removed: "Dette link er fjernet", contact: ["Hvis du mener, det er en fejl, så ", "skriv til os", "."], report: "Anmeld" },
  sv: { dates: "Datum", stops: "Stopp", distance: "Avstånd", driving: "Körtid", places: "Platser", trip: "Delad resa", collection: "Delad samling", missing: "Den här länken finns inte", removed: "Den här länken har tagits bort", contact: ["Om du tror att det är ett misstag, ", "kontakta oss", "."], report: "Anmäl" },
  nb: { dates: "Datoer", stops: "Stopp", distance: "Avstand", driving: "Kjøretid", places: "Steder", trip: "Delt tur", collection: "Delt samling", missing: "Denne lenken finnes ikke", removed: "Denne lenken er fjernet", contact: ["Hvis du mener det er en feil, ", "kontakt oss", "."], report: "Rapporter" },
  cs: { dates: "Termín", stops: "Zastávky", distance: "Vzdálenost", driving: "Doba jízdy", places: "Místa", trip: "Sdílený výlet", collection: "Sdílená sbírka", missing: "Tento odkaz neexistuje", removed: "Tento odkaz byl odstraněn", contact: ["Pokud si myslíte, že jde o chybu, ", "napište nám", "."], report: "Nahlásit" },
  pl: { dates: "Daty", stops: "Przystanki", distance: "Dystans", driving: "Czas jazdy", places: "Miejsca", trip: "Udostępniona podróż", collection: "Udostępniona kolekcja", missing: "Ten link nie istnieje", removed: "Ten link został usunięty", contact: ["Jeśli uważasz, że to pomyłka, ", "napisz do nas", "."], report: "Zgłoś" },
  id: { dates: "Tanggal", stops: "Pemberhentian", distance: "Jarak", driving: "Waktu berkendara", places: "Tempat", trip: "Perjalanan yang dibagikan", collection: "Koleksi yang dibagikan", missing: "Tautan ini tidak ada", removed: "Tautan ini sudah dihapus", contact: ["Kalau menurutmu ini keliru, ", "hubungi kami", "."], report: "Laporkan" },
  ms: { dates: "Tarikh", stops: "Hentian", distance: "Jarak", driving: "Masa memandu", places: "Tempat", trip: "Perjalanan yang dikongsi", collection: "Koleksi yang dikongsi", missing: "Pautan ini tidak wujud", removed: "Pautan ini telah dibuang", contact: ["Jika anda rasa ini satu kesilapan, ", "hubungi kami", "."], report: "Laporkan" },
  vi: { dates: "Ngày", stops: "Điểm dừng", distance: "Quãng đường", driving: "Thời gian lái xe", places: "Địa điểm", trip: "Chuyến đi được chia sẻ", collection: "Bộ sưu tập được chia sẻ", missing: "Liên kết này không tồn tại", removed: "Liên kết này đã bị xóa", contact: ["Nếu bạn cho rằng đây là nhầm lẫn, hãy ", "liên hệ với chúng tôi", "."], report: "Báo cáo" },
  th: { dates: "วันที่", stops: "จุดแวะ", distance: "ระยะทาง", driving: "เวลาขับรถ", places: "สถานที่", trip: "ทริปที่แชร์", collection: "คอลเลกชันที่แชร์", missing: "ไม่มีลิงก์นี้", removed: "ลิงก์นี้ถูกลบแล้ว", contact: ["หากคิดว่าเป็นข้อผิดพลาด ", "ติดต่อเรา", ""], report: "รายงาน" },
  tr: { dates: "Tarihler", stops: "Duraklar", distance: "Mesafe", driving: "Sürüş süresi", places: "Yerler", trip: "Paylaşılan gezi", collection: "Paylaşılan koleksiyon", missing: "Bu bağlantı yok", removed: "Bu bağlantı kaldırıldı", contact: ["Bunun bir hata olduğunu düşünüyorsan ", "bize yaz", "."], report: "Bildir" },
  fi: { dates: "Päivät", stops: "Pysähdykset", distance: "Matka", driving: "Ajoaika", places: "Paikat", trip: "Jaettu matka", collection: "Jaettu kokoelma", missing: "Tätä linkkiä ei ole", removed: "Tämä linkki on poistettu", contact: ["Jos tämä on mielestäsi virhe, ", "ota yhteyttä", "."], report: "Ilmoita" },
  hu: { dates: "Dátumok", stops: "Megállók", distance: "Távolság", driving: "Vezetési idő", places: "Helyek", trip: "Megosztott út", collection: "Megosztott gyűjtemény", missing: "Ez a link nem létezik", removed: "Ezt a linket eltávolították", contact: ["Ha szerinted ez hiba, ", "írj nekünk", "."], report: "Jelentés" },
  el: { dates: "Ημερομηνίες", stops: "Στάσεις", distance: "Απόσταση", driving: "Χρόνος οδήγησης", places: "Μέρη", trip: "Κοινόχρηστο ταξίδι", collection: "Κοινόχρηστη συλλογή", missing: "Αυτός ο σύνδεσμος δεν υπάρχει", removed: "Αυτός ο σύνδεσμος καταργήθηκε", contact: ["Αν πιστεύεις ότι είναι λάθος, ", "επικοινώνησε μαζί μας", "."], report: "Αναφορά" },
  sk: { dates: "Termín", stops: "Zastávky", distance: "Vzdialenosť", driving: "Čas jazdy", places: "Miesta", trip: "Zdieľaný výlet", collection: "Zdieľaná zbierka", missing: "Tento odkaz neexistuje", removed: "Tento odkaz bol odstránený", contact: ["Ak si myslíte, že ide o chybu, ", "napíšte nám", "."], report: "Nahlásiť" },
  sl: { dates: "Datumi", stops: "Postanki", distance: "Razdalja", driving: "Čas vožnje", places: "Kraji", trip: "Deljeno potovanje", collection: "Deljena zbirka", missing: "Ta povezava ne obstaja", removed: "Ta povezava je bila odstranjena", contact: ["Če menite, da gre za napako, ", "nam pišite", "."], report: "Prijavi" },
  he: { dates: "תאריכים", stops: "עצירות", distance: "מרחק", driving: "זמן נסיעה", places: "מקומות", trip: "טיול משותף", collection: "אוסף משותף", missing: "הקישור הזה לא קיים", removed: "הקישור הזה הוסר", contact: ["אם לדעתך זו טעות, ", "צרו איתנו קשר", "."], report: "דיווח" },
};

/** The Intl locale for one of the site's language codes. */
export const intlLocale = (code) => ({ "zh-hans": "zh-Hans", "zh-hant": "zh-Hant", "pt-br": "pt-BR" })[code] ?? code;
export const isRtl = (code) => code === "he";

/** Accept-Language's tags, best first: [{ tag, q }]. */
function tags(header) {
  return String(header ?? "").split(",").map((part, index) => {
    const [tag, ...params] = part.trim().split(";");
    const q = params.map((p) => /^\s*q=([0-9.]+)\s*$/.exec(p)).find(Boolean);
    return { tag: tag.trim().toLowerCase(), q: q ? Number(q[1]) : 1, index };
  }).filter((t) => t.tag && t.tag !== "*" && t.q > 0).sort((a, b) => b.q - a.q || a.index - b.index);
}

/** One Accept-Language tag as one of the site's language codes, or null. */
function codeFor(tag) {
  const [lang, ...rest] = tag.split("-");
  const region = rest.find((part) => part.length === 2 || /^\d{3}$/.test(part)) ?? "";
  const script = rest.find((part) => part.length === 4) ?? "";
  if (lang === "zh") return script === "hant" || ["tw", "hk", "mo"].includes(region) ? "zh-hant" : "zh-hans";
  if (lang === "pt") return region === "br" ? "pt-br" : "pt";
  if (lang === "es") return !region || region === "es" ? "es" : "es-419";
  if (lang === "no" || lang === "nn" || lang === "nb") return "nb";
  if (lang === "iw") return "he";
  if (lang === "in") return "id";
  return LABELS[lang] ? lang : null;
}

/** The page's language for an Accept-Language header: the first tag the site has, else English. */
export function pickLanguage(header) {
  for (const { tag } of tags(header)) {
    const code = codeFor(tag);
    if (code) return code;
  }
  return "en";
}

const MILE_REGIONS = new Set(["us", "gb", "lr", "mm"]);
/** Miles for a visitor whose first preferred locale is in a country that drives in miles (US, UK, Liberia,
 * Myanmar); kilometres for everyone else. */
export function usesMiles(header) {
  const first = tags(header)[0];
  if (!first) return false;
  const region = first.tag.split("-").slice(1).find((part) => part.length === 2) ?? "";
  return MILE_REGIONS.has(region);
}

export const labels = (code) => LABELS[code] ?? LABELS.en;
