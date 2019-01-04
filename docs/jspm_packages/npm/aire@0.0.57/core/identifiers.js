"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("./uuid");
var base58_1 = require("./base58");
var Identifier = /** @class */ (function () {
    function Identifier(id) {
        this.id = id;
    }
    return Identifier;
}());
exports.Identifier = Identifier;
(function (Identifier) {
    function isIdentifier(key) {
        return key && /[1-9a-zA-Z]+/.test(key);
    }
    Identifier.isIdentifier = isIdentifier;
    function newId() {
        return base58_1.Base58.encode(uuid_1.UUID.randomBytes());
    }
    Identifier.newId = newId;
})(Identifier = exports.Identifier || (exports.Identifier = {}));
exports.Identifier = Identifier;

//# sourceMappingURL=identifiers.js.map
