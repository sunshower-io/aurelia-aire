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
var element_1 = require("./element");
var aurelia_pal_1 = require("aurelia-pal");
/**
 * The aire-input is a styled input
 *
 * @component input
 *
 *
 * @param {bindable} type (string)
 * @param {bindable} flip (boolean)
 * @param {bindable} label (string)
 * @param {bindable} value (any)
 * @param {bindable} disabled (boolean)
 *
 * @param {pseudo} horizontal
 * @param {pseudo} success
 * @param {pseudo} danger
 * @param {pseudo} blank
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * Just like any form element, a input can have a label and a value. It can also be disabled. To set its type, pass one in
 *
 * @usage.examples.Default
 * aire-input
 *
 * @usage.examples.With_Label_And_Value
 * aire-input(label="My Input" value="1234")
 *
 * @usage.examples.Disabled
 * aire-input(disabled label="Disabled Input")
 *
 * @usage.examples.Other_Type
 * aire-input(label="A Password" type="password" value="1234")
 *
 *
 * @section.styles
 * @styles.title
 * Styles
 * @styles.description
 * An input's label can be moved horizontal with `horizontal`. The input can also have an `danger` or `success` state. For a more minimal look, make it `blank`.
 *
 * @styles.examples.Horizontal
 * aire-input(horizontal label="Horizontal Input")
 *
 * @styles.examples.Danger
 * aire-input(danger label="Danger Input")
 *
 * @styles.examples.Success
 * aire-input(success label="Success Input")
 *
 * @styles.examples.Blank
 * aire-input(blank label="Minimal Input")
 *
 *
 */
var AireInput = /** @class */ (function (_super) {
    __extends(AireInput, _super);
    function AireInput(element) {
        var _this = _super.call(this, element) || this;
        _this.type = "text";
        return _this;
    }
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AireInput.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AireInput.prototype, "flip", void 0);
    AireInput = __decorate([
        aurelia_framework_1.inject(aurelia_pal_1.DOM.Element),
        aurelia_framework_1.customElement('aire-input'),
        __metadata("design:paramtypes", [Element])
    ], AireInput);
    return AireInput;
}(element_1.AireFormElement));
exports.AireInput = AireInput;

//# sourceMappingURL=input.js.map
