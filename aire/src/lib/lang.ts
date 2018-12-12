export * from "aire/lib/uuid";
export * from "aire/lib/types";

export const range = (start, end) =>
    Array.from({length: (end - start)}, (v, k) => k + start);

export type Class<T> = {new(...args:any[]) : T};

export function getClass<T>(t:T) : Class<T> {
    let a = t.constructor;
    return <Class<T>> a;
}


const falsy = /^(?:f(?:alse)?|no?|0+)$/i;
export const parseBoolean: (o: any) => boolean = (val) => {
    return !falsy.test(val) && !!val;
};

export interface Serializable {
    toJson(): string;
}


export module Types {
    export const Identifier = 'io.sunshower.sdk.lang.IdentifierElement';
}

export interface Identifier {
    type: string;
    value: string;
}


export interface LoadingListener {
    onLoadingStart();
    
    onLoadingFinished();
    
    onLoadError(e);
}
