import {bindable}      from "aurelia-framework";
import {dom}    from "aire/core";

export class AireCard {

  @bindable
  card        : HTMLElement;

  @bindable
  title     : string = "";

  constructor(public element: Element) {

  }

  attached() {
      dom.decorateTo(this.element, this.card, "default", "uk-card-default");
      dom.decorateTo(this.element, this.card, "primary", "uk-card-primary");
      dom.decorateTo(this.element, this.card, "secondary", "uk-card-secondary");
      dom.decorateTo(this.element, this.card, "hover", "uk-card-hover");
      dom.decorateTo(this.element, this.card, "padding", "uk-card-body");
      //TODO handle uk-card-small and uk-card-large

      this.title = this.element.getAttribute("title");
  }
}