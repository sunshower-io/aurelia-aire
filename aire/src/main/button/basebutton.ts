import {bindable} from "aurelia-framework";
import {dom}    from "aire/core";

export class AireBaseButton {

  @bindable
  icon      : string;

  button    : HTMLElement;

  @bindable
  disabled    : boolean;

  constructor(
    public element: Element
  ) {
  }

  attached() {
      dom.decorateTo(this.element, this.button, "default", "uk-button-default");
      dom.decorateTo(this.element, this.button, "primary", "uk-button-primary");
      dom.decorateTo(this.element, this.button, "secondary", "uk-button-secondary");
      dom.decorateTo(this.element, this.button, "danger", "uk-button-danger");
  }
}