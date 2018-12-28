import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}     from 'aurelia-bootstrapper';
import {newComponent}  from "test/render";

let component : any;


function initialize(bindingContext : any, template : string) {
    component = newComponent(template,
        bindingContext,
        'page/page', 'loader/loader'
    );
}

afterEach(() => {
    component.dispose();
});

test("a page should initialize", async(done) => {
   initialize({}, `aire-page`);
   await component.create(bootstrap);
   let page = document.querySelector('.aire-page .page');
   expect(page).toBeTruthy();
   done();
});

test("a page is animated", async(done) => {
    initialize({}, `aire-page(padded)`);
    await component.create(bootstrap);
    let page = document.querySelector('.aire-page.au-animate');
    expect(page).toBeTruthy();
    done();
});

test("a page has a slot", async(done) => {
    initialize({}, `
aire-page
    p Hello
    `);
    await component.create(bootstrap);
    let paragraph = document.querySelector('.aire-page .page p');
    expect(paragraph.textContent).toBe("Hello");
    done();
});

test("a page can be padded", async(done) => {
    initialize({}, `aire-page(padded)`);
    await component.create(bootstrap);
    let page = document.querySelector('.aire-page.padded');
    expect(page).toBeTruthy();
    done();
});

test("a page can be loading", async(done) => {
    initialize({loading: true}, 'aire-page(loading.bind="loading")');
    await component.create(bootstrap);
    let loader = document.querySelector('.aire-page .loader');
    expect(loader).toBeTruthy();
    done();
});

test("a page can be not loading", async(done) => {
    initialize({loading: false}, 'aire-page(loading.bind="loading")');
    await component.create(bootstrap);
    let loader = document.querySelector('.aire-page .loader');
    expect(loader).toBeFalsy();
    done();
});