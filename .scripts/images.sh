####
## @file
## Optimize jpg and png images. Convert jpg, png, and gif to webp where passible.
##
## This script requires the following utilities to be installed (non-standard):
##   * jpegoptim
##   * pngcrush
##   * optipng
##   * webp (metapackage including cwebp and gif2webp)
##
## Run this script from the repo root (ex: `.scripts/images.sh`).
####

# Optimize legacy formats.
for i in `find assets/ -name "*.jpg"`; do jpegoptim --max=90 --strip-all --all-progressive --preserve --totals $i; done
for i in `find assets/ -name "*.png"`; do pngcrush -e .png2 -rem allb -brute -reduce $i; mv ${i}2 $i; optipng -o7 $i; done

# Create webp copies that are just the original filenames with .webp appended (to make it easy for Jekyll to conditionally
# find them.
for i in `find assets/ -name "*.jpg"`; do cwebp -q 75 $i -o $i.webp; done
for i in `find assets/ -name "*.png"`; do cwebp -q 85 $i -o $i.webp; done
for i in `find assets/ -name "*.gif"`; do gif2webp -q 75 $i -o $i.webp; done
