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
var dom_1 = require("aire/core/dom");
/**
 * The accordion-item a list item designed to be the child of an aire-accordion.
 *
 *
 * @param {bindable} title (string)
 * @param {pseudo} open
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * An accordion-item has a slot for its content, but its title is bindable
 *
 * @usage.examples.Title_And_Slot
 * aire-accordion
 *  accordion-item(title="Accordion Item")
 *      p Accordion Content
 *
 * @section.option
 * @open.title
 * Open
 * @open.description
 * An accordion item can default to open if the decorator `open` is passed in.
 *
 * @open.examples.Open
 * aire-accordion(multiple)
 *  accordion-item(title="Accordion Item 1" open)
 *      p Accordion Content
 *  accordion-item(title="Accordion Item 2" open)
 *      p Accordion Content
 *
 * @open.examples.Closed
 * aire-accordion(multiple)
 *  accordion-item(title="Accordion Item 1")
 *      p Accordion Content
 *  accordion-item(title="Accordion Item 2")
 *      p Accordion Content
 */
var AccordionItem = /** @class */ (function () {
    function AccordionItem(el) {
        this.el = el;
    }
    AccordionItem.prototype.attached = function () {
        dom_1.dom.decorateTo(this.el, this.li, "open", "uk-open");
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AccordionItem.prototype, "title", void 0);
    AccordionItem = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('accordion-item'),
        __metadata("design:paramtypes", [Element])
    ], AccordionItem);
    return AccordionItem;
}());
exports.AccordionItem = AccordionItem;

//# sourceMappingURL=accordion-item.js.map
