import {bindable, customElement, inject}      from "aurelia-framework";
import {dom} from "aire/core";

@inject(Element)
@customElement('aire-table')
export class AireTable {

    @bindable
    table       : HTMLElement;

    @bindable
    header      : boolean;

    @bindable
    footer      : boolean;

    @bindable
    caption     : string;

    @bindable
    columns     : {name: string, key: string}[];

    @bindable
    rows        : {}[];

    constructor(private element: Element) {
        this.header = element.hasAttribute("header");
        this.footer = element.hasAttribute("footer");
        this.caption = element.getAttribute("caption");
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