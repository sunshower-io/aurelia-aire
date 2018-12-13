import {containerless, customElement} from "aurelia-framework";

@containerless
@customElement('navbar-section')
export class AireNavbarSection {


  attached() {
    console.log("Coolbeans");
  }

}