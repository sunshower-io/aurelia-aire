import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `
aire-navbar
  navbar-section
    navbar-item
  `;
    component = newComponent(template, bindingContext, 'navbar/navbar', 'navbar/section', 'navbar/item', 'icon/icon');
}

afterEach(() => {
    component.dispose();
});

test("an item should initialize", async (done) => {
    initialize({}, `
aire-navbar
  navbar-section
    navbar-item
  `);
    await component.create(bootstrap);
    let nav = document.querySelector('.uk-navbar-item');
    expect(nav).toBeTruthy();
    done();
});

test("an item should initialize with a slot", async (done) => {
    initialize({}, `
aire-navbar
  navbar-section
    navbar-item
        p heck
  `);
    await component.create(bootstrap);
    let nav = document.querySelector('.uk-navbar-item p');
    expect(nav).toBeTruthy();
    expect(nav.textContent).toBe("heck");
    done();
});

test.skip("an item can take an icon", async (done) => {
    initialize({}, `
aire-navbar
  navbar-section
    navbar-item(icon.bind="pencil")
  `);
    await component.create(bootstrap);
    let nav = document.querySelector('.uk-navbar-item .aire-icon');
    expect(nav).toBeTruthy();
    expect(nav.classList.contains("pencil")).toBeTruthy();
    done();
});

test("an item can be active", async (done) => {
    initialize({}, `
aire-navbar
  navbar-section
    navbar-item(active)
  `);
    await component.create(bootstrap);
    let nav = document.querySelector('.uk-navbar-item.uk-active');
    expect(nav).toBeTruthy();
    done();
});