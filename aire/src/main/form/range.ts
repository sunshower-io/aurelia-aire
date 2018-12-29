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
 * @param {pseudo} danger
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
 * An range's label can be moved horizontal with `horizontal`. The range can also have an `danger` or `success` state.
 *
 * @styles.examples.Horizontal
 * aire-range(horizontal label="Horizontal Range")
 *
 * @styles.examples.Danger
 * aire-range(danger label="Danger Range")
 *
 * @styles.examples.Success
 * aire-range(success label="Success Range")
 */

@inject(DOM.Element)
@customElement('aire-range')
export class AireRange extends AireFormElement {

    constructor(element: Element) {
        super(element);
    }
}