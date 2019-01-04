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
    var template = templateString ? templateString : "\n  aire-fab(icon.bind=\"icon\")\n  ";
    component = render_1.newComponent(template, bindingContext, "button/fab", "icon/icon");
}
afterEach(function () {
    component.dispose();
});
test("a button must initialize", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var button;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ icon: "Hello" });
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                button = document.querySelector('.aire-fab');
                expect(button).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a button's icon must be bindable with a class", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var button;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ icon: "Hello" });
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                button = document.querySelector('.uk-button.aire-fab span');
                expect(button.classList.contains("Hello")).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a button's icon must be bindable with a url", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var button;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ icon: "hello.png" });
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                button = document.querySelector('.uk-button.aire-fab img');
                expect(button).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a button must have set edges", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var button, style;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({});
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                button = document.querySelector('.uk-button.aire-fab'), style = Object.keys(button.style._importants);
                expect(style).toContain("top");
                expect(style).toContain("right");
                expect(style).toContain("bottom");
                expect(style).toContain("left");
                done(); //TODO determine way to test this that actually checks values
                return [2 /*return*/];
        }
    });
}); });
test("a button should go disabled when true in binding context", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var button;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ disabled: "true" }, "\naire-fab(disabled.bind=\"disabled\")\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                button = document.querySelector('.uk-button.aire-fab');
                expect(button.disabled).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a button should not go disabled when false in binding context", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var button;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({ disabled: "false" }, "\naire-fab(disabled.bind=\"disabled\")\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                button = document.querySelector('.uk-button.aire-fab');
                expect(button.disabled).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a button should not go disabled when not in binding context", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var button;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({}, "\naire-fab(label.bind=\"textLabel\")\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                button = document.querySelector('.uk-button.aire-fab');
                expect(button.disabled).toBeFalsy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a button can take a default argument", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var button;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({}, "\naire-fab(label.bind=\"textLabel\", icon.bind=\"icon\" default)\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                button = document.querySelector('.uk-button.aire-fab.uk-button-default');
                expect(button).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a button can take a primary argument", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var button;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({}, "\naire-fab(label.bind=\"textLabel\", icon.bind=\"icon\" primary)\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                button = document.querySelector('.uk-button.aire-fab.uk-button-primary');
                expect(button).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a button can take a secondary argument", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var button;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({}, "\naire-fab(label.bind=\"textLabel\", icon.bind=\"icon\" secondary)\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                button = document.querySelector('.uk-button.aire-fab.uk-button-secondary');
                expect(button).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test("a button can take a danger argument", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var button;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize({}, "\naire-fab(label.bind=\"textLabel\", icon.bind=\"icon\" danger)\n  ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                button = document.querySelector('.uk-button.aire-fab.uk-button-danger');
                expect(button).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });

//# sourceMappingURL=fab.spec.js.map
