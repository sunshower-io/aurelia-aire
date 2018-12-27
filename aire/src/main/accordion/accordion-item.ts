import {bindable, customElement, inject} from "aurelia-framework";
import {dom} from "aire/core/dom";

@inject(Element)
@customElement('accordion-item')
export class AccordionItem {

    li      : HTMLElement;

    @bindable
    title   : string;

    constructor(private el : Element) {

    }

    attached() {
        dom.decorateTo(this.el, this.li, "open", "uk-open");
    }
}