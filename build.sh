#!/bin/bash
set -ev

COMMIT_HASH=$(git rev-parse HEAD)
ASSET_PATH="/assets/external/${SERVICE}/${BRANCH}/${COMMIT_HASH}"

fail() {
  echo "FAIL: $*"
  exit 1
}

prepare_assets() {
    sed -i -e "s=@@ASSET_PATH=${ASSET_PATH}=" dist/index.html
    sed -i -e "s=index.min.js.map=${ASSET_PATH}/index.min.js.map=" dist/index.min.js
}

upload_to_s3() {
    echo "Uploading assets to S3"

    # aws --region "eu-west-1" s3 cp dist "s3://as24-assets-eu-west-1/showcar-tracking/test/" --recursive --exclude "*.html" --cache-control "max-age=2592000" --acl public-read

    # aws --region "eu-west-1" s3 cp dist "s3://as24-assets-eu-west-1/showcar-tracking/test/" --recursive --exclude "*" --include "*.html" --cache-control "max-age=300" --acl public-read

    # aws --region "eu-west-1" s3 cp dist "s3://as24-assets-eu-west-1/${SERVICE}/${BRANCH}/latest/" --recursive --exclude "*.html" --cache-control "max-age=2592000" --acl public-read

    # aws --region "eu-west-1" s3 cp dist "s3://as24-assets-eu-west-1/${SERVICE}/${BRANCH}/latest/" --recursive --exclude "*" --include "*.html" --cache-control "max-age=300" --acl public-read

    # aws --region "eu-west-1" s3 cp dist "s3://as24-assets-eu-west-1/${SERVICE}/" --recursive --exclude "*" --include "*-fragment.html" --cache-control "max-age=300" --acl public-read
}

npm i
npm run build

prepare_assets
upload_to_s3 