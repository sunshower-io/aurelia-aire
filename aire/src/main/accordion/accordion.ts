import {bindable, customElement, viewResources} from "aurelia-framework";
import * as UIkit from "uikit";
import {Accordion}  from "uikit";

@customElement('aire-accordion')
@viewResources("./accordion-item")
export class AireAccordion {

    @bindable
    animated   : boolean = true;

    @bindable
    collapsible : boolean = true;

    @bindable
    duration    : number = 200;

    @bindable
    multiple    : boolean;

    @bindable
    transition  : string = 'ease';

    accordion   : Accordion;

    element     : HTMLElement;

    constructor() {

    }

    attached() {
        let options = {
            animation: this.animated,
            collapsible: this.collapsible,
            duration: this.duration,
            multiple: this.multiple,
            transition: this.transition
        };
        this.accordion = UIkit.accordion(this.element, options);
    }

}