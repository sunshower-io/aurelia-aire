import {containerless, customElement, inject}      from "aurelia-framework";
import {AireFormElement} from "./element";

@inject(Element)
@customElement('aire-select')
export class AireSelect extends AireFormElement {

    constructor(element: Element) {
        super(element);
    }
}