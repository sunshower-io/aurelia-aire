import {containerless, customElement} from "aurelia-templating";
import {AireElement}                  from "aire/core/widget";

@containerless
@customElement('aire-header')
export class AireHeader extends AireElement {


  constructor() {
    super('AireHeader', null, '.aire-header:first-child');
  }

}