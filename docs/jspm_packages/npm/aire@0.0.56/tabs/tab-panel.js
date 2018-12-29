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
var application_1 = require("aire/core/application");
var AireTabPanel = /** @class */ (function () {
    function AireTabPanel() {
        this.cid = application_1.Aire.id;
    }
    AireTabPanel.prototype.attached = function () {
        this.panel = UIkit.tab(this.element);
        application_1.Aire.listen(this.container, 'beforeshow', this.beforeShow.bind(this));
    };
    Object.defineProperty(AireTabPanel.prototype, "active", {
        get: function () {
            return this.activeTab;
        },
        enumerable: true,
        configurable: true
    });
    AireTabPanel.prototype.beforeShow = function (a) {
        var source = a.srcElement, target = a.target, children = this.children, sourceTab, targetTab;
        if (children) {
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var c = children_1[_i];
                if (c.el === source) {
                    sourceTab = c;
                }
                if (c.el === target) {
                    targetTab = c;
                }
            }
            this.activeTab = targetTab;
        }
        if (sourceTab) {
            sourceTab.deactivate(a);
        }
        if (targetTab) {
            targetTab.activate(a);
        }
    };
    __decorate([
        aurelia_framework_1.children('aire-tab'),
        __metadata("design:type", Array)
    ], AireTabPanel.prototype, "children", void 0);
    AireTabPanel = __decorate([
        aurelia_framework_1.customElement('aire-tab-panel')
    ], AireTabPanel);
    return AireTabPanel;
}());
exports.AireTabPanel = AireTabPanel;

//# sourceMappingURL=tab-panel.js.map
