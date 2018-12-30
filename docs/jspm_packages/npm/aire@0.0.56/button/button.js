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
var core_1 = require("aire/core");
var aurelia_pal_1 = require("aurelia-pal");
var basebutton_1 = require("aire/button/basebutton");
/**
 * The aire-button is a button element with some special styling and an optional icon and text
 *
 * @component button
 *
 *
 * @param {bindable} label (string)
 * @param {bindable} icon (string)
 * @param {pseudo} default
 * @param {pseudo} primary
 * @param {pseudo} secondary
 * @param {pseudo} danger
 * @param {pseudo} text
 * @param {pseudo} link
 * @param {pseudo} small
 * @param {pseudo} large
 * @param {pseudo} square
 * @param {pseudo} full
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * A button can have a label, an icon, or both
 *
 * @usage.examples.Label
 *  aire-button(label="Labeled Button" default)
 *
 * @usage.examples.Icon
 * aire-button(icon="fa fa-pencil" default)
 *
 * @usage.examples.Label_And_Icon
 * aire-button(label="Edit" icon="fa fa-pencil" default)
 *
 * @section.style
 * @style.title
 * Style
 * @style.description
 * Buttons have six styling options: default, primary, secondary, danger, text and link. They also have two size options (small and large) and two width options (square and full).
 *
 * @style.examples.Styles
 * p
 *  aire-button(label="Default" default)
 * p
 *  aire-button(label="Primary" primary)
 * p
 *  aire-button(label="Secondary" secondary)
 * p
 *  aire-button(label="Danger" danger)
 * p
 *  aire-button(label="Text" text)
 * p
 *  aire-button(label="Link" link)
 *
 * @style.examples.Sizes
 * p
 *  aire-button(label="Small" small default)
 * p
 *  aire-button(label="Large" large default)
 * p
 *  aire-button(label="S" square default)
 * p
 *  aire-button(label="Full" full default)
 *
 */
var AireButton = /** @class */ (function (_super) {
    __extends(AireButton, _super);
    function AireButton(element) {
        return _super.call(this, element) || this;
    }
    AireButton.prototype.attached = function () {
        _super.prototype.attached.call(this);
        core_1.dom.decorateTo(this.element, this.button, "text", "uk-button-text");
        core_1.dom.decorateTo(this.element, this.button, "link", "uk-button-link");
        core_1.dom.decorateTo(this.element, this.button, "full", "uk-width-1-1");
        core_1.dom.decorateTo(this.element, this.button, "small", "uk-button-small");
        core_1.dom.decorateTo(this.element, this.button, "large", "uk-button-large");
        core_1.dom.decorateTo(this.element, this.button, "square", "aire-button-square");
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AireButton.prototype, "label", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AireButton.prototype, "type", void 0);
    AireButton = __decorate([
        aurelia_framework_1.inject(aurelia_pal_1.DOM.Element),
        aurelia_framework_1.customElement('aire-button'),
        __metadata("design:paramtypes", [Element])
    ], AireButton);
    return AireButton;
}(basebutton_1.AireBaseButton));
exports.AireButton = AireButton;

//# sourceMappingURL=button.js.map
