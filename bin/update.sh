#!/bin/bash

echo -n "Starting at: "
date

echo "Fetching latest data..."
bin/get.sh

echo -n "Populating databases..."
date
bin/mkdbs.sh

echo -n "Importing DMR data..."
date
bin/import_dmr.sh

echo -n "Done at: "
date
