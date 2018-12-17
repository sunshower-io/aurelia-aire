export function Enum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

export function Mixin(baseCtors: Function[]) {
  return function(derivedCtor: Function) {
    baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      });
    });
  };
}


export type Class<T> = { new (...args: any[]): T };

export function getClass<T>(t: T): Class<T> {
  let a = t.constructor;
  return <Class<T>>a;
}

const falsy = /^(?:f(?:alse)?|no?|0+)$/i;
export const parseBoolean: (o: any) => boolean = val => {
  return !falsy.test(val) && !!val;
};

export function isFalse(a: any) {
  return !parseBoolean(a);
}

