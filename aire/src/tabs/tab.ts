import {
  autoinject,
  bindable,
  customElement
}             from 'aurelia-framework';
import {Aire} from "aire/core/application";



@autoinject
@customElement('aire-tab')
export class AireTab {

  @bindable
  private title: string;

  public active: boolean;

  constructor(readonly el: Element) {

  }


  attached() : void {

  }


  activate(e: CustomEvent)  : void {

    Aire.invokeLifecycleOnChildren(this.el, 'activate');
  }

  deactivate(e: CustomEvent) {
    Aire.invokeLifecycleOnChildren(this.el, 'deactivate');
  }
}

