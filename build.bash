#!/bin/bash

run_all() {
    echo "Running $1 on Aire";
    cd aire;
    npm run $1;
    cd ../;

    echo "Done";

    echo "Running $1 on Demo";
    cd demo;
    npm run $1;
    cd ../;
    echo "Done";
}

run_all $1;
