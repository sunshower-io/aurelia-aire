"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aire = /** @class */ (function () {
    function Aire() {
    }
    Aire.initialize = function (framework) {
        this._framework = framework;
    };
    Object.defineProperty(Aire, "framework", {
        get: function () {
            return this._framework;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Aire, "id", {
        get: function () {
            return "aire-" + Aire.idGen++;
        },
        enumerable: true,
        configurable: true
    });
    Aire.getInstance = function () {
        if (!this.instance) {
            this.instance = new Aire();
        }
        return this.instance;
    };
    Aire.idGen = 0;
    return Aire;
}());
exports.Aire = Aire;
(function (Aire) {
    function listen(element, event, listener) {
        var id = element.id;
        if (!id) {
            throw new Error("Element " + element + " must have an id! (you can use Aire.id to generate one)");
        }
        Aire.framework.on(document, event, "#" + id, listener);
    }
    Aire.listen = listen;
    function invokeLifecycleOnChildren(el, lifecycleFunction) {
        if (!el) {
            throw new Error("Element must not be null");
        }
        var children = el.childNodes, len = children.length;
        for (var i = 0; i < len; i++) {
            var child = children[i];
            if (child && child.au) {
                var au = child.au, controller = au.controller, vm = controller && controller.viewModel;
                if (vm) {
                    invokeLifecycle(lifecycleFunction, vm);
                }
            }
        }
    }
    Aire.invokeLifecycleOnChildren = invokeLifecycleOnChildren;
    function invokeLifecycle(str, vm) {
        if (!vm) {
            throw new Error('ViewModel must not be null!');
        }
        var f = vm[str];
        if (!f) {
            return;
        }
        if (f && (typeof f !== 'function')) {
            throw new Error("Lifecycle handler " + str + " on ViewModel " + vm + " is not a function!");
        }
        f.apply(vm);
    }
    Aire.invokeLifecycle = invokeLifecycle;
})(Aire = exports.Aire || (exports.Aire = {}));
exports.Aire = Aire;

//# sourceMappingURL=application.js.map
