import {bootstrap}     from 'aurelia-bootstrapper';
import {newComponent}  from "test/render";

let component : any;



afterEach(() => {
    component.dispose();
});

function initialize(template : string, bindingContext ?: any) {
    component = newComponent(template,
        bindingContext,
        'card/card'
    );
}

test('card must be initializable', async (done) => {
    initialize(`aire-card`);
    
    
    await component.create(bootstrap);

    let element = document.querySelector('.uk-card');
    expect(element).toBeTruthy();
    done();

});

test('card must have a default slot', async (done) => {
    initialize(`
aire-card
    p wabbo
    `);

    await component.create(bootstrap);

    let p = document.querySelector('p');
    expect(p.textContent).toBe("wabbo");
    done();
});

test('card can bind a title', async (done) => {
    initialize(`aire-card(title.bind="title")`, {title: "Welcome!"});

    await component.create(bootstrap);

    let h3 = document.querySelector('h3');
    expect(h3.textContent).toBe("Welcome!");
    done();
});

test('card does not include title if none in binding context', async (done) => {
    initialize(`aire-card`);

    await component.create(bootstrap);

    let h3 = document.querySelector('h3');
    expect(h3).toBeFalsy();
    done();
});




test('card can take a default argument', async (done) => {
    initialize(`aire-card(default)`);

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-default');
    expect(card).toBeTruthy();
    done();
});

test('card can take a primary argument', async (done) => {
    initialize(`aire-card(primary)`);

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-primary');
    expect(card).toBeTruthy();
    done();
});

test('card can take a secondary argument', async (done) => {
    initialize(`aire-card(secondary)`);

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-secondary');
    expect(card).toBeTruthy();
    done();
});

test('card can take a hover argument', async (done) => {
    initialize(`aire-card(hover)`);

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-hover');
    expect(card).toBeTruthy();
    done();
});

test('card can take a padding argument', async (done) => {
    initialize(`aire-card(padding)`);

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-body');
    expect(card).toBeTruthy();
    done();
});

test('card can take a padding-small argument', async (done) => {
    initialize(`aire-card(padding-small)`);

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-body.uk-card-small');
    expect(card).toBeTruthy();
    done();
});

test('card can take a padding-large argument', async (done) => {
    initialize(`aire-card(padding-large)`);

    await component.create(bootstrap);

    let card = document.querySelector('.uk-card.uk-card-body.uk-card-large');
    expect(card).toBeTruthy();
    done();
});