import {customElement, inject} from "aurelia-framework";
import {AireFormElement} from "./element";

@inject(Element)
@customElement('aire-range')
export class AireRange extends AireFormElement {

    constructor(element: Element) {
        super(element);
    }
}