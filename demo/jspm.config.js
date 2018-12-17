SystemJS.config({
    paths: {
        "fonts": "dist/fonts/",
        "aire-demo/": "dist/"
    },
    browserConfig: {
        "paths": {
            "npm:": "/jspm_packages/npm/",
            "aire-demo": "dist/",
            "fonts": "dist/fonts/",
            "github:": "/jspm_packages/github/",
            "local:": "/jspm_packages/local/"
        }
    },
    nodeConfig: {
        "paths": {
            "fonts": "dist/fonts/",
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
        "aurelia-animator-velocity": "npm:aurelia-animator-velocity@1.2.0",
        "aurelia-binding": "npm:aurelia-binding@2.1.7",
        "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.3.1",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
        "aurelia-fetch-client": "npm:aurelia-fetch-client@1.7.0",
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
        "aurelia-router-loader": "npm:aurelia-router-loader@1.0.6",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1",
        "aurelia-templating": "npm:aurelia-templating@1.10.1",
        "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.2",
        "aurelia-templating-resources": "npm:aurelia-templating-resources@1.7.1",
        "aurelia-templating-router": "npm:aurelia-templating-router@1.3.3",
        "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
        "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
        "css": "github:systemjs/plugin-css@0.1.37",
        "events": "npm:jspm-nodelibs-events@0.2.2",
        "font-awesome": "npm:font-awesome@4.7.0",
        "fs": "npm:jspm-nodelibs-fs@0.2.1",
        "path": "npm:jspm-nodelibs-path@0.2.3",
        "process": "npm:jspm-nodelibs-process@0.2.1",
        "showdown": "npm:showdown@1.9.0",
        "stream": "npm:jspm-nodelibs-stream@0.2.1",
        "text": "github:systemjs/plugin-text@0.0.11",
        "util": "npm:jspm-nodelibs-util@0.2.2",
        "velocity-animate": "npm:velocity-animate@1.5.2",
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
        },
        "npm:aurelia-fetch-client@1.7.0": {
            "map": {
                "aurelia-pal": "npm:aurelia-pal@1.8.0"
            }
        },
        "npm:showdown@1.9.0": {
            "map": {
                "yargs": "npm:yargs@10.1.2"
            }
        },
        "npm:yargs@10.1.2": {
            "map": {
                "decamelize": "npm:decamelize@1.2.0",
                "os-locale": "npm:os-locale@2.1.0",
                "get-caller-file": "npm:get-caller-file@1.0.3",
                "y18n": "npm:y18n@3.2.1",
                "set-blocking": "npm:set-blocking@2.0.0",
                "string-width": "npm:string-width@2.1.1",
                "which-module": "npm:which-module@2.0.0",
                "require-main-filename": "npm:require-main-filename@1.0.1",
                "cliui": "npm:cliui@4.1.0",
                "require-directory": "npm:require-directory@2.1.1",
                "find-up": "npm:find-up@2.1.0",
                "yargs-parser": "npm:yargs-parser@8.1.0"
            }
        },
        "npm:cliui@4.1.0": {
            "map": {
                "string-width": "npm:string-width@2.1.1",
                "strip-ansi": "npm:strip-ansi@4.0.0",
                "wrap-ansi": "npm:wrap-ansi@2.1.0"
            }
        },
        "npm:os-locale@2.1.0": {
            "map": {
                "lcid": "npm:lcid@1.0.0",
                "mem": "npm:mem@1.1.0",
                "execa": "npm:execa@0.7.0"
            }
        },
        "npm:string-width@2.1.1": {
            "map": {
                "strip-ansi": "npm:strip-ansi@4.0.0",
                "is-fullwidth-code-point": "npm:is-fullwidth-code-point@2.0.0"
            }
        },
        "npm:find-up@2.1.0": {
            "map": {
                "locate-path": "npm:locate-path@2.0.0"
            }
        },
        "npm:wrap-ansi@2.1.0": {
            "map": {
                "string-width": "npm:string-width@1.0.2",
                "strip-ansi": "npm:strip-ansi@3.0.1"
            }
        },
        "npm:yargs-parser@8.1.0": {
            "map": {
                "camelcase": "npm:camelcase@4.1.0"
            }
        },
        "npm:string-width@1.0.2": {
            "map": {
                "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
                "strip-ansi": "npm:strip-ansi@3.0.1",
                "code-point-at": "npm:code-point-at@1.1.0"
            }
        },
        "npm:lcid@1.0.0": {
            "map": {
                "invert-kv": "npm:invert-kv@1.0.0"
            }
        },
        "npm:strip-ansi@4.0.0": {
            "map": {
                "ansi-regex": "npm:ansi-regex@3.0.0"
            }
        },
        "npm:strip-ansi@3.0.1": {
            "map": {
                "ansi-regex": "npm:ansi-regex@2.1.1"
            }
        },
        "npm:execa@0.7.0": {
            "map": {
                "is-stream": "npm:is-stream@1.1.0",
                "p-finally": "npm:p-finally@1.0.0",
                "npm-run-path": "npm:npm-run-path@2.0.2",
                "strip-eof": "npm:strip-eof@1.0.0",
                "get-stream": "npm:get-stream@3.0.0",
                "cross-spawn": "npm:cross-spawn@5.1.0",
                "signal-exit": "npm:signal-exit@3.0.2"
            }
        },
        "npm:mem@1.1.0": {
            "map": {
                "mimic-fn": "npm:mimic-fn@1.2.0"
            }
        },
        "npm:locate-path@2.0.0": {
            "map": {
                "path-exists": "npm:path-exists@3.0.0",
                "p-locate": "npm:p-locate@2.0.0"
            }
        },
        "npm:is-fullwidth-code-point@1.0.0": {
            "map": {
                "number-is-nan": "npm:number-is-nan@1.0.1"
            }
        },
        "npm:npm-run-path@2.0.2": {
            "map": {
                "path-key": "npm:path-key@2.0.1"
            }
        },
        "npm:p-locate@2.0.0": {
            "map": {
                "p-limit": "npm:p-limit@1.3.0"
            }
        },
        "npm:cross-spawn@5.1.0": {
            "map": {
                "shebang-command": "npm:shebang-command@1.2.0",
                "which": "npm:which@1.3.1",
                "lru-cache": "npm:lru-cache@4.1.5"
            }
        },
        "npm:p-limit@1.3.0": {
            "map": {
                "p-try": "npm:p-try@1.0.0"
            }
        },
        "npm:shebang-command@1.2.0": {
            "map": {
                "shebang-regex": "npm:shebang-regex@1.0.0"
            }
        },
        "npm:which@1.3.1": {
            "map": {
                "isexe": "npm:isexe@2.0.0"
            }
        },
        "npm:lru-cache@4.1.5": {
            "map": {
                "pseudomap": "npm:pseudomap@1.0.2",
                "yallist": "npm:yallist@2.1.2"
            }
        },
        "npm:jspm-nodelibs-stream@0.2.1": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "readable-stream": "npm:readable-stream@2.3.6"
            }
        },
        "npm:readable-stream@2.3.6": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "process-nextick-args": "npm:process-nextick-args@2.0.0",
                "core-util-is": "npm:core-util-is@1.0.2",
                "isarray": "npm:isarray@1.0.0",
                "string_decoder": "npm:string_decoder@1.1.1",
                "util-deprecate": "npm:util-deprecate@1.0.2",
                "safe-buffer": "npm:safe-buffer@5.1.2"
            }
        },
        "npm:string_decoder@1.1.1": {
            "map": {
                "safe-buffer": "npm:safe-buffer@5.1.2"
            }
        },
        "local:aire@1.0.0": {
            "map": {
                "aurelia-animator-velocity": "npm:aurelia-animator-velocity@1.2.0",
                "aurelia-fetch-client": "npm:aurelia-fetch-client@1.7.0",
                "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.3.1",
                "uikit": "npm:uikit@3.0.0-rc.25",
                "text": "github:systemjs/plugin-text@0.0.11"
            }
        }
    }
});
