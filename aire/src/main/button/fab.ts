import {customElement, inject}      from "aurelia-framework";
import {AireBaseButton} from "aire/button/basebutton";
import {DOM} from 'aurelia-pal';

@inject(DOM.Element)
@customElement('aire-fab')
export class AireFab extends AireBaseButton {

  style     : string = "";

  constructor(element: Element) {
    super(element);
    this.style = ["top", "right", "bottom", "left"].map(function(edge) {
        return `${edge}: ${element.getAttribute(edge) || "auto"}`;
    }).join('; ');
  }

  attached() {
      super.attached();
  }
}