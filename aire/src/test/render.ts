import * as pug from 'pug';

import {PLATFORM}       from 'aurelia-pal';
import {
  StageComponent,
  ComponentTester
} from 'aurelia-testing';

export function render(template: string, options?:any) : string {
  return pug.compile(template.trim())(options);
}


export function newComponent(
  template: string,
  bindingContext: any,
  ...moduleNames:string[]
) : ComponentTester {
  if(!(moduleNames || moduleNames.length)) {
    throw new Error("You must supply at least one module name");
  }
  return StageComponent.withResources(
    moduleNames.map(t => PLATFORM.moduleName(t)))
    .inView(render(template)).boundTo(bindingContext);

}