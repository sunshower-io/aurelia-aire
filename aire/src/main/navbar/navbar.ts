import {customElement, viewResources} from "aurelia-framework";
import * as UIkit                     from "uikit";
import {dom} from "aire/core";


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


    // * @section.sticky
    // * @sticky.title
    // * Sticky Navbar
    // *
    // * @sticky.description
    // * To keep your navbar fixed to the top of the page instead of having it scroll out, make it `sticky`
    // *
    // * @sticky.examples.Sticky
    // * aire-navbar(sticky)
    // *  navbar-section(center)
    // *    navbar-item Sticky Navbar


@customElement("aire-navbar")
@viewResources("./item", "./section")
export class AireNavbar {

  private readonly element : Element;

  constructor(private el: Element) {

  }

  attached() : void {
    dom.decorateTo(this.el, this.element, "sticky", "uk-navbar-sticky");
    dom.decorateTo(this.el, this.element, "transparent", "uk-navbar-transparent");
    dom.decorateTo(this.el, this.element, "dark", "uk-dark");
    dom.decorateTo(this.el, this.element, "light", "uk-light");
    UIkit.navbar(this.element);
  }

}
