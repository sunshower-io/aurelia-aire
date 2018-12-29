#!/bin/bash
show_help() {
    echo "\
Welcome to @sunshower-aire.  You have the following options:

    npm run install:
        install all dependencies for all modules

    npm run clean:
        remove all generated (e.g. compiled) files and directories
        but leave package directories (e.g. node_modules) intact

    npm run clobber:
        same as 'npm run clean', but also removes dependency directories

    npm run build
        build all modules

"



}
