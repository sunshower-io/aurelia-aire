import {customElement, inject}      from "aurelia-framework";
import {AireBaseButton} from "aire/button/basebutton";
import {DOM} from 'aurelia-pal';

/**
 * The aire-fab is a rounded button element that can be absolutely positioned along any set of edges
 *
 * @component fab
 *
 *
 * @param {bindable} icon (string)
 * @param {pseudo} default
 * @param {pseudo} primary
 * @param {pseudo} secondary
 * @param {pseudo} danger
 * @param {pseudo} top (string)
 * @param {pseudo} right (string)
 * @param {pseudo} bottom (string)
 * @param {pseudo} left (string)
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * A fab has an icon
 *
 * @usage.examples.Icon
 * aire-fab(icon="fa fa-pencil")
 *
 * @section.style
 * @style.title
 * Style
 * @style.description
 * Fabs have four styling options: default, primary, secondary, danger.
 *
 * @style.examples.Styles
 * aire-fab(icon="fa fa-pencil" default)
 * aire-fab(icon="fa fa-pencil" primary left="50%")
 * aire-fab(icon="fa fa-pencil" secondary left="100%")
 * aire-fab(icon="fa fa-pencil" danger left="25%")
 *
 * @section.position
 * @position.title
 * Position
 * @position.description
 * Fabs are arranged on the page by passing in arguments for each edge. If an edge is not set, its position is auto.
 *
 * @position.examples.Position
 * aire-fab(icon="fa fa-pencil" top="50px")
 * aire-fab(icon="fa fa-pencil" left="50px")
 * aire-fab(icon="fa fa-pencil" right="50px")
 * aire-fab(icon="fa fa-pencil" bottom="50px")
 *
 */
@inject(DOM.Element)
@customElement('aire-fab')
export class AireFab extends AireBaseButton {

  style     : string = "";

  static readonly edges = ["top", "right", "bottom", "left"];

  constructor(element: Element) {
    super(element);
    this.style = AireFab.edges.map((edge) => {
        return `${edge}: ${element.getAttribute(edge) || "auto"}`;
    }).join('; ');
  }

  attached() {
      super.attached();
  }
}