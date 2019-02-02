import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}       from "test/render";


let component : any;


function initialize(bindingContext : any, template : string) {
    component = newComponent(template, bindingContext, 'label/label');
}

afterEach ( () => {
    component.dispose();
});

test( "a label can be generated", async(done) => {
    initialize( {}, `aire-label`);
    await component.create(bootstrap);
    let label = document.querySelector( '.uk-label');
    expect(label).toBeTruthy();
    done();
});


test( "a default label can appear", async(done) => {
    initialize( {}, `aire-label(default)`);
    await component.create(bootstrap);
    let label = document.querySelector( '.uk-label-default');
    expect(label).toBeTruthy();
    done();
});

test( "a warning label can appear", async(done) => {
    initialize( {}, `aire-label(warning)`);
    await component.create(bootstrap);
    let label = document.querySelector( '.uk-label-warning');
    expect(label).toBeTruthy();
    done();
});


test( "a danger label can appear", async(done) => {
    initialize({}, `aire-label(danger)`);
    await component.create(bootstrap);
    let label = document.querySelector('.uk-label-danger');
    expect(label).toBeTruthy();
    done();
});

test( "a success label can appear", async(done) => {
    initialize( {}, `aire-label(success)`);
    await component.create(bootstrap);
    let label = document.querySelector('.uk-label-success');
    expect(label).toBeTruthy();
    done();
});

test( "the desired string appears in the label", async(done) => {
    initialize( {textLabel : "I am a label."}, `aire-label(label.bind="textLabel")`);
    await component.create(bootstrap);
    let label = document.querySelector( '.uk-label');
    expect(label.textContent).toBe("I am a label.");
    done();
});