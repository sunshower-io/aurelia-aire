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
var UIkit = require("uikit");
var core_1 = require("aire/core");
/**
 * The aire-navbar is used to organize navigation and content across the top of a page
 *
 * @component navbar
 *
 * @param {pseudo} sticky
 * @param {pseudo} transparent
 * @param {pseudo} dark
 * @param {pseudo} light
 *
 * @section.usage
 * @usage.title
 * Usage
 *
 * @usage.description
 * A navbar has slots that contain sections and items to organize its content.
 *
 * @usage.examples.Simple_Navbar
 * aire-navbar
 *  navbar-section(center)
 *    navbar-item Hello
 *
 * @usage.examples.Split_Navbar
 * aire-navbar
 *  navbar-section(left)
 *    navbar-item Left
 *  navbar-section(center)
 *    navbar-item Center Logo
 *  navbar-section(right)
 *    navbar-item Right
 *
 *
 *
 * @section.style
 * @style.title
 * Styles
 *
 * @style.description
 * Depending upon what's behind your navbar, you might want to make it `transparent`, `light` or `dark`.
 *
 * @style.examples.Transparent
 * aire-navbar(transparent)
 *  navbar-section(center)
 *    navbar-item Transparent Navbar
 *
 * @style.examples.Light
 * aire-navbar(light)
 *  navbar-section(center)
 *    navbar-item Light Navbar
 *
 * @style.examples.Dark
 * aire-navbar(dark)
 *  navbar-section(center)
 *    navbar-item Dark Navbar
 */
// * @section.sticky
// * @sticky.title
// * Sticky Navbar
// *
// * @sticky.description
// * To keep your navbar fixed to the top of the page instead of having it scroll out, make it `sticky`
// *
// * @sticky.examples.Sticky
// * aire-navbar(sticky)
// *  navbar-section(center)
// *    navbar-item Sticky Navbar
var AireNavbar = /** @class */ (function () {
    function AireNavbar(el) {
        this.el = el;
    }
    AireNavbar.prototype.attached = function () {
        core_1.dom.decorateTo(this.el, this.element, "sticky", "uk-navbar-sticky");
        core_1.dom.decorateTo(this.el, this.element, "transparent", "uk-navbar-transparent");
        core_1.dom.decorateTo(this.el, this.element, "dark", "uk-dark");
        core_1.dom.decorateTo(this.el, this.element, "light", "uk-light");
        UIkit.navbar(this.element);
    };
    AireNavbar = __decorate([
        aurelia_framework_1.customElement("aire-navbar"),
        aurelia_framework_1.viewResources("./item", "./section"),
        __metadata("design:paramtypes", [Element])
    ], AireNavbar);
    return AireNavbar;
}());
exports.AireNavbar = AireNavbar;

//# sourceMappingURL=navbar.js.map
