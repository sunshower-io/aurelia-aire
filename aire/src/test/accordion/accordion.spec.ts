import 'reflect-metadata';
import 'aurelia-polyfills';

import {bootstrap}     from 'aurelia-bootstrapper';
import {newComponent}  from "test/render";
import {AireAccordion} from "aire/accordion/accordion";

let component : any;

function initialize(bindingContext : any, templateString ?: string) {
    let template = templateString ? templateString : `aire-accordion`;
    component = newComponent(template,
        bindingContext,
        'accordion/accordion', 'accordion/accordion-item'
    );
}

afterEach(() => {
    component.dispose();
});

test("an accordion should initialize", async(done) => {
    initialize({});
    await component.create(bootstrap);
    expect(document.querySelector('ul.aire-accordion')).toBeTruthy();
    done();
});

test("an accordion has a slot for elements", async(done) => {
    initialize({}, `
aire-accordion
    accordion-item
    accordion-item
`);
    await component.create(bootstrap);
    let items = document.querySelectorAll('ul.aire-accordion .uk-accordion-title');
    expect(items).toBeTruthy();
    expect(items.length).toBe(2);
    done();
});

test("an accordion should have a default animation", async(done) => {
    initialize({});
    await component.create(bootstrap);
    let accordion : AireAccordion = component.viewModel;
    expect(accordion.accordion["$props"].animation).toBeTruthy();
    done();
});

test("an accordion should have a bindable animation", async(done) => {
    initialize({animation: false}, `aire-accordion(animation.bind="animation")`);
    await component.create(bootstrap);
    let accordion : AireAccordion = component.viewModel;
    expect(accordion.accordion["$props"].animation[0]).toBeFalsy(); //uikit is wrapping this oddly despite correct options
    done();
});

test("an accordion should have a default collapsible", async(done) => {
    initialize({});
    await component.create(bootstrap);
    let accordion : AireAccordion = component.viewModel;
    expect(accordion.accordion["$props"].collapsible).toBeTruthy();
    done();
});

test("an accordion should have a bindable collapsible", async(done) => {
    initialize({collapsible: false}, `aire-accordion(collapsible.bind="collapsible")`);
    await component.create(bootstrap);
    let accordion : AireAccordion = component.viewModel;
    expect(accordion.accordion["$props"].collapsible).toBeFalsy();
    done();
});

test("an accordion should have a default duration", async(done) => {
    initialize({});
    await component.create(bootstrap);
    let accordion : AireAccordion = component.viewModel;
    expect(accordion.accordion["$props"].duration).toBe(200);
    done();
});

test("an accordion should have a bindable duration", async(done) => {
    initialize({duration: 450}, `aire-accordion(duration.bind="duration")`);
    await component.create(bootstrap);
    let accordion : AireAccordion = component.viewModel;
    expect(accordion.accordion["$props"].duration).toBe(450);
    done();
});

test("an accordion should have a default multiple", async(done) => {
    initialize({});
    await component.create(bootstrap);
    let accordion : AireAccordion = component.viewModel;
    expect(accordion.accordion["$props"].multiple).toBeFalsy();
    done();
});

test("an accordion should have a bindable multiple", async(done) => {
    initialize({multiple: true}, `aire-accordion(multiple.bind="multiple")`);
    await component.create(bootstrap);
    let accordion : AireAccordion = component.viewModel;
    expect(accordion.accordion["$props"].multiple).toBeTruthy();
    done();
});

test("an accordion should have a default transition", async(done) => {
    initialize({});
    await component.create(bootstrap);
    let accordion : AireAccordion = component.viewModel;
    expect(accordion.accordion["$props"].transition).toBe("ease");
    done();
});

test("an accordion should have a bindable transition", async(done) => {
    initialize({transition: 'step-start'}, `aire-accordion(transition.bind="transition")`);
    await component.create(bootstrap);
    let accordion : AireAccordion = component.viewModel;
    expect(accordion.accordion["$props"].transition).toBe("step-start");
    done();
});