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
 * @param {pseudo} danger
 * @param {pseudo} blank
 *
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * Just like any form element, a textarea can have a label and a value. It can also be disabled.
 *
 * @usage.examples.Default
 * aire-textarea
 *
 * @usage.examples.With_Label_And_Value
 * aire-textarea(label="My Textarea" value="1234")
 *
 * @usage.examples.Disabled
 * aire-textarea(disabled label="Disabled Textarea")
 *
 *
 * @section.styles
 * @styles.title
 * Styles
 * @styles.description
 * An textarea's label can be moved horizontal with `horizontal`. The textarea can also have an `danger` or `success` state. For a more minimal look, make it `blank`.
 *
 * @styles.examples.Horizontal
 * aire-textarea(horizontal label="Horizontal Textarea")
 *
 * @styles.examples.Danger
 * aire-textarea(danger label="Danger Textarea")
 *
 * @styles.examples.Success
 * aire-textarea(success label="Success Textarea")
 *
 * @styles.examples.Blank
 * aire-textarea(blank label="Minimal Textarea")
 */
@inject(DOM.Element)
@customElement('aire-textarea')
export class AireTextarea extends AireFormElement {

    constructor(element: Element) {
        super(element);
    }
}