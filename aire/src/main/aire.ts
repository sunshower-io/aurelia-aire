import {FrameworkConfiguration} from 'aurelia-framework';

import {Aire as Application} from 'aire/core/application';
import * as UIkit            from "uikit";
import {
  registerAnimations,
  configureLogging
}  from "aire/init";

export function configure(cfg : FrameworkConfiguration) {
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
  Application.initialize(UIkit.util);
  cfg.container.registerInstance(Application, Application.getInstance());

  cfg.plugin('aurelia-animator-velocity', registerAnimations);

  // configureLogging(cfg);

}