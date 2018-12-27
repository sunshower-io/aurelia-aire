import {bindable, customElement, inject} from "aurelia-framework";
import {dom} from "aire/core/dom";

/**
 * The accordion-item a list item designed to be the child of an aire-accordion.
 *
 * @component accordion-item
 *
 * @param {bindable} title (string)
 * @param {pseudo} open
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * An accordion-item has a slot for its content, but its title is bindable
 *
 * @usage.examples.Title_And_Slot
 * aire-accordion
 *  accordion-item(title="Accordion Item")
 *      p Accordion Content
 *
 * @section.option
 * @open.title
 * Open
 * @open.description
 * An accordion item can default to open if the decorator `open` is passed in.
 *
 * @open.examples.Open
 * aire-accordion(multiple)
 *  accordion-item(title="Accordion Item 1" open)
 *      p Accordion Content
 *  accordion-item(title="Accordion Item 2" open)
 *      p Accordion Content
 *
 * @open.examples.Closed
 * aire-accordion(multiple)
 *  accordion-item(title="Accordion Item 1")
 *      p Accordion Content
 *  accordion-item(title="Accordion Item 2")
 *      p Accordion Content
 */
@inject(Element)
@customElement('accordion-item')
export class AccordionItem {

    li      : HTMLLIElement;

    @bindable
    title   : string;

    constructor(private el : Element) {

    }

    attached() {
        dom.decorateTo(this.el, this.li, "open", "uk-open");
    }
}