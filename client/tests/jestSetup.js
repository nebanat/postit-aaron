/* eslint-disable import/no-extraneous-dependencies */
import Enzyme, { shallow, render, mount } from 'enzyme';
import $ from 'jquery';
import Adapter from 'enzyme-adapter-react-16';
import LocalStorage from './__mocks__/localStorage';

// This file is written in ES5 since it's not transpiled by Babel.
// This file does the following:
// 1. Sets Node environment variable
// 2. Registers babel for transpiling our code for testing
// 3. Disables Webpack-specific features that Mocha doesn't understand.
// 4. Requires jsdom so we can test via an in-memory DOM in Node
// 5. Sets up global vars that mimic a browser.

/* eslint-disable no-var */

/* This setting assures the .babelrc dev config (which includes
 hot module reloading code) doesn't apply for tests.
 But also, we don't want to set it to production here for
 two reasons:
 1. You won't see any PropType validation warnings when
 code is running in prod mode.
 2. Tests will not display detailed error messages
 when running against production version code
 */
process.env.NODE_ENV = 'test';

// Register babel so that it will transpile ES6 to ES5
// before our tests run.
// require('babel-register')();
const { spy } = require('sinon');

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.

// React 15 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
require.extensions['.css'] = function () { return null; };
require.extensions['.png'] = function () { return null; };
require.extensions['.jpg'] = function () { return null; };

// Configure JSDOM and set global variables
// to simulate a browser environment for tests.
var jsdom = require('jsdom');

const { JSDOM } = jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

const { document } = (new JSDOM('')).window;

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.document = document;
global.window = document.defaultView;
global.localStorage = new LocalStorage();
global.Materialize = window;
global.Materialize = { toast: () => {} };
global.swal = Promise.resolve();
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};

global.$ = $;
global.jQuery = $;
$.prototype.sideNav = () => {};
$.prototype.modal = () => {};
$.prototype.dropdown = () => {};

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

var documentRef = document; // eslint-disable-line no-undef
