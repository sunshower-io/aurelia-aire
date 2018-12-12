import {bindable, containerless, customElement, inject}      from "aurelia-framework";

@inject(Element)
@containerless
@customElement('aire-card')
export class AireCard {

  @bindable
  cardstyle  : string = "";

  @bindable
  cardhover     : string = "";

  @bindable
  cardpadding   : string = "";

  @bindable
  title     : string = "";

  constructor(public element: Element) {
      //todo handle .bind situations
    if (element.hasAttribute("modifier")) {
      let tempStyle = element.getAttribute("modifier");
      if (tempStyle == 'default' || tempStyle == 'primary' || tempStyle == 'secondary') {
          this.cardstyle = "uk-card-" + tempStyle;
      }
    }
    this.cardhover = element.hasAttribute("hover") ? "uk-card-hover" : "";

    if (element.hasAttribute("padding")) {
        this.cardpadding = 'uk-card-body';
        //TODO handle uk-card-small and uk-card-large
    }

    this.title = element.hasAttribute("title") ? element.getAttribute("title") : "";

    //TODO come back to handle header & footer
  }
  attached() {

  }
}