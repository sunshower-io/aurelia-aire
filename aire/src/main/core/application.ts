import {Logger} from 'aurelia-logging';

export interface UIFramework {

  on(component: any, event: string, el: string |number | HTMLElement, handler: any);
}


export class Aire {

  public static logger: Logger;


  constructor() {

  }

  public static initialize(framework: UIFramework) {
    this._framework = framework;
  }

  public static get framework() : UIFramework {
    return this._framework;
  }

  private static idGen = 0;
  private static instance: Aire;
  private static _framework: UIFramework;


  public static get id() : string {
    return "aire-" + Aire.idGen;
  }


  public static getInstance() : Aire {
    if(!this.instance) {
      this.instance = new Aire()
    }
    return this.instance;
  }




}

export type Listener<T> = (a:T) => void;
export module Aire {

  export function listen<T>(element: Element, event: string, listener:Listener<T>) {
    let id = element.id;
    if(!id) {
      throw new Error(`Element ${element} must have an id! (you can use Aire.id to generate one)`);
    }
    Aire.framework.on(document, event, `#${id}`, listener);
  }



  export function invokeLifecycleOnChildren(el: Element, lifecycleFunction: string) {
    if(!el) {
      throw new Error(`Element must not be null`);
    }
    let children = el.childNodes,
      len = children.length;
    for(let i = 0; i < len; i++) {
      let child = children[i] as any;
      if(child && child.au) {
        let au = child.au,
          controller = au.controller,
          vm = controller && controller.viewModel;
        if(vm) {
          invokeLifecycle(lifecycleFunction, vm);
        }
      }
    }
  }

  export function invokeLifecycle(str: string, vm: any) {
    if(!vm) {
      throw new Error('ViewModel must not be null!');
    }
    let f = vm[str];
    if(!f) {
      return;
    }
    if(f && (typeof f !== 'function')) {
      throw new Error(`Lifecycle handler ${str} on ViewModel ${vm} is not a function!`);
    }
    f.apply(vm);
  }
}

