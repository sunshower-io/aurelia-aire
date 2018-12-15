# Welcome to Aurelia Aire

Built with UIKit (https://github.com/uikit/uikit) and Aurelia (https://github.com/aurelia/framework), Aire is a lightweight solution to your web-app needs.


## Running the demo
This assumes that you're already in the `aurelia-aire` directory and have `npm`, `jspm` and `gulp-cli` installed.

In one terminal window:
- `cd aire`
- `npm install`
- `jspm install -y`
- `gulp build watch`

In another terminal window:
- `cd demo`
- `npm install`
- `jspm link ../aire/dist`
- `jspm install -y`
- `gulp aire:generate build watch`



