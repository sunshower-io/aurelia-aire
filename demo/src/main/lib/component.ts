import {
  autoinject,
  bindable,
  customElement,
  viewResources,
  TemplatingEngine
} from 'aurelia-framework';

import {
  HttpClient
} from "aurelia-fetch-client";

import * as showdown from 'showdown';




@autoinject
@viewResources('./component-section')
@customElement('component-panel')
export class ComponentPanel {

  @bindable
  private component:any;


  constructor(readonly client : HttpClient, readonly engine : TemplatingEngine) {

  }

  attached() : void {
    // console.log(prism);
    console.log(this.component);
  }

  props(tags:any[], type: string) {
    return tags.filter(t => t.type === 'param').filter(t => t.types.indexOf(type) != -1);
  }
}
