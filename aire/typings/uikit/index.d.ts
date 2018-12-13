



declare module "uikit" {

  export interface OffCanvas {
    show() : void;
    hide(): void;
  }

  export interface NavBar {

  }

  export function navbar(el: Element, options?:any) : NavBar;

  export function offcanvas(el:Element, options?:any): OffCanvas;

}