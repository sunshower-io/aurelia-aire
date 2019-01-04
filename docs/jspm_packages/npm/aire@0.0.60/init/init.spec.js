"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configure_logging_1 = require("aire/init/configure-logging");
var aurelia_framework_1 = require("aurelia-framework");
test('configure-logging:readLevel must return correct values when present in debug', function () {
    var search = 'hello=world&log.level=debug', _a = configure_logging_1.readLevel(search), k = _a[0], v = _a[1];
    expect(k).toBe('log.level');
    expect(v).toBe('debug');
});
test('levelFor must return the correct level', function () {
    expect(configure_logging_1.levelFor('debug')).toBe(aurelia_framework_1.LogManager.logLevel.debug);
});

//# sourceMappingURL=init.spec.js.map
