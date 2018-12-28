import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}     from 'aurelia-bootstrapper';
import {newComponent}  from "test/render";

let component : any;


function initialize(bindingContext : any, template : string) {
    component = newComponent(template,
        bindingContext,
        'tabs/tab'
    );
}

test("a tab can initialize", async(done) => {
    initialize({}, `aire-tab`);
    await component.create(bootstrap);

    let tab = document.querySelector('.aire-tab');
    expect(tab).toBeTruthy();
    done();
});