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
/**
 * A card is a layout box that can have different styles and include a header and footer.
 *
 * @component card
 *
 * @param {bindable} header (boolean)
 * @param {bindable} footer (boolean)
 * @param {pseudo} default
 * @param {pseudo} primary
 * @param {pseudo} secondary
 * @param {pseudo} hover
 * @param {pseudo} padding
 * @param {pseudo} padding-small
 * @param {pseudo} padding-large
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * A card has a default slot. To organize a card, you can provide a header and footer argument, as well as content for those slots.
 *
 * @usage.examples.Basic
 * aire-card(default)
 *  .uk-card-body Card content in a slot
 *
 * @usage.examples.Header
 * aire-card(header default)
 *  p(slot="header") A header
 *  .uk-card-body Card content in a slot
 *
 * @usage.examples.Footer
 * aire-card(footer default)
 *  .uk-card-body Card content in a slot
 *  p(slot="footer") A footer
 *
 *
 * @section.style
 * @style.title
 * Style
 * @style.description
 * Cards can be styled by passing a `default`, `primary`, `secondary` or `hover` argument.
 *
 * @style.examples.Styles
 * .uk-child-width-1-4.uk-grid
 *  aire-card(default)
 *      .uk-card-body Default
 *  aire-card(primary)
 *      .uk-card-body Primary
 *  aire-card(secondary)
 *      .uk-card-body Secondary
 *  aire-card(hover)
 *      .uk-card-body Hover
 *
 *
 * @section.padding
 * @padding.title
 * Padding
 * @padding.description
 * To adjust the amount of padding a card has, use `padding-small`, `padding` and `padding-large` -- by default, a card has no padding.
 *
 * @padding.examples.Padding
 * .uk-child-width-1-3.uk-grid
 *  aire-card(padding-small default)
 *      | A card with small padding
 *  aire-card(padding default)
 *      | A card with normal padding
 *  aire-card(padding-large default)
 *      | A card with large padding
 *
 *
 */
var AireCard = /** @class */ (function () {
    function AireCard(element) {
        this.element = element;
    }
    AireCard.prototype.attached = function () {
        core_1.dom.decorateTo(this.element, this.card, "default", "uk-card-default");
        core_1.dom.decorateTo(this.element, this.card, "primary", "uk-card-primary");
        core_1.dom.decorateTo(this.element, this.card, "secondary", "uk-card-secondary");
        core_1.dom.decorateTo(this.element, this.card, "hover", "uk-card-hover");
        core_1.dom.decorateTo(this.element, this.card, "padding", "uk-card-body");
        core_1.dom.decorateTo(this.element, this.card, "padding-small", "uk-card-body");
        core_1.dom.decorateTo(this.element, this.card, "padding-small", "uk-card-small");
        core_1.dom.decorateTo(this.element, this.card, "padding-large", "uk-card-body");
        core_1.dom.decorateTo(this.element, this.card, "padding-large", "uk-card-large");
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AireCard.prototype, "header", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AireCard.prototype, "footer", void 0);
    AireCard = __decorate([
        aurelia_framework_1.inject(aurelia_pal_1.DOM.Element),
        aurelia_framework_1.customElement('aire-card'),
        __metadata("design:paramtypes", [Element])
    ], AireCard);
    return AireCard;
}());
exports.AireCard = AireCard;

//# sourceMappingURL=card.js.map
