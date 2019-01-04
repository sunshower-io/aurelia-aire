"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var basebutton_1 = require("aire/button/basebutton");
var aurelia_pal_1 = require("aurelia-pal");
/**
 * The aire-fab is a rounded button element that can be absolutely positioned along any set of edges
 *
 * @component fab
 *
 *
 * @param {bindable} icon (string)
 * @param {pseudo} default
 * @param {pseudo} primary
 * @param {pseudo} secondary
 * @param {pseudo} danger
 * @param {pseudo} top (string)
 * @param {pseudo} right (string)
 * @param {pseudo} bottom (string)
 * @param {pseudo} left (string)
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * A fab has an icon
 *
 * @usage.examples.Icon
 * aire-fab(icon="fa fa-pencil" default)
 *
 * @section.style
 * @style.title
 * Style
 * @style.description
 * Fabs have four styling options: default, primary, secondary, danger.
 *
 * @style.examples.Styles
 * aire-fab(icon="fa fa-pencil" default)
 * aire-fab(icon="fa fa-pencil" primary left="50%")
 * aire-fab(icon="fa fa-pencil" secondary left="100%")
 * aire-fab(icon="fa fa-pencil" danger left="25%")
 *
 * @section.position
 * @position.title
 * Position
 * @position.description
 * Fabs are arranged on the page by passing in arguments for each edge. If an edge is not set, its position is auto.
 *
 * @position.examples.Position
 * aire-fab(icon="fa fa-pencil" top="50px" default)
 * aire-fab(icon="fa fa-pencil" left="50px" default)
 * aire-fab(icon="fa fa-pencil" right="50px" default)
 * aire-fab(icon="fa fa-pencil" bottom="50px" default)
 *
 */
var AireFab = /** @class */ (function (_super) {
    __extends(AireFab, _super);
    function AireFab(element) {
        var _this = _super.call(this, element) || this;
        _this.style = "";
        _this.style = AireFab_1.edges.map(function (edge) {
            return edge + ": " + (element.getAttribute(edge) || "auto");
        }).join('; ');
        return _this;
    }
    AireFab_1 = AireFab;
    AireFab.prototype.attached = function () {
        _super.prototype.attached.call(this);
    };
    var AireFab_1;
    AireFab.edges = ["top", "right", "bottom", "left"];
    AireFab = AireFab_1 = __decorate([
        aurelia_framework_1.inject(aurelia_pal_1.DOM.Element),
        aurelia_framework_1.customElement('aire-fab'),
        __metadata("design:paramtypes", [Element])
    ], AireFab);
    return AireFab;
}(basebutton_1.AireBaseButton));
exports.AireFab = AireFab;

//# sourceMappingURL=fab.js.map
