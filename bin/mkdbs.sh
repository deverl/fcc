#!/bin/bash

if [ ! -f l_amat.zip ]
then
    echo "No zip file found!"
    exit 1
fi


echo "Extracting..."

unzip -o l_amat.zip

cat EN.dat | sed 's/"//g' > en.csv

echo "Creating DB..."

sqlite3 fcculs.db < bin/mkdbs.sql

