#!/bin/bash



install() {
    cd "$1";
    echo "Installing all dependencies for $1...";
    echo "installing npm dependencies in $1...";
    npm install;
    echo "successfully installed npm dependencies in $1";
    echo "installing jspm dependencies in $1";
    jspm install -y;
    echo "successfully installed jspm dependencies in $1";
    echo "Successfully installed dependencies for $1";
    cd ../;
}

install_all() {

    for proj in "${projects[@]}"
    do
        install "$proj";
    done;
}