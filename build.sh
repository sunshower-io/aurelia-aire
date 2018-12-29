#!/bin/bash


depdirs=("jspm_packages" "node_modules")
declare -a projects=(
"aire"
"demo"
)

source build/clean.sh;
source build/clobber.sh;
source build/help.sh;
source build/install.sh;
source build/build.sh;



while test $# -gt 0
do
    echo "Running $1";
    case "$1" in
        dependencies)
            install_all
            ;;
        test)
            cd "aire" && npm run test;
            ;;
        build)
            build_all
            ;;
        clean)
            clean_all
            ;;
        clobber)
            clobber_all
            ;;
        *)
            show_help
            ;;
    esac
    shift
done;

exit 0;

