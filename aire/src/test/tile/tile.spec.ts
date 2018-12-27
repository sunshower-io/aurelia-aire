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
   initialize( {textLabel : "I am a tile."}, `aire-tile(tile.bind="textLabel")`);
   await component.create(bootstrap);
   let tile = document.querySelector( '.uk-tile');
   expect(tile.textContent).toBe("I am a tile.");
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
    let tile = document.querySelector( 'uk-tile-default');
    expect(tile).toBeTruthy();
    done();
});
