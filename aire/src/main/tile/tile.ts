import {bindable, customElement, inject} from "aurelia-framework";
import {dom} from "aire/core/dom";


@inject(Element)
@customElement('aire-tile')
export class AireTile {
    div: HTMLElement;



    constructor(private element: Element) {

    }
    attached() {
        dom.decorateTo(this.element, this.div, "default", "uk-tile-default");
        dom.decorateTo(this.element, this.div, "muted", "uk-tile-muted");
        dom.decorateTo(this.element, this.div, "primary", "uk-tile-primary");
        dom.decorateTo(this.element, this.div, "secondary", "uk-tile-secondary");
        dom.decorateTo(this.element, this.div, "padding-remove", "uk-padding-remove");
        dom.decorateTo(this.element, this.div, "padding-small", "uk-padding-small");
        dom.decorateTo(this.element, this.div, "padding-large", "uk-padding-large");
    }
}