import {bootstrap}     from 'aurelia-bootstrapper';
import {newComponent}  from "test/render";

let component : any;



afterEach(() => {
    component.dispose();
});



test('basic card must be initializable', async (done) => {
    component = newComponent(
        `
    aire-basic-card
    `, {}, 'card/basiccard');
    
    await component.create(bootstrap);

    let element = document.querySelector('.uk-card');
    expect(element).toBeTruthy();
    done();

});

test('basic card must have a slot', async (done) => {
    component = newComponent(`
  aire-basic-card
    p wabbo 
  `, {}, 'card/basiccard');

    await component.create(bootstrap);

    let p = document.querySelector('p');
    expect(p.textContent).toBe("wabbo");
    done();
});

test('basic card can include a title', async (done) => {
    component = newComponent(`
    aire-basic-card(title.bind="title")
  `, {title: "Welcome!"}, 'card/basiccard');

    await component.create(bootstrap);

    let h3 = document.querySelector('h3');
    expect(h3.textContent).toBe("Welcome!");
    done();
});

test('basic card does not include title if none in binding context', async (done) => {
    component = newComponent(`
    aire-basic-card(title.bind="title")
  `, {}, 'card/basiccard');

    await component.create(bootstrap);

    let h3 = document.querySelector('h3');
    expect(h3).toBeFalsy();
    done();
});

test('basic card can take a default argument', async (done) => {
    component = newComponent(`
    aire-basic-card(default)
  `, {}, 'card/basiccard');

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-default');
    expect(card).toBeTruthy();
    done();
});

test('basic card can take a primary argument', async (done) => {
    component = newComponent(`
    aire-basic-card(primary)
  `, {}, 'card/basiccard');

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-primary');
    expect(card).toBeTruthy();
    done();
});

test('basic card can take a secondary argument', async (done) => {
    component = newComponent(`
    aire-basic-card(secondary)
  `, {}, 'card/basiccard');

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-secondary');
    expect(card).toBeTruthy();
    done();
});

test('basic card can take a hover argument', async (done) => {
    component = newComponent(`
    aire-basic-card(hover)
  `, {}, 'card/basiccard');

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-hover');
    expect(card).toBeTruthy();
    done();
});

test('basic card can take a padding argument', async (done) => {
    component = newComponent(`
    aire-basic-card(padding)
  `, {}, 'card/basiccard');

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-body');
    expect(card).toBeTruthy();
    done();
});

test('basic card can take a padding-small argument', async (done) => {
    component = newComponent(`
    aire-basic-card(padding-small)
  `, {}, 'card/basiccard');

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-body.uk-card-small');
    expect(card).toBeTruthy();
    done();
});

test('basic card can take a padding-large argument', async (done) => {
    component = newComponent(`
    aire-basic-card(padding-large)
  `, {}, 'card/basiccard');

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-body.uk-card-large');
    expect(card).toBeTruthy();
    done();
});