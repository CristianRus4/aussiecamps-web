#!/bin/zsh
# Publish this site now (AussieCamps or KiwiCamping: it works out which from the repo).
#
# The site releases a dated guide in the first build on or after its publishAt day (New Zealand date,
# lib/publish.ts), and GitHub Pages rebuilds every morning at 07:15 NZ. This script starts that same
# deploy now, so everything due today or earlier goes live without waiting. Nothing is committed or
# pushed, and it is safe to run any number of times.
#
#   Double-click it, or run it from a terminal.
#   DRY_RUN=1   only show what is due; deploy nothing.
#   NO_PAUSE=1  do not wait for Return at the end (for a combined launcher).
# Exit 0: deployed (or dry run). Exit 1: failed. The last line printed is a one-line summary.
# Needs: git and the GitHub CLI (gh) signed in. The deploy runs on GitHub and takes about 6 to 10 minutes.
set -u
cd "${0:A:h}/.." || exit 1
repo=$(git remote get-url origin | sed -E 's#^(git@github\.com:|https://github\.com/)##; s#\.git$##')
site=${${repo:t}%-web}
today=$(TZ=Pacific/Auckland date +%F)
finish() { print -r -- "$1"; [[ -z ${NO_PAUSE:-} ]] && read -r "?Press Return to close "; exit $2; }

git fetch -q origin main || finish "$site: FAILED (git fetch)" 1
schedule=$(git show origin/main:docs/growth/publish-schedule.md 2>/dev/null | grep -E '^\| 20[0-9]{2}-[0-9]{2}-[0-9]{2} \|')
due=$(print -r -- "$schedule" | awk -F'|' -v t="$today" '{d=$2; s=$3; gsub(/ /,"",d); gsub(/ /,"",s); if (d==t) print s}' | paste -sd, - | sed 's/,/, /g')
next=$(print -r -- "$schedule" | awk -F'|' -v t="$today" '{d=$2; s=$3; gsub(/ /,"",d); gsub(/ /,"",s); if (d>t) print d" "s}' | sort | head -1)
print -r -- "$site ($repo), $today. Due today: ${due:-nothing new}. Next: ${next:-none scheduled}."

[[ -n ${DRY_RUN:-} ]] && finish "$site: dry run, would redeploy main (due today: ${due:-nothing new})" 0

start=$(date -u +%Y-%m-%dT%H:%M:%SZ)
gh workflow run pages.yml --repo "$repo" --ref main >/dev/null || finish "$site: FAILED (could not start the deploy)" 1
run=""
for _ in {1..20}; do
  sleep 3
  run=$(gh run list --repo "$repo" --workflow pages.yml --event workflow_dispatch --limit 5 --json databaseId,createdAt \
    --jq "[.[] | select(.createdAt >= \"$start\")][0].databaseId // empty")
  [[ -n $run ]] && break
done
[[ -z $run ]] && finish "$site: FAILED (the deploy did not start; see https://github.com/$repo/actions)" 1
print -r -- "Deploy $run started on GitHub; waiting for it to finish (about 6 to 10 minutes)..."
if gh run watch "$run" --repo "$repo" --exit-status >/dev/null 2>&1; then
  finish "$site: published (due today: ${due:-nothing new})" 0
else
  finish "$site: FAILED (deploy $run: https://github.com/$repo/actions/runs/$run)" 1
fi
