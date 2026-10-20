# Cost pages: units whose numbers changed (2026-10-20)

Branch `growth/a-content-costs`. Compares `lib/translations/en.json` on origin/main with the branch tip. A unit is listed when the numbers in its English changed (added, removed or different), which is what the number-parity gate in `content:check` compares. Unit ids are the en.json paths the parity check prints.

Every unit of these five pages may also have reworded English (fact-check fixes); those without number changes are counted per page but not listed. Section, paragraph, tip, table-row and FAQ counts are unchanged from main for all five pages; source lists changed.

Parity status on the branch tip (ffee113): public-transport, grocery and drinks gained sources, so their translations are now structurally stale (served in English, noindex) and the parity gate skips them. Only domestic-flight-costs-australia-2026 and eating-out-australia-prices-2026 still fail parity, 34 problems in each of de, es, fr, it, nl and pt; those two pages' units below are the ones that block `npm run check`.

## public-transport-costs-australia-2026

11 units with number changes; 8 more reworded without number changes; 3 new units, 0 removed units (sources).

### `articles.public-transport-costs-australia-2026.title`

- Old: Public transport costs across Australian cities in 2026
- New: Australian Public Transport Costs 2026: Fares From 50c

### `articles.public-transport-costs-australia-2026.description`

- Old: Compare Brisbane, Perth, Melbourne and Sydney fares without confusing per-trip prices with daily caps.
- New: Queensland fares are a flat 50c, Perth's DayRider $7, Melbourne's daily cap $5.70 until 1 January 2027 and Sydney's $19.30 Mon to Thu. Airport fees too.

### `articles.public-transport-costs-australia-2026.intro`

- Old: Australian city fares use different rules, payment methods and caps. A flat Queensland journey, a Perth DayRider and Sydney’s daily cap answer different questions, so compare the full day you expect to travel.
- New: Queensland charges a flat 50 cents a trip, Perth caps a day at $7, Melbourne's full-fare daily cap is $5.70 under half-price fares that run until 1 January 2027, and Sydney caps adult Opal travel at $19.30 a day from Monday to Thursday. Each city counts differently, so compare a whole day of travel rather than one ticket.

### `articles.public-transport-costs-australia-2026.sections[3].body[1]`

- Old: Melbourne is the notable exception where contactless is not accepted on most services, so a Myki is required. Check before arriving rather than assuming your bank card will work.
- New: Melbourne accepts contactless Visa and Mastercard on trains, trams and myki-enabled buses, with the bus rollout completed by 26 July 2026. Since 13 October 2026 concession holders can also tap a bank card once they link their concession entitlement online, but Youth myki holders still need a myki, so check the current rules before relying on a bank card.

### `articles.public-transport-costs-australia-2026.sections[4].body[0]`

- Old: Sydney charges a station access fee on top of the rail fare, making the airport train considerably more expensive than an ordinary trip. Brisbane's Airtrain is similarly priced as a separate service.
- New: Sydney's airport stations charge a station access fee of $18.61 per adult trip on top of the rail fare, capped at $37.75 a week, so the airport train costs far more than an ordinary trip. Brisbane's Airtrain is priced as a separate service.

### `articles.public-transport-costs-australia-2026.sections[4].body[2]`

- Old: None of these are typically covered by a standard day pass. Price the airport leg separately when comparing options.
- New: Sydney's station access fee sits outside the Opal daily and weekly caps and Brisbane's Airtrain sits outside the 50-cent fare, but Perth's Airport line is covered by ordinary Transperth fares and DayRider. Price the airport leg separately when comparing options.

### `articles.public-transport-costs-australia-2026.sections[6].body[2]`

