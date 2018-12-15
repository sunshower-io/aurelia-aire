import {
  children,
  bindable,
  customElement
} from 'aurelia-framework';

@customElement('aire-tab')
export class AireTab {

  @bindable
  private title: string;


  attached() : void {
    console.log("Got");
  }

}
