import {
  autoinject,
  bindable,
  customElement
} from 'aurelia-framework';

import {
  HttpClient
}    from "aurelia-fetch-client";

import {showdown} from 'showdown';


@autoinject
@customElement('html-panel')
export class HtmlPanel {
  private loading: boolean;
  private html: string;

  @bindable
  public url: string;

  constructor(readonly client: HttpClient) {

  }


  async attached() {
    let converter = new showdown.Converter();

    this.loading = true;
    let page = await this.client.fetch(this.url),
      data = await page.text();
    this.html = converter.makeHtml(data);
  }
}