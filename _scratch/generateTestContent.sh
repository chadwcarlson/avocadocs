#!/usr/bin/env bash

rm -rf exampleSite/content/*

START=1
END=4

hugo new exampleSite/content/_index.md

for (( c=$START; c<=$END; c++ ))
do
  hugo new exampleSite/content/test$c/index.md && hugo new exampleSite/content/test$c/a.md
  echo
done
