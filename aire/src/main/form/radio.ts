import {customElement, inject} from "aurelia-framework";
import {DOM} from 'aurelia-pal';
import {AireFormMultiElement} from "aire/form/multielement";

/**
 * The aire-radio is a styled input[type="radio"]
 *
 * @component radio
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
@customElement('aire-radio')
export class AireRadio extends AireFormMultiElement {

    constructor(element: Element) {
        super(element);
    }
}