- Old: Where you are staying more than a few days in a city, a weekly cap or pass usually beats daily fares and removes the need to think about it.
- New: In Perth, travel on Sundays is free with a SmartRider or a contactless card, and under-18s ride free in <a data-guide="camping-rules-victoria">Victoria</a> with a Youth myki (contactless bank cards cannot be used for Youth travel). For a stay of more than a few days, check whether the city has a weekly cap (Sydney's is $50) before paying day by day.

### `articles.public-transport-costs-australia-2026.faq[1][1]`

- Old: The guide gives dated fares for Sydney, Melbourne, Brisbane and Perth. All run tap-on cards with daily and weekly caps, and several now accept a contactless bank card directly, which saves buying a travel card at all.
- New: Queensland charges a flat 50 cents a trip, Perth caps a day at $7 and Sundays are free with a SmartRider or bank card, Melbourne's daily cap is $5.70 until 1 January 2027, and Sydney's adult Opal cap is $19.30 Monday to Thursday and $9.65 Friday to Sunday and on public holidays.

### `articles.public-transport-costs-australia-2026.priceTable.note`

- Old: Adult benchmarks checked 12 August 2026. Airport services, eligibility, concessions and payment methods can change the result.
- New: Adult benchmarks checked 19 October 2026 against operator fare pages. Airport services, eligibility, concessions and payment methods can change the result.

### `articles.public-transport-costs-australia-2026.priceTable.rows[1].unit`

- Old: standard journey
- New: per 3-hour journey

### `articles.public-transport-costs-australia-2026.priceTable.rows[3].label`

- Old: Victoria temporary full-fare cap
- New: Victoria full-fare daily cap (weekdays), until 1 Jan 2027

## domestic-flight-costs-australia-2026

6 units with number changes; 16 more reworded without number changes; 0 new units, 0 removed units (sources).

### `articles.domestic-flight-costs-australia-2026.title`

- Old: Domestic flight costs in Australia: realistic 2026 sale floors
- New: Domestic Flight Costs in Australia 2026: Sale Fares From $49

### `articles.domestic-flight-costs-australia-2026.description`

- Old: Observed fares for short, northbound and transcontinental routes, plus the extras that turn a headline into a total.
- New: 2026 sale fares ran from $49 Sydney to Ballina, $105 Melbourne to Sydney and $245 Sydney to Perth one way. What bags, seats and transfers add.

### `articles.domestic-flight-costs-australia-2026.intro`

- Old: Australia’s scale makes flying attractive, but the cheapest advertised seat is a dated sale example rather than a standing fare. These observed 2026 floors show the shape of the market before baggage, seats and peak dates.
- New: Australian domestic sale fares in 2026 started at $49 one way for Sydney to Ballina, $105 for Melbourne to Sydney, $115 for Sydney to Cairns and $245 for Sydney to Perth in Virgin Australia's July sale, and Jetstar sold Melbourne to Uluru from $115. Those were limited sale seats, so treat them as floors and price your own trip with bags and seats added.

### `articles.domestic-flight-costs-australia-2026.sections[0].body[0]`

- Old: Add checked baggage, seat selection, payment charges, airport transport and the cost of reaching or replacing the vehicle. A cheap flight can still be the expensive option for a gear-heavy trip.
- New: Add checked baggage, seat selection, any booking or service fees, airport transport and the cost of reaching or replacing the vehicle. Card surcharges on Visa, Mastercard and eftpos have been banned since 1 October 2026, so a surcharge on those cards should not appear at checkout. A cheap flight can still be the expensive option for a gear-heavy trip.

### `articles.domestic-flight-costs-australia-2026.sections[2].body[0]`

- Old: The table records published promotions from Virgin Australia and Jetstar. Both had limited inventory and travel conditions, so no reader should expect the same fare today.
- New: The table records Virgin Australia's July 2026 sale and Jetstar's February 2026 Darwin and Uluru sale. Both sales have closed and both had limited seats and travel conditions, so no reader should expect the same fare today.

### `articles.domestic-flight-costs-australia-2026.faq[0][1]`

- Old: The guide gives realistic sale floors and typical fares on the main routes rather than headline prices. On the long legs, such as the east coast to Perth or Darwin, flying is often cheaper than driving once fuel and time are counted.
- New: 2026 sale fares started at $49 one way for Sydney to Ballina, $105 for Melbourne to Sydney and $245 for Sydney to Perth, but those were limited seats without checked baggage. Outside a sale, and with bags added, expect to pay more.

## australia-grocery-prices-2026

10 units with number changes; 13 more reworded without number changes; 1 new units, 0 removed units (sources).

### `articles.australia-grocery-prices-2026.title`

- Old: Australia grocery prices in 2026: a real supermarket budget
- New: Australia Grocery Prices 2026: Milk $2.45, Eggs $7.19

### `articles.australia-grocery-prices-2026.description`

- Old: Current price ranges for milk, eggs, bread, meat, fruit and vegetables, plus a sensible weekly food plan.
- New: October 2026 prices: milk $1.60 to $4 a litre, a dozen eggs $4.48 to $10, chicken $9 to $18 a kilo. A solo week of core staples costs about $85.

### `articles.australia-grocery-prices-2026.intro`

- Old: Self-catering is the simplest way to control a long Australian travel budget. The national ranges below are community-contributed June 2026 benchmarks, useful for scale but not a promise of today’s shelf price in every suburb or remote town.
- New: Community-reported average prices from Numbeo in October 2026 put a litre of milk at $2.45, a 500 g loaf at $3.96, a dozen eggs at $7.19 and a kilo of chicken fillets at $13.14. Self-catering is still the simplest way to control a long travel budget, as long as the basket is planned around a small fridge.

### `articles.australia-grocery-prices-2026.sections[2].body[0]`

- Old: A careful solo traveller cooking most meals might start with an indicative A$80–A$140 weekly grocery range, then adjust for diet, appetite and location. Premium meat, convenience foods and remote purchases lift it quickly.
- New: At Numbeo's community-reported national averages for October 2026, a solo week of core staples comes to about $85: 2 litres of milk, two loaves, a dozen eggs, a kilo of chicken, 500 g of beef, a kilo each of apples, bananas, tomatoes, onions and rice, 2 kg of potatoes, 500 g of cheese and a lettuce. Pantry items, snacks and remote purchases come on top.

### `articles.australia-grocery-prices-2026.sections[3].body[0]`

- Old: Coles and Woolworths cover the country and Aldi covers most urban and regional areas at noticeably lower prices for staples. IGA fills the gaps in smaller towns and is generally the most expensive of the four.
- New: Coles and Woolworths trade across the country, and Aldi is usually cheaper for staples where it trades (CHOICE's June 2026 basket came to $68.60 at Aldi against $77.53 at Woolworths and $78.58 at Coles), but it has no stores in <a data-guide="camping-rules-tasmania">Tasmania</a> or the Northern Territory. IGA and other independents fill the gaps in smaller towns, often at higher prices.

### `articles.australia-grocery-prices-2026.sections[6].body[0]`

- Old: A careful solo traveller cooking most meals can plan around a hundred to a hundred and seventy dollars a week for groceries, with couples achieving a lower per-person figure through shared staples. Dietary requirements, premium meat and remote purchases move that upwards quickly.
- New: Large supermarkets must show a unit price, such as the price per kilogram or per 100 g, next to the shelf price. Compare that line rather than the pack price, because bigger packs are not always cheaper per kilo.

### `articles.australia-grocery-prices-2026.sections[6].body[1]`

- Old: Keep coffee, <a data-guide="eating-out-australia-prices-2026">takeaway</a> and shared meals in a separate budget line. Calling every food purchase groceries hides the spending that is easiest to adjust when the total needs correcting, and it is almost never the supermarket shop that is the problem.
- New: Many supermarkets mark down fresh bakery and deli items late in the day, so the last shop before closing can be the cheapest one.

### `articles.australia-grocery-prices-2026.sections[6].tips[0]`

- Old: Around $100 to $170 a week solo
- New: Compare the unit price

### `articles.australia-grocery-prices-2026.faq[0][1]`

- Old: The guide prices a real basket rather than an average, with dated figures per item. Meat and packaged goods are the lines that surprise visitors, and remote and roadhouse prices run far above the city ones.
- New: On Numbeo's community-reported national averages for October 2026, milk is $2.45 a litre, bread $3.96 a loaf, eggs $7.19 a dozen and chicken fillets $13.14 a kilo. A solo week of core staples comes to about $85 before pantry items, and remote stores charge more.

### `articles.australia-grocery-prices-2026.sources[2].label`

- Old: Reserve Bank of Australia exchange rates
- New: CHOICE June 2026 supermarket price comparison

## eating-out-australia-prices-2026

6 units with number changes; 12 more reworded without number changes; 0 new units, 0 removed units (sources).

### `articles.eating-out-australia-prices-2026.title`

- Old: Eating out in Australia in 2026: meal, takeaway and coffee prices
- New: Eating Out Prices in Australia 2026: Cheap Meals $20 to $45

### `articles.eating-out-australia-prices-2026.description`

- Old: What casual meals, fast food, coffee and a mid-range dinner actually cost, with three daily food budgets.
- New: A cheap restaurant meal costs $20 to $45 in Sydney, a fast-food combo $15 to $18 and dinner for two $80 to $200 (October 2026). Tipping and surcharges.

### `articles.eating-out-australia-prices-2026.intro`

- Old: A city meal can be a quick counter lunch or the largest line in the day’s budget. Sydney provides a useful higher-cost benchmark, while Tourism Australia’s guide offers a broader starting point for restaurant planning.
- New: A meal at an inexpensive Sydney restaurant costs about $20 to $45 a person, a fast-food combo $15 to $18 and a three-course dinner for two at a mid-range restaurant $80 to $200, on community price data updated in October 2026. These are Sydney figures; the national ones are close (an inexpensive meal runs $17 to $45), but regional and remote prices can differ.

### `articles.eating-out-australia-prices-2026.sections[1].body[0]`

- Old: Check whether weekend or public-holiday surcharges apply and whether a card fee appears at payment. Shared plates, sides and drinks can move a seemingly ordinary main course well beyond its headline.
- New: Check whether a weekend or public holiday surcharge applies before ordering. Since 1 October 2026 businesses can no longer surcharge eftpos, Mastercard, Visa, American Express or UnionPay payments, and PayPal surcharges stopped from 5 October 2026, but weekend and public holiday surcharges, booking fees and service fees are not affected. Shared plates, sides and drinks still push an ordinary main well past its headline price.

### `articles.eating-out-australia-prices-2026.sections[4].body[0]`

- Old: Public holiday surcharges are legal, common and must be disclosed, typically around ten to fifteen percent. Weekend surcharges also appear at many venues, and card surcharges are added at the till rather than shown on the menu.
- New: Public holiday and weekend surcharges are legal and common, and a cafe or restaurant has to show them on the menu. Card surcharges on eftpos, Mastercard, Visa, American Express and UnionPay ended on 1 October 2026, so the menu price plus any weekend or public holiday surcharge, booking fee or service fee is what you pay.

### `articles.eating-out-australia-prices-2026.faq[0][1]`

- Old: The guide gives dated prices for a café breakfast, a pub meal, a mid-range dinner and takeaway. Pub bistros remain the best value for a full meal, which is why they anchor most road trip budgets.
- New: An inexpensive restaurant meal costs about $20 to $45 a person in Sydney and a fast-food combo $15 to $18, on October 2026 community price data. A three-course dinner for two at a mid-range restaurant runs $80 to $200 before drinks.

## alcohol-coffee-drink-prices-australia

8 units with number changes; 18 more reworded without number changes; 2 new units, 0 removed units (sources).

### `articles.alcohol-coffee-drink-prices-australia.title`

- Old: Beer, wine, coffee and drink prices in Australia
- New: Beer & Coffee Prices in Australia 2026: Pub Beer $7 to $16

### `articles.alcohol-coffee-drink-prices-australia.description`

- Old: A clear comparison of pub, cafe and bottle-shop prices so drinks do not quietly take over the travel budget.
- New: A pub beer costs $7 to $16 and a cappuccino $4.50 to $8 in Sydney (October 2026). Bottle-shop beer and wine prices, and how to keep drinks cheap.

### `articles.alcohol-coffee-drink-prices-australia.intro`

- Old: Drinks are easy to underestimate because they arrive one at a time. Current community price ranges show the difference between a bottle-shop purchase, a cafe stop and a round in a city pub.
- New: A 500 ml draught beer in a Sydney pub costs about $7 to $16 and a cappuccino $4.50 to $8, on community price data updated in October 2026, while a 500 ml bottle of beer from a bottle shop runs about $3.50 to $12 nationally. Drinks add up one round at a time.

### `articles.alcohol-coffee-drink-prices-australia.sections[1].body[0]`

- Old: The safest road-trip plan separates drinking from driving completely. Legal blood-alcohol limits differ by licence and vehicle class, and some drivers must have zero BAC.
- New: A mid-range 750 ml bottle of wine costs about $12 to $30 from a bottle shop, and it pours roughly five 150 ml glasses. Ordered by the glass in a bar or restaurant, the same wine usually costs considerably more per serve, so a bottle shared at camp is where wine is cheapest.

### `articles.alcohol-coffee-drink-prices-australia.sections[1].tips[0]`

- Old: Never drink and drive
- New: Mid-range bottle: $12 to $30

### `articles.alcohol-coffee-drink-prices-australia.sections[5].body[0]`

- Old: The general limit is 0.05 for full licence holders and zero for learner, provisional and many professional drivers. Random breath testing is common, including on rural roads and during the day.
- New: The general limit is 0.05 for full licence holders, zero for learner and provisional drivers, and zero or 0.02 for many professional drivers depending on the state (0.02 in NSW). Random breath testing is common, including on rural roads and during the day.

### `articles.alcohol-coffee-drink-prices-australia.faq[0][1]`

- Old: The guide prices a pub schooner, a craft beer, a bottle-shop carton, and wine by the glass and the bottle, all with dated figures. Buying from a bottle shop rather than a bar is the single biggest saving on a long trip.
- New: A 500 ml draught beer in a Sydney pub costs about $7.15 to $16 on October 2026 community price data, and a 500 ml bottle from a bottle shop about $3.50 to $12 nationally. Buying from a bottle shop rather than a bar is one of the biggest savings on a long trip.

### `articles.alcohol-coffee-drink-prices-australia.faq[1][1]`

- Old: A flat white sits in a fairly narrow band nationwide, with inner-city cafés at the top of it. Australian coffee is genuinely good, which is why this line creeps up on people over a long trip.
- New: A regular cappuccino costs about $4.50 to $8 in Sydney and $4 to $8 nationally on October 2026 community price data, with inner-city cafes often at the top of the range. Two coffees a day for two people becomes a real budget line on a long trip.
