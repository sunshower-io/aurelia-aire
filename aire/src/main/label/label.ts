import {bindable, customElement, inject}    from "aurelia-framework";
import {dom} from "aire/core";

@inject(Element)
@customElement('aire-label')
export class AireLabel {
    el: HTMLElement;

    @bindable
    label: string;

    constructor(private element: Element) {


    }
    attached() {
        dom.decorateTo(this.element, this.el, "success", "uk-label-success");
        dom.decorateTo(this.element, this.el, "default", "uk-label-default");
        dom.decorateTo(this.element, this.el, "warning", "uk-label-warning");
        dom.decorateTo(this.element, this.el, "danger", "uk-label-danger");
    }


}