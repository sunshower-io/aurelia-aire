import {customElement, bindable, inject} from "aurelia-framework";
import * as UIkit                        from "uikit";
import {OffCanvas}                       from "uikit";
import {DOM} from 'aurelia-pal';
import {AireElement} from "aire/core/widget";

@inject(DOM.Element)
@customElement('aire-offcanvas')
export class AireOffCanvas extends AireElement {

    @bindable
    open : boolean;

    element : HTMLElement;

    private offcanvas : OffCanvas;

    style : string;

    constructor(el : Element) {
        super('AireOffcanvas', el, el.getAttribute("host"))
    }

    attached() {
        let options = {
            mode        : this.el.getAttribute("mode") || "slide",
            flip        : this.el.hasAttribute("flip"),
            overlay     : this.el.hasAttribute("overlay"),
            'esc-close' : this.el.hasAttribute("esc-close") || true,
            'bg-close'  : this.el.hasAttribute("bg-close") || true
        };

        if (this.host != this.el) {
            let container = this.host;

            if (container) {
                container.classList.add('uk-offcanvas-container');

                if (this.el.hasAttribute("push")) {
                    this.style = `top: ${(container as HTMLElement).offsetTop}px`;
                }

                options['container'] = this.hostPath();
            }
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