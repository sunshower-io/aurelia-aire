import {bootstrap}     from 'aurelia-bootstrapper';
import {newComponent}  from "test/render";
import {AireOffCanvas} from "aire/offcanvas/offcanvas";

let component : any;



afterEach(() => {
    component.dispose();
});



test('offcanvas must be initializable', async (done) => {
    component = newComponent(
        `
    aire-offcanvas
    `,
        {},
        'offcanvas/offcanvas'
    );
    await component.create(bootstrap);

    let element = document.querySelector('.uk-offcanvas');
    expect(element).toBeTruthy();
    done();

});

test('offcanvas must have a slot', async (done) => {
    component = newComponent(`
  aire-offcanvas
    h1 wabbo 
  `, {}, 'offcanvas/offcanvas');

    await component.create(bootstrap);

    let h1 = document.querySelector('h1');
    expect(h1.textContent).toBe("wabbo");
    done();
});

test('offcanvas can take a parent element', async (done) => {
    component = newComponent(`
main.aire-body(ref="body")
aire-offcanvas(parent.bind="body")
  `, {}, 'offcanvas/offcanvas');

    await component.create(bootstrap);
    let oc: AireOffCanvas = component.viewModel;
    oc.show();
    let body = document.querySelector('main.aire-body').outerHTML,
        offcanvas = body.includes('uk-offcanvas-bar');
    console.log(document.body.outerHTML);
    expect(offcanvas).toBeTruthy();
  done();
});

test('offcanvas can take a parent string selector', async (done) => {
    component = newComponent(`
main.aire-body
aire-offcanvas(parent="main.aire-body")
  `, {}, 'offcanvas/offcanvas');

    await component.create(bootstrap);
    let oc: AireOffCanvas = component.viewModel;
    oc.show();
    let body = document.querySelector('main.aire-body').outerHTML,
        offcanvas = body.includes('uk-offcanvas-bar');
    console.log(body);
    expect(offcanvas).toBeTruthy();
    done();
});

test('offcanvas parent gets container class', async (done) => {
    component = newComponent(`
main.aire-body
aire-offcanvas(parent="main.aire-body")
  `, {}, 'offcanvas/offcanvas');

    await component.create(bootstrap);
    let oc: AireOffCanvas = component.viewModel;
    oc.show();
    let body = document.querySelector('main.aire-body.uk-offcanvas-container');
    expect(body).toBeTruthy();
    done();
});

test.skip('offcanvas can be pushed down by parent', async (done) => {
    component = newComponent(`
main.aire-body
aire-offcanvas(parent="main.aire-body" push)
  `, {}, 'offcanvas/offcanvas');
    await component.create(bootstrap);
    let oc: AireOffCanvas = component.viewModel;
    oc.show();
    let offcanvas = document.querySelector('.uk-offcanvas'),
        style = offcanvas.getAttribute("style");
    console.log(style);
    expect(style.indexOf("top")).toBeGreaterThan(-1);
    done();

});