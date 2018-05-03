#!/usr/bin/env bash

cd ./platforms/browser/www
git init
git remote add origin https://github.com/frnd/ionic3-pwa-workbox.git
git add -A
git commit -m "production build"
git push -u origin master:gh-pages --force
cd ../../..
