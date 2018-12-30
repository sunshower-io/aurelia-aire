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
var aurelia_pal_1 = require("aurelia-pal");
var dom_1 = require("aire/core/dom");
/**
 * The aire-offcanvas is a sidebar that slides on and off the page
 *
 *
 * @param {bindable} open
 * @param {bindable} parent
 * @param {pseudo} push
 * @param {pseudo} mode
 * @param {pseudo} flip
 * @param {pseudo} overlay
 * @param {pseudo} esc-close
 * @param {pseudo} bg-close
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * An off-canvas has a slot for all of its content, and can be open by default
 *
 * @usage.examples.Open
 * aire-offcanvas(open)
 *  p Offcanvas Content
 *
 * @section.parent
 * @parent.title
 * Parent
 * @parent.description
 * By default, the offcanvas takes up the entire height of the page, but in some cases (as with a navbar) this might not be desirable. You can specify a parent and tell the offcanvas to `push` to push it down.
 *
 * @parent.examples.Pushing_From_Parent
 * aire-navbar
 * section#pushingFromParent
 *  aire-offcanvas(parent="#pushingFromParent" push)
 *
 */
var AireOffCanvas = /** @class */ (function () {
    function AireOffCanvas(el) {
        this.el = el;
    }
    AireOffCanvas.prototype.activate = function () {
    };
    AireOffCanvas.prototype.resolveParentFor = function () {
        var parent = this.parent;
        if (!parent) {
            return null;
        }
        if (typeof parent === 'string') {
            return dom_1.dom.$(parent);
        }
        if (parent instanceof aurelia_framework_1.View) {
            return dom_1.dom.$('#' + parent.firstChild.id);
        }
        return parent;
    };
    AireOffCanvas.prototype.attached = function () {
        var options = {
            mode: this.el.getAttribute("mode") || "slide",
            flip: this.el.hasAttribute("flip"),
            overlay: this.el.hasAttribute("overlay"),
            'esc-close': this.el.hasAttribute("esc-close") || true,
            'bg-close': this.el.hasAttribute("bg-close") || true
        }, parent = this.resolveParentFor();
        if (parent) {
            parent.classList.add('uk-offcanvas-container');
            if (this.el.hasAttribute("push")) {
                this.style = "top: " + parent.offsetTop + "px";
            }
            options['container'] = dom_1.dom.pathTo(parent);
        }
        this.offcanvas = UIkit.offcanvas(this.element, options);
    };
    AireOffCanvas.prototype.toggle = function () {
        if (this.open) {
            this.offcanvas.hide();
        }
        else {
            this.offcanvas.show();
        }
        this.open = !this.open;
    };
    AireOffCanvas.prototype.show = function () {
        this.offcanvas.show();
        this.open = true;
    };
    AireOffCanvas.prototype.hide = function () {
        this.offcanvas.hide();
        this.open = false;
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AireOffCanvas.prototype, "open", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], AireOffCanvas.prototype, "parent", void 0);
    AireOffCanvas = __decorate([
        aurelia_framework_1.inject(aurelia_pal_1.DOM.Element),
        aurelia_framework_1.customElement('aire-offcanvas'),
        __metadata("design:paramtypes", [Element])
    ], AireOffCanvas);
    return AireOffCanvas;
}());
exports.AireOffCanvas = AireOffCanvas;

//# sourceMappingURL=offcanvas.js.map
