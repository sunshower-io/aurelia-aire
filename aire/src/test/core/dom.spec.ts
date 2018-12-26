import {$, dom, Id} from 'aire/core/dom';

let el: HTMLDivElement;
beforeEach(() => {
  el = $.createElement('div');
});

afterEach(() => {
  el.remove();
});

test('ensure is-ancestor returns true when element is ancestor', () => {
  let el = $.createElement('div'),
    child = $.createElement('div');
  el.append(child);
  expect(dom.isAncestor(child, el)).toBeTruthy();
});



test('ensure is-ancestor locates itself', () => {
  let el = $.createElement('div');
  expect(dom.isAncestor(el, el)).toBeTruthy();
});



test('ensure decorate adds attribute', () => {
  el.classList.add('test');
  dom.decorate(el, 'test', 'test');
  expect(el.classList.contains('test')).toBeTruthy();
});

test('ensure generated decorates object correctly', () => {

  class A {
    @Id
    s:string;
  }


  let a = new A();
  let b = a.s;
  expect(b.startsWith('aire')).toBeTruthy();
});