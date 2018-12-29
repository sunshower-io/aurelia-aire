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
/**
 * The navbar-section aligns and organizes navbar items
 *
 * @component navbar-section
 *
 * @param {pseudo} left
 * @param {pseudo} right
 * @param {pseudo} center
 *
 * @section.usage
 * @usage.title
 * Usage
 *
 * @usage.description
 * A navbar-section is a slot that can be left, right or center.
 *
 * @usage.examples.Left
 * aire-navbar
 *  navbar-section(left)
 *    navbar-item Left
 *
 * @usage.examples.Right
 * aire-navbar
 *  navbar-section(right)
 *    navbar-item Center
 *
 * @usage.examples.Center
 * aire-navbar
 *  navbar-section(center)
 *    navbar-item Center
 *
 * @usage.examples.Multiple
 * aire-navbar
 *  navbar-section(left)
 *    navbar-item Left
 *  navbar-section(center)
 *    navbar-item Center
 *  navbar-section(right)
 *    navbar-item right
 *
 */
var AireNavbarSection = /** @class */ (function () {
    function AireNavbarSection(el) {
        this.el = el;
    }
    AireNavbarSection.prototype.attached = function () {
        core_1.dom.decorate(this.el, "left", "uk-navbar-left");
        core_1.dom.decorate(this.el, "right", "uk-navbar-right");
        core_1.dom.decorate(this.el, "center", "uk-navbar-center");
    };
    AireNavbarSection = __decorate([
        aurelia_framework_1.inject(aurelia_pal_1.DOM.Element),
        aurelia_framework_1.customElement('navbar-section'),
        __metadata("design:paramtypes", [Element])
    ], AireNavbarSection);
    return AireNavbarSection;
}());
exports.AireNavbarSection = AireNavbarSection;

//# sourceMappingURL=section.js.map
