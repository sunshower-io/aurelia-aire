import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}     from 'aurelia-bootstrapper';
import {newComponent}  from "test/render";
import {AireDropdown} from "aire/dropdown/dropdown";
import {$} from "aire/core/dom";

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

test("a dropdown should have a default mode", async(done) => {
    initialize({}, `aire-dropdown`);
    await component.create(bootstrap);
    let dropdown: AireDropdown = component.viewModel;
    expect(dropdown.dropdown["$props"].mode.length).toBe(2);
    done();
});

test("a dropdown should have a bindable mode", async(done) => {
    initialize({}, `aire-dropdown(mode="click")`);
    await component.create(bootstrap);
    let dropdown: AireDropdown = component.viewModel;
    expect(dropdown.dropdown["$props"].mode[0]).toBe("click");
    done();
});

test("a dropdown should have a default position", async(done) => {
    initialize({}, `aire-dropdown`);
    await component.create(bootstrap);
    let dropdown: AireDropdown = component.viewModel;
    expect(dropdown.dropdown["$props"].pos).toBe("bottom-left");
    done();
});

test("a dropdown should have a bindable position", async(done) => {
    initialize({}, `aire-dropdown(position="left-center")`);
    await component.create(bootstrap);
    let dropdown: AireDropdown = component.viewModel;
    expect(dropdown.dropdown["$props"].pos).toBe("left-center");
    done();
});

test("a dropdown should have a default toggle", async(done) => {
    initialize({}, `aire-dropdown`);
    await component.create(bootstrap);
    let dropdown: AireDropdown = component.viewModel;
    expect(dropdown.dropdown["$props"].toggle).toBe("- *");
    done();
});

test("a dropdown should have a bindable toggle as a string", async(done) => {
    initialize({}, `aire-dropdown(toggle="#someId")`);
    await component.create(bootstrap);
    let dropdown: AireDropdown = component.viewModel;
    expect(dropdown.dropdown["$props"].toggle).toBe("#someId");
    done();
});

test("a dropdown should have a bindable toggle as an element", async(done) => {
    let toggler = $.createElement('div');
    toggler.setAttribute("id", "someId");
    initialize({toggle: toggler}, `aire-dropdown(toggle.bind="toggle")`);
    await component.create(bootstrap);
    let dropdown: AireDropdown = component.viewModel;
    expect(dropdown.dropdown["$props"].toggle).toContain("#someId");
    done();
});