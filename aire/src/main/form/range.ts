import {customElement, inject} from "aurelia-framework";
import {AireFormElement} from "./element";
import {DOM} from 'aurelia-pal';

@inject(DOM.Element)
@customElement('aire-range')
export class AireRange extends AireFormElement {

    constructor(element: Element) {
        super(element);
    }
}