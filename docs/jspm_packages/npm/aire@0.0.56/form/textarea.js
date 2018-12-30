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
 * The aire-textarea is a styled textarea
 *
 * @component textarea
 *
 *
 * @param {bindable} label (string)
 * @param {bindable} value (any)
 * @param {bindable} disabled (boolean)
 *
 * @param {pseudo} horizontal
 * @param {pseudo} success
 * @param {pseudo} danger
 * @param {pseudo} blank
 *
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * Just like any form element, a textarea can have a label and a value. It can also be disabled.
 *
 * @usage.examples.Default
 * aire-textarea
 *
 * @usage.examples.With_Label_And_Value
 * aire-textarea(label="My Textarea" value="1234")
 *
 * @usage.examples.Disabled
 * aire-textarea(disabled label="Disabled Textarea")
 *
 *
 * @section.styles
 * @styles.title
 * Styles
 * @styles.description
 * An textarea's label can be moved horizontal with `horizontal`. The textarea can also have an `danger` or `success` state. For a more minimal look, make it `blank`.
 *
 * @styles.examples.Horizontal
 * aire-textarea(horizontal label="Horizontal Textarea")
 *
 * @styles.examples.Danger
 * aire-textarea(danger label="Danger Textarea")
 *
 * @styles.examples.Success
 * aire-textarea(success label="Success Textarea")
 *
 * @styles.examples.Blank
 * aire-textarea(blank label="Minimal Textarea")
 */
var AireTextarea = /** @class */ (function (_super) {
    __extends(AireTextarea, _super);
    function AireTextarea(element) {
        return _super.call(this, element) || this;
    }
    AireTextarea = __decorate([
        aurelia_framework_1.inject(aurelia_pal_1.DOM.Element),
        aurelia_framework_1.customElement('aire-textarea'),
        __metadata("design:paramtypes", [Element])
    ], AireTextarea);
    return AireTextarea;
}(element_1.AireFormElement));
exports.AireTextarea = AireTextarea;

//# sourceMappingURL=textarea.js.map
