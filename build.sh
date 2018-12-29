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

release_aire() {

    dependencies "aire";
    build "aire";

    cd "aire/dist";
    npm version patch --force -m "releasing [skip-build]";
    npm publish --access=public;
}


while test $# -gt 0
do
    echo "Running $1";
    case "$1" in
        release_aire)
            release_aire
            ;;
        dependencies)
            install_all
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
        test)
            test_all
            ;;
        *)
            show_help
            ;;
    esac
    shift
done;

exit 0;

