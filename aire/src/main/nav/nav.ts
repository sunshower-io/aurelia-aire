import {
  bindable,
  autoinject,
  customElement
} from 'aurelia-framework';

import {NavModel, Router} from 'aurelia-router';
import {EventAggregator}  from 'aurelia-event-aggregator';
import {Events}           from "aire/events";


@autoinject
@customElement('aire-nav')
export class AireNav {

  @bindable
  private router: Router;

  constructor(readonly bus: EventAggregator) {

  }

  protected navigation() : NavModel[] {
    let nav = this.router.navigation,
      current = new Map<string, NavModel>();
    for(let n of nav) {
      current.set(n.config.name, n);
    }
    return Array.from(current.values());
  }

  fire() {
    this.bus.publish(Events.NavigationEvent.ITEM_CLICKED, {});
    return true;
  }

}