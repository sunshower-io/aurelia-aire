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
exports.__esModule = true;
var aurelia_framework_1 = require("aurelia-framework");
var showdown = require("showdown");
var MarkdownContainer = /** @class */ (function () {
    function MarkdownContainer() {
    }
    MarkdownContainer.prototype.attached = function () {
        var converter = new showdown.Converter(), c = this.contents;
        c.innerHTML = converter.makeHtml(c.innerText);
    };
    __decorate([
        aurelia_framework_1.child('p'),
        __metadata("design:type", HTMLParagraphElement)
    ], MarkdownContainer.prototype, "contents");
    MarkdownContainer = __decorate([
        aurelia_framework_1.customElement("markdown-container")
    ], MarkdownContainer);
    return MarkdownContainer;
}());
exports.MarkdownContainer = MarkdownContainer;

//# sourceMappingURL=markdown-container.js.map
