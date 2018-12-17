import {bindable, customElement, inject}      from "aurelia-framework";
import * as UIkit                        from "uikit";
import {Dropdown}                       from "uikit";

@inject(Element)
@customElement('aire-tooltip')
export class AireTooltip {

    @bindable
    mode        : string = 'click, hover';

    @bindable
    position    : string = 'bottom-left';

    dropdown    : Dropdown;

    element     : HTMLElement;

    @bindable
    toggle      : any = "- *";

  constructor(private el: Element) {

  }

  attached() {
      let options = {
          toggle: this.toggle,  //TODO make support HTMLElement
          pos: this.position,
          mode: this.mode
      };

      this.dropdown = UIkit.dropdown(this.element, options);
  }
}