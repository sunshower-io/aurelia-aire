import {bindable, customElement, inject}      from "aurelia-framework";
import {dom}    from "aire/core";

@inject(Element)
@customElement('aire-button')
export class AireButton {

  @bindable
  label     : string = "";

  @bindable
  button    : HTMLElement;

  @bindable
  disabled    : string;

  constructor(private element: Element) {

  }

  attached() {
      dom.decorateTo(this.element, this.button, "default", "uk-button-default");
      dom.decorateTo(this.element, this.button, "primary", "uk-button-primary");
      dom.decorateTo(this.element, this.button, "secondary", "uk-button-secondary");
      dom.decorateTo(this.element, this.button, "danger", "uk-button-danger");
      dom.decorateTo(this.element, this.button, "text", "uk-button-text");
      dom.decorateTo(this.element, this.button, "link", "uk-button-link");
      dom.decorateTo(this.element, this.button, "full", "uk-width-1-1");
      this.disabled = this.element.getAttribute("disabled");
      this.label = this.element.getAttribute("label");
  }
}