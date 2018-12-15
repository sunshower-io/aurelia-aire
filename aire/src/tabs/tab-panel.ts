import {
  children,
  customElement
} from 'aurelia-framework';

import * as UIkit from 'uikit';
import {AireTab}  from "aire/tabs/tab";
import {TabPanel} from "uikit";

import {Aire}     from 'aire/core/application';
import {getClass} from "aire/core/lang";

@customElement('aire-tab-panel')
export class AireTabPanel {



  private panel: TabPanel;
  private element: HTMLElement;
  private container: HTMLDivElement;

  @children('aire-tab')
  private children: AireTab[];

  private activeTab: AireTab;



  private cid = Aire.id;

  attached() : void {
    this.panel = UIkit.tab(this.element);
    console.log(this.cid);
    Aire.listen(this.container, 'beforeshow', this.beforeShow.bind(this));
  }

  public get active() : AireTab {
    return this.activeTab;
  }


  private beforeShow(a: CustomEvent) {
    let source = a.srcElement,
      target = a.target,
      children = this.children,
      sourceTab : AireTab,
      targetTab : AireTab;

    for(let c of children) {
      if(c.el === source) {
        sourceTab = c;
      }
      if(c.el === target) {
        targetTab = c;
      }
    }
    this.activeTab = targetTab;


    if(sourceTab) {
      sourceTab.deactivate(a);
    }

    if(targetTab) {
      targetTab.activate(a);
    }
  }


}