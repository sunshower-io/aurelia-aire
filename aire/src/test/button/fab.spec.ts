import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent} from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
  let template = templateString ? templateString : `
  aire-fab(icon.bind="icon")
  `;

  component = newComponent(template, bindingContext, "button/fab", "icon/icon");
}

afterEach(() => {
  component.dispose();
});

test("a button's icon must be bindable with a class", async (done) => {
  initialize({icon : "Hello"});
  await component.create(bootstrap);
  let button = document.querySelector('.uk-button.aire-fab span');
  expect(button.classList.contains("Hello")).toBeTruthy();
  done();
});

test("a button's icon must be bindable with a url", async (done) => {
    initialize({icon : "hello.png"});
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.aire-fab img');
    expect(button).toBeTruthy();
    done();
});

test("a button must have set edges", async (done) => {
    initialize({});
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.aire-fab') as HTMLElement,
        style = Object.keys((button.style as any)._importants);
    expect(style).toContain("top");
    expect(style).toContain("right");
    expect(style).toContain("bottom");
    expect(style).toContain("left");
    done(); //TODO determine way to test this that actually checks values
});

test("a button should go disabled when true in binding context", async (done) => {
    initialize({disabled : "true"}, `
aire-fab(disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.aire-fab') as any;
    expect(button.disabled).toBeTruthy();
    done();
});

test("a button should not go disabled when false in binding context", async (done) => {
    initialize({disabled : "false"}, `
aire-fab(disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.aire-fab') as any;
    expect(button.disabled).toBeTruthy();
    done();
});

test("a button should not go disabled when not in binding context", async (done) => {
    initialize({}, `
aire-fab(label.bind="textLabel")
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.aire-fab') as any;
    expect(button.disabled).toBeFalsy();
    done();
});

test("a button can take a default argument", async(done) => {
  initialize({}, `
aire-fab(label.bind="textLabel", icon.bind="icon" default)
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.aire-fab.uk-button-default');
    expect(button).toBeTruthy();
    done();
});

test("a button can take a primary argument", async(done) => {
    initialize({}, `
aire-fab(label.bind="textLabel", icon.bind="icon" primary)
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.aire-fab.uk-button-primary');
    expect(button).toBeTruthy();
    done();
});

test("a button can take a secondary argument", async(done) => {
    initialize({}, `
aire-fab(label.bind="textLabel", icon.bind="icon" secondary)
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.aire-fab.uk-button-secondary');
    expect(button).toBeTruthy();
    done();
});

test("a button can take a danger argument", async(done) => {
    initialize({}, `
aire-fab(label.bind="textLabel", icon.bind="icon" danger)
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.aire-fab.uk-button-danger');
    expect(button).toBeTruthy();
    done();
});