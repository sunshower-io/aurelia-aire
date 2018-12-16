import {customElement, inject}      from "aurelia-framework";
import {AireFormElement} from "./element";

@inject(Element)
@customElement('aire-select')
export class AireSelect extends AireFormElement {

    options     : {label: string, value: string}[];

    constructor(element: Element) {
        super(element);
        let data = JSON.parse(element.getAttribute("data"));
        this.options = Array.isArray(data) ? data : [data]; //catches single instance non-iterable
    }
}