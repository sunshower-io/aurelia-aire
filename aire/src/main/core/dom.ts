import {Aire} from "aire/core/application";

export const $ = document;

export namespace dom {
  export function pathTo(hostOrSelector : string | Node) : string {
    if (typeof hostOrSelector === 'string') {
      return hostOrSelector;
    } else {
      let path = [],
        el = hostOrSelector as any;
      while (el.nodeType === Node.ELEMENT_NODE) {
        let selector = el.nodeName.toLowerCase();
        if (el.id) {
          selector += '#' + el.id;
          path.unshift(selector);
          break;
        } else {
          let sib = el, nth = 1;
          while (sib = sib.previousElementSibling) {
            if (sib.nodeName.toLowerCase() == selector) {
              nth++;
            }
          }
          if (nth != 1) {
            selector += ":nth-of-type(" + nth + ")";
          }
        }
        path.unshift(selector);
        el = el.parentNode;
      }
      return path.join(" > ");
    }
  }

  export function $(s : string) : Element {
    return document.querySelector(s);
  }

  export function isAncestor(test : Element, target : Element) {
    if (test === target) {
      return true;
    }
    let c = test;
    while ((c = c.parentElement) && c !== target) {
    }
    return !!c;
  }

  export function decorateTo(
    sourceEl : Element,
    el : Element,
    decoration : string,
    className? : string
  ) {
    if (sourceEl.hasAttribute(decoration)) {
      if (className) {
        el.classList.add(className);
      } else {
        el.classList.add(decoration);
      }
    }
  }

  export function decorate(
    el : Element,
    decoration : string,
    className? : string
  ) : boolean {
    if (el.hasAttribute(decoration)) {
      if (className) {
        el.classList.add(className);
      } else {
        el.classList.add(decoration);
      }
      return true;
    }
    return false;
  }
}


export function Id(instance : any, key : string) {
  let value = instance[key] || Aire.id,
    getter = function () : string {
      return value;
    },
    setter = function (v : string) : void {
      value = v;
    };
  if (delete instance[key]) {
    Object.defineProperty(instance, key, {
      get          : getter,
      set          : setter,
      enumerable   : true,
      configurable : true
    });
  }
}

export function findParentByClass(el : Element, selectorClass : string) : Element {
  if (Element.prototype.closest) {
    return el.closest(selectorClass);
  }
  while (
    (el = el.parentElement) &&
    !(el.matches || (el as any).matchesSelector).call(el, selectorClass)
    ) {
  }
  return el;
}

export function createEvent(name : string, value : any) : Event {
  let w = window as any;
  if (w.CustomEvent) {
    return new CustomEvent(name, {
      detail  : {
        value : value
      },
      bubbles : true
    });
  } else {
    let e = document.createEvent('CustomEvent');
    e.initCustomEvent(name, true, true, {
      detail : {
        value : value
      }
    });
  }
}
