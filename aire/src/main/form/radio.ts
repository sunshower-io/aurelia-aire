import {customElement, inject} from "aurelia-framework";
import {DOM} from 'aurelia-pal';
import {AireFormMultiElement} from "aire/form/multielement";

/**
 * The aire-radio is a styled `input[type="radio"]`
 *
 * @component radio
 *
 *
 * @param {bindable} checked (boolean)
 * @param {bindable} name (string)
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
 * Just like any form element, a radio can have a label and a value. It can also be disabled or checked.
 *
 * @usage.examples.Default
 * aire-radio
 *
 * @usage.examples.With_Label_And_Value
 * aire-radio(label="My Radio" value="1")
 *
 * @usage.examples.Disabled
 * aire-radio(disabled label="Disabled Radio")
 *
 * @usage.examples.Checked
 * aire-radio(checked label="Checked Radio")
 *
 *
 * @section.group
 * @group.title
 * Group
 * @group.description
 * It is frequently desirable to have a radio be part of a group, in which case you should pass it a name.
 *
 * @group.examples.Group
 * aire-radio(name="group" label="Radio 1" value="1")
 * aire-radio(name="group" label="Radio 2" value="2")
 *
 *
 * @section.styles
 * @styles.title
 * Styles
 * @styles.description
 * A radio's label can be moved horizontal with `horizontal`. The radio can also have an `danger` or `success` state.
 *
 * @styles.examples.Horizontal
 * aire-radio(horizontal label="Horizontal Radio")
 *
 * @styles.examples.Danger
 * aire-radio(danger label="Danger Radio")
 *
 * @styles.examples.Success
 * aire-radio(success label="Success Radio")
 *
 */

@inject(DOM.Element)
@customElement('aire-radio')
export class AireRadio extends AireFormMultiElement {

    constructor(element: Element) {
        super(element);
    }

    attached() {
        super.attached();
    }
}