import {bindable} from "aurelia-framework";
import {AireFormElement} from "./element";

export class AireFormMultiElement extends AireFormElement {

    @bindable
    checked    : boolean;

    @bindable
    name        : string;

    constructor(element: Element) {
        super(element);
    }
}