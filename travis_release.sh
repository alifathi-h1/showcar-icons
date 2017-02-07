#!/bin/bash

set -ev

TARGET_BRANCH=release

chmod 600 release_key
eval `ssh-agent -s`
ssh-add release_key

mkdir temp-git
cd temp-git

git clone -b $TARGET_BRANCH --single-branch "git@github.com:AutoScout24/showcar-icons.git" .
git config user.name "Travis CI"
git config user.email "${GIT_EMAIL}"
git config push.default simple
git checkout $TARGET_BRANCH

cp -r ../dist .
cp -r ../src .
cp ../package.json .
cp ../History.md .

git add . -A
git commit -am "Release"
git push origin $TARGET_BRANCH

