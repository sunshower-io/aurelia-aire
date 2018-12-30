export declare class AireTab {
    readonly el: Element;
    private title;
    active: boolean;
    constructor(el: Element);
    attached(): void;
    activate(e: CustomEvent): void;
    deactivate(e: CustomEvent): void;
}
