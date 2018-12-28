import {
  bindable,
  customElement,
  TemplatingEngine
}                  from 'aurelia-framework';
import * as pretty from 'pretty';
import * as prism  from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css!';
import 'prismjs/components/prism-pug';
import 'prismjs/themes/prism.css!';
import 'prismjs/themes/prism-okaidia.css!';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import {Router}    from "aurelia-router";

@customElement('component-section')
export class ComponentSection {

  @bindable
  section : any;


  formats = ['demo', 'html', 'pug'];

  constructor(readonly router: Router, readonly engine: TemplatingEngine) {

  }

  formatFor(fmt, ex, el) {
    let p = prism as any,
      code = ex[fmt];
    if (fmt === 'html') {
      let p = pretty as any;
      code = p(code);
    }

    if (fmt != 'demo') {
      let c = p.Prism.highlight(code, p.Prism.languages[fmt], fmt);
      setTimeout(() => {
        if (el) {
          el.innerHTML = c;
        }
      }, 100);
    }
  }


  createDemo(ex: any, el:HTMLElement) {
    let htmlstr = ex['html'],
      engine = this.engine;
    el.innerHTML = htmlstr;
    setTimeout(() => {
      engine.enhance({
        element: el,
        bindingContext: {router: this.router},
      });
    }, 500);

  }
}