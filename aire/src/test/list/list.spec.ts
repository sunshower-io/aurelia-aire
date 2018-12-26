import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";


let component : any;


function initialize(bindingContext : any, template : string) {
    component = newComponent(template, bindingContext, 'list/list');
}

afterEach(() => {
    component.dispose();
});

test( "a list can initialize", async(done) => {
    initialize( {}, `aire-list`);
    await component.create(bootstrap);
    let list = document.querySelector( 'ul.uk-list');
    expect(list).toBeTruthy();
    done();
});

test( "a list has bullets", async(done) => {
    initialize(  {}, `aire-list`);
    await component.create(bootstrap);
    let list = document.querySelector( 'uk-list-bullet');
    expect(list).toBeTruthy();
    done();
});


test( "a list has dividers", async(done) => {
    initialize( {}, `aire-list`);
    await component.create(bootstrap);
    let list = document.querySelector( 'uk-list-divider');
    expect(list).toBeTruthy();
    done();
});


test ( "a list has stripes between its elements", async (done) => {
    initialize( {}, `aire-list`);
    await component.create(bootstrap);
    let list = document.querySelector( 'uk-list-striped');
    expect(list).toBeTruthy();
    done();
});

test( "a list has large spaces between its elements", async(done) =>{
    initialize( {}, `aire-list`);
    await component.create(bootstrap);
    let list = document.querySelector( 'uk-list-large');
    expect(list).toBeTruthy();
    done();
});
