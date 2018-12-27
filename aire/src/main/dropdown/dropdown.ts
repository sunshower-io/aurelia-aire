import {bindable, customElement} from "aurelia-framework";
import * as UIkit from "uikit";
import {Dropdown}  from "uikit";
import {dom} from "aire/core";

/**
 * The aire-dropdown is a card that can be revealed when clicking or hovering another element.
 *
 * @component dropdown
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
@customElement('aire-dropdown')
export class AireDropdown {

  @bindable
  mode : string = 'click, hover';

  @bindable
  position : string = 'bottom-left';

  @bindable
  toggle    : Element | string = "- *";

  dropdown : Dropdown;

  element : HTMLElement;

  constructor() {

  }

  attached() {
    let options = {
      toggle  : dom.pathTo(this.toggle),
      pos     : this.position,
      mode    : this.mode
    };
    this.dropdown = UIkit.dropdown(this.element, options);
  }
}