#!/bin/bash

if [ "$(uname)" = "Darwin" ]
then
    flask --app fccapp run --host 0.0.0.0 --port 4000
else
    flask --app fccapp run --port 80
fi

