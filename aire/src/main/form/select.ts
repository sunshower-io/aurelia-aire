import {bindable, customElement, inject}      from "aurelia-framework";
import {AireFormElement} from "./element";
import {DOM} from 'aurelia-pal';

/**
 * The aire-select is a styled select
 *
 * @component select
 *
 *
 * @param {bindable} label (string)
 * @param {bindable} value (any)
 * @param {bindable} disabled (boolean)
 * @param {bindable} data ({}[] || {})
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
 * Just like any form element, a select can have a label and a value. It can also be disabled. It takes an array of {label: string, value: string} objects.
 *
 * @usage.examples.Default
 * aire-select(data="[label='Default, value='']")
 *
 * @usage.examples.With_Label_And_Value
 * aire-select(label="My Select" value="1", data="[{label:'Default', value:''}, {label: 'One', value:'1'}]")
 *
 * @usage.examples.Disabled
 * aire-select(disabled label="Disabled Select")
 *
 *
 * @section.styles
 * @styles.title
 * Styles
 * @styles.description
 * An select's label can be moved horizontal with `horizontal`. The select can also have an `danger` or `success` state. For a more minimal look, make it `blank`.
 *
 * @styles.examples.Horizontal
 * aire-select(horizontal label="Horizontal Select")
 *
 * @styles.examples.Danger
 * aire-select(danger label="Dangerous Select")
 *
 * @styles.examples.Success
 * aire-select(success label="Successful Select")
 *
 * @styles.examples.Blank
 * aire-select(blank label="Minimal Select")
 */
@inject(DOM.Element)
@customElement('aire-select')
export class AireSelect extends AireFormElement {

    options     : {label: string, value: string}[];

    @bindable
    data        : {label: string, value: string}[] | {label: string, value: string};

    constructor(element: Element) {
        super(element);
        this.options = Array.isArray(this.data) ? this.data : [this.data]; //catches single instance non-iterable
    }
}