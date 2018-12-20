
import {bootstrap}      from 'aurelia-bootstrapper';
import {newComponent}         from "test/render";

let component : any;



afterEach(() => {
  component.dispose();
});



test('tabs must be initializable', async (done) => {
  component = newComponent(
    `
    aire-tab-panel
    `,
    {},
    'tabs/tab-panel'
  );
  await component.create(bootstrap);

  let tabEl = document.querySelector('.aire-tab-panel');
  expect(tabEl).toBeTruthy();
  done();

});

test('a tab-panel must have tabs definable as children', async (done) => {
  component = newComponent(`
  aire-tab-panel
    aire-tab(title.bind="frapper")
      h1 \${frapper} 
  `, {frapper: "wabbo"}, 'tabs/tab-panel', 'tabs/tab');

  await component.create(bootstrap);

  let h1 = document.querySelector('h1');
  expect(h1.textContent).toBe("wabbo");
  done();
});