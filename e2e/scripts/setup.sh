#!/bin/sh
# Before we run our tests, we need to setup all the different services that we will run
# This script does that
# NOTE: It should be run from the project root
# 1. Install production deps for the frontend and backend
# 2. Build the frontend with a bogus production api url
# 3. Clean up in preparation or testing

# 1)
cd frontend || exit
npm ci || exit
# delete env file, we will manually replace what it has
rm -rf .env
cd .. || exit

cd backend || exit
npm ci --production || exit
cd .. || exit

# 2)
cd frontend
REACT_APP_PROD_URL=http://localhost:3001 npm run build || exit
cd ..

# 3)
# install serve globally to serve the static files
npm install -g serve
