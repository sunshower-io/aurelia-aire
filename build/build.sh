#!/bin/bash


build() {
    echo "building $1";
    cd "$1";
    npm run build;
    echo "built $1";
    cd ..;
}

build_all() {
    for proj in "${projects[@]}"
    do
        build "$proj";
    done;
}



do_test() {
    echo "testing $1";
    cd "$1";
    npm run test;
    echo "tested$1";
    cd ..;
}

test_all() {
    for proj in "${projects[@]}"
    do
        do_test "$proj";
    done;
}
