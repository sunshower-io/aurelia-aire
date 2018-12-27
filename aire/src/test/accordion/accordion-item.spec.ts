import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}     from 'aurelia-bootstrapper';
import {newComponent}  from "test/render";
import {AireAccordion} from "aire/accordion/accordion";

let component : any;

function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `accordion-item`;
    component = newComponent(template,
        bindingContext,
        'accordion/accordion', 'accordion/accordion-item'
    );
}

afterEach(() => {
    component.dispose();
});

test("an accordion item should initialize with a title", async(done) => {
    initialize({});
    await component.create(bootstrap);
    expect(document.querySelector('li .uk-accordion-title')).toBeTruthy();
    done();
});

test("an accordion item should initialize with content", async(done) => {
    initialize({});
    await component.create(bootstrap);
    expect(document.querySelector('li .uk-accordion-content')).toBeTruthy();
    done();
});

test("an accordion item has a bindable title", async(done) => {
    initialize({title: "Accordion Element"}, `accordion-item(title.bind="title")`);
    await component.create(bootstrap);
    let item = document.querySelector('.uk-accordion-title');
    expect(item.textContent).toBe("Accordion Element");
    done();
});

test("an accordion item should be able to be open", async(done) => {
    initialize({}, `accordion-item(open)`);
    await component.create(bootstrap);
    let item = document.querySelector('li.uk-open');
    expect(item).toBeTruthy();
    done();
});

test("an accordion item should not be open by default", async(done) => {
    initialize({});
    await component.create(bootstrap);
    let item = document.querySelector('li.uk-open');
    expect(item).toBeFalsy();
    done();
});