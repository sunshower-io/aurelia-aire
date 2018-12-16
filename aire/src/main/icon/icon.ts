import {bindable, customElement, inject} from "aurelia-framework";

@inject(Element)
@customElement('aire-icon')
export class AireIcon {

    class   : string;
    src     : string;

    @bindable
    icon    : string;

    constructor(private element: Element) {
        let icon = element.getAttribute("icon");
        if (icon.indexOf('svg+xml') > -1 || icon.indexOf('.') > -1) {
            this.src = icon;
        } else {
            this.class = icon;
        }
    }

}