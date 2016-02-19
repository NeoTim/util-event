'use strict';

var event = require('./util-event');

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof window === 'object') {
    window.event = factory();
  }
}(function() {

  return event;
}));
