#!/bin/bash

clobber() {
    cd "$1";
    for dep in "${depdirs[@]}"
    do
        npm run clean;
        echo "Removing $1/$dep";
        rm -rf "$dep";
        echo "Successfully removed $1/$dep";
    done;
    cd ../;
}

clobber_all() {
    rm -rf "node_modules"
    for proj in "${projects[@]}"
    do
        clobber "$proj";
    done;
}
