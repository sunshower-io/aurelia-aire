import {RouterLoader}                from "aurelia-router-loader";
import {Loader}                      from 'aurelia-loader';
import {RouterConfiguration, Router} from 'aurelia-router';
import {DefaultLoader}               from "aurelia-loader-default";

export class App {

  private router: Router;

  offcanvas : any;

  constructor(loader: Loader) {

  }

  attached() {

    console.log("BOD" + (this as any).body);
  }

  toggleOffCanvas() {
    this.offcanvas.show();
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