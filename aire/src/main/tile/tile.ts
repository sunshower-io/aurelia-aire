import {bindable, customElement, inject} from "aurelia-framework";
import {dom} from "aire-core";

@inject(Element)
@customElement('aire-label')
export class AireLabel {
    div: HTMLElement;

    @bindable
    tile: string;

    constructor(private element: Element) {

    }
    attached() {
        dom.decorateTo(this.element, this.div, "default", "uk-tile-default");
        dom.decorateTo(this.element, this.div, "muted", "uk-tile-muted");
        dom.decorateTo(this.element, this.div, "primary", "uk-tile-primary");
        dom.decorateTo(this.element, this.div, "secondary", "uk-tile-secondary");
    }
}