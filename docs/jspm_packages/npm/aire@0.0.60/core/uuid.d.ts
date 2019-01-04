export declare class UUID {
    readonly value: string;
    constructor(value: string);
    static fromString(str: string): UUID;
    static random(): string;
    static randomBytes(): number[];
    static randomUUID(): UUID;
    static randomId(len: number): string;
    toString(): string;
}
