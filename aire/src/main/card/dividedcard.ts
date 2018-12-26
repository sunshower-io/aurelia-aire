import {bindable, customElement, inject}      from "aurelia-framework";
import {AireCard} from "aire/card/card";

@inject(Element)
@customElement('aire-divided-card')
export class AireDividedCard extends AireCard {

  card        : HTMLElement;

  @bindable
  header    : boolean;

  @bindable
  footer    : boolean;

  constructor(element: Element) {
    super(element);
  }

  attached() {
    super.attached();
  }
}