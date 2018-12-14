import {customElement} from "aurelia-framework";
import * as UIkit from "uikit";


@customElement('aire-offcanvas')
export class Offcanvas {
  element: HTMLElement;
  constructor() {

  }
  attached() {
    // UIkit.offcanvas(this.element).show();
  }
}