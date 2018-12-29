"use strict";
/**
 * Don't modify this file unless you really know what you're doing.  It's a
 * bit of a hack, but it mostly works.  Import and definition order are IMPORTANT
 */
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("aurelia-polyfills");
var aurelia_loader_nodejs_1 = require("aurelia-loader-nodejs");
var aurelia_pal_nodejs_1 = require("aurelia-pal-nodejs");
require("isomorphic-fetch");
var path = require("path");
require('jsdom-global')();
require("mutationobserver-shim");
Object.defineProperty(global, 'MutationObserver', {
    value: window.MutationObserver,
    writable: true
});
var UIkit = require("uikit");
var application_1 = require("aire/core/application");
aurelia_loader_nodejs_1.Options.relativeToDir = path.join(__dirname, '../../dist');
aurelia_pal_nodejs_1.globalize();
var animationFrameId;
Object.defineProperty(global, 'requestAnimationFrame', {
    value: function () {
        return (animationFrameId = setTimeout(function () { }));
    },
    writable: true
});
Object.defineProperty(global, 'cancelAnimationFrame', {
    value: function (id) {
        return clearTimeout(id);
    },
    writable: true
});
application_1.Aire.initialize(UIkit.util);

//# sourceMappingURL=setup.js.map
