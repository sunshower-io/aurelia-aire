import {customElement, bindable, inject} from "aurelia-framework";
import * as UIkit                        from "uikit";
import {OffCanvas}                       from "uikit";

@inject(Element)
@customElement('aire-offcanvas')
export class AireOffCanvas {

    @bindable
    open : boolean;

    @bindable
    host: HTMLElement; //TODO make this handle more inputs

    element : HTMLElement;

    private offcanvas : OffCanvas;

    style : string;

    constructor(private el : Element) {

    }

    attached() {
        let container = this.host.firstChild as HTMLElement;

        if (container) {
            container.classList.add('uk-offcanvas-container');

            if (this.el.hasAttribute("push")) {
                this.style = `top: ${container.offsetTop}px`;
            }
        }

        let options = {
            mode        : this.el.getAttribute("mode") || "slide",
            flip        : this.el.hasAttribute("flip"),
            overlay     : this.el.hasAttribute("overlay"),
            'esc-close' : this.el.hasAttribute("esc-close") || true,
            'bg-close'  : this.el.hasAttribute("bg-close") || true,
            container   : `#${container.id}`
        };

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