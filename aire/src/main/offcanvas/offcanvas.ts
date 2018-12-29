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

/**
 * The aire-offcanvas is a sidebar that slides on and off the page
 *
 *
 * @param {bindable} open
 * @param {bindable} parent
 * @param {pseudo} push
 * @param {pseudo} mode
 * @param {pseudo} flip
 * @param {pseudo} overlay
 * @param {pseudo} esc-close
 * @param {pseudo} bg-close
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * An off-canvas has a slot for all of its content, and can be open by default
 *
 * @usage.examples.Open
 * aire-offcanvas(open)
 *  p Offcanvas Content
 *
 * @section.parent
 * @parent.title
 * Parent
 * @parent.description
 * By default, the offcanvas takes up the entire height of the page, but in some cases (as with a navbar) this might not be desirable. You can specify a parent and tell the offcanvas to `push` to push it down.
 *
 * @parent.examples.Pushing_From_Parent
 * aire-navbar
 * section#pushingFromParent
 *  aire-offcanvas(parent="#pushingFromParent" push)
 *
 */
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

    if (parent) {
        parent.classList.add('uk-offcanvas-container');
        if (this.el.hasAttribute("push")) {
            this.style = `top: ${(parent as HTMLElement).offsetTop}px`;
        }
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