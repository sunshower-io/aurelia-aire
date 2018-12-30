"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_1 = require("aire/core/application");
var UIkit = require("uikit");
var init_1 = require("aire/init");
function configure(cfg) {
    cfg.globalResources([
        'aire/navbar/navbar',
        'aire/navbar/item',
        'aire/navbar/section',
        'aire/application/application',
        'aire/application/header',
        'aire/application/body',
        'aire/offcanvas/offcanvas',
        'aire/card/card',
        'aire/form/input',
        'aire/form/select',
        'aire/nav/nav',
        'aire/page/page',
        'aire/form/textarea',
        'aire/form/radio',
        'aire/form/checkbox',
        'aire/form/range',
        'aire/button/button',
        'aire/button/fab',
        'aire/widget/widget-panel',
        'aire/tabs/tab-panel',
        'aire/tabs/tab',
        'aire/table/table',
        'aire/application/router-view',
        'aire/search/search',
        'aire/icon/icon',
        'aire/dropdown/dropdown',
        'aire/loader/loader',
        'aire/accordion/accordion',
        'aire/accordion/accordion-item'
    ]);
    application_1.Aire.initialize(UIkit.util);
    cfg.container.registerInstance(application_1.Aire, application_1.Aire.getInstance());
    cfg.plugin('aurelia-animator-velocity', init_1.registerAnimations);
    // configureLogging(cfg);
}
exports.configure = configure;

//# sourceMappingURL=aire.js.map
