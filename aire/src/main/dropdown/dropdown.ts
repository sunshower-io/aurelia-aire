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
 * aire-button(label="Click Me")
 * aire-dropdown
 *  p Dropdown
 *
 * @usage.examples.Toggle_With_Argument
 * aire-dropdown(toggle="#toggleWithArgumentParagraph")
 *  p Dropdown
 * p#toggleWithArgumentParagraph This will now toggle the dropdown
 *
 *
 *
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