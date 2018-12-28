import {bindable, customElement, inject} from "aurelia-framework";
import {dom} from "aire/core/dom";


/**
 * The aire-tile has four background options and three padding options.
 *
 * @component Tile
 *
 *
 * @param {pseudo} default
 * @param {pseudo} primary
 * @param {pseudo} secondary
 * @param {pseudo} muted
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * A tile can have one of four backgrounds and three padding options.
 *
 * @usage.examples.Tile
 * aire-tile(default)
 *  p default
 * aire-tile(muted)
 *  p muted
 * aire-tile(primary)
 *  p primary
 * aire-tile(secondary)
 *  p secondary
 *
 * @section.style
 * @style.title
 * Style
 * @style.description
 * Tiles have several styling options--default, primary, secondary, or muted--and three padding options: none, small, or large.
 *
 * @style.examples.Styles
 * aire-tile(padding-remove primary)
 *  p removed padding
 * aire-tile(padding-small muted)
 *  p small padding
 * aire-tile(padding-large secondary)
 *  p large padding
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

