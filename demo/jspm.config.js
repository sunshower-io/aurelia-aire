SystemJS.config({
  paths: {
    "aire-demo/": "dist/"
  },
  browserConfig: {
    "paths": {
      "npm:": "/jspm_packages/npm/",
      "aire-demo": "dist/",
      "github:": "/jspm_packages/github/",
      "local:": "/jspm_packages/local/"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "github:": "jspm_packages/github/",
      "aire-demo": "dist/",
      "local:": "jspm_packages/local/"
    }
  },
  packages: {
    "aire-demo": {
      "main": "index.js",
      "defaultExtension": "js"
    },
    "aire": {
      "defaultExtension": "js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json",
    "local:*.json"
  ],
  map: {
    "aire": "local:aire@1.0.0",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "aurelia-binding": "npm:aurelia-binding@2.1.7",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.3.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.3.0",
    "aurelia-history": "npm:aurelia-history@1.1.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.2.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.1.0",
    "aurelia-logging": "npm:aurelia-logging@1.5.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
    "aurelia-pal": "npm:aurelia-pal@1.8.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.0",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.3.0",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.3.1",
    "aurelia-router": "npm:aurelia-router@1.6.3",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1",
    "aurelia-templating": "npm:aurelia-templating@1.10.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.2",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.7.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.3.3",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "css": "github:systemjs/plugin-css@0.1.37",
    "font-awesome": "npm:font-awesome@4.7.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "text": "github:systemjs/plugin-text@0.0.11",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1"
  },
  packages: {
    "npm:aurelia-binding@2.1.7": {
      "map": {
        "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1",
        "aurelia-logging": "npm:aurelia-logging@1.5.0",
        "aurelia-pal": "npm:aurelia-pal@1.8.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.4"
      }
    },
    "local:aire@1.0.0": {
      "map": {
        "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.3.1",
        "uikit": "npm:uikit@3.0.0-rc.25",
        "text": "github:systemjs/plugin-text@0.0.11",
        "aire": "local:aire@1.0.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.2.1"
      }
    },
    "npm:buffer@5.2.1": {
      "map": {
        "ieee754": "npm:ieee754@1.1.12",
        "base64-js": "npm:base64-js@1.3.0"
      }
    },
    "npm:font-awesome@4.7.0": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.37"
      }
    }
  }
});
