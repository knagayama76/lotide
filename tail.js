"use strict";

const tail = function (arr) {
  let newArr = [];
  newArr = arr.shift();
  return newArr;
};

module.exports = tail;
