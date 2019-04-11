/* Load polyfill:
* This file and its dependencies get bundled into the "polyfills" chunk by WebPack and loaded as first scripts.
* Add loading code of further polyfills in here as needed. */


import 'es6-symbol/implement';
import 'es6-promise/auto';
import '@babel/polyfill'; 
// import 'raf/polyfill'; 
import 'eventsource-polyfill';
import 'array.prototype.flat';