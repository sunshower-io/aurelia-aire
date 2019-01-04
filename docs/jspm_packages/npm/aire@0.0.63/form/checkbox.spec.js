"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("aurelia-polyfills");
var aurelia_bootstrapper_1 = require("aurelia-bootstrapper");
var render_1 = require("test/render");
var component;
function initialize(bindingContext, templateString) {
    var template = templateString ? templateString : "\n  aire-checkbox(label.bind=\"textLabel\")\n  ";
    component = render_1.newComponent(template, bindingContext, 'form/checkbox');
}
afterEach(function () {
    component.dispose();
});
test("a checkbox should initialize", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var checkbox;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ textLabel: "Hello" });
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                checkbox = document.querySelector('input.uk-checkbox');
                expect(checkbox).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a label should not initialize if not present in binding context", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var label;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({});
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                label = document.querySelector('label.uk-form-label');
                expect(label).toBeFalsy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a label should initialize if present in binding context", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var label;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ textLabel: "Hello" });
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                label = document.querySelector('label.uk-form-label');
                expect(label).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a label should be for a checkbox", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var label, checkbox;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ textLabel: "Hello" });
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                label = document.querySelector('label.uk-form-label'), checkbox = document.querySelector('input.uk-checkbox');
                expect(label.htmlFor).toBe(checkbox.id);
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a checkbox should go disabled when true in binding context", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var checkbox;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ textLabel: "Hello", disabled: "true" }, "\naire-checkbox(label.bind=\"textLabel\" disabled.bind=\"disabled\")\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                checkbox = document.querySelector('input');
                expect(checkbox.disabled).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a checkbox should not go disabled when false in binding context", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var checkbox;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ textLabel: "Hello", disabled: "false" }, "\naire-checkbox(label.bind=\"textLabel\" disabled.bind=\"disabled\")\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                checkbox = document.querySelector('input');
                expect(checkbox.disabled).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a checkbox should not go disabled when not in binding context", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var checkbox;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ textLabel: "Hello" }, "\naire-checkbox(label.bind=\"textLabel\")\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                checkbox = document.querySelector('input');
                expect(checkbox.disabled).toBeFalsy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test.skip("a checkbox should be selected when true in binding context", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var checkbox;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ textLabel: "Hello", selected: "true" }, "\naire-checkbox(label.bind=\"textLabel\" selected.bind=\"selected\")\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                checkbox = document.querySelector('input');
                expect(checkbox.checked).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a checkbox should not be selected when false in binding context", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var checkbox;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ textLabel: "Hello", selected: "false" }, "\naire-checkbox(label.bind=\"textLabel\" selected.bind=\"selected\")\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                checkbox = document.querySelector('input');
                expect(checkbox.checked).toBeFalsy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a checkbox should not be selected when not in binding context", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var checkbox;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ textLabel: "Hello" }, "\naire-checkbox(label.bind=\"textLabel\")\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                checkbox = document.querySelector('input');
                expect(checkbox.checked).toBeFalsy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a checkbox can be part of a group", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var checkbox;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ name: "Hello" }, "\naire-checkbox(name.bind=\"name\")\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                checkbox = document.querySelector('input');
                expect(checkbox.name).toBe("Hello");
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a checkbox can take a horizontal argument", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var checkbox;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ textLabel: "Henlo" }, "\naire-checkbox(label.bind=\"textLabel\" horizontal)\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                checkbox = document.querySelector('.uk-form-horizontal');
                expect(checkbox).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a checkbox can take a success argument", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var checkbox;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ textLabel: "Henlo" }, "\naire-checkbox(label.bind=\"textLabel\" success)\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                checkbox = document.querySelector('input.uk-form-success');
                expect(checkbox).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a checkbox can take a danger argument", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var checkbox;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ textLabel: "Henlo" }, "\naire-checkbox(label.bind=\"textLabel\" danger)\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                checkbox = document.querySelector('input.uk-form-danger');
                expect(checkbox).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a checkbox can take a blank argument", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var checkbox;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ textLabel: "Henlo" }, "\naire-checkbox(label.bind=\"textLabel\" blank)\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                checkbox = document.querySelector('input.uk-form-blank');
                expect(checkbox).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });

//# sourceMappingURL=checkbox.spec.js.map
