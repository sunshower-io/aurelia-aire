import 'dist/aire.css!';
import {Aurelia} from 'aurelia-framework';

export async function configure(aurelia: Aurelia) {

  aurelia.use
    .standardConfiguration()
         .plugin('aire')
         .plugin('aurelia-router-loader', cfg => {
           cfg.defineRoutes(['aire-demo/route/route.comp']);
         });

  aurelia.start().then(() => aurelia.setRoot('aire-demo/index'));
}