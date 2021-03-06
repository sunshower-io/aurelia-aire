import {bindable, customElement, inject} from "aurelia-framework";
import {dom} from "aire/core";
import {DOM} from "aurelia-pal";

@inject(DOM.Element)
@customElement('aire-search')
export class AireSearch {

    form        : HTMLElement;

    icon        : HTMLElement;

    @bindable
    placeholder : string = '';

    constructor(private element: Element) {
    }

    attached() {
        dom.decorateTo(this.element, this.form, "default", "uk-search-default");
        dom.decorateTo(this.element, this.form, "large", "uk-search-large");
        dom.decorateTo(this.element, this.form, "navbar", "uk-search-navbar");
        dom.decorateTo(this.element, this.icon, "flip", "uk-search-icon-flip");
    }
}