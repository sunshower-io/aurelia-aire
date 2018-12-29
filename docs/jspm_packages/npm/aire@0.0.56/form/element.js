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
var AireFormElement = /** @class */ (function () {
    function AireFormElement(element) {
        this.element = element;
    }
    AireFormElement.prototype.attached = function () {
        core_1.dom.decorate(this.container, "horizontal", "uk-form-horizontal");
        core_1.dom.decorateTo(this.element, this.input, "success", "uk-form-success");
        core_1.dom.decorateTo(this.element, this.input, "danger", "uk-form-danger");
        core_1.dom.decorateTo(this.element, this.input, "blank", "uk-form-blank");
        core_1.dom.decorate(this.container, "success", "uk-form-success");
        core_1.dom.decorate(this.container, "danger", "uk-form-danger");
        core_1.dom.decorate(this.container, "blank", "uk-form-blank");
        if (this.label && this.marker) {
            core_1.dom.decorateTo(this.element, this.marker, "success", "uk-form-success");
            core_1.dom.decorateTo(this.element, this.marker, "danger", "uk-form-danger");
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AireFormElement.prototype, "label", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], AireFormElement.prototype, "value", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AireFormElement.prototype, "disabled", void 0);
    __decorate([
        core_1.Id(),
        __metadata("design:type", String)
    ], AireFormElement.prototype, "id", void 0);
    return AireFormElement;
}());
exports.AireFormElement = AireFormElement;

//# sourceMappingURL=element.js.map
