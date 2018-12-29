SystemJS.config({
  nodeConfig: {
    "paths": {
      "github:": "jspm_packages/github/",
      "local:": "jspm_packages/local/",
      "npm:": "jspm_packages/npm/",
      "aire-demo/": "dist/"
    }
  },
  packages: {
    "aire-demo": {
      "main": "main.js",
      "format": "cjs",
      "defaultExtension": "js"
    },
    "local:aire@1.0.0": {
      "map": {
        "aurelia-animator-velocity": "npm:aurelia-animator-velocity@1.2.0",
        "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.3.1",
        "uikit": "npm:uikit@3.0.0-rc.25",
        "aurelia-fetch-client": "npm:aurelia-fetch-client@1.7.0",
        "text": "github:systemjs/plugin-text@0.0.11"
      }
    },
    "npm:aurelia-binding@2.1.7": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.5.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
        "aurelia-pal": "npm:aurelia-pal@1.8.0",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1"
      }
    },
    "npm:aurelia-fetch-client@1.7.0": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.8.0"
      }
    },
    "npm:font-awesome@4.7.0": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.37"
      }
    }
  },
  packageConfigPaths: [
    "github:*/*.json",
    "local:*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "aire": "local:aire@1.0.0",
    "aurelia-binding": "npm:aurelia-binding@2.1.7",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.3.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
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
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "font-awesome": "npm:font-awesome@4.7.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "text": "github:systemjs/plugin-text@0.0.11",
    "velocity-animate": "npm:velocity-animate@1.5.2"
  },
  bundles: {
    "aire-demo/app-build.js": [
      "aire-demo/index.js",
      "aire-demo/main.js",
      "github:systemjs/plugin-text@0.0.11.json",
      "index.html!github:systemjs/plugin-text@0.0.11/text.js"
    ],
    "aire-demo/aurelia.js": [
      "npm:aurelia-binding@2.1.7.json",
      "npm:aurelia-binding@2.1.7/aurelia-binding.js",
      "npm:aurelia-bootstrapper@2.3.1.json",
      "npm:aurelia-bootstrapper@2.3.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.4.2.json",
      "npm:aurelia-dependency-injection@1.4.2/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.json",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-framework@1.3.0.json",
      "npm:aurelia-framework@1.3.0/aurelia-framework.js",
      "npm:aurelia-history-browser@1.2.0.json",
      "npm:aurelia-history-browser@1.2.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.1.0.json",
      "npm:aurelia-history@1.1.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.1.0.json",
      "npm:aurelia-loader-default@1.1.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.json",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.json",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.5.0.json",
      "npm:aurelia-logging@1.5.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.4.json",
      "npm:aurelia-metadata@1.0.4/aurelia-metadata.js",
      "npm:aurelia-pal@1.8.0.json",
      "npm:aurelia-pal@1.8.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.json",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.3.0.json",
      "npm:aurelia-polyfills@1.3.0/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.3.1.json",
      "npm:aurelia-route-recognizer@1.3.1/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.6.3.json",
      "npm:aurelia-router@1.6.3/aurelia-router.js",
      "npm:aurelia-task-queue@1.3.1.json",
      "npm:aurelia-task-queue@1.3.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.5.2.json",
      "npm:aurelia-templating-binding@1.5.2/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.7.1.json",
      "npm:aurelia-templating-resources@1.7.1/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.7.1/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.7.1/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.7.1/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.7.1/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.7.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.7.1/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.7.1/binding-signaler.js",
      "npm:aurelia-templating-resources@1.7.1/compose.js",
      "npm:aurelia-templating-resources@1.7.1/css-resource.js",
      "npm:aurelia-templating-resources@1.7.1/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.7.1/dynamic-element.js",
      "npm:aurelia-templating-resources@1.7.1/else.js",
      "npm:aurelia-templating-resources@1.7.1/focus.js",
      "npm:aurelia-templating-resources@1.7.1/hide.js",
      "npm:aurelia-templating-resources@1.7.1/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.7.1/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.7.1/if-core.js",
      "npm:aurelia-templating-resources@1.7.1/if.js",
      "npm:aurelia-templating-resources@1.7.1/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.7.1/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.7.1/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.7.1/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.7.1/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.7.1/repeat.js",
      "npm:aurelia-templating-resources@1.7.1/replaceable.js",
      "npm:aurelia-templating-resources@1.7.1/sanitize-html.js",
      "npm:aurelia-templating-resources@1.7.1/self-binding-behavior.js",
      "npm:aurelia-templating-resources@1.7.1/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.7.1/show.js",
      "npm:aurelia-templating-resources@1.7.1/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.7.1/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.7.1/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.7.1/with.js",
      "npm:aurelia-templating-router@1.3.3.json",
      "npm:aurelia-templating-router@1.3.3/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.3.3/route-href.js",
      "npm:aurelia-templating-router@1.3.3/route-loader.js",
      "npm:aurelia-templating-router@1.3.3/router-view.js",
      "npm:aurelia-templating@1.10.1.json",
      "npm:aurelia-templating@1.10.1/aurelia-templating.js"
    ]
  }
});