import {bindable, containerless, customElement} from "aurelia-framework";


/**
 * The aire-icon is a an easy way to treat icon classes and images the same way.
 *
 * @component icon
 *
 *
 * @param {bindable} icon (string)
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * An icon takes an icon as a string, and determines whether it should be a span with that class or an img with that src accordingly.
 *
 * @usage.examples.Icon_Font
 * aire-icon(icon="fa fa-pencil")
 *
 * @usage.examples.Image
 * aire-icon(icon="assets/icons/sunshower.svg")
 */
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
        if (this.icon && (this.icon.indexOf('svg+xml') > -1 || this.icon.indexOf('.') > -1)) {
            this.src = this.icon;
        } else {
            this.class = this.icon;
        }
    }

}