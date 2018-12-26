import {bindable}      from "aurelia-framework";
import {dom}    from "aire/core";

export class AireCard {

  card        : HTMLElement;

  @bindable
  title     : string;

  constructor(public element: Element) {

  }

  attached() {
      dom.decorateTo(this.element, this.card, "default", "uk-card-default");
      dom.decorateTo(this.element, this.card, "primary", "uk-card-primary");
      dom.decorateTo(this.element, this.card, "secondary", "uk-card-secondary");
      dom.decorateTo(this.element, this.card, "hover", "uk-card-hover");
      dom.decorateTo(this.element, this.card, "padding", "uk-card-body");
      dom.decorateTo(this.element, this.card, "padding-small", "uk-card-body");
      dom.decorateTo(this.element, this.card, "padding-small", "uk-card-small");
      dom.decorateTo(this.element, this.card, "padding-large", "uk-card-body");
      dom.decorateTo(this.element, this.card, "padding-large", "uk-card-large");

  }
}