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
var core_1 = require("aire/core");
var AireBaseButton = /** @class */ (function () {
    function AireBaseButton(element) {
        this.element = element;
    }
    AireBaseButton.prototype.attached = function () {
        core_1.dom.decorateTo(this.element, this.button, "default", "uk-button-default");
        core_1.dom.decorateTo(this.element, this.button, "primary", "uk-button-primary");
        core_1.dom.decorateTo(this.element, this.button, "secondary", "uk-button-secondary");
        core_1.dom.decorateTo(this.element, this.button, "danger", "uk-button-danger");
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AireBaseButton.prototype, "icon", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AireBaseButton.prototype, "disabled", void 0);
    return AireBaseButton;
}());
exports.AireBaseButton = AireBaseButton;

//# sourceMappingURL=basebutton.js.map
