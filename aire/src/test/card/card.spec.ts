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


test('card can take a header argument', async (done) => {
    initialize(`aire-card(header)`);

    await component.create(bootstrap);

    let header = document.querySelector('.uk-card-header');
    expect(header.classList.contains("aurelia-hide")).toBeFalsy();

    done();
});

test('card can take a header slot', async (done) => {
    initialize(`
aire-card(header)
    p(slot="header") Henlo
    `);

    await component.create(bootstrap);

    let p = document.querySelector('.uk-card-header p');
    expect(p.textContent).toBe("Henlo");
    done();
});

test('card can take a footer argument', async (done) => {
    initialize(`aire-card(footer)`);

    await component.create(bootstrap);

    let header = document.querySelector('.uk-card-footer');
    expect(header.classList.contains("aurelia-hide")).toBeFalsy();

    done();
});

test('card can take a footer slot', async (done) => {
    initialize(`
aire-card(footer)
    p(slot="footer") Toodles
    `);

    await component.create(bootstrap);

    let p = document.querySelector('.uk-card-footer p');
    expect(p.textContent).toBe("Toodles");
    done();
});

test("card will not show header or footer without arguments", async(done) => {
    initialize(`aire-card`);

    await component.create(bootstrap);

    let header = document.querySelector('.uk-card-header'),
        footer = document.querySelector('.uk-card-footer');

    expect(header.classList.contains("aurelia-hide")).toBeTruthy();
    expect(footer.classList.contains("aurelia-hide")).toBeTruthy();
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