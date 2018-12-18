import {
  autoinject,
  customElement
}            from 'aurelia-framework';
import {dom} from "aire/core/dom";


@customElement('aire-page')
export class AirePage {

  constructor(readonly el: Element) {
    dom.decorate(el, 'padded');
  }

  private loading: boolean = true;

  attached() : void {
    setTimeout(()=> {
      this.loading = false;
    }, 1000);
  }


}