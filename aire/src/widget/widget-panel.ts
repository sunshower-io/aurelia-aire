import {
  autoinject,
  customElement,
  TemplatingEngine
} from 'aurelia-framework';

@autoinject
@customElement('aire-widget-panel')
export class AireWidgetPanel {

  element: HTMLDivElement;
  constructor(readonly engine: TemplatingEngine) {

  }

  attached() {
    let div = document.createElement('div');
    div.innerHTML = '<aire-card default padding hover title="hello world"></aire-card>';
    this.engine.enhance({
      element: div,
      bindingContext:{}
    });
    this.element.appendChild(div);

  }
}