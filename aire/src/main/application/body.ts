import {
  containerless,
  customElement,
  bindable,
  autoinject,
  bindingMode
}                        from "aurelia-framework";
import {AireElement}     from "aire/core/widget";
import {Id}              from "aire/core/dom";

import {EventAggregator} from 'aurelia-event-aggregator';

@autoinject
@containerless
@customElement('aire-body')
export class AireBody extends AireElement {


  @bindable loading: boolean;
  @bindable debounce: boolean;

  @bindable wait: number;


  @Id()
  private bodyId: string;

  @bindable({defaultBindingMode: bindingMode.toView})
  public element: HTMLDivElement;

  constructor(readonly bus: EventAggregator) {
    super("Aire:application:body", null, '.aire-body');
  }


  bind() : void {

  }


  unbind() : void {

  }


}