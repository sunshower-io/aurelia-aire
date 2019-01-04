import {bindable, customElement, inject}      from "aurelia-framework";
import {dom}    from "aire/core";
import {DOM} from 'aurelia-pal';

/**
 * A card is a layout box that can have different styles and include a header and footer.
 *
 * @component card
 *
 * @param {bindable} header (boolean)
 * @param {bindable} footer (boolean)
 * @param {bindable} classes (string)
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
 * Cards can be styled by passing a `default`, `primary`, `secondary` or `hover` argument. You can also pass it classes.
 *
 * @style.examples.Styles
 * .uk-grid(class="uk-child-width-1-4@s")
 *      aire-card(default classes="uk-margin-bottom")
 *          .uk-card-body Default
 *      aire-card(primary classes="uk-margin-bottom")
 *          .uk-card-body Primary
 *      aire-card(secondary classes="uk-margin-bottom")
 *          .uk-card-body Secondary
 *      aire-card(hover classes="uk-margin-bottom")
 *          .uk-card-body Hover
 *
 *
 *
 *
 */
@inject(DOM.Element)
@customElement('aire-card')
export class AireCard {

    card        : HTMLElement;

    @bindable
    header    : boolean;

    @bindable
    footer    : boolean;

    @bindable
    classes     : string = "";

    constructor(private element: Element) {

    }

    attached() {
        dom.decorateTo(this.element, this.card, "default", "uk-card-default");
        dom.decorateTo(this.element, this.card, "primary", "uk-card-primary");
        dom.decorateTo(this.element, this.card, "secondary", "uk-card-secondary");
        dom.decorateTo(this.element, this.card, "hover", "uk-card-hover");

    }
}