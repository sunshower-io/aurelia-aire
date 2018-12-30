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
var A = /** @class */ (function () {
    function A() {
    }
    __decorate([
        dom_1.Id(),
        __metadata("design:type", String)
    ], A.prototype, "id1", void 0);
    return A;
}());
test("id increments as expected on instance", function () {
    var a = new A();
    console.log(a.id1);
    expect(a.id1).toContain('aire-');
});
test('id increments across instantiations of same type', function () {
    var a1 = new A(), a2 = new A();
    expect(a1.id1).toContain('aire-');
    expect(a1.id1).not.toEqual(a2.id1);
    for (var i = 0; i < 10; i++) {
        console.log(a1.id1);
    }
});

//# sourceMappingURL=application.spec.js.map
