#!/bin/sh

echo "Building...\n"

# remove any old builds
rm -rf __sapper__/export

# run the site builder
npm run export

# copy over the site's CNAME and README file
cp benmcgarvey.github.io/CNAME __sapper__/
cp benmcgarvey.github.io/README.md __sapper__/

echo "Removing old site...\n"
# scrub the submodule
rm -rfv benmcgarvey.github.io/*

echo "Copying new site...\n"
# copy the new site into the submodule
cp -r __sapper__/export/. benmcgarvey.github.io

echo "Updating git submodule...\n"
# update git submodule
cd benmcgarvey.github.io
git add .
git commit -m ${1:-building}

echo "Updating parent git...\n"
cd -
git add .
git commit -m ${1:-building}