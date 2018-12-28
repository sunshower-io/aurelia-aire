import {bindable, customElement, inject}      from "aurelia-framework";
import {dom} from "aire/core";

/**
 * The aire-list is a list element that can create ordered and unordered lists in a variety of syles.
 *
 * @component list
 *
 *
 * @param {bindable} ordered
 * @param {bindable} items
 * @param {pseudo} divider
 * @param {pseudo} bullet
 * @param {pseudo} striped
 * @param {pseudo} large
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * A list can be ordered or unordered. It can contain bullets, dividing lines, and alternating stripes. It also has an option for extra space between items.
 *
 * @usage.examples.Ordered
 * aire-list(items="['item 1', 'item 2', 'item 3']" ordered)
 *
 * @usage.examples.Unordered
 * aire-list(items="['item 1', 'item 2', 'item 3']")
 *
 * @section.style
 * @style.title
 * Style
 * @style.description
 * A list can be ordered or unordered. It can contain bullets, dividing lines, and alternating stripes. It also has an option for extra space between items.
 *
 * @style.examples.Divider
 * aire-list(items="['item 1', 'item 2', 'item 3']" divider)
 *
 * @style.examples.Bullet
 * aire-list(items="['item 1', 'item 2', 'item 3']" bullet)
 *
 * @style.examples.Striped
 * aire-list(items="['item 1', 'item 2', 'item 3']" striped)
 *
 * @style.examples.Large
 * aire-list(items="['item 1', 'item 2', 'item 3']" large)
 *
 *
 */


@inject(Element)
@customElement('aire-list')
export class AireList {
    list: HTMLElement;

    @bindable
    items     : string[];

    @bindable
    ordered: boolean;

    constructor(private element: Element){


    }
    attached() {
        dom.decorateTo(this.element, this.list, "divider", "uk-list-divider");
        dom.decorateTo(this.element, this.list, "bullet", "uk-list-bullet");
        dom.decorateTo(this.element, this.list, "striped", "uk-list-striped");
        dom.decorateTo(this.element, this.list, "large", "uk-list-large");
    }
}
