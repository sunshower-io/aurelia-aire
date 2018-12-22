import {bindable, containerless, inject, customElement} from "aurelia-framework";
import {dom}                                  from "aire/core";


@inject(Element)
@containerless
@customElement('navbar-item')
export class AireNavbarItem {

  @bindable
  active: boolean = true;

  @bindable
  icon: string;

  @bindable
  content: string;

  private readonly element: Element;

  constructor(private readonly el: Element) {
  }

  attached() : void {
    dom.decorateTo(this.el, this.element, 'large');
    dom.decorateTo(this.el, this.element, 'small');
    dom.decorateTo(this.el, this.element, 'medium');
    dom.decorateTo(this.el, this.element, 'logo', 'uk-logo');
  }

}