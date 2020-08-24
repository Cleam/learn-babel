"use strict";

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.string.iterator");

function addAll() {
  return Array.from(arguments).reduce(function (a, b) {
    return a + b;
  });
}