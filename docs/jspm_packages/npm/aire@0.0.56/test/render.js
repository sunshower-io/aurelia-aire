"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pug = require("pug");
var aurelia_pal_1 = require("aurelia-pal");
var aurelia_testing_1 = require("aurelia-testing");
function render(template, options) {
    return pug.compile(template.trim())(options);
}
exports.render = render;
function newComponent(template, bindingContext) {
    var moduleNames = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        moduleNames[_i - 2] = arguments[_i];
    }
    if (!(moduleNames || moduleNames.length)) {
        throw new Error("You must supply at least one module name");
    }
    return aurelia_testing_1.StageComponent.withResources(moduleNames.map(function (t) { return aurelia_pal_1.PLATFORM.moduleName(t); }))
        .inView(render(template)).boundTo(bindingContext);
}
exports.newComponent = newComponent;

//# sourceMappingURL=render.js.map
