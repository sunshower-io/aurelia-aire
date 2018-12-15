import {customElement, bindable} from "aurelia-framework";
import * as UIkit from "uikit";
import {OffCanvas} from "uikit";


@customElement('aire-offcanvas')
export class AireOffCanvas {

  @bindable
      private open: boolean;


  element: HTMLElement;
  offcanvas: OffCanvas;
  constructor() {

  }
  attached() {
    this.offcanvas = UIkit.offcanvas(this.element);
    // UIkit.offcanvas(this.element).show();
  }

  toggle() : void {
    if(this.open) {
      this.offcanvas.hide();

    }
    else {
      this.offcanvas.show();
    }
    this.open = !this.open;
  }

  show() : void {
    this.offcanvas.show();
    this.open = true;
  }
}