import {RouterLoader}                from "aurelia-router-loader";
import {Loader}                      from 'aurelia-loader';
import {RouterConfiguration, Router} from 'aurelia-router';
import {autoinject}                  from 'aurelia-framework';
import {DefaultLoader}               from "aurelia-loader-default";

export class App {

  private router: Router;


  constructor(loader: Loader) {

  }

  configureRouter(cfg: RouterConfiguration, router: Router) {
    let loader = new DefaultLoader(),
      routerLoader = new RouterLoader(loader, router);
    routerLoader.defineRoutes(['aire-demo/route/components.json']);
    cfg.map([{
      name: 'main',
      route: ['', 'main'],
      moduleId: 'aire-demo/main/main',
    }]);
    this.router = router;
  }


}