import {
  children,
  customElement
} from 'aurelia-framework';

import * as UIkit from 'uikit';
import {AireTab}  from "aire/tabs/tab";

@customElement('aire-tab-panel')
export class AireTabPanel {



  private element: HTMLElement;

  @children('aire-tab')
  private tabs: AireTab[];

  attached() : void {
    UIkit.tab(this.element);
    console.log("Shit", this.tabs);
  }
}