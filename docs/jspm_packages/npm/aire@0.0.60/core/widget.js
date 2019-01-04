"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var dom_1 = require("aire/core/dom");
var AireElement = /** @class */ (function () {
    function AireElement(id, el, hostOrSelector) {
        this.id = id;
        this.el = el;
        this.hostOrSelector = hostOrSelector;
        var log = aurelia_framework_1.LogManager.getLogger(id);
        this.log = log;
    }
    AireElement.prototype.attached = function () {
        var hostOrSelector = this.hostOrSelector;
        if (hostOrSelector) {
            if (typeof hostOrSelector === 'string') {
                this._host = dom_1.dom.$(hostOrSelector);
            }
            else {
                this._host = hostOrSelector;
            }
        }
        else if (this.el) {
            this._host = this.el;
        }
        if (!this._host) {
            this.log.error("[bug]: No Element provided for component {}");
            throw new TypeError("AireElement requires a \n      physical element to provide much of its functionality.  Specify one");
        }
    };
    AireElement.prototype.detached = function () {
    };
    Object.defineProperty(AireElement.prototype, "host", {
        get: function () {
            return this._host;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AireElement.prototype, "height", {
        get: function () {
            var host = this._host;
            if (host.offsetHeight) {
                return host.offsetHeight;
            }
            return host.clientHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AireElement.prototype, "width", {
        get: function () {
            var host = this._host;
            if (host.offsetWidth) {
                return host.offsetWidth;
            }
            return host.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    return AireElement;
}());
exports.AireElement = AireElement;

//# sourceMappingURL=widget.js.map
