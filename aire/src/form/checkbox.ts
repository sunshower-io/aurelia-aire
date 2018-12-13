import {bindable, customElement, inject} from "aurelia-framework";
import {AireFormElement} from "./element";

@inject(Element)
@customElement('aire-checkbox')
export class AireCheckbox extends AireFormElement {

    @bindable
    selected    : boolean;

    constructor(element: Element) {
        super(element);
        this.selected = element.hasAttribute("checked");
    }
}