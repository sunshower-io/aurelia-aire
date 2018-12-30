import {child, customElement} from 'aurelia-framework';

import * as showdown from 'showdown';

@customElement("markdown-container")
export class MarkdownContainer {

  @child('p')
  private contents: HTMLParagraphElement;

  attached() : void {
    let converter = new showdown.Converter(),
      c = this.contents;
    c.innerHTML = converter.makeHtml(c.innerText);
  }
}