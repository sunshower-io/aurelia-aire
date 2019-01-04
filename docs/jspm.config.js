SystemJS.config({
    paths: {
        "fonts": "dist/fonts/",
        "npm:": "jspm_packages/npm/",
        "github:": "jspm_packages/github/",
        "local:": "jspm_packages/local/",
        "aire-demo/": "dist/"
    },
    browserConfig: {
        "paths": {
            "aire-demo": "dist/",
            "fonts": "dist/fonts/"
        }
    },
    nodeConfig: {
        "paths": {
            "fonts": "dist/fonts/",
            "aire-demo": "dist/"
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
        "aire": "npm:aire@0.0.63",
        "assert": "npm:jspm-nodelibs-assert@0.2.1",
        "aurelia-animator-velocity": "npm:aurelia-animator-velocity@1.2.0",
        "aurelia-binding": "npm:aurelia-binding@2.1.7",
        "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.3.1",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
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
        "clipboard": "npm:clipboard@2.0.4",
        "css": "github:systemjs/plugin-css@0.1.37",
        "events": "npm:jspm-nodelibs-events@0.2.2",
        "font-awesome": "npm:font-awesome@4.7.0",
        "fs": "npm:jspm-nodelibs-fs@0.2.1",
        "http": "npm:jspm-nodelibs-http@0.2.0",
        "os": "npm:jspm-nodelibs-os@0.2.2",
        "path": "npm:jspm-nodelibs-path@0.2.3",
        "pretty": "npm:pretty@2.0.0",
        "prismjs": "npm:prismjs@1.15.0",
        "process": "npm:jspm-nodelibs-process@0.2.1",
        "showdown": "npm:showdown@1.9.0",
        "stream": "npm:jspm-nodelibs-stream@0.2.1",
        "text": "github:systemjs/plugin-text@0.0.11",
        "uikit": "npm:uikit@3.0.0-rc.25",
        "url": "npm:jspm-nodelibs-url@0.2.1",
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
        "npm:clipboard@2.0.4": {
            "map": {
                "select": "npm:select@1.1.2",
                "good-listener": "npm:good-listener@1.2.2",
                "tiny-emitter": "npm:tiny-emitter@2.0.2"
            }
        },
        "npm:good-listener@1.2.2": {
            "map": {
                "delegate": "npm:delegate@3.2.0"
            }
        },
        "npm:jspm-nodelibs-os@0.2.2": {
            "map": {
                "os-browserify": "npm:os-browserify@0.3.0"
            }
        },
        "npm:pretty@2.0.0": {
            "map": {
                "extend-shallow": "npm:extend-shallow@2.0.1",
                "condense-newlines": "npm:condense-newlines@0.2.1",
                "js-beautify": "npm:js-beautify@1.8.9"
            }
        },
        "npm:condense-newlines@0.2.1": {
            "map": {
                "extend-shallow": "npm:extend-shallow@2.0.1",
                "kind-of": "npm:kind-of@3.2.2",
                "is-whitespace": "npm:is-whitespace@0.3.0"
            }
        },
        "npm:extend-shallow@2.0.1": {
            "map": {
                "is-extendable": "npm:is-extendable@0.1.1"
            }
        },
        "npm:js-beautify@1.8.9": {
            "map": {
                "mkdirp": "npm:mkdirp@0.5.1",
                "glob": "npm:glob@7.1.3",
                "nopt": "npm:nopt@4.0.1",
                "config-chain": "npm:config-chain@1.1.12",
                "editorconfig": "npm:editorconfig@0.15.2"
            }
        },
        "npm:kind-of@3.2.2": {
            "map": {
                "is-buffer": "npm:is-buffer@1.1.6"
            }
        },
        "npm:mkdirp@0.5.1": {
            "map": {
                "minimist": "npm:minimist@0.0.8"
            }
        },
        "npm:glob@7.1.3": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "fs.realpath": "npm:fs.realpath@1.0.0",
                "inflight": "npm:inflight@1.0.6",
                "once": "npm:once@1.4.0",
                "path-is-absolute": "npm:path-is-absolute@1.0.1",
                "minimatch": "npm:minimatch@3.0.4"
            }
        },
        "npm:nopt@4.0.1": {
            "map": {
                "osenv": "npm:osenv@0.1.5",
                "abbrev": "npm:abbrev@1.1.1"
            }
        },
        "npm:editorconfig@0.15.2": {
            "map": {
                "lru-cache": "npm:lru-cache@4.1.5",
                "sigmund": "npm:sigmund@1.0.1",
                "semver": "npm:semver@5.6.0",
                "@types/semver": "npm:@types/semver@5.5.0",
                "commander": "npm:commander@2.19.0",
                "@types/node": "npm:@types/node@10.12.18"
            }
        },
        "npm:inflight@1.0.6": {
            "map": {
                "once": "npm:once@1.4.0",
                "wrappy": "npm:wrappy@1.0.2"
            }
        },
        "npm:config-chain@1.1.12": {
            "map": {
                "proto-list": "npm:proto-list@1.2.4",
                "ini": "npm:ini@1.3.5"
            }
        },
        "npm:once@1.4.0": {
            "map": {
                "wrappy": "npm:wrappy@1.0.2"
            }
        },
        "npm:osenv@0.1.5": {
            "map": {
                "os-tmpdir": "npm:os-tmpdir@1.0.2",
                "os-homedir": "npm:os-homedir@1.0.2"
            }
        },
        "npm:minimatch@3.0.4": {
            "map": {
                "brace-expansion": "npm:brace-expansion@1.1.11"
            }
        },
        "npm:brace-expansion@1.1.11": {
            "map": {
                "concat-map": "npm:concat-map@0.0.1",
                "balanced-match": "npm:balanced-match@1.0.0"
            }
        },
        "npm:jspm-nodelibs-http@0.2.0": {
            "map": {
                "http-browserify": "npm:stream-http@2.8.3"
            }
        },
        "npm:stream-http@2.8.3": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
                "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
                "xtend": "npm:xtend@4.0.1",
                "readable-stream": "npm:readable-stream@2.3.6"
            }
        },
        "npm:jspm-nodelibs-url@0.2.1": {
            "map": {
                "url": "npm:url@0.11.0"
            }
        },
        "npm:url@0.11.0": {
            "map": {
                "querystring": "npm:querystring@0.2.0",
                "punycode": "npm:punycode@1.3.2"
            }
        },
        "npm:aire@0.0.63": {
            "map": {
                "aire": "npm:aire@0.0.57",
                "aurelia-animator-velocity": "npm:aurelia-animator-velocity@1.2.0",
                "aurelia-fetch-client": "npm:aurelia-fetch-client@1.7.0",
                "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.3.1",
                "uikit": "npm:uikit@3.0.0-rc.25"
            }
        },
        "npm:aire@0.0.57": {
            "map": {
                "aurelia-animator-velocity": "npm:aurelia-animator-velocity@1.2.0",
                "aurelia-fetch-client": "npm:aurelia-fetch-client@1.7.0",
                "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.3.1",
                "uikit": "npm:uikit@3.0.0-rc.25"
            }
        }
    }
});
