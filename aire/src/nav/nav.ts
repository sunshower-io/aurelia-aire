import {
  customElement,
  bindable
} from 'aurelia-framework';


import {NavModel, Router} from 'aurelia-router';


@customElement('aire-nav')
export class AireNav {

  @bindable
  private router: Router;

  protected navigation() : NavModel[] {
    let nav = this.router.navigation,
      current = new Map<string, NavModel>();
    for(let n of nav) {
      current.set(n.config.moduleId, n);
    }
    return Array.from(current.values());
  }

}