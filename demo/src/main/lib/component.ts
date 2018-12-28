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

@autoinject
@viewResources('./component-section')
@customElement('component-panel')
export class ComponentPanel {

  @bindable
  private component:any;


  constructor(readonly client : HttpClient, readonly engine : TemplatingEngine) {

  }

  attached() : void {
  }

  props(tags:any[], type: string) {
    console.log(tags);
    return tags.filter(t => t.type === 'param').filter(t => t.types.indexOf(type) != -1);
  }
}
