import {bindable, customElement, inject} from "aurelia-framework";
import {AireFormElement} from "./element";

@inject(Element)
@customElement('aire-textarea')
export class AireTextarea extends AireFormElement {

    constructor(element: Element) {
        super(element);
    }
}