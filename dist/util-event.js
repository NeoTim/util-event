(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var event = require('./util-event');

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    window.event = factory();
  }
})(function () {

  return event;
});

},{"./util-event":2}],2:[function(require,module,exports){
'use strict';

var event = {
  bind: function bind(element, name, listener) {
    element.addEventListener(name, listener, false);
  },

  unbind: function unbind(element, name, listener) {
    element.removeEventListener(name, listener, false);
  },

  once: function once(element, name, listener) {
    var that = this;
    var once = function once(e) {
      that.unbind(element, name, once);
      listener(e);
    };

    that.bind(element, name, once);
  }
};

module.exports = event;

},{}]},{},[1]);
