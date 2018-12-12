import {autoinject}    from "aurelia-dependency-injection";
import {customElement} from "aurelia-templating";
import * as UIkit from "uikit";


@customElement('aire-sidebar')
export class Sidebar {
  element: HTMLElement;
  constructor() {

  }
  attached() {
    UIkit.offcanvas(this.element).show();
  }
}