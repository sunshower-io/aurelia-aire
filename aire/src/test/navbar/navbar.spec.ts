import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `
  aire-navbar(router.bind="router")
  `;
    component = newComponent(template, bindingContext, 'navbar/navbar');
}

afterEach(() => {
    component.dispose();
});

test("a navbar should initialize", async (done) => {
    initialize({});
    await component.create(bootstrap);
    let nav = document.querySelector('nav.uk-navbar-container');
    expect(nav).toBeTruthy();
    done();
});

test("a navbar can take a sticky argument", async(done) => {
    initialize({}, `
aire-navbar(sticky)
  `);
    await component.create(bootstrap);
    let nav = document.querySelector('.uk-navbar.uk-navbar-sticky');
    expect(nav).toBeTruthy();
    done();
});

test("a navbar can take a transparent argument", async(done) => {
    initialize({}, `
aire-navbar(transparent)
  `);
    await component.create(bootstrap);
    let nav = document.querySelector('.uk-navbar.uk-navbar-transparent');
    expect(nav).toBeTruthy();
    done();
});

test("a navbar can take a dark argument", async(done) => {
    initialize({}, `
aire-navbar(dark)
  `);
    await component.create(bootstrap);
    let nav = document.querySelector('.uk-navbar.uk-dark');
    expect(nav).toBeTruthy();
    done();
});

test("a navbar can take a light argument", async(done) => {
    initialize({}, `
aire-navbar(light)
  `);
    await component.create(bootstrap);
    let nav = document.querySelector('.uk-navbar.uk-light');
    expect(nav).toBeTruthy();
    done();
});