"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = require("./range");
var UUID = /** @class */ (function () {
    function UUID(value) {
        this.value = value;
    }
    UUID.fromString = function (str) {
        return new UUID(str);
    };
    UUID.random = function () {
        return UUID.randomUUID().value;
    };
    UUID.randomBytes = function () {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === 'function') {
            d += performance.now();
        }
        return range_1.range(0, 32).map(function (t) {
            if (t == 12) {
                return 4;
            }
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (r & 0x3) | 0x8;
        });
    };
    UUID.randomUUID = function () {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === 'function') {
            d += performance.now();
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
        return new UUID(uuid);
    };
    UUID.randomId = function (len) {
        var id = 'x'.repeat(len).replace(/x/g, function (c) {
            return ((Math.random() * 16) % 16 | 0).toString(16);
        });
        return id;
    };
    UUID.prototype.toString = function () {
        return this.value;
    };
    return UUID;
}());
exports.UUID = UUID;

//# sourceMappingURL=uuid.js.map
