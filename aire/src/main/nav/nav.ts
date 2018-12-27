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
 * this is a cool nav component
 *
 * what do you think?
 *
 * @component nav
 *
 * @section.usage
 *
 * @usage.title Usage
 * @usage.description
 *  This is a cool bean
 *  #whatever _whatever_
 *
 * @usage.examples.Router
 *  aire-nav(router.bind="router")
 *
 * @usage.examples.OtherRouter
 *  aire-nav(router.bind="router")
 *
 *
 * @param {bindable} router (aurelia-router)
 * @param {bindable} normalizeTitle (f: NavModel => string)
 *
 * @param {pseudo} whatever
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