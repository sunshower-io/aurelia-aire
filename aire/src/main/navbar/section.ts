import {inject, customElement} from "aurelia-framework";
import {dom}                                  from "aire/core";
import {DOM} from "aurelia-pal";

/**
 * The navbar-section aligns and organizes navbar items
 *
 * @component navbar-section
 *
 * @param {pseudo} left
 * @param {pseudo} right
 * @param {pseudo} center
 *
 * @section.usage
 * @usage.title
 * Usage
 *
 * @usage.description
 * A navbar-section is a slot that can be left, right or center.
 *
 * @usage.examples.Left
 * aire-navbar
 *  navbar-section(left)
 *    navbar-item Left
 *
 * @usage.examples.Right
 * aire-navbar
 *  navbar-section(right)
 *    navbar-item Center
 *
 * @usage.examples.Center
 * aire-navbar
 *  navbar-section(center)
 *    navbar-item Center
 *
 * @usage.examples.Multiple
 * aire-navbar
 *  navbar-section(left)
 *    navbar-item Left
 *  navbar-section(center)
 *    navbar-item Center
 *  navbar-section(right)
 *    navbar-item right
 *
 */
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