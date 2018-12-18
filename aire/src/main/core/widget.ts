import {Logger} from 'aurelia-logging';
import {
  LogManager
}               from 'aurelia-framework';
import {dom} from "aire/core/dom";
export class AireElement {


  protected readonly log: Logger;
  protected _host:Element;


  constructor(
    protected readonly id: string,
    protected readonly el: Element,
    protected readonly hostOrSelector?: string | Element) {
    let log = LogManager.getLogger(id);

    this.log = log;
  }


  attached() : void {
    let hostOrSelector = this.hostOrSelector;
    if(hostOrSelector) {
      if(typeof hostOrSelector === 'string') {
        this._host = dom.$(hostOrSelector);
      } else {
        this._host = hostOrSelector as Element;
      }
    } else if(this.el) {
      this._host = this.el;
    }
    if(!this._host) {
      this.log.error(`[bug]: No Element provided for component {}`);
      throw new TypeError(`AireElement requires a 
      physical element to provide much of its functionality.  Specify one`) ;
    }
  }

  detached() : void {

  }



  public get host() : Element {
    return this._host;
  }

  public get height() : number {
    let host = this._host;
    if((host as HTMLElement).offsetHeight) {
      return (host as HTMLElement).offsetHeight;
    }
    return host.clientHeight;
  }

  public get width() : number {
    let host = this._host;
    if((host as HTMLElement).offsetWidth) {
      return (host as HTMLElement).offsetWidth;
    }
    return host.clientWidth;
  }

  public hostPath() : string {
      if (this.hostOrSelector === 'string') {
          return this.hostOrSelector;
      } else {
          let path = [],
              el = this._host as any;
          while (el.nodeType === Node.ELEMENT_NODE) {
              let selector = el.nodeName.toLowerCase();
              if (el.id) {
                  selector += '#' + el.id;
                  path.unshift(selector);
                  break;
              } else {
                  let sib = el, nth = 1;
                  while (sib = sib.previousElementSibling) {
                      if (sib.nodeName.toLowerCase() == selector)
                          nth++;
                  }
                  if (nth != 1)
                      selector += ":nth-of-type("+nth+")";
              }
              path.unshift(selector);
              el = el.parentNode;
          }
          return path.join(" > ");
      }
  }

}