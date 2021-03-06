import {bindable}      from "aurelia-framework";
import {dom, Id} from "aire/core";

export class AireFormElement {

    input       : HTMLElement;
    container   : HTMLElement;
    marker      : HTMLLabelElement;

    @bindable
    label       : string;

    @bindable
    value       : any;

    danger       : string;

    success     : string;

    @bindable
    disabled    : boolean;

    @Id()
    id          : string;

    constructor(private element: Element) {
    }

    attached() {
        dom.decorate(this.container, "horizontal", "uk-form-horizontal");
        dom.decorateTo(this.element, this.input, "success", "uk-form-success");
        dom.decorateTo(this.element, this.input, "danger", "uk-form-danger");
        dom.decorateTo(this.element, this.input, "blank", "uk-form-blank");
        dom.decorate(this.container, "success", "uk-form-success");
        dom.decorate(this.container, "danger", "uk-form-danger");
        dom.decorate(this.container, "blank", "uk-form-blank");

        if (this.label && this.marker) {
            dom.decorateTo(this.element, this.marker, "success", "uk-form-success");
            dom.decorateTo(this.element, this.marker, "danger", "uk-form-danger");
        }
    }
}