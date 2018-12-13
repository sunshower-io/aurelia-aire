import {bindable, customElement, inject}      from "aurelia-framework";
import {dom}    from "aire/core";

@inject(Element)
@customElement('aire-fab')
export class AireFab {

  @bindable
  icon     : string = "";

  @bindable
  button    : HTMLElement;

  @bindable
  style     : string = "";

  constructor(private element: Element) {
    this.style = ["top", "right", "bottom", "left"].map(function(edge) {
        return `${edge}: ${element.getAttribute(edge) || "auto"}`;
    }).join('; ');
  }

  attached() {
      dom.decorateTo(this.element, this.button, "default", "uk-button-default");
      dom.decorateTo(this.element, this.button, "primary", "uk-button-primary");
      dom.decorateTo(this.element, this.button, "secondary", "uk-button-secondary");
      dom.decorateTo(this.element, this.button, "danger", "uk-button-danger");
  }
}