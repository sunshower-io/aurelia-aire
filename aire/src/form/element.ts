import {bindable}      from "aurelia-framework";
import {dom}    from "aire/core";

export class AireFormElement {

    input       : HTMLElement;
    container   : HTMLElement;

    @bindable
    label       : string;

    @bindable
    minimal     : string;

    @bindable
    error       : string;

    @bindable
    success     : string;

    @bindable
    disabled    : string;

    constructor(private element: Element) {
    }

    attached() {
        //todo handle .bind situations
        dom.decorate(this.container, "horizontal", "uk-form-horizontal");
        dom.decorate(this.container, "success", "uk-form-success");
        dom.decorate(this.container, "error", "uk-form-error");
        dom.decorateTo(this.element, this.input, "blank", "uk-form-blank");
        this.label = this.element.getAttribute("label");
        this.disabled = this.element.getAttribute("disabled");
    }
}