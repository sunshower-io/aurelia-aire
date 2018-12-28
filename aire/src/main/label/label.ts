import {bindable, customElement, inject}    from "aurelia-framework";
import {dom} from "aire/core";


/**
 *The aire-label is a span element with three optional messages and a fourth option to create your own.
 *
 *@component label
 *
 *
 *@param {bindable} label (string)
 * @param {pseudo} default
 *@param {pseudo} success
 * @param {pseudo} warning
 * @param {pseudo} danger
 *
 *
 *@section.usage
 *@usage.title
 * Usage
 * @usage.description
 *A label can contain words
 *
 * @usage.examples.label
 *  aire-label(label="Edit")
 *
 * @section.style
 * @style.title
 * Style
 * @style.description
 * Labels can come up with warning, danger, success, or a user-chosen message.
 *
 * @usage.examples.Styles
 * p
 * aire-label(label="Default" default)
 * p
 * aire-label(label="Success" success)
 * p
 * aire-label(label="Danger" danger)
 * p
 * aire-label(label="Warning" warning)
 *
 */

@inject(Element)
@customElement('aire-label')
export class AireLabel {
    el: HTMLElement;

    @bindable
    label: string;

    constructor(private element: Element) {


    }
    attached() {
        dom.decorateTo(this.element, this.el, "success", "uk-label-success");
        dom.decorateTo(this.element, this.el, "default", "uk-label-default");
        dom.decorateTo(this.element, this.el, "warning", "uk-label-warning");
        dom.decorateTo(this.element, this.el, "danger", "uk-label-danger");
    }


}


