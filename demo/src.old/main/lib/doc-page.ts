import {
  viewResources,
  inject
}                                     from 'aurelia-framework';
import {HttpClient}                   from 'aurelia-fetch-client';
import * as help                      from './help.json!text';
import {activationStrategy, NavModel} from "aurelia-router";

@inject(HttpClient)
@viewResources('./component')
export class DocPage {


  loading : boolean;
  component : any;


  constructor(readonly client : HttpClient) {

  }


  async activate(params : any, r : NavModel) {
    this.loading = true;
    let settings = r.settings,
      directory = settings.directory,
      component = settings.component,
      resp = await this.client.fetch(`dist/${directory}/${component}.comp`),
      js = await resp.json();
    this.component = js;
    this.loading = false;
  }

  attached() : void {
  }

  determineActivationStrategy() {
    return activationStrategy.replace;
  }
}