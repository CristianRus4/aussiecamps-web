#!/bin/zsh
# make-screen-figure.sh <screenshot.png> <out.webp> <from-colour> <to-colour>
#
# Renders a screenshot figure for a guide (see docs/growth/screen-figures.md and lib/screen-figures.ts).
# Inputs: an iPhone screenshot PNG (full device resolution), the output path (public/images/screens/<slug>.webp)
# and the two brand gradient colours. Needs zsh and ImageMagick 7 (`magick`).
# Brand colours: AussieCamps #1e2b18 -> #6f873c, KiwiCamping #142719 -> #507a49.
# Example: scripts/make-screen-figure.sh shot.png public/images/screens/my-guide.webp '#1e2b18' '#6f873c'
# Then run `npm run images:manifest`.
#
# Output:
# A 1600x900 figure: a diagonal brand gradient with a soft light behind a centred, rounded iPhone
# screenshot that casts a gentle shadow. Also writes <out>-800.webp for the srcset.
set -euo pipefail
src=$1 out=$2 from=$3 to=$4
W=1600 H=900 PH=780
tmp=$(mktemp -d)
# Background: diagonal gradient plus a soft radial glow in the centre.
magick -size ${W}x${H} -define gradient:angle=135 gradient:"$from"-"$to" "$tmp/bg.png"
magick -size ${W}x${H} radial-gradient:'rgba(255,255,255,0.22)'-'rgba(255,255,255,0)' "$tmp/glow.png"
magick "$tmp/bg.png" "$tmp/glow.png" -compose screen -composite "$tmp/bg2.png"
# Phone: scale to PH tall, round the corners like the iPhone screen.
magick "$src" -resize x${PH} "$tmp/shot.png"
dims=$(magick identify -format "%w %h" "$tmp/shot.png"); pw=${dims% *}; ph=${dims#* }
R=$(( pw * 165 / 1206 ))
magick -size ${pw}x${ph} xc:none -fill white -draw "roundrectangle 0,0,$((pw-1)),$((ph-1)),$R,$R" "$tmp/mask.png"
magick "$tmp/shot.png" "$tmp/mask.png" -alpha off -compose copy_opacity -composite "$tmp/rounded.png"
# Soft shadow under the phone.
magick "$tmp/rounded.png" \( +clone -background 'rgba(0,0,0,0.55)' -shadow 60x26+0+22 \) +swap -background none -layers merge +repage "$tmp/phone.png"
magick "$tmp/bg2.png" "$tmp/phone.png" -gravity center -geometry +0+8 -compose over -composite -quality 88 "$out"
magick "$out" -resize 800x -quality 82 "${out%.webp}-800.webp"
rm -rf "$tmp"
