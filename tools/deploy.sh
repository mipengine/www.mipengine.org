#!/bin/bash

if [ ! -n "$TRAVIS_TAG" ]; then
    echo "CI tag 为空"
    exit 1
fi

if [ ! -n "$ACCESS_KEY" ]; then
    echo "ACCESS_KEY 没有配置"
    exit 1
fi

if [ ! -n "$SECRET_ACCESS_KEY" ]; then
    echo "SECRET_ACCESS_KEY 没有配置"
    exit 1
fi

if [ ! -n "$GIT_URL" ]; then
    echo "GIT_URL 没有配置"
    exit 1
fi

git clone "https://$ACCESS_KEY:$SECRET_ACCESS_KEY@$GIT_URL" bae
cp -r dist/* bae/
cd bae

git add .
git commit -m "release: $TRAVIS_TAG"
git push

cd ../
rm -rf bae
