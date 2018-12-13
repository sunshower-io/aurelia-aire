import {bindable, customElement, inject}      from "aurelia-framework";

@inject(Element)
@customElement('aire-tooltip')
export class AireTooltip {

    @bindable
    style       : string;

  constructor(private element: Element) {
      let mode = element.getAttribute("mode"),
          position = element.getAttribute("position");
      this.style = `${mode ? 'mode: ' + mode : ''}${mode && position ? '; ' : ''}${position ? 'position: ' + position : ''}`;
      //TODO animate based on position?
  }
}