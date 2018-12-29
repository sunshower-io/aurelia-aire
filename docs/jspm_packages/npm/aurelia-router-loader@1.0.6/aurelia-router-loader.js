define(['exports', 'aurelia-dependency-injection', 'aurelia-loader', 'aurelia-path', 'aurelia-router'], function (exports, _aureliaDependencyInjection, _aureliaLoader, _aureliaPath, _aureliaRouter) {
    'use strict';

    exports.__esModule = true;
    exports.configure = configure;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var RouterLoader = (function () {
        function RouterLoader(loader, router) {
            _classCallCheck(this, _RouterLoader);

            this.container = null;
            this.router = null;
            this._routeLocations = [];
            this._loadedRoutes = [];

            this.loader = loader;
            this.router = router;
        }

        RouterLoader.prototype.loadRoutes = function loadRoutes() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.loadRoutesMap().then(function (routes) {
                    if (routes.length) {
                        routes.forEach(function (route) {
                            _this.router.addRoute(route);
                        });
                    }
                    resolve(routes);
                });
            });
        };

        RouterLoader.prototype.defineRoutes = function defineRoutes(routes) {
            this._routeLocations = routes;

            if (routes) {
                this.loadRoutes();
            }
        };

        RouterLoader.prototype.loadRoutesMap = function loadRoutesMap() {
            var _this2 = this;

            var promises = [];
            var finalRoutes = [];

            return new Promise(function (resolve, reject) {
                for (var i = 0; i < _this2._routeLocations.length; i++) {
                    var pointer = _this2._routeLocations[i];

                    if (pointer) {
                        promises.push(_this2.loadRoute(pointer));
                    }
                }

                Promise.all(promises).then(function (values) {
                    for (var i = 0, len = values.length; i < len; i++) {
                        var pointer = JSON.parse(values[i]);

                        if (pointer) {
                            pointer.forEach(function (obj) {
                                finalRoutes.push(obj);
                            });
                        }
                    }

                    _this2._loadedRoutes = finalRoutes;

                    resolve(finalRoutes);
                });
            });
        };

        RouterLoader.prototype.loadRoute = function loadRoute(file) {
            return this.loader.loadText(_aureliaPath.join(file));
        };

        var _RouterLoader = RouterLoader;
        RouterLoader = _aureliaDependencyInjection.inject(_aureliaLoader.Loader, _aureliaRouter.Router)(RouterLoader) || RouterLoader;
        return RouterLoader;
    })();

    exports.RouterLoader = RouterLoader;

    function configure(aurelia, callbackFunction) {
        var loaderInstance = aurelia.container.get(RouterLoader);

        if (callbackFunction !== undefined && typeof callbackFunction === 'function') {
            callbackFunction(loaderInstance);
        }

        loaderInstance.loadRoutes();
    }
});