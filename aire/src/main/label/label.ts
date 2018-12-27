import {bindable, customElement, inject}    from "aurelia-framework";
import {dom} from "aire/core";

@inject(Element)
@customElement('aire-label')
export class AireLabel {
    label: HTMLElement;

    @bindable
    label: //add text here. not done yet!

    constructor(private element: Element) {


    }
    attached() {
        dom.decorateTo(this.element, this.label, "success", "uk-label-success");
        dom.decorateTo(this.element, this.label, "default", "uk-label-default");
        dom.decorateTo(this.element, this.label, "warning", "uk-label-warning");
        dom.decorateTo(this.element, this.label, "danger", "uk.label.warning");
    }


}