import {bindable, customElement, inject} from "aurelia-framework";
import {AireFormElement} from "./element";
import {DOM} from "aurelia-pal";

@inject(DOM.Element)
@customElement('aire-input')
export class AireInput extends AireFormElement {

    @bindable
    type        : string = "text";

    @bindable
    flip        : boolean;

    constructor(element: Element) {
        super(element);
    }
}