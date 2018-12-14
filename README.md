# Welcome to Aurelia Aire

Built with UIKit (https://github.com/uikit/uikit) and Aurelia (https://github.com/aurelia/framework), Aire is a lightweight solution to your web-app needs.

## Developing on Aire
`cd docs`
`git submodule init`
`git submodule update`

## Working on the Site
`cd docs`
With ruby and ruby-dev installed, `bundle install` and `bundle exec middleman server`

## Running the demo
This assumes that you're already in the `aurelia-aire` directory and have `npm`, `jspm` and `gulp-cli` installed.

In one terminal window:
- `cd aire`
- `npm install && jspm install -y`
- `gulp build watch`

In another terminal window:
- `cd demo`
- `npm install && jspm install -y`
- `jspm link ../aire/dist`
- `gulp build watch`
