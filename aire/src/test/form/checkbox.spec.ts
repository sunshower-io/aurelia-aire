import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `
  aire-checkbox(label.bind="textLabel")
  `;
    component = newComponent(template, bindingContext, 'form/checkbox');
}

afterEach(() => {
    component.dispose();
});

test("a checkbox should initialize", async (done) => {
    initialize({textLabel : "Hello"});
    await component.create(bootstrap);
    let checkbox = document.querySelector('input.uk-checkbox');
    expect(checkbox).toBeTruthy();
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

test("a label should be for a checkbox", async (done) => {
    initialize({textLabel : "Hello"});
    await component.create(bootstrap);
    let label = document.querySelector('label.uk-form-label') as HTMLLabelElement,
        checkbox = document.querySelector('input.uk-checkbox') as HTMLInputElement;
    expect(label.htmlFor).toBe(checkbox.id);
    done();
});

test("a checkbox should go disabled when true in binding context", async (done) => {
    initialize({textLabel : "Hello", disabled : "true"}, `
aire-checkbox(label.bind="textLabel" disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let checkbox = document.querySelector('input') as any;
    expect(checkbox.disabled).toBeTruthy();
    done();
});

test("a checkbox should not go disabled when false in binding context", async (done) => {
    initialize({textLabel : "Hello", disabled : "false"}, `
aire-checkbox(label.bind="textLabel" disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let checkbox = document.querySelector('input') as any;
    expect(checkbox.disabled).toBeTruthy();
    done();
});

test("a checkbox should not go disabled when not in binding context", async (done) => {
    initialize({textLabel : "Hello"}, `
aire-checkbox(label.bind="textLabel")
  `);
    await component.create(bootstrap);
    let checkbox = document.querySelector('input') as any;
    expect(checkbox.disabled).toBeFalsy();
    done();
});

test("a checkbox should be selected when true in binding context", async (done) => {
    initialize({textLabel : "Hello", selected : "true"}, `
aire-checkbox(label.bind="textLabel" selected.bind="selected")
  `);
    await component.create(bootstrap);
    let checkbox = document.querySelector('input') as HTMLInputElement;
    expect(checkbox.checked).toBeTruthy();
    done();
});

test("a checkbox should not be selected when false in binding context", async (done) => {
    initialize({textLabel : "Hello", selected : "false"}, `
aire-checkbox(label.bind="textLabel" selected.bind="selected")
  `);
    await component.create(bootstrap);
    let checkbox = document.querySelector('input') as any;
    expect(checkbox.checked).toBeFalsy();
    done();
});

test("a checkbox should not be selected when not in binding context", async (done) => {
    initialize({textLabel : "Hello"}, `
aire-checkbox(label.bind="textLabel")
  `);
    await component.create(bootstrap);
    let checkbox = document.querySelector('input') as any;
    expect(checkbox.checked).toBeFalsy();
    done();
});

test("a checkbox can be part of a group", async (done) => {
    initialize({name : "Hello"}, `
aire-checkbox(name.bind="name")
  `);
    await component.create(bootstrap);
    let checkbox = document.querySelector('input') as HTMLInputElement;
    expect(checkbox.name).toBe("Hello");
    done();
});

test("a checkbox can take a horizontal argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-checkbox(label.bind="textLabel" horizontal)
  `);
    await component.create(bootstrap);
    let checkbox = document.querySelector('.uk-form-horizontal');
    expect(checkbox).toBeTruthy();
    done();
});

test("a checkbox can take a success argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-checkbox(label.bind="textLabel" success)
  `);
    await component.create(bootstrap);
    let checkbox = document.querySelector('input.uk-form-success');
    expect(checkbox).toBeTruthy();
    done();
});

test("a checkbox can take a error argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-checkbox(label.bind="textLabel" error)
  `);
    await component.create(bootstrap);
    let checkbox = document.querySelector('input.uk-form-error');
    expect(checkbox).toBeTruthy();
    done();
});

test("a checkbox can take a blank argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-checkbox(label.bind="textLabel" blank)
  `);
    await component.create(bootstrap);
    let checkbox = document.querySelector('input.uk-form-blank');
    expect(checkbox).toBeTruthy();
    done();
});