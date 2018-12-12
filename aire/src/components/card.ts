import {bindable}      from "aurelia-framework";
import {autoinject}    from "aurelia-dependency-injection";
import {customElement} from "aurelia-templating";
import * as UIkit from "uikit";


@customElement('aire-card')
export class Card {
  element: HTMLElement;

  @bindable
  style: String = "none";

  constructor(element: Element) {
    if (element.hasAttribute("style") || element.hasAttribute("style.bind")) {
      let tempStyle = "";
      //TODO assign to style
    }
  }
  attached() {

  }
}