import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `
  aire-range(label.bind="textLabel")
  `;
    component = newComponent(template, bindingContext, 'form/range');
}

afterEach(() => {
    component.dispose();
});

test("a range should initialize", async (done) => {
    initialize({textLabel : "Hello"});
    await component.create(bootstrap);
    let range = document.querySelector('input.uk-range');
    expect(range).toBeTruthy();
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

test("a label should be for a range", async (done) => {
    initialize({textLabel : "Hello"});
    await component.create(bootstrap);
    let label = document.querySelector('label.uk-form-label') as HTMLLabelElement,
        range = document.querySelector('input.uk-range') as HTMLInputElement;
    expect(label.htmlFor).toBe(range.id);
    done();
});

test("a range should go disabled when true in binding context", async (done) => {
    initialize({textLabel : "Hello", disabled : "true"}, `
aire-range(label.bind="textLabel" disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let range = document.querySelector('input') as any;
    expect(range.disabled).toBeTruthy();
    done();
});

test("a range should not go disabled when false in binding context", async (done) => {
    initialize({textLabel : "Hello", disabled : "false"}, `
aire-range(label.bind="textLabel" disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let range = document.querySelector('input') as any;
    expect(range.disabled).toBeTruthy();
    done();
});

test("a range should not go disabled when not in binding context", async (done) => {
    initialize({textLabel : "Hello"}, `
aire-range(label.bind="textLabel")
  `);
    await component.create(bootstrap);
    let range = document.querySelector('input') as any;
    expect(range.disabled).toBeFalsy();
    done();
});

test("a range can take a horizontal argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-range(label.bind="textLabel" horizontal)
  `);
    await component.create(bootstrap);
    let range = document.querySelector('.uk-form-horizontal');
    expect(range).toBeTruthy();
    done();
});

test("a range can take a success argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-range(label.bind="textLabel" success)
  `);
    await component.create(bootstrap);
    let range = document.querySelector('input.uk-form-success');
    expect(range).toBeTruthy();
    done();
});

test("a range can take a error argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-range(label.bind="textLabel" error)
  `);
    await component.create(bootstrap);
    let range = document.querySelector('input.uk-form-error');
    expect(range).toBeTruthy();
    done();
});

test("a range can take a blank argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-range(label.bind="textLabel" blank)
  `);
    await component.create(bootstrap);
    let range = document.querySelector('input.uk-form-blank');
    expect(range).toBeTruthy();
    done();
});