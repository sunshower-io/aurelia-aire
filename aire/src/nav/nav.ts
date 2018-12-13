import {
  customElement,
  bindable
} from 'aurelia-framework';


import {Router} from 'aurelia-router';


@customElement('aire-nav')
export class AireNav {

  @bindable
  private router: Router;

}