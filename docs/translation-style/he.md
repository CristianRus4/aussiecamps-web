# Hebrew (he) style guide for AussieCamps

The contract for every Hebrew unit on aussiecamps.app/he. Write plain modern Israeli Hebrew, the way
an Israeli who has driven a campervan around Australia would explain it to friends planning the
same trip. Nobody should be able to tell that an English page came first.

## Reader

Israelis after the army on the big trip (הטיול הגדול), many of them backpackers on a Work and
Holiday visa who buy an old van or hire a campervan, plus couples and families on a three to six
week trip. They know קמפינג, קמפרוואן, חניון לילה and רואד טריפ. They do not know Australian systems
(councils, Total Fire Ban, national park permits, state quarantine zones), so those get a short
Hebrew explanation the first time they appear on a page.

## Voice

- **Address the reader in the plural**: הורידו, בדקו, שמרו, אתם, שלכם. It is how Israeli apps and
  travel sites stay gender-neutral. Never mix in singular masculine or feminine forms.
- **Headings and short labels** use the present tense or a noun phrase ("מוצאים חניון", "חשוב
  לזכור"), no full stop unless the English heading is a sentence.
- **Calm and direct.** Medium sentences, verbs over nouns, no officialese.
- **No em or en dashes** (the content audit rejects them). Use a comma, a colon or two sentences.

## Words

| English | Hebrew |
|---|---|
| campground | חניון קמפינג |
| campsite | אתר קמפינג |
| caravan park | פארק קרוואנים |
| free camp, free camping | חניון לילה חינמי, קמפינג חינמי |
| rest area | חניון מנוחה |
| dump point | נקודת ריקון |
| campervan | קמפרוואן |
| caravan | קרוואן נגרר (קרוואן alone means a campervan to most Israelis) |
| big rig | רכב גדול |
| road trip | טיול בדרכים (רואד טריפ in titles and keywords) |
| the big lap | הסיבוב הגדול באוסטרליה |
| no signal, offline | בלי קליטה |
| trip planner | מתכנן הטיול |
| collections | אוספים |
| backpackers | תרמילאים |
| 4WD | ג'יפ, 4X4 |

The app has no Hebrew interface yet, so collection names are translated by meaning (אהבתי, כוכב,
רוצה לבקר, ביקרתי, נעצים, כל השמורים).

## Names, numbers and Latin text

- **AussieCamps, App Store, Street View, Google Analytics** stay in Latin letters. Attach Hebrew
  prefixes with a hyphen: ב-AussieCamps, ל-App Store.
- **Place names are transliterated** the way Israeli travellers write them: קווינסלנד, ניו סאות'
  ויילס, מערב אוסטרליה, הטריטוריה הצפונית, טסמניה, גולד קוסט, אולורו. Use ' (apostrophe) for ג', צ',
  ז' and ת'.
- **Numbers stay as written** in Western digits with commas: 74,000, A$45. Prefixes take a hyphen:
  יותר מ-74,000, ב-10 מטבעות. Every money amount must keep its value.
- **Units** in Hebrew: ק״מ, ליטר, מעלות. Use the gershayim ״ in abbreviations, so JSON needs no
  escaping.
- Quotation marks are plain straight quotes.

## Right to left

Pages under /he/ render with dir="rtl". Do not add direction marks to the text; mixed Hebrew and
Latin lines are handled by the page. Arrows in the interface are mirrored by the stylesheet.
