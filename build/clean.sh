#!/bin/bash


clean() {
    echo "cleaning $1...";
    cd "$1";
    npm run clean;
    cd ../;
    echo "successfully cleaned $1";
}

clean_all() {
    rm -rf "docs";
    clean "aire";
    clean "demo";
}
