#!/usr/bin/env bash
set -e
BUCKET=markoilic.dev-website
DIST_ID=E134HWPPFCS84

npm run build
aws s3 sync out/_next/static s3://$BUCKET/_next/static --cache-control "public,max-age=31536000,immutable"
aws s3 sync out s3://$BUCKET --delete --exclude "_next/static/*" --cache-control "public,max-age=0,must-revalidate"
aws cloudfront create-invalidation --distribution-id $DIST_ID --paths "/*"
