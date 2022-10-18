#!/usr/bin/env sh

set -e
npm run build
git add .
git add dist -f
git commit -m 'deploy'
git push -u origin main
git subtree push --prefix dist origin gh-pages
git push -f git@github.com:JeanEpp/JeanEpp.github.io.git master
cd -