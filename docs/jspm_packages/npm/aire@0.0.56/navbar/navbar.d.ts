/**
 * The aire-navbar is used to organize navigation and content across the top of a page
 *
 * @component navbar
 *
 * @param {pseudo} sticky
 * @param {pseudo} transparent
 * @param {pseudo} dark
 * @param {pseudo} light
 *
 * @section.usage
 * @usage.title
 * Usage
 *
 * @usage.description
 * A navbar has slots that contain sections and items to organize its content.
 *
 * @usage.examples.Simple_Navbar
 * aire-navbar
 *  navbar-section(center)
 *    navbar-item Hello
 *
 * @usage.examples.Split_Navbar
 * aire-navbar
 *  navbar-section(left)
 *    navbar-item Left
 *  navbar-section(center)
 *    navbar-item Center Logo
 *  navbar-section(right)
 *    navbar-item Right
 *
 *
 *
 * @section.style
 * @style.title
 * Styles
 *
 * @style.description
 * Depending upon what's behind your navbar, you might want to make it `transparent`, `light` or `dark`.
 *
 * @style.examples.Transparent
 * aire-navbar(transparent)
 *  navbar-section(center)
 *    navbar-item Transparent Navbar
 *
 * @style.examples.Light
 * aire-navbar(light)
 *  navbar-section(center)
 *    navbar-item Light Navbar
 *
 * @style.examples.Dark
 * aire-navbar(dark)
 *  navbar-section(center)
 *    navbar-item Dark Navbar
 */
export declare class AireNavbar {
    private el;
    private readonly element;
    constructor(el: Element);
    attached(): void;
}
