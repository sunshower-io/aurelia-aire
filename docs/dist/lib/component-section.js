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
var pretty = require("pretty");
var prism = require("prismjs");
require("prismjs/plugins/toolbar/prism-toolbar");
require("prismjs/plugins/toolbar/prism-toolbar.css!");
require("prismjs/components/prism-pug");
require("prismjs/themes/prism.css!");
require("prismjs/themes/prism-okaidia.css!");
require("prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard");
var aurelia_router_1 = require("aurelia-router");
var ComponentSection = /** @class */ (function () {
    function ComponentSection(router, engine) {
        this.router = router;
        this.engine = engine;
        this.formats = ['demo', 'html', 'pug'];
    }
    ComponentSection.prototype.formatFor = function (fmt, ex, el) {
        var p = prism, code = ex[fmt];
        if (fmt === 'html') {
            var p_1 = pretty;
            code = p_1(code);
        }
        if (fmt != 'demo') {
            var c_1 = p.Prism.highlight(code, p.Prism.languages[fmt], fmt);
            setTimeout(function () {
                if (el) {
                    el.innerHTML = c_1;
                }
            }, 100);
        }
    };
    ComponentSection.prototype.createDemo = function (ex, el) {
        var _this = this;
        var htmlstr = ex['html'], engine = this.engine;
        el.innerHTML = htmlstr;
        setTimeout(function () {
            engine.enhance({
                element: el,
                bindingContext: { router: _this.router }
            });
        }, 500);
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], ComponentSection.prototype, "section");
    ComponentSection = __decorate([
        aurelia_framework_1.customElement('component-section'),
        __metadata("design:paramtypes", [aurelia_router_1.Router, aurelia_framework_1.TemplatingEngine])
    ], ComponentSection);
    return ComponentSection;
}());
exports.ComponentSection = ComponentSection;

//# sourceMappingURL=component-section.js.map
