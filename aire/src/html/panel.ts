import {
  bindable,
  autoinject,
  customElement
}                   from 'aurelia-framework';
import {HttpClient} from "aurelia-fetch-client";



@autoinject
@customElement('aire-html-panel')
export class AireHtmlPanel {
  @bindable
  url: string;

  private readonly element:HTMLIFrameElement;

  private loading: boolean;

  constructor(readonly client: HttpClient) {

  }


  async attached() {
    this.loading = true;
    let page = await this.client.fetch(this.url),
      data = await page.text();
    this.element.srcdoc = data;
  }

}