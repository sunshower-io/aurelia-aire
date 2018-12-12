import {autoinject}    from "aurelia-dependency-injection";
import {customElement} from "aurelia-templating";
import * as UIkit from "uikit";


@customElement('aire-offcanvas')
export class Offcanvas {
  element: HTMLElement;
  constructor() {

  }
  attached() {
    UIkit.offcanvas(this.element).show();
  }
}