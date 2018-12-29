import {bindable, customElement, inject}      from "aurelia-framework";
import {dom}    from "aire/core";
import {DOM} from 'aurelia-pal';

/**
 * A card is a layout box that can have different styles, including a header or footer
 *
 * @component card
 *
 * @param {bindable} title (string)
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
 *
 */
@inject(DOM.Element)
@customElement('aire-card')
export class AireCard {

    card        : HTMLElement;

    @bindable
    title     : string;

    @bindable
    header    : boolean;

    @bindable
    footer    : boolean;

    constructor(private element: Element) {

    }

    attached() {
        dom.decorateTo(this.element, this.card, "default", "uk-card-default");
        dom.decorateTo(this.element, this.card, "primary", "uk-card-primary");
        dom.decorateTo(this.element, this.card, "secondary", "uk-card-secondary");
        dom.decorateTo(this.element, this.card, "hover", "uk-card-hover");
        dom.decorateTo(this.element, this.card, "padding", "uk-card-body");
        dom.decorateTo(this.element, this.card, "padding-small", "uk-card-body");
        dom.decorateTo(this.element, this.card, "padding-small", "uk-card-small");
        dom.decorateTo(this.element, this.card, "padding-large", "uk-card-body");
        dom.decorateTo(this.element, this.card, "padding-large", "uk-card-large");

    }
}