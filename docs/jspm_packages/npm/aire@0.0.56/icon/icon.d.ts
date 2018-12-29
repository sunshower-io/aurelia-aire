/**
 * The aire-icon is a an easy way to treat icon classes and images the same way.
 *
 * @component icon
 *
 *
 * @param {bindable} icon (string)
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * An icon takes an icon as a string, and determines whether it should be a span with that class or an img with that src accordingly.
 *
 * @usage.examples.Icon_Font
 * aire-icon(icon="fa fa-pencil")
 *
 * @usage.examples.Image
 * aire-icon(icon="assets/icons/sunshower.svg")
 */
export declare class AireIcon {
    class: string;
    src: string;
    icon: string;
    constructor();
    bind(): void;
}
