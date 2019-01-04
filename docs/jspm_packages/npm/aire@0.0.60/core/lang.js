"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Enum(o) {
    return o.reduce(function (res, key) {
        res[key] = key;
        return res;
    }, Object.create(null));
}
exports.Enum = Enum;
function Mixin(baseCtors) {
    return function (derivedCtor) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                Object.defineProperty(derivedCtor, name, {
                    value: baseCtor.prototype[name],
                    writable: true
                });
                // derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    };
}
exports.Mixin = Mixin;
function getClass(t) {
    var a = t.constructor;
    return a;
}
exports.getClass = getClass;
var falsy = /^(?:f(?:alse)?|no?|0+)$/i;
exports.parseBoolean = function (val) {
    return !falsy.test(val) && !!val;
};
function isFalse(a) {
    return !exports.parseBoolean(a);
}
exports.isFalse = isFalse;

//# sourceMappingURL=lang.js.map
