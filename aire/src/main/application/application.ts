import {
  child,
  autoinject,
  customElement,
}                 from "aurelia-framework";
import {
  AireHeader
}                 from "aire/application/header";
import {
  AireElement
}                 from "aire/core/widget";
import {AireBody} from "aire/application/body";

@autoinject
@customElement('aire-application')
export class AireApplication extends AireElement {

  @child('.aire-header')
  private header : AireHeader;

  @child('.aire-body')
  private body : AireBody;

  constructor(el : Element) {
    super('AireApplication', el, el);
  }



}