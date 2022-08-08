#!/usr/bin/env bash

echo "...updating repository from server..."

cd /home/crome-web
git reset --hard
git config pull.rebase true
git submodule update --init
git submodule update
git pull

echo "repository updated"

if [ $# -eq 0 ]
  then
    source run.sh
else
    source run.sh "$@"
fi
