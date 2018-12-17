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
    'aire/application/router-view',
    'aire/search/search',
    'aire/icon/icon',
    'aire/tooltip/tooltip'
  ]);
  cfg.container.registerInstance(Application, Application.getInstance());

  // cfg.plugin('aurelia-animator-velocity', cfg => {
  //   console.log("GOT" + cfg);
  //   cfg.registerEffect('frap',  { properties: ':enter', options: { easing: 'ease-in', duration: 200 }});
  // });
  // cfg.plugin()
}