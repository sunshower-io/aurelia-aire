export declare class AireFormElement {
    private element;
    input: HTMLElement;
    container: HTMLElement;
    marker: HTMLLabelElement;
    label: string;
    value: any;
    danger: string;
    success: string;
    disabled: boolean;
    id: string;
    constructor(element: Element);
    attached(): void;
}
