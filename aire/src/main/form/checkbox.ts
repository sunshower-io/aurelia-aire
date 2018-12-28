import {customElement, inject} from "aurelia-framework";
import {DOM} from 'aurelia-pal';
import {AireFormMultiElement} from "aire/form/multielement";

/**
 * The aire-checkbox is a styled `input[type="checkbox"]`
 *
 * @component checkbox
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
 * @param {pseudo} blank
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * Just like any form element, a checkbox can have a label and a value. It can also be disabled or checked.
 *
 * @usage.examples.Default
 * aire-checkbox
 *
 * @usage.examples.With_Label_And_Value
 * aire-checkbox(label="My Checkbox" value="1")
 *
 * @usage.examples.Disabled
 * aire-checkbox(disabled label="Disabled Checkbox")
 *
 * @usage.examples.Checked
 * aire-checkbox(checked label="Checked Checkbox")
 *
 *
 * @section.group
 * @group.title
 * Group
 * @group.description
 * It is frequently desirable to have a checkbox be part of a group, in which case you should pass it a name.
 *
 * @group.examples.Group
 * aire-checkbox(name="group" label="Checkbox 1" value="1")
 * aire-checkbox(name="group" label="Checkbox 2" value="2")
 *
 *
 * @section.styles
 * @styles.title
 * Styles
 * @styles.description
 * A checkbox's label can be moved horizontal with `horizontal`. The checkbox can also have an `danger` or `success` state. For a more minimal look, make it `blank`.
 *
 * @styles.examples.Horizontal
 * aire-checkbox(horizontal label="Horizontal Checkbox")
 *
 * @styles.examples.Danger
 * aire-checkbox(danger label="Dangerous Checkbox")
 *
 * @styles.examples.Success
 * aire-checkbox(success label="Successful Checkbox")
 *
 * @styles.examples.Blank
 * aire-checkbox(blank label="Minimal Checkbox")
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