#!/bin/bash
show_help() {
    echo "\
Welcome to @sunshower-aire.  You have the following options:

    npm run dependencies:
        install all dependencies for all modules

    npm run clean:
        remove all generated (e.g. compiled) files and directories
        but leave package directories (e.g. node_modules) intact

    npm run clobber:
        same as 'npm run clean', but also removes dependency directories

    npm run build
        build all modules

    NOTE:
        TO BUILD EVERYTHING:
        npm run clobber dependencies build

        After running this, run:
        cd demo
        gulp watch

        You should see something like:

            [Browsersync] Access URLs:
             ----------------------------
             Local: http://localhost:9000
             ----------------------------
             UI: http://localhost:3001
             ----------------------------
            [Browsersync] Serving files from: .
            [03:29:53] Finished 'serve' after 89 ms


        Open a browser and navigate to http://localhost:<port> (where <port> is 9000 above) and you
        should see the Aire Documentation Site
"



}
