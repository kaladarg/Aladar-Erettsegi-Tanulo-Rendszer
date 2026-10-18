#!/bin/sh
# Rebuilds the Inter subset used for Hungarian ő/ű and other Latin Extended-A
# letters (names such as Čapek or Łódź). The full latin-ext file is 85 KB; this
# subset keeps only U+0100–017F. Needs fonttools: pip install fonttools brotli
set -e
cd "$(dirname "$0")/.."
pyftsubset node_modules/@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2 \
  --unicodes='U+0100-017F' --flavor=woff2 --layout-features='*' \
  --output-file=src/design/fonts/inter-latin-ext-a-wght-normal.woff2
