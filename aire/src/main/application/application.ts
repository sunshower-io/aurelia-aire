import {
  child,
  autoinject,
  customElement,
}                    from "aurelia-framework";
import {
  AireHeader
}  from "aire/application/header";
import {
  AireElement
} from "aire/core/widget";

@autoinject
@customElement('aire-application')
export class AireApplication extends AireElement {

  @child('.aire-header')
  private header: AireHeader;

  constructor(el: Element) {
    super('AireApplication', el, el);
  }


  attached() : void {
    super.attached();
    this.log.warn("GOT", this.header);
  }

}