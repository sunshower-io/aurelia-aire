"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_fetch_client_1 = require("aurelia-fetch-client");
var ComponentPanel = /** @class */ (function () {
    function ComponentPanel(client, engine) {
        this.client = client;
        this.engine = engine;
    }
    ComponentPanel.prototype.attached = function () {
    };
    ComponentPanel.prototype.props = function (tags, type) {
        return tags.filter(function (t) { return t.type === 'param'; }).filter(function (t) { return t.types.indexOf(type) != -1; });
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], ComponentPanel.prototype, "component");
    ComponentPanel = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.viewResources('./component-section'),
        aurelia_framework_1.customElement('component-panel'),
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient, aurelia_framework_1.TemplatingEngine])
    ], ComponentPanel);
    return ComponentPanel;
}());
exports.ComponentPanel = ComponentPanel;

//# sourceMappingURL=component.js.map
