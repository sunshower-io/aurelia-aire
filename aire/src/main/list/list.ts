import {bindable, customElement, inject}      from "aurelia-framework";
import {dom} from "aire/core";

@inject(Element)
@customElement('aire-list')
export class AireList {
    list: HTMLElement;

    @bindable
    lis     : string[];

    @bindable
    ordered: boolean;

    constructor(private element: Element){


    }
    attached() {
        dom.decorateTo(this.element, this.list, "divider", "uk-list-divider");
        dom.decorateTo(this.element, this.list, "bullet", "uk-list-bullet");
        dom.decorateTo(this.element, this.list, "striped", "uk-list-striped");
        dom.decorateTo(this.element, this.list, "large", "uk-list-large");
    }
}
