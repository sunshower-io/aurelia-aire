import { Logger } from 'aurelia-logging';
export declare class AireElement {
    protected readonly id: string;
    protected readonly el: Element;
    protected readonly hostOrSelector?: string | Element;
    protected readonly log: Logger;
    protected _host: Element;
    constructor(id: string, el: Element, hostOrSelector?: string | Element);
    attached(): void;
    detached(): void;
    readonly host: Element;
    readonly height: number;
    readonly width: number;
}
