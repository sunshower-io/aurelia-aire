import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(cfg: FrameworkConfiguration) {
  cfg.globalResources([
    'aire/application/application',
    'aire/navigation/offcanvas'
  ]);
}