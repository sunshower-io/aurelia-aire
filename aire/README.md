### Developing on Aire

1.  Install npm for your platform
2.  Install jspm globally `sudo npm install -g jspm`
3.  Install project `npm install && jspm install -y && typings install`
4.  JSPM-link the project over to the consuming project:
- Clone aire to aire (cloned directory named aire)
- Clone/create your project that consumes aire (e.g. sunshower-myplugin)
- From `aire` run `gulp build` and then `jspm link github:sunshower-io/aire`
- in your consuming project, run `jspm install --link github:sunshower-io/aire@1.0.0`
- Make a change in aire, then run `gulp build && jspm link github:sunshower-io/aire -y` to update your consuming project


## Building all the things
### Creating a new component

1. We use material-components-web, so to add a new binding for a MCW component, install it via npm `npm install --save @material/component`
-- For instance, to install `drawer` run `npm install --save @material/drawer`


1.  `mvn clean install -f bom && gradle clean build pTML` on sunshower-devops (this does not currently seem to work)
2.  `mvn clean install -f bom && gradle clean build pTML` on sunshower-base (do not -x test)
3.  `mvn clean install -f bom && gradle clean build pTML` on sunshower-core (do not -x test)
4.  `mvn clean install -f bom && gradle clean build pTML -x test` on sunshower-kernel
5.  `mvn clean install -f bom && gradle clean build pTML` on sunshower-sdk (do not -x test)
6.  `mvn clean install -f bom && gradle clean build pTML -x test` on sunshower
7.  `gradle clean build && gradle cRunL -i` on root of atmosphere (or whichever plugin)