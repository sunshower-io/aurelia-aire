/**
 * The aire-offcanvas is a sidebar that slides on and off the page
 *
 *
 * @param {bindable} open
 * @param {bindable} parent
 * @param {pseudo} push
 * @param {pseudo} mode
 * @param {pseudo} flip
 * @param {pseudo} overlay
 * @param {pseudo} esc-close
 * @param {pseudo} bg-close
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * An off-canvas has a slot for all of its content, and can be open by default
 *
 * @usage.examples.Open
 * aire-offcanvas(open)
 *  p Offcanvas Content
 *
 * @section.parent
 * @parent.title
 * Parent
 * @parent.description
 * By default, the offcanvas takes up the entire height of the page, but in some cases (as with a navbar) this might not be desirable. You can specify a parent and tell the offcanvas to `push` to push it down.
 *
 * @parent.examples.Pushing_From_Parent
 * aire-navbar
 * section#pushingFromParent
 *  aire-offcanvas(parent="#pushingFromParent" push)
 *
 */
export declare class AireOffCanvas {
    private el;
    open: boolean;
    element: HTMLElement;
    private parent;
    private offcanvas;
    style: string;
    constructor(el: Element);
    activate(): void;
    private resolveParentFor;
    attached(): void;
    toggle(): void;
    show(): void;
    hide(): void;
}
