"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("aire/core/dom");
var el;
beforeEach(function () {
    el = dom_1.$.createElement('div');
});
afterEach(function () {
    el.remove();
});
test('ensure is-ancestor returns true when element is ancestor', function () {
    var el = dom_1.$.createElement('div'), child = dom_1.$.createElement('div');
    el.append(child);
    expect(dom_1.dom.isAncestor(child, el)).toBeTruthy();
});
test('ensure is-ancestor locates itself', function () {
    var el = dom_1.$.createElement('div');
    expect(dom_1.dom.isAncestor(el, el)).toBeTruthy();
});
test("ensure pathTo returns selector string if supplied", function () {
    var hostOrSelector = ".myClass";
    expect(dom_1.dom.pathTo(hostOrSelector)).toBe(hostOrSelector);
});
test("ensure pathTo returns current element if id is present", function () {
    el.setAttribute("id", "myId");
    expect(dom_1.dom.pathTo(el)).toBe("div#myId");
});
test("ensure pathTo traverses up DOM to get best selector sensibly", function () {
    var child = dom_1.$.createElement('div'), grandChild = dom_1.$.createElement('div');
    el.append(child);
    child.append(grandChild);
    el.setAttribute("id", "myId");
    expect(dom_1.dom.pathTo(grandChild)).toBe("div#myId > div > div");
});
test("ensure decorate-to applies class when class name is provided", function () {
    var sourceEl = dom_1.$.createElement('div'), el = dom_1.$.createElement('div');
    sourceEl.setAttribute("something", "something");
    dom_1.dom.decorateTo(sourceEl, el, "something", "myClass");
    expect(el.classList).toContain("myClass");
});
test("ensure decorate-to applies decorator as class name", function () {
    var sourceEl = dom_1.$.createElement('div'), el = dom_1.$.createElement('div');
    sourceEl.setAttribute("something", "something");
    dom_1.dom.decorateTo(sourceEl, el, "something");
    expect(el.classList).toContain("something");
});
test('ensure decorate adds class with no className', function () {
    el.setAttribute("test", "");
    dom_1.dom.decorate(el, 'test');
    expect(el.classList.contains('test')).toBeTruthy();
});
test('ensure decorate adds class with className', function () {
    el.setAttribute("test", "");
    dom_1.dom.decorate(el, 'test', 'testy');
    expect(el.classList.contains('testy')).toBeTruthy();
});
test('ensure generated decorates object correctly', function () {
    var A = /** @class */ (function () {
        function A() {
        }
        __decorate([
            dom_1.Id(),
            __metadata("design:type", String)
        ], A.prototype, "s", void 0);
        return A;
    }());
    var a = new A();
    var b = a.s;
    expect(b.startsWith('aire')).toBeTruthy();
});

//# sourceMappingURL=dom.spec.js.map
