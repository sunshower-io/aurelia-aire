import {bindable, customElement, inject}      from "aurelia-framework";
import {dom}    from "aire/core";

@inject(Element)
@customElement('aire-button')
export class AireButton {

  @bindable
  label     : string;

  @bindable
  icon      : string;

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
      dom.decorateTo(this.element, this.button, "small", "uk-button-small");
      dom.decorateTo(this.element, this.button, "large", "uk-button-large");
      dom.decorateTo(this.element, this.button, "square", "aire-button-square");
  }
}