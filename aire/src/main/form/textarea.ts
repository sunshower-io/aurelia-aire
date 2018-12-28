import {customElement, inject} from "aurelia-framework";
import {AireFormElement} from "./element";
import {DOM} from 'aurelia-pal';

/**
 * The aire-textarea is a styled textarea
 *
 * @component textarea
 *
 *
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
@customElement('aire-textarea')
export class AireTextarea extends AireFormElement {

    constructor(element: Element) {
        super(element);
    }
}