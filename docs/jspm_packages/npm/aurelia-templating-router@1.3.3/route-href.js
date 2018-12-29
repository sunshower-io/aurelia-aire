define(['exports', 'aurelia-templating', 'aurelia-router', 'aurelia-pal', 'aurelia-logging'], function (exports, _aureliaTemplating, _aureliaRouter, _aureliaPal, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RouteHref = undefined;

  var LogManager = _interopRequireWildcard(_aureliaLogging);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  

  var _dec, _dec2, _dec3, _dec4, _class;

  var logger = LogManager.getLogger('route-href');

  var RouteHref = exports.RouteHref = (_dec = (0, _aureliaTemplating.customAttribute)('route-href'), _dec2 = (0, _aureliaTemplating.bindable)({ name: 'route', changeHandler: 'processChange', primaryProperty: true }), _dec3 = (0, _aureliaTemplating.bindable)({ name: 'params', changeHandler: 'processChange' }), _dec4 = (0, _aureliaTemplating.bindable)({ name: 'attribute', defaultValue: 'href' }), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = function () {
    RouteHref.inject = function inject() {
      return [_aureliaRouter.Router, _aureliaPal.DOM.Element];
    };

    function RouteHref(router, element) {
      

      this.router = router;
      this.element = element;
    }

    RouteHref.prototype.bind = function bind() {
      this.isActive = true;
      this.processChange();
    };

    RouteHref.prototype.unbind = function unbind() {
      this.isActive = false;
    };

    RouteHref.prototype.attributeChanged = function attributeChanged(value, previous) {
      if (previous) {
        this.element.removeAttribute(previous);
      }

      this.processChange();
    };

    RouteHref.prototype.processChange = function processChange() {
      var _this = this;

      return this.router.ensureConfigured().then(function () {
        if (!_this.isActive) {
          return null;
        }

        var href = _this.router.generate(_this.route, _this.params);

        if (_this.element.au.controller) {
          _this.element.au.controller.viewModel[_this.attribute] = href;
        } else {
          _this.element.setAttribute(_this.attribute, href);
        }

        return null;
      }).catch(function (reason) {
        logger.error(reason);
      });
    };

    return RouteHref;
  }()) || _class) || _class) || _class) || _class);
});