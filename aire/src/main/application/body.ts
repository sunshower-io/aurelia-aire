import {
  containerless,
  customElement,
  bindable,
  autoinject,
  bindingMode
}                        from "aurelia-framework";
import {AireElement}     from "aire/core/widget";
import {Id}              from "aire/core/dom";

@autoinject
@containerless
@customElement('aire-body')
export class AireBody extends AireElement {

  @Id
  private bodyId: string;

  @bindable({defaultBindingMode: bindingMode.toView})
  public element: HTMLDivElement;

  constructor() {
    super("Aire:application:body", null, '.aire-body-container');
  }



}