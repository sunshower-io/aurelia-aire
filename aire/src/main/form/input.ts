import {bindable, customElement, inject} from "aurelia-framework";
import {AireFormElement} from "./element";
import {DOM} from "aurelia-pal";

/**
 * The aire-input is a styled input
 *
 * @component input
 *
 *
 * @param {bindable} type (string)
 * @param {bindable} flip (boolean)
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
@customElement('aire-input')
export class AireInput extends AireFormElement {

    @bindable
    type        : string = "text";

    @bindable
    flip        : boolean;

    constructor(element: Element) {
        super(element);
    }
}