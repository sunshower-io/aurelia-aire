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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var dom_1 = require("aire/core/dom");
var AirePage = /** @class */ (function () {
    function AirePage(el) {
        this.el = el;
        this.loading = true;
        dom_1.dom.decorate(el, 'padded');
    }
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AirePage.prototype, "loading", void 0);
    AirePage = __decorate([
        aurelia_framework_1.customElement('aire-page'),
        __metadata("design:paramtypes", [Element])
    ], AirePage);
    return AirePage;
}());
exports.AirePage = AirePage;

//# sourceMappingURL=page.js.map
