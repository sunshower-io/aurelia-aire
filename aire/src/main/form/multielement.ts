import {bindable} from "aurelia-framework";
import {AireFormElement} from "./element";

export class AireFormMultiElement extends AireFormElement {

    @bindable
    selected    : boolean;

    @bindable
    name        : string;

    constructor(element: Element) {
        super(element);
    }
}