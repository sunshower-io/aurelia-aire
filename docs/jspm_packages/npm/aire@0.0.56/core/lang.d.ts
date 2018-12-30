export declare function Enum<T extends string>(o: Array<T>): {
    [K in T]: K;
};
export declare function Mixin(baseCtors: Function[]): (derivedCtor: Function) => void;
export declare type Class<T> = {
    new (...args: any[]): T;
};
export declare function getClass<T>(t: T): Class<T>;
export declare const parseBoolean: (o: any) => boolean;
export declare function isFalse(a: any): boolean;
