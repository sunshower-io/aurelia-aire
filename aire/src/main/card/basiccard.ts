import {customElement, inject}      from "aurelia-framework";
import {AireCard} from "aire/card/card";

@inject(Element)
@customElement('aire-basic-card')
export class AireBasicCard extends AireCard{

  card        : HTMLElement;

  constructor(element: Element) {
      super(element);
  }

  attached() {
      super.attached();
  }
}