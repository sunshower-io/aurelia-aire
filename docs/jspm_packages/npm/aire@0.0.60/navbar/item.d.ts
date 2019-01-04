/**
 * The navbar-item is a link that goes inside a navbar-section.
 *
 * @component navbar-item
 *
 * @param {bindable} active
 * @param {bindable} icon
 * @param {bindable} href
 * @param {pseudo} large
 * @param {pseudo} medium
 * @param {pseudo} small
 * @param {pseudo} logo
 *
 */
export declare class AireNavbarItem {
    private readonly el;
    active: boolean;
    icon: string;
    href: string;
    private readonly element;
    constructor(el: Element);
    attached(): void;
}
