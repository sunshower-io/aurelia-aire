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

test( "a list can initialize as a ul", async(done) => {
    initialize( {}, `aire-list`);
    await component.create(bootstrap);
    let list = document.querySelector( 'ul.uk-list');
    expect(list).toBeTruthy();
    done();
});

test("a list can initialize as an ol", async(done) => {
    initialize( {}, `aire-list(ordered)`);
    await component.create(bootstrap);
    let list = document.querySelector('ol.uk-list');
    expect(list).toBeTruthy();
    done();
});


test( "a list has bullets", async(done) => {
    initialize(  {}, `aire-list(bullet)`);
    await component.create(bootstrap);
    let list = document.querySelector( 'ul.uk-list-bullet');
    expect(list).toBeTruthy();
    done();
});


test( "a list has dividers", async(done) => {
    initialize( {}, `aire-list(divider)`);
    await component.create(bootstrap);
    let list = document.querySelector( 'ul.uk-list-divider');
    expect(list).toBeTruthy();
    done();
});


test ( "a list has stripes between its elements", async (done) => {
    initialize( {}, `aire-list(striped)`);
    await component.create(bootstrap);
    let list = document.querySelector( 'ul.uk-list-striped');
    expect(list).toBeTruthy();
    done();
});

test( "a list has large spaces between its elements", async(done) => {
    initialize( {}, `aire-list(large)`);
    await component.create(bootstrap);
    let list = document.querySelector( 'ul.uk-list-large');
    expect(list).toBeTruthy();
    done();
});

test( "a list can have two styles", async(done) => {
    initialize({}, `aire-list(large bullet)`);
    await component.create(bootstrap);
    let list = document.querySelector( 'ul.uk-list-large.uk-list-bullet');
    expect(list).toBeTruthy();
    done();
});

test( "a list can have items", async(done) => {
    initialize( {array:["string"]}, `aire-list(items.bind="array")`);
    await component.create(bootstrap);
    let list = document.querySelector('ul.uk-list li');
    expect(list).toBeTruthy();
    done();
});

test( "a list can not have items", async(done) => {
    initialize({}, `aire-list`);
    await component.create(bootstrap);
    let list = document.querySelector('ul.uk-list li');
    expect(list).toBeFalsy();
    done();
});



test( "a list can not have items with an empty array", async(done) => {
    initialize({array:[]}, `aire-list(items.bind="array")`);
    await component.create(bootstrap);
    let list = document.querySelector( 'ul.uk-list li');
    expect(list).toBeFalsy();
    done();

});