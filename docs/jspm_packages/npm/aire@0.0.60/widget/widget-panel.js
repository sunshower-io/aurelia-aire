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
var AireWidgetPanel = /** @class */ (function () {
    function AireWidgetPanel(engine) {
        this.engine = engine;
    }
    AireWidgetPanel.prototype.attached = function () {
        var div = document.createElement('div');
        div.innerHTML = '<aire-card default padding hover title="hello world"></aire-card>';
        this.engine.enhance({
            element: div,
            bindingContext: {}
        });
        this.element.appendChild(div);
    };
    AireWidgetPanel = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.customElement('aire-widget-panel'),
        __metadata("design:paramtypes", [aurelia_framework_1.TemplatingEngine])
    ], AireWidgetPanel);
    return AireWidgetPanel;
}());
exports.AireWidgetPanel = AireWidgetPanel;

//# sourceMappingURL=widget-panel.js.map
