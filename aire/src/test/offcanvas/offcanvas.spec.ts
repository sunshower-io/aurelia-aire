import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";

let component : any;



afterEach(() => {
    component.dispose();
});



test('offcanvas must be initializable', async () => {
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

});

test('offcanvas must have a slot', async () => {
    component = newComponent(`
  aire-offcanvas
    h1 wabbo 
  `, {}, 'offcanvas/offcanvas');

    await component.create(bootstrap);

    let h1 = document.querySelector('h1');
    expect(h1.textContent).toBe("wabbo");
});

test('offcanvas can take a host element', async () => {
    component = newComponent(`
main.aire-body(ref="body")
aire-offcanvas(host.bind="body")
  `, {}, 'offcanvas/offcanvas');

    await component.create(bootstrap);

    let body = document.querySelector('main.aire-body').outerHTML,
        offcanvas = body.includes('uk-offcanvas-bar'); //should be appended instead of inside aire-offcanvas
    console.log(document.body.outerHTML);
    expect(offcanvas).toBeTruthy();
});

test('offcanvas can take a host string selector', async () => {
    component = newComponent(`
main.aire-body
aire-offcanvas(host="main.aire-body")
  `, {}, 'offcanvas/offcanvas');

    await component.create(bootstrap);

    let body = document.querySelector('main.aire-body').outerHTML,
        offcanvas = body.includes('uk-offcanvas-bar'); //should be appended instead of inside aire-offcanvas
    console.log(body);
    expect(offcanvas).toBeTruthy();
});