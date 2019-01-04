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
/**
 * The aire-icon is a an easy way to treat icon classes and images the same way.
 *
 * @component icon
 *
 *
 * @param {bindable} icon (string)
 * @param {bindable} classes (string)
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * An icon takes an icon as a string, and determines whether it should be a span with that class or an img with that src accordingly. You can also pass in a class to affect an icon's style.
 *
 * @usage.examples.Icon_Font
 * aire-icon(icon="fa fa-pencil")
 *
 * @usage.examples.Image
 * aire-icon(icon="assets/icons/sunshower.svg")
 *
 * @usage.examples.Icon_Font_With_Class
 * aire-icon(icon="fa fa-pencil" classes="uk-float-right uk-icon-button")
 *
 */
var AireIcon = /** @class */ (function () {
    function AireIcon() {
        this.classes = "";
    }
    AireIcon.prototype.bind = function () {
        if (this.icon && (this.icon.indexOf('svg+xml') > -1 || this.icon.indexOf('.') > -1)) {
            this.src = this.icon;
        }
        else {
            this.class = this.icon;
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AireIcon.prototype, "icon", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AireIcon.prototype, "classes", void 0);
    AireIcon = __decorate([
        aurelia_framework_1.containerless,
        aurelia_framework_1.customElement('aire-icon'),
        __metadata("design:paramtypes", [])
    ], AireIcon);
    return AireIcon;
}());
exports.AireIcon = AireIcon;

//# sourceMappingURL=icon.js.map
