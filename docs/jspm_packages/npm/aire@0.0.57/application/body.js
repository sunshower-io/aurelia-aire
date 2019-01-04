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
var widget_1 = require("aire/core/widget");
var dom_1 = require("aire/core/dom");
var aurelia_event_aggregator_1 = require("aurelia-event-aggregator");
var AireBody = /** @class */ (function (_super) {
    __extends(AireBody, _super);
    function AireBody(bus) {
        var _this = _super.call(this, "Aire:application:body", null, '.aire-body') || this;
        _this.bus = bus;
        return _this;
    }
    AireBody.prototype.bind = function () {
    };
    AireBody.prototype.unbind = function () {
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AireBody.prototype, "loading", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AireBody.prototype, "debounce", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Number)
    ], AireBody.prototype, "wait", void 0);
    __decorate([
        dom_1.Id(),
        __metadata("design:type", String)
    ], AireBody.prototype, "bodyId", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.toView }),
        __metadata("design:type", HTMLDivElement)
    ], AireBody.prototype, "element", void 0);
    AireBody = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.containerless,
        aurelia_framework_1.customElement('aire-body'),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], AireBody);
    return AireBody;
}(widget_1.AireElement));
exports.AireBody = AireBody;

//# sourceMappingURL=body.js.map
