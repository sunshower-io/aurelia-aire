export declare class Identifier {
    readonly id: string;
    constructor(id: string);
}
export declare namespace Identifier {
    function isIdentifier(key: string): boolean;
    function newId(): string;
}
