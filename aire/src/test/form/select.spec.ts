import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `
  aire-select(label.bind="textLabel" data.bind="options")
  `;
    component = newComponent(template, bindingContext, 'form/select');
}

afterEach(() => {
    component.dispose();
});

test("a select should initialize", async (done) => {
    initialize({textLabel : "Hello"});
    await component.create(bootstrap);
    let select = document.querySelector('select.uk-select');
    expect(select).toBeTruthy();
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

test("a label should be for a select", async (done) => {
    initialize({textLabel : "Hello"});
    await component.create(bootstrap);
    let label = document.querySelector('label.uk-form-label') as HTMLLabelElement,
        select = document.querySelector('select.uk-select') as HTMLSelectElement;
    expect(label.htmlFor).toBe(select.id);
    done();
});

test.skip("a select should take an array of objects with labels and values", async (done) => {
    initialize({options: [{label: "Thing One", value: "One"}, {label: "Thing Two", Value: "Two"}]});
    await component.create(bootstrap);
    let options = document.querySelectorAll('select.uk-select option'),
    option1 = document.querySelector('option[value="One"]');
    expect(options.length).toBe(2);
    expect(option1.textContent).toBe("Thing One");
    done();
});

test.skip("a select should take a single object with a label and value", async (done) => {
    initialize({options: {label: "Thing One", value: "One"}});
    await component.create(bootstrap);
    let options = document.querySelectorAll('select.uk-select option'),
        option1 = document.querySelector('option[value="One"]');
    expect(options.length).toBe(1);
    expect(option1.textContent).toBe("Thing One");
    done();
});

test("a select should go disabled when true in binding context", async (done) => {
    initialize({textLabel : "Hello", disabled : "true"}, `
aire-select(label.bind="textLabel" disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let select = document.querySelector('select') as HTMLSelectElement;
    expect(select.disabled).toBeTruthy();
    done();
});

test("a select should not go disabled when false in binding context", async (done) => {
    initialize({textLabel : "Hello", disabled : "false"}, `
aire-select(label.bind="textLabel" disabled.bind="disabled")
  `);
    await component.create(bootstrap);
    let select = document.querySelector('select') as HTMLSelectElement;
    expect(select.disabled).toBeTruthy();
    done();
});

test("a select should not go disabled when not in binding context", async (done) => {
    initialize({textLabel : "Hello"}, `
aire-select(label.bind="textLabel")
  `);
    await component.create(bootstrap);
    let select = document.querySelector('select') as HTMLSelectElement;
    expect(select.disabled).toBeFalsy();
    done();
});

test("a select can take a horizontal argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-select(label.bind="textLabel" horizontal)
  `);
    await component.create(bootstrap);
    let select = document.querySelector('.uk-form-horizontal');
    expect(select).toBeTruthy();
    done();
});

test("a select can take a success argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-select(label.bind="textLabel" success)
  `);
    await component.create(bootstrap);
    let select = document.querySelector('select.uk-form-success');
    expect(select).toBeTruthy();
    done();
});

test("a select can take a danger argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-select(label.bind="textLabel" danger)
  `);
    await component.create(bootstrap);
    let select = document.querySelector('select.uk-form-danger');
    expect(select).toBeTruthy();
    done();
});

test("a select can take a blank argument", async(done) => {
    initialize({textLabel: "Henlo"}, `
aire-select(label.bind="textLabel" blank)
  `);
    await component.create(bootstrap);
    let select = document.querySelector('select.uk-form-blank');
    expect(select).toBeTruthy();
    done();
});