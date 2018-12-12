



declare module "uikit" {

  export interface OffCanvas {
    show() : void;
    hide(): void;
  }

  export function offcanvas(el:Element, options?:any): OffCanvas;

}