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
    let el = this.el;
    dom.decorateTo(el, this.element, 'large');
    dom.decorateTo(el, this.element, 'small');
    dom.decorateTo(el, this.element, 'medium');
    dom.decorateTo(el, this.element, 'logo', 'uk-logo');
  }

}