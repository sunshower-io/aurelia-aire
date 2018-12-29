"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Events;
(function (Events) {
    var NavigationEvent;
    (function (NavigationEvent) {
        NavigationEvent.ITEM_CLICKED = 'nav:item:clicked';
    })(NavigationEvent = Events.NavigationEvent || (Events.NavigationEvent = {}));
    var RouterEvent;
    (function (RouterEvent) {
        var prefix = 'router:navigation:';
        RouterEvent.PROCESSING = prefix + 'processing';
        RouterEvent.ERROR = prefix + 'error';
        RouterEvent.CANCELED = prefix + 'canceled';
        RouterEvent.SUCCESS = prefix + 'success';
        RouterEvent.COMPLETE = prefix + 'complete';
    })(RouterEvent = Events.RouterEvent || (Events.RouterEvent = {}));
})(Events = exports.Events || (exports.Events = {}));

//# sourceMappingURL=events.js.map
