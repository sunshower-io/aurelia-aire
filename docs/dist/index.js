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
exports.__esModule = true;
var aurelia_router_loader_1 = require("aurelia-router-loader");
var aurelia_loader_1 = require("aurelia-loader");
var aurelia_loader_default_1 = require("aurelia-loader-default");
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_event_aggregator_1 = require("aurelia-event-aggregator");
var events_1 = require("aire/events");
var App = /** @class */ (function () {
    function App(loader, bus) {
        this.bus = bus;
        this.normalizeTitle = function (nav) {
            return nav.title.split('-').map(function (word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        };
    }
    App.prototype.bind = function () {
        this.subscription = this.bus.subscribe(events_1.Events.NavigationEvent.ITEM_CLICKED, this.offcanvas.hide.bind(this.offcanvas));
    };
    App.prototype.unbind = function () {
        this.subscription.dispose();
    };
    App.prototype.attached = function () {
    };
    App.prototype.toggleOffCanvas = function () {
        this.offcanvas.toggle();
    };
    App.prototype.configureRouter = function (cfg, router) {
        var loader = new aurelia_loader_default_1.DefaultLoader(), routerLoader = new aurelia_router_loader_1.RouterLoader(loader, router);
        routerLoader.defineRoutes(['aire-demo/route/route.comp']);
        cfg.map([{
                name: 'main',
                route: ['', 'main'],
                moduleId: 'aire-demo/main/overview'
            }]);
        this.router = router;
    };
    App = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_loader_1.Loader, aurelia_event_aggregator_1.EventAggregator])
    ], App);
    return App;
}());
exports.App = App;

//# sourceMappingURL=index.js.map
