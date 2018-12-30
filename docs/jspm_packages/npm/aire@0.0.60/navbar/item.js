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
/**
 * The navbar-item is a link that goes inside a navbar-section.
 *
 * @component navbar-item
 *
 * @param {bindable} active
 * @param {bindable} icon
 * @param {bindable} href
 * @param {pseudo} large
 * @param {pseudo} medium
 * @param {pseudo} small
 * @param {pseudo} logo
 *
 */
var AireNavbarItem = /** @class */ (function () {
    function AireNavbarItem(el) {
        this.el = el;
        this.active = true;
    }
    AireNavbarItem.prototype.attached = function () {
        core_1.dom.decorateTo(this.el, this.element, 'large');
        core_1.dom.decorateTo(this.el, this.element, 'small');
        core_1.dom.decorateTo(this.el, this.element, 'medium');
        core_1.dom.decorateTo(this.el, this.element, 'logo', 'uk-logo');
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AireNavbarItem.prototype, "active", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AireNavbarItem.prototype, "icon", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AireNavbarItem.prototype, "href", void 0);
    AireNavbarItem = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.containerless,
        aurelia_framework_1.customElement('navbar-item'),
        __metadata("design:paramtypes", [Element])
    ], AireNavbarItem);
    return AireNavbarItem;
}());
exports.AireNavbarItem = AireNavbarItem;

//# sourceMappingURL=item.js.map
