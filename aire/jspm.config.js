SystemJS.config({
  browserConfig: {
    "paths": {
      "aurelia-aire/": "/src/"
    }
  },
  nodeConfig: {
    "paths": {
      "aurelia-aire/": "src/"
    }
  },
  packages: {
    "aurelia-aire": {
      "main": "aire.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [],
  map: {},
  packages: {}
});
