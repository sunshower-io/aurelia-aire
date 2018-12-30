import { AireBaseButton } from "aire/button/basebutton";
/**
 * The aire-button is a button element with some special styling and an optional icon and text
 *
 * @component button
 *
 *
 * @param {bindable} label (string)
 * @param {bindable} icon (string)
 * @param {pseudo} default
 * @param {pseudo} primary
 * @param {pseudo} secondary
 * @param {pseudo} danger
 * @param {pseudo} text
 * @param {pseudo} link
 * @param {pseudo} small
 * @param {pseudo} large
 * @param {pseudo} square
 * @param {pseudo} full
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * A button can have a label, an icon, or both
 *
 * @usage.examples.Label
 *  aire-button(label="Labeled Button" default)
 *
 * @usage.examples.Icon
 * aire-button(icon="fa fa-pencil" default)
 *
 * @usage.examples.Label_And_Icon
 * aire-button(label="Edit" icon="fa fa-pencil" default)
 *
 * @section.style
 * @style.title
 * Style
 * @style.description
 * Buttons have six styling options: default, primary, secondary, danger, text and link. They also have two size options (small and large) and two width options (square and full).
 *
 * @style.examples.Styles
 * p
 *  aire-button(label="Default" default)
 * p
 *  aire-button(label="Primary" primary)
 * p
 *  aire-button(label="Secondary" secondary)
 * p
 *  aire-button(label="Danger" danger)
 * p
 *  aire-button(label="Text" text)
 * p
 *  aire-button(label="Link" link)
 *
 * @style.examples.Sizes
 * p
 *  aire-button(label="Small" small default)
 * p
 *  aire-button(label="Large" large default)
 * p
 *  aire-button(label="S" square default)
 * p
 *  aire-button(label="Full" full default)
 *
 */
export declare class AireButton extends AireBaseButton {
    label: string;
    type: string;
    href: string;
    target: string;
    constructor(element: Element);
    attached(): void;
}
