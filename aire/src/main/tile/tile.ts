import {bindable, customElement, inject} from "aurelia-framework";
import {dom} from "aire/core/dom";


/**
 * The aire-tile is a layout box that can easily be arranged next to another
 *
 * @component tile
 *
 *
 * @param {pseudo} default
 * @param {pseudo} primary
 * @param {pseudo} secondary
 * @param {pseudo} muted
 * @param {pseudo} padding-remove
 * @param {pseudo} padding-small
 * @param {pseudo} padding-large
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * A tile is a simple element that has a slot
 *
 * @usage.examples.Usage
 * aire-tile(muted)
 *  h6 This is a tile
 *  p It has a slot
 *
 *
 * @section.style
 * @style.title
 * Style
 * @style.description
 * A tile can have one of four backgrounds: `default`, `muted`, `primary` and `secondary`.
 *
 * @style.examples.Style
 * aire-tile(default)
 *  p default
 * aire-tile(muted)
 *  p muted
 * aire-tile(primary)
 *  p primary
 * aire-tile(secondary)
 *  p secondary
 *
 * @section.padding
 * @padding.title
 * Padding
 * @padding.description
 * Tiles have three padding options in addition to the default: none, small, or large.
 *
 * @padding.examples.Removed_Padding
 * aire-tile(padding-remove muted)
 *  p removed padding
 *
 * @padding.examples.Small_Padding
 * aire-tile(padding-small muted)
 *  p small padding
 *
 * @padding.examples.Large_Padding
 * aire-tile(padding-large muted)
 *  p large padding
 *
 */




@inject(Element)
@customElement('aire-tile')
export class AireTile {
    tile: HTMLElement;



    constructor(private element: Element) {

    }
    attached() {
        dom.decorateTo(this.element, this.tile, "default", "uk-tile-default");
        dom.decorateTo(this.element, this.tile, "muted", "uk-tile-muted");
        dom.decorateTo(this.element, this.tile, "primary", "uk-tile-primary");
        dom.decorateTo(this.element, this.tile, "secondary", "uk-tile-secondary");
        dom.decorateTo(this.element, this.tile, "padding-remove", "uk-padding-remove");
        dom.decorateTo(this.element, this.tile, "padding-small", "uk-padding-small");
        dom.decorateTo(this.element, this.tile, "padding-large", "uk-padding-large");
    }
}

