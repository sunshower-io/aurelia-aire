import {inject, containerless, customElement} from "aurelia-framework";
import {dom}                                      from "aire/core";

@inject(Element)
@customElement('navbar-section')
export class AireNavbarSection {



  constructor(el:Element) {
    dom.decorate(el, "left", "uk-navbar-left");
    dom.decorate(el, "right", "uk-navbar-right");
    dom.decorate(el, "center", "uk-navbar-center");
  }


}