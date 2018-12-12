System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "aire/*": "src/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  shim: {
    "goldenlayout": {
      "deps": [
        "jquery"
      ],
      "exports": "$"
    }
  },

  meta: {
    "@material/*": {
      "format": "esm"
    }
  },

  map: {
    "@material/button": "npm:@material/button@0.29.0",
    "@material/linear-progress": "npm:@material/linear-progress@0.30.0",
    "@material/list": "npm:@material/list@0.29.0",
    "@material/textfield": "npm:@material/textfield@0.29.0",
    "@material/theme": "npm:@material/theme@0.29.0",
    "@material/toolbar": "npm:@material/toolbar@0.28.0",
    "@material/typography": "npm:@material/typography@0.28.0",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.1.5",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0",
    "golden-layout": "npm:golden-layout@1.5.9",
    "jquery": "npm:jquery@3.3.1",
    "reflect-metadata": "npm:reflect-metadata@0.1.12",
    "sunshower-io/aire": "github:sunshower-io/aire@1.0.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.8"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:sunshower-io/aire@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "reflect-metadata": "npm:reflect-metadata@0.1.12"
    },
    "npm:@material/button@0.29.0": {
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/ripple": "npm:@material/ripple@0.29.0",
      "@material/theme": "npm:@material/theme@0.29.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/elevation@0.28.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/theme": "npm:@material/theme@0.4.0"
    },
    "npm:@material/linear-progress@0.30.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.29.0",
      "@material/theme": "npm:@material/theme@0.30.0"
    },
    "npm:@material/list@0.29.0": {
      "@material/ripple": "npm:@material/ripple@0.29.0",
      "@material/rtl": "npm:@material/rtl@0.29.0",
      "@material/theme": "npm:@material/theme@0.29.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:@material/ripple@0.29.0": {
      "@material/base": "npm:@material/base@0.29.0",
      "@material/theme": "npm:@material/theme@0.29.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/textfield@0.29.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.29.0",
      "@material/ripple": "npm:@material/ripple@0.29.0",
      "@material/rtl": "npm:@material/rtl@0.29.0",
      "@material/theme": "npm:@material/theme@0.29.0",
      "@material/typography": "npm:@material/typography@0.28.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/toolbar@0.28.0": {
      "@material/base": "npm:@material/base@0.24.0",
      "@material/elevation": "npm:@material/elevation@0.28.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.28.0",
      "@material/typography": "npm:@material/typography@0.28.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.7.1": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1"
    },
    "npm:aurelia-dependency-injection@1.3.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.4.0"
    },
    "npm:aurelia-framework@1.1.5": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.7.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-polyfills@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-task-queue@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-templating@1.7.0": {
      "aurelia-binding": "npm:aurelia-binding@1.7.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.4.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1"
    },
    "npm:buffer@5.0.8": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:golden-layout@1.5.9": {
      "jquery": "npm:jquery@3.3.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
