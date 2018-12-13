import {bindable}      from "aurelia-framework";
import {dom}    from "aire/core";

export class AireFormElement {

    input       : HTMLElement;
    container   : HTMLElement;
    @bindable
    label       : string;

    @bindable
    value       : any;

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
        dom.decorate(this.container, "horizontal", "uk-form-horizontal");
        dom.decorateTo(this.element, this.input, "success", "uk-form-success");
        dom.decorateTo(this.element, this.input, "error", "uk-form-error");
        dom.decorateTo(this.element, this.input, "blank", "uk-form-blank");
        this.label = this.element.getAttribute("label");
        this.value = this.element.getAttribute("value");
        this.disabled = this.element.getAttribute("disabled");
    }
}