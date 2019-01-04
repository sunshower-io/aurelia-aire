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
 * The aire-select is a styled select
 *
 * @component select
 *
 *
 * @param {bindable} label (string)
 * @param {bindable} value (any)
 * @param {bindable} disabled (boolean)
 * @param {bindable} data ({}[] || {})
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
 * Just like any form element, a select can have a label and a value. It can also be disabled. It takes an array of {label: string, value: string} objects.
 *
 * @usage.examples.Default
 * aire-select(data="[label='Default, value='']")
 *
 * @usage.examples.With_Label_And_Value
 * aire-select(label="My Select" value="1", data="[{label:'Default', value:''}, {label: 'One', value:'1'}]")
 *
 * @usage.examples.Disabled
 * aire-select(disabled label="Disabled Select")
 *
 *
 * @section.styles
 * @styles.title
 * Styles
 * @styles.description
 * An select's label can be moved horizontal with `horizontal`. The select can also have an `danger` or `success` state. For a more minimal look, make it `blank`.
 *
 * @styles.examples.Horizontal
 * aire-select(horizontal label="Horizontal Select")
 *
 * @styles.examples.Danger
 * aire-select(danger label="Danger Select")
 *
 * @styles.examples.Success
 * aire-select(success label="Success Select")
 *
 * @styles.examples.Blank
 * aire-select(blank label="Minimal Select")
 */
var AireSelect = /** @class */ (function (_super) {
    __extends(AireSelect, _super);
    function AireSelect(element) {
        var _this = _super.call(this, element) || this;
        _this.options = Array.isArray(_this.data) ? _this.data : [_this.data]; //catches single instance non-iterable
        return _this;
    }
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], AireSelect.prototype, "data", void 0);
    AireSelect = __decorate([
        aurelia_framework_1.inject(aurelia_pal_1.DOM.Element),
        aurelia_framework_1.customElement('aire-select'),
        __metadata("design:paramtypes", [Element])
    ], AireSelect);
    return AireSelect;
}(element_1.AireFormElement));
exports.AireSelect = AireSelect;

//# sourceMappingURL=select.js.map
