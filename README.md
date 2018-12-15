# Welcome to Aurelia Aire

Built with UIKit (https://github.com/uikit/uikit) and Aurelia (https://github.com/aurelia/framework), Aire is a lightweight solution to your web-app needs.

# Developing on Aurelia-Aire
We've included some NPM tasks to simplify development

##  Getting started:
1. Clone the repo: `git clone git@github.com:sunshower-io/aurelia-aire`
1. Build the project: `npm run build`
1. Start the development server(s): `npm run watch`
1. Make some changes (they'll automatically be updated)

Profit!


# Tasks
1. npm run build
    * Resolves all dependencies for aire and demo
    * Builds aire and demo, then links demo to aire
1. npm run clean
    * runs `npm run clean` on aire and demo
    * removes jspm_packages and node_modules from both projects
1. npm run watch
    * runs `npm run build && npm run watch` on both projects, building everything and starting 2 gulp servers
1. npm run stop
    * stops aire and demo dev servers