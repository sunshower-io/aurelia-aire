import 'reflect-metadata';
import 'aurelia-polyfills';

import {StageComponent} from "aurelia-testing";
import {bootstrap}      from 'aurelia-bootstrapper';
import {PLATFORM}       from 'aurelia-pal';
import {render}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
  let template = templateString ? templateString : `
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

test("a button's text must be bindable ", async (done) => {
  initialize({textLabel : "Hello"});
  await component.create(bootstrap);
  let button = document.querySelector('.uk-button');
  expect(button.textContent).toBe("Hello");
  done();
});

test("a button must not have an icon when icon is not present in binding context", async (done) => {
  initialize({textLabel : "Hello"});
  await component.create(bootstrap);
  let button = document.querySelector('.uk-button');
  expect(button.firstElementChild).toBeFalsy();
  done();
});

test("a button have an icon when icon is not present in binding context", async (done) => {
  initialize({textLabel : "Hello", icon : "Helloworld"});
  await component.create(bootstrap);
  let button = document.querySelector('.uk-button');
  expect(button.firstElementChild).toBeTruthy();
  done();
});

test("a button should go disabled when true in binding context", async (done) => {
    initialize({textLabel : "Hello", disabled : "true"}, `
aire-button(label.bind="textLabel" disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button') as any;
    expect(button.disabled).toBeTruthy();
    done();
});

test("a button should not go disabled when false in binding context", async (done) => {
    initialize({textLabel : "Hello", disabled : "false"}, `
aire-button(label.bind="textLabel" disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button') as any;
    expect(button.disabled).toBeTruthy();
    done();
});

test("a button should not go disabled when not in binding context", async (done) => {
    initialize({textLabel : "Hello"}, `
aire-button(label.bind="textLabel")
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button') as any;
    expect(button.disabled).toBeFalsy();
    done();
});

test("a button can take a default argument", async(done) => {
  initialize({textLabel: "Henlo"}, `
aire-button(label.bind="textLabel", icon.bind="icon" default)
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.uk-button-default');
    expect(button).toBeTruthy();
    done();
});

test("a button can take a primary argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-button(label.bind="textLabel", icon.bind="icon" primary)
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.uk-button-primary');
    expect(button).toBeTruthy();
    done();
});

test("a button can take a secondary argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-button(label.bind="textLabel", icon.bind="icon" secondary)
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.uk-button-secondary');
    expect(button).toBeTruthy();
    done();
});

test("a button can take a danger argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-button(label.bind="textLabel", icon.bind="icon" danger)
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.uk-button-danger');
    expect(button).toBeTruthy();
    done();
});

test("a button can take a text argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-button(label.bind="textLabel", icon.bind="icon" text)
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.uk-button-text');
    expect(button).toBeTruthy();
    done();
});

test("a button can take a link argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-button(label.bind="textLabel", icon.bind="icon" link)
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.uk-button-link');
    expect(button).toBeTruthy();
    done();
});

test("a button can take a full argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-button(label.bind="textLabel", icon.bind="icon" full)
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.uk-width-1-1');
    expect(button).toBeTruthy();
    done();
});

test("a button can take a small argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-button(label.bind="textLabel", icon.bind="icon" small)
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.uk-button-small');
    expect(button).toBeTruthy();
    done();
});

test("a button can take a large argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-button(label.bind="textLabel", icon.bind="icon" large)
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.uk-button-large');
    expect(button).toBeTruthy();
    done();
});

test("a button can take a square argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-button(label.bind="textLabel", icon.bind="icon" square)
  `);
    await component.create(bootstrap);
    let button = document.querySelector('.uk-button.aire-button-square');
    expect(button).toBeTruthy();
    done();
});