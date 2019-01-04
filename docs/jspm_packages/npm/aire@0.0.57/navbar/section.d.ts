/**
 * The navbar-section aligns and organizes navbar items
 *
 * @component navbar-section
 *
 * @param {pseudo} left
 * @param {pseudo} right
 * @param {pseudo} center
 *
 * @section.usage
 * @usage.title
 * Usage
 *
 * @usage.description
 * A navbar-section is a slot that can be left, right or center.
 *
 * @usage.examples.Left
 * aire-navbar
 *  navbar-section(left)
 *    navbar-item Left
 *
 * @usage.examples.Right
 * aire-navbar
 *  navbar-section(right)
 *    navbar-item Center
 *
 * @usage.examples.Center
 * aire-navbar
 *  navbar-section(center)
 *    navbar-item Center
 *
 * @usage.examples.Multiple
 * aire-navbar
 *  navbar-section(left)
 *    navbar-item Left
 *  navbar-section(center)
 *    navbar-item Center
 *  navbar-section(right)
 *    navbar-item right
 *
 */
export declare class AireNavbarSection {
    private el;
    constructor(el: Element);
    attached(): void;
}
