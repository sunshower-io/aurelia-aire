import * as UIkit from 'uikit';

export class Aire {


  private static __id_generator = 0;


  public get id() : string {
    return "aire-" + Aire.__id_generator++
  }

  private static readonly instance : Aire = new Aire();

  public static getInstance() : Aire {
    return this.instance;
  }


  static get id() : string {
    return this.getInstance().id;
  }



}

export type Listener<T> = (a:T) => void;
export module Aire {

  export function listen<T>(element: Element, event: string, listener:Listener<T>) {
    let id = element.id;
    if(!id) {
      throw new Error(`Element ${element} must have an id! (you can use Aire.id to generate one)`);
    }
    UIkit.util.on(document, event, `#${id}`, listener);
  }



  export function invokeLifecycleOnChildren(el: Element, lifecycleFunction: string) {
    if(el == null) {
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
    if(vm == null) {
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

