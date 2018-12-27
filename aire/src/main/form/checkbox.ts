import {customElement, inject} from "aurelia-framework";
import {DOM} from 'aurelia-pal';
import {AireFormMultiElement} from "aire/form/multielement";

/**
 * @component checkbox
 */
@inject(DOM.Element)
@customElement('aire-checkbox')
export class AireCheckbox extends AireFormMultiElement {

    constructor(element: Element) {
        super(element);
    }
}