declare module 'aurelia-router-loader' {
  import { inject }  from 'aurelia-dependency-injection';
  import { Loader }  from 'aurelia-loader';
  import { join }  from 'aurelia-path';
  import { Router }  from 'aurelia-router';
  export class RouterLoader {
    container: any;
    router: any;
    constructor(loader: any, router: any);
    
    /**
         * Load Routes
         *
         * A method used by the bootstrapping phase
         * to load our routes.
         *
         * @returns {Promise}
         * 
         */
    loadRoutes(): any;
    
    /**
         * Define Routes
         *
         * This method is called during the bootstrapping phase
         * when Aurelia first loads. It is where you pass through
         * the location of your route files.
         *
         * @param {array} routes An array of route JSON files to load
         * @returns {void}
         *
         */
    defineRoutes(routes: any): any;
    
    /**
         * Load Routes Map
         *
         * This method handles looping through the supplied locations
         * and then tries to load the JSON, storing it in an array.
         *
         * @returns {Promise}
         *
         */
    loadRoutesMap(): any;
    
    /**
         * Load Route
         * 
         * Loads a supplied route file and 
         * returns a promise
         * 
         * @param {any} file The path and file to load
         * @returns {Promise} Promise contains the file contents
         * 
         */
    loadRoute(file: any): any;
  }
  export function configure(aurelia: any, callbackFunction: any): any;
}