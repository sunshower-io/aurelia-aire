import {RouterLoader}                from "aurelia-router-loader";
import {Loader}                      from 'aurelia-loader';
import {RouterConfiguration, Router, NavModel} from 'aurelia-router';
import {DefaultLoader}               from "aurelia-loader-default";
import {autoinject} from 'aurelia-framework';
import {
  EventAggregator,
  Subscription
}                                    from 'aurelia-event-aggregator';
import {Events}                      from "aire/events";
import {AireOffCanvas}               from "aire/offcanvas/offcanvas";

@autoinject
export class App {

  private router: Router;


  offcanvas : AireOffCanvas;
  private subscription: Subscription;

  constructor(loader: Loader, readonly bus: EventAggregator) {


  }

  bind() {
    this.subscription = this.bus.subscribe(
      Events.NavigationEvent.ITEM_CLICKED,
      this.offcanvas.hide.bind(this.offcanvas)
    );
  }

  unbind() {
    this.subscription.dispose();
  }

  attached() {

  }

  toggleOffCanvas() {
    this.offcanvas.toggle();
  }

  configureRouter(cfg: RouterConfiguration, router: Router) {
    let loader = new DefaultLoader(),
      routerLoader = new RouterLoader(loader, router);
    routerLoader.defineRoutes(['aire-demo/route/route.comp']); //TODO get deep-linking working
    cfg.map([{
      name: 'docs',
      route: ['', 'docs'],
      moduleId: 'aire-demo/main/overview',
      title: 'Aurelia-Aire Demo'
    }]);
    this.router = router;
  }


  normalizeTitle = (nav: NavModel) => {
    return nav.title.split('-').map((word) => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ')
  };

}