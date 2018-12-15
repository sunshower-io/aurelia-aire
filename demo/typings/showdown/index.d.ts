declare module 'showdown' {



  export namespace showdown {
    export class Converter {
      makeHtml(markdown: string) : string;
    }
  }
}