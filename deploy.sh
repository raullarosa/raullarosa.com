#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
# cd dist

# if you are deploying to a custom domain
# echo 'www.raullarosa.com' > CNAME

# git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://raullarosa.github.io
# git push -f git@github.com:raullarosa/raullarosa.github.io.git production

# if you are deploying to https://raullarosa.github.io/raullarosa.com
git push -f git@github.com:raullarosa/raullarosa.com.git master

firebase deploy --only hosting

cd -