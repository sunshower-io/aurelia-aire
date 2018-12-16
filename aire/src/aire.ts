import {FrameworkConfiguration} from 'aurelia-framework';

import {Aire as Application} from 'aire/core/application';

export function configure(cfg: FrameworkConfiguration) {
  cfg.globalResources([
    'aire/navbar/navbar',
    'aire/navbar/item',
    'aire/navbar/section',
    'aire/application/application',
    'aire/application/header',
    'aire/application/body',
    'aire/offcanvas/offcanvas',
    'aire/card/basiccard',
    'aire/card/dividedcard',
    'aire/form/input',
    'aire/form/select',
    'aire/nav/nav',
    'aire/page/page',
    'aire/form/textarea',
    'aire/form/radio',
    'aire/form/checkbox',
    'aire/form/range',
    'aire/button/button',
    'aire/fab/fab',
    'aire/widget/widget-panel',
    'aire/tabs/tab-panel',
    'aire/tabs/tab',
    'aire/table/table',
    'aire/search/search'
  ]);
  cfg.container.registerInstance(Application, Application.getInstance());
}