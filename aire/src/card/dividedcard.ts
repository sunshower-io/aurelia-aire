import {customElement, inject}      from "aurelia-framework";
import {AireCard} from "aire/card/card";

@inject(Element)
@customElement('aire-divided-card')
export class AireDividedCard extends AireCard {

  card        : HTMLElement;

  header    : boolean;

  footer    : boolean;

  constructor(element: Element) {
    super(element);
    this.header = element.hasAttribute("header");
    this.footer = element.hasAttribute("footer");
  }

  attached() {

  }
}