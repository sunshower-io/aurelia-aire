import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(cfg: FrameworkConfiguration) {
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
    'aire/form/textarea',
    'aire/form/radio',
    'aire/form/checkbox',
    'aire/form/range',
    'aire/button/button',
    'aire/fab/fab',
    'aire/table/table'
  ]);
}