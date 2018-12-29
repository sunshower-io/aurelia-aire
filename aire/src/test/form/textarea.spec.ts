import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `
  aire-textarea(label.bind="textLabel")
  `;
    component = newComponent(template, bindingContext, 'form/textarea');
}

afterEach(() => {
    component.dispose();
});

test("a textarea should initialize", async (done) => {
    initialize({textLabel : "Hello"});
    await component.create(bootstrap);
    let textarea = document.querySelector('textarea.uk-textarea');
    expect(textarea).toBeTruthy();
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

test("a label should be for a textarea", async (done) => {
    initialize({textLabel : "Hello"});
    await component.create(bootstrap);
    let label = document.querySelector('label.uk-form-label') as HTMLLabelElement,
        textarea = document.querySelector('textarea.uk-textarea') as HTMLTextAreaElement;
    expect(label.htmlFor).toBe(textarea.id);
    done();
});

test("a textarea should go disabled when true in binding context", async (done) => {
    initialize({textLabel : "Hello", disabled : "true"}, `
aire-textarea(label.bind="textLabel" disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let textarea = document.querySelector('textarea') as any;
    expect(textarea.disabled).toBeTruthy();
    done();
});

test("a textarea should not go disabled when false in binding context", async (done) => {
    initialize({textLabel : "Hello", disabled : "false"}, `
aire-textarea(label.bind="textLabel" disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let textarea = document.querySelector('textarea') as any;
    expect(textarea.disabled).toBeTruthy();
    done();
});

test("a textarea should not go disabled when not in binding context", async (done) => {
    initialize({textLabel : "Hello"}, `
aire-textarea(label.bind="textLabel")
  `);
    await component.create(bootstrap);
    let textarea = document.querySelector('textarea') as any;
    expect(textarea.disabled).toBeFalsy();
    done();
});

test("a textarea can take a horizontal argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-textarea(label.bind="textLabel" horizontal)
  `);
    await component.create(bootstrap);
    let textarea = document.querySelector('.uk-form-horizontal');
    expect(textarea).toBeTruthy();
    done();
});

test("a textarea can take a success argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-textarea(label.bind="textLabel" success)
  `);
    await component.create(bootstrap);
    let textarea = document.querySelector('textarea.uk-form-success');
    expect(textarea).toBeTruthy();
    done();
});

test("a textarea can take a danger argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-textarea(label.bind="textLabel" danger)
  `);
    await component.create(bootstrap);
    let textarea = document.querySelector('textarea.uk-form-danger');
    expect(textarea).toBeTruthy();
    done();
});

test("a textarea can take a blank argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-textarea(label.bind="textLabel" blank)
  `);
    await component.create(bootstrap);
    let textarea = document.querySelector('textarea.uk-form-blank');
    expect(textarea).toBeTruthy();
    done();
});