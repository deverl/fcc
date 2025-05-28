#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo -n "Starting at: "
date

rm -rf data

mkdir -p data

cd data

echo "Fetching latest data..."
if [ "$(uname)" = "Darwin" ]
then
    ncftp wirelessftp.fcc.gov < ${SCRIPT_DIR}/script_get.ftp
else
    ftp -a wirelessftp.fcc.gov < ${SCRIPT_DIR}/script_get.ftp
fi


echo -n "Populating databases..."
date
if [ ! -f l_amat.zip ]
then
    echo "No zip file found!"
    exit 1
fi

echo "Extracting..."

unzip -o l_amat.zip

echo "Creating DB..."

mysql -u fccuser -pfccuser < ${SCRIPT_DIR}/mkdbs.sql

echo -n "Importing DMR data..."
date
curl -s -o user.csv https://radioid.net/static/user.csv

RET=$?

if [ $RET -ne 0 ]; then
    echo "Error downloading user.csv"
    exit 1
fi

echo "Updating DB with DMR data..."

mysql -u fccuser -pfccuser < ${SCRIPT_DIR}/import_dmr.sql



echo -n "Done at: "
date
