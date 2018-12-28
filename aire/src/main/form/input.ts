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
 * @param {pseudo} danger
 * @param {pseudo} blank
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * Just like any form element, a input can have a label and a value. It can also be disabled. To set its type, pass one in
 *
 * @usage.examples.Default
 * aire-input
 *
 * @usage.examples.With_Label_And_Value
 * aire-input(label="My Input" value="1234")
 *
 * @usage.examples.Disabled
 * aire-input(disabled label="Disabled Input")
 *
 * @usage.examples.Other_Type
 * aire-input(label="A Password" type="password" value="1234")
 *
 *
 * @section.styles
 * @styles.title
 * Styles
 * @styles.description
 * An input's label can be moved horizontal with `horizontal`. The input can also have an `danger` or `success` state. For a more minimal look, make it `blank`.
 *
 * @styles.examples.Horizontal
 * aire-input(horizontal label="Horizontal Input")
 *
 * @styles.examples.Danger
 * aire-input(danger label="Dangerous Input")
 *
 * @styles.examples.Success
 * aire-input(success label="Successful Input")
 *
 * @styles.examples.Blank
 * aire-input(blank label="Minimal Input")
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