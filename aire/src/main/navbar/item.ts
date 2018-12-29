import {bindable, containerless, inject, customElement} from "aurelia-framework";
import {dom}                                  from "aire/core";

/**
 * The navbar-item is a link that goes inside a navbar-section.
 *
 * @component navbar-item
 *
 * @param {bindable} active
 * @param {bindable} icon
 * @param {bindable} href
 * @param {pseudo} large
 * @param {pseudo} medium
 * @param {pseudo} small
 * @param {pseudo} logo
 *
 */
@inject(Element)
@containerless
@customElement('navbar-item')
export class AireNavbarItem {

  @bindable
  active: boolean = true;

  @bindable
  icon: string;

  @bindable
  href: string;

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