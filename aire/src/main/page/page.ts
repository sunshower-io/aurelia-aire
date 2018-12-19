import {
  bindable,
  customElement
}            from 'aurelia-framework';
import {dom} from "aire/core/dom";


@customElement('aire-page')
export class AirePage {
  @bindable public loading : boolean = true;

  constructor(readonly el : Element) {
    dom.decorate(el, 'padded');
  }

}