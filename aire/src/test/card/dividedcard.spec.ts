import {bootstrap}     from 'aurelia-bootstrapper';
import {newComponent}  from "test/render";

let component : any;



afterEach(() => {
    component.dispose();
});



test('divided card must be initializable', async (done) => {
    component = newComponent(
        `
    aire-divided-card
    `, {}, 'card/dividedcard');
    
    await component.create(bootstrap);

    let element = document.querySelector('.uk-card');
    expect(element).toBeTruthy();
    done();

});

test('divided card must have a default slot', async (done) => {
    component = newComponent(`
  aire-divided-card
    p wabbo 
  `, {}, 'card/dividedcard');

    await component.create(bootstrap);

    let p = document.querySelector('.uk-card-body');
    expect(p.textContent).toBe("wabbo");
    done();
});

test('divided card can include a title', async (done) => {
    component = newComponent(`
    aire-divided-card(title.bind="title")
  `, {title: "Welcome!"}, 'card/dividedcard');

    await component.create(bootstrap);

    let h3 = document.querySelector('h3');
    expect(h3.textContent).toBe("Welcome!");
    done();
});

test('divided card does not include title if none in binding context', async (done) => {
    component = newComponent(`
    aire-divided-card(title.bind="title")
  `, {}, 'card/dividedcard');

    await component.create(bootstrap);

    let h3 = document.querySelector('h3');
    expect(h3).toBeFalsy();
    done();
});

test('divided card does not show header without header argument or title', async (done) => {
    component = newComponent(`
    aire-divided-card
  `, {}, 'card/dividedcard');

    await component.create(bootstrap);

    let header = document.querySelector('.uk-card-header') as HTMLElement;
    expect(header.classList.contains("aurelia-hide")).toBeTruthy();

    done();
});

test('divided card can take a header argument', async (done) => {
    component = newComponent(`
    aire-divided-card(header)
  `, {}, 'card/dividedcard');

    await component.create(bootstrap);

    let header = document.querySelector('.uk-card-header');
    expect(header.classList.contains("aurelia-hide")).toBeFalsy();

    done();
});

test('divided card can take a header slot', async (done) => {
    component = newComponent(`
    aire-divided-card(header)
        p(slot="header") Henlo
  `, {}, 'card/dividedcard');

    await component.create(bootstrap);

    let p = document.querySelector('.uk-card-header p');
    expect(p.textContent).toBe("Henlo");
    done();
});

test('divided card does not show footer without footer argument or title', async (done) => {
    component = newComponent(`
    aire-divided-card
  `, {}, 'card/dividedcard');

    await component.create(bootstrap);

    let footer = document.querySelector('.uk-card-footer');
    expect(footer.classList.contains("aurelia-hide")).toBeTruthy();
    done();
});

test('divided card can take a footer argument', async (done) => {
    component = newComponent(`
    aire-divided-card(footer)
  `, {}, 'card/dividedcard');

    await component.create(bootstrap);

    let footer = document.querySelector('.uk-card-footer');
    expect(footer.classList.contains("aurelia-hide")).toBeFalsy();
    done();
});

test('divided card has a footer slot', async (done) => {
    component = newComponent(`
    aire-divided-card(footer)
        p(slot="footer") Toodles
  `, {}, 'card/dividedcard');

    await component.create(bootstrap);

    let footer = document.querySelector('.uk-card-footer p');
    expect(footer.textContent).toBe("Toodles");
    done();
});

test('divided card can take a default argument', async (done) => {
    component = newComponent(`
    aire-divided-card(default)
  `, {}, 'card/dividedcard');

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-default');
    expect(card).toBeTruthy();
    done();
});

test('divided card can take a primary argument', async (done) => {
    component = newComponent(`
    aire-divided-card(primary)
  `, {}, 'card/dividedcard');

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-primary');
    expect(card).toBeTruthy();
    done();
});

test('divided card can take a secondary argument', async (done) => {
    component = newComponent(`
    aire-divided-card(secondary)
  `, {}, 'card/dividedcard');

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-secondary');
    expect(card).toBeTruthy();
    done();
});

test('divided card can take a hover argument', async (done) => {
    component = newComponent(`
    aire-divided-card(hover)
  `, {}, 'card/dividedcard');

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-hover');
    expect(card).toBeTruthy();
    done();
});

test('divided card can take a padding argument', async (done) => {
    component = newComponent(`
    aire-divided-card(padding)
  `, {}, 'card/dividedcard');

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-body');
    expect(card).toBeTruthy();
    done();
});

test('divided card can take a padding-small argument', async (done) => {
    component = newComponent(`
    aire-divided-card(padding-small)
  `, {}, 'card/dividedcard');

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-body.uk-card-small');
    expect(card).toBeTruthy();
    done();
});

test('divided card can take a padding-large argument', async (done) => {
    component = newComponent(`
    aire-divided-card(padding-large)
  `, {}, 'card/dividedcard');

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-body.uk-card-large');
    expect(card).toBeTruthy();
    done();
});