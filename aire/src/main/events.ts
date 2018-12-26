export namespace Events {

  export namespace NavigationEvent {
    export const ITEM_CLICKED = 'nav:item:clicked';
  }

  export namespace RouterEvent {

    const prefix = 'router:navigation:';
    export const PROCESSING = prefix + 'processing';
    export const ERROR = prefix + 'error';
    export const CANCELED = prefix + 'canceled';
    export const SUCCESS = prefix + 'success';
    export const COMPLETE = prefix + 'complete';
  }

}