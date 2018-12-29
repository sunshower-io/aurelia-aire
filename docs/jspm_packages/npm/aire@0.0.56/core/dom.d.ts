export declare const $: Document;
export declare namespace dom {
    function pathTo(hostOrSelector: string | Node): string;
    function $(s: string): Element;
    function isAncestor(test: Element, target: Element): boolean;
    function decorateTo(sourceEl: Element, el: Element, decoration: string, className?: string): void;
    function decorate(el: Element, decoration: string, className?: string): boolean;
}
export declare function Id(): (target: any, key: string) => void;
export declare function findParentByClass(el: Element, selectorClass: string): Element;
export declare function createEvent(name: string, value: any): Event;
