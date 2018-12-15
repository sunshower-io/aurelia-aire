import {bindable, customElement, inject}      from "aurelia-framework";
import {dom} from "aire/core";

@inject(Element)
@customElement('aire-list')
export class AireList {
    ul: HTMLElement;

    constructor(private element: Element){

    }
}
