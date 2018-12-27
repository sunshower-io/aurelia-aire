import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `aire-loader`;
    component = newComponent(template, bindingContext, 'loader/loader');
}

test("a loader should initialize", async(done) => {
    initialize({});
    await component.create(bootstrap);
    let loader = document.querySelector('.loader-container .loader');
    expect(loader).toBeTruthy();
    done();
});