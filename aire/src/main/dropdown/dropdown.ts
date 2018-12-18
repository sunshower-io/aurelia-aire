import {bindable, containerless, customElement, inject} from "aurelia-framework";
import * as UIkit                                       from "uikit";
import {Dropdown}                                       from "uikit";

@inject(Element)
// @containerless
@customElement('aire-dropdown')
export class AireDropdown {

  @bindable
  mode : string = 'click, hover';

  @bindable
  position : string = 'bottom-left';

  dropdown : Dropdown;

  element : HTMLElement;

  @bindable
  toggle : any = "- *";

  constructor(private el : Element) {

  }

  attached() {
    let options = {
      toggle : this.toggle,  //TODO make support HTMLElement
      pos    : this.position,
      mode   : this.mode
    };
    console.log("h1", options);
    this.dropdown = UIkit.dropdown(this.element, options);
  }
}