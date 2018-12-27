import {bindable, customElement, viewResources} from "aurelia-framework";
import * as UIkit from "uikit";
import {Accordion}  from "uikit";


/**
 * The aire-accordion is an unordered list that allows child elements to be open or closed.
 *
 * @component accordion
 *
 * @param {bindable} animated (boolean)
 * @param {bindable} collapsible (boolean)
 * @param {bindable} duration (number)
 * @param {bindable} multiple (boolean)
 * @param {bindable} transition (string)
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * An accordion has a slot for its list items.
 *
 * @usage.examples.Slot
 * aire-accordion
 *  accordion-item(title="Item 1")
 *      p Hello
 *  accordion-item(title="Item 2")
 *      p Goodbye
 *
 * @section.animation
 * @animation.title
 * Animation Behavior
 * @animation.description
 * An accordion can reveal its items directly or with a transition. The behavior is set with `animated` and the transition with `transition`. The defaults are true and 'ease' respectively.
 *
 * @animation.examples.Default_Animation
 * aire-accordion
 *  accordion-item(title="Item 1")
 *      p Hello
 *  accordion-item(title="Item 2")
 *      p Goodbye
 *
 * @animation.examples.No_Animation
 * aire-accordion(animated="false")
 *  accordion-item(title="Item 1")
 *      p Hello
 *  accordion-item(title="Item 2")
 *      p Goodbye
 *
 * @animation.examples.Different_Transition
 * aire-accordion(transition="step-start")
 *  accordion-item(title="Item 1")
 *      p Hello
 *  accordion-item(title="Item 2")
 *      p Goodbye
 *
 *
 * @section.opening
 * @opening.title
 * Opening Behavior
 * @opening.description
 * By default, an accordion allows all items to be closed and does not allow multiple items, but this can be changed with `collapsible` and `multiple`
 *
 * @opening.examples.Multiple
 * aire-accordion(multiple)
 *  accordion-item(title="Item 1" open)
 *      p Hello
 *  accordion-item(title="Item 2" open)
 *      p Goodbye
 *
 * @opening.examples.Not_Collapsible
 * aire-accordion(collapsible="false")
 *  accordion-item(title="Item 1")
 *      p Hello
 *  accordion-item(title="Item 2")
 *      p Goodbye
 */
@customElement('aire-accordion')
@viewResources("./accordion-item")
export class AireAccordion {

    @bindable
    animated   : boolean = true;

    @bindable
    collapsible : boolean = true;

    @bindable
    duration    : number = 200;

    @bindable
    multiple    : boolean;

    @bindable
    transition  : string = 'ease';

    accordion   : Accordion;

    element     : HTMLElement;

    constructor() {

    }

    attached() {
        let options = {
            animation: this.animated,
            collapsible: this.collapsible,
            duration: this.duration,
            multiple: this.multiple,
            transition: this.transition
        };
        this.accordion = UIkit.accordion(this.element, options);
    }

}