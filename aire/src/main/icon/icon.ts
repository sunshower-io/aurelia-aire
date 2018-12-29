import {bindable, containerless, customElement} from "aurelia-framework";


/**
 * The aire-icon is a an easy way to treat icon classes and images the same way.
 *
 * @component icon
 *
 *
 * @param {bindable} icon (string)
 * @param {bindable} classes (string)
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * An icon takes an icon as a string, and determines whether it should be a span with that class or an img with that src accordingly. You can also pass in a class to affect an icon's style.
 *
 * @usage.examples.Icon_Font
 * aire-icon(icon="fa fa-pencil")
 *
 * @usage.examples.Image
 * aire-icon(icon="assets/icons/sunshower.svg")
 *
 * @usage.examples.Icon_Font_With_Class
 * aire-icon(icon="fa fa-pencil" class="uk-float-right uk-icon-button")
 *
 */
@containerless
@customElement('aire-icon')
export class AireIcon {

    class   : string;

    src     : string;

    @bindable
    icon    : string;

    @bindable
    classes : string = "";

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