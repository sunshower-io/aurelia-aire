import {bindable, containerless, customElement} from "aurelia-framework";

@containerless
@customElement('aire-icon')
export class AireIcon {

    class   : string;
    src     : string;

    @bindable
    icon    : string;

    constructor() {

    }

    bind() {
        if (this.icon.indexOf('svg+xml') > -1 || this.icon.indexOf('.') > -1) {
            this.src = this.icon;
        } else {
            this.class = this.icon;
        }
    }

}