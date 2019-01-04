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
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_router_1 = require("aurelia-router");
var aurelia_event_aggregator_1 = require("aurelia-event-aggregator");
var events_1 = require("aire/events");
var core_1 = require("aire/core");
/**
 *
 * The aire-nav component is a styled list that takes a router to automatically lay out and link up navigation.
 *
 * @component nav

 * @param {bindable} router (aurelia-router)
 * @param {bindable} normalizeTitle (f: NavModel => string)
 *
 * @param {pseudo} default
 * @param {pseudo} primary
 * @param {pseudo} center
 *
 * @section.usage
 * @usage.title
 * Usage
 * @usage.description
 * Bind a router to have aire-nav iterate over NavModels and list out elements. To change how the text displays, pass in a normalizeTitle function.
 *
 * @usage.examples.Router
 * aire-nav(router.bind="router")
 *
 * @section.style
 * @style.title
 * Style
 * @style.description
 * In addition to its relatively unstyled state, a nav can be made to be `default`, `primary` or `center`:
 *
 * @style.examples.Default
 * aire-nav(router.bind="router" default)
 *
 * @style.examples.Primary
 * aire-nav(router.bind="router" primary)
 *
 * @style.examples.Center
 * aire-nav(router.bind="router" center)
 *
 *
 */
var AireNav = /** @class */ (function () {
    function AireNav(bus, element) {
        this.bus = bus;
        this.element = element;
    }
    AireNav.prototype.navigation = function () {
        if (this.router) {
            var nav = this.router.navigation, current = new Map();
            for (var _i = 0, nav_1 = nav; _i < nav_1.length; _i++) {
                var n = nav_1[_i];
                current.set(n.config.title, n);
            }
            return Array.from(current.values());
        }
        else {
            return [];
        }
    };
    AireNav.prototype.fire = function () {
        this.bus.publish(events_1.Events.NavigationEvent.ITEM_CLICKED, {});
        return true;
    };
    AireNav.prototype.attached = function () {
        core_1.dom.decorateTo(this.element, this.ul, "default", "uk-nav-default");
        core_1.dom.decorateTo(this.element, this.ul, "primary", "uk-nav-primary");
        core_1.dom.decorateTo(this.element, this.ul, "center", "uk-nav-center");
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", aurelia_router_1.Router)
    ], AireNav.prototype, "router", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Function)
    ], AireNav.prototype, "normalizeTitle", void 0);
    AireNav = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, Element),
        aurelia_framework_1.customElement('aire-nav'),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, Element])
    ], AireNav);
    return AireNav;
}());
exports.AireNav = AireNav;

//# sourceMappingURL=nav.js.map
