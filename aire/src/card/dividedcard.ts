import {bindable, customElement, inject}      from "aurelia-framework";
import {dom}    from "aire/core";
import {AireCard} from "aire/card/card";

@inject(Element)
@customElement('aire-divided-card')
export class AireDividedCard extends AireCard {

  @bindable
  card        : HTMLElement;

  @bindable
  title     : string = "";

  @bindable
  header    : boolean;

  @bindable
  footer    : boolean;

  constructor(element: Element) {
    super(element);
    this.header = element.hasAttribute("header");
    this.footer = element.hasAttribute("footer");
  }

  attached() {

  }
}