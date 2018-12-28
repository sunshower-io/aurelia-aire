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
 * @param {pseudo} error
 * @param {pseudo} blank
 *
 *
 */
@inject(DOM.Element)
@customElement('aire-select')
export class AireSelect extends AireFormElement {

    options     : {label: string, value: string}[];

    @bindable
    data        : {label: string, value: string}[] | {label: string, value: string};

    constructor(element: Element) {
        super(element);
        console.log(this.data);
        this.options = Array.isArray(this.data) ? this.data : [this.data]; //catches single instance non-iterable
    }
}