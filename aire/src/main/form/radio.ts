import {customElement, inject} from "aurelia-framework";
import {DOM} from 'aurelia-pal';
import {AireFormMultiElement} from "aire/form/multielement";

@inject(DOM.Element)
@customElement('aire-radio')
export class AireRadio extends AireFormMultiElement {

    constructor(element: Element) {
        super(element);
    }
}