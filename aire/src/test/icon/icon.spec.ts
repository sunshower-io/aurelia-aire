import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `
  aire-icon(icon.bind="icon")
  `;
    component = newComponent(template, bindingContext, 'icon/icon');
}

afterEach(() => {
    component.dispose();
});

test("an icon should initialize with an image", async (done) => {
    initialize({icon: 'heck.png'});
    await component.create(bootstrap);
    let icon = document.querySelector('img.aire-icon') as HTMLImageElement;
    expect(icon).toBeTruthy();
    expect(icon.src).toContain("heck.png");
    done();
});

test("a icon should initialize with a span", async (done) => {
    initialize({icon : "fa"});
    await component.create(bootstrap);
    let icon = document.querySelector('span.aire-icon') as HTMLSpanElement;
    expect(icon).toBeTruthy();
    expect(icon.classList.contains("fa")).toBeTruthy();
    done();
});