import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `
  aire-nav(router.bind="router")
  `;
    component = newComponent(template, bindingContext, 'nav/nav');
}

afterEach(() => {
    component.dispose();
});

test("a nav should initialize", async (done) => {
    initialize({});
    await component.create(bootstrap);
    let nav = document.querySelector('ul.uk-nav');
    expect(nav).toBeTruthy();
    done();
});

test("a nav can take a default argument", async(done) => {
    initialize({}, `
aire-nav(default)
  `);
    await component.create(bootstrap);
    let nav = document.querySelector('.uk-nav.uk-nav-default');
    expect(nav).toBeTruthy();
    done();
});

test("a nav can take a primary argument", async(done) => {
    initialize({}, `
aire-nav(primary)
  `);
    await component.create(bootstrap);
    let nav = document.querySelector('.uk-nav.uk-nav-primary');
    expect(nav).toBeTruthy();
    done();
});

test("a nav can take a center argument", async(done) => {
    initialize({}, `
aire-nav(center)
  `);
    await component.create(bootstrap);
    let nav = document.querySelector('.uk-nav.uk-nav-center');
    expect(nav).toBeTruthy();
    done();
});