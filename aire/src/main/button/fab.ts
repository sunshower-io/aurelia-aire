import {customElement, inject}      from "aurelia-framework";
import {AireBaseButton} from "aire/button/basebutton";
import {DOM} from 'aurelia-pal';

@inject(DOM.Element)
@customElement('aire-fab')
export class AireFab extends AireBaseButton {

  style     : string = "";

  static readonly edges = ["top", "right", "bottom", "left"];

  constructor(element: Element) {
    super(element);
    this.style = AireFab.edges.map((edge) => {
        return `${edge}: ${element.getAttribute(edge) || "auto"}`;
    }).join('; ');
  }

  attached() {
      super.attached();
  }
}