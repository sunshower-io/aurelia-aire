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
/**
 * The aire-accordion is an unordered list that allows child elements to be open or closed.
 *
 *
 * @param {bindable} animated (boolean)
 * @param {bindable} collapsible (boolean)
 * @param {bindable} duration (number)
 * @param {bindable} multiple (boolean)
 * @param {bindable} transition (string)
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * An accordion has a slot for its list items.
 *
 * @usage.examples.Slot
 * aire-accordion
 *  accordion-item(title="Item 1")
 *      p Hello
 *  accordion-item(title="Item 2")
 *      p Goodbye
 *
 * @section.animation
 * @animation.title
 * Animation Behavior
 * @animation.description
 * An accordion can reveal its items directly or with a transition. The behavior is set with `animated` and the transition with `transition`. The defaults are true and 'ease' respectively.
 *
 * @animation.examples.Default_Animation
 * aire-accordion
 *  accordion-item(title="Item 1")
 *      p Hello
 *  accordion-item(title="Item 2")
 *      p Goodbye
 *
 * @animation.examples.No_Animation
 * aire-accordion(animated="false")
 *  accordion-item(title="Item 1")
 *      p Hello
 *  accordion-item(title="Item 2")
 *      p Goodbye
 *
 * @animation.examples.Different_Transition
 * aire-accordion(transition="step-start")
 *  accordion-item(title="Item 1")
 *      p Hello
 *  accordion-item(title="Item 2")
 *      p Goodbye
 *
 *
 * @section.opening
 * @opening.title
 * Opening Behavior
 * @opening.description
 * By default, an accordion allows all items to be closed and does not allow multiple items, but this can be changed with `collapsible` and `multiple`
 *
 * @opening.examples.Multiple
 * aire-accordion(multiple)
 *  accordion-item(title="Item 1" open)
 *      p Hello
 *  accordion-item(title="Item 2" open)
 *      p Goodbye
 *
 * @opening.examples.Not_Collapsible
 * aire-accordion(collapsible="false")
 *  accordion-item(title="Item 1")
 *      p Hello
 *  accordion-item(title="Item 2")
 *      p Goodbye
 */
var AireAccordion = /** @class */ (function () {
    function AireAccordion() {
        this.animated = true;
        this.collapsible = true;
        this.duration = 200;
        this.transition = 'ease';
    }
    AireAccordion.prototype.attached = function () {
        var options = {
            animation: this.animated,
            collapsible: this.collapsible,
            duration: this.duration,
            multiple: this.multiple,
            transition: this.transition
        };
        this.accordion = UIkit.accordion(this.element, options);
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AireAccordion.prototype, "animated", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AireAccordion.prototype, "collapsible", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Number)
    ], AireAccordion.prototype, "duration", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AireAccordion.prototype, "multiple", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AireAccordion.prototype, "transition", void 0);
    AireAccordion = __decorate([
        aurelia_framework_1.customElement('aire-accordion'),
        aurelia_framework_1.viewResources("./accordion-item"),
        __metadata("design:paramtypes", [])
    ], AireAccordion);
    return AireAccordion;
}());
exports.AireAccordion = AireAccordion;

//# sourceMappingURL=accordion.js.map
