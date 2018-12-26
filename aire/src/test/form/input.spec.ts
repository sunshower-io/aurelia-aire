import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `
  aire-input(label.bind="textLabel")
  `;
    component = newComponent(template, bindingContext, 'form/input', 'icon/icon');
}

afterEach(() => {
    component.dispose();
});

test("a input should initialize", async (done) => {
    initialize({textLabel : "Hello"});
    await component.create(bootstrap);
    let input = document.querySelector('input.uk-input');
    expect(input).toBeTruthy();
    done();
});

test("a input should take a type", async (done) => {
    initialize({textLabel : "Hello", type : "password"}, `
aire-input(label.bind="textLabel" type.bind="type")
  `);
    await component.create(bootstrap);
    let input = document.querySelector('input.uk-input') as HTMLInputElement;
    expect(input.type).toBe("password");
    done();
});

test.skip("a input can take an icon", async (done) => {
    initialize({icon: 'testClass'}, `
aire-input(icon.bind="icon")
  `);
    await component.create(bootstrap);
    let icon = document.querySelector('.uk-form-controls span');
    expect(icon.classList.contains("testClass")).toBeTruthy();
    done();
});

test.skip("a input can have its icon flipped", async (done) => {
    initialize({icon: 'testClass'}, `
aire-input(icon.bind="icon" flip)
  `);
    await component.create(bootstrap);
    let icon = document.querySelector('.uk-form-controls span');
    expect(icon.classList.contains("uk-form-icon-flip")).toBeTruthy();
    done();
});

test.skip("a input's parent should be inline if there is an icon", async (done) => {
    initialize({icon: 'testClass'}, `
aire-input(icon.bind="icon")
  `);
    await component.create(bootstrap);
    let container = document.querySelector('.uk-form-controls.uk-inline');
    expect(container).toBeTruthy();
    done();
});

test("a label should not initialize if not present in binding context", async (done) => {
    initialize({});
    await component.create(bootstrap);
    let label = document.querySelector('label.uk-form-label');
    expect(label).toBeFalsy();
    done();
});

test("a label should initialize if present in binding context", async (done) => {
    initialize({textLabel : "Hello"});
    await component.create(bootstrap);
    let label = document.querySelector('label.uk-form-label');
    expect(label).toBeTruthy();
    done();
});

test("a label should be for a input", async (done) => {
    initialize({textLabel : "Hello"});
    await component.create(bootstrap);
    let label = document.querySelector('label.uk-form-label') as HTMLLabelElement,
        input = document.querySelector('input.uk-input') as HTMLInputElement;
    expect(label.htmlFor).toBe(input.id);
    done();
});

test("a input should go disabled when true in binding context", async (done) => {
    initialize({textLabel : "Hello", disabled : "true"}, `
aire-input(label.bind="textLabel" disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let input = document.querySelector('input') as any;
    expect(input.disabled).toBeTruthy();
    done();
});

test("a input should not go disabled when false in binding context", async (done) => {
    initialize({textLabel : "Hello", disabled : "false"}, `
aire-input(label.bind="textLabel" disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let input = document.querySelector('input') as any;
    expect(input.disabled).toBeTruthy();
    done();
});

test("a input should not go disabled when not in binding context", async (done) => {
    initialize({textLabel : "Hello"}, `
aire-input(label.bind="textLabel")
  `);
    await component.create(bootstrap);
    let input = document.querySelector('input') as any;
    expect(input.disabled).toBeFalsy();
    done();
});

test("a input can take a horizontal argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-input(label.bind="textLabel" horizontal)
  `);
    await component.create(bootstrap);
    let input = document.querySelector('.uk-form-horizontal');
    expect(input).toBeTruthy();
    done();
});

test("a input can take a success argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-input(label.bind="textLabel" success)
  `);
    await component.create(bootstrap);
    let input = document.querySelector('input.uk-form-success');
    expect(input).toBeTruthy();
    done();
});

test("a input can take a error argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-input(label.bind="textLabel" error)
  `);
    await component.create(bootstrap);
    let input = document.querySelector('input.uk-form-error');
    expect(input).toBeTruthy();
    done();
});

test("a input can take a blank argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-input(label.bind="textLabel" blank)
  `);
    await component.create(bootstrap);
    let input = document.querySelector('input.uk-form-blank');
    expect(input).toBeTruthy();
    done();
});