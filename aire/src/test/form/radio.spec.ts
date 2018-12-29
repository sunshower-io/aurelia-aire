import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `
  aire-radio(label.bind="textLabel")
  `;
    component = newComponent(template, bindingContext, 'form/radio');
}

afterEach(() => {
    component.dispose();
});

test("a radio should initialize", async (done) => {
    initialize({textLabel : "Hello"});
    await component.create(bootstrap);
    let radio = document.querySelector('input.uk-radio');
    expect(radio).toBeTruthy();
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

test("a label should be for a radio", async (done) => {
    initialize({textLabel : "Hello"});
    await component.create(bootstrap);
    let label = document.querySelector('label.uk-form-label') as HTMLLabelElement,
        radio = document.querySelector('input.uk-radio') as HTMLInputElement;
    expect(label.htmlFor).toBe(radio.id);
    done();
});

test("a radio should go disabled when true in binding context", async (done) => {
    initialize({textLabel : "Hello", disabled : "true"}, `
aire-radio(label.bind="textLabel" disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let radio = document.querySelector('input') as any;
    expect(radio.disabled).toBeTruthy();
    done();
});

test.skip("a radio should not go disabled when false in binding context", async (done) => {
    initialize({textLabel : "Hello", disabled : "false"}, `
aire-radio(label.bind="textLabel" disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let radio = document.querySelector('input') as any;
    expect(radio.disabled).toBeTruthy();
    done();
});

test.skip("a radio should not go disabled when not in binding context", async (done) => {
    initialize({textLabel : "Hello"}, `
aire-radio(label.bind="textLabel")
  `);
    await component.create(bootstrap);
    let radio = document.querySelector('input') as any;
    expect(radio.disabled).toBeFalsy();
    done();
});

test.skip("a radio should be selected when true in binding context", async (done) => {
    initialize({textLabel : "Hello", selected : "true"}, `
aire-radio(label.bind="textLabel" selected.bind="selected")
  `);
    await component.create(bootstrap);
    let radio = document.querySelector('input') as HTMLInputElement;
    expect(radio.checked).toBeTruthy();
    done();
});

test.skip("a radio should not be selected when false in binding context", async (done) => {
    initialize({textLabel : "Hello", selected : "false"}, `
aire-radio(label.bind="textLabel" selected.bind="selected")
  `);
    await component.create(bootstrap);
    let radio = document.querySelector('input') as any;
    expect(radio.checked).toBeFalsy();
    done();
});

test.skip("a radio should not be selected when not in binding context", async (done) => {
    initialize({textLabel : "Hello"}, `
aire-radio(label.bind="textLabel")
  `);
    await component.create(bootstrap);
    let radio = document.querySelector('input') as any;
    expect(radio.checked).toBeFalsy();
    done();
});

test("a radio can be part of a group", async (done) => {
    initialize({name : "Hello"}, `
aire-radio(name.bind="name")
  `);
    await component.create(bootstrap);
    let radio = document.querySelector('input') as HTMLInputElement;
    expect(radio.name).toBe("Hello");
    done();
});

test("a radio can take a horizontal argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-radio(label.bind="textLabel" horizontal)
  `);
    await component.create(bootstrap);
    let radio = document.querySelector('.uk-form-horizontal');
    expect(radio).toBeTruthy();
    done();
});

test("a radio can take a success argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-radio(label.bind="textLabel" success)
  `);
    await component.create(bootstrap);
    let radio = document.querySelector('input.uk-form-success');
    expect(radio).toBeTruthy();
    done();
});

test("a radio can take a danger argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-radio(label.bind="textLabel" danger)
  `);
    await component.create(bootstrap);
    let radio = document.querySelector('input.uk-form-danger');
    expect(radio).toBeTruthy();
    done();
});

test("a radio can take a blank argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-radio(label.bind="textLabel" blank)
  `);
    await component.create(bootstrap);
    let radio = document.querySelector('input.uk-form-blank');
    expect(radio).toBeTruthy();
    done();
});