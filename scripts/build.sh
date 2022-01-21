#!/bin/bash
#cd react-project
yarn run build:custom
rimraf /opt/homebrew/var/www/build
mv ../build /opt/homebrew/var/www
nginx -s reload