#!/bin/sh
sleep 5
cd e2e || exit
npm ci
npm test
