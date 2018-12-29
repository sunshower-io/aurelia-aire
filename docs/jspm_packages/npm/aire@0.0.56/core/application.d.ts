import { Logger } from 'aurelia-logging';
export interface UIFramework {
    on(component: any, event: string, el: string | number | HTMLElement, handler: any): any;
}
export declare class Aire {
    static logger: Logger;
    constructor();
    static initialize(framework: UIFramework): void;
    static readonly framework: UIFramework;
    private static idGen;
    private static instance;
    private static _framework;
    static readonly id: string;
    static getInstance(): Aire;
}
export declare type Listener<T> = (a: T) => void;
export declare module Aire {
    function listen<T>(element: Element, event: string, listener: Listener<T>): void;
    function invokeLifecycleOnChildren(el: Element, lifecycleFunction: string): void;
    function invokeLifecycle(str: string, vm: any): void;
}
