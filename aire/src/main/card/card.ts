import {bindable}      from "aurelia-framework";
import {dom}    from "aire/core";

/**
 * A card is a layout box that can have different styles
 *
 * This is cool
 */
export class AireCard {

  /**
   // * @name aire-card
   // *
   // * @categories test, whatever, bean
   // * @description
   // *  aire-card is a wrapper around uikit-card
   // * @reference card
   // *
   // * @param {pseudo} default
   // * @param {pseudo} primary
   // * @param {pseudo} hover
   // *
   // * @param {bindable} title
   // *
   // * @example
   // *  aire-card(default primary title.bind="Hello")
   // */

  /**
   * @name aire-card
   *
   * @description
   *  aire-card is a wrapper around uikit-card
   * @reference card
   *
   * @param {pseudo} default
   * @param {pseudo} primary
   * @param {pseudo} hover
   *
   * @param {bindable} title
   *
   * @example [lang=pug,type=view]
   *  aire-card(default primary title.bind="Hello")
   * @example[lang=typescript,type=vm]
   *  export class Test {
 *  }
   *
   */
  card        : HTMLElement;

  @bindable
  title     : string;

  constructor(public element: Element) {

  }

  attached() {
      dom.decorateTo(this.element, this.card, "default", "uk-card-default");
      dom.decorateTo(this.element, this.card, "primary", "uk-card-primary");
      dom.decorateTo(this.element, this.card, "secondary", "uk-card-secondary");
      dom.decorateTo(this.element, this.card, "hover", "uk-card-hover");
      dom.decorateTo(this.element, this.card, "padding", "uk-card-body");
      dom.decorateTo(this.element, this.card, "padding-small", "uk-card-body");
      dom.decorateTo(this.element, this.card, "padding-small", "uk-card-small");
      dom.decorateTo(this.element, this.card, "padding-large", "uk-card-body");
      dom.decorateTo(this.element, this.card, "padding-large", "uk-card-large");

  }
}