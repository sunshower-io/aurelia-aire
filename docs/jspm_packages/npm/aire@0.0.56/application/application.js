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
var header_1 = require("aire/application/header");
var widget_1 = require("aire/core/widget");
var body_1 = require("aire/application/body");
var AireApplication = /** @class */ (function (_super) {
    __extends(AireApplication, _super);
    function AireApplication(el) {
        return _super.call(this, 'AireApplication', el, el) || this;
    }
    __decorate([
        aurelia_framework_1.child('.aire-header'),
        __metadata("design:type", header_1.AireHeader)
    ], AireApplication.prototype, "header", void 0);
    __decorate([
        aurelia_framework_1.child('.aire-body'),
        __metadata("design:type", body_1.AireBody)
    ], AireApplication.prototype, "body", void 0);
    AireApplication = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.customElement('aire-application'),
        __metadata("design:paramtypes", [Element])
    ], AireApplication);
    return AireApplication;
}(widget_1.AireElement));
exports.AireApplication = AireApplication;

//# sourceMappingURL=application.js.map
