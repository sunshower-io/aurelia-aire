import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `
  aire-icon(icon.bind="icon" classes.bind="classes")
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

test("an icon can take classes in addition to an icon font", async (done) => {
    initialize({icon: "fa", classes: "my-class"});
    await component.create(bootstrap);
    let icon = document.querySelector('span.aire-icon') as HTMLSpanElement;
    expect(icon).toBeTruthy();
    expect(icon.classList.contains("fa")).toBeTruthy();
    expect(icon.classList.contains("my-class")).toBeTruthy();
    done();
});

test("an icon can take classes in addition to an image", async (done) => {
    initialize({icon: "heck.png", classes: "my-class"});
    await component.create(bootstrap);
    let icon = document.querySelector('img.aire-icon') as HTMLImageElement;
    expect(icon).toBeTruthy();
    expect(icon.src).toContain("heck.png");
    expect(icon.classList.contains("my-class")).toBeTruthy();
    done();
});