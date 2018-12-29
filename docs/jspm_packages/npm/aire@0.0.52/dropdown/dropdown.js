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
 * The aire-dropdown is a card that can be revealed when clicking or hovering another element.
 *
 *
 * @param {bindable} mode (string)
 * @param {bindable} position (string)
 * @param {bindable} toggle (string)
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * A dropdown is toggled interacting with its previous sibling or by passing in a toggle, and has a slot.
 *
 * @usage.examples.Toggle_From_Neighbor
 * aire-button(label="Toggle with Me")
 * aire-dropdown
 *  p Dropdown
 *
 * @usage.examples.Toggle_With_Argument
 * aire-dropdown(toggle="#toggleWithArgumentParagraph")
 *  p Dropdown
 * p#toggleWithArgumentParagraph This will now toggle the dropdown
 *
 * @section.mode
 * @mode.title
 * Mode
 * @mode.description
 * By default a dropdown is triggered by clicking or hovering its toggle element, but you can specify one or the other.
 *
 * @mode.examples.Default
 * aire-button(label="Click or Hover Me")
 * aire-dropdown
 *  p Dropdown
 *
 * @mode.examples.Click
 * aire-button(label="Click Me")
 * aire-dropdown(toggle="click")
 *  p Dropdown
 *
 * @mode.examples.Hover
 * aire-button(label="Hover Me")
 * aire-dropdown(toggle="hover")
 *  p Dropdown
 *
 * @section.position
 * @position.title
 * Positioning
 * @position.description
 * By default a dropdown is positioned at the bottom-left of its toggle, but this can also be `bottom-center`, `bottom-right`, `bottom-justify`, `top-left`, `top-center`, `top-right`, `top-justify`, `left-top`, `left-center`, `left-bottom`, `right-top`, `right-center` or `right-bottom`.
 *
 * @position.examples.Top_Right
 * aire-button(label="Click or Hover Me")
 * aire-dropdown(position="top-right")
 *  p Dropdown
 *
 *
 * @position.examples.Bottom_Justify
 * aire-button(label="Click or Hover Me")
 * aire-dropdown(position="bottom-justify")
 *  p Dropdown
 *
 *  @position.examples.Right_Center
 * aire-button(label="Click or Hover Me")
 * aire-dropdown(position="right-center")
 *  p Dropdown
 */
var AireDropdown = /** @class */ (function () {
    function AireDropdown() {
        this.mode = 'click, hover';
        this.position = 'bottom-left';
        this.toggle = "- *";
    }
    AireDropdown.prototype.attached = function () {
        var options = {
            toggle: core_1.dom.pathTo(this.toggle),
            pos: this.position,
            mode: this.mode
        };
        this.dropdown = UIkit.dropdown(this.element, options);
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AireDropdown.prototype, "mode", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AireDropdown.prototype, "position", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], AireDropdown.prototype, "toggle", void 0);
    AireDropdown = __decorate([
        aurelia_framework_1.customElement('aire-dropdown'),
        __metadata("design:paramtypes", [])
    ], AireDropdown);
    return AireDropdown;
}());
exports.AireDropdown = AireDropdown;

//# sourceMappingURL=dropdown.js.map
