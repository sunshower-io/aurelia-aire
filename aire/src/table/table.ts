import {bindable, customElement, inject}      from "aurelia-framework";
import {dom} from "aire/core";

@inject(Element)
@customElement('aire-table')
export class AireTable {

    table       : HTMLElement;

    header      : boolean;

    footer      : boolean;

    @bindable
    caption     : string;

    columns     : {name: string, key: string}[];

    rows        : {}[];

    constructor(private element: Element) {
        this.header = element.hasAttribute("header");
        this.footer = element.hasAttribute("footer");
        let data = JSON.parse(element.getAttribute("data"));
        this.columns = data.columns;
        this.rows = data.rows;
    }

    attached() {
        dom.decorateTo(this.element, this.table, "divider", "uk-table-divider");
        dom.decorateTo(this.element, this.table, "striped", "uk-table-striped");
        dom.decorateTo(this.element, this.table, "hover", "uk-table-hover");
        dom.decorateTo(this.element, this.table, "justify", "uk-table-justify");
        dom.decorateTo(this.element, this.table, "middle", "uk-table-middle");
    }
}