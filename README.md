# Welcome to Aurelia Aire

Built with UIKit (https://github.com/uikit/uikit) and Aurelia (https://github.com/aurelia/framework), Aire is a lightweight solution to your web-app needs.


## Running the demo
From `aurelia-aire` run `npm run clean build dev watch`

## releasing
From the root directory (under which you should see `docs` and `aire`:
1. Run `npm run clobber dependencies`
1. CD to `docs`: `cd aire`
1. Run `npm run build`
1. CD to `demo`: `cd ../demo`
1. Run `jspm install --unlink npm:aire@<version>` where `<version>` is the site you want to release
1. Run `gulp clean && gulp build && gulp site`
1. CD to your project root `cd ../`
1. Verify that there are no markdown files under docs (Github pages will choke on them): `find docs -type f -name "*.md" | xargs rm`
1. Verify your changes `cd docs` `python -m SimpleHTTPServer` -> open the port in your browser and verify your changes are in.
1. Commit docs `cd .. && git add docs`
1. Push your changes to master
