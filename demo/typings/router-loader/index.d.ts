declare module "aurelia-router-loader" {

  import {Router} from "aurelia-router";
  import {Loader} from "aurelia-loader";

  export class RouterLoader {
    constructor(loader: Loader, router: Router);

    defineRoutes(routes:string[]);
  }
}


declare module "*.json!text" {


}

