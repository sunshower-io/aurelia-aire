import {bindable}      from "aurelia-framework";
import {dom, Id} from "aire/core";
import {Aire} from "aire/core/application";

export class AireFormElement {

    input       : HTMLElement;
    container   : HTMLElement;

    @bindable
    label       : string;

    @bindable
    value       : any;

    error       : string;

    success     : string;

    @bindable
    disabled    : boolean;

    id          : string = Aire.id;

    constructor(private element: Element) {
    }

    attached() {
        dom.decorate(this.container, "horizontal", "uk-form-horizontal");
        dom.decorateTo(this.element, this.input, "success", "uk-form-success");
        dom.decorateTo(this.element, this.input, "error", "uk-form-error");
        dom.decorateTo(this.element, this.input, "blank", "uk-form-blank");
    }
}