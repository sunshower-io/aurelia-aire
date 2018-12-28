import {bindable, customElement, inject} from "aurelia-framework";
import {dom} from "aire/core/dom";


/**
 * The aire-tile is a freaking awesome little tile with four background options and three padding options.
 *
 * @component button
 *
 *
 * @param {pseudo} default
 * @param {pseudo} primary
 * @param {pseudo} secondary
 * @param {pseudo} muted
 * @param {pseudo} no padding
 * @param {pseudo} small padding
 * @param {pseudo} large padding
 *
 * @asection.usage
 * @usage.title
 * Usage
 * @usage.description
 * A tile can have one of four backgrounds and three padding options.
 *
 * @usage.examples.Tile
 * aire-tile(label="I am a tile.")
 *
 * @section.style
 * @style.title
 * Style
 * @style.description
 * Tiles have several styling options--default, primary, secondary, or muted--and three padding options: none, small, or large.
 *
 * @usage.examples.Styles
 * p
 * aire-tile(label="Default" default)
 * p
 * aire-tile(label="Muted" muted)
 * p
 * aire-tile(label="Primary" primary)
 * p
 * aire-tile(label="Secondary" secondary)
 * p
 * aire-tile(label="No Padding" padding-remove)
 * p
 * aire-tile(label="Small Padding" padding-small)
 * p
 * aire-tile(label="Large Padding" padding-large)
 *
 */




@inject(Element)
@customElement('aire-tile')
export class AireTile {
    div: HTMLElement;



    constructor(private element: Element) {

    }
    attached() {
        dom.decorateTo(this.element, this.div, "default", "uk-tile-default");
        dom.decorateTo(this.element, this.div, "muted", "uk-tile-muted");
        dom.decorateTo(this.element, this.div, "primary", "uk-tile-primary");
        dom.decorateTo(this.element, this.div, "secondary", "uk-tile-secondary");
        dom.decorateTo(this.element, this.div, "padding-remove", "uk-padding-remove");
        dom.decorateTo(this.element, this.div, "padding-small", "uk-padding-small");
        dom.decorateTo(this.element, this.div, "padding-large", "uk-padding-large");
    }
}

