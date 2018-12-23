import {bindable, customElement, inject}      from "aurelia-framework";
import {dom} from "aire/core";
import {DOM} from "aurelia-pal";

@inject(DOM.Element)
@customElement('aire-table')
export class AireTable {

    table       : HTMLElement;

    @bindable
    header      : boolean;

    @bindable
    footer      : boolean;

    @bindable
    caption     : string;

    columns     : {name: string, key: string}[];

    rows        : any[];

    constructor(private element: Element) {
        let data = JSON.parse(element.getAttribute("data"));
        if (data) {
            this.columns = data.columns;
            this.rows = data.rows;
        }
    }

    attached() {
        dom.decorateTo(this.element, this.table, "divider", "uk-table-divider");
        dom.decorateTo(this.element, this.table, "striped", "uk-table-striped");
        dom.decorateTo(this.element, this.table, "hover", "uk-table-hover");
        dom.decorateTo(this.element, this.table, "justify", "uk-table-justify");
        dom.decorateTo(this.element, this.table, "middle", "uk-table-middle");
    }
}