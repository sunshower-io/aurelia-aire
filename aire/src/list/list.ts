import {bindable, customElement, inject}      from "aurelia-framework";
import {dom} from "src/core";

@inject(Element)
@customElement('aire-list')
export class AireList {
    ul: HTMLElement;

    @ bindable

    lis     : string[];


    constructor(private element: Element){

    }
    attached() {
        dom.decorateTo(this.element, this.ul, "divider", "uk-list-bullet");
        dom.decorateTo(this.element, this.ul, "striped", "uk-list-divider");
        dom.decorateTo(this.element, this.ul, "hover", "uk-list-striped");
        dom.decorateTo(this.element, this.ul, "justify", "uk-list-large");
    }
}
