#!/usr/bin/env bash
for package; do
  for py in 3.6 3.7 3.8 3.9 3.10 3.11; do
    dir=__pypackages__/$py
    if [ -d "${dir}" ]; then
      echo /media/data/dev/$package/src > $dir/lib/$package.pth
    fi
  done
done
