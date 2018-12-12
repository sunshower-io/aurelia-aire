import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(cfg: FrameworkConfiguration) {
  cfg.globalResources([
    'aire/navbar/navbar',
    'aire/application/application',
    'aire/application/header',
    'aire/navigation/offcanvas'
  ]);
}