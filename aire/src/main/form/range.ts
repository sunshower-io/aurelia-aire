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
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * Just like any form element, a range can have a label and a value. It can also be disabled.
 *
 * @usage.examples.Default
 * aire-range
 *
 * @usage.examples.With_Label_And_Value
 * aire-range(label="My Range" value="1234")
 *
 * @usage.examples.Disabled
 * aire-range(disabled label="Disabled Range")
 *
 *
 * @section.styles
 * @styles.title
 * Styles
 * @styles.description
 * An range's label can be moved horizontal with `horizontal`.
 *
 * @styles.examples.Horizontal
 * aire-range(horizontal label="Horizontal Range")
 *
 */

// * @param {pseudo} success
// * @param {pseudo} danger
// * @param {pseudo} blank
//  The range can also have an `danger` or `success` state. For a more minimal look, make it `blank`.
// * @styles.examples.Danger
// * aire-range(danger label="Dangerous Range")
// *
// * @styles.examples.Success
// * aire-range(success label="Successful Range")
// *
// * @styles.examples.Blank
// * aire-range(blank label="Minimal Range")
@inject(DOM.Element)
@customElement('aire-range')
export class AireRange extends AireFormElement {

    constructor(element: Element) {
        super(element);
    }
}