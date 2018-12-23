import {inject, customElement} from "aurelia-framework";
import {dom}                                  from "aire/core";
import {DOM} from "aurelia-pal";

@inject(DOM.Element)
@customElement('navbar-section')
export class AireNavbarSection {

  constructor(private el:Element) {

  }

  attached() {
    dom.decorate(this.el, "left", "uk-navbar-left");
    dom.decorate(this.el, "right", "uk-navbar-right");
    dom.decorate(this.el, "center", "uk-navbar-center");
  }


}