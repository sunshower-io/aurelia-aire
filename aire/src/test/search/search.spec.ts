import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `
  aire-search
  `;
    component = newComponent(template, bindingContext, 'search/search');
}

afterEach(() => {
    component.dispose();
});

test("a search should initialize a form", async (done) => {
    initialize({});
    await component.create(bootstrap);
    let search = document.querySelector('form.uk-search');
    expect(search).toBeTruthy();
    done();
});

test("a search should initialize an input", async (done) => {
    initialize({});
    await component.create(bootstrap);
    let search = document.querySelector('input.uk-search-input');
    expect(search).toBeTruthy();
    done();
});

test("a search can bind a placeholder", async(done) => {
    initialize({placeholder: "Search Me"}, `
aire-search(placeholder.bind="placeholder")
  `);
    await component.create(bootstrap);
    let search = document.querySelector('.uk-search-input') as HTMLInputElement;
    expect(search.placeholder).toBe("Search Me");
    done();
});

test("a search can take a default argument", async(done) => {
    initialize({}, `
aire-search(default)
  `);
    await component.create(bootstrap);
    let search = document.querySelector('.uk-search.uk-search-default');
    expect(search).toBeTruthy();
    done();
});

test("a search can take a large argument", async(done) => {
    initialize({}, `
aire-search(large)
  `);
    await component.create(bootstrap);
    let search = document.querySelector('.uk-search.uk-search-large');
    expect(search).toBeTruthy();
    done();
});

test("a search can take a navbar argument", async(done) => {
    initialize({}, `
aire-search(navbar)
  `);
    await component.create(bootstrap);
    let search = document.querySelector('.uk-search.uk-search-navbar');
    expect(search).toBeTruthy();
    done();
});

test("a search can take a flip argument", async(done) => {
    initialize({}, `
aire-search(flip)
  `);
    await component.create(bootstrap);
    let search = document.querySelector('.uk-search span.uk-search-icon-flip');
    expect(search).toBeTruthy();
    done();
});