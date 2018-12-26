import {bindable, customElement, inject} from "aurelia-framework";
import {dom}    from "aire/core";
import {DOM} from 'aurelia-pal';
import {AireBaseButton} from "aire/button/basebutton";

@inject(DOM.Element)
@customElement('aire-button')
export class AireButton extends AireBaseButton {

  @bindable
  label     : string;

  constructor(element: Element) {
      super(element);
  }

  attached() {
      super.attached();
      dom.decorateTo(this.element, this.button, "text", "uk-button-text");
      dom.decorateTo(this.element, this.button, "link", "uk-button-link");
      dom.decorateTo(this.element, this.button, "full", "uk-width-1-1");
      dom.decorateTo(this.element, this.button, "small", "uk-button-small");
      dom.decorateTo(this.element, this.button, "large", "uk-button-large");
      dom.decorateTo(this.element, this.button, "square", "aire-button-square");
  }
}