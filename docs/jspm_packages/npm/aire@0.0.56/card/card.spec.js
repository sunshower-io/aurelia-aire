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
var aurelia_bootstrapper_1 = require("aurelia-bootstrapper");
var render_1 = require("test/render");
var component;
afterEach(function () {
    component.dispose();
});
function initialize(template, bindingContext) {
    component = render_1.newComponent(template, bindingContext, 'card/card');
}
test('card must be initializable', function (done) { return __awaiter(_this, void 0, void 0, function () {
    var element;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize("aire-card");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                element = document.querySelector('.uk-card');
                expect(element).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test('card must have a default slot', function (done) { return __awaiter(_this, void 0, void 0, function () {
    var p;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize("\naire-card\n    p wabbo\n    ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                p = document.querySelector('p');
                expect(p.textContent).toBe("wabbo");
                done();
                return [2 /*return*/];
        }
    });
}); });
test('card can take a header argument', function (done) { return __awaiter(_this, void 0, void 0, function () {
    var header;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize("aire-card(header)");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                header = document.querySelector('.uk-card-header');
                expect(header.classList.contains("aurelia-hide")).toBeFalsy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test('card can take a header slot', function (done) { return __awaiter(_this, void 0, void 0, function () {
    var p;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize("\naire-card(header)\n    p(slot=\"header\") Henlo\n    ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                p = document.querySelector('.uk-card-header p');
                expect(p.textContent).toBe("Henlo");
                done();
                return [2 /*return*/];
        }
    });
}); });
test('card can take a footer argument', function (done) { return __awaiter(_this, void 0, void 0, function () {
    var header;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize("aire-card(footer)");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                header = document.querySelector('.uk-card-footer');
                expect(header.classList.contains("aurelia-hide")).toBeFalsy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test('card can take a footer slot', function (done) { return __awaiter(_this, void 0, void 0, function () {
    var p;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize("\naire-card(footer)\n    p(slot=\"footer\") Toodles\n    ");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                p = document.querySelector('.uk-card-footer p');
                expect(p.textContent).toBe("Toodles");
                done();
                return [2 /*return*/];
        }
    });
}); });
test("card will not show header or footer without arguments", function (done) { return __awaiter(_this, void 0, void 0, function () {
    var header, footer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize("aire-card");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                header = document.querySelector('.uk-card-header'), footer = document.querySelector('.uk-card-footer');
                expect(header.classList.contains("aurelia-hide")).toBeTruthy();
                expect(footer.classList.contains("aurelia-hide")).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test('card can take a default argument', function (done) { return __awaiter(_this, void 0, void 0, function () {
    var card;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize("aire-card(default)");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                card = document.querySelector('.uk-card.uk-card-default');
                expect(card).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test('card can take a primary argument', function (done) { return __awaiter(_this, void 0, void 0, function () {
    var card;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize("aire-card(primary)");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                card = document.querySelector('.uk-card.uk-card-primary');
                expect(card).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test('card can take a secondary argument', function (done) { return __awaiter(_this, void 0, void 0, function () {
    var card;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize("aire-card(secondary)");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                card = document.querySelector('.uk-card.uk-card-secondary');
                expect(card).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test('card can take a hover argument', function (done) { return __awaiter(_this, void 0, void 0, function () {
    var card;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize("aire-card(hover)");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                card = document.querySelector('.uk-card.uk-card-hover');
                expect(card).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test('card can take a padding argument', function (done) { return __awaiter(_this, void 0, void 0, function () {
    var card;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize("aire-card(padding)");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                card = document.querySelector('.uk-card.uk-card-body');
                expect(card).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test('card can take a padding-small argument', function (done) { return __awaiter(_this, void 0, void 0, function () {
    var card;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize("aire-card(padding-small)");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                card = document.querySelector('.uk-card.uk-card-body.uk-card-small');
                expect(card).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });
test('card can take a padding-large argument', function (done) { return __awaiter(_this, void 0, void 0, function () {
    var card;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                initialize("aire-card(padding-large)");
                return [4 /*yield*/, component.create(aurelia_bootstrapper_1.bootstrap)];
            case 1:
                _a.sent();
                card = document.querySelector('.uk-card.uk-card-body.uk-card-large');
                expect(card).toBeTruthy();
                done();
                return [2 /*return*/];
        }
    });
}); });

//# sourceMappingURL=card.spec.js.map
