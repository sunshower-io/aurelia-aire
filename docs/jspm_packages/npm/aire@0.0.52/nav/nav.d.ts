import { NavModel } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';
/**
 *
 * The aire-nav component is a styled list that takes a router to automatically lay out and link up navigation.
 *
 * @component nav

 * @param {bindable} router (aurelia-router)
 * @param {bindable} normalizeTitle (f: NavModel => string)
 *
 * @param {pseudo} default
 * @param {pseudo} primary
 * @param {pseudo} center
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * Bind a router to have aire-nav iterate over NavModels and list out elements. To change how the text displays, pass in a normalizeTitle function.
 *
 * @usage.examples.Router
 * aire-nav(router.bind="router")
 *
 * @section.style
 * @style.title
 * Style
 * @style.description
 * In addition to its relatively unstyled state, a nav can be made to be `default`, `primary` or `center`:
 *
 * @style.examples.Default
 * aire-nav(router.bind="router" default)
 *
 * @style.examples.Primary
 * aire-nav(router.bind="router" primary)
 *
 * @style.examples.Center
 * aire-nav(router.bind="router" center)
 *
 *
 */
export declare class AireNav {
    readonly bus: EventAggregator;
    private element;
    private router;
    normalizeTitle: (n: NavModel) => string;
    ul: HTMLElement;
    constructor(bus: EventAggregator, element: Element);
    protected navigation(): NavModel[];
    fire(): boolean;
    attached(): void;
}
