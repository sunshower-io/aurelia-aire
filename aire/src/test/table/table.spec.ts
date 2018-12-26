import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `
  aire-table
  `;
    component = newComponent(template, bindingContext, 'table/table');
}

afterEach(() => {
    component.dispose();
});

test("a table should initialize", async (done) => {
    initialize({});
    await component.create(bootstrap);
    let table = document.querySelector('table.uk-table');
    expect(table).toBeTruthy();
    done();
});

test("a table can have a caption", async(done) => {
    initialize({caption: "My Table"}, `
aire-table(caption.bind="caption")
  `);
    await component.create(bootstrap);
    let table = document.querySelector('.uk-table caption');
    expect(table).toBeTruthy();
    expect(table.textContent).toBe("My Table");
    done();
});

test("a table can have a header", async(done) => {
    initialize({}, `
aire-table(header)
  `);
    await component.create(bootstrap);
    let table = document.querySelector('.uk-table thead');
    expect(table).toBeTruthy();
    done();
});

test("a table can have a footer", async(done) => {
    initialize({}, `
aire-table(footer)
  `);
    await component.create(bootstrap);
    let table = document.querySelector('.uk-table tfoot');
    expect(table).toBeTruthy();
    done();
});

test("a table can take a divider argument", async(done) => {
    initialize({}, `
aire-table(divider)
  `);
    await component.create(bootstrap);
    let table = document.querySelector('.uk-table.uk-table-divider');
    expect(table).toBeTruthy();
    done();
});

test("a table can take a striped argument", async(done) => {
    initialize({}, `
aire-table(striped)
  `);
    await component.create(bootstrap);
    let table = document.querySelector('.uk-table.uk-table-striped');
    expect(table).toBeTruthy();
    done();
});

test("a table can take a hover argument", async(done) => {
    initialize({}, `
aire-table(hover)
  `);
    await component.create(bootstrap);
    let table = document.querySelector('.uk-table.uk-table-hover');
    expect(table).toBeTruthy();
    done();
});

test("a table can take a justify argument", async(done) => {
    initialize({}, `
aire-table(justify)
  `);
    await component.create(bootstrap);
    let table = document.querySelector('.uk-table.uk-table-justify');
    expect(table).toBeTruthy();
    done();
});

test("a table can take a middle argument", async(done) => {
    initialize({}, `
aire-table(middle)
  `);
    await component.create(bootstrap);
    let table = document.querySelector('.uk-table.uk-table-middle');
    expect(table).toBeTruthy();
    done();
});
