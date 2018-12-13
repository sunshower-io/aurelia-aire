import {bindable, customElement, inject} from "aurelia-framework";
import {AireFormElement} from "./element";

@inject(Element)
@customElement('aire-input')
export class AireInput extends AireFormElement {

    @bindable
    type        : string;

    constructor(element: Element) {
        super(element);
        this.type = element.getAttribute("type");
    }
}