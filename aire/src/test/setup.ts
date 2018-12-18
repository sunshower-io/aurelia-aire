/**
 * Don't modify this file unless you really know what you're doing.  It's a
 * bit of a hack, but it mostly works.  Import and definition order are IMPORTANT
 */

import 'reflect-metadata';
import 'aurelia-polyfills';
import { Options }   from 'aurelia-loader-nodejs';
import { globalize } from 'aurelia-pal-nodejs';
import 'isomorphic-fetch';
import * as path     from 'path';

require('jsdom-global')();
require('mutationobserver-shim');

Object.defineProperty(global, 'MutationObserver', {
  value: function() {
    this.observe = function() {

    }

  },
  writable:true

});


import * as UIkit    from 'uikit';
import {Aire}        from "aire/core/application";


Options.relativeToDir = path.join(__dirname, '../../dist');
globalize();
Object.defineProperty(global, 'requestAnimationFrame', {
  value: function() {

  },
  writable:true

});

Aire.initialize(UIkit.util);
