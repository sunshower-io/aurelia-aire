import {customElement, inject} from "aurelia-framework";
import {DOM} from 'aurelia-pal';
import {AireFormMultiElement} from "aire/form/multielement";

/**
 * The aire-checkbox is a styled input[type="checkbox"]
 *
 * @component checkbox
 *
 *
 * @param {bindable} selected (boolean)
 * @param {bindable} name (string)
 * @param {bindable} label (string)
 * @param {bindable} value (any)
 * @param {bindable} disabled (boolean)
 *
 * @param {pseudo} horizontal
 * @param {pseudo} success
 * @param {pseudo} error
 * @param {pseudo} blank
 *
 *
 */
@inject(DOM.Element)
@customElement('aire-checkbox')
export class AireCheckbox extends AireFormMultiElement {

    constructor(element: Element) {
        super(element);
    }
}