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
var aurelia_pal_1 = require("aurelia-pal");
var multielement_1 = require("aire/form/multielement");
/**
 * The aire-radio is a styled `input[type="radio"]`
 *
 * @component radio
 *
 *
 * @param {bindable} checked (boolean)
 * @param {bindable} name (string)
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
 * Just like any form element, a radio can have a label and a value. It can also be disabled or checked.
 *
 * @usage.examples.Default
 * aire-radio
 *
 * @usage.examples.With_Label_And_Value
 * aire-radio(label="My Radio" value="1")
 *
 * @usage.examples.Disabled
 * aire-radio(disabled label="Disabled Radio")
 *
 * @usage.examples.Checked
 * aire-radio(checked label="Checked Radio")
 *
 *
 * @section.group
 * @group.title
 * Group
 * @group.description
 * It is frequently desirable to have a radio be part of a group, in which case you should pass it a name.
 *
 * @group.examples.Group
 * aire-radio(name="group" label="Radio 1" value="1")
 * aire-radio(name="group" label="Radio 2" value="2")
 *
 *
 * @section.styles
 * @styles.title
 * Styles
 * @styles.description
 * A radio's label can be moved horizontal with `horizontal`. The radio can also have an `danger` or `success` state.
 *
 * @styles.examples.Horizontal
 * aire-radio(horizontal label="Horizontal Radio")
 *
 * @styles.examples.Danger
 * aire-radio(danger label="Danger Radio")
 *
 * @styles.examples.Success
 * aire-radio(success label="Success Radio")
 *
 */
var AireRadio = /** @class */ (function (_super) {
    __extends(AireRadio, _super);
    function AireRadio(element) {
        return _super.call(this, element) || this;
    }
    AireRadio.prototype.attached = function () {
        _super.prototype.attached.call(this);
    };
    AireRadio = __decorate([
        aurelia_framework_1.inject(aurelia_pal_1.DOM.Element),
        aurelia_framework_1.customElement('aire-radio'),
        __metadata("design:paramtypes", [Element])
    ], AireRadio);
    return AireRadio;
}(multielement_1.AireFormMultiElement));
exports.AireRadio = AireRadio;

//# sourceMappingURL=radio.js.map
