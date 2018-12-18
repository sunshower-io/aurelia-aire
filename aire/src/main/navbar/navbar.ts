import {customElement, viewResources} from "aurelia-framework";
import * as UIkit                     from "uikit";
import {dom} from "aire/core";

@customElement("aire-navbar")
@viewResources("./item", "./section")
export class AireNavbar {

  private readonly element : Element;

  constructor(private el: Element) {

  }

  attached() : void {
    dom.decorateTo(this.el, this.element, "sticky", "uk-navbar-sticky");
    dom.decorateTo(this.el, this.element, "transparent", "uk-navbar-transparent");
    dom.decorateTo(this.el, this.element, "dark", "uk-dark");
    dom.decorateTo(this.el, this.element, "light", "uk-light");
    UIkit.navbar(this.element);
  }

}
