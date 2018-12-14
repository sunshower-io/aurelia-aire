import {bindable, customElement, inject}      from "aurelia-framework";
import {AireCard} from "aire/card/card";

@inject(Element)
@customElement('aire-basic-card')
export class AireBasicCard extends AireCard{

  @bindable
  card        : HTMLElement;

  @bindable
  title     : string = "";

  constructor(element: Element) {
      super(element);
  }

  attached() {

  }
}