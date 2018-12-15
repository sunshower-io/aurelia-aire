import {
  customElement
} from 'aurelia-framework';

import * as UIkit from 'uikit';

@customElement('aire-tab-panel')
export class AireTabPanel {



  private element: HTMLElement;

  attached() : void {
    UIkit.tab(this.element);
    console.log("Shit");
  }
}