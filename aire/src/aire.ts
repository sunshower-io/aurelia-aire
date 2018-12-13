import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(cfg: FrameworkConfiguration) {
  cfg.globalResources([
    'aire/navbar/navbar',
    'aire/navbar/section',
    'aire/application/application',
    'aire/application/header',
    'aire/offcanvas/offcanvas',
    'aire/card/card',
    'aire/form/input',
    'aire/form/select'
  ]);
}