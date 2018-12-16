import {customElement, bindable, inject} from "aurelia-framework";
import * as UIkit from "uikit";
import {OffCanvas} from "uikit";

@inject(Element)
@customElement('aire-offcanvas')
export class AireOffCanvas {

  @bindable
  private open: boolean;


  element: HTMLElement;
  offcanvas: OffCanvas;

  constructor(private el: Element) {

  }

  attached() {
    let options = {
        mode: this.el.getAttribute("mode") || "slide",
        flip: this.el.hasAttribute("flip"),
        overlay: this.el.hasAttribute("overlay"),
        'esc-close': this.el.hasAttribute("esc-close") || true,
        'bg-close': this.el.hasAttribute("bg-close") || true,
        container: this.el.getAttribute("container") || true
    };
    this.offcanvas = UIkit.offcanvas(this.element, options);
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

  hide() : void {
    this.offcanvas.hide();
    this.open = false;
  }
}