#!/bin/sh
sleep 5
curl localhost:3001 >3001.txt
curl localhost:5000 >5000.txt
echo 3001.txt
echo 5000.txt
