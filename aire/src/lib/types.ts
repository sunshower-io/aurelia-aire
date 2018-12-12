

import {parseBoolean} from "aire/lib/lang";

export class Value<T> {

    public value: T;
    public type:string;
    
    constructor(obj:any) {
        if(obj) {
            Object.assign(this, obj);
        }
    }
}

export class BooleanValue extends Value<boolean> {
    
    constructor(obj?: any) {
        super(obj);
        if(obj) {
            this.value = parseBoolean(obj.value);
        }
    }
    
    
}