import {customElement, inject} from "aurelia-framework";
import {AireFormElement} from "./element";
import {DOM} from 'aurelia-pal';

@inject(DOM.Element)
@customElement('aire-textarea')
export class AireTextarea extends AireFormElement {

    constructor(element: Element) {
        super(element);
    }
}