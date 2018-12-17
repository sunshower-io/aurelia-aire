import { customElement, inject} from "aurelia-framework";
import {AireFormElement} from "./element";

@inject(Element)
@customElement('aire-radio')
export class AireRadio extends AireFormElement {

    selected    : boolean;

    constructor(element: Element) {
        super(element);
        this.selected = element.hasAttribute("checked");
    }
}