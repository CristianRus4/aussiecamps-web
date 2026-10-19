# Growth push: thread rules

Read this before starting any thread task in the growth push. The plan itself is `docs/growth/PLAN.md`. The orchestrator is the main Claude Code session; it reviews, merges and deploys.

## Roster (all threads: Opus, xhigh effort)

| Account | Thread | Repo(s) | Branch |
|---|---|---|---|
| Kai | A-foundation | aussiecamps-web | `growth/a-foundation` |
| Kai | A-content | aussiecamps-web | `growth/a-content` |
| Kai | A-tools-hubs | aussiecamps-web | `growth/a-tools-hubs` |
| Kai | i18n-de, i18n-nl, i18n-fr | both sites | `i18n/a-<code>` and `i18n/k-<code>` |
| Ava | K-foundation | kiwicamping-web | `growth/k-foundation` |
| Ava | K-content | kiwicamping-web | `growth/k-content` |
| Ava | K-tools-hubs | kiwicamping-web | `growth/k-tools-hubs` |
| Ava | i18n-es, i18n-it, i18n-pt | both sites | `i18n/a-<code>` and `i18n/k-<code>` |
| Max | i18n-ja, i18n-zh-hant, i18n-ko, i18n-zh-hans | both sites | `i18n/a-<code>` and `i18n/k-<code>` |

**One language per i18n thread.** Each i18n thread owns one language on both sites, so the voice, terms and style guide are identical across AussieCamps and KiwiCamping.
- T3 creates your worktree for the first repo.
- Create the second one yourself:
  ```
  git -C /Users/cristian/Developer/Webs/<other-repo> fetch origin
  git -C /Users/cristian/Developer/Webs/<other-repo> worktree add ~/.t3/worktrees/<other-repo>-<branch-slug> -b <branch> origin/main
  ```

## Repos and read-only sources

| Path | What it is | Access |
|---|---|---|
| `/Users/cristian/Developer/Webs/aussiecamps-web` | AussieCamps site (https://aussiecamps.app), app id 6801098680 | read/write |
| `/Users/cristian/Developer/Webs/kiwicamping-web` | KiwiCamping site (https://campingapp.nz), app id 6746952595 | read/write |
| `/Users/cristian/Developer/Apps/Camping` | App repo | **Read-only.** Never edit, commit, build in or worktree it. Opening its SQLite file directly can create `-wal`/`-shm` files inside it; copy the file to a temp dir first. |
| `/Users/cristian/Developer/Tools/translation-engine` | Provider-free translation engine (`docs/translation.config.json` in each site) | read-only tool |

## Ownership (avoids merge conflicts between threads)

**Generated files** are always regenerated, never hand-edited or hand-merged:
- `lib/translations/en.json` (`npm run translations:source`)
- `lib/article-dates.json`
- image manifests and credits
- the locale barrel and config, once `npm run locales:sync` exists

**Locale files** `lib/translations/<code>.json` (and later `lib/translations/meta/<code>.json`):
- Each belongs only to its i18n thread.
- Foundation, content and tools-hubs threads change English only. They never touch locale JSON.

**Orchestrator only:**
- `lib/locales.json` status flips (`draft` to `live`) once it exists
- `.github/workflows/*` (except the foundation thread's CI change)
- final `package.json` and lockfile conflict resolution

**Protected files** may only be changed by the foundation thread, with the reason written in the commit message:
- `tests/**`
- `scripts/audit-*.mjs`
- `scripts/export-github-pages.mjs`
- the gate functions in `lib/localized.ts` (`isArticleComplete`, `isTranslated`, `isPageComplete`)

Other gate rules:
- Thresholds only go up.
- `rankingUrls` lists only grow.
- Never weaken or skip a test to make it pass.

**Immutable:** `slug:` and `legacyPath:` values, and every URL that currently returns 200. Never change, rename or remove them. GitHub Pages cannot 301.

## Facts that must hold in all new or changed copy
- **No offline map.** The apps are iPhone-only. Place details and guides work offline. Map tiles, routing, weather and photos need signal. Never write "offline map" (or its equivalent) in any language.
- **The Pass boundary.**
  - AussieCamps: only BookEasy stays and tours (hotels, motels, B&Bs, holiday parks, tours) are free. Everything else (campgrounds, rest areas, dump points, water, toilets, parks, guides, collections, trips) needs the Pass.
  - KiwiCamping: only BookIt stays and tours are free. DOC campsites, huts, dump stations, freedom-camping notices and guides need the Pass.
  - CTAs must not promise free access to Pass data.
- **Kiwi `freedom.json`** holds DOC conservation-land notices (266 prohibited, 85 restricted, 3 permitted), keyed by DOC district. They are not council bylaws.
- **Counts.** Do not add new headline totals. Use counts only from the app data (`lib/data/product-facts.json` once tools-hubs has generated it). Leave the existing homepage testimonials, user counts and place totals exactly as they are. Do not translate testimonials into new locales, and do not write new ones.
- **Partner data.** BookEasy (AU) and BookIt (NZ) data is never republished on the sites.
- **Sources.** Every rule, fee, fine or date must cite an official source (DOC, MBIE, council, NZTA, state park agency, Home Affairs, Immigration NZ) and be correct for 2026.
- **House rules.** Follow `docs/WEBSITE-BRIEF.md` and `docs/MARKETING_AND_OPERATIONS.md`: no em dashes, no filler, product names exact (AussieCamps, KiwiCamping).

## How every thread works and finishes
1. Keep a progress file only you edit: `docs/growth/progress/<thread-name>.md`. List what is done, what is next and any blockers, so a rate-limited thread can resume.
2. Commit in small, coherent milestones on your branch. **Never push. Never merge into main.** The orchestrator merges and deploys.
3. **Hand off** each milestone as soon as it is coherent and passes checks. Partial progress is welcome; the site deploys continuously.
   - Run `git fetch origin && git rebase origin/main`.
   - Regenerate the generated files.
   - Run `npm run check` (i18n threads: `npm run content:check` plus the translation engine `audit`).
   - Reply with:
     - the branch name and the commit SHAs ready to merge;
     - `git diff --stat origin/main...HEAD`;
     - the check output summary;
     - anything the orchestrator must know.
   - Then keep working on the next milestone.
4. **Dependencies.** Translation and content worktrees should not run `npm ci`. Clone `node_modules` from the main checkout with:
   ```
   cp -cR /Users/cristian/Developer/Webs/<repo>/node_modules ./node_modules
   ```
   That is an APFS copy-on-write clone, so it costs almost no disk.
5. **Build sparingly.** At most one full `npm run check` at a time per thread. During iteration, prefer `npm run content:check`.
6. If something in this file or the plan is wrong or blocks you, say so in your reply instead of working around it.
