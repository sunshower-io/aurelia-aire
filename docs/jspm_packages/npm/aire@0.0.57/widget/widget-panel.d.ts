import { TemplatingEngine } from 'aurelia-framework';
export declare class AireWidgetPanel {
    readonly engine: TemplatingEngine;
    element: HTMLDivElement;
    constructor(engine: TemplatingEngine);
    attached(): void;
}
