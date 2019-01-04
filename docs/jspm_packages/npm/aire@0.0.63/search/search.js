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
var core_1 = require("aire/core");
var aurelia_pal_1 = require("aurelia-pal");
var AireSearch = /** @class */ (function () {
    function AireSearch(element) {
        this.element = element;
        this.placeholder = '';
    }
    AireSearch.prototype.attached = function () {
        core_1.dom.decorateTo(this.element, this.form, "default", "uk-search-default");
        core_1.dom.decorateTo(this.element, this.form, "large", "uk-search-large");
        core_1.dom.decorateTo(this.element, this.form, "navbar", "uk-search-navbar");
        core_1.dom.decorateTo(this.element, this.icon, "flip", "uk-search-icon-flip");
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AireSearch.prototype, "placeholder", void 0);
    AireSearch = __decorate([
        aurelia_framework_1.inject(aurelia_pal_1.DOM.Element),
        aurelia_framework_1.customElement('aire-search'),
        __metadata("design:paramtypes", [Element])
    ], AireSearch);
    return AireSearch;
}());
exports.AireSearch = AireSearch;

//# sourceMappingURL=search.js.map
