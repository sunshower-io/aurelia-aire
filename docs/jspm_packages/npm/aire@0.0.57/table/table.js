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
var aurelia_pal_1 = require("aurelia-pal");
var AireTable = /** @class */ (function () {
    function AireTable(element) {
        this.element = element;
        var data = JSON.parse(element.getAttribute("data"));
        if (data) {
            this.columns = data.columns;
            this.rows = data.rows;
        }
    }
    AireTable.prototype.attached = function () {
        core_1.dom.decorateTo(this.element, this.table, "divider", "uk-table-divider");
        core_1.dom.decorateTo(this.element, this.table, "striped", "uk-table-striped");
        core_1.dom.decorateTo(this.element, this.table, "hover", "uk-table-hover");
        core_1.dom.decorateTo(this.element, this.table, "justify", "uk-table-justify");
        core_1.dom.decorateTo(this.element, this.table, "middle", "uk-table-middle");
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AireTable.prototype, "header", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AireTable.prototype, "footer", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AireTable.prototype, "caption", void 0);
    AireTable = __decorate([
        aurelia_framework_1.inject(aurelia_pal_1.DOM.Element),
        aurelia_framework_1.customElement('aire-table'),
        __metadata("design:paramtypes", [Element])
    ], AireTable);
    return AireTable;
}());
exports.AireTable = AireTable;

//# sourceMappingURL=table.js.map
