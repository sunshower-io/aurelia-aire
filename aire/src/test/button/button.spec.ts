import 'reflect-metadata';
import 'aurelia-polyfills';

import {StageComponent} from "aurelia-testing";
import {bootstrap}      from 'aurelia-bootstrapper';
import {PLATFORM}       from 'aurelia-pal';
import {render}         from "test/render";


let component : any;


function initialize(bindingContext : any) {
  let template = `
  aire-button(label.bind="textLabel", icon.bind="icon")
  `;
  component = StageComponent.withResources(
    PLATFORM.moduleName('button/button'))
                            .inView(render(template)
                            ).boundTo(bindingContext);
}

afterEach(() => {
  component.dispose();
});

test("a button's text must be bindable ", async () => {
  initialize({textLabel : "Hello"});
  await component.create(bootstrap);
  let button = document.querySelector('.uk-button');
  expect(button.textContent).toBe("Hello");
});

test("a button must not have an icon when icon is not present in binding context", async () => {
  initialize({textLabel : "Hello"});
  await component.create(bootstrap);
  let button = document.querySelector('.uk-button');
  expect(button.firstElementChild).toBeFalsy();
});

test("a button must not have an icon when icon is not present in binding context", async () => {
  initialize({textLabel : "Hello"});
  await component.create(bootstrap);
  let button = document.querySelector('.uk-button');
  expect(button.firstElementChild).toBeFalsy();
});

test("a button have an icon when icon is not present in binding context", async () => {
  initialize({textLabel : "Hello", icon : "Helloworld"});
  await component.create(bootstrap);
  let button = document.querySelector('.uk-button');
  expect(button.firstElementChild).toBeTruthy();
});
