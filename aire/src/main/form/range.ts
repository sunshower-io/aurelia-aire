import {customElement, inject} from "aurelia-framework";
import {AireFormElement} from "./element";
import {DOM} from 'aurelia-pal';

/**
 * The aire-range is a styled input[type="range"]
 *
 * @component range
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
@customElement('aire-range')
export class AireRange extends AireFormElement {

    constructor(element: Element) {
        super(element);
    }
}