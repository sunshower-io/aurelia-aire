"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_1 = require("aire/core/application");
var decorators_1 = require("aire/core/decorators");
exports.$ = document;
var dom;
(function (dom) {
    function pathTo(hostOrSelector) {
        if (typeof hostOrSelector === 'string') {
            return hostOrSelector;
        }
        else {
            var path = [], el = hostOrSelector;
            while (el.nodeType === Node.ELEMENT_NODE) {
                var selector = el.nodeName.toLowerCase();
                if (el.id) {
                    selector += '#' + el.id;
                    path.unshift(selector);
                    break;
                }
                else {
                    var sib = el, nth = 1;
                    while (sib = sib.previousElementSibling) {
                        if (sib.nodeName.toLowerCase() == selector) {
                            nth++;
                        }
                    }
                    if (nth != 1) {
                        selector += ":nth-of-type(" + nth + ")";
                    }
                }
                path.unshift(selector);
                el = el.parentNode;
            }
            return path.join(" > ");
        }
    }
    dom.pathTo = pathTo;
    function $(s) {
        return document.querySelector(s);
    }
    dom.$ = $;
    function isAncestor(test, target) {
        if (test === target) {
            return true;
        }
        var c = test;
        while ((c = c.parentElement) && c !== target) {
        }
        return !!c;
    }
    dom.isAncestor = isAncestor;
    function decorateTo(sourceEl, el, decoration, className) {
        if (sourceEl.hasAttribute(decoration)) {
            if (className) {
                el.classList.add(className);
            }
            else {
                el.classList.add(decoration);
            }
        }
    }
    dom.decorateTo = decorateTo;
    function decorate(el, decoration, className) {
        if (el.hasAttribute(decoration)) {
            if (className) {
                el.classList.add(className);
            }
            else {
                el.classList.add(decoration);
            }
            return true;
        }
        return false;
    }
    dom.decorate = decorate;
})(dom = exports.dom || (exports.dom = {}));
function Id() {
    return function (target, key) {
        decorators_1.makePropertyMapper(target, key, function () {
            return application_1.Aire.id;
        });
    };
}
exports.Id = Id;
// export function Id(instance : any, key : string) {
//   let value = instance[key] || Aire.id,
//     getter = function () : string {
//       return value;
//     },
//     setter = function (v : string) : void {
//       value = v;
//     };
//   if (delete instance[key]) {
//     Object.defineProperty(instance, key, {
//       get          : getter,
//       set          : setter,
//       enumerable   : true,
//       configurable : true
//     });
//   }
// }
function findParentByClass(el, selectorClass) {
    if (Element.prototype.closest) {
        return el.closest(selectorClass);
    }
    while ((el = el.parentElement) &&
        !(el.matches || el.matchesSelector).call(el, selectorClass)) {
    }
    return el;
}
exports.findParentByClass = findParentByClass;
function createEvent(name, value) {
    var w = window;
    if (w.CustomEvent) {
        return new CustomEvent(name, {
            detail: {
                value: value
            },
            bubbles: true
        });
    }
    else {
        var e = document.createEvent('CustomEvent');
        e.initCustomEvent(name, true, true, {
            detail: {
                value: value
            }
        });
    }
}
exports.createEvent = createEvent;

//# sourceMappingURL=dom.js.map
