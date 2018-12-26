import {bindable, customElement, inject}      from "aurelia-framework";
import {dom} from "src/core";

@inject(Element)
@customElement('aire-list')
export class AireList {
    ul: HTMLElement;

    lis     : string[];


    constructor(private element: Element){

    }
    attached() {
        dom.decorateTo(this.element, this.ul, "divider", "uk-list-divider");
        dom.decorateTo(this.element, this.ul, "bullet", "uk-list-bullet");
        dom.decorateTo(this.element, this.ul, "striped", "uk-list-striped");
        dom.decorateTo(this.element, this.ul, "large", "uk-list-large");
    }
}
