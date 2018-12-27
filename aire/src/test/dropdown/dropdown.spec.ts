import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}     from 'aurelia-bootstrapper';
import {newComponent}  from "test/render";

let component : any;


function initialize(bindingContext : any, template : string) {
    component = newComponent(template,
        bindingContext,
        'dropdown/dropdown'
    );
}

afterEach(() => {
    component.dispose();
});

test("a dropdown should initialize", async(done) => {
    initialize({}, `aire-dropdown`);
    await component.create(bootstrap);
    expect(document.querySelector('.uk-dropdown')).toBeTruthy();
    done();
});