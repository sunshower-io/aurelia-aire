import {
  bindable,
  inject,
  customElement
} from 'aurelia-framework';

import {NavModel, Router} from 'aurelia-router';
import {EventAggregator}  from 'aurelia-event-aggregator';
import {Events}           from "aire/events";
import {dom}              from "aire/core";


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
@inject(EventAggregator, Element)
@customElement('aire-nav')
export class AireNav {

  @bindable
  private router : Router;

  @bindable
  normalizeTitle : (n : NavModel) => string;

  ul : HTMLElement;

  constructor(readonly bus : EventAggregator, private element : Element) {

  }

  protected navigation() : NavModel[] {
    if (this.router) {
      let nav = this.router.navigation,
        current = new Map<string, NavModel>();
      for (let n of nav) {
        current.set(n.config.title, n);
      }
      return Array.from(current.values());
    } else {
      return [];
    }
  }

  fire() {
    this.bus.publish(Events.NavigationEvent.ITEM_CLICKED, {});
    return true;
  }


  attached() {
    dom.decorateTo(this.element, this.ul, "default", "uk-nav-default");
    dom.decorateTo(this.element, this.ul, "primary", "uk-nav-primary");
    dom.decorateTo(this.element, this.ul, "center", "uk-nav-center");
  }

}