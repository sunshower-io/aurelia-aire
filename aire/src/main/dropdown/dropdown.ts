import {bindable, customElement} from "aurelia-framework";
import * as UIkit from "uikit";
import {Dropdown}  from "uikit";
import {dom} from "aire/core";

/**
 * @component dropdown
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