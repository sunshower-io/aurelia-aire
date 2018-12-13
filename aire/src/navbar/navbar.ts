import {customElement, viewResources} from "aurelia-framework";
import * as UIkit                     from "uikit";

@customElement("aire-navbar")
@viewResources("./item", "./section")
export class AireNavbar {

  private readonly element : Element;

  attached() : void {
    UIkit.navbar(this.element);
  }

}
