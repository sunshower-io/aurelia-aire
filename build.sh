#!/bin/bash

run_all() {
    local c=$(echo $1 | cut -c 3-);
    echo "Running $c on Aire";
    cd aire;
    echo "$(pwd)"
    npm run-script $c;
    cd ../;

    echo "Done";

    echo "Running $1 on Demo";
    cd demo;
    npm run-script $c;
    cd ../;
    echo "Done";
}

watch() {

    echo "Starting aire in sub-shell";
    cd aire;
    gulp watch &
    sleep 5;
    cd ../

    echo "Starting demo in sub-shell";
    cd demo
    gulp watch &
}

doKill() {
    killall "gulp watch";
}


restart() {
    echo "Restarting tasks";
    doKill;

    watch;
    echo "Tasks restarted";
}



configure_dev() {
    echo "Configuring Aire Dev Environment";
    cd demo;
    jspm link ../aire/dist;
    cd ../;
}


while test $# -gt 0
do
    echo "Running $1";
    case "$1" in
        --test)
            run_all $1
            ;;
        --build)
            run_all "--deps"
            run_all $1
            ;;
        --dev)
            configure_dev
            ;;
        --watch)
            watch
            ;;
        --stop)
           doKill
            ;;
        --clean)
            run_all "--clean"
            ;;
    esac
    shift
done;

exit 0;

