import { Accordion } from "uikit";
/**
 * The aire-accordion is an unordered list that allows child elements to be open or closed.
 *
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
export declare class AireAccordion {
    animated: boolean;
    collapsible: boolean;
    duration: number;
    multiple: boolean;
    transition: string;
    accordion: Accordion;
    element: HTMLElement;
    constructor();
    attached(): void;
}
