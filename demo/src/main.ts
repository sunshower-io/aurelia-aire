import 'aire/aire.css!';
import {Aurelia} from 'aurelia-framework';

export async function configure(aurelia: Aurelia) {

  aurelia.use
    .standardConfiguration().plugin('aire');
  aurelia.start().then(() => aurelia.setRoot('aire-demo/index'));
}