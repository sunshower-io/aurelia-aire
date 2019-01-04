"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makePropertyMapper(prototype, key, mapper) {
    var values = new Map();
    Object.defineProperty(prototype, key, {
        get: function () {
            var v = values.get(this);
            if (!v) {
                values.set(this, mapper(null));
            }
            return values.get(this);
        },
        set: function (firstValue) {
            Object.defineProperty(this, key, {
                get: function () {
                    return values.get(this);
                },
                set: function (value) {
                    values.set(this, mapper(value));
                },
                enumerable: true,
            });
            this[key] = firstValue;
        },
        enumerable: true,
        configurable: true,
    });
}
exports.makePropertyMapper = makePropertyMapper;

//# sourceMappingURL=decorators.js.map
