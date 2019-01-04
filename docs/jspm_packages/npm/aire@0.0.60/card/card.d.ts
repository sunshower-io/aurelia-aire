/**
 * A card is a layout box that can have different styles and include a header and footer.
 *
 * @component card
 *
 * @param {bindable} header (boolean)
 * @param {bindable} footer (boolean)
 * @param {pseudo} default
 * @param {pseudo} primary
 * @param {pseudo} secondary
 * @param {pseudo} hover
 * @param {pseudo} padding
 * @param {pseudo} padding-small
 * @param {pseudo} padding-large
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * A card has a default slot. To organize a card, you can provide a header and footer argument, as well as content for those slots.
 *
 * @usage.examples.Basic
 * aire-card(default)
 *  .uk-card-body Card content in a slot
 *
 * @usage.examples.Header
 * aire-card(header default)
 *  p(slot="header") A header
 *  .uk-card-body Card content in a slot
 *
 * @usage.examples.Footer
 * aire-card(footer default)
 *  .uk-card-body Card content in a slot
 *  p(slot="footer") A footer
 *
 *
 * @section.style
 * @style.title
 * Style
 * @style.description
 * Cards can be styled by passing a `default`, `primary`, `secondary` or `hover` argument.
 *
 * @style.examples.Styles
 * .uk-child-width-1-4.uk-grid
 *  aire-card(default)
 *      .uk-card-body Default
 *  aire-card(primary)
 *      .uk-card-body Primary
 *  aire-card(secondary)
 *      .uk-card-body Secondary
 *  aire-card(hover)
 *      .uk-card-body Hover
 *
 *
 * @section.padding
 * @padding.title
 * Padding
 * @padding.description
 * To adjust the amount of padding a card has, use `padding-small`, `padding` and `padding-large` -- by default, a card has no padding.
 *
 * @padding.examples.Padding
 * .uk-child-width-1-3.uk-grid
 *  aire-card(padding-small default)
 *      | A card with small padding
 *  aire-card(padding default)
 *      | A card with normal padding
 *  aire-card(padding-large default)
 *      | A card with large padding
 *
 *
 */
export declare class AireCard {
    private element;
    card: HTMLElement;
    header: boolean;
    footer: boolean;
    constructor(element: Element);
    attached(): void;
}
