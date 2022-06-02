#!/usr/bin/env bash

echo "...updating repositories from server..."

cd /home/crome-cgg
git reset --hard
git config pull.rebase true
git pull

cd /home/crome-contracts
git reset --hard
git config pull.rebase true
git pull

cd /home/crome-logic
git reset --hard
git config pull.rebase true
git pull

cd /home/crome-synthesis
git reset --hard
git config pull.rebase true
git pull

cd /home/crome-web
git reset --hard
git config pull.rebase true
git pull


if [ $# -eq 0 ]
  then
    source run.sh
else
    source run.sh "$@"
fi