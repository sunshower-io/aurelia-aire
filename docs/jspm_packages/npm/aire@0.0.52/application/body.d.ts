import { AireElement } from "aire/core/widget";
import { EventAggregator } from 'aurelia-event-aggregator';
export declare class AireBody extends AireElement {
    readonly bus: EventAggregator;
    loading: boolean;
    debounce: boolean;
    wait: number;
    private bodyId;
    element: HTMLDivElement;
    constructor(bus: EventAggregator);
    bind(): void;
    unbind(): void;
}
