import {Aurelia} from 'aurelia-framework';

export async function configure(aurelia: Aurelia) {
  aurelia.use.standardConfiguration();
  await aurelia.start();
  await aurelia.setRoot('index');
}