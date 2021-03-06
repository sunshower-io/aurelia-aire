



declare module "uikit" {

  export namespace util {
    export function on(component: Component, event: string, el: string |number | HTMLElement, handler: any);
  }

  export interface Component {
  }

  export interface Dropdown extends Component {

  }

  export interface Accordion extends Component {

  }

  export interface OffCanvas extends Component {
    show() : void;
    hide(): void;
    toggle(): void;
  }

  export interface NavBar extends Component {

  }


  export interface TabPanel extends Component {

  }

  export interface Sticky extends Component {

  }


  export function tab(el:Element, options?: any) : TabPanel;

  export function navbar(el: Element, options?:any) : NavBar;

  export function offcanvas(el:Element, options?:any): OffCanvas;

  export function dropdown(el:Element, options?:any) : Dropdown;

  export function accordion(el:Element, options?:any) : Accordion;

  export function sticky(el:Element, options?:any) : Sticky;
}