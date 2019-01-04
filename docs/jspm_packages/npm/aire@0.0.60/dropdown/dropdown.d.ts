import { Dropdown } from "uikit";
/**
 * The aire-dropdown is a card that can be revealed when clicking or hovering another element.
 *
 *
 * @param {bindable} mode (string)
 * @param {bindable} position (string)
 * @param {bindable} toggle (string)
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * A dropdown is toggled interacting with its previous sibling or by passing in a toggle, and has a slot.
 *
 * @usage.examples.Toggle_From_Neighbor
 * aire-button(label="Toggle with Me")
 * aire-dropdown
 *  p Dropdown
 *
 * @usage.examples.Toggle_With_Argument
 * aire-dropdown(toggle="#toggleWithArgumentParagraph")
 *  p Dropdown
 * p#toggleWithArgumentParagraph This will now toggle the dropdown
 *
 * @section.mode
 * @mode.title
 * Mode
 * @mode.description
 * By default a dropdown is triggered by clicking or hovering its toggle element, but you can specify one or the other.
 *
 * @mode.examples.Default
 * aire-button(label="Click or Hover Me")
 * aire-dropdown
 *  p Dropdown
 *
 * @mode.examples.Click
 * aire-button(label="Click Me")
 * aire-dropdown(toggle="click")
 *  p Dropdown
 *
 * @mode.examples.Hover
 * aire-button(label="Hover Me")
 * aire-dropdown(toggle="hover")
 *  p Dropdown
 *
 * @section.position
 * @position.title
 * Positioning
 * @position.description
 * By default a dropdown is positioned at the bottom-left of its toggle, but this can also be `bottom-center`, `bottom-right`, `bottom-justify`, `top-left`, `top-center`, `top-right`, `top-justify`, `left-top`, `left-center`, `left-bottom`, `right-top`, `right-center` or `right-bottom`.
 *
 * @position.examples.Top_Right
 * aire-button(label="Click or Hover Me")
 * aire-dropdown(position="top-right")
 *  p Dropdown
 *
 *
 * @position.examples.Bottom_Justify
 * aire-button(label="Click or Hover Me")
 * aire-dropdown(position="bottom-justify")
 *  p Dropdown
 *
 *  @position.examples.Right_Center
 * aire-button(label="Click or Hover Me")
 * aire-dropdown(position="right-center")
 *  p Dropdown
 */
export declare class AireDropdown {
    mode: string;
    position: string;
    toggle: Element | string;
    dropdown: Dropdown;
    element: HTMLElement;
    constructor();
    attached(): void;
}
