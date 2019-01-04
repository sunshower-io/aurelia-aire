"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_logging_console_1 = require("aurelia-logging-console");
var application_1 = require("aire/core/application");
function configureLogging(cfg) {
    console.log("[aire]: Configuring Aire Logging ");
    var hash = window.location.hash, qidx = hash.indexOf('?');
    if (qidx >= 0) {
        var _a = readLevel(hash.substr(qidx)), _1 = _a[0], level = _a[1];
        if (level) {
            var l = levelFor(level);
            aurelia_framework_1.LogManager.addAppender(new aurelia_logging_console_1.ConsoleAppender());
            aurelia_framework_1.LogManager.setLevel(l);
            console.log("[aire]: Using level '" + l + "'(" + level + ")");
            application_1.Aire.logger = aurelia_framework_1.LogManager.getLogger('Aire:application');
        }
    }
    console.log('[aire]: Configured Aire Logging');
}
exports.configureLogging = configureLogging;
function readLevel(search) {
    return parameter(search, "log.level");
}
exports.readLevel = readLevel;
function parameter(str, p) {
    var results = str.split(/[?&]/).map(function (t) {
        var current = t.split("="), key = current[0], value = current[1];
        if (key === p) {
            return [key, decodeURIComponent(value)];
        }
    }).filter(function (t) { return t; });
    if (results && results.length) {
        return results[0];
    }
    return undefined;
}
exports.parameter = parameter;
function levelFor(l) {
    var p = Object.getOwnPropertyDescriptor(aurelia_framework_1.LogManager.logLevel, l);
    return p.get instanceof Function ? p.get() : p.value;
}
exports.levelFor = levelFor;

//# sourceMappingURL=configure-logging.js.map
