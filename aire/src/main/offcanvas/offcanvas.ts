import {
  customElement,
  bindable,
  inject,
  View
} from "aurelia-framework";
import * as UIkit                        from "uikit";
import {OffCanvas}                       from "uikit";
import {DOM}                             from 'aurelia-pal';
import {dom}                             from "aire/core/dom";

@inject(DOM.Element)
@customElement('aire-offcanvas')
export class AireOffCanvas {

  @bindable
  open : boolean;

  element : HTMLElement;

  @bindable
  private parent : any;

  private offcanvas : OffCanvas;

  style : string;

  constructor(private el : Element) {
  }

  activate() : void {
  }

  private resolveParentFor() : Element {
    let parent = this.parent;
    if (!parent) {
      return null;
    }
    if (typeof parent === 'string') {
      return dom.$(parent);
    }
    if(parent instanceof View) {
      return dom.$('#' + (parent as any).firstChild.id);
    }
    return parent;
  }


  attached() {

    let options = {
        mode        : this.el.getAttribute("mode") || "slide",
        flip        : this.el.hasAttribute("flip"),
        overlay     : this.el.hasAttribute("overlay"),
        'esc-close' : this.el.hasAttribute("esc-close") || true,
        'bg-close'  : this.el.hasAttribute("bg-close") || true
      },
      parent = this.resolveParentFor();

    if (parent !== this.el) {
      let container = parent;
      if (container) {
        container.classList.add('uk-offcanvas-container');
        if (this.el.hasAttribute("push")) {
          this.style = `top: ${(container as HTMLElement).offsetTop}px`;
        }
      }
    }
    if(parent) {
      options['container'] = dom.pathTo(parent);
    }

    this.offcanvas = UIkit.offcanvas(this.element, options);
  }

  toggle() : void {
    if (this.open) {
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