export declare class AireTable {
    private element;
    table: HTMLElement;
    header: boolean;
    footer: boolean;
    caption: string;
    columns: {
        name: string;
        key: string;
    }[];
    rows: any[];
    constructor(element: Element);
    attached(): void;
}
