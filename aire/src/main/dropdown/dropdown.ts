import {bindable, customElement, inject} from "aurelia-framework";
import * as UIkit                                       from "uikit";
import {Dropdown}                                       from "uikit";
import {AireElement} from "aire/core/widget";

@inject(Element)
@customElement('aire-dropdown')
export class AireDropdown extends AireElement {

  @bindable
  mode : string = 'click, hover';

  @bindable
  position : string = 'bottom-left';

  dropdown : Dropdown;

  element : HTMLElement;

  constructor(el : Element) {
      super('AireDropdown', el, el.getAttribute("toggle") || el.previousElementSibling);
  }

  attached() {
    super.attached();
    let options = {
      toggle : this.hostPath(),
      pos    : this.position,
      mode   : this.mode
    };
    console.log("options", options);
    this.dropdown = UIkit.dropdown(this.element, options);
  }
}