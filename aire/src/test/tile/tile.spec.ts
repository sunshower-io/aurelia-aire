import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap} from 'aurelia-bootstrapper';
import {newComponent} from "test/render";


let component : any;


function initialize(bindingContext : any, template : string ) {
    component = newComponent(template, bindingContext, 'tile/tile');
}

afterEach ( () => {
    component.dispose();
});

test( "a tile can show up on the screen", async(done) => {
   initialize( {}, `aire-tile`);
   await component.create(bootstrap);
   let tile = document.querySelector( '.uk-tile');
   expect(tile).toBeTruthy();
   done();
});

test( "a tile can display designated content", async(done) => {
   initialize( {}, `
aire-tile
    p Tile Content
    `);
   await component.create(bootstrap);
   console.log(document.body.outerHTML);
   let slot= document.querySelector( '.uk-tile p');
    expect(slot.textContent).toBe("Tile Content");
   done();
});


test("a secondary tile can display a secondary background", async(done) => {
    initialize({}, `aire-tile(secondary)`);
    await component.create(bootstrap);
    let tile = document.querySelector( '.uk-tile-secondary');
    expect(tile).toBeTruthy();
    done();
});

test( "a primary tile will show a primary background", async(done) => {
   initialize({}, `aire-tile(primary)`);
   await component.create(bootstrap);
   let tile = document.querySelector( '.uk-tile-primary');
   expect(tile).toBeTruthy();
   done();
});

test( "a muted tile will show a muted background", async(done) => {
   initialize( {}, `aire-tile(muted)`);
   await component.create(bootstrap);
   let tile = document.querySelector( '.uk-tile-muted');
   expect(tile).toBeTruthy();
   done();
});

test("a default tile will have a default background", async(done) => {
    initialize({}, `aire-tile(default)`);
    await component.create(bootstrap);
    let tile = document.querySelector( '.uk-tile-default');
    expect(tile).toBeTruthy();
    done();
});

test( "a tile will have no padding", async(done) => {
    initialize({}, `aire-tile(padding-remove)`);
    await component.create(bootstrap);
    let tile = document.querySelector( '.uk-padding-remove');
    expect(tile).toBeTruthy();
    done();
});

test( "a tile will have small padding", async(done) => {
    initialize({}, `aire-tile(padding-small)`);
    await component.create(bootstrap);
    let tile = document.querySelector( '.uk-padding-small');
    expect(tile).toBeTruthy();
    done();
});

test("a tile will have large padding", async(done) => {
    initialize({}, `aire-tile(padding-large)`);
    await component.create(bootstrap);
    let tile = document.querySelector( '.uk-padding-large');
    expect(tile).toBeTruthy();
    done();
});


test( "a tile can have large padding and a secondary background", async(done) => {
    initialize({}, `aire-tile(secondary padding-large)`);
    await component.create(bootstrap);
    let tile = document.querySelector( '.uk-tile-secondary.uk-padding-large');
    expect(tile).toBeTruthy();
    done();
});

