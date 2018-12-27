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

test("ensure pathTo returns selector string if supplied", () => {
  let hostOrSelector = ".myClass";
  expect(dom.pathTo(hostOrSelector)).toBe(hostOrSelector);
});

test("ensure pathTo returns current element if id is present", () => {
  el.setAttribute("id", "myId");
  expect(dom.pathTo(el)).toBe("div#myId");
});

test("ensure pathTo traverses up DOM to get best selector sensibly", () => {
  let child = $.createElement('div'),
      grandChild = $.createElement('div');
  el.append(child);
  child.append(grandChild);
  el.setAttribute("id", "myId");
  expect(dom.pathTo(grandChild)).toBe("div#myId > div > div")
});

test("ensure decorate-to applies class when class name is provided", () => {
    let sourceEl = $.createElement('div'),
        el = $.createElement('div');
    sourceEl.setAttribute("something", "something");
    dom.decorateTo(sourceEl, el, "something", "myClass");
    expect(el.classList).toContain("myClass");
});

test("ensure decorate-to applies decorator as class name", () => {
    let sourceEl = $.createElement('div'),
        el = $.createElement('div');
    sourceEl.setAttribute("something", "something");
    dom.decorateTo(sourceEl, el, "something");
    expect(el.classList).toContain("something");
});

test('ensure decorate adds class with no className', () => {
  el.setAttribute("test", "");
  dom.decorate(el, 'test');
  expect(el.classList.contains('test')).toBeTruthy();
});

test('ensure decorate adds class with className', () => {
    el.setAttribute("test", "");
    dom.decorate(el, 'test', 'testy');
    expect(el.classList.contains('testy')).toBeTruthy();
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
