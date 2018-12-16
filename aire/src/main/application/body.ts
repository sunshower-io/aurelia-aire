import {
  containerless,
  customElement,
  bindable,
  bindingMode
}             from "aurelia-framework";
import {Aire} from "aire/core/application";

@containerless
@customElement('aire-body')
export class AireBody {

  private bodyId: string = Aire.id;

  @bindable({defaultBindingMode: bindingMode.toView})
  public element: HTMLDivElement;


}