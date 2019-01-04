"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function divmod(number, firstDigit, base, divisor) {
    var remainder = 0;
    for (var i = firstDigit; i < number.length; i++) {
        var digit = number[i] & 0xff, temp = remainder * base + digit;
        number[i] = temp / divisor;
        remainder = temp % divisor;
    }
    return remainder;
}
var Base58;
(function (Base58) {
    var CHARS = '123456789ABCDEFGHJKLMNPQRSTU' + 'VWXYZabcdefghijkmnopqrstuvwxyz';
    var ZERO = CHARS[0];
    var INDEXES = [];
    function initialize() {
        for (var i = 0; i < 128; i++) {
            INDEXES[i] = -1;
        }
        for (var i = 0; i < CHARS.length; i++) {
            INDEXES[CHARS[i]] = i;
        }
    }
    function encode(value) {
        if (!value) {
            return '';
        }
        var zeros = 0;
        while (zeros < value.length && value[zeros] === 0) {
            ++zeros;
        }
        var input = value.slice(), encoded = [], outputStart = input.length * 2;
        for (var inputStart = zeros; inputStart < input.length;) {
            encoded[--outputStart] = CHARS[divmod(input, inputStart, 256, 58)];
            if (input[inputStart] == 0) {
                ++inputStart;
            }
        }
        while (outputStart < encoded.length && encoded[outputStart] == ZERO) {
            ++outputStart;
        }
        while (--zeros >= 0) {
            encoded[--outputStart] = ZERO;
        }
        return encoded.slice(outputStart, encoded.length - outputStart).join('');
    }
    Base58.encode = encode;
    initialize();
})(Base58 = exports.Base58 || (exports.Base58 = {}));

//# sourceMappingURL=base58.js.map
