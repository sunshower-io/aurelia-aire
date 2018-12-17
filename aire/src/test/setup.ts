import { Options }   from 'aurelia-loader-nodejs';
import { globalize } from 'aurelia-pal-nodejs';
import 'aurelia-polyfills';
import 'isomorphic-fetch';
import * as path     from 'path';
import {Aire}        from "aire/core/application";

Options.relativeToDir = path.join(__dirname, '../../dist');
globalize();

