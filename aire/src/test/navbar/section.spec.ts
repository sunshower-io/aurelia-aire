import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `
aire-navbar
  navbar-section
  `;
    component = newComponent(template, bindingContext, 'navbar/navbar', 'navbar/section');
}

afterEach(() => {
    component.dispose();
});

test("a section should initialize with a slot", async (done) => {
    initialize({}, `
aire-navbar
  navbar-section
    p Hi
  `);
    await component.create(bootstrap);
    let nav = document.querySelector('navbar-section p');
    expect(nav).toBeTruthy();
    done();
});

test("a section can take a left argument", async(done) => {
    initialize({}, `
aire-navbar
  navbar-section(left)
    p Hi
  `);
    await component.create(bootstrap);
    let nav = document.querySelector('.uk-navbar-left');
    expect(nav).toBeTruthy();
    done();
});

test("a section can take a right argument", async(done) => {
    initialize({}, `
aire-navbar
  navbar-section(right)
    p Hi
  `);
    await component.create(bootstrap);
    let nav = document.querySelector('.uk-navbar-right');
    expect(nav).toBeTruthy();
    done();
});

test("a section can take a center argument", async(done) => {
    initialize({}, `
aire-navbar
  navbar-section(center)
    p Hi
  `);
    await component.create(bootstrap);
    let nav = document.querySelector('.uk-navbar-center');
    expect(nav).toBeTruthy();
    done();
});