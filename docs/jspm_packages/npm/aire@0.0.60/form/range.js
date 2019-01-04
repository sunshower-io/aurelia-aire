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
 * The aire-range is a styled input[type="range"]
 *
 * @component range
 *
 *
 * @param {bindable} label (string)
 * @param {bindable} value (any)
 * @param {bindable} disabled (boolean)
 *
 * @param {pseudo} horizontal
 * @param {pseudo} success
 * @param {pseudo} danger
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * Just like any form element, a range can have a label and a value. It can also be disabled.
 *
 * @usage.examples.Default
 * aire-range
 *
 * @usage.examples.With_Label_And_Value
 * aire-range(label="My Range" value="1234")
 *
 * @usage.examples.Disabled
 * aire-range(disabled label="Disabled Range")
 *
 *
 * @section.styles
 * @styles.title
 * Styles
 * @styles.description
 * An range's label can be moved horizontal with `horizontal`. The range can also have an `danger` or `success` state.
 *
 * @styles.examples.Horizontal
 * aire-range(horizontal label="Horizontal Range")
 *
 * @styles.examples.Danger
 * aire-range(danger label="Danger Range")
 *
 * @styles.examples.Success
 * aire-range(success label="Success Range")
 */
var AireRange = /** @class */ (function (_super) {
    __extends(AireRange, _super);
    function AireRange(element) {
        return _super.call(this, element) || this;
    }
    AireRange = __decorate([
        aurelia_framework_1.inject(aurelia_pal_1.DOM.Element),
        aurelia_framework_1.customElement('aire-range'),
        __metadata("design:paramtypes", [Element])
    ], AireRange);
    return AireRange;
}(element_1.AireFormElement));
exports.AireRange = AireRange;

//# sourceMappingURL=range.js.map
