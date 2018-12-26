import {
  autoinject,
  bindable,
  customElement,
  TemplatingEngine
} from 'aurelia-framework';

import {
  HttpClient
} from "aurelia-fetch-client";

import * as showdown from 'showdown';


@autoinject
@customElement('html-panel')
export class HtmlPanel {

  private html : string;
  private loading : boolean;
  private element : HTMLDivElement;

  @bindable
  public url : string;

  constructor(readonly client : HttpClient, readonly engine : TemplatingEngine) {

  }


  async activate() {
    let url = this.url,
      engine = this.engine;
    if (this.url.endsWith('example.html')) {
      let prefix = url.substr(0, url.lastIndexOf('example.html')),
        jsurl = `${prefix}example.js`,
        js = await this.client.fetch(jsurl),
        jstext = await js.text(),
        jsobj = eval(jstext),
        htmlresp = await this.client.fetch(url),
        htmltext = await htmlresp.text();
      setTimeout(() => {
        this.html = htmltext;

        // let targetel = document.createElement('div');
        // targetel.innerHTML = htmltext;
        //
        // engine.enhance({element : targetel, bindingContext : jsobj});
        // this.element.appendChild(targetel);
      }, 500);

    }

    // if(this.url.endsWith("example.html")) {
    //
    //   console.log("EX", this.url);
    // }
    // if(this.url.endsWith("example.html")) {
    //   console.log(await this.client.fetch(this.url));
    // }
    // if(this.url.endsWith("example.js")) {
    //   console.log(await)
    // }

    // let converter = new showdown.Converter();
    // let page = await this.client.fetch(this.url),
    //   data = await page.text();
    // this.html = converter.makeHtml(data);
  }
